// js/portco.js - Logic for the individual PortCo dashboards

// --- NEW: DYNAMIC DATE CALCULATION ---
const PROJECT_DAY_FOR_TODAY = 7; // This defines that today's real date is the 7th business day of the project.

/**
 * Calculates the project's start date by working backwards from today's actual date.
 * @param {Date} today The actual current date.
 * @param {number} projectDayForToday The business day number that today represents.
 * @returns {Date} The calculated start date of the project.
 */
function calculateStartDate(today, projectDayForToday) {
    let startDate = new Date(today);
    let businessDaysToGoBack = projectDayForToday - 1;

    while (businessDaysToGoBack > 0) {
        startDate.setDate(startDate.getDate() - 1);
        const dayOfWeek = startDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Not a Sunday or Saturday
            businessDaysToGoBack--;
        }
    }
    return startDate;
}

const todayDate = new Date(); // Get the actual current date.
const PROJECT_START_DATE = calculateStartDate(todayDate, PROJECT_DAY_FOR_TODAY);
const CURRENT_PROJECT_DAY = PROJECT_DAY_FOR_TODAY;
// --- END OF DYNAMIC DATE CALCULATION ---


// --- CONSTANTS AND UTILS ---
const FILTER_DATA = {
    workstreams: [ { label: 'Business & Strategy' }, { label: 'Commercial & Customer' }, { label: 'Technology & Operations' }, { label: 'Financial & Risk' }, { label: 'Synthesis' }, { label: 'Value Creation' }, { label: 'Investment Committee' }, { label: 'Final Deliverables' } ],
    statuses: ['In Progress', 'Upcoming', 'Completed', 'Late', 'Blocked']
};

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

    generateAriaCommentary: (task) => {
        const taskEndDay = task.startDay + task.duration - 1;
        const currentDay = projectPlanUtils.CURRENT_PROJECT_DAY;
        const phaseDef = [
            { name: "Phase 1: Foundation", dayRange: [1, 2] }
        ].find(p => task.startDay >= p.dayRange[0] && task.startDay <= p.dayRange[1]);

        if (phaseDef && phaseDef.name === "Phase 1: Foundation") return { status: 'Completed' };
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
                    actions = [
                        { text: "Draft reminder for marketing", prompt: `Draft an internal email to the Head of Marketing at TechFlow, asking for an ETA on the NPS survey reminder campaign for task DD-34.` }
                    ];
                }
                if (task.id === 'DD-50') {
                    reason = "The external accounting firm (EY) has paused their analysis. They are waiting for the complete 2023 K-1 schedules, which have not yet been uploaded to the data room.";
                    actions = [
                        { text: "Request K-1s from CFO", prompt: `Draft an email to the CFO of TechFlow requesting the 2023 K-1 schedules required by EY for task DD-50.` },
                        { text: "Log risk of tax compliance issues", prompt: `Log a new medium-level risk in the workspace related to potential tax compliance issues due to delayed analysis for DD-50.` }
                    ];
                }
                return { text: `This task is late. ${reason}`, actions };

            case 'Completed':
                return { text: "This task was completed successfully and all deliverables have been received.", actions: [] };
            case 'In Progress':
                return { text: "This task is currently in progress and on track to be completed by its deadline.", actions: [] };
            case 'Blocked':
                 return { text: "This task is blocked. The 'Architecture Review' cannot start until the 'Development Process' (DD-12) is fully documented. The output from DD-12 is currently under review.", actions: [] };
            case 'Upcoming':
                if (dependencies.length > 0 && dependencies.length === completedDeps.length) {
                    return {
                        text: "All prerequisite tasks for this item are complete. It is scheduled to start on its planned date, but could potentially be started early.",
                        actions: [
                            { text: "Move start date earlier", prompt: `Analyze the feasibility of moving the start date for task ${task.id} earlier.` },
                            { text: "Confirm resource availability", prompt: `Are the resources assigned to task ${task.id} available to start now?` }
                        ]
                    };
                } else if (dependencies.length > 0) {
                    const waitingOn = dependencies.filter(d => projectPlanUtils.generateAriaCommentary(d).status !== 'Completed').map(d => d.id).join(', ');
                    return { text: `This task is scheduled to begin soon. We are waiting for the following deliverables to be completed: ${waitingOn}.`, actions: [] };
                } else {
                    return { text: "This task has no prerequisites and is scheduled to begin on its planned start date.", actions: [] };
                }
            default:
                return { text: "Status is pending.", actions: [] };
        }
    }
};

// --- SIMULATED RESPONSE ENGINE FOR PORTCO PAGE ---
const portcoResponses = {
    "Replan the project assuming the market data arrives on Thursday.": {
        renderFunc: () => {
            const newPlan = JSON.parse(JSON.stringify(diligencePlan_v3));
            const marketTask = newPlan.find(t => t.id === 'DD-7');
            const dependentTask = newPlan.find(t => t.id === 'DD-8');
            
            if (marketTask) marketTask.startDay = 9;
            if (dependentTask) dependentTask.startDay = 10;

            renderPlanTab(false, newPlan);
            
            return `<div class="portfolio-response-card">
                        <p>OK. I have updated the project plan to reflect the delay in the 'Addressable Market' task (DD-7) to Thursday. I also shifted its direct dependent, 'Barriers to Entry' (DD-8). Please review the updated Gantt chart above.</p>
                    </div>`;
        },
        followUpQuestions: ["What is the new critical path?", "Are any resources overallocated now?"]
    }
};

// --- MAIN SCRIPT ---
document.addEventListener('DOMContentLoaded', async () => {
    await loadSharedComponents();
    const urlParams = new URLSearchParams(window.location.search);
    const companyId = urlParams.get('company');

    if (!companyId) {
        document.getElementById('main-content').innerHTML = `<div class="text-center py-16">...</div>`;
        return;
    }

    let state = loadState();
    state.selectedCompanyId = companyId;
    if (!state.diligenceFilters) {
        state.diligenceFilters = {
            workstreams: FILTER_DATA.workstreams.map(w => w.label),
            statuses: [...FILTER_DATA.statuses]
        };
    }
    saveState(state);
    
    if (companyId === 'techflow-solutions') {
        renderDiligenceHub(companyId);
    } else {
        renderGuidedGenerativePortcoPage(companyId);
    }

    Navigation.updateCompanySelector();
    initializePortcoEventListeners();
});

// --- RENDERING FUNCTIONS ---
function renderDiligenceHub(companyId) {
    const mainContent = document.getElementById('main-content');
    const pills = ['Plan', 'Business & Strategy', 'Commercial & Customer', 'Technology & Operations', 'Financial & Risk'];

    mainContent.innerHTML = `
        <div class="diligence-hub-container">
            <div class="diligence-pills">
                ${pills.map((pill, index) => `<button class="pill ${index === 0 ? 'active' : ''}" data-action="switch-diligence-tab" data-tab-name="${pill}">${pill}</button>`).join('')}
            </div>
            <div id="diligence-content-area" class="diligence-content"></div>
            <div id="portco-conversation-container" class="mt-6"></div>
        </div>
    `;
    
    renderDiligenceTabContent('Plan', companyId);
}

function renderDiligenceTabContent(tabName, companyId) {
    const contentArea = document.getElementById('diligence-content-area');
    const conversationContainer = document.getElementById('portco-conversation-container');
    if (!contentArea || !conversationContainer) return;

    if (tabName === 'Plan') {
        renderPlanTab();
        conversationContainer.innerHTML = getPromptBoxHTML([
            "What is the impact of the 1-day delay on the critical path?",
            "Replan the project assuming the market data arrives on Thursday.",
            "Which resources are overallocated next week?"
        ]);
    } else {
        contentArea.innerHTML = renderWorkstreamTab(tabName);
        conversationContainer.innerHTML = getPromptBoxHTML([`Summarize the key risks for ${tabName}.`, "Draft an IC memo slide for this section.", `Who are the key contacts for ${tabName}?`]);
    }
}

function renderPlanTab(keepFilterOpen = false, planData = diligencePlan_v3) {
    const state = loadState();
    
    const planWithDates = projectPlanUtils.calculateTaskDates(planData);
    const contentArea = document.getElementById('diligence-content-area');

    const phaseDefinitions = [
        { name: "Phase 1: Foundation", dayRange: [1, 2] },
        { name: "Phase 2: Deep Dive", dayRange: [3, 5] },
        { name: "Phase 3: Analysis", dayRange: [6, 11] },
        { name: "Phase 4: Synthesis & Finalization", dayRange: [12, 17] }
    ];

    const hierarchy = {};
    planWithDates.forEach(task => {
        const phaseDef = phaseDefinitions.find(p => task.startDay >= p.dayRange[0] && task.startDay <= p.dayRange[1]);
        if (!phaseDef) return;
        if (!hierarchy[phaseDef.name]) hierarchy[phaseDef.name] = { name: phaseDef.name, categories: {} };
        if (!hierarchy[phaseDef.name].categories[task.category]) hierarchy[phaseDef.name].categories[task.category] = { name: task.category, tasks: [] };
        hierarchy[phaseDef.name].categories[task.category].tasks.push(task);
    });

    Object.values(hierarchy).forEach(phase => {
        let phaseEarliestStart = Infinity, phaseLatestEnd = -Infinity;
        Object.values(phase.categories).forEach(category => {
            const earliestTaskStart = Math.min(...category.tasks.map(t => t.startDay));
            const latestTaskEnd = Math.max(...category.tasks.map(t => t.startDay + Math.ceil(t.duration) - 1));
            category.summaryStartDay = earliestTaskStart;
            category.summaryDuration = latestTaskEnd - earliestTaskStart + 1;
            if (earliestTaskStart < phaseEarliestStart) phaseEarliestStart = earliestTaskStart;
            if (latestTaskEnd > phaseLatestEnd) phaseLatestEnd = latestTaskEnd;
        });
        phase.summaryStartDay = phaseEarliestStart;
        phase.summaryDuration = phaseLatestEnd - phaseEarliestStart + 1;
    });

    const displayHierarchy = JSON.parse(JSON.stringify(hierarchy));
    Object.values(displayHierarchy).forEach(phase => {
        Object.values(phase.categories).forEach(category => {
            category.tasks = category.tasks.filter(task => {
                const commentary = projectPlanUtils.generateAriaCommentary(task);
                return state.diligenceFilters.workstreams.includes(task.workstream) && state.diligenceFilters.statuses.includes(commentary.status);
            });
        });
        phase.categories = Object.values(phase.categories).filter(cat => cat.tasks.length > 0);
    });

    const timelineDates = Array.from({ length: 17 }, (_, i) => projectPlanUtils.mapBusinessDayToDate(i + 1, PROJECT_START_DATE));
    const today = projectPlanUtils.mapBusinessDayToDate(CURRENT_PROJECT_DAY, PROJECT_START_DATE);

    let leftPaneHTML = '';
    let rightPaneHTML = '';

    const workstreamColors = {
        "Business & Strategy": "var(--accent-blue)",
        "Commercial & Customer": "var(--accent-teal)",
        "Technology & Operations": "var(--purple)",
        "Financial & Risk": "var(--status-warning)",
        "Synthesis": "var(--text-secondary)",
        "Value Creation": "var(--text-secondary)",
        "Investment Committee": "var(--text-secondary)",
        "Final Deliverables": "var(--text-secondary)"
    };

    Object.values(displayHierarchy).filter(phase => phase.categories.length > 0).forEach(phase => {
        const originalPhase = hierarchy[phase.name];
        const phaseId = `phase-${phase.name.replace(/[^a-zA-Z0-9-]/g, '').replace(/ /g, '-')}`;
        
        leftPaneHTML += `<div class="gantt-row" data-row-id="${phaseId}"><div class="gantt-row-left gantt-phase-header-left" data-action="toggle-rows" data-target-class="${phaseId}"><div class="gantt-phase-details"><svg class="chevron-icon rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg><span>${phase.name}</span></div></div></div>`;
        rightPaneHTML += `<div class="gantt-row" data-row-id="${phaseId}"><div class="gantt-row-right gantt-phase-header-right" data-action="toggle-rows" data-target-class="${phaseId}"><div class="gantt-timeline-grid"><div class="gantt-summary-bar phase-bar" style="grid-column: ${originalPhase.summaryStartDay} / span ${originalPhase.summaryDuration};"></div></div></div></div>`;

        phase.categories.forEach(cat => {
            const originalCategory = originalPhase.categories[cat.name];
            const categoryId = `cat-${cat.name.replace(/[^a-zA-Z0-9-]/g, '').replace(/ /g, '-')}`;

            leftPaneHTML += `<div class="gantt-row ${phaseId}" data-row-id="${categoryId}" data-row-type="category"><div class="gantt-row-left gantt-category-header-left" data-action="toggle-rows" data-target-class="${categoryId}"><div class="gantt-category-details"><svg class="chevron-icon rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg><span>${cat.name}</span></div></div></div>`;
            rightPaneHTML += `<div class="gantt-row ${phaseId}" data-row-id="${categoryId}" data-row-type="category"><div class="gantt-row-right gantt-category-header-right" data-action="toggle-rows" data-target-class="${categoryId}"><div class="gantt-timeline-grid"><div class="gantt-summary-bar category-bar" style="grid-column: ${originalCategory.summaryStartDay} / span ${originalCategory.summaryDuration};"></div></div></div></div>`;

            cat.tasks.forEach(task => {
                const commentary = projectPlanUtils.generateAriaCommentary(task);
                const workstreamClass = `ws-${task.workstream.split(' ')[0].toLowerCase().replace('&', '')}`;
                const statusClass = `status-${commentary.status.toLowerCase().replace(/ /g, '-')}`;
                const taskEndDay = task.startDay + Math.ceil(task.duration) - 1;
                const extensionStart = taskEndDay + 1;
                const extensionEnd = CURRENT_PROJECT_DAY + 1;
                const workstreamColor = workstreamColors[task.workstream] || 'var(--status-error)';
                
                leftPaneHTML += `<div class="gantt-row ${phaseId} ${categoryId}" data-row-id="${task.id}"><div class="gantt-row-left" data-action="show-task-details" data-task-id="${task.id}"><div class="gantt-task-details"><div class="gantt-task-id">${task.id}</div><div class="gantt-task-element">${task.name}</div><div class="gantt-task-status"><div class="status-pill-column ${statusClass}">${commentary.status}</div></div></div></div></div>`;
                rightPaneHTML += `<div class="gantt-row ${phaseId} ${categoryId}" data-row-id="${task.id}"><div class="gantt-row-right" data-action="show-task-details" data-task-id="${task.id}"><div class="gantt-timeline-grid"><div class="gantt-bar ${workstreamClass}" style="grid-column: ${task.startDay} / span ${Math.max(1, task.duration)};"></div>${commentary.status === 'Late' && extensionStart < extensionEnd ? `<div class="gantt-bar-extension" style="grid-column: ${extensionStart} / ${extensionEnd}; background-color: ${workstreamColor}33;"></div>` : ''}</div></div></div>`;
            });
        });
    });

    const todayBandLeft = (CURRENT_PROJECT_DAY - 1) * 42;

    contentArea.innerHTML = `
        <div class="gantt-container-v7">
            <div class="gantt-controls">
                <h3 class="gantt-main-title">Project Diligence Plan</h3>
                <div class="gantt-control-buttons">
                    <button class="gantt-control-btn" data-action="expand-collapse-all" title="Expand/Collapse All"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg></button>
                    <button class="gantt-control-btn" data-action="toggle-filter-modal" title="Filter"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></button>
                </div>
            </div>

            <div class="gantt-scroll-wrapper">
                <div class="gantt-grid-container">
                    <div class="gantt-left-pane">
                        <div class="gantt-left-header"><div>ID</div><div>Task Name</div><div>Status</div></div>
                        <div class="gantt-left-body">${leftPaneHTML}</div>
                    </div>
                    <div class="gantt-right-pane">
                        <div class="gantt-right-header">${timelineDates.map(date => `<div class="gantt-day-header ${date.getDay() === 0 || date.getDay() === 6 ? 'weekend' : ''} ${date.toDateString() === today.toDateString() ? 'today' : ''}"><span>${date.toLocaleDateString('en-US', { weekday: 'short' })[0]}</span><span>${date.getDate()}</span></div>`).join('')}</div>
                        <div class="gantt-right-body">
                            <div class="gantt-today-band" style="left: ${todayBandLeft}px; width: 40px;"></div>
                            ${rightPaneHTML}
                        </div>
                    </div>
                </div>
            </div>

            <div id="gantt-filter-modal" class="gantt-modal ${keepFilterOpen ? 'visible' : ''}">
                <div class="gantt-modal-content">
                    <h4 class="gantt-modal-title">Filter Plan</h4>
                    <div class="filter-modal-grid">
                        <div class="filter-group">
                            <div class="filter-group-header">
                                <h5 class="filter-group-title">Workstreams</h5>
                                <div class="filter-group-actions">
                                    <button class="filter-action-btn" data-action="filter-all" data-type="workstreams" data-mode="select">All</button>
                                    <button class="filter-action-btn" data-action="filter-all" data-type="workstreams" data-mode="deselect">None</button>
                                </div>
                            </div>
                            ${FILTER_DATA.workstreams.map(item => `
                                <label class="custom-checkbox-wrapper">
                                    <input type="checkbox" data-action="filter" data-type="workstreams" data-value="${item.label}" ${state.diligenceFilters.workstreams.includes(item.label) ? 'checked' : ''}>
                                    <span class="custom-checkbox"></span>
                                    <span class="checkbox-label">${item.label}</span>
                                </label>
                            `).join('')}
                        </div>
                        <div class="filter-group">
                            <div class="filter-group-header">
                                <h5 class="filter-group-title">Status</h5>
                                <div class="filter-group-actions">
                                    <button class="filter-action-btn" data-action="filter-all" data-type="statuses" data-mode="select">All</button>
                                    <button class="filter-action-btn" data-action="filter-all" data-type="statuses" data-mode="deselect">None</button>
                                </div>
                            </div>
                            ${FILTER_DATA.statuses.map(item => `
                                <label class="custom-checkbox-wrapper">
                                    <input type="checkbox" data-action="filter" data-type="statuses" data-value="${item}" ${state.diligenceFilters.statuses.includes(item) ? 'checked' : ''}>
                                    <span class="custom-checkbox"></span>
                                    <span class="checkbox-label">${item}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="gantt-task-modal-container"></div>
    `;

    setTimeout(() => {
        const chartArea = document.querySelector('.gantt-scroll-wrapper');
        if (chartArea) {
            const totalWidth = chartArea.scrollWidth;
            const visibleWidth = chartArea.clientWidth;
            const todayPosition = (totalWidth / 17) * (CURRENT_PROJECT_DAY - 0.5);
            chartArea.scrollLeft = todayPosition - (visibleWidth / 2) + 420;
        }
    }, 0);

    initializeGanttHover();
}
function initializeGanttHover() {
    const container = document.querySelector('.gantt-grid-container');
    if (!container) return;

    container.addEventListener('mouseover', e => {
        const rowTarget = e.target.closest('[data-row-id]');
        if (rowTarget) {
            const rowId = rowTarget.dataset.rowId;
            document.querySelectorAll(`[data-row-id="${rowId}"] .gantt-row-left, [data-row-id="${rowId}"] .gantt-row-right`).forEach(el => el.classList.add('hover'));
        }
    });

    container.addEventListener('mouseout', e => {
        const rowTarget = e.target.closest('[data-row-id]');
        if (rowTarget) {
            const rowId = rowTarget.dataset.rowId;
            document.querySelectorAll(`[data-row-id="${rowId}"] .gantt-row-left, [data-row-id="${rowId}"] .gantt-row-right`).forEach(el => el.classList.remove('hover'));
        }
    });
}

function renderTaskDetailModal(taskId) {
    const task = diligencePlan_v3.find(t => t.id === taskId);
    if (!task) return '';

    const planWithDates = projectPlanUtils.calculateTaskDates(diligencePlan_v3);
    const taskWithDates = planWithDates.find(t => t.id === taskId);
    const commentary = projectPlanUtils.generateAriaCommentary(task);
    const statusDetails = projectPlanUtils.getAriaStatusDetails(task);
    const statusClass = `status-${commentary.status.toLowerCase().replace(/ /g, '-')}`;

    const renderDependencyList = (dependencyIds) => {
        if (dependencyIds.length === 0) return '<li class="none">None</li>';
        return dependencyIds.map(depId => {
            const depTask = diligencePlan_v3.find(p => p.id === depId);
            if (!depTask) return '';
            const depStatus = projectPlanUtils.generateAriaCommentary(depTask).status;
            const isCompleted = depStatus === 'Completed';
            return `<li class="dependency-item ${isCompleted ? 'completed' : ''}">${depTask.id}: ${depTask.name}</li>`;
        }).join('');
    };

    const predecessors = renderDependencyList(task.dependencies);
    const successors = renderDependencyList(diligencePlan_v3.filter(s => s.dependencies.includes(task.id)).map(s => s.id));

    return `
        <div id="gantt-task-modal-overlay" class="gantt-modal-overlay visible" data-action="close-task-modal">
            <div class="gantt-task-modal">
                <div class="gantt-modal-header">
                    <h3>${task.id}: ${task.name}</h3>
                    <button class="close-btn" data-action="close-task-modal">×</button>
                </div>
                <div class="gantt-modal-body">
                    <div class="modal-grid">
                        <div class="modal-info-item"><p>Workstream</p><p>${task.workstream}</p></div>
                        <div class="modal-info-item"><p>Status</p><p><span class="status-pill-column ${statusClass}">${commentary.status}</span></p></div>
                        <div class="modal-info-item"><p>Start Date</p><p>${taskWithDates.startDate.toLocaleDateString()}</p></div>
                        <div class="modal-info-item"><p>End Date</p><p>${taskWithDates.endDate.toLocaleDateString()}</p></div>
                    </div>
                    
                    <div>
                        <h4 class="modal-section-title">Aria's Status Assessment</h4>
                        <div class="modal-status-assessment">
                            <p>${statusDetails.text}</p>
                            ${statusDetails.actions.length > 0 ? `
                                <div class="modal-suggested-actions">
                                    ${statusDetails.actions.map(action => `<button class="modal-action-button" data-action="populate-prompt" data-prompt="${action.prompt}">${action.text}</button>`).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>

                    <div class="modal-description">
                        <h4 class="modal-section-title">Description</h4>
                        <p>${task.description || 'No description provided.'}</p>
                    </div>
                    <div class="modal-description">
                        <h4 class="modal-section-title">Expected Output</h4>
                        <p>${task.output || 'No output specified.'}</p>
                    </div>
                    <div class="modal-grid">
                        <div class="modal-dependencies">
                            <h4 class="modal-section-title">Predecessors (Dependencies)</h4>
                            <ul>${predecessors}</ul>
                        </div>
                        <div class="modal-dependencies">
                            <h4 class="modal-section-title">Successors</h4>
                            <ul>${successors}</ul>
                        </div>
                    </div>
                    <button class="modal-aria-button" data-action="populate-prompt" data-prompt="Provide me with a current overview and understanding of the '${task.name}' task.">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>
                        Ask Aria about this task
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderWorkstreamTab(workstreamName) { /* ... Unchanged ... */ }
function renderGuidedGenerativePortcoPage(companyId) { /* ... Unchanged ... */ }
function getCompanySpecificData(companyId) { /* ... Unchanged ... */ }
function renderCloudVantageDashboard_DataView() { /* ... Unchanged ... */ }
function renderGenericDashboard_DataView(companyId) { /* ... Unchanged ... */ }

function getPromptBoxHTML(questions = []) {
    const prompts = Array.isArray(questions) ? questions : [];
    const promptsHTML = prompts.map(q => `<button class="suggestion-pill" data-action="populate-prompt" data-prompt="${q}">${q}</button>`).join('');
    return `
        <div class="prompt-area-large-v4">
            <div class="suggestion-pills-container">
                ${promptsHTML}
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

function renderRecommendedActions(actions) { /* ... Unchanged ... */ }

function runPortcoPrompt(promptText, companyId) {
    const allContentContainer = document.querySelector('.diligence-hub-container, .portfolio-container');
    const conversationContainer = document.getElementById('portco-conversation-container');
    if (!conversationContainer || !allContentContainer) return;

    conversationContainer.innerHTML = '';
    allContentContainer.insertAdjacentHTML('beforeend', `<div class="user-prompt-bubble"><p>${promptText}</p></div>`);

    const thinkingHTML = `<div class="portfolio-response-card"><p>ARIA is thinking...</p></div>`;
    allContentContainer.insertAdjacentHTML('beforeend', thinkingHTML);
    allContentContainer.lastChild.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
        allContentContainer.removeChild(allContentContainer.lastChild); 
        
        const response = portcoResponses[promptText];
        let responseContent = '';
        let followUpQuestions = [];

        if (response && typeof response.renderFunc === 'function') {
            responseContent = response.renderFunc();
            followUpQuestions = response.followUpQuestions || [];
        } else {
            responseContent = `<div class="portfolio-response-card"><p>This is a simulated response for "${promptText}". In a real scenario, ARIA would provide a detailed, data-driven answer.</p></div>`;
        }
        
        if (responseContent) {
            allContentContainer.insertAdjacentHTML('beforeend', responseContent);
        }
        
        conversationContainer.innerHTML = getPromptBoxHTML(followUpQuestions);
        
        const lastBubble = allContentContainer.querySelector('.user-prompt-bubble:last-of-type, .portfolio-response-card:last-of-type');
        if(lastBubble) lastBubble.scrollIntoView({ behavior: 'smooth' });

    }, 1500);
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
        let state = loadState();

        switch(action) {
            case 'filter-all': {
                const { type, mode } = target.dataset;
                if (mode === 'select') {
                    if (type === 'workstreams') {
                        state.diligenceFilters.workstreams = FILTER_DATA.workstreams.map(w => w.label);
                    } else {
                        state.diligenceFilters.statuses = [...FILTER_DATA.statuses];
                    }
                } else {
                    state.diligenceFilters[type] = [];
                }
                saveState(state);
                renderPlanTab(true);
                break;
            }

            case 'populate-prompt': {
                const promptText = target.dataset.prompt;
                const promptInput = document.getElementById('portco-prompt-input');
                const modal = document.getElementById('gantt-task-modal-overlay');
                
                if (modal) modal.remove();
                
                if (promptInput) {
                    promptInput.value = promptText;
                    promptInput.focus();
                    promptInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                break;
            }
            
            case 'ask-portco-aria': {
                const input = document.getElementById('portco-prompt-input');
                if (input && input.value.trim()) {
                    runPortcoPrompt(input.value.trim(), companyId);
                    input.value = '';
                }
                break;
            }

            case 'switch-diligence-tab':
                mainContent.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
                target.classList.add('active');
                renderDiligenceTabContent(target.dataset.tabName, companyId);
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
            
            case 'toggle-rows': {
                const targetClass = target.dataset.targetClass;
                if (!targetClass) return;

                const headerRow = target.closest('.gantt-row');
                const icon = headerRow.querySelector('.chevron-icon');
                const isCollapsing = icon.classList.contains('rotate-180');
                
                icon.classList.toggle('rotate-180', !isCollapsing);

                if (targetClass.startsWith('phase-')) {
                    document.querySelectorAll(`.${targetClass}[data-row-type="category"]`).forEach(row => {
                        row.classList.toggle('collapsed', isCollapsing);
                    });
                }

                document.querySelectorAll(`.${targetClass}:not([data-row-type="category"])`).forEach(row => {
                    row.classList.toggle('collapsed', isCollapsing);
                });

                if (!isCollapsing && targetClass.startsWith('phase-')) {
                    document.querySelectorAll(`.${targetClass}[data-row-type="category"]`).forEach(catRow => {
                        const catIcon = catRow.querySelector('.chevron-icon');
                        if (catIcon && !catIcon.classList.contains('rotate-180')) {
                            const categoryId = catRow.dataset.rowId;
                            document.querySelectorAll(`.${categoryId}`).forEach(taskRow => {
                                taskRow.classList.add('collapsed');
                            });
                        }
                    });
                }
                break;
            }
            case 'expand-collapse-all': {
                const allIcons = document.querySelectorAll('.chevron-icon');
                const shouldExpand = allIcons.length > 0 && !allIcons[0].classList.contains('rotate-180');
                allIcons.forEach(icon => icon.classList.toggle('rotate-180', shouldExpand));
                const allChildRows = document.querySelectorAll('.gantt-row[class*="phase-"], .gantt-row[class*="cat-"]');
                allChildRows.forEach(row => {
                    row.classList.toggle('collapsed', !shouldExpand);
                });
                break;
            }

            case 'toggle-filter-modal':
                document.getElementById('gantt-filter-modal').classList.toggle('visible');
                break;
            
            case 'show-task-details':
                const taskId = target.closest('[data-task-id]').dataset.taskId;
                document.getElementById('gantt-task-modal-container').innerHTML = renderTaskDetailModal(taskId);
                break;

            case 'close-task-modal':
                const overlay = document.getElementById('gantt-task-modal-overlay');
                if (overlay && e.target.closest('.close-btn, .gantt-modal-overlay')) {
                    overlay.remove();
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

    mainContent.addEventListener('change', e => {
        const target = e.target.closest('input[data-action="filter"]');
        if (target) {
            let state = loadState();
            const { type, value } = target.dataset;
            const filterArray = state.diligenceFilters[type];
            const index = filterArray.indexOf(value);

            if (target.checked) {
                if (index === -1) filterArray.push(value);
            } else {
                if (index > -1) filterArray.splice(index, 1);
            }
            saveState(state);
            renderPlanTab(true);
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.gantt-modal, [data-action="toggle-filter-modal"]')) {
            document.querySelectorAll('.gantt-modal').forEach(modal => modal.classList.remove('visible'));
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
        sales: { metrics: [ { label: 'Quota Attainment', value: '103%', color: 'var(--status-success)' }, { label: 'Pipeline Coverage', value: '3.5x', color: 'var(--text-primary)' }, { label: 'Avg. Deal Size', value: '$85k', color: 'var(--text-primary)' }, { label: 'Budget Adherence', value: '+3.1%', color: 'var(--status-error)' } ], content: `<p><strong>Highlights:</strong> Exceeded quota, driven by strong performance in the new Enterprise segment. Landed two Fortune 500 logos.</p><p><strong>Lowlights:</strong> Mid-market team struggled, hitting only 85% of their number. Budget overage due to higher commission payouts on large deals.</p><p><strong>Next Period Focus:</strong> Double down on Enterprise playbook, provide additional training for mid-market reps.</p><p><strong>Help Wanted:</strong> Need marketing to accelerate SQL delivery for the mid-market segment.</p>`, context: 'sales-renewals' },
        marketing: { metrics: [ { label: 'MQLs vs Target', value: '115%', color: 'var(--status-success)' }, { label: 'SQLs vs Target', value: '92%', color: 'var(--status-warning)' }, { label: 'CAC', value: '$12.5k', color: 'var(--text-primary)' }, { label: 'Budget Adherence', value: '-1.5%', color: 'var(--status-success)' } ], content: `<p><strong>Highlights:</strong> ABM campaign for Enterprise was a huge success, generating high-quality leads. Managed budget effectively.</p><p><strong>Lowlights:</strong> MQL-to-SQL conversion rate dropped, indicating some lead quality issues in our top-of-funnel content.</p><p><strong>Next Period Focus:</strong> Optimize lead scoring model, launch targeted mid-market campaigns.</p><p><strong>Help Wanted:</strong> Sales feedback on lead quality is critical to our optimization efforts.</p>`, context: 'marketing' },
        product: { metrics: [ { label: 'Roadmap Adherence', value: '70%', color: 'var(--status-error)' }, { label: 'Feature Adoption', value: '45%', color: 'var(--text-primary)' }, { label: 'NPS', value: '52', color: 'var(--status-success)' }, { label: 'Budget Adherence', value: '+5.2%', color: 'var(--status-error)' } ], content: `<p><strong>Highlights:</strong> Successfully launched two major platform enhancements which have received positive customer feedback and contributed to a high NPS score.</p><p><strong>Lowlights:</strong> The flagship AI-Powered Feature is significantly delayed due to unforeseen technical complexity. This has caused budget overruns.</p><p><strong>Next Period Focus:</strong> Finalize a revised, de-risked timeline for the AI feature. Conduct customer interviews to validate the next set of roadmap priorities.</p><p><strong>Help Wanted:</strong> Need engineering to provide a firm estimate on the remaining work for the AI feature to reset expectations.</p>`, context: 'product' },
        engineering: { metrics: [ { label: 'Sprint Completion', value: '88%', color: 'var(--status-warning)' }, { label: 'Cycle Time', value: '4.2d', color: 'var(--text-primary)' }, { label: 'Uptime', value: '99.98%', color: 'var(--status-success)' }, { label: 'Budget Adherence', value: '+2.8%', color: 'var(--status-warning)' } ], content: `<p><strong>Highlights:</strong> Maintained excellent platform stability and uptime. Successfully completed critical scalability work ahead of schedule.</p><p><strong>Lowlights:</strong> Team velocity was impacted by the complexity of the AI feature, leading to lower sprint completion rates. Some technical debt was incurred to meet deadlines.</p><p><strong>Next Period Focus:</strong> Dedicate one sprint to tech debt reduction. Finalize architecture for the AI feature.</p><p><strong>Help Wanted:</strong> Clearer, finalized requirements from Product for the AI feature to prevent further scope creep.</p>`, context: 'engineering' },
        hr: { metrics: [ { label: 'Employee Attrition', value: '8%', color: 'var(--status-success)' }, { label: 'Time to Hire', value: '42d', color: 'var(--text-primary)' }, { label: 'eNPS', value: '65', color: 'var(--status-success)' }, { label: 'Budget Adherence', value: '-2.1%', color: 'var(--status-success)' } ], content: `<p><strong>Highlights:</strong> Employee satisfaction (eNPS) is at an all-time high. Attrition remains well below industry average. The leadership development program is receiving excellent feedback.</p><p><strong>Lowlights:</strong> Time to hire for senior engineering roles remains a challenge.</p><p><strong>Next Period Focus:</strong> Launch a new employee referral program to improve the engineering talent pipeline. Complete the annual compensation review.</p><p><strong>Help Wanted:</strong> Engineering managers' participation in final-round interviews to speed up the hiring process.</p>`, context: 'hr' }
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