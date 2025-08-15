// js/home.js - Logic for the main portfolio dashboard (index.html)

document.addEventListener('DOMContentLoaded', async () => {
    await loadSharedComponents();
    
    // CHECK: Only run if we are on the home page
    if (Navigation.getCurrentPage() === 'index') {
        renderPortfolioPage();
        initializePortfolioEventListeners();
    }
});

// Returns a greeting based on the current time of day
function getDynamicGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return 'Good morning.';
    } else if (hour < 18) {
        return 'Good afternoon.';
    } else {
        return 'Good evening.';
    }
}

// Renders the initial, static layout of the page
function renderPortfolioPage() {
    const mainContent = document.getElementById('main-content');
    
    const companies = [
        { id: 'techflow-solutions', name: 'TechFlow Solutions', stage: 'Due Diligence', status: 'At Risk', statusColor: 'var(--status-warning)', kpis: [{label: 'ARR', value: '$55M'}, {label: 'NRR', value: '105%'}, {label: 'EBITDA', value: '22%'}] },
        { id: 'cloudvantage', name: 'CloudVantage', stage: 'Growth', status: 'Healthy', statusColor: 'var(--status-success)', kpis: [{label: 'ARR', value: '$78M'}, {label: 'NRR', value: '128%'}, {label: 'EBITDA', value: '31%'}] },
        { id: 'innovate-inc', name: 'Innovate Inc.', stage: 'Growth', status: 'Healthy', statusColor: 'var(--status-success)', kpis: [{label: 'ARR', value: '$120M'}, {label: 'NRR', value: '122%'}, {label: 'EBITDA', value: '18%'}] },
        { id: 'dataflow-systems', name: 'DataFlow Systems', stage: 'Strategy', status: 'Healthy', statusColor: 'var(--status-success)', kpis: [{label: 'ARR', value: '$32M'}, {label: 'NRR', value: '115%'}, {label: 'EBITDA', value: '25%'}] },
        { id: 'scaleops', name: 'ScaleOps', stage: 'Transformation', status: 'Needs Attention', statusColor: 'var(--status-warning)', kpis: [{label: 'ARR', value: '$19M'}, {label: 'NRR', value: '108%'}, {label: 'EBITDA', value: '12%'}] },
    ];

    mainContent.innerHTML = `
        <div class="portfolio-container">
            <div class="ai-briefing-card">
                <h1 class="briefing-title">${getDynamicGreeting()} Here is the state of the business.</h1>
                <p class="briefing-text">The portfolio value is up <strong>$25M</strong> this quarter, driven by <strong>CloudVantage's</strong> strong NRR performance. Your attention is required on <strong>TechFlow Solutions</strong>, where diligence has flagged 3 critical and 12 other anomalies. There is also a potential upside opportunity in <strong>ScaleOps's</strong> go-to-market strategy.</p>
                
                <div class="mt-6 pt-6 border-t border-border-color">
                    <div class="priority-alerts-container">
                        <div class="priority-alerts-header" data-action="toggle-priority-alerts">
                            <h4 class="priority-alerts-title">Priority Alerts (3)</h4>
                            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </div>
                        <div class="priority-alerts-grid collapsed">
                            <button class="suggested-action-card" data-action="navigate-to-portco-task" data-company-id="techflow-solutions" data-task-id="DD-16" data-expand-phase="phase-Phase2-DeepDive">
                                <p class="font-semibold text-sm text-primary">[TechFlow] Technical Diligence Blocked</p>
                                <p class="text-xs text-secondary">The 'Code Scan' task is late, blocking the entire Technology workstream.</p>
                            </button>
                            <button class="suggested-action-card" data-action="navigate-to-aria-with-prompt" data-company-id="techflow-solutions" data-prompt-text="Provide an overview of the current registered anomalies." data-workstream-id="financial">
                                <p class="font-semibold text-sm text-primary">[TechFlow] Critical Anomalies Discovered</p>
                                <p class="text-xs text-secondary">3 critical and 12 other anomalies could materially impact valuation.</p>
                            </button>
                            <button class="suggested-action-card" data-action="view-company" data-company-id="cloudvantage">
                                <p class="font-semibold text-sm text-primary">[CloudVantage] AI Feature Launch At Risk</p>
                                <p class="text-xs text-secondary">The flagship AI-Powered Feature is behind schedule, putting the critical Q4 launch at risk.</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="company-strip-container">
                ${companies.map(company => `
                    <div class="company-strip-card" data-action="view-company" data-company-id="${company.id}">
                        <div class="company-strip-header">
                            <div>
                                <h4 class="company-strip-name">${company.name}</h4>
                                <p class="company-strip-stage">${company.stage}</p>
                            </div>
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
    "Show me the priority alerts.": {
        renderFunc: () => `
            <h2 class="response-title">Top 3 Priority Alerts</h2>
            <div class="list-container">
                <div class="list-item">
                    <span class="list-number text-error">1</span>
                    <div>
                        <h4 class="list-title">[TechFlow] Technical Diligence Blocked</h4>
                        <p class="list-text">The 'Code Scan' (DD-16) task is late and blocking the Technology workstream. We are waiting for the target's CTO to provide GitHub credentials.</p>
                    </div>
                </div>
                <div class="list-item">
                    <span class="list-number text-error">2</span>
                    <div>
                        <h4 class="list-title">[TechFlow] Critical Anomalies Discovered</h4>
                        <p class="list-text">ARIA has flagged 2 critical anomalies: Non-Standard ARR Composition and Failed Recent Product Launches. These could materially impact valuation.</p>
                    </div>
                </div>
                <div class="list-item">
                    <span class="list-number text-warning">3</span>
                    <div>
                        <h4 class="list-title">[CloudVantage] AI Feature Launch At Risk</h4>
                        <p class="list-text">The 'AI-Powered Feature' development is behind schedule due to technical complexities. This puts the critical Q4 launch at risk.</p>
                    </div>
                </div>
            </div>`,
        chartDrawFunc: null,
        recommendedActions: [
            { text: "Draft escalation email to TechFlow CTO", description: "Generate an email to the CTO regarding the urgent need for GitHub credentials.", prompt: "Action: Draft escalation to TechFlow CTO" },
            { text: "Generate risk mitigation plan for CloudVantage", description: "Use ARIA to create a plan to get the delayed AI feature back on track.", prompt: "Action: Generate CloudVantage risk plan" },
            { text: "View full anomaly report for TechFlow", description: "Navigate to the ARIA workspace to see the detailed anomaly findings.", prompt: "Action: View TechFlow Anomaly Report" }
        ],
        followUpQuestions: [ "What is the financial impact of the TechFlow anomalies?", "Who is the lead engineer on the CloudVantage AI feature?", "What is the new critical path for the TechFlow diligence?" ]
    },
    "Drill down on the TechFlow diligence block.": {
        renderFunc: () => `
            <h2 class="response-title">Alert Deep Dive: TechFlow Diligence Block</h2>
            <div class="judgement-box error mt-4">
                <p class="judgement-title">Situation:</p>
                <p class="judgement-text">The 'Code Scan' (DD-16) task is now 3 days late. This is a critical dependency for the 'Documentation' (DD-17) and 'QA Testing Review' (DD-18) tasks. The entire Technology workstream is blocked until we receive admin-level access to the target's private GitHub repository from their CTO.</p>
            </div>
            <div class="chart-narrative">
                <p>A 3-day delay on this task consumes all remaining slack in the Technology workstream, putting the final 'Comprehensive DD Report' (DD-68) delivery date at risk. Any further delays will push out the final deadline.</p>
            </div>`,
        chartDrawFunc: null,
        recommendedActions: [
            { text: "Draft escalation email to TechFlow CTO", description: "Generate a polite but firm email regarding the urgent need for GitHub credentials.", prompt: "Action: Draft escalation to TechFlow CTO" },
            { text: "Assess critical path impact of a 5-day delay", description: "Model the cascading effects if the delay extends to a full week.", prompt: "Assess the critical path impact of a 5-day delay on task DD-16." }
        ],
        followUpQuestions: ["What is the new critical path for the TechFlow diligence?", "Re-plan the project with a compressed QA cycle."]
    },
    "Analyze the critical anomalies at TechFlow.": {
        renderFunc: () => `
            <h2 class="response-title">Alert Deep Dive: TechFlow Critical Anomalies</h2>
            <div class="list-container">
                <div class="list-item">
                    <span class="list-number text-error">1</span>
                    <div>
                        <h4 class="list-title">Non-Standard ARR Composition</h4>
                        <p class="list-text">Analysis of the financials reveals that only 59% ($7.08M) of the reported $12M ARR is true, recurring subscription revenue. The remainder is comprised of non-standard perpetual license amortization and legacy maintenance fees, which will require a significant valuation adjustment.</p>
                    </div>
                </div>
                <div class="list-item">
                    <span class="list-number text-error">2</span>
                    <div>
                        <h4 class="list-title">Failed Recent Product Launches</h4>
                        <p class="list-text">The last three major product launches have generated zero revenue, despite a combined R&D investment of $3.2M. This indicates critical issues with product-market fit and go-to-market execution, questioning future growth projections.</p>
                    </div>
                </div>
            </div>`,
        chartDrawFunc: null,
        recommendedActions: [
            { text: "Model the financial impact of the ARR re-statement", description: "Simulate the valuation impact of adjusting ARR from $12M to $7.08M.", prompt: "Model the financial impact of 'Non-Standard ARR Composition'" },
            { text: "Draft an IC memo slide on these risks", description: "Summarize these two critical risks for the next Investment Committee update.", prompt: "Draft an IC memo slide for this section." }
        ],
        followUpQuestions: ["What is the adjusted 'true' ARR for TechFlow?", "What's the plan to fix the failed product launches?"]
    },
    "Assess the CloudVantage AI feature delay.": {
        renderFunc: () => `
            <h2 class="response-title">Alert Deep Dive: CloudVantage AI Feature Delay</h2>
            <div class="judgement-box warning mt-4">
                <p class="judgement-title">Situation:</p>
                <p class="judgement-text">The 'AI-Powered Feature' is currently 'At Risk' and behind schedule. The delay is due to unforeseen technical complexities in integrating with legacy data models from the recent NewCo acquisition. This jeopardizes the planned Q4 launch, which is a key driver of the FY25 growth plan.</p>
            </div>`,
        chartDrawFunc: null,
        recommendedActions: [
            { text: "Generate risk mitigation plan for AI feature", description: "Use ARIA to create a plan with a de-scoped MVP and dedicated resources to get the project back on track.", prompt: "Generate a risk mitigation plan for the AI feature delay." },
            { text: "Estimate the budget impact of the delay", description: "Analyze the financial implications of the delay and the proposed mitigation plan.", prompt: "What is the budget impact of the AI feature delay?" }
        ],
        followUpQuestions: ["Who is the lead engineer on the AI feature?", "What is the new projected launch date?"]
    },
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
    // CHAIN 2: FORECAST
    "Action: Update master financial model": {
        renderFunc: () => `<h2 class="response-title">Action Confirmation</h2><div class="board-slide"><strong>Success:</strong> The 6-month ARR forecast has been exported and queued for integration into the master financial model. The model owner has been notified to validate the update.</div>`,
        chartDrawFunc: null, recommendedActions: [], followUpQuestions: ["Export this forecast data as a CSV.", "Who has access to the master model?"]
    },
    "Action: Generate LP talking points": {
        renderFunc: () => `<h2 class="response-title">Generated LP Update Talking Points</h2><div class="board-slide"><div class="slide-title">Q3 LP Update: Key Highlights</div><ul><li>The portfolio is projected to grow ARR to <strong>~$292M</strong> over the next 6 months (base case).</li><li>This is driven by continued strong organic growth and NRR performance, particularly from our top-quartile assets.</li><li>Our 'Bear Case' of <strong>$285M</strong> is well-capitalized, and we see a potential 'Bull Case' of <strong>$305M</strong> if key enterprise deals land in Q4.</li></ul></div>`,
        chartDrawFunc: null, recommendedActions: [], followUpQuestions: ["Draft a full LP update email.", "Add the forecast chart to this summary."]
    },
     "Action: Identify risks to Bear Case": {
        renderFunc: () => `<h2 class="response-title">Top 3 Risks to 'Bear Case' Forecast</h2><div class="list-container"><div class="list-item"><span class="list-number text-error">1</span><div><h4 class="list-title">TechFlow Churn</h4><p class="list-text">Failure to renew the Global FinCorp contract (28% of ARR) at TechFlow would immediately trigger the bear case scenario.</p></div></div><div class="list-item"><span class="list-number text-warning">2</span><div><h4 class="list-title">Macroeconomic Slowdown</h4><p class="list-text">A broader economic downturn could delay enterprise sales cycles at CloudVantage and Innovate Inc., pushing the bull case out of reach.</p></div></div><div class="list-item"><span class="list-number text-warning">3</span><div><h4 class="list-title">Competitor Pricing Pressure</h4><p class="list-text">Aggressive pricing from competitors could impact new logo acquisition and NRR at ScaleOps.</p></div></div></div>`,
        chartDrawFunc: null, recommendedActions: [], followUpQuestions: ["What's our mitigation plan for the TechFlow churn risk?", "Model a scenario where enterprise sales cycles lengthen by 30 days."]
    },
    "What is the required hiring plan to support this forecast?": {
        renderFunc: () => `<h2 class="response-title">Required Hiring Plan to Support Forecast</h2><div class="data-table-container"><table class="data-table"><thead><tr><th>Department</th><th>Q3 2025 Hires</th><th>Q4 2025 Hires</th><th>Rationale</th></tr></thead><tbody><tr><td>Sales (Enterprise)</td><td>+5 AE, +3 SDR</td><td>+4 AE, +2 SDR</td><td>To capture projected Q4/Q1 enterprise demand.</td></tr><tr><td>Customer Success</td><td>+4 CSM</td><td>+3 CSM</td><td>To maintain NRR as the customer base grows.</td></tr><tr><td>Engineering</td><td>+6 SWE</td><td>+4 SWE</td><td>To support roadmap acceleration at CloudVantage & Innovate.</td></tr></tbody></table></div>`,
        chartDrawFunc: null, recommendedActions: [], followUpQuestions: ["What is the estimated cost of this hiring plan?", "Which roles are the highest priority to fill?"]
    },
    "Model the portfolio's cash runway based on this forecast.": {
        renderFunc: () => `<h2 class="response-title">Portfolio Cash Runway Forecast</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="cash-runway-chart"></canvas></div><div class="chart-narrative"><p>Based on the forecast and the associated hiring plan, the portfolio has a healthy cash runway of approximately <strong>28 months</strong>. The model projects the portfolio to reach cash flow breakeven in <strong>Q4 2026</strong>.</p></div>`,
        chartDrawFunc: drawCashRunwayChart, recommendedActions: [], followUpQuestions: ["What is the impact on runway if we accelerate hiring by 50%?", "At what point should we consider a new fundraise?"]
    },
    "Which value creation lever has the biggest impact on this forecast?": {
        renderFunc: () => `<h2 class="response-title">Forecasted ARR Growth Drivers</h2><div class="chart-wrapper" style="height: 250px;"><canvas id="lever-impact-chart"></canvas></div><div class="chart-narrative"><p>The 6-month forecast is primarily driven by <strong>Expansion (NRR)</strong> from the existing customer base, accounting for nearly 60% of the projected growth. New logo acquisition remains a consistent contributor, while planned price increases have a smaller, but meaningful, impact.</p></div>`,
        chartDrawFunc: drawLeverImpactChart, recommendedActions: [], followUpQuestions: ["Double-click on the NRR driver.", "How does this compare to last year's drivers?"]
    },
    // CHAIN 3: SCENARIO
    "Action: Add Synergy Plan to Workspace": {
        renderFunc: () => `<h2 class="response-title">Action Confirmation</h2><div class="board-slide"><strong>Success:</strong> A new workstream "TechFlow Synergy Plan" has been added to the 100-Day Plan in the Workspace. Key synergy targets have been pre-populated and assigned to the integration lead.</div>`,
        chartDrawFunc: null, recommendedActions: [], followUpQuestions: ["Assign this workstream to Brenda.", "Set a deadline for initial synergy realization."]
    },
    "Action: Draft email to legal": {
        renderFunc: () => `<h2 class="response-title">Generated Email Draft</h2><div class="email-draft"><p><strong>To:</strong> legal@firm.com</p><p><strong>Subject:</strong> Kick Off Confirmatory Diligence - Project TechFlow</p><hr/><p>Hi Team,</p><p>We are moving forward with the acquisition of TechFlow Solutions. The preliminary diligence has been positive, and we'd like to engage your team to begin the final confirmatory diligence process.</p><p>Please find the executed LOI attached. We'd like to schedule a kick-off call for early next week to align on the timeline and key areas of focus.</p><p>Best,</p></div>`,
        chartDrawFunc: null, recommendedActions: [], followUpQuestions: ["Attach the LOI to this email.", "Send the email and CC the deal team."]
    },
    "Action: Model lower synergy case": {
        renderFunc: () => `<h2 class="response-title">Scenario: TechFlow Acquisition with 25% Lower Synergies</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="lower-synergy-chart"></canvas></div><div class="judgement-box warning mt-6"><p class="judgement-title">Judgement (Medium Confidence):</p><p class="judgement-text">In this downside scenario, the acquisition is still accretive, but the impact on portfolio EBITDA margin is more pronounced and the payback period extends by approximately 9 months. The deal remains strategically sound, but the financial returns are less compelling.</p></div>`,
        chartDrawFunc: drawLowerSynergyScenarioChart, recommendedActions: [], followUpQuestions: ["What is the new IRR in this scenario?", "What are the most at-risk synergy components?"]
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

function drawLeverImpactChart() {
    const ctx = document.getElementById('lever-impact-chart')?.getContext('2d');
    if (!ctx) return;
    const style = getComputedStyle(document.body);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Expansion (NRR)', 'New Logos', 'Price Increase', 'Synergies'],
            datasets: [{
                label: 'Contribution to Growth ($M)',
                data: [25, 15, 3, 2],
                backgroundColor: [style.getPropertyValue('--status-success'), style.getPropertyValue('--accent-blue'), style.getPropertyValue('--accent-teal'), style.getPropertyValue('--purple')],
            }]
        },
        options: {
            indexAxis: 'y', responsive: true, maintainAspectRatio: false,
            scales: { x: { grid: { color: style.getPropertyValue('--border-color') }, ticks: { callback: (v) => `$${v}M` } }, y: { grid: { display: false } } },
            plugins: { legend: { display: false } }
        }
    });
}

function drawCashRunwayChart() {
    const ctx = document.getElementById('cash-runway-chart')?.getContext('2d');
    if (!ctx) return;
    const labels = Array.from({ length: 12 }, (_, i) => { const d = new Date(2025, 8 + i); return d.toLocaleString('default', { month: 'short' }) + ` '${d.getFullYear().toString().substr(-2)}`; });
    const runwayData = [85, 82, 78, 74, 70, 65, 60, 54, 48, 41, 34, 26]; // Example data
    const style = getComputedStyle(document.body);
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{ label: 'Cash Balance ($M)', data: runwayData, borderColor: style.getPropertyValue('--accent-blue'), tension: 0.1, fill: true, backgroundColor: `${style.getPropertyValue('--accent-blue')}26` }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { x: { grid: { display: false } }, y: { grid: { color: style.getPropertyValue('--border-color') }, ticks: { callback: (v) => `$${v}M` } } },
            plugins: { legend: { display: false } }
        }
    });
}

function drawLowerSynergyScenarioChart() {
    const ctx = document.getElementById('lower-synergy-chart')?.getContext('2d');
    if (!ctx) return;
    const labels = Array.from({ length: 24 }, (_, i) => { const d = new Date(2025, i); return d.toLocaleString('default', { month: 'short' }) + ` '${d.getFullYear().toString().substr(-2)}`; });
    
    // Original Scenario Data
    let scenarioEBITDA = [75];
    let baseARR = [250];
    let scenarioARR = [305];
    for (let i = 1; i < 24; i++) {
        const baseGrowth = (1 + Math.random() * 0.005 + 0.015);
        const scenarioSynergyFactor = 1 + (i / 24) * 0.01;
        const scenarioGrowth = baseGrowth * scenarioSynergyFactor;
        baseARR.push(baseARR[i-1] * baseGrowth);
        scenarioARR.push(scenarioARR[i-1] * scenarioGrowth);
        scenarioEBITDA.push(scenarioARR[i] * (0.23 + (i / 24) * 0.03 + (Math.random() - 0.5) * 0.02));
    }

    // Lower Synergy Scenario Data
    let lowerSynergyEBITDA = [75];
    let lowerSynergyARR = [305];
     for (let i = 1; i < 24; i++) {
        const baseGrowth = (1 + Math.random() * 0.005 + 0.015);
        const scenarioSynergyFactor = 1 + (i / 24) * 0.0075; // 25% lower synergy impact
        const scenarioGrowth = baseGrowth * scenarioSynergyFactor;
        lowerSynergyARR.push(lowerSynergyARR[i-1] * scenarioGrowth);
        lowerSynergyEBITDA.push(lowerSynergyARR[i] * (0.23 + (i / 24) * 0.0225 + (Math.random() - 0.5) * 0.02)); // 25% lower margin improvement
    }
    
    const style = getComputedStyle(document.body);
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                { label: 'Base Case EBITDA', data: scenarioEBITDA, borderColor: style.getPropertyValue('--accent-teal'), tension: 0.2, borderWidth: 3, pointRadius: 0 },
                { label: 'Downside Case EBITDA', data: lowerSynergyEBITDA, borderColor: style.getPropertyValue('--status-warning'), tension: 0.2, borderDash: [5, 5], borderWidth: 3, pointRadius: 0 },
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { x: { grid: { display: false } }, y: { grid: { color: style.getPropertyValue('--border-color') }, ticks: { callback: (v) => `$${Math.round(v)}M` } } },
            plugins: { legend: { position: 'top', labels: { color: style.getPropertyValue('--text-primary'), usePointStyle: true } } }
        }
    });
}


// --- EVENT LISTENERS & HANDLERS ---

function initializePortfolioEventListeners() {
    const mainContent = document.getElementById('main-content');
    
    // Use a flag to prevent attaching the listener multiple times
    if (mainContent.dataset.listenerAttached) return;
    mainContent.dataset.listenerAttached = 'true';

    mainContent.addEventListener('click', e => {
        const target = e.target.closest('[data-action], [data-prompt]');
        if (!target) return;

        // This handles the "Recommended Action" and suggestion pill buttons
        if (target.dataset.prompt) {
            runPortfolioPrompt(target.dataset.prompt);
            return; // Stop further execution
        }

        const action = target.dataset.action;
        let state = loadState();

        switch(action) {
            case 'toggle-priority-alerts':
                const container = target.closest('.priority-alerts-container');
                const grid = container.querySelector('.priority-alerts-grid');
                const chevron = container.querySelector('.chevron-icon');
                const isCollapsed = grid.classList.toggle('collapsed');
                chevron.classList.toggle('expanded', !isCollapsed);
                if (!isCollapsed) {
                    grid.style.maxHeight = grid.scrollHeight + 'px';
                } else {
                    grid.style.maxHeight = null;
                }
                break;
            case 'navigate-to-aria-with-prompt':
                const companyId = target.dataset.companyId;
                const promptText = target.dataset.promptText;
                const workstreamId = target.dataset.workstreamId;
                if (companyId && promptText && workstreamId) {
                    window.location.href = `aria.html?company=${companyId}&prompt=${encodeURIComponent(promptText)}&workstream=${workstreamId}`;
                }
                break;
            case 'navigate-to-portco-task':
                const companyIdTask = target.dataset.companyId;
                const taskId = target.dataset.taskId;
                const expandPhase = target.dataset.expandPhase;
                if (companyIdTask && taskId && expandPhase) {
                    window.location.href = `portco.html?company=${companyIdTask}&openTask=${taskId}&expandPhase=${expandPhase}`;
                }
                break;
            // THIS IS THE CRITICAL CASE FOR THE SEND BUTTON
            case 'ask-aria':
                const input = document.getElementById('aria-prompt-input');
                if (input && input.value.trim()) {
                    runPortfolioPrompt(input.value.trim());
                    input.value = '';
                }
                break;
            case 'view-company':
                const companyIdNav = target.closest('[data-company-id]').dataset.companyId;
                window.location.href = `portco.html?company=${companyIdNav}`;
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