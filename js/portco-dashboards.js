// js/portco-dashboards.js - All logic for rendering different persona dashboards

function renderPortfolioCommandCenter() {
    const mainContent = document.getElementById('main-content');
    const techflowData = commandCenterData.techflow;
    const cloudvantageData = commandCenterData.cloudvantage;

    const tfScorecardHTML = Object.entries(techflowData.liveScorecard).map(([key, data]) => {
        const label = key.replace(/([A-Z])/g, ' $1').toUpperCase();
        return `<div class="score-item">
            <p class="score-label">${label}</p>
            <p class="score-value">${data.score}</p>
            <p class="kpi-detail">${data.change}</p>
        </div>`;
    }).join('');

    const tfActivityHTML = techflowData.recentActivity.map(item => `
        <div class="activity-item activity-${item.status}" data-action="navigate-to-workstream-tab" data-target="${item.target || ''}">
            <p class="activity-title">${item.text}</p>
            <p class="activity-time">${item.time}</p>
        </div>
    `).join('');

    const tfAiSynthesis = `My analysis shows the valuation modeling is complete, and the financial and growth outlooks are strong. However, the anomaly detection agent has flagged <strong>3 critical issues</strong>, primarily in the Commercial and Financial workstreams. This aligns with the recent <strong>customer churn anomaly</strong>. I recommend focusing on the <strong>Commercial & Customer</strong> workstream to understand the root cause of this churn before we proceed to the IC memo.`;
    
    const cvAiSynthesis = `CloudVantage's performance is strong, with NRR at <strong>128%</strong> significantly outperforming the plan. This is driven by the successful Enterprise GTM push and strong cross-sell from the NewCo acquisition. The primary focus should be on de-risking the <strong>AI Feature Launch</strong>, which is currently behind schedule but critical for Q4 targets. Mitigating this delay is the top priority.`;

    const cvKpisHTML = cloudvantageData.kpis.map(kpi => {
        return `<div class="score-item">
            <p class="score-label">${kpi.label.toUpperCase()}</p>
            <p class="score-value ${kpi.isGood ? 'text-success' : 'text-error'}">${kpi.value}</p>
            <p class="kpi-detail">${kpi.change}</p>
        </div>`;
    }).join('');

    const cvPriorities = [
        { name: 'NewCo Integration', progress: 85, status: 'On Track' },
        { name: 'AI Feature Launch', progress: 30, status: 'At Risk' },
        { name: 'Enterprise GTM Push', progress: 75, status: 'On Track' }
    ];

    const cvPrioritiesHTML = cvPriorities.map(p => {
        const statusClass = p.status === 'On Track' ? 'status-completed' : 'status-warning';
        return `
        <div class="mb-3">
            <div class="flex justify-between items-center mb-1">
                <p class="font-semibold text-sm">${p.name}</p>
                <span class="status-badge ${statusClass} !text-xs">${p.status}</span>
            </div>
            <div class="progress-bar-container !h-2">
                <div class="progress-bar-fill" style="width: ${p.progress}%;"></div>
            </div>
        </div>
        `
    }).join('');


    mainContent.innerHTML = `
    <div class="flex flex-col gap-6">
        <!-- TechFlow Pane -->
        <div class="portco-card">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h2 class="text-xl font-bold">TechFlow Solutions</h2>
                    <p class="text-secondary">Series B SaaS • $12M ARR • Day 9 of 14</p>
                </div>
                <span class="status-badge status-progress">Analysis in Progress</span>
            </div>
            <div class="portco-card mb-4 cursor-pointer hover:border-accent-blue" data-action="navigate-to-gantt">
                <div class="flex justify-between items-center mb-2">
                    <h4 class="font-bold">Due Diligence Progress</h4>
                    <span class="font-bold">65% Complete</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: 65%;"></div>
                </div>
                <div class="flex justify-between items-center text-xs text-muted mt-1">
                    <span>Day 1</span>
                    <span>Critical Path (Day 5)</span>
                    <span>Decision Ready (Day 14)</span>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="portco-card bg-secondary h-full">
                    <h4 class="font-bold text-sm mb-2">AI Synthesis & Next Steps</h4>
                    <p class="text-sm text-secondary">${tfAiSynthesis}</p>
                </div>
                <div class="portco-card bg-secondary h-full">
                    <h4 class="font-bold text-sm mb-2">Live Scorecard</h4>
                    <div class="grid grid-cols-2 gap-2">${tfScorecardHTML}</div>
                </div>
                <div class="portco-card bg-secondary h-full">
                    <h4 class="font-bold text-sm mb-2">Recent Activity</h4>
                    <div class="flex flex-col gap-2">${tfActivityHTML}</div>
                </div>
            </div>
        </div>

        <!-- CloudVantage Pane -->
        <div class="portco-card">
            <div class="flex justify-between items-center mb-4">
                 <div>
                    <h2 class="text-xl font-bold">CloudVantage</h2>
                    <p class="text-secondary">Growth Stage • Q2 2025</p>
                </div>
                <button class="primary-button" data-action="expand-to-ceo-view" data-company-id="cloudvantage">Expand to CEO View</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="portco-card bg-secondary h-full">
                    <h4 class="font-bold text-sm mb-2">AI Synthesis</h4>
                    <p class="text-sm text-secondary">${cvAiSynthesis}</p>
                </div>
                <div class="portco-card bg-secondary h-full">
                    <h4 class="font-bold text-sm mb-2">Key KPIs</h4>
                    <div class="grid grid-cols-2 gap-2">${cvKpisHTML}</div>
                </div>
                <div class="portco-card bg-secondary h-full">
                    <h4 class="font-bold text-sm mb-2">Strategic Priorities</h4>
                    ${cvPrioritiesHTML}
                </div>
            </div>
        </div>
    </div>
    `;
}

function renderCeoDashboard() {
    const data = ceoDashboardData;
    const kpisHTML = `
        <div class="kpi-card"><p class="kpi-label">Overall Play Status</p><p class="kpi-value">${data.kpis.playStatus.value}</p><p class="kpi-detail">${data.kpis.playStatus.change}</p></div>
        <div class="kpi-card"><p class="kpi-label">Budget Adherence</p><p class="kpi-value text-error">${data.kpis.budgetAdherence.value}</p><p class="kpi-detail">${data.kpis.budgetAdherence.change}</p></div>
        <div class="kpi-card"><p class="kpi-label">Goal Completion</p><p class="kpi-value">${data.kpis.goalCompletion.value}</p><p class="kpi-detail">${data.kpis.goalCompletion.change}</p></div>
        <div class="kpi-card"><p class="kpi-label">Active Plays</p><p class="kpi-value">${data.kpis.activePlays.value}</p><p class="kpi-detail">${data.kpis.activePlays.change}</p></div>
    `;

    const playsHTML = data.departmentPlays.map(play => {
        const statusMap = { 'On Track': 'status-completed', 'At Risk': 'status-warning', 'Behind': 'status-error' };
        return `
            <div class="program-item">
                <div class="program-name">${play.name}</div>
                <div class="program-dept">${play.department}</div>
                <div class="program-status-wrapper"><span class="program-status ${statusMap[play.status]}">${play.status}</span></div>
                <div class="program-progress-container"><div class="program-progress-bar" style="width: ${play.progress}%"></div></div>
                <div class="program-progress-text">${play.progress}%</div>
            </div>
        `;
    }).join('');

    const updatesHTML = data.departmentUpdates.map(update => `
        <div class="update-card">
            <div class="update-card-header">
                <h5 class="update-card-title">${update.department}</h5>
                <span class="update-card-time">${update.time}</span>
            </div>
            <p class="update-card-body">${update.content}</p>
            <div class="update-card-footer">
                <div>Complete: <span>${update.metrics.complete}%</span></div>
                <div>Budget: <span class="${update.metrics.budget > 0 ? 'text-success' : 'text-error'}">${update.metrics.budget > 0 ? '+' : ''}${update.metrics.budget}%</span></div>
                <div>Progress: <span class="${update.metrics.progress >= 0 ? 'text-success' : 'text-error'}">${update.metrics.progress >= 0 ? '+' : ''}${update.metrics.progress}%</span></div>
            </div>
        </div>
    `).join('');

    const suggestionsHTML = data.aiSuggestions.map(suggestion => `
        <div class="portco-card">
            <h4 class="card-title">${suggestion.title}</h4>
            <p class="text-secondary text-sm">${suggestion.content}</p>
        </div>
    `).join('');

    return `
        <h2 class="text-2xl font-bold mb-4">CEO Dashboard</h2>
        <div class="persona-dashboard-layout">
            <div class="persona-main-column">
                <div class="portco-card">
                    <h3 class="card-title">Company-wide KPIs - Q1 2025</h3>
                    <div class="kpi-grid">${kpisHTML}</div>
                </div>
                <div class="portco-card">
                    <h3 class="card-title">All Executing Plays</h3>
                    <div class="program-list">${playsHTML}</div>
                </div>
            </div>
            <div class="persona-sidebar-column">
                <div class="portco-card">
                    <h3 class="card-title">Department Updates Feed</h3>
                    <div class="department-updates-feed">${updatesHTML}</div>
                </div>
                <div class="portco-card">
                    <h3 class="card-title">AI-Generated Suggestions</h3>
                    <div class="flex flex-col gap-4">${suggestionsHTML}</div>
                </div>
            </div>
        </div>
    `;
}

function renderCroRenewalHub() {
    const data = croRenewalData;
    const tableRowsHTML = data.opportunities.map(opp => `
        <tr>
            <td class="font-semibold">${opp.account}</td>
            <td><span class="segment-badge ${opp.segment.toLowerCase()}">${opp.segment}</span></td>
            <td>$${opp.value.toLocaleString()}</td>
            <td>${opp.date}</td>
            <td>${opp.circumstance}</td>
        </tr>
    `).join('');

    return `
        <div class="persona-dashboard-layout">
            <div class="persona-main-column">
                <div class="portco-card">
                    <h3 class="card-title">NewCo Acquisition - Renewal Opportunities</h3>
                    <div class="data-table-container">
                        <table class="renewal-opportunities-table">
                            <thead>
                                <tr><th>Account</th><th>Segment</th><th>Contract Value</th><th>Renewal Date</th><th>Circumstance</th></tr>
                            </thead>
                            <tbody>${tableRowsHTML}</tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="persona-sidebar-column">
                <div class="portco-card">
                    <h3 class="card-title">AI Strategy Co-Pilot</h3>
                    <div id="portco-conversation-log" class="space-y-4"></div>
                    <div id="portco-prompt-container" class="mt-4">
                        ${getPromptBoxHTML(["Let's process renewals for our newco acquisition."])}
                    </div>
                </div>
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