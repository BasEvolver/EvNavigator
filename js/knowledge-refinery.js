// js/knowledge-refinery.js - Interactive workflow for document ingestion

// --- MOCK DATA FOR SIMULATION ---
const mockFileQueue = [
    // Recommended
    { id: 'TechFlow_CIM.pptx', title: 'TechFlow CIM.pptx', description: 'Confidential Information Memorandum for Project Tiger.', source: 'Data Room', date: '2025-08-11', status: 'Recommended', icon: 'powerpoint', knowledgeType: 'Context', subType: 'DD Data Room' },
    { id: 'Updated_Pricing_Model_Analysis.docx', title: 'Updated_Pricing_Model_Analysis.docx', description: 'Analysis of a proposed value-based pricing model.', source: 'Repository Upload', date: '2025-08-05', status: 'Recommended', icon: 'word', knowledgeType: 'Domain Knowledge', subType: 'Playbooks' },
    { id: 'Financial_Statements_2024.xlsx', title: 'TechFlow Consolidated P&L.xls', description: 'Audited financials for FY2024, including P&L and Balance Sheet.', source: 'Data Room', date: '2025-08-10', status: 'Recommended', icon: 'excel', knowledgeType: 'Internal Data', subType: 'Financial Reports' },
    { id: 'WW_Pipeline_CloudAdvantage.xls', title: 'WW Pipeline CloudAdvantage H2 - By Stage, weighted.xls', description: 'H2 2025 sales pipeline report with weighted forecast.', source: 'Repository Upload', date: '2025-08-12', status: 'Recommended', icon: 'excel', knowledgeType: 'Internal Data', subType: 'CRM Data' },
    { id: 'SAP_RevRec_CloudVantage.xls', title: 'SAP_RevRec_LTM_CloudVantage.xls', description: 'LTM recognized revenue by customer from SAP.', source: 'ERP System', date: '2025-08-12', status: 'Recommended', icon: 'excel', knowledgeType: 'Internal Data', subType: 'ERP Systems' },
    // Awaiting Curation
    { id: 'Capitalization_Table_v4.xlsx', title: 'Capitalization_Table_v4.xlsx', description: 'Detailed breakdown of equity ownership and dilution.', source: 'Data Room', date: '2025-08-10', status: 'Awaiting Curation', icon: 'excel', knowledgeType: 'Context', subType: 'Financial Model' },
    { id: 'Customer_Contracts_Top_50.zip', title: 'Customer_Contracts_Top_50.zip', description: 'Archive of MSAs and SOWs for the top 50 customers.', source: 'Data Room', date: '2025-08-10', status: 'Awaiting Curation', icon: 'word', knowledgeType: 'Context', subType: 'DD Data Room' },
    { id: 'Tech_Architecture_Diagrams.vsdx', title: 'Tech_Architecture_Diagrams.vsdx', description: 'Visio diagrams of the core application architecture.', source: 'Data Room', date: '2025-08-09', status: 'Awaiting Curation', icon: 'powerpoint', knowledgeType: 'Context', subType: 'DD Data Room' },
    { id: 'Employee_Roster_Q2_2025.csv', title: 'Employee_Roster_Q2_2025.csv', description: 'Headcount and compensation data for all employees.', source: 'Data Room', date: '2025-08-09', status: 'Awaiting Curation', icon: 'excel', knowledgeType: 'Internal Data', subType: 'HCM Systems' },
    { id: '5-Year_Strategic_Plan.docx', title: '5-Year_Strategic_Plan.docx', description: 'Management\'s forward-looking strategic vision and goals.', source: 'Data Room', date: '2025-08-09', status: 'Awaiting Curation', icon: 'word', knowledgeType: 'Context', subType: 'Investment Thesis' },
    { id: 'Sales_Playbook_v1.pptx', title: 'Sales_Playbook_v1.pptx', description: 'Internal guide for the sales team on methodology and process.', source: 'Data Room', date: '2025-08-08', status: 'Awaiting Curation', icon: 'powerpoint', knowledgeType: 'Domain Knowledge', subType: 'Playbooks' },
    { id: 'Security_Audit_PenTest_Results.pdf', title: 'Security_Audit_PenTest_Results.pdf', description: 'Third-party penetration test results and vulnerability report.', source: 'Data Room', date: '2025-08-08', status: 'Awaiting Curation', icon: 'pdf', knowledgeType: 'Context', subType: 'DD Data Room' },
    { id: 'Executive_Team_Resumes.zip', title: 'Executive_Team_Resumes.zip', description: 'CVs for all C-level and VP-level employees.', source: 'Data Room', date: '2025-08-08', status: 'Awaiting Curation', icon: 'word', knowledgeType: 'Context', subType: 'DD Data Room' },
    { id: 'AR_Aging_Report_June_2025.pdf', title: 'AR_Aging_Report_June_2025.pdf', description: 'Accounts receivable aging details for cash flow analysis.', source: 'Data Room', date: '2025-08-07', status: 'Awaiting Curation', icon: 'pdf', knowledgeType: 'Internal Data', subType: 'Financial Reports' },
    // New
    { id: 'Q3_Board_Deck_Final.pptx', title: 'Q3_Board_Deck_Final.pptx', description: 'Presentation materials for the upcoming quarterly board meeting.', source: 'Repository Upload', date: '2025-08-08', status: 'New', icon: 'powerpoint', knowledgeType: 'Context', subType: 'Meeting Transcripts' },
    { id: 'SaaS_NRR_Benchmarks_2025.pdf', title: 'SaaS_NRR_Benchmarks_2025.pdf', description: 'Industry report on Net Revenue Retention benchmarks.', source: 'Email Ingestion', date: '2025-08-07', status: 'New', icon: 'pdf', knowledgeType: 'Domain Knowledge', subType: 'Industry Benchmarks' },
    { id: 'NewCo_Synergy_Tracker_v3.xlsx', title: 'NewCo_Synergy_Tracker_v3.xlsx', description: 'Financial model tracking realization of acquisition synergies.', source: 'Repository Upload', date: '2025-08-07', status: 'New', icon: 'excel', knowledgeType: 'Context', subType: 'Financial Model' },
    { id: 'Customer_Advisory_Board_Feedback.docx', title: 'Customer_Advisory_Board_Feedback.docx', description: 'Qualitative feedback from the Q2 Customer Advisory Board.', source: 'Repository Upload', date: '2025-08-06', status: 'New', icon: 'word', knowledgeType: 'Internal Data', subType: 'Customer Success Platforms' },
    { id: 'Monthly_Flash_Report_July.pdf', title: 'Monthly_Flash_Report_July.pdf', description: 'High-level summary of July financial performance.', source: 'Repository Upload', date: '2025-08-06', status: 'New', icon: 'pdf', knowledgeType: 'Internal Data', subType: 'Financial Reports' },
    { id: 'Cloud_Cost_Optimization_Report.pdf', title: 'Cloud_Cost_Optimization_Report.pdf', description: 'Report on AWS cost-saving initiatives from the DevOps team.', source: 'Repository Upload', date: '2025-08-05', status: 'New', icon: 'pdf', knowledgeType: 'Internal Data', subType: 'DevOps Metrics' },
    { id: 'Onboarding_Playbook_v2.pptx', title: 'Onboarding_Playbook_v2.pptx', description: 'Updated playbook for the Customer Success team.', source: 'Repository Upload', date: '2025-08-04', status: 'New', icon: 'powerpoint', knowledgeType: 'Domain Knowledge', subType: 'Playbooks' },
    { id: 'Sales_Comp_Plan_FY26.pdf', title: 'Sales_Comp_Plan_FY26.pdf', description: 'Details of the new sales compensation structure.', source: 'Repository Upload', date: '2025-08-04', status: 'New', icon: 'pdf', knowledgeType: 'Context', subType: 'DD Data Room' },
    { id: 'Salesforce_Pipeline_Export_Q2.csv', title: 'Salesforce_Pipeline_Export_Q2.csv', description: 'Raw pipeline data from Salesforce for Q2 analysis.', source: 'Repository Upload', date: '2025-08-03', status: 'New', icon: 'excel', knowledgeType: 'Internal Data', subType: 'CRM Data' },
    // Pending Review
    { id: 'Gartner_MQ_Cloud_Mgmt.pdf', title: 'Gartner_MQ_Cloud_Mgmt.pdf', description: 'Gartner Magic Quadrant for Cloud Management Platforms.', source: 'Chat Upload', date: '2025-08-10', status: 'Pending Review', icon: 'pdf', knowledgeType: 'External Data', subType: 'Analyst Reports' },
    { id: 'Product_Review_Meeting_Transcript.docx', title: 'Product_Review_Meeting_Transcript.docx', description: 'Auto-generated transcript from the weekly product review.', source: 'Chat Upload', date: '2025-08-09', status: 'Pending Review', icon: 'word', knowledgeType: 'Context', subType: 'Meeting Transcripts' },
    { id: 'Pitchbook_Profile_NewTarget.pdf', title: 'Pitchbook_Profile_NewTarget.pdf', description: 'Profile of a potential acquisition target from PitchBook.', source: 'Chat Upload', date: '2025-08-09', status: 'Pending Review', icon: 'pdf', knowledgeType: 'External Data', subType: 'PitchBook' },
    { id: 'Expert_Call_Notes_AI_Market.txt', title: 'Expert_Call_Notes_AI_Market.txt', description: 'Notes from an expert network call on the AI market.', source: 'Chat Upload', date: '2025-08-08', status: 'Pending Review', icon: 'word', knowledgeType: 'Context', subType: 'Meeting Transcripts' },
    { id: 'Sample_Customer_MSA.pdf', title: 'Sample_Customer_MSA.pdf', description: 'Example Master Service Agreement from a key customer.', source: 'Chat Upload', date: '2025-08-08', status: 'Pending Review', icon: 'pdf', knowledgeType: 'Context', subType: 'DD Data Room' },
    { id: 'LinkedIn_Profile_CEO_Candidate.pdf', title: 'LinkedIn_Profile_CEO_Candidate.pdf', description: 'Profile of a potential CEO candidate for a portco.', source: 'Chat Upload', date: '2025-08-07', status: 'Pending Review', icon: 'pdf', knowledgeType: 'External Data', subType: 'LinkedIn' },
    { id: 'Glassdoor_Reviews_Competitor.png', title: 'Glassdoor_Reviews_Competitor.png', description: 'Screenshot of recent employee reviews for a competitor.', source: 'Chat Upload', date: '2025-08-07', status: 'Pending Review', icon: 'powerpoint', knowledgeType: 'External Data', subType: 'Glassdoor' },
    { id: 'Web_Scrape_Pricing_Data.csv', title: 'Web_Scrape_Pricing_Data.csv', description: 'Scraped pricing data from competitor websites.', source: 'Chat Upload', date: '2025-08-06', status: 'Pending Review', icon: 'excel', knowledgeType: 'External Data', subType: 'Web Research' },
    { id: 'Press_Release_Draft.docx', title: 'Press_Release_Draft.docx', description: 'Draft press release for a new product launch.', source: 'Chat Upload', date: '2025-08-05', status: 'Pending Review', icon: 'word', knowledgeType: 'Context', subType: 'DD Data Room' },
    { id: 'HCM_System_Headcount_Export.csv', title: 'HCM_System_Headcount_Export.csv', description: 'Latest headcount data from the HR system.', source: 'Chat Upload', date: '2025-08-05', status: 'Pending Review', icon: 'excel', knowledgeType: 'Internal Data', subType: 'HCM Systems' },
];

const mockDocumentData = {
    'Financial_Statements_2024.xlsx': {
        normalizedOutput: mockNormalizedOutputs['TechFlow Consolidated P&L.xls'],
        aiSummary: "The spreadsheet contains standard financial statements (P&L, Balance Sheet) for FY2022-2024. Key metrics show revenue growing to an estimated $28M in FY2024 with a 15.1% increase in Gross Profit. EBITDA turns positive, growing to $560K in the latest year.",
        entityText: `Analysis of the P&L shows consistent top-line growth, with <mark class="entity-kpi">Revenue</mark> reaching <mark class="entity-kpi">$28M (Est)</mark> in FY2024. <mark class="entity-kpi">Gross Profit</mark> increased by <mark class="entity-kpi">15.1%</mark> in the same period. A key positive trend is the <mark class="entity-kpi">EBITDA</mark> swinging from negative to <mark class="entity-kpi">$560K</mark>, indicating improving operational leverage. This is a critical point for the <mark class="entity-strategy">investment thesis</mark>.`,
        metadata: { entity: 'techflow-solutions', sourceType: 'context', subSourceType: 'ddDataRoom', tags: 'FY2024, Audited, P&L' },
        extracted: {
            'Document Type': 'Audited Financial Statement (XLSX)',
            'Fiscal Year End': '2024 (Est.)',
            'Est. Revenue': '$28,000,000',
            'Est. Gross Profit': '$21,840,000',
            'Est. EBITDA': '$560,000',
            'Key Findings': [
                "Strong revenue and gross profit growth year-over-year.",
                "Company has recently achieved EBITDA profitability, showing scalability.",
                "OpEx growth (13.7%) is tracking below Gross Profit growth (15.1%), a positive sign of operating leverage."
            ]
        }
    },
    'Updated_Pricing_Model_Analysis.docx': {
        normalizedOutput: mockNormalizedOutputs['Updated_Pricing_Model_Analysis.docx'],
        aiSummary: "This document outlines a strategic shift from a flat-rate pricing model to a value-based, three-tiered structure (Starter, Professional, Enterprise). The goal is to increase Net Revenue Retention (NRR) by 5-7 points by creating clear upsell paths and better aligning price with the value delivered to different customer segments.",
        entityText: `The objective is to transition to a <mark class="entity-strategy">value-based, three-tiered structure</mark>. This change is projected to cause a <mark class="entity-kpi">5-7 point increase in Net Revenue Retention</mark>. The new model is designed to improve <mark class="entity-strategy">New Logo Acquisition</mark> via a lower-cost 'Starter' tier while driving <mark class="entity-strategy">Expansion Revenue</mark> through upsells to 'Professional' and 'Enterprise'. This aligns our pricing with competitors like <mark class="entity-company">Integrix</mark> and <mark class="entity-company">MasterData Inc.</mark>`,
        metadata: { entity: 'techflow-solutions', sourceType: 'domainKnowledge', subSourceType: 'playbooks', tags: 'Pricing, Strategy, NRR' },
        extracted: {
            'Document Type': 'Strategy Analysis (DOCX)',
            'Proposed Model': 'Three-Tiered (Starter, Pro, Enterprise)',
            'Primary Goal': 'Increase NRR',
            'Projected NRR Uplift': '5-7 percentage points',
            'Key Levers': 'Expansion Revenue, New Logo Acquisition',
            'Key Findings': [
                "The proposed model creates a clear upsell path, which is currently lacking.",
                "A lower-cost entry point ('Starter') could accelerate new customer acquisition.",
                "The plan directly addresses a key value creation lever: Pricing Optimization."
            ]
        }
    },
    'TechFlow_CIM.pptx': {
        normalizedOutput: mockNormalizedOutputs['TechFlow_CIM.pptx'],
        aiSummary: "The CIM positions TechFlow as a 'Rule of >50' company with strong financial performance, projecting ~$96M in 2021 revenue and a 40% Adjusted EBITDA margin. It highlights a proven 'land and expand' model, a loyal blue-chip customer base with low concentration, and clear avenues for both organic and inorganic growth.",
        entityText: `The company is a <mark class="entity-kpi">multidomain Master Data Management and Process Automation</mark> provider. Financials are strong, with a <mark class="entity-kpi">Rule of >50</mark> performance, <mark class="entity-kpi">~$96mm 2021E Total Revenue</mark>, and <mark class="entity-kpi">105% Net Retention</mark>. The growth strategy is two-pronged: <mark class="entity-strategy">organic growth</mark> through landing new customers and expanding existing ones, and <mark class="entity-strategy">inorganic growth</mark> via acquiring capabilities in adjacent markets like <mark class="entity-strategy">Data Governance and Data Quality</mark>. A key risk is the <mark class="entity-risk">heavy reliance on the SAP ecosystem</mark>, although this is diversifying. The acquisition of <mark class="entity-company">DataFlow</mark> is cited as proof of a successful M&A platform.`,
        metadata: { entity: 'techflow-solutions', sourceType: 'context', subSourceType: 'ddDataRoom', tags: 'CIM, M&A, Financials, Strategy' },
        extracted: {
            'Document Type': 'Confidential Information Memo',
            'Projected 2021 Revenue': '$96.3M',
            'Projected 2021 Adj. EBITDA Margin': '40.0%',
            'Net Revenue Retention': '105%',
            'Gross Retention': '96%',
            'Customer Count': '>2,000',
            'Primary Growth Levers': 'Organic (Land & Expand), Inorganic (M&A)',
            'Key Findings': [
                "Company presents a strong 'Rule of 50' profile.",
                "Proven ability to execute a 'land and expand' model (86% of revenue from existing customers).",
                "Clear strategy for M&A to enter adjacent markets like Data Governance and Analytics.",
                "Low customer concentration (Top 10 = 11% of bookings) reduces single-account risk."
            ]
        }
    },
    'WW_Pipeline_CloudAdvantage.xls': {
        normalizedOutput: mockNormalizedOutputs['WW_Pipeline_CloudAdvantage.xls'],
        aiSummary: "The pipeline report for H2 2025 contains 55 opportunities with a total weighted value of $12.5M. Analysis indicates a high concentration risk, with the top 4 deals comprising 65% of the total weighted value. Notably, the largest deal, 'Project Titan' with Apex Solutions, has been in the sales cycle for an extended period of 14 months, suggesting it may be stalled.",
        entityText: `The H2 2025 pipeline for <mark class="entity-company">CloudVantage</mark> has a weighted value of <mark class="entity-kpi">$12.5M</mark> across <mark class="entity-kpi">55 opportunities</mark>. A significant <mark class="entity-risk">concentration risk</mark> exists, with the top 4 deals representing 65% of this value. The largest opportunity, <mark class="entity-strategy">'Project Titan'</mark> with <mark class="entity-company">Apex Solutions</mark>, has a stalled sales cycle of <mark class="entity-date">14 months</mark>, posing a risk to the forecast.`,
        metadata: { entity: 'cloudvantage', sourceType: 'internalData', subSourceType: 'cRMData', tags: 'Pipeline, H2 2025, Forecast' },
        extracted: {
            'Document Type': 'Pipeline Report (XLSX)',
            'Time Period': 'H2 2025 (ending 12/31/2025)',
            'Total Opportunities': '55',
            'Weighted Pipeline Value': '$12,500,000',
            'Key Findings': [
                "High concentration risk: Top 4 deals represent 65% of total weighted pipeline.",
                "One major deal ($2M) has been in the sales cycle for 14 months, indicating potential stagnation.",
                "Healthy pipeline coverage at 3.5x the quarterly target."
            ]
        }
    },
    'SAP_RevRec_CloudVantage.xls': {
        normalizedOutput: mockNormalizedOutputs['SAP_RevRec_CloudVantage.xls'],
        aiSummary: "The LTM revenue recognition report from SAP details monthly revenue for 152 customers, totaling $78M. The data shows highly consistent monthly recurring revenue, indicative of a stable subscription base. Cohort analysis confirms strong customer health with a calculated Net Revenue Retention (NRR) of 128%. No significant customer concentration issues were identified in the recognized revenue base.",
        entityText: `The LTM report from <mark class="entity-strategy">SAP</mark> for <mark class="entity-company">CloudVantage</mark> covers <mark class="entity-kpi">152 customers</mark> and a total recognized revenue of <mark class="entity-kpi">$78M</mark>. The data confirms a strong <mark class="entity-kpi">Net Revenue Retention of 128%</mark>, driven by consistent monthly recognition and successful upsells, such as with <mark class="entity-company">Global Health Inc.</mark> in <mark class="entity-date">Jan 2025</mark>.`,
        metadata: { entity: 'cloudvantage', sourceType: 'internalData', subSourceType: 'eRPSystems', tags: 'LTM, Revenue, SAP, Audited' },
        extracted: {
            'Document Type': 'Revenue Recognition Report (XLSX)',
            'Time Period': 'LTM (Last Twelve Months)',
            'Total Customers': '152',
            'Total Recognized Revenue': '$78,000,000',
            'Key Findings': [
                "Consistent monthly revenue recognition indicates a stable subscription base.",
                "Cohort analysis of the data confirms a strong Net Revenue Retention (NRR) of 128%.",
                "No significant customer concentration found in the LTM recognized revenue."
            ]
        }
    }
};

const ICONS = {
    pdf: `<svg class="w-10 h-10 text-red-500" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.5 18H8v-5h1.5a1.5 1.5 0 0 1 0 3H9v2zm2.5-2.5a1.5 1.5 0 0 1-3 0V13h3v2.5zM16 18h-1.8l-1.2-5h1.5l.7 3.4.7-3.4h1.5l-1.2 5z"/></svg>`,
    word: `<svg class="w-10 h-10 text-blue-600" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.5 15.5H11L12 18h1.5l-2.25-6H9.75L7.5 18H9l1-2.5zm-2-3.5L9 8h1.5l1.5 4H10l-.75-2.25L8.5 12H7.5z"/></svg>`,
    powerpoint: `<svg class="w-10 h-10 text-orange-500" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM8 18v-5h1.5a1.5 1.5 0 0 1 0 3H8v2zm7-5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5H13V13h2z"/></svg>`,
    excel: `<svg class="w-10 h-10 text-green-600" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.5 18l-3-3 3-3 1.5 1.5L9.5 15l1.5 1.5-1.5 1.5zm5-5l-3-3 3-3 1.5 1.5L14.5 9l1.5 1.5-1.5 1.5z"/></svg>`
};

document.addEventListener('DOMContentLoaded', async () => {
    if (Navigation.getCurrentPage() === 'knowledge-refinery') {
        await loadSharedComponents();
        initializeRefineryPage();
        initializeRefineryListeners();
    }
});

function initializeRefineryPage() {
    const pane1 = document.getElementById('refinery-pane-1');
    const pane2 = document.getElementById('refinery-pane-2');
    const pane3 = document.getElementById('refinery-pane-3');

    if (!pane1 || !pane2 || !pane3) {
        console.error("Refinery panes not found in the DOM.");
        return;
    }

    pane1.innerHTML = `
        <div class="refinery-card">
            <h3 class="refinery-title">1. Normalize</h3>
            <button data-action="upload-report" class="primary-button w-full mb-4">Ingest New Document...</button>
            <div class="refinery-content-area">
                <div class="refinery-empty-state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    <p>Select a document from the ingestion queue to begin.</p>
                </div>
            </div>
        </div>
    `;
    pane2.innerHTML = `
        <div class="refinery-card">
            <h3 class="refinery-title">2. Interpret</h3>
            <div class="refinery-content-area">
                <div class="refinery-empty-state"><p>Awaiting document normalization...</p></div>
            </div>
        </div>
    `;
    pane3.innerHTML = `
        <div class="refinery-card">
            <h3 class="refinery-title">3. Curate & Contextualize</h3>
            <div class="refinery-content-area">
                <div class="refinery-empty-state"><p>Awaiting interpretation...</p></div>
            </div>
        </div>
    `;
}

function renderFileSelectionModal() {
    const fileListContainer = document.getElementById('ingestion-file-list');
    if (!fileListContainer) return;

    const statusGroups = {
        'Recommended': mockFileQueue.filter(f => f.status === 'Recommended'),
        'New': mockFileQueue.filter(f => f.status === 'New'),
        'Pending Review': mockFileQueue.filter(f => f.status === 'Pending Review'),
        'Awaiting Curation': mockFileQueue.filter(f => f.status === 'Awaiting Curation')
    };

    const renderFileItem = (file) => `
        <div class="file-list-item" data-action="select-mock-file" data-mock-key="${file.id}" data-source="${file.source}" data-search-content="${(file.title + ' ' + file.description).toLowerCase()}">
            <div class="file-item-icon">${ICONS[file.icon] || ICONS.pdf}</div>
            <div class="file-item-info">
                <h5 class="font-bold">${file.title}</h5>
                <p class="text-xs text-secondary">${file.description}</p>
                <div class="file-item-metadata">
                    <span class="metadata-tag">Source: ${file.source}</span>
                    <span class="metadata-tag">Date: ${file.date}</span>
                </div>
            </div>
            <div class="file-item-status">
                <span class="status-badge ${file.status === 'Recommended' ? 'status-warning' : 'status-info'}">${file.status}</span>
            </div>
        </div>
    `;
    
    let html = '';
    for (const [status, files] of Object.entries(statusGroups)) {
        if (files.length > 0) {
            const isRecommended = status === 'Recommended';
            html += `
                <div class="ingestion-section-title" data-action="toggle-ingestion-category">
                    <span>${status} (${files.length})</span>
                    <svg class="chevron-icon ${isRecommended ? 'expanded' : ''}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
                <div class="ingestion-file-list-group ${isRecommended ? '' : 'collapsed'}">
                    ${files.map(renderFileItem).join('')}
                </div>
            `;
        }
    }
    fileListContainer.innerHTML = html;

      const expandedGroup = fileListContainer.querySelector('.ingestion-file-list-group:not(.collapsed)');
    if (expandedGroup) {
        // The setTimeout ensures this runs after the browser has painted the new HTML
        setTimeout(() => {
            expandedGroup.style.maxHeight = expandedGroup.scrollHeight + 'px';
        }, 0);
    }
}

function applyIngestionFilters() {
    const searchTerm = document.getElementById('ingestion-search-input').value.toLowerCase();
    const sourceFilter = document.getElementById('ingestion-source-filter').value;
    const allItems = document.querySelectorAll('.file-list-item');
    const allHeaders = document.querySelectorAll('.ingestion-section-title');

    allItems.forEach(item => {
        const searchContent = item.dataset.searchContent;
        const source = item.dataset.source;
        const searchMatch = searchContent.includes(searchTerm);
        const sourceMatch = (sourceFilter === 'all' || source === sourceFilter);
        item.style.display = (searchMatch && sourceMatch) ? 'flex' : 'none';
    });

    allHeaders.forEach(header => {
        const group = header.nextElementSibling;
        const visibleItems = group.querySelectorAll('.file-list-item[style*="display: flex"]');
        header.style.display = visibleItems.length > 0 ? 'flex' : 'none';
    });
}

function initializeRefineryListeners() {
    document.body.addEventListener('click', (event) => {
        const target = event.target.closest('[data-action]');
        if (!target) return;

        const action = target.dataset.action;
        const modal = document.getElementById('file-selection-modal');

        switch (action) {
            case 'upload-report':
                renderFileSelectionModal();
                applyIngestionFilters();
                if (modal) modal.style.display = 'flex';
                break;
            case 'close-modal':
                if (modal) modal.style.display = 'none';
                break;
            case 'select-mock-file':
                const mockKey = target.dataset.mockKey;
                if (mockKey) {
                    handleFileSelect(mockKey);
                    if (modal) modal.style.display = 'none';
                }
                break;
            case 'commit-to-kb':
                const confirmation = document.getElementById('confirmation-modal');
                if (confirmation) confirmation.style.display = 'flex';
                break;
            case 'close-confirmation':
                const confirmModal = document.getElementById('confirmation-modal');
                if (confirmModal) confirmModal.style.display = 'none';
                initializeRefineryPage();
                break;
            case 'toggle-ingestion-category':
                const group = target.nextElementSibling;
                const chevron = target.querySelector('.chevron-icon');
                const isCollapsed = group.classList.toggle('collapsed');
                chevron.classList.toggle('expanded', !isCollapsed);
                if (!isCollapsed) {
                    group.style.maxHeight = group.scrollHeight + 'px';
                } else {
                    group.style.maxHeight = null;
                }
                break;
        }
    });

    document.body.addEventListener('keyup', (event) => {
        if (event.target.id === 'ingestion-search-input') {
            applyIngestionFilters();
        }
    });

    document.body.addEventListener('change', (event) => {
        if (event.target.id === 'ingestion-source-filter') {
            applyIngestionFilters();
        }
    });
}

function handleFileSelect(mockDataKey) {
    const fileData = mockDocumentData[mockDataKey];
    if (!fileData) {
        alert("This document is for demonstration purposes. To see the full workflow, please select one of the 'Recommended' documents.");
        return;
    }
    
    simulateNormalization(fileData, mockDataKey);
}

async function typeGenerativeContent(element, text, speed = 0.1) {
    return new Promise(resolve => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                element.scrollTop = element.scrollHeight;
            } else {
                clearInterval(timer);
                resolve();
            }
        }, speed);
    });
}

async function simulateNormalization(fileData, mockDataKey) {
    const pane1 = document.getElementById('refinery-pane-1');
    const pane2 = document.getElementById('refinery-pane-2');
    const pane3 = document.getElementById('refinery-pane-3');
    
    const fileInfo = mockFileQueue.find(f => f.id === mockDataKey);
    const docTitle = fileInfo ? fileInfo.title : "Selected Document";

    pane1.innerHTML = `<div class="refinery-card"><h3 class="refinery-title">1. Normalize</h3><div class="refinery-content-area normalization-terminal"></div></div>`;
    pane2.innerHTML = `<div class="refinery-card"><h3 class="refinery-title">2. Interpret</h3><div class="refinery-loading-state"><div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div><p class="mt-4 text-secondary">Normalizing document...</p></div></div>`;
    pane3.innerHTML = `<div class="refinery-card"><h3 class="refinery-title">3. Curate & Contextualize</h3><div class="refinery-empty-state"><p>Awaiting interpretation...</p></div></div>`;

    const terminal = pane1.querySelector('.normalization-terminal');
    const normalizedOutput = fileData.normalizedOutput;
    
    terminal.insertAdjacentHTML('beforeend', `<p class="terminal-log">> Initializing normalization for ${docTitle}...</p>`);
    await new Promise(r => setTimeout(r, 100));
    terminal.insertAdjacentHTML('beforeend', `<p class="terminal-log">> Detected format: ${docTitle.split('.').pop()}. Analyzing structure...</p>`);
    await new Promise(r => setTimeout(r, 150));

    if (normalizedOutput.bs_metadata) { // Excel file with multiple tabs
        terminal.insertAdjacentHTML('beforeend', `<p class="terminal-log">> Found multiple tabs. Generating 4 outputs...</p>`);
        await new Promise(r => setTimeout(r, 100));
        const baseName = docTitle.replace(/\.[^/.]+$/, "");
        
        terminal.insertAdjacentHTML('beforeend', `<p class="terminal-log">> Extracting tab metadata: ${baseName}_bs_metadata.csv</p>`);
        terminal.insertAdjacentHTML('beforeend', `<pre><code id="norm-bs-meta" class="language-csv"></code></pre>`);
        await typeGenerativeContent(document.getElementById('norm-bs-meta'), normalizedOutput.bs_metadata);

        terminal.insertAdjacentHTML('beforeend', `<p class="terminal-log">> Extracting raw tab data: ${baseName}_bs_data.csv</p>`);
        terminal.insertAdjacentHTML('beforeend', `<pre><code id="norm-bs-data" class="language-csv"></code></pre>`);
        await typeGenerativeContent(document.getElementById('norm-bs-data'), normalizedOutput.bs_data);

        terminal.insertAdjacentHTML('beforeend', `<p class="terminal-log">> Extracting tab metadata: ${baseName}_pl_metadata.csv</p>`);
        terminal.insertAdjacentHTML('beforeend', `<pre><code id="norm-pl-meta" class="language-csv"></code></pre>`);
        await typeGenerativeContent(document.getElementById('norm-pl-meta'), normalizedOutput.pl_metadata);

        terminal.insertAdjacentHTML('beforeend', `<p class="terminal-log">> Extracting raw tab data: ${baseName}_pl_data.csv</p>`);
        terminal.insertAdjacentHTML('beforeend', `<pre><code id="norm-pl-data" class="language-csv"></code></pre>`);
        await typeGenerativeContent(document.getElementById('norm-pl-data'), normalizedOutput.pl_data);

    } else if (normalizedOutput.metadata && normalizedOutput.data) { // Excel file with single tab (e.g., Pipeline, SAP)
        terminal.insertAdjacentHTML('beforeend', `<p class="terminal-log">> Found single data table. Generating 2 outputs...</p>`);
        await new Promise(r => setTimeout(r, 100));
        const baseName = docTitle.replace(/\.[^/.]+$/, "");

        terminal.insertAdjacentHTML('beforeend', `<p class="terminal-log">> Extracting table metadata: ${baseName}_metadata.csv</p>`);
        terminal.insertAdjacentHTML('beforeend', `<pre><code id="norm-meta" class="language-csv"></code></pre>`);
        await typeGenerativeContent(document.getElementById('norm-meta'), normalizedOutput.metadata);

        terminal.insertAdjacentHTML('beforeend', `<p class="terminal-log">> Extracting raw table data: ${baseName}_data.csv</p>`);
        terminal.insertAdjacentHTML('beforeend', `<pre><code id="norm-data" class="language-csv"></code></pre>`);
        await typeGenerativeContent(document.getElementById('norm-data'), normalizedOutput.data);

    } else if (normalizedOutput.main) { // CIM or Word Doc
        const isJson = normalizedOutput.main.trim().startsWith('{');
        const outputFormat = isJson ? '.json' : '.md';
        const language = isJson ? 'json' : 'markdown';
        const baseName = docTitle.replace(/\.[^/.]+$/, "");

        terminal.insertAdjacentHTML('beforeend', `<p class="terminal-log">> Generating main ${outputFormat} structure: ${baseName}${outputFormat}</p>`);
        terminal.insertAdjacentHTML('beforeend', `<pre><code id="norm-main" class="language-${language}"></code></pre>`);
        await typeGenerativeContent(document.getElementById('norm-main'), normalizedOutput.main);
    }

    terminal.insertAdjacentHTML('beforeend', '<p class="terminal-log success">> Normalization complete. Output saved to memory.</p>');
    
    await new Promise(r => setTimeout(r, 300));
    simulateInterpretationAndCuration(fileData, mockDataKey);
}

async function simulateInterpretationAndCuration(fileData, mockDataKey) {
    const pane2 = document.getElementById('refinery-pane-2');
    pane2.innerHTML = `<div class="refinery-card"><h3 class="refinery-title">2. Interpret</h3><div class="refinery-loading-state"><div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div><p class="mt-4 text-secondary">ARIA is interpreting normalized content...</p></div></div>`;

    await new Promise(r => setTimeout(r, 1500));

    renderPane2_Interpretation(fileData, mockDataKey);
    renderPane3_Curation(fileData);
}

function renderPane2_Interpretation(fileData, mockDataKey) {
    const pane2 = document.getElementById('refinery-pane-2');
    const fileInfo = mockFileQueue.find(f => f.id === mockDataKey);
    const docTitle = fileInfo ? fileInfo.title : "Selected Document";
    const normalizedOutput = fileData.normalizedOutput;

    let filesHTML = '';
    const baseName = docTitle.replace(/\.[^/.]+$/, "");

    if (normalizedOutput.bs_metadata) { // P&L Excel
        filesHTML = `
            <div class="normalized-file-chip">${ICONS.excel} ${baseName}_bs_metadata.csv</div>
            <div class="normalized-file-chip">${ICONS.excel} ${baseName}_bs_data.csv</div>
            <div class="normalized-file-chip">${ICONS.excel} ${baseName}_pl_metadata.csv</div>
            <div class="normalized-file-chip">${ICONS.excel} ${baseName}_pl_data.csv</div>
        `;
    } else if (normalizedOutput.metadata && normalizedOutput.data) { // Pipeline or SAP Excel
        filesHTML = `
            <div class="normalized-file-chip">${ICONS.excel} ${baseName}_metadata.csv</div>
            <div class="normalized-file-chip">${ICONS.excel} ${baseName}_data.csv</div>
        `;
    } else if (normalizedOutput.main) { // CIM or Word
        const isJson = normalizedOutput.main.trim().startsWith('{');
        const icon = isJson ? ICONS.powerpoint : ICONS.word;
        const extension = isJson ? '.json' : '.md';
        filesHTML = `<div class="normalized-file-chip">${icon} ${baseName}${extension}</div>`;
    }

    pane2.innerHTML = `
        <div class="refinery-card">
            <h3 class="refinery-title">2. Interpret</h3>
            <div class="refinery-content-area">
                <h4 class="font-semibold">AI-Generated Summary</h4>
                <p class="text-sm text-secondary mb-4">${fileData.aiSummary}</p>
                <h4 class="font-semibold">Key Entity Recognition</h4>
                <div class="entity-text-box mb-4">
                    ${fileData.entityText}
                </div>
                <h4 class="font-semibold">Normalized Source Files</h4>
                <div class="normalized-files-container">${filesHTML}</div>
            </div>
        </div>
    `;
}


function renderPane3_Curation(fileData) {
    const pane3 = document.getElementById('refinery-pane-3');
    
    const extractedFieldsHTML = Object.entries(fileData.extracted)
        .map(([key, value]) => {
            if (Array.isArray(value)) {
                return `
                    <div class="form-group">
                        <label for="extracted-${key.replace(/\s+/g, '')}">${key}</label>
                        <textarea id="extracted-${key.replace(/\s+/g, '')}" rows="${value.length + 1}" class="text-sm">${value.join('\n')}</textarea>
                    </div>`;
            }
            return `
                <div class="form-group">
                    <label for="extracted-${key.replace(/\s+/g, '')}">${key}</label>
                    <input type="text" id="extracted-${key.replace(/\s+/g, '')}" value="${value}">
                </div>`;
        }).join('');

    pane3.innerHTML = `
        <div class="refinery-card">
            <h3 class="refinery-title">3. Curate & Contextualize</h3>
            <div class="refinery-content-area curation-form">
                <h4 class="font-semibold mb-2">Metadata</h4>
                <div class="form-group">
                    <label for="entity-association">Associate with:</label>
                    <select id="entity-association">
                        <option value="techflow-solutions">TechFlow Solutions</option>
                        <option value="cloudvantage">CloudVantage</option>
                        <option value="portfolio-wide">Portfolio-Wide</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="source-type">Source Type:</label>
                    <select id="source-type">
                        <option value="context">Context</option>
                        <option value="domainKnowledge">Domain Knowledge</option>
                        <option value="externalData">External Data</option>
                        <option value="internalData">Internal Data</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="sub-source-type">Sub-Source:</label>
                    <select id="sub-source-type"></select>
                </div>
                <div class="form-group">
                    <label for="sub-scope-tags">Add Tags:</label>
                    <input type="text" id="sub-scope-tags" placeholder="e.g., Q4 Financials, Audited" value="${fileData.metadata.tags}">
                </div>
                
                <hr class="my-4 border-border-color">

                <h4 class="font-semibold mb-2">Extracted Content (Editable)</h4>
                ${extractedFieldsHTML}
                <button data-action="commit-to-kb" class="primary-button w-full mt-4">Commit to Knowledge Base</button>
            </div>
        </div>
    `;

    initializeCascadingDropdowns(fileData.metadata);
}

function initializeCascadingDropdowns(metadata) {
    const sourceTypeSelect = document.getElementById('source-type');
    const subSourceTypeSelect = document.getElementById('sub-source-type');
    const entitySelect = document.getElementById('entity-association');

    if (!sourceTypeSelect || !subSourceTypeSelect || !entitySelect) return;

    const subSourceOptions = {
        context: ['DD Data Room', 'Investment Thesis', 'Financial Model', 'Meeting Transcripts'],
        domainKnowledge: ['Playbooks', 'KPI Library', 'Maturity Model', 'Industry Benchmarks'],
        externalData: ['Analyst Reports', 'PitchBook', 'LinkedIn', 'Glassdoor', 'Web Research', 'News Feeds'],
        internalData: ['Financial Reports', 'CRM Data', 'ERP Systems', 'HCM Systems', 'DevOps Metrics', 'Customer Success Platforms']
    };

    const populateSubSource = () => {
        const selectedSource = sourceTypeSelect.value;
        const options = subSourceOptions[selectedSource] || [];
        subSourceTypeSelect.innerHTML = '<option>Select...</option>';
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.charAt(0).toLowerCase() + option.slice(1).replace(/\s+/g, '');
            optionElement.textContent = option;
            subSourceTypeSelect.appendChild(optionElement);
        });
    };

    sourceTypeSelect.addEventListener('change', populateSubSource);

    entitySelect.value = metadata.entity;
    sourceTypeSelect.value = metadata.sourceType;
    populateSubSource(); 
    subSourceTypeSelect.value = metadata.subSourceType;
}