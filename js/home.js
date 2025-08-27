// js/home.js - Logic for the main portfolio dashboard (index.html)

document.addEventListener('DOMContentLoaded', async () => {
    await loadSharedComponents();
    
    if (Navigation.getCurrentPage() === 'index') {
        renderPortfolioPage();
        initializePortfolioEventListeners();
    }
});

function getDynamicGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning.';
    if (hour < 18) return 'Good afternoon.';
    return 'Good evening.';
}

function renderPortfolioPage() {
    const mainContent = document.getElementById('main-content');
    
    const companies = [
        { id: 'techflow-solutions', name: 'TechFlow Solutions', stage: 'Due Diligence', status: 'At Risk', statusColor: 'var(--status-warning)', kpis: [{label: 'ARR', value: '$55M'}, {label: 'NRR', value: '105%'}, {label: 'EBITDA', value: '22%'}] },
        { id: 'cloudvantage', name: 'CloudVantage', stage: 'Growth', status: 'Healthy', statusColor: 'var(--status-success)', kpis: [{label: 'ARR', value: '$78M'}, {label: 'NRR', value: '128%'}, {label: 'EBITDA', value: '31%'}] },
        { id: 'innovate-inc', name: 'Innovate Inc.', stage: 'Growth', status: 'Healthy', statusColor: 'var(--status-success)', kpis: [{label: 'ARR', value: '$120M'}, {label: 'NRR', value: '122%'}, {label: 'EBITDA', value: '18%'}] },
        { id: 'dataflow-systems', name: 'DataFlow Systems', stage: 'Strategy', status: 'Healthy', statusColor: 'var(--status-success)', kpis: [{label: 'ARR', value: '$32M'}, {label: 'NRR', value: '115%'}, {label: 'EBITDA', value: '25%'}] },
        { id: 'scaleops', name: 'ScaleOps', stage: 'Transformation', status: 'Needs Attention', statusColor: 'var(--status-warning)', kpis: [{label: 'ARR', value: '$19M'}, {label: 'NRR', value: '108%'}, {label: 'EBITDA', value: '12%'}] },
    ];

    const initialPrompts = [
        "How did the portfolio perform over the past 12 months?",
        "Forecast portfolio ARR for the next 6 months.",
        "Model the next 12 months assuming we acquire TechFlow."
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
                            <svg class="chevron-icon expanded" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </div>
                        <div class="priority-alerts-grid">
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
            <div id="portfolio-conversation-container">
                ${getAdvancedPromptBoxHTML(initialPrompts)}
            </div>
        </div>
        <input type="file" id="file-attachment-input" style="display: none;" multiple />
    `;
}

function initializePortfolioEventListeners() {
    const mainContent = document.getElementById('main-content');
    
    if (mainContent.dataset.listenerAttached) return;
    mainContent.dataset.listenerAttached = 'true';

    mainContent.addEventListener('click', e => {
        const target = e.target.closest('[data-action]');
        if (!target) return;

        const action = target.dataset.action;
        let state = loadState();

        if (action === 'run-suggested-prompt' || action === 'ask-aria') {
            let promptText = '';
            if (action === 'run-suggested-prompt') {
                promptText = target.dataset.question;
            } else {
                const input = document.getElementById('aria-prompt-input');
                if (input && input.value.trim()) {
                    promptText = input.value.trim();
                    input.value = '';
                }
            }
            
            if (promptText) {
                window.location.href = `aria.html?company=all&prompt=${encodeURIComponent(promptText)}`;
            }
            return;
        }

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
                if (companyId && promptText) {
                    let url = `aria.html?company=${companyId}&prompt=${encodeURIComponent(promptText)}`;
                    if (workstreamId) url += `&workstream=${workstreamId}`;
                    window.location.href = url;
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
            case 'view-company':
                const companyIdNav = target.closest('[data-company-id]').dataset.companyId;
                if (state.activePersona === 'adrian' && companyIdNav === 'techflow-solutions') {
                    const promptText = "Show me the TechFlow diligence plan.";
                    window.location.href = `aria.html?company=${companyIdNav}&prompt=${encodeURIComponent(promptText)}`;
                } else {
                    window.location.href = `portco.html?company=${companyIdNav}`;
                }
                break;
        }
    });
}