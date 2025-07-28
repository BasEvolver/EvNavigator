// js/report-generator.js - The IC Report Generation Engine (Final Working Version)

class ReportGenerator {
    constructor(reportData) {
        this.data = reportData;
        
        this.doc = new window.jspdf.jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });
        this.pageWidth = this.doc.internal.pageSize.getWidth();
        this.pageHeight = this.doc.internal.pageSize.getHeight();
        this.margin = 15;
        this.cursorY = this.margin;
        this.pageNumber = 1;
    }

    async generate() {
        this._drawCoverPage();
        this._addPage();
        this._drawRecommendation();
        this._drawThesis();
        this._drawRisksAndLevers();
        await this._drawDetailedFindings();

        this._addPageNumbers();
        this.doc.save(`IC_Report_${this.data.company.title}_${new Date().toISOString().slice(0,10)}.pdf`);
    }

    _addPage() { this.doc.addPage(); this.pageNumber++; this.cursorY = this.margin; this._drawHeader(); }
    _checkNewPage(requiredHeight) { if (this.cursorY + requiredHeight > this.pageHeight - this.margin) { this._addPage(); } }
    
    _drawCoverPage() {
        this.doc.setFont('helvetica', 'bold');
        this.doc.setFontSize(28);
        this.doc.text('Investment Committee Report', this.pageWidth / 2, this.pageHeight / 2 - 20, { align: 'center' });
        this.doc.setFontSize(20);
        this.doc.text(`Project: ${this.data.company.title}`, this.pageWidth / 2, this.pageHeight / 2 - 10, { align: 'center' });
        this.doc.setFont('helvetica', 'normal');
        this.doc.setFontSize(12);
        this.doc.text(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), this.pageWidth / 2, this.pageHeight / 2 + 5, { align: 'center' });
        this.doc.setTextColor(150);
        this.doc.text('CONFIDENTIAL', this.pageWidth / 2, this.pageHeight - 20, { align: 'center' });
        this.doc.setTextColor(0);
    }

    _drawHeader() {
        this.doc.setFont('helvetica', 'bold');
        this.doc.setFontSize(10);
        this.doc.text(`IC Memo: ${this.data.company.title}`, this.margin, 10);
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
        const { recommendation, color } = this.data.recommendation;
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
        this.doc.setFont('helvetica', 'normal');
        this.doc.setFontSize(11);

        const introText = `TechFlow Solutions ("TechFlow" or the "Company") is a vertically-focused B2B SaaS provider that has established a strong, defensible niche in data workflow automation for the mid-market financial services sector. Operating primarily from its headquarters in New York with a satellite development office in Austin, the Company serves a loyal base of asset management firms, regional banks, and insurance providers across North America and Western Europe. Its core platform enables clients to automate complex data ingestion, reconciliation, and reporting tasks, significantly reducing operational risk and manual overhead associated with regulatory compliance.`;
        
        const whyInterestingText = `The investment is compelling due to TechFlow's position as an undervalued asset with "good bones" in a resilient, high-growth vertical. The Company exhibits strong product-market fit, evidenced by high gross margins (72%) and a loyal, albeit concentrated, customer base. However, it has been hampered by a lack of go-to-market sophistication and significant, addressable technical debt. Our thesis is centered on acquiring this sticky asset at an attractive valuation and executing a targeted Value Creation Plan to professionalize its commercial functions and modernize its technology platform, thereby unlocking its latent growth potential and positioning it for a strategic exit within 3-5 years.`;

        let splitText = this.doc.splitTextToSize(introText, this.pageWidth - (this.margin * 2));
        this.doc.text(splitText, this.margin, this.cursorY);
        this.cursorY += (splitText.length * 5) + 5; // Add extra space

        this.doc.setFont('helvetica', 'bold');
        this.doc.text('Why The Company is Interesting:', this.margin, this.cursorY);
        this.cursorY += 7;

        this.doc.setFont('helvetica', 'normal');
        splitText = this.doc.splitTextToSize(whyInterestingText, this.pageWidth - (this.margin * 2));
        this.doc.text(splitText, this.margin, this.cursorY);
        this.cursorY += (splitText.length * 5) + 10;
    }

    _drawRisksAndLevers() {
        this._drawSectionTitle('3. Summary of Risks & Value Levers');
        const { risks, levers } = this.data;
        const tableBody = [];
        const maxLength = Math.max(risks.length, levers.length);
        for (let i = 0; i < maxLength; i++) {
            tableBody.push([
                risks[i] ? risks[i].title : '',
                levers[i] ? levers[i].title : ''
            ]);
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

    async _drawDetailedFindings() {
        this._drawSectionTitle('4. Detailed Diligence Findings');

        for (const [index, item] of this.data.risks.entries()) {
            this._checkNewPage(50);
            this.doc.setFont('helvetica', 'bold');
            this.doc.setFontSize(12);
            this.doc.text(`4.${index + 1} Finding: ${item.title}`, this.margin, this.cursorY);
            this.cursorY += 8;

            if (item.isAriaResponse && typeof item.renderFunc === 'function') {
                const tempContainer = document.createElement('div');
                tempContainer.style.position = 'absolute';
                tempContainer.style.left = '-9999px';
                tempContainer.style.width = '700px';
                tempContainer.style.padding = '1rem';
                tempContainer.style.backgroundColor = 'var(--bg-card)';
                document.body.appendChild(tempContainer);

                const state = loadState();
                tempContainer.innerHTML = item.renderFunc(state, { isForPdf: true });
                
                const canvas = await html2canvas(tempContainer, { scale: 2 });
                const imgData = canvas.toDataURL('image/png');
                
                document.body.removeChild(tempContainer);

                const imgProps = this.doc.getImageProperties(imgData);
                const pdfWidth = this.pageWidth - (this.margin * 2);
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                this._checkNewPage(pdfHeight + 10);
                this.doc.addImage(imgData, 'PNG', this.margin, this.cursorY, pdfWidth, pdfHeight);
                this.cursorY += pdfHeight + 10;

            } else {
                this.doc.autoTable({
                    body: [
                        ['Severity', item.severity],
                        ['Impact', item.impact],
                        ['Source Docs', item.sourceDocuments.join(', ')]
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
                const splitText = this.doc.splitTextToSize(item.analysis, this.pageWidth - (this.margin * 2));
                this.doc.text(splitText, this.margin, this.cursorY);
                this.cursorY += (splitText.length * 5) + 10;
            }
        }
    }
}