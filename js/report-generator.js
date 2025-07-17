// js/report-generator.js - The IC Report Generation Engine for the Navigator App (Corrected v3)

class ReportGenerator {
    constructor(state) {
        this.state = state;
        this.companyId = state.selectedCompanyId;
        this.selections = state.diligenceWorkspace.itemSelections[this.companyId] || {};

        this.doc = new window.jspdf.jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
        this.pageWidth = this.doc.internal.pageSize.getWidth();
        this.pageHeight = this.doc.internal.pageSize.getHeight();
        this.margin = 15;
        this.cursorY = this.margin;
        this.pageNumber = 1;
    }

    // --- PUBLIC METHOD ---
    generate() {
        this._drawCoverPage();
        this._addPage();
        this._drawRecommendation();
        this._drawThesis();
        this._drawRisksAndLevers();
        this._drawDetailedFindings();

        this._addPageNumbers();
        this.doc.save(`IC_Report_${this.companyId}_${new Date().toISOString().slice(0,10)}.pdf`);
    }

    // --- PRIVATE HELPER METHODS ---
    _addPage() { this.doc.addPage(); this.pageNumber++; this.cursorY = this.margin; this._drawHeader(); }
    _checkNewPage(requiredHeight) { if (this.cursorY + requiredHeight > this.pageHeight - this.margin) { this._addPage(); } }
    
    _drawCoverPage() {
        const header = workspaceHeaders[this.companyId];
        this.doc.setFont('helvetica', 'bold');
        this.doc.setFontSize(28);
        this.doc.text('Investment Committee Report', this.pageWidth / 2, this.pageHeight / 2 - 20, { align: 'center' });
        this.doc.setFontSize(20);
        this.doc.text(`Project: ${header.title}`, this.pageWidth / 2, this.pageHeight / 2 - 10, { align: 'center' });
        this.doc.setFont('helvetica', 'normal');
        this.doc.setFontSize(12);
        this.doc.text(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), this.pageWidth / 2, this.pageHeight / 2 + 5, { align: 'center' });
        this.doc.setTextColor(150);
        this.doc.text('CONFIDENTIAL', this.pageWidth / 2, this.pageHeight - 20, { align: 'center' });
        this.doc.setTextColor(0);
    }

    _drawHeader() {
        const header = workspaceHeaders[this.companyId];
        this.doc.setFont('helvetica', 'bold');
        this.doc.setFontSize(10);
        this.doc.text(`IC Memo: ${header.title}`, this.margin, 10);
        this.doc.text('CONFIDENTIAL', this.pageWidth - this.margin, 10, { align: 'right' });
        this.doc.setDrawColor(200);
        this.doc.line(this.margin, 12, this.pageWidth - this.margin, 12);
        this.cursorY = this.margin + 5;
    }

    _addPageNumbers() {
        const totalPages = this.doc.internal.getNumberOfPages();
        for (let i = 2; i <= totalPages; i++) {
            this.doc.setPage(i);
            this.doc.setFont('helvetica', 'normal');
            this.doc.setFontSize(9);
            this.doc.text(`Page ${i - 1} of ${totalPages - 1}`, this.pageWidth - this.margin, this.pageHeight - 10, { align: 'right' });
        }
    }

    _drawSectionTitle(title) {
        this._checkNewPage(20);
        this.doc.setFont('helvetica', 'bold');
        this.doc.setFontSize(16);
        this.doc.text(title, this.margin, this.cursorY);
        this.doc.setDrawColor(0);
        this.doc.setLineWidth(0.5);
        this.doc.line(this.margin, this.cursorY + 2, this.pageWidth - this.margin, this.cursorY + 2);
        this.cursorY += 12;
    }

    _drawRecommendation() {
        this._drawSectionTitle('1. Recommendation');
        const flaggedItems = this._getItemsByToggle('ic').filter(item => item.severity);
        let recommendation = "RECOMMENDED FOR INVESTMENT";
        let color = [34, 139, 34]; // Green
        if (flaggedItems.length > 1) {
            recommendation = "PROCEED WITH CAUTION";
            color = [217, 119, 6]; // Amber
        }
        if (flaggedItems.some(r => r.severity === 'CRITICAL')) {
            recommendation = "SIGNIFICANT RISKS IDENTIFIED";
            color = [220, 38, 38]; // Red
        }
        this.doc.setFillColor(...color);
        this.doc.rect(this.margin, this.cursorY, this.pageWidth - (this.margin * 2), 15, 'F');
        this.doc.setFont('helvetica', 'bold');
        this.doc.setFontSize(14);
        this.doc.setTextColor(255);
        this.doc.text(recommendation, this.pageWidth / 2, this.cursorY + 9, { align: 'center' });
        this.cursorY += 25;
        this.doc.setTextColor(0);
    }

    _drawThesis() {
        this._drawSectionTitle('2. Investment Thesis');
        const thesisText = workspaceHeaders[this.companyId].priorities.text.replace(/<strong>/g, '').replace(/<\/strong>/g, '');
        this.doc.setFont('helvetica', 'normal');
        this.doc.setFontSize(11);
        const splitText = this.doc.splitTextToSize(thesisText, this.pageWidth - (this.margin * 2));
        this.doc.text(splitText, this.margin, this.cursorY);
        this.cursorY += (splitText.length * 5) + 10;
    }

    _drawRisksAndLevers() {
        this._drawSectionTitle('3. Summary of Risks & Value Levers');
        const risks = this._getItemsByToggle('ic').filter(item => item.severity);
        const levers = this._getItemsByToggle('ic').filter(item => item.impact);
        const tableBody = [];
        const maxLength = Math.max(risks.length, levers.length);
        for (let i = 0; i < maxLength; i++) {
            const riskTitle = risks[i] ? risks[i].title : '';
            const leverTitle = levers[i] ? levers[i].title : '';
            tableBody.push([riskTitle, leverTitle]);
        }
        this._checkNewPage(maxLength * 10 + 20);
        this.doc.autoTable({
            head: [['Key Risks Identified', 'Proposed Value Creation Levers']],
            body: tableBody,
            startY: this.cursorY,
            theme: 'grid',
            headStyles: { fillColor: [9, 26, 45], textColor: 255, fontStyle: 'bold' },
            styles: { fontSize: 10, cellPadding: 2 },
        });
        this.cursorY = this.doc.autoTable.previous.finalY + 10;
    }

    _drawDetailedFindings() {
        this._drawSectionTitle('4. Detailed Diligence Findings');
        const flaggedItems = this._getItemsByToggle('ic').filter(item => item.severity);
        flaggedItems.forEach((item, index) => {
            const fullAnomaly = techflow_anomalies.find(a => a.id === item.id);
            if (!fullAnomaly) return;

            this._checkNewPage(50);
            this.doc.setFont('helvetica', 'bold');
            this.doc.setFontSize(12);
            this.doc.text(`4.${index + 1} Finding: ${fullAnomaly.title.split(': ')[1]}`, this.margin, this.cursorY);
            this.cursorY += 8;
            this.doc.autoTable({
                body: [
                    ['Severity', fullAnomaly.severity],
                    ['Impact', fullAnomaly.impact],
                    ['Source Docs', fullAnomaly.sourceDocuments.join(', ')]
                ],
                startY: this.cursorY,
                theme: 'plain',
                styles: { fontSize: 10, cellPadding: 1.5 },
                columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } }
            });
            this.cursorY = this.doc.autoTable.previous.finalY + 5;
            this.doc.setFont('helvetica', 'bold');
            this.doc.text('Agent Analysis:', this.margin, this.cursorY);
            this.cursorY += 5;
            this.doc.setFont('helvetica', 'normal');
            const splitText = this.doc.splitTextToSize(fullAnomaly.analysis, this.pageWidth - (this.margin * 2));
            this.doc.text(splitText, this.margin, this.cursorY);
            this.cursorY += (splitText.length * 5) + 10;
        });
    }

    // **FIX**: This helper function now correctly gets items from the application state
    // instead of a hardcoded list.
    _getAllSelectableItems() {
        // Get the actual flagged risks from the state
        const actualFlaggedRisks = Object.values(this.state.diligenceWorkspace.keyRisks);
        
        // Combine them with the other static items
        return [
            ...strategicValueLevers_v2, 
            ...actualFlaggedRisks, 
            ...otherObservations_v2
        ];
    }

    _getItemsByToggle(toggleId) {
        const allItems = this._getAllSelectableItems();
        return allItems.filter(item => this.selections[item.id] && this.selections[item.id][toggleId]);
    }
}