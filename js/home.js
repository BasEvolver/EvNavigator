// js/home.js - Logic for the main portfolio dashboard (index.html)

document.addEventListener('DOMContentLoaded', async () => {
    await loadSharedComponents();
    renderPortfolioPage();
    initializePortfolioEventListeners();
});

// Renders the initial, static layout of the page
function renderPortfolioPage() {
    const mainContent = document.getElementById('main-content');
    
    const companies = [
        { id: 'techflow-solutions', name: 'TechFlow Solutions', status: 'At Risk', statusColor: 'var(--status-warning)', kpis: [{label: 'ARR', value: '$55M'}, {label: 'NRR', value: '105%'}, {label: 'EBITDA', value: '22%'}] },
        { id: 'cloudvantage', name: 'CloudVantage', status: 'Healthy', statusColor: 'var(--status-success)', kpis: [{label: 'ARR', value: '$78M'}, {label: 'NRR', value: '128%'}, {label: 'EBITDA', value: '31%'}] },
        { id: 'innovate-inc', name: 'Innovate Inc.', status: 'Healthy', statusColor: 'var(--status-success)', kpis: [{label: 'ARR', value: '$120M'}, {label: 'NRR', value: '122%'}, {label: 'EBITDA', value: '18%'}] },
        { id: 'dataflow-systems', name: 'DataFlow Systems', status: 'Healthy', statusColor: 'var(--status-success)', kpis: [{label: 'ARR', value: '$32M'}, {label: 'NRR', value: '115%'}, {label: 'EBITDA', value: '25%'}] },
        { id: 'scaleops', name: 'ScaleOps', status: 'Needs Attention', statusColor: 'var(--status-warning)', kpis: [{label: 'ARR', value: '$19M'}, {label: 'NRR', value: '108%'}, {label: 'EBITDA', value: '12%'}] },
    ];

    mainContent.innerHTML = `
        <div class="portfolio-container">
            <div class="ai-briefing-card">
                <h1 class="briefing-title">Good morning. Here is the state of the business.</h1>
                <p class="briefing-text">The portfolio value is up <strong>$25M</strong> this quarter, driven by <strong>CloudVantage's</strong> strong NRR performance. Your attention is required on <strong>TechFlow Solutions</strong>, where diligence has flagged 3 critical anomalies. There is also a potential upside opportunity in <strong>ScaleOps's</strong> go-to-market strategy.</p>
            </div>
            <div class="company-strip-container">
                ${companies.map(company => `
                    <div class="company-strip-card" data-action="view-company" data-company-id="${company.id}">
                        <div class="company-strip-header">
                            <h4 class="company-strip-name">${company.name}</h4>
                            <div class="company-strip-status"><span class="status-dot" style="background-color: ${company.statusColor};"></span><span>${company.status}</span></div>
                        </div>
                        <ul class="company-strip-kpis">${company.kpis.map(kpi => `<li><span>${kpi.label}</span><span>${kpi.value}</span></li>`).join('')}</ul>
                    </div>
                `).join('')}
            </div>
            <div id="portfolio-conversation-container">${getPromptBoxHTML()}</div>
        </div>
        <input type="file" id="file-attachment-input" style="display: none;" multiple />
    `;
}

// --- CONVERSATIONAL ENGINE ---

function runPortfolioPrompt(promptText) {
    const container = document.getElementById('portfolio-conversation-container');
    if (!container) return;

    const oldPromptBox = container.querySelector('.prompt-area-large-v4');
    if (oldPromptBox) oldPromptBox.remove();

    const userPromptHTML = `<div class="user-prompt-bubble"><p class="font-semibold">You</p><p>${promptText}</p></div>`;
    container.insertAdjacentHTML('beforeend', userPromptHTML);

    const thinkingHTML = `<div class="portfolio-response-card"><p>ARIA is thinking...</p></div>`;
    container.insertAdjacentHTML('beforeend', thinkingHTML);
    
    setTimeout(() => {
        container.removeChild(container.lastChild); // Remove "thinking..."
        
        const response = portfolioResponses[promptText];
        let responseHTML = '';
        let followUpQuestions = [];

        if (response) {
            responseHTML = `<div class="portfolio-response-card">${response.renderFunc()}</div>`;
            responseHTML += renderRecommendedActions(response.recommendedActions);
            followUpQuestions = response.followUpQuestions;
        } else if (promptText.startsWith("Action:")) {
            responseHTML = `<div class="portfolio-response-card text-success"><p><strong>Action Complete:</strong> "${promptText.replace("Action: ", "")}" has been logged and the relevant document has been generated.</p></div>`;
        } else {
            responseHTML = `<div class="portfolio-response-card"><p>Sorry, I don't have a response for that specific query yet.</p></div>`;
        }
        
        container.insertAdjacentHTML('beforeend', responseHTML);
        container.insertAdjacentHTML('beforeend', getPromptBoxHTML(followUpQuestions));

        if (response && response.chartDrawFunc) {
            response.chartDrawFunc();
        }
        
        container.lastChild.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1000);
}

// --- RESPONSE DATA MAP ---

const portfolioResponses = {
    "How did the portfolio perform over the past 12 months?": {
        renderFunc: () => `<h2 class="response-title">Portfolio Performance: Last 12 Months</h2><div class="chart-wrapper"><canvas id="portfolio-performance-chart"></canvas></div><div class="chart-narrative"><p>Overall performance is strong, with a notable <strong>EBITDA dip in November</strong> from one-time integration costs and a <strong>sharp ARR spike in May</strong> driven by CloudVantage landing two major enterprise deals.</p></div>`,
        chartDrawFunc: drawPerformanceChart,
        recommendedActions: [
            { text: "Add 'CloudVantage Outperformance' to Q3 Board Deck", description: "Generate a pre-formatted slide for your next board meeting.", prompt: "Action: Add CloudVantage to Board Deck" },
            { text: "Schedule review of DataFlow integration costs", description: "Draft a meeting invite with the DataFlow CFO to review the one-time costs.", prompt: "Action: Schedule DataFlow cost review" },
            { text: "Flag CloudVantage for early exit planning", description: "Add a task to the VCP to begin exploring exit opportunities ahead of schedule.", prompt: "Action: Flag CloudVantage for exit planning" }
        ],
        followUpQuestions: [ "Which companies contributed most to the growth?", "Show me the portfolio's 'Rule of 40' score.", "How does our portfolio's NRR compare to industry benchmarks?" ]
    },
    "Forecast portfolio ARR for the next 6 months.": {
        renderFunc: () => `<h2 class="response-title">6-Month ARR Forecast with Sensitivity Analysis</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="forecast-chart"></canvas></div><div class="chart-narrative"><p>The forecast projects steady growth, with a <strong>90% confidence</strong> that ARR will land between <strong>$285M (bear case)</strong> and <strong>$305M (bull case)</strong> by January 2026. The widening sensitivity band reflects increased uncertainty in Q4.</p></div>`,
        chartDrawFunc: drawForecastChart,
        recommendedActions: [
            { text: "Update master financial model with this forecast", description: "Export and integrate these projections into the master Excel model.", prompt: "Action: Update master financial model" },
            { text: "Generate talking points for the next LP update", description: "Create a summary of this forecast for Limited Partner communications.", prompt: "Action: Generate LP talking points" },
            { text: "Identify key risks to the 'Bear Case'", description: "Analyze the top 3 factors that could lead to the lower-bound forecast.", prompt: "Action: Identify risks to Bear Case" }
        ],
        followUpQuestions: [ "What is the required hiring plan to support this forecast?", "Model the portfolio's cash runway based on this forecast.", "Which value creation lever has the biggest impact on this forecast?" ]
    },
    "Model the next 12 months assuming we acquire TechFlow.": {
        renderFunc: () => `<h2 class="response-title">24-Month Scenario: TechFlow Solutions Acquisition</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="scenario-chart"></canvas></div><div class="judgement-box warning mt-6"><p class="judgement-title">Judgement (Medium Confidence):</p><p class="judgement-text">The acquisition is accretive to ARR and accelerates growth, but initially dilutes portfolio EBITDA margin. The model assumes successful pricing initiatives and synergy realization, causing the pro-forma growth lines to diverge positively from the base case over time.</p></div>`,
        chartDrawFunc: drawScenarioChart,
        recommendedActions: [
            { text: "Add 'TechFlow Synergy Plan' to the 100-day plan workspace", description: "Create a new workstream in the Workspace to track synergy realization.", prompt: "Action: Add Synergy Plan to Workspace" },
            { text: "Draft email to legal to begin confirmatory diligence", description: "Generate a pre-written email to your legal counsel to kick off the final diligence phase.", prompt: "Action: Draft email to legal" },
            { text: "Run a scenario with 25% lower synergy realization", description: "Model a downside case to understand the impact if synergies are not fully met.", prompt: "Action: Model lower synergy case" }
        ],
        followUpQuestions: [ "What are the top 3 integration risks for the TechFlow acquisition?", "Detail the $4.5M synergy plan.", "Who are the key employees to retain at TechFlow?" ]
    },
    // --- FUP & ACTION RESPONSES ---
    "Action: Add CloudVantage to Board Deck": {
        renderFunc: () => `<h2 class="response-title">Generated Board Deck Slide</h2><div class="board-slide"><div class="slide-title">Q3 Update: CloudVantage Outperformance</div><ul><li>ARR Growth hit <strong>128% NRR</strong>, exceeding synergy targets by 15%.</li><li>Landed two strategic enterprise logos: <strong>Global Health Inc. & Apex Logistics</strong>.</li><li>Successfully launched new 'Analytics Suite' which is driving expansion revenue.</li></ul></div>`,
        chartDrawFunc: null, recommendedActions: [], followUpQuestions: ["Export this slide to PowerPoint.", "Add a chart showing NRR trend.", "Who is the deal lead for Apex Logistics?"]
    },
    "Action: Schedule DataFlow cost review": {
        renderFunc: () => `<h2 class="response-title">Generated Email Draft</h2><div class="email-draft"><p><strong>To:</strong> cfo@dataflow.com</p><p><strong>Subject:</strong> Quick Sync: Q4 Integration Costs</p><hr/><p>Hi John,</p><p>Hope you're well. As we prepare for the Q1 board meeting, I wanted to schedule a brief 30-minute review of the one-time integration costs incurred in November. Our goal is to ensure we've accurately categorized them to provide a clear picture of run-rate EBITDA.</p><p>Please let me know what time works best for you next week.</p><p>Best,</p></div>`,
        chartDrawFunc: null, recommendedActions: [], followUpQuestions: ["Send the email.", "Add this to my calendar for next week.", "What were the original synergy estimates?"]
    },
    "Which companies contributed most to the growth?": {
        renderFunc: () => `<h2 class="response-title">LTM ARR Growth Contribution</h2><div class="chart-wrapper" style="height: 250px;"><canvas id="contribution-chart"></canvas></div>`,
        chartDrawFunc: drawContributionChart, recommendedActions: [], followUpQuestions: ["How does CloudVantage's growth compare to its peers?", "What is Innovate Inc.'s value creation plan?", "Why is ScaleOps's growth lagging?"]
    },
    "Show me the portfolio's 'Rule of 40' score.": {
        renderFunc: () => `<h2 class="response-title">Portfolio 'Rule of 40' Analysis</h2><div class="kpi-grid"><div class="kpi-card"><p class="kpi-label">LTM Revenue Growth</p><p class="kpi-value">31%</p></div><div class="kpi-card"><p class="kpi-label">LTM EBITDA Margin</p><p class="kpi-value">25%</p></div><div class="kpi-card" style="border-color: var(--status-success);"><p class="kpi-label">Rule of 40 Score</p><p class="kpi-value text-success">56%</p></div></div><div class="judgement-box success mt-6"><p class="judgement-title">Judgement:</p><p class="judgement-text">The portfolio is healthy, exceeding the 40% benchmark. This indicates an efficient balance of growth and profitability.</p></div>`,
        chartDrawFunc: null, recommendedActions: [], followUpQuestions: ["Which companies are dragging down the average?", "Model the impact of a 5% margin improvement.", "How has this score trended over time?"]
    },
    "How does our portfolio's NRR compare to industry benchmarks?": {
        renderFunc: () => `<h2 class="response-title">Net Revenue Retention vs. SaaS Benchmark</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="nrr-chart"></canvas></div>`,
        chartDrawFunc: drawNrrChart, recommendedActions: [], followUpQuestions: ["What is CloudVantage's gross retention?", "What is the plan to improve TechFlow's NRR?", "Which product has the highest upsell rate?"]
    },
    "What are the top 3 integration risks for the TechFlow acquisition?": {
        renderFunc: () => `<h2 class="response-title">Top 3 Integration Risks: TechFlow</h2><div class="list-container"><div class="list-item"><span class="list-number text-error">1</span><div><h4 class="list-title">Technical Debt</h4><p class="list-text">The legacy monolith will slow down product integration and requires a $4.5M remediation budget, impacting short-term EBITDA.</p></div></div><div class="list-item"><span class="list-number text-warning">2</span><div><h4 class="list-title">Customer Concentration</h4><p class="list-text">Losing Global FinCorp (28% of ARR) post-acquisition would severely impact the deal thesis. A renewal must be secured.</p></div></div><div class="list-item"><span class="list-number text-warning">3</span><div><h4 class="list-title">Sales Team Inexperience</h4><p class="list-text">The current sales team has no experience with a structured, PE-backed growth motion. Significant training will be required.</p></div></div></div>`,
        chartDrawFunc: null, recommendedActions: [], followUpQuestions: ["Draft a 100-day plan for the technical debt.", "What is the renewal status of Global FinCorp?", "Generate a sales team onboarding plan."]
    },
    "Detail the $4.5M synergy plan.": {
        renderFunc: () => `<h2 class="response-title">TechFlow Synergy Plan Breakdown</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="synergy-chart"></canvas></div>`,
        chartDrawFunc: drawSynergyChart, recommendedActions: [], followUpQuestions: ["What are the biggest risks to this synergy plan?", "Who is responsible for tracking these synergies?", "How does this compare to similar deals?"]
    },
    "Who are the key employees to retain at TechFlow?": {
        renderFunc: () => `<h2 class="response-title">Key Employee Retention Targets: TechFlow</h2><div class="people-grid"><div class="person-card"><h4>Sarah Jenkins</h4><p>VP, Engineering</p><span>Deep institutional knowledge of the legacy platform. Critical for migration.</span></div><div class="person-card"><h4>Michael Chen</h4><p>Lead Sales Engineer</p><span>Trusted by top customers, including Global FinCorp. Highest technical win rate.</span></div><div class="person-card"><h4>Emily Rodriguez</h4><p>Product Manager</p><span>Authored the original product vision and has the strongest customer relationships.</span></div></div>`,
        chartDrawFunc: null, recommendedActions: [], followUpQuestions: ["Draft retention packages for these employees.", "What is their current compensation?", "Identify potential backfill candidates."]
    },
};

// --- HELPER & UI RENDERING FUNCTIONS ---

function getPromptBoxHTML(questions = []) {
    const initialPrompts = [
        { text: "How did the portfolio perform over the past 12 months?" },
        { text: "Forecast portfolio ARR for the next 6 months." },
        { text: "Model the next 12 months assuming we acquire TechFlow." }
    ];
    const promptsToUse = questions.length > 0 ? questions.map(q => ({text: q})) : initialPrompts;
    const state = loadState();

    return `
        <div class="prompt-area-large-v4">
            <div class="suggestion-pills-container">
                ${promptsToUse.map(p => `<button class="suggestion-pill" data-prompt="${p.text}">${p.text}</button>`).join('')}
            </div>
            <textarea id="aria-prompt-input" class="prompt-textarea" rows="3" placeholder="Ask a follow-up about the portfolio..."></textarea>
            <div id="file-attachment-display" class="file-attachment-display"></div>
            <div class="prompt-actions-bottom-bar">
                <div class="prompt-actions-left">
                    <button data-action="attach-file" class="prompt-action-button" title="Attach File"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg></button>
                    <div class="relative">
                        <button data-action="toggle-settings-modal" class="prompt-action-button" title="Settings"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg></button>
                        ${renderSettingsModal(state.ariaSettings)}
                    </div>
                </div>
                <div class="prompt-actions-right">
                    <button data-action="restart-conversation" class="prompt-action-button" title="Restart"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg></button>
                    <button class="prompt-send-button" data-action="ask-aria" title="Send"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg></button>
                </div>
            </div>
        </div>
    `;
}

function renderRecommendedActions(actions) {
    if (!actions || actions.length === 0) return '';
    return `<div class="recommended-actions-container">
                <h4 class="list-header">Recommended Actions</h4>
                <div class="actions-list">
                    ${actions.map(a => `
                        <button class="suggested-action-card" data-prompt="${a.prompt}">
                            <p class="font-semibold text-sm text-primary">${a.text}</p>
                            <p class="text-xs text-secondary">${a.description}</p>
                        </button>`).join('')}
                </div>
            </div>`;
}

function renderSettingsModal(settings) {
    const { isModalOpen, expandedCategories = {} } = settings;
    
    const settingsStructure = {
        context: { label: 'Context', main: settings.context?.main, items: { ddDataRoom: 'DD Data Room', investmentThesis: 'Investment Thesis', financialModel: 'Financial Model', meetingTranscripts: 'Meeting Transcripts' } },
        domainKnowledge: { label: 'Domain Knowledge', main: settings.domainKnowledge?.main, items: { playbooks: 'Playbooks', kpiLibrary: 'KPI Library', maturityModel: 'Maturity Model', industryBenchmarks: 'Industry Benchmarks' } },
        externalData: { label: 'External Data', main: settings.externalData?.main, items: { linkedin: 'LinkedIn', pitchbook: 'PitchBook', glassdoor: 'Glassdoor', web: 'Web Research' } },
        internalData: { label: 'Internal Data', main: settings.internalData?.main, items: { erp: 'ERP Systems', crm: 'CRM Data', hcm: 'HCM Systems', devops: 'DevOps Metrics' } }
    };

    const renderCategory = (categoryKey, category) => {
        const isExpanded = expandedCategories[categoryKey] || false;
        const subItemsHTML = Object.entries(category.items).map(([itemKey, itemLabel]) => `
            <div class="flex items-center justify-between pl-6 py-1"><label for="setting-${categoryKey}-${itemKey}" class="text-xs text-secondary">${itemLabel}</label><label class="toggle-switch toggle-switch-sm"><input type="checkbox" id="setting-${categoryKey}-${itemKey}" data-action="update-setting" data-parent="${categoryKey}" data-key="${itemKey}" ${settings[categoryKey]?.[itemKey] ? 'checked' : ''}><span class="slider round"></span></label></div>`).join('');

        return `<div class="border-b border-border-color last:border-b-0"><div class="flex items-center justify-between py-2 cursor-pointer" data-action="toggle-category" data-category="${categoryKey}"><div class="flex items-center gap-2"><svg class="w-4 h-4 text-text-muted transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg><span class="text-sm font-bold text-text-primary">${category.label}</span></div><label class="toggle-switch" onclick="event.stopPropagation();"><input type="checkbox" data-action="update-setting" data-parent="${categoryKey}" data-key="main" ${category.main ? 'checked' : ''}><span class="slider round"></span></label></div><div class="category-content ${isExpanded ? 'expanded' : ''}">${subItemsHTML}</div></div>`;
    };

    return `<div id="settings-modal" class="settings-modal ${isModalOpen ? 'visible' : ''}" style="bottom: 125%; left: 0;">
                <div class="p-3 space-y-1 text-sm">
                    <div class="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 pb-1 border-b border-border-color">Data Sources</div>
                    ${Object.entries(settingsStructure).map(([key, category]) => renderCategory(key, category)).join('')}
                </div>
            </div>`;
}

// --- CHART DRAWING LOGIC ---

function drawPerformanceChart() {
    const ctx = document.getElementById('portfolio-performance-chart')?.getContext('2d');
    if (!ctx) return;
    const labels = ['Aug 24', 'Sep 24', 'Oct 24', 'Nov 24', 'Dec 24', 'Jan 25', 'Feb 25', 'Mar 25', 'Apr 25', 'May 25', 'Jun 25', 'Jul 25'];
    const arrData = [180, 185, 190, 192, 195, 200, 205, 210, 215, 240, 245, 250];
    const ebitdaData = [45, 46, 47, 42, 48, 50, 52, 53, 55, 60, 62, 63];
    const annotations = {
        ebitdaDip: { x: 'Nov 24', y: 42, label: 'DataFlow Integration Costs' },
        arrSpike: { x: 'May 25', y: 240, label: 'CloudVantage Enterprise Deals' }
    };
    const style = getComputedStyle(document.body);
    const accentBlue = style.getPropertyValue('--accent-blue').trim();
    const accentTeal = style.getPropertyValue('--accent-teal').trim();
    const borderColor = style.getPropertyValue('--border-color').trim();
    const textColor = style.getPropertyValue('--text-primary').trim();
    const cardBg = style.getPropertyValue('--bg-card').trim();
    const statusWarning = style.getPropertyValue('--status-warning').trim();
    const statusSuccess = style.getPropertyValue('--status-success').trim();
    new Chart(ctx, {
        type: 'line',
        data: { labels, datasets: [ { label: 'Portfolio ARR ($M)', data: arrData, borderColor: accentBlue, yAxisID: 'y', tension: 0.4 }, { label: 'Portfolio EBITDA ($M)', data: ebitdaData, borderColor: accentTeal, yAxisID: 'y1', tension: 0.4 } ] },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { x: { grid: { display: false } }, y: { position: 'left', grid: { color: borderColor }, ticks: { callback: (v) => `$${v}M` } }, y1: { position: 'right', grid: { display: false }, ticks: { callback: (v) => `$${v}M` } } },
            plugins: { legend: { position: 'top', labels: { color: textColor } }, annotation: { annotations: {
                point1: { type: 'point', xValue: annotations.ebitdaDip.x, yValue: annotations.ebitdaDip.y, backgroundColor: `${statusWarning}33`, borderColor: statusWarning, borderWidth: 2, radius: 8 },
                label1: { type: 'label', xValue: annotations.ebitdaDip.x, yValue: annotations.ebitdaDip.y, content: annotations.ebitdaDip.label, position: 'start', yAdjust: -15, backgroundColor: cardBg, color: textColor, padding: 6, borderRadius: 6, font: { weight: 'bold' } },
                point2: { type: 'point', xValue: annotations.arrSpike.x, yValue: annotations.arrSpike.y, backgroundColor: `${statusSuccess}33`, borderColor: statusSuccess, borderWidth: 2, radius: 8 },
                label2: { type: 'label', xValue: annotations.arrSpike.x, yValue: annotations.arrSpike.y, content: annotations.arrSpike.label, position: 'end', yAdjust: -15, backgroundColor: cardBg, color: textColor, padding: 6, borderRadius: 6, font: { weight: 'bold' } }
            }}}
        }
    });
}

function drawForecastChart() {
    const ctx = document.getElementById('forecast-chart')?.getContext('2d');
    if (!ctx) return;
    const labels = ['Aug 25', 'Sep 25', 'Oct 25', 'Nov 25', 'Dec 25', 'Jan 26'];
    const forecastData = [258, 265, 272, 278, 285, 292];
    const upperBound = [260, 268, 277, 285, 295, 305];
    const lowerBound = [256, 262, 267, 271, 275, 285];
    const style = getComputedStyle(document.body);
    const accentBlue = style.getPropertyValue('--accent-blue').trim();
    const borderColor = style.getPropertyValue('--border-color').trim();
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                { label: 'Forecast ARR', data: forecastData, borderColor: accentBlue, tension: 0.4, borderWidth: 3 },
                { label: 'Sensitivity Range', data: upperBound, borderColor: 'transparent', backgroundColor: `${accentBlue}26`, fill: 0, pointRadius: 0 },
                { label: 'Lower Bound', data: lowerBound, borderColor: 'transparent', backgroundColor: `${accentBlue}26`, fill: 1, pointRadius: 0 }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { x: { grid: { display: false } }, y: { grid: { color: borderColor }, ticks: { callback: (v) => `$${v}M` } } },
            plugins: { legend: { display: false } }
        }
    });
}

function drawScenarioChart() {
    const ctx = document.getElementById('scenario-chart')?.getContext('2d');
    if (!ctx) return;
    const labels = Array.from({ length: 24 }, (_, i) => { const d = new Date(2025, i); return d.toLocaleString('default', { month: 'short' }) + ` '${d.getFullYear().toString().substr(-2)}`; });
    let baseARR = [250], scenarioARR = [305], baseEBITDA = [63], scenarioEBITDA = [75];
    for (let i = 1; i < 24; i++) {
        const month = i % 12;
        const seasonalFactor = (month === 9 || month === 10) ? 1.05 : 1; // Q4 bump
        const baseGrowth = (1 + Math.random() * 0.005 + 0.015) * seasonalFactor;
        const scenarioSynergyFactor = 1 + (i / 24) * 0.01; // Synergies slowly ramp up
        const scenarioGrowth = baseGrowth * scenarioSynergyFactor;
        baseARR.push(baseARR[i-1] * baseGrowth);
        scenarioARR.push(scenarioARR[i-1] * scenarioGrowth);
        baseEBITDA.push(baseARR[i] * (0.25 + (Math.random() - 0.5) * 0.02)); // 25% margin with variance
        scenarioEBITDA.push(scenarioARR[i] * (0.23 + (i / 24) * 0.03 + (Math.random() - 0.5) * 0.02)); // Margin starts lower but improves
    }
    const style = getComputedStyle(document.body);
    const accentBlue = style.getPropertyValue('--accent-blue').trim();
    const accentTeal = style.getPropertyValue('--accent-teal').trim();
    const borderColor = style.getPropertyValue('--border-color').trim();
    const textColor = style.getPropertyValue('--text-primary').trim();
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                { label: 'Pro-Forma ARR', data: scenarioARR, borderColor: accentBlue, yAxisID: 'y', tension: 0.2, borderWidth: 3, pointRadius: 0 },
                { label: 'Base Case ARR', data: baseARR, borderColor: accentBlue, yAxisID: 'y', tension: 0.2, borderDash: [5, 5], pointRadius: 0 },
                { label: 'Pro-Forma EBITDA', data: scenarioEBITDA, borderColor: accentTeal, yAxisID: 'y', tension: 0.2, borderWidth: 3, pointRadius: 0 },
                { label: 'Base Case EBITDA', data: baseEBITDA, borderColor: accentTeal, yAxisID: 'y', tension: 0.2, borderDash: [5, 5], pointRadius: 0 },
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { x: { grid: { display: false } }, y: { position: 'left', grid: { color: borderColor }, ticks: { callback: (v) => `$${Math.round(v)}M` } } },
            plugins: { legend: { position: 'top', labels: { color: textColor, usePointStyle: true } } }
        }
    });
}

function drawContributionChart() {
    const ctx = document.getElementById('contribution-chart')?.getContext('2d');
    if (!ctx) return;
    const style = getComputedStyle(document.body);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['CloudVantage', 'Innovate Inc.', 'DataFlow', 'ScaleOps'],
            datasets: [{
                label: 'LTM ARR Growth ($M)',
                data: [35, 18, 8, 4],
                backgroundColor: [style.getPropertyValue('--status-success'), style.getPropertyValue('--accent-blue'), style.getPropertyValue('--accent-teal'), style.getPropertyValue('--purple')],
            }]
        },
        options: {
            indexAxis: 'y', responsive: true, maintainAspectRatio: false,
            scales: { x: { grid: { color: style.getPropertyValue('--border-color') } }, y: { grid: { display: false } } },
            plugins: { legend: { display: false } }
        }
    });
}

function drawNrrChart() {
    const ctx = document.getElementById('nrr-chart')?.getContext('2d');
    if (!ctx) return;
    const style = getComputedStyle(document.body);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['CloudVantage', 'Innovate Inc.', 'DataFlow', 'ScaleOps', 'TechFlow'],
            datasets: [
                { label: 'Portfolio NRR', data: [128, 122, 115, 108, 105], backgroundColor: style.getPropertyValue('--accent-blue') },
                { label: 'Benchmark (Best-in-Class)', data: [125, 125, 125, 125, 125], type: 'line', borderColor: style.getPropertyValue('--status-success'), borderDash: [5, 5], borderWidth: 2, pointRadius: 0 }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { x: { grid: { display: false } }, y: { grid: { color: style.getPropertyValue('--border-color') }, ticks: { callback: (v) => `${v}%` } } },
            plugins: { legend: { position: 'top', labels: { color: style.getPropertyValue('--text-primary') } } }
        }
    });
}

function drawSynergyChart() {
    const ctx = document.getElementById('synergy-chart')?.getContext('2d');
    if (!ctx) return;
    const style = getComputedStyle(document.body);
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['G&A Redundancy', 'Platform Hosting', 'Marketing Tech Stack', 'Facilities'],
            datasets: [{
                data: [2.1, 1.2, 0.8, 0.4],
                backgroundColor: [style.getPropertyValue('--accent-blue'), style.getPropertyValue('--accent-teal'), style.getPropertyValue('--purple'), style.getPropertyValue('--status-warning')],
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { position: 'right', labels: { color: style.getPropertyValue('--text-primary') } }, title: { display: true, text: 'Total Synergy Value: $4.5M', color: style.getPropertyValue('--text-primary') } }
        }
    });
}

// --- EVENT LISTENERS & HANDLERS ---

function initializePortfolioEventListeners() {
    const mainContent = document.getElementById('main-content');
    
    mainContent.addEventListener('click', e => {
        const target = e.target.closest('[data-action], [data-prompt]');
        if (!target) return;

        if (target.dataset.prompt) {
            runPortfolioPrompt(target.dataset.prompt);
        }

        const action = target.dataset.action;
        let state = loadState();

        switch(action) {
            case 'ask-aria':
                const input = document.getElementById('aria-prompt-input');
                if (input && input.value.trim()) {
                    runPortfolioPrompt(input.value.trim());
                    input.value = '';
                }
                break;
            case 'view-company':
                const companyId = target.closest('[data-company-id]').dataset.companyId;
                window.location.href = `portco.html?company=${companyId}`;
                break;
            case 'restart-conversation':
                const conversationContainer = document.getElementById('portfolio-conversation-container');
                if (conversationContainer) {
                    conversationContainer.innerHTML = getPromptBoxHTML();
                }
                break;
            case 'attach-file':
                document.getElementById('file-attachment-input').click();
                break;
            case 'toggle-settings-modal':
                state.ariaSettings.isModalOpen = !state.ariaSettings.isModalOpen;
                saveState(state);
                reRenderPromptBox();
                break;
            case 'toggle-category':
                const categoryKey = target.closest('[data-category]').dataset.category;
                state.ariaSettings.expandedCategories[categoryKey] = !state.ariaSettings.expandedCategories[categoryKey];
                saveState(state);
                reRenderPromptBox();
                break;
        }
    });

    mainContent.addEventListener('change', e => {
        const target = e.target.closest('[data-action="update-setting"]');
        if (!target) return;
        let state = loadState();
        const { parent, key } = target.dataset;
        if (parent && key) {
            state.ariaSettings[parent][key] = target.checked;
            saveState(state);
            reRenderPromptBox();
        }
    });

    const fileInput = document.getElementById('file-attachment-input');
    if(fileInput) fileInput.addEventListener('change', handleFileAttachment);
}

function handleFileAttachment(e) {
    const displayContainer = document.getElementById('file-attachment-display');
    if (!displayContainer) return;
    displayContainer.innerHTML = '';
    for (const file of e.target.files) {
        const filePillHTML = `<div class="file-pill"><span>${file.name}</span></div>`;
        displayContainer.innerHTML += filePillHTML;
    }
}

function reRenderPromptBox() {
    const promptContainer = document.querySelector('.prompt-area-large-v4');
    if(promptContainer) {
        const currentQuestions = Array.from(promptContainer.querySelectorAll('.suggestion-pill')).map(p => p.dataset.prompt);
        promptContainer.outerHTML = getPromptBoxHTML(currentQuestions);
    }
}