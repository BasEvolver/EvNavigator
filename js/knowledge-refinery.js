// js/knowledge-refinery.js - Interactive workflow for document ingestion

// --- MOCK DATA FOR SIMULATION ---
// We'll pretend the user uploads one of these files, and we'll use this data to populate the panes.
const mockDocumentData = {
    'Financial_Statements_2024.pdf': {
        summary: "This document contains the audited financial statements for TechFlow Solutions for the fiscal year ending 2024. It includes the Income Statement, Balance Sheet, and Cash Flow Statement, along with auditor's notes.",
        aiSummary: "The document indicates a reported ARR of $12M. However, analysis of the auditor's notes reveals a non-standard revenue recognition policy for perpetual licenses, potentially overstating the true recurring revenue.",
        entityText: `...the company's reported <mark class="entity-kpi">Annual Recurring Revenue (ARR) reached $12M</mark> for FY2024. A significant portion of this is derived from the <mark class="entity-company">Global FinCorp</mark> account, which is up for renewal in <mark class="entity-date">Q4 2025</mark>. The auditor's notes highlight a <mark class="entity-risk">non-standard revenue recognition policy</mark> for perpetual licenses...`,
        metadata: {
            entity: 'techflow-solutions',
            sourceType: 'internalData',
            subSourceType: 'financialReports',
            tags: 'FY2024, Audited, ARR Analysis'
        },
        extracted: {
            kpi: { label: 'KPI: ARR', value: '$12,000,000' },
            finding: { label: 'Key Finding:', value: 'Non-standard revenue recognition policy for perpetual licenses overstates true recurring revenue.' }
        }
    },
    'GTM_Strategy_Deck.pptx': {
        summary: "A PowerPoint presentation from the TechFlow CRO outlining the go-to-market strategy for the next 18 months. It covers sales methodology, channel partnerships, and marketing funnel targets.",
        aiSummary: "The GTM strategy relies heavily on an EMEA expansion and a new channel partner program. The plan projects 40% new ARR growth, but analysis shows historical performance is only 15%, indicating a significant credibility gap.",
        entityText: `...our growth will be driven by a <mark class="entity-risk">40% increase in new ARR</mark>, primarily from the <mark class="entity-kpi">EMEA expansion</mark>. Our key partner, <mark class="entity-company">EuroSystems GmbH</mark>, will be critical. The sales team must adopt the <mark class="entity-kpi">MEDDIC methodology</mark> by <mark class="entity-date">end of Q3</mark>...`,
        metadata: {
            entity: 'techflow-solutions',
            sourceType: 'context',
            subSourceType: 'ddDataRoom',
            tags: 'GTM, Sales, Strategy, EMEA'
        },
        extracted: {
            kpi: { label: 'KPI: Projected New ARR Growth', value: '40%' },
            finding: { label: 'Key Finding:', value: 'Strategic plan has a credibility gap; projected growth (40%) is not supported by historical performance (15%).' }
        }
    }
};

const ICONS = {
    pdf: `<svg class="w-12 h-12 text-red-500" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.5 18H8v-5h1.5a1.5 1.5 0 0 1 0 3H9v2zm2.5-2.5a1.5 1.5 0 0 1-3 0V13h3v2.5zM16 18h-1.8l-1.2-5h1.5l.7 3.4.7-3.4h1.5l-1.2 5z"/></svg>`,
    word: `<svg class="w-12 h-12 text-blue-600" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.5 15.5H11L12 18h1.5l-2.25-6H9.75L7.5 18H9l1-2.5zm-2-3.5L9 8h1.5l1.5 4H10l-.75-2.25L8.5 12H7.5z"/></svg>`,
    powerpoint: `<svg class="w-12 h-12 text-orange-500" viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM8 18v-5h1.5a1.5 1.5 0 0 1 0 3H8v2zm7-5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5H13V13h2z"/></svg>`
};

document.addEventListener('DOMContentLoaded', async () => {
    // This event listener waits for ALL scripts to be loaded and the page to be ready.
    // THEN it runs the page-aware check.
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

    // Ensure panes exist before trying to modify them
    if (!pane1 || !pane2 || !pane3) {
        console.error("Refinery panes not found in the DOM.");
        return;
    }

    pane1.innerHTML = `
        <div class="refinery-card">
            <h3 class="refinery-title">1. Source Document</h3>
            <button id="upload-report-btn" class="primary-button w-full mb-4">Upload Report...</button>
            <div class="refinery-empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                <p>Upload a document to begin the curation process.</p>
            </div>
        </div>
    `;
    pane2.innerHTML = `<div class="refinery-card"><h3 class="refinery-title">2. ARIA's Interpretation</h3><div class="refinery-empty-state"><p>Awaiting document upload...</p></div></div>`;
    pane3.innerHTML = `<div class="refinery-card"><h3 class="refinery-title">3. Curation & Contextualization</h3><div class="refinery-empty-state"><p>Awaiting document upload...</p></div></div>`;
}

function initializeRefineryListeners() {
    const uploadButton = document.getElementById('upload-report-btn');
    const fileInput = document.getElementById('file-upload-input');

    if (uploadButton && fileInput) {
        uploadButton.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', handleFileSelect);
    }
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    // For simulation, we'll use our mock data. A real app would use the file name or content.
    const mockDataKey = file.name.includes('GTM') ? 'GTM_Strategy_Deck.pptx' : 'Financial_Statements_2024.pdf';
    const fileData = mockDocumentData[mockDataKey];
    
    renderPane1_Preview(file, fileData);
    simulateAriaProcessing(fileData);
}

function renderPane1_Preview(file, fileData) {
    const pane1 = document.getElementById('refinery-pane-1');
    const fileExtension = file.name.split('.').pop().toLowerCase();
    let icon = ICONS.pdf;
    if (fileExtension.includes('doc')) icon = ICONS.word;
    if (fileExtension.includes('ppt')) icon = ICONS.powerpoint;

    pane1.innerHTML = `
        <div class="refinery-card">
            <h3 class="refinery-title">1. Source Document</h3>
            <button id="upload-report-btn" class="secondary-button w-full mb-4">Upload a Different Report...</button>
            <div class="source-document-viewer">
                <div class="file-preview-card">
                    ${icon}
                    <div class="file-info">
                        <h4 class="font-bold">${file.name}</h4>
                        <p class="text-xs text-secondary">${(file.size / 1024).toFixed(1)} KB</p>
                    </div>
                </div>
                <p class="text-sm text-secondary mt-4">${fileData.summary}</p>
            </div>
        </div>
    `;
    // Re-attach listener to the new button
    document.getElementById('upload-report-btn').addEventListener('click', () => {
        document.getElementById('file-upload-input').click();
    });
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
    }, 2500); // 2.5 second delay
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

    // Initialize and set the values for the cascading dropdowns
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

    // Set initial values from the file data
    entitySelect.value = metadata.entity;
    sourceTypeSelect.value = metadata.sourceType;
    populateSubSource(); // Populate the sub-source dropdown
    subSourceTypeSelect.value = metadata.subSourceType; // Then set its value
}