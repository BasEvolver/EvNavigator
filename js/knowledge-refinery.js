// js/knowledge-refinery.js - Interactive workflow for document ingestion

// --- MOCK DATA FOR SIMULATION ---
const mockFileQueue = [
    { 
        id: 'GTM_Strategy_Deck.pptx', 
        title: 'GTM_Strategy_Deck.pptx',
        description: 'CRO presentation on the 18-month go-to-market strategy.',
        source: 'Data Room',
        date: '2025-08-10',
        status: 'Recommended',
        icon: 'powerpoint'
    },
    { 
        id: 'Financial_Statements_2024.pdf', 
        title: 'Financial_Statements_2024.pdf',
        description: 'Audited financials for FY2024, including auditor notes.',
        source: 'Data Room',
        date: '2025-08-10',
        status: 'Recommended',
        icon: 'pdf'
    },
    { 
        id: 'Board_Minutes_Q2.docx', 
        title: 'Board_Minutes_Q2.docx',
        description: 'Minutes from the most recent quarterly board meeting.',
        source: 'Email Attachment',
        date: '2025-08-09',
        status: 'New',
        icon: 'word'
    },
    { 
        id: 'Competitor_Analysis_Gartner.pdf', 
        title: 'Competitor_Analysis_Gartner.pdf',
        description: 'Third-party report on the competitive landscape.',
        source: 'External Data',
        date: '2025-08-08',
        status: 'New',
        icon: 'pdf'
    },
    { 
        id: 'Employee_Churn_Data.xlsx', 
        title: 'Employee_Churn_Data.xlsx',
        description: 'Raw data export of employee attrition over the last 24 months.',
        source: 'HR System',
        date: '2025-08-07',
        status: 'New',
        icon: 'excel'
    }
];

const mockDocumentData = {
    'Financial_Statements_2024.pdf': {
        summary: "This document contains the audited financial statements for TechFlow Solutions for the fiscal year ending 2024. It includes the Income Statement, Balance Sheet, and Cash Flow Statement, along with auditor's notes.",
        aiSummary: "The document indicates a reported ARR of $12M. However, analysis of the auditor's notes reveals a non-standard revenue recognition policy for perpetual licenses, potentially overstating the true recurring revenue.",
        entityText: `...the company's reported <mark class="entity-kpi">Annual Recurring Revenue (ARR) reached $12M</mark> for FY2024. A significant portion of this is derived from the <mark class="entity-company">Global FinCorp</mark> account, which is up for renewal in <mark class="entity-date">Q4 2025</mark>. The auditor's notes highlight a <mark class="entity-risk">non-standard revenue recognition policy</mark> for perpetual licenses...`,
        metadata: { entity: 'techflow-solutions', sourceType: 'internalData', subSourceType: 'financialReports', tags: 'FY2024, Audited, ARR Analysis' },
        extracted: { kpi: { label: 'KPI: ARR', value: '$12,000,000' }, finding: { label: 'Key Finding:', value: 'Non-standard revenue recognition policy for perpetual licenses overstates true recurring revenue.' } }
    },
    'GTM_Strategy_Deck.pptx': {
        summary: "A PowerPoint presentation from the TechFlow CRO outlining the go-to-market strategy for the next 18 months. It covers sales methodology, channel partnerships, and marketing funnel targets.",
        aiSummary: "The GTM strategy relies heavily on an EMEA expansion and a new channel partner program. The plan projects 40% new ARR growth, but analysis shows historical performance is only 15%, indicating a significant credibility gap.",
        entityText: `...our growth will be driven by a <mark class="entity-risk">40% increase in new ARR</mark>, primarily from the <mark class="entity-kpi">EMEA expansion</mark>. Our key partner, <mark class="entity-company">EuroSystems GmbH</mark>, will be critical. The sales team must adopt the <mark class="entity-kpi">MEDDIC methodology</mark> by <mark class="entity-date">end of Q3</mark>...`,
        metadata: { entity: 'techflow-solutions', sourceType: 'context', subSourceType: 'ddDataRoom', tags: 'GTM, Sales, Strategy, EMEA' },
        extracted: { kpi: { label: 'KPI: Projected New ARR Growth', value: '40%' }, finding: { label: 'Key Finding:', value: 'Strategic plan has a credibility gap; projected growth (40%) is not supported by historical performance (15%).' } }
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
            <h3 class="refinery-title">1. Source Document</h3>
            <!-- MODIFICATION 1: Added data-action to this button -->
            <button id="upload-report-btn" data-action="upload-report" class="primary-button w-full mb-4">Ingest New Document...</button>
            <div class="refinery-empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                <p>Select a document from the ingestion queue to begin.</p>
            </div>
        </div>
    `;
    pane2.innerHTML = `<div class="refinery-card"><h3 class="refinery-title">2. ARIA's Interpretation</h3><div class="refinery-empty-state"><p>Awaiting document selection...</p></div></div>`;
    pane3.innerHTML = `<div class="refinery-card"><h3 class="refinery-title">3. Curation & Contextualization</h3><div class="refinery-empty-state"><p>Awaiting document selection...</p></div></div>`;
}

function renderFileSelectionModal() {
    const fileListContainer = document.getElementById('ingestion-file-list');
    if (!fileListContainer) return;

    const recommended = mockFileQueue.filter(f => f.status === 'Recommended');
    const newList = mockFileQueue.filter(f => f.status === 'New');

    const renderFileItem = (file) => `
        <div class="file-list-item" data-action="select-mock-file" data-mock-key="${file.id}">
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

    fileListContainer.innerHTML = `
        <h4 class="ingestion-section-title">Recommended for Curation</h4>
        ${recommended.map(renderFileItem).join('')}
        <h4 class="ingestion-section-title">Recently Added</h4>
        ${newList.map(renderFileItem).join('')}
    `;
}

function initializeRefineryListeners() {
    document.body.addEventListener('click', (event) => {
        const target = event.target.closest('[data-action]');
        if (!target) return;

        // MODIFICATION 2: Simplified the action logic to be more direct
        const action = target.dataset.action;
        const modal = document.getElementById('file-selection-modal');

        switch (action) {
            case 'upload-report':
                renderFileSelectionModal();
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
        }
    });
}

function handleFileSelect(mockDataKey) {
    const fileData = mockDocumentData[mockDataKey];
    if (!fileData) {
        alert("This document is for display only in the prototype. Please select one of the 'Recommended' documents.");
        return;
    }

    const fileInfo = mockFileQueue.find(f => f.id === mockDataKey);
    const file = {
        name: fileInfo.title,
        size: fileInfo.title.includes('pdf') ? 120400 : 2350000,
        icon: fileInfo.icon
    };
    
    renderPane1_Preview(file, fileData);
    simulateAriaProcessing(fileData);
}

function renderPane1_Preview(file, fileData) {
    const pane1 = document.getElementById('refinery-pane-1');
    pane1.innerHTML = `
        <div class="refinery-card">
            <h3 class="refinery-title">1. Source Document</h3>
            <button id="upload-report-btn" data-action="upload-report" class="secondary-button w-full mb-4">Select a Different Document...</button>
            <div class="source-document-viewer">
                <div class="file-preview-card">
                    ${ICONS[file.icon] || ICONS.pdf}
                    <div class="file-info">
                        <h4 class="font-bold">${file.name}</h4>
                        <p class="text-xs text-secondary">${(file.size / 1024).toFixed(1)} KB</p>
                    </div>
                </div>
                <p class="text-sm text-secondary mt-4">${fileData.summary}</p>
            </div>
        </div>
    `;
}

function simulateAriaProcessing(fileData) {
    const pane2 = document.getElementById('refinery-pane-2');
    const pane3 = document.getElementById('refinery-pane-3');

    const loadingHTML = `
        <div class="refinery-card">
            <div class="refinery-loading-state">
                <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                <p class="mt-4 text-secondary">Aria is interpreting the document...</p>
            </div>
        </div>`;
    
    pane2.innerHTML = loadingHTML;
    pane3.innerHTML = loadingHTML;

    setTimeout(() => {
        renderPane2_Interpretation(fileData);
        renderPane3_Curation(fileData);
    }, 2500);
}

function renderPane2_Interpretation(fileData) {
    const pane2 = document.getElementById('refinery-pane-2');
    pane2.innerHTML = `
        <div class="refinery-card">
            <h3 class="refinery-title">2. ARIA's Interpretation</h3>
            <div class="interpretation-content">
                <h4 class="font-semibold">AI-Generated Summary</h4>
                <p class="text-sm text-secondary mb-4">${fileData.aiSummary}</p>
                <h4 class="font-semibold">Key Entity Recognition</h4>
                <div class="entity-text-box">
                    ${fileData.entityText}
                </div>
            </div>
        </div>
    `;
}

function renderPane3_Curation(fileData) {
    const pane3 = document.getElementById('refinery-pane-3');
    pane3.innerHTML = `
        <div class="refinery-card">
            <h3 class="refinery-title">3. Curation & Contextualization</h3>
            <div class="curation-form">
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
                <div class="form-group">
                    <label for="extracted-kpi">${fileData.extracted.kpi.label}</label>
                    <input type="text" id="extracted-kpi" value="${fileData.extracted.kpi.value}">
                </div>
                <div class="form-group">
                    <label for="extracted-finding">${fileData.extracted.finding.label}</label>
                    <textarea id="extracted-finding" rows="3">${fileData.extracted.finding.value}</textarea>
                </div>
                <button class="primary-button w-full mt-4">Commit to Knowledge Base</button>
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
        externalData: ['LinkedIn', 'PitchBook', 'Glassdoor', 'Web Research', 'News Feeds'],
        internalData: ['ERP Systems', 'CRM Data', 'HCM Systems', 'DevOps Metrics', 'Customer Success', 'Financial Reports']
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