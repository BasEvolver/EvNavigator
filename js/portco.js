// js/portco.js - Logic for the individual PortCo dashboards

document.addEventListener('DOMContentLoaded', async () => {
    await loadSharedComponents();
    const urlParams = new URLSearchParams(window.location.search);
    const companyId = urlParams.get('company');

    if (!companyId) {
        document.getElementById('main-content').innerHTML = `<div class="text-center py-16"><h2 class="text-xl font-semibold">No Company Selected</h2><p class="text-gray-500 mt-2">Please return to the Home page and select a portfolio company.</p></div>`;
        return;
    }

    let state = loadState();
    state.selectedCompanyId = companyId;
    saveState(state);
    
    // ROUTING LOGIC: Render different page structures based on company stage
    if (companyId === 'techflow-solutions') {
        renderDiligenceHub(companyId);
    } else {
        renderGuidedGenerativePortcoPage(companyId);
    }

    Navigation.updateCompanySelector();
    // Initialize all event listeners for the page
    initializePortcoEventListeners();
});


// =================================================================
// NEW: AGENTIC DILIGENCE HUB (for TechFlow)
// =================================================================

function renderDiligenceHub(companyId) {
    const mainContent = document.getElementById('main-content');
    const pills = ['Plan', 'Business & Strategy', 'Commercial & Customer', 'Technology & Operations', 'Financial & Risk'];

    mainContent.innerHTML = `
        <div class="diligence-hub-container">
            <div class="diligence-pills">
                ${pills.map((pill, index) => `
                    <button class="pill ${index === 0 ? 'active' : ''}" data-action="switch-diligence-tab" data-tab-name="${pill}">${pill}</button>
                `).join('')}
            </div>
            <div id="diligence-content-area" class="diligence-content">
                <!-- Content will be rendered here by JS -->
            </div>
             <div id="portco-conversation-container" class="mt-6">
                <!-- The familiar prompt box will be rendered here -->
            </div>
        </div>
    `;
    
    renderDiligenceTabContent('Plan', companyId); // Render initial tab
}

function renderDiligenceTabContent(tabName, companyId) {
    const contentArea = document.getElementById('diligence-content-area');
    const conversationContainer = document.getElementById('portco-conversation-container');
    if (!contentArea || !conversationContainer) return;

    if (tabName === 'Plan') {
        contentArea.innerHTML = renderPlanTab();
        conversationContainer.innerHTML = getPromptBoxHTML(["Summarize the key blockers.", "Which workstreams have the most open items?", "What is the critical path?"]);
    } else {
        // This is for the workstream tabs
        contentArea.innerHTML = renderWorkstreamTab(tabName);
        conversationContainer.innerHTML = getPromptBoxHTML([`Summarize the key risks for ${tabName}.`, "Draft an IC memo slide for this section.", `Who are the key contacts for ${tabName}?`]);
    }
}

function renderPlanTab() {
    // Group diligence items by phase from the CSV data
    const phases = diligencePlan.reduce((acc, item) => {
        let phase = 'Other';
        if (item.lineItemID <= 11) phase = 'Phase 1: Foundation';
        else if (item.lineItemID <= 39) phase = 'Phase 2: Deep Dive';
        else if (item.lineItemID <= 52) phase = 'Phase 3: Analysis';
        else if (item.lineItemID > 52) phase = 'Phase 4: Validation';
        
        if (!acc[phase]) acc[phase] = [];
        acc[phase].push(item);
        return acc;
    }, {});

    return `
        <div class="workstream-synthesis">
            <h3 class="synthesis-title">Aria's Status Update</h3>
            <p class="synthesis-text">We are on <strong>Day 9 of a 14-day diligence sprint</strong>. The critical path currently runs through Financial Validation (DD-52), which is on track. However, the 'Competitive Dynamics' analysis (DD-10) is currently a bottleneck, waiting on predecessor tasks in Market Analysis.</p>
        </div>
        <div class="project-plan-container">
            ${Object.entries(phases).map(([phaseName, items]) => `
                <div class="plan-phase">
                    <h4 class="plan-phase-title">${phaseName}</h4>
                    <div class="plan-items-list">
                        ${items.map(item => `
                            <div class="plan-item" title="${item.description}">
                                <span class="plan-item-status status-${item.status.toLowerCase().replace(/ /g, '-')}"></span>
                                <span class="plan-item-id">${item.id_1}</span>
                                <span class="plan-item-title">${item.ellement}</span>
                                <span class="plan-item-workstream">${item.workstream}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderWorkstreamTab(workstreamName) {
    const allFindings = [...techflow_anomalies, ...otherObservations_v2];
    const relevantFindings = allFindings.filter(f => f.workstream === workstreamName);
    const openQuestions = diligencePlan.filter(item => item.workstream === workstreamName && item.status === 'Not Started');

    return `
        <div class="workstream-synthesis">
            <h3 class="synthesis-title">Aria's Synthesis for ${workstreamName}</h3>
            <p class="synthesis-text">Analysis of the <strong>${workstreamName}</strong> workstream has surfaced ${relevantFindings.length} key findings that require attention. The primary areas of concern are [Example: non-standard revenue recognition and high customer concentration]. There are currently ${openQuestions.length} open items from the diligence plan for this area.</p>
        </div>

        <div class="finding-cards-grid">
            ${relevantFindings.length > 0 ? relevantFindings.map(finding => `
                <div class="finding-card">
                    <div class="finding-card-header">
                        <span class="font-semibold">${finding.title || finding.text}</span>
                        ${finding.severity ? `<span class="ws-item-badge severity-${finding.severity.toLowerCase()}">${finding.severity}</span>` : ''}
                    </div>
                    <p class="finding-card-body">${finding.impact || finding.description || ''}</p>
                    <div class="finding-card-actions">
                        <button class="card-action-button" data-action="run-prompt" data-prompt="Model the financial impact of '${finding.title || finding.text}'">Model Impact</button>
                        <button class="card-action-button" data-action="run-prompt" data-prompt="Draft an email to the CFO about '${finding.title || finding.text}'">Draft Email</button>
                        <button class="card-action-button" data-action="run-prompt" data-prompt="Add '${finding.title || finding.text}' to the IC memo">Add to Memo</button>
                    </div>
                </div>
            `).join('') : '<p class="text-secondary">No specific findings flagged for this workstream yet.</p>'}
        </div>
        
        <div class="open-questions-box">
             <h3 class="synthesis-title">Aria's Open Questions</h3>
             <ul class="open-questions-list">
                ${openQuestions.length > 0 ? openQuestions.map(item => `
                    <li>
                        <span class="font-semibold">${item.id_1}: ${item.ellement}</span> - ${item.questionsAnswered}
                    </li>
                `).join('') : '<li class="text-secondary">All diligence questions for this workstream have been initiated.</li>'}
             </ul>
        </div>
    `;
}


// =================================================================
// ORIGINAL: GUIDED GENERATIVE (for CloudVantage, etc.)
// =================================================================

function renderGuidedGenerativePortcoPage(companyId) {
    const mainContent = document.getElementById('main-content');
    const companyData = getCompanySpecificData(companyId);

    mainContent.innerHTML = `
        <div class="portfolio-container">
            <div class="ai-briefing-card">
                <h1 class="briefing-title">${companyData.briefing.title}</h1>
                <p class="briefing-text">${companyData.briefing.text}</p>
            </div>
            
            ${renderRecommendedActions(companyData.actions)}

            <div id="portco-conversation-container">
                ${getPromptBoxHTML(companyData.prompts)}
            </div>

            <div class="data-deep-dive">
                <button id="toggle-deep-dive" class="section-title flex items-center gap-2 cursor-pointer" data-action="toggle-deep-dive">
                    <span>Data Deep Dive</span>
                    <svg id="deep-dive-chevron" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <div id="deep-dive-content" class="hidden">
                    ${companyData.dataViewHTML}
                </div>
            </div>
        </div>
    `;
}

// =================================================================
// COMPANY-SPECIFIC CONTENT & DATA VIEWS
// =================================================================
function getCompanySpecificData(companyId) {
    const genericData = {
        briefing: {
            title: `Dashboard for ${companyId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
            text: "A detailed, AI-native dashboard is being configured for this company. The data below represents the current structured view."
        },
        actions: [],
        prompts: ["What are the top 3 risks for this company?", "Summarize the latest board meeting."],
        dataViewHTML: renderGenericDashboard_DataView(companyId)
    };

    const companyDataMap = {
        'cloudvantage': {
            briefing: {
                title: "Q2 Performance Briefing: CloudVantage",
                text: "CloudVantage is <strong>Healthy</strong> and tracking ahead of its Q2 plan. Net Revenue Retention is exceptionally strong at <strong>128%</strong>, driven by the new enterprise GTM strategy. However, the <strong>AI-Powered Feature development is now 'At Risk'</strong> due to technical complexities, which could impact the critical Q4 launch."
            },
            actions: [
                { text: "Generate risk mitigation plan for AI feature", description: "Use ARIA to create a plan to get the delayed AI feature back on track.", prompt: "Generate a risk mitigation plan for the AI feature delay." },
                { text: "Analyze drivers of 128% NRR", description: "Ask ARIA to break down the key factors contributing to the strong Net Revenue Retention.", prompt: "Analyze the key drivers of our Net Revenue Retention." },
                { text: "Review 'At Risk' Channel Partner Program", description: "See the detailed status of the partner program in the data view below.", specialAction: "scroll-to-programs" }
            ],
            prompts: ["Who is the lead engineer on the AI feature?", "Draft a board update on the NRR outperformance.", "What is the budget impact of the AI feature delay?"],
            dataViewHTML: renderCloudVantageDashboard_DataView()
        }
    };

    return companyDataMap[companyId] || genericData;
}

function renderCloudVantageDashboard_DataView() {
    const kpis = [
        { label: 'ARR', value: '$78M', change: '+4% QoQ', changeColor: 'var(--status-success)' },
        { label: 'Net Revenue Retention', value: '128%', change: '+3% vs Target', changeColor: 'var(--status-success)' },
        { label: 'EBITDA Margin', value: '31%', change: '-1% vs Target', changeColor: 'var(--status-error)' },
        { label: 'Rule of 40', value: '58%', change: 'Healthy', changeColor: 'var(--status-success)' }
    ];
    const programs = [
        { name: 'Enterprise GTM Strategy', dept: 'Sales', status: 'On Track', statusClass: 'status-completed', progress: 75 },
        { name: 'ABM Campaign Launch', dept: 'Marketing', status: 'On Track', statusClass: 'status-completed', progress: 90 },
        { name: 'Channel Partner Program', dept: 'Partners', status: 'At Risk', statusClass: 'status-warning', progress: 45 },
        { name: 'Platform Scalability Initiative', dept: 'Engineering', status: 'On Track', statusClass: 'status-completed', progress: 60 },
        { name: 'AI-Powered Feature Dev', dept: 'Product', status: 'Behind', statusClass: 'status-error', progress: 30 },
        { name: 'Leadership Development', dept: 'HR', status: 'On Track', statusClass: 'status-completed', progress: 85 }
    ];
    return `
        <div class="portco-container !p-0">
            <div class="portco-header">
                <div><h1 class="portco-title">CloudVantage</h1><p class="portco-subtitle">Growth Stage • Q2 2025</p></div>
                <div class="portco-status-badge status-completed"><span class="status-dot-solid"></span>Healthy</div>
            </div>
            <div class="kpi-grid">${kpis.map(kpi => `<div class="kpi-card"><p class="kpi-label">${kpi.label}</p><p class="kpi-value">${kpi.value}</p><p class="kpi-detail" style="color: ${kpi.changeColor};">${kpi.change}</p></div>`).join('')}</div>
            <div id="programs-card" class="portco-card">
                <h2 class="card-title">Active Programs</h2>
                <div class="program-list">${programs.map(p => `<div class="program-item"><div class="program-name">${p.name}</div><div class="program-dept">${p.dept}</div><div class="program-status-wrapper"><span class="program-status ${p.statusClass}">${p.status}</span></div><div class="program-progress-container"><div class="program-progress-bar" style="width: ${p.progress}%"></div></div><div class="program-progress-text">${p.progress}%</div></div>`).join('')}</div>
            </div>
            <div class="portco-card">
                <h2 class="card-title">Departmental Updates</h2>
                <div class="tabs-container"><nav class="tab-nav" data-tab-group="dept"><button data-tab-name="sales" class="tab-button active">Sales</button><button data-tab-name="marketing" class="tab-button">Marketing</button><button data-tab-name="product" class="tab-button">Product</button><button data-tab-name="engineering" class="tab-button">Engineering</button><button data-tab-name="hr" class="tab-button">HR</button></nav></div>
                <div id="dept-content-container" class="tab-content-area"></div>
            </div>
        </div>
    `;
}

function renderGenericDashboard_DataView(companyId) {
    const title = companyId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return `
        <div class="portco-container !p-0">
            <div class="portco-header">
                <div><h1 class="portco-title">${title}</h1><p class="portco-subtitle">Strategize Stage</p></div>
                <div class="portco-status-badge status-completed"><span class="status-dot-solid"></span>Healthy</div>
            </div>
            <div class="portco-card text-center p-8">
                <h2 class="card-title">Dashboard Under Construction</h2>
                <p class="text-secondary mt-2">A detailed dashboard for ${title} is being configured.</p>
            </div>
        </div>
    `;
}

// =================================================================
// UI & PROMPT BOX
// =================================================================

function getPromptBoxHTML(questions = []) {
    return `
        <div class="prompt-area-large-v4">
            <div class="suggestion-pills-container">
                ${questions.map(q => `<button class="suggestion-pill" data-action="run-prompt" data-prompt="${q}">${q}</button>`).join('')}
            </div>
            <textarea id="portco-prompt-input" class="prompt-textarea" rows="3" placeholder="Ask a follow-up..."></textarea>
            <div class="prompt-actions-bottom-bar">
                <div class="prompt-actions-left"></div>
                <div class="prompt-actions-right">
                    <button class="prompt-send-button" data-action="ask-portco-aria" title="Send"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg></button>
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
                    ${actions.map(a => {
                        const actionAttrs = a.link ? `data-action="navigate" data-link="${a.link}"`
                                          : a.prompt ? `data-action="run-prompt" data-prompt="${a.prompt}"`
                                          : a.specialAction ? `data-action="special-action" data-special-action="${a.specialAction}"`
                                          : "";
                        return `<button class="suggested-action-card" ${actionAttrs}>
                            <p class="font-semibold text-sm text-primary">${a.text}</p>
                            <p class="text-xs text-secondary">${a.description}</p>
                        </button>`
                    }).join('')}
                </div>
            </div>`;
}

// =================================================================
// EVENT LISTENERS & INTERACTIONS (UNIFIED & FIXED)
// =================================================================

function runPortcoPrompt(promptText, companyId) {
    const allContentContainer = document.querySelector('.diligence-hub-container, .portfolio-container');
    const conversationContainer = document.getElementById('portco-conversation-container');
    if (!conversationContainer || !allContentContainer) return;

    conversationContainer.innerHTML = '';
    allContentContainer.insertAdjacentHTML('beforeend', `<div class="user-prompt-bubble"><p>${promptText}</p></div>`);

    const thinkingHTML = `<div class="portfolio-response-card"><p>ARIA is thinking...</p></div>`;
    allContentContainer.insertAdjacentHTML('beforeend', thinkingHTML);
    
    setTimeout(() => {
        allContentContainer.removeChild(allContentContainer.lastChild); 
        
        const responseHTML = `<div class="portfolio-response-card"><p>This is a simulated response for "${promptText}". In a real scenario, ARIA would provide a detailed, data-driven answer.</p></div>`;
        allContentContainer.insertAdjacentHTML('beforeend', responseHTML);

        const currentTab = document.querySelector('.diligence-pills .pill.active')?.dataset.tabName || 'Default';
        let prompts = ["Ask another follow-up..."];
        if (currentTab === 'Plan') prompts = ["Summarize the key blockers.", "Which workstreams have the most open items?"];
        else if (currentTab !== 'Default') prompts = [`Summarize the key risks for ${currentTab}.`, "Draft an IC memo slide for this section."];
        
        conversationContainer.innerHTML = getPromptBoxHTML(prompts);
        conversationContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 1000);
}


function initializePortcoEventListeners() {
    const mainContent = document.getElementById('main-content');
    if (mainContent.dataset.listenerAttached === 'true') return;
    mainContent.dataset.listenerAttached = 'true';

    const companyId = loadState().selectedCompanyId;

    mainContent.addEventListener('click', e => {
        const target = e.target.closest('[data-action]');
        if (!target) return;

        const action = target.dataset.action;

        switch(action) {
            case 'switch-diligence-tab':
                mainContent.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
                target.classList.add('active');
                renderDiligenceTabContent(target.dataset.tabName, companyId);
                break;

            case 'run-prompt':
                runPortcoPrompt(target.dataset.prompt, companyId);
                break;
            
            case 'ask-portco-aria':
                const input = document.getElementById('portco-prompt-input');
                if (input && input.value.trim()) {
                    runPortcoPrompt(input.value.trim(), companyId);
                    input.value = '';
                }
                break;
            
            case 'toggle-deep-dive':
                const content = document.getElementById('deep-dive-content');
                const chevron = document.getElementById('deep-dive-chevron');
                content.classList.toggle('hidden');
                chevron.classList.toggle('rotate-180');
                if (!content.classList.contains('hidden')) {
                    initializeDataViewListeners(companyId);
                }
                break;

            case 'special-action':
                if (target.dataset.specialAction === 'scroll-to-programs') {
                    const deepDiveButton = document.getElementById('toggle-deep-dive');
                    const deepDiveContent = document.getElementById('deep-dive-content');
                    if (deepDiveContent.classList.contains('hidden')) {
                        deepDiveButton.click();
                    }
                    setTimeout(() => {
                         document.getElementById('programs-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 200);
                }
                break;
            
            case 'navigate':
                if(target.dataset.link) window.location.href = target.dataset.link;
                break;
        }
    });
}


function initializeDataViewListeners(companyId) {
    if (companyId === 'cloudvantage') {
        initializeCloudVantageTabInteractions();
    }
    const deepDiveContent = document.getElementById('deep-dive-content');
    if(!deepDiveContent) return;

    deepDiveContent.addEventListener('click', e => {
        const navTarget = e.target.closest('[data-action="navigate-aria"]');
        if (navTarget) {
            const context = navTarget.dataset.context;
            window.location.href = `aria.html?company=${companyId}&trigger=${context}`;
        }
    });
}

function initializeCloudVantageTabInteractions() {
    const container = document.getElementById('deep-dive-content');
    if (!container) return;
    const tabButtons = container.querySelectorAll('[data-tab-group="dept"] .tab-button');
    if (!tabButtons.length) return;

    const deptContentContainer = container.querySelector('#dept-content-container');
    if (deptContentContainer && deptContentContainer.dataset.initialized) return;
    if(deptContentContainer) deptContentContainer.dataset.initialized = 'true';

    const deptContents = {
        sales: {
            metrics: [ { label: 'Quota Attainment', value: '103%', color: 'var(--status-success)' }, { label: 'Pipeline Coverage', value: '3.5x', color: 'var(--text-primary)' }, { label: 'Avg. Deal Size', value: '$85k', color: 'var(--text-primary)' }, { label: 'Budget Adherence', value: '+3.1%', color: 'var(--status-error)' } ],
            content: `<p><strong>Highlights:</strong> Exceeded quota, driven by strong performance in the new Enterprise segment. Landed two Fortune 500 logos.</p><p><strong>Lowlights:</strong> Mid-market team struggled, hitting only 85% of their number. Budget overage due to higher commission payouts on large deals.</p><p><strong>Next Period Focus:</strong> Double down on Enterprise playbook, provide additional training for mid-market reps.</p><p><strong>Help Wanted:</strong> Need marketing to accelerate SQL delivery for the mid-market segment.</p>`,
            context: 'sales-renewals'
        },
        marketing: {
            metrics: [ { label: 'MQLs vs Target', value: '115%', color: 'var(--status-success)' }, { label: 'SQLs vs Target', value: '92%', color: 'var(--status-warning)' }, { label: 'CAC', value: '$12.5k', color: 'var(--text-primary)' }, { label: 'Budget Adherence', value: '-1.5%', color: 'var(--status-success)' } ],
            content: `<p><strong>Highlights:</strong> ABM campaign for Enterprise was a huge success, generating high-quality leads. Managed budget effectively.</p><p><strong>Lowlights:</strong> MQL-to-SQL conversion rate dropped, indicating some lead quality issues in our top-of-funnel content.</p><p><strong>Next Period Focus:</strong> Optimize lead scoring model, launch targeted mid-market campaigns.</p><p><strong>Help Wanted:</strong> Sales feedback on lead quality is critical to our optimization efforts.</p>`,
            context: 'marketing'
        },
        product: {
            metrics: [ { label: 'Roadmap Adherence', value: '70%', color: 'var(--status-error)' }, { label: 'Feature Adoption', value: '45%', color: 'var(--text-primary)' }, { label: 'NPS', value: '52', color: 'var(--status-success)' }, { label: 'Budget Adherence', value: '+5.2%', color: 'var(--status-error)' } ],
            content: `<p><strong>Highlights:</strong> Successfully launched two major platform enhancements which have received positive customer feedback and contributed to a high NPS score.</p><p><strong>Lowlights:</strong> The flagship AI-Powered Feature is significantly delayed due to unforeseen technical complexity. This has caused budget overruns.</p><p><strong>Next Period Focus:</strong> Finalize a revised, de-risked timeline for the AI feature. Conduct customer interviews to validate the next set of roadmap priorities.</p><p><strong>Help Wanted:</strong> Need engineering to provide a firm estimate on the remaining work for the AI feature to reset expectations.</p>`,
            context: 'product'
        },
        engineering: {
            metrics: [ { label: 'Sprint Completion', value: '88%', color: 'var(--status-warning)' }, { label: 'Cycle Time', value: '4.2d', color: 'var(--text-primary)' }, { label: 'Uptime', value: '99.98%', color: 'var(--status-success)' }, { label: 'Budget Adherence', value: '+2.8%', color: 'var(--status-warning)' } ],
            content: `<p><strong>Highlights:</strong> Maintained excellent platform stability and uptime. Successfully completed critical scalability work ahead of schedule.</p><p><strong>Lowlights:</strong> Team velocity was impacted by the complexity of the AI feature, leading to lower sprint completion rates. Some technical debt was incurred to meet deadlines.</p><p><strong>Next Period Focus:</strong> Dedicate one sprint to tech debt reduction. Finalize architecture for the AI feature.</p><p><strong>Help Wanted:</strong> Clearer, finalized requirements from Product for the AI feature to prevent further scope creep.</p>`,
            context: 'engineering'
        },
        hr: {
            metrics: [ { label: 'Employee Attrition', value: '8%', color: 'var(--status-success)' }, { label: 'Time to Hire', value: '42d', color: 'var(--text-primary)' }, { label: 'eNPS', value: '65', color: 'var(--status-success)' }, { label: 'Budget Adherence', value: '-2.1%', color: 'var(--status-success)' } ],
            content: `<p><strong>Highlights:</strong> Employee satisfaction (eNPS) is at an all-time high. Attrition remains well below industry average. The leadership development program is receiving excellent feedback.</p><p><strong>Lowlights:</strong> Time to hire for senior engineering roles remains a challenge.</p><p><strong>Next Period Focus:</strong> Launch a new employee referral program to improve the engineering talent pipeline. Complete the annual compensation review.</p><p><strong>Help Wanted:</strong> Engineering managers' participation in final-round interviews to speed up the hiring process.</p>`,
            context: 'hr'
        }
    };

    function renderDeptContent(dept) {
        if (!deptContentContainer) return;
        const deptData = deptContents[dept];
        if (!deptData) return;
        
        deptContentContainer.innerHTML = `
            <div class="dept-kpi-grid">${deptData.metrics.map(metric => `<div class="dept-kpi-item"><p class="dept-kpi-label">${metric.label}</p><p class="dept-kpi-value" style="color: ${metric.color};">${metric.value}</p></div>`).join('')}</div>
            <div class="dept-content">${deptData.content}</div>
            <div class="dept-actions"><button data-action="navigate-aria" data-context="${deptData.context}" class="primary-button">Dive Deeper with Aria</button></div>
        `;
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderDeptContent(button.dataset.tabName);
        });
    });

    if (deptContentContainer && !deptContentContainer.innerHTML) {
        renderDeptContent('sales');
    }
}