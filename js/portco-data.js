// js/portco-data.js - Contains the data and simulation logic for the PortCo page.

// --- START: SHARED HELPER FUNCTIONS (MOVED FROM PORTCO.JS) ---
function getPromptBoxHTML(questions = []) {
    const state = loadState();
    const promptsHTML = (Array.isArray(questions) ? questions : []).map(q => `<button class="suggestion-pill" data-action="run-prompt" data-prompt="${q}">${q}</button>`).join('');
    return `
        <div class="prompt-area-large-v4">
            ${promptsHTML.length > 0 ? `<div class="suggestion-pills-container">${promptsHTML}</div>` : ''}
            <textarea id="portco-prompt-input" class="prompt-textarea" rows="1" placeholder="Ask a follow-up..."></textarea>
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
                    <button data-action="restart-conversation" class="prompt-action-button" title="Restart Conversation"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg></button>
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
                    ${actions.map(a => `<button class="suggested-action-card" data-action="run-prompt" data-prompt="${a.prompt}"><p class="font-semibold text-sm text-primary">${a.text}</p><p class="text-xs text-secondary">${a.description}</p></button>`).join('')}
                </div>
            </div>`;
}

async function typeWords(element, text, callback) {
    if (!element) return;
    element.innerHTML = "";
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    let i = 0;
    const words = text.split(' ');
    const timer = setInterval(() => {
        if (i < words.length) {
            element.innerHTML += words[i] + ' ';
            i++;
        } else {
            clearInterval(timer);
            if (callback) callback();
        }
    }, 30);
}
// --- END: SHARED HELPER FUNCTIONS ---


// --- CRITICAL UTILITIES AND CONSTANTS ---
const PROJECT_DAY_FOR_TODAY = 9;

function calculateStartDate(today, projectDayForToday) {
    let startDate = new Date(today);
    let businessDaysToGoBack = projectDayForToday - 1;
    while (businessDaysToGoBack > 0) {
        startDate.setDate(startDate.getDate() - 1);
        const dayOfWeek = startDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            businessDaysToGoBack--;
        }
    }
    return startDate;
}

const todayDate = new Date();
const PROJECT_START_DATE = calculateStartDate(todayDate, PROJECT_DAY_FOR_TODAY);
const CURRENT_PROJECT_DAY = PROJECT_DAY_FOR_TODAY;

const projectPlanUtils = {
    PROJECT_START_DATE: PROJECT_START_DATE,
    CURRENT_PROJECT_DAY: CURRENT_PROJECT_DAY,
    mapBusinessDayToDate: (dayNumber, projectStartDate) => {
        let currentDate = new Date(projectStartDate);
        let businessDaysCounted = 0;
        while (businessDaysCounted < dayNumber - 1) {
            currentDate.setDate(currentDate.getDate() + 1);
            const dayOfWeek = currentDate.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                businessDaysCounted++;
            }
        }
        return currentDate;
    },
    calculateTaskDates: (tasks) => {
        const startDate = projectPlanUtils.PROJECT_START_DATE;
        return tasks.map(task => {
            const taskStartDate = projectPlanUtils.mapBusinessDayToDate(task.startDay, startDate);
            const taskEndDate = projectPlanUtils.mapBusinessDayToDate(task.startDay + task.duration - 1, startDate);
            return { ...task, startDate: taskStartDate, endDate: taskEndDate };
        });
    },
    generateAriaCommentary: (task, statusOverrides = {}) => {
        if (statusOverrides[task.id]) {
            return { status: statusOverrides[task.id] };
        }
        const taskEndDay = task.startDay + task.duration - 1;
        const currentDay = projectPlanUtils.CURRENT_PROJECT_DAY;
        if (['DD-16', 'DD-34', 'DD-50'].includes(task.id)) return { status: 'Late' };
        if (task.id === 'DD-13') return { status: 'Blocked' };
        if (task.startDay > currentDay) return { status: 'Upcoming' };
        if (taskEndDay < currentDay) return { status: 'Completed' };
        if (task.startDay <= currentDay && taskEndDay >= currentDay) return { status: 'In Progress' };
        return { status: 'Upcoming' };
    },
    getAriaStatusDetails: (task) => {
        const commentary = projectPlanUtils.generateAriaCommentary(task);
        const dependencies = diligencePlan_v3.filter(p => task.dependencies.includes(p.id));
        const completedDeps = dependencies.filter(d => projectPlanUtils.generateAriaCommentary(d).status === 'Completed');
        switch (commentary.status) {
            case 'Late':
                let reason = "The deadline has passed due to unforeseen delays.";
                let actions = [];
                if (task.id === 'DD-16') {
                    reason = "This task is late because we are still waiting for the target company's CTO to provide admin-level access credentials to their private GitHub repository.";
                    actions = [
                        { text: "Draft follow-up email to CTO", prompt: `Draft a polite but firm follow-up email to the CTO of TechFlow regarding the urgent need for GitHub credentials for task DD-16.` },
                        { text: "Assess impact on timeline", prompt: `Assess the critical path impact of a 3-day delay on task DD-16.` }
                    ];
                }
                if (task.id === 'DD-34') {
                    reason = "The initial NPS survey was sent, but the response rate is currently too low (15%) to be statistically significant. We are waiting for the marketing team to execute a reminder campaign.";
                    actions = [{ text: "Draft reminder for marketing", prompt: `Draft an internal email to the Head of Marketing at TechFlow, asking for an ETA on the NPS survey reminder campaign for task DD-34.` }];
                }
                if (task.id === 'DD-50') {
                    reason = "The external accounting firm (EY) has paused their analysis. They are waiting for the complete 2023 K-1 schedules, which have not yet been uploaded to the data room.";
                    actions = [
                        { text: "Request K-1s from CFO", prompt: `Draft an email to the CFO of TechFlow requesting the 2023 K-1 schedules required by EY for task DD-50.` }
                    ];
                }
                return { text: `This task is late. ${reason}`, actions };
            case 'Completed': return { text: "This task was completed successfully and all deliverables have been received.", actions: [] };
            case 'In Progress': return { text: "This task is currently in progress and on track to be completed by its deadline.", actions: [] };
            case 'Blocked': return { text: "This task is blocked. The 'Architecture Review' cannot start until the 'Development Process' (DD-12) is fully documented. The output from DD-12 is currently under review.", actions: [] };
            case 'Upcoming':
                if (dependencies.length > 0 && dependencies.length === completedDeps.length) {
                    return {
                        text: "All prerequisite tasks for this item are complete. It is scheduled to start on its planned date, but could potentially be started early.",
                        actions: [
                            { text: "Move start date earlier", prompt: `Can we start the analysis 2 days earlier?` }
                        ]
                    };
                } else if (dependencies.length > 0) {
                    const waitingOn = dependencies.filter(d => projectPlanUtils.generateAriaCommentary(d).status !== 'Completed').map(d => d.id).join(', ');
                    return { text: `This task is scheduled to begin soon. We are waiting for the following deliverables to be completed: ${waitingOn}.`, actions: [] };
                } else {
                    return { text: "This task has no prerequisites and is scheduled to begin on its planned start date.", actions: [] };
                }
            default: return { text: "Status is pending.", actions: [] };
        }
    }
};

const FILTER_DATA = {
    workstreams: [ { label: 'Business & Strategy' }, { label: 'Commercial & Customer' }, { label: 'Technology & Operations' }, { label: 'Financial & Risk' }, { label: 'Synthesis' }, { label: 'Value Creation' }, { label: 'Investment Committee' }, { label: 'Final Deliverables' } ],
    statuses: ['In Progress', 'Upcoming', 'Completed', 'Late', 'Blocked']
};

const projectResources = [
    { name: 'Alex (Analyst)', role: 'Internal', hours: 45 },
    { name: 'Brenda (VP)', role: 'Internal', hours: 35 },
    { name: 'EY', role: 'Partner', hours: 50 },
    { name: 'PwC', role: 'Partner', hours: 25 },
    { name: 'Sarah (Associate)', role: 'Internal', hours: 48 },
];

const commandCenterAriaResponses = {
    "Give me a deep dive on TechFlow's financial health score.": {
        renderFunc: () => {
            const anomaly1 = techflow_anomalies.find(a => a.id === 'arr-comp');
            const anomaly2 = techflow_anomalies.find(a => a.id === 'maint-fee');
            return `<div class="aria-response-content">
                <div class="build-item"><h3 class="response-title">Deep Dive: Financial Health Score (8.4)</h3></div>
                <div class="build-item"><p class="response-text" data-typing-text="TechFlow's Financial Health score is currently stable at 8.4. However, this score is based on reported financials. My analysis has flagged two underlying anomalies in the source data that present a risk to this score:"></p></div>
                <div class="build-item card-base p-4 mt-4">
                    <h3 class="font-bold text-lg">${anomaly1.title}</h3>
                    <p class="text-sm text-secondary">${anomaly1.issue}</p>
                    <div class="analysis-box mt-2"><p class="response-text"><span class="font-bold">Analysis:</span> ${anomaly1.analysis}</p></div>
                </div>
                <div class="build-item card-base p-4 mt-4">
                    <h3 class="font-bold text-lg">${anomaly2.title}</h3>
                    <p class="text-sm text-secondary">${anomaly2.issue}</p>
                    <div class="analysis-box mt-2"><p class="response-text"><span class="font-bold">Analysis:</span> ${anomaly2.analysis}</p></div>
                </div>
            </div>`;
        },
        followUpQuestions: ["Model the financial impact of the ARR re-statement.", "Draft an email to the CFO about these findings."]
    },
    "Tell me more about the 'Valuation Model Complete' activity.": {
        renderFunc: () => `<div class="aria-response-content build-item card-base">
            <h4 class="response-title">Activity Detail: Valuation Model Complete</h4>
            <p class="response-text" data-typing-text="The base case valuation model for TechFlow Solutions was completed by the deal team 2 hours ago. The preliminary valuation is pegged at **$150M**, assuming the successful mitigation of the flagged financial anomalies. The model has been uploaded to the data room."></p>
        </div>`,
        followUpQuestions: ["Show me the key assumptions in the valuation model.", "Run a scenario with 25% lower synergy realization."]
    },
    "Tell me more about the 'Customer Churn Anomaly Detected' activity.": {
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Deep Dive: Customer Churn Anomaly</h3></div>
            <div class="build-item"><p class="response-text" data-typing-text="On August 14th, I detected a **5% increase in logo churn** that deviates from the 12-month historical average. Analysis of the 8 recently churned accounts indicates a common theme: they were all heavy users of the 'Advanced Reporting Module,' a feature set that was deprecated in the last product release. This suggests the churn was driven by a product decision."></p></div>
            <div class="build-item judgement-box error mt-4"><p class="judgement-title">Actionable Insight:</p><p class="judgement-text" data-typing-text="This churn is likely preventable. I recommend immediately generating a list of remaining customers who are also heavy users of this deprecated module. A proactive outreach campaign from Customer Success could mitigate further churn."></p></div>
        </div>`,
        followUpQuestions: ["Generate a list of at-risk customers.", "Draft an email to the Head of Product about this finding."]
    },
    "Tell me more about the 'Synergy Analysis Updated' activity.": {
        renderFunc: () => `<div class="aria-response-content build-item card-base">
            <h4 class="response-title">Activity Detail: Synergy Analysis Updated</h4>
            <p class="response-text" data-typing-text="The synergy analysis for the TechFlow acquisition was updated 6 hours ago. The total identifiable cost synergies have been revised down from $2.5M to **$2.1M** due to higher-than-expected costs for retaining key technical personnel."></p>
        </div>`,
        followUpQuestions: ["What is the impact of this on the valuation model?", "Which cost synergy category was revised?"]
    }
};

const diligenceHubAriaResponses = {
    "Can we start the analysis 2 days earlier?": {
        simulation: { 
            type: 'GANTT_REPLAN', 
            params: { startDayOffset: -2, phaseToShift: 'Phase 3: Analysis' } 
        },
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Scenario: Accelerate Analysis Phase by 2 Days</h3></div>
            <div class="build-item" id="gantt-replan-target-${Date.now()}">
                 <div class="flex items-center justify-center h-64"><div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div></div>
            </div>
            <div class="build-item"><p class="response-text" data-typing-text="I have simulated a 2-day acceleration of the Analysis phase, which you can see reflected in the updated plan above. This is possible, but it creates significant resource contention:"></p></div>
            <div class="build-item list-container mt-4">
                <div class="list-item"><span class="list-number text-success">1</span><div><h4 class="list-title">Positive Impact:</h4><p class="list-text" data-typing-text="The final IC Memo (DD-65) would be ready on Day 10 instead of Day 12, providing the deal team with an earlier read on the key findings."></p></div></div>
                <div class="list-item"><span class="list-number text-error">2</span><div><h4 class="list-title">Negative Impact (Resource Overload):</h4><p class="list-text" data-typing-text="This would require **Alex (Analyst)** and **Sarah (Associate)** to work an estimated 65 hours each during that week, which is a high risk for burnout and errors. The external partner **EY** would also need to approve an expedited timeline."></p></div></div>
            </div>
        </div>`,
        followUpQuestions: ["Show me the resource allocation for that week.", "Draft an email to EY requesting the expedited timeline."]
    },
    "What is the impact of the 1-day delay on the critical path?": {
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Critical Path Impact Analysis</h3></div>
            <div class="build-item judgement-box warning mt-4">
                <p class="judgement-title">Judgement (Medium Confidence - 85%):</p>
                <p class="judgement-text" data-typing-text="A 1-day delay on the current critical path task, **DD-16 (Code Scan)**, will consume all remaining slack in the Technology workstream. This puts the final **'Comprehensive DD Report' (DD-68)** delivery date at risk. Any further delays beyond this will push out the final deadline."></p>
            </div>
        </div>`,
        followUpQuestions: ["What is the new critical path for the TechFlow diligence?", "Re-plan the project with a compressed QA cycle."]
    },
    "Which resources are overallocated next week?": {
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Resource Allocation: Next Week (Day 11-15)</h3></div>
            <div class="build-item"><p class="response-text" data-typing-text="Based on the current plan for next week, two resources are projected to be overallocated:"></p></div>
            <div class="build-item data-table-container mt-4">
                <table class="data-table">
                    <thead><tr><th>Resource</th><th>Assigned Tasks</th><th>Allocated Hours</th><th>Capacity</th><th class="text-error">Overload</th></tr></thead>
                    <tbody>
                        <tr><td>Alex (Analyst)</td><td>DD-52, DD-60, DD-61</td><td>48</td><td>40</td><td class="text-error">8 hours</td></tr>
                        <tr><td>EY (Partner)</td><td>DD-50, DD-52, DD-65</td><td>55</td><td>50</td><td class="text-error">5 hours</td></tr>
                    </tbody>
                </table>
            </div>
        </div>`,
        followUpQuestions: ["Which tasks can we de-prioritize to resolve this?", "Can we bring in another analyst to help Alex?"]
    },
    "Show me the Business & Strategy workstream.": {
        renderFunc: () => DiligenceHubComponent._renderWorkstreamTab('Business & Strategy'),
        followUpQuestions: ["Summarize the key risks for this workstream.", "Who are the key contacts for this area?"]
    },
    "Show me the Commercial & Customer workstream.": {
        renderFunc: () => DiligenceHubComponent._renderWorkstreamTab('Commercial & Customer'),
        followUpQuestions: ["Summarize the key risks for this workstream.", "Who are the key contacts for this area?"]
    },
    "Show me the Technology & Operations workstream.": {
        renderFunc: () => DiligenceHubComponent._renderWorkstreamTab('Technology & Operations'),
        followUpQuestions: ["Summarize the key risks for this workstream.", "Who are the key contacts for this area?"]
    },
    "Show me the Financial & Risk workstream.": {
        renderFunc: () => DiligenceHubComponent._renderWorkstreamTab('Financial & Risk'),
        followUpQuestions: ["Summarize the key risks for this workstream.", "Who are the key contacts for this area?"]
    }
};

const ceoDashboardData = {
    kpis: {
        playStatus: { value: '78%', change: '+2% from last quarter' },
        budgetAdherence: { value: '-1.2%', change: '-1.1% from last quarter' },
        goalCompletion: { value: '68%', change: '+3% from last quarter' },
        activePlays: { value: '42', change: '-5 from last quarter' }
    },
    departmentPlays: [
        { name: 'Post-Acquisition Integration', department: 'Operations', status: 'On Track', progress: 80, phase: 'Transformation' },
        { name: 'Market Expansion Strategy', department: 'Marketing', status: 'On Track', progress: 65, phase: 'Growth' },
        { name: 'Cost Reduction Initiative', department: 'Finance', status: 'At Risk', progress: 40, phase: 'Transformation' },
        { name: 'Systems Migration', department: 'IT', status: 'At Risk', progress: 55, phase: 'Transformation' },
        { name: 'Talent Development Program', department: 'HR', status: 'On Track', progress: 72, phase: 'Growth' },
        { name: 'New Product Launch', department: 'Product Dev', status: 'Behind', progress: 30, phase: 'Growth' },
        { name: 'Vendor Consolidation', department: 'Operations', status: 'Behind', progress: 20, phase: 'Strategy' }
    ],
    departmentUpdates: [
        { department: 'Product Development', time: 'Today, 10:45 AM', content: "The New Product Launch play is facing headwinds due to complexities with the cloud integration component. We've had to restructure the dev team to bring in more specialized expertise. We expect a 3-week delay to the original timeline.", metrics: { complete: 35, budget: -18.2, progress: -2.0 } },
        { department: 'Marketing', time: 'Yesterday, 4:30 PM', content: "Market Expansion Strategy is proceeding ahead of schedule. We've successfully launched in two new territories in the APAC region, with initial lead-gen exceeding targets by 15%. Pipeline generation is up 15% and we're seeing strong early conversion data.", metrics: { complete: 65, budget: 2.0, progress: 2.0 } },
        { department: 'Operations', time: 'Yesterday, 11:15 AM', content: "Post-Acquisition Integration of TechCore is on track. Customer data migration is 95% complete, and financial systems are running in parallel. The team is working closely with the IT department to de-risk the upcoming System Migration play by fixing known challenges with legacy system compatibility.", metrics: { complete: 80, budget: -1.2, progress: 0.0 } },
        { department: 'Finance', time: 'Mar 17, 2025', content: "The Cost Reduction Initiative is showing mixed results. We've achieved the targeted savings in procurement and operational expenses, but IT spend is over budget due to higher cloud costs than initially projected. We've implemented additional cost controls and will take a more in-depth approach for Q2.", metrics: { complete: 40, budget: -2.3, progress: -1.0 } },
        { department: 'Human Resources', time: 'Mar 16, 2025', content: "Talent Development Program has been rolled out successfully to all departments. We've achieved 92% employee participation and initial feedback from the new training modules is positive. The leadership training component is showing early signs of success, with a 5% improvement in management effectiveness scores.", metrics: { complete: 72, budget: 1.8, progress: 1.0 } }
    ],
    aiSuggestions: [
        { title: 'Add budget context', content: "Company-wide budget adherence has improved to -1.2% variance, with Marketing and HR teams operating under budget. Finance team is working to address the 3.5% overspend in the Cost Reduction Initiative." },
        { title: 'Add growth metrics', content: "The Market Expansion Strategy has already resulted in a 12% increase in qualified leads and a 7% increase in new customer acquisitions, exceeding our quarterly targets by 5%." },
        { title: 'Add risk assessment', content: "The delay in the New Product Launch presents a moderate risk to Q2 revenue targets. I would recommend we develop a phased rollout approach to mitigate the impact while addressing the technical challenges." }
    ]
};

const croRenewalData = {
    opportunities: [
        { account: 'Global Enterprises Inc.', segment: 'Gold', value: 3245000, date: 'July 15, 2025', circumstance: 'Business Success' },
        { account: 'Apex Solutions', segment: 'Gold', value: 2780000, date: 'August 3, 2025', circumstance: 'Technical Success' },
        { account: 'Titan Industries', segment: 'Gold', value: 4120000, date: 'August 17, 2025', circumstance: 'Business Success' },
        { account: 'NeoGen Systems', segment: 'Silver', value: 785000, date: 'July 8, 2025', circumstance: 'Technical Success' },
        { account: 'Velocity Partners', segment: 'Silver', value: 640000, date: 'September 5, 2025', circumstance: 'Struggler' },
        { account: 'Stellar Technologies', segment: 'Silver', value: 925000, date: 'July 28, 2025', circumstance: 'Business Success' },
        { account: 'Fusion Micro', segment: 'Bronze', value: 125000, date: 'September 14, 2025', circumstance: 'Technical Success' },
        { account: 'Horizon Solutions', segment: 'Bronze', value: 95000, date: 'July 5, 2025', circumstance: 'Struggler' },
        { account: 'Nimbus Data', segment: 'Bronze', value: 72000, date: 'August 11, 2025', circumstance: 'Technical Success' },
        { account: 'Pulse Innovations', segment: 'Bronze', value: 135000, date: 'September 29, 2025', circumstance: 'Business Success' },
    ]
};

const commandCenterData = {
    techflow: {
        liveScorecard: {
            financialHealth: { score: 8.4, change: "+0.2 today" },
            operations: { score: 7.8, change: "+0.1 today" },
            growthPotential: { score: 9.1, change: "+0.3 today" },
            strategicFit: { score: 6.7, change: "Under review" }
        },
        recentActivity: [
            { text: "Valuation Model Complete", time: "2 hours ago", status: "success" },
            { text: "Customer Churn Anomaly Detected", time: "4 hours ago", status: "error", action: "navigate-to-workstream-tab", target: "Commercial & Customer" },
            { text: "Synergy Analysis Updated", time: "6 hours ago", status: "info" }
        ],
        workstreams: [
            { title: "Data Extraction", status: "COMPLETED", values: [{value: 247, label: "DOCUMENTS"}, {value: "1,834", label: "DATA POINTS"}] },
            { title: "Anomaly Detection", status: "IN PROGRESS", hasPing: true, values: [{value: 3, label: "CRITICAL FLAGS"}, {value: 12, label: "MINOR ISSUES"}] },
            { title: "Valuation Modeling", status: "COMPLETED", values: [{value: "8.2M", label: "SYNERGY VALUE"}] },
            { title: "Growth Modeling", status: "PENDING", values: [{value: "-", label: "SCENARIOS"}, {value: "-", label: "GROWTH RATE"}] },
            { title: "IC Dashboard", status: "PENDING", values: [{value: "-", label: "READINESS"}, {value: "5 days", label: "REMAINING"}] }
        ]
    },
    cloudvantage: {
        kpis: [
            { label: 'ARR', value: '$78M', change: '+4% QoQ', isGood: true },
            { label: 'Net Revenue Retention', value: '128%', change: '+3% vs Target', isGood: true },
            { label: 'EBITDA Margin', value: '31%', change: '-1% vs Target', isGood: false },
            { label: 'Rule of 40', value: '58%', change: 'Healthy', isGood: true }
        ],
        plays: [
            { name: 'Post-Acquisition Integration', status: 'On Track' },
            { name: 'AI-Powered Feature Dev', status: 'Behind' }
        ],
        aiSynthesis: "NRR is strong at 128%, but the AI Feature delay poses a moderate risk to the Q4 launch."
    }
};

const cloudVantageKpis = [
    { label: 'ARR', value: '$78M', change: '+4% QoQ', changeColor: 'var(--status-success)' },
    { label: 'Net Revenue Retention', value: '128%', change: '+3% vs Target', changeColor: 'var(--status-success)' },
    { label: 'EBITDA Margin', value: '31%', change: '-1% vs Target', changeColor: 'var(--status-error)' },
    { label: 'Rule of 40', value: '58%', change: 'Healthy', changeColor: 'var(--status-success)' }
];

const cloudVantagePrograms = [
    { name: 'Enterprise GTM Strategy', dept: 'Sales', status: 'On Track', statusClass: 'status-completed', progress: 75 },
    { name: 'ABM Campaign Launch', dept: 'Marketing', status: 'On Track', statusClass: 'status-completed', progress: 90 },
    { name: 'Channel Partner Program', dept: 'Partners', status: 'At Risk', statusClass: 'status-warning', progress: 45 },
    { name: 'Platform Scalability Initiative', dept: 'Engineering', status: 'On Track', statusClass: 'status-completed', progress: 60 },
    { name: 'AI-Powered Feature Dev', dept: 'Product', status: 'Behind', statusClass: 'status-error', progress: 30 },
    { name: 'Leadership Development', dept: 'HR', status: 'On Track', statusClass: 'status-completed', progress: 85 }
];

const portcoPageData = {
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
        prompts: ["Prepare QBR materials for the NewCo acquisition.", "Who is the lead engineer on the AI feature?", "Draft a board update on the NRR outperformance.", "What is the budget impact of the AI feature delay?"]
    }
};

const portcoResponses = {
    "What are the dependencies for the 'Audited Financials' task?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Dependencies for DD-48: Audited Financials</h4><p class="response-text" data-typing-text="This task has one primary predecessor:"></p><ul class="list-disc pl-6 mt-2 text-secondary"><li><strong>DD-40: Financial Statement Analysis:</strong> This task must be completed first to develop a baseline understanding of the company's financials before diving into the audited details. The current status of DD-40 is <strong>Completed</strong>.</li></ul></div>`,
        followUpQuestions: ["Who is assigned to the 'Audited Financials' task?"]
    },
    "Who is assigned to the 'Audited Financials' task?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Team for DD-48: Audited Financials</h4><p class="response-text" data-typing-text="The following team members are assigned to this task:"></p><div class="data-table-container mt-2"><table class="data-table"><thead><tr><th>Name</th><th>Role</th><th>Responsibility</th></tr></thead><tbody><tr><td>Brenda (VP)</td><td>Internal</td><td>Overall review and sign-off.</td></tr><tr><td>Sarah (Associate)</td><td>Internal</td><td>Detailed analysis and summary report.</td></tr><tr><td>PwC</td><td>Partner</td><td>Provide audited statements and answer clarifying questions.</td></tr></tbody></table></div></div>`,
        followUpQuestions: ["What is the current status of this task?"]
    },
    "What are the dependencies for the 'Architecture Review' task?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Dependencies for DD-13: Architecture Review</h4><p class="response-text" data-typing-text="This task is dependent on the completion of the following predecessor:"></p><ul class="list-disc pl-6 mt-2 text-secondary"><li><strong>DD-12: Development Process:</strong> A full understanding of the SDLC and release cadence is required before the architecture can be properly assessed for scalability and efficiency. The current status of DD-12 is <strong>In Progress</strong>.</li></ul></div>`,
        followUpQuestions: ["Who is assigned to the 'Architecture Review' task?", "What is the status of the DD-12 deliverable?"]
    },
    "Who is assigned to the 'Architecture Review' task?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Team for DD-13: Architecture Review</h4><p class="response-text" data-typing-text="This is a specialized task led by our internal and external technology experts:"></p><div class="data-table-container mt-2"><table class="data-table"><thead><tr><th>Name</th><th>Role</th><th>Responsibility</th></tr></thead><tbody><tr><td>Peter Wood</td><td>Sr. Director, Digital Value Creation</td><td>Lead reviewer, focus on scalability and PE value levers.</td></tr><tr><td>AWS</td><td>Partner</td><td>Provide Well-Architected Framework review and cloud-readiness assessment.</td></tr><tr><td>Alex Johnson (CTO)</td><td>Target</td><td>Provide documentation and answer technical questions.</td></tr></tbody></table></div></div>`,
        followUpQuestions: ["What are the dependencies for the 'Architecture Review' task?", "Draft an email to the CTO about the DD-12 deliverable."]
    }
};