// js/portco.js - Logic for the individual PortCo dashboards

// --- DYNAMIC DATE CALCULATION ---
const PROJECT_DAY_FOR_TODAY = 7;

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

// --- UTILS ---
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

// --- MAIN SCRIPT ---
document.addEventListener('DOMContentLoaded', async () => {
    await loadSharedComponents();

    // CHECK: Only run if we are on the PortCo page
    if (Navigation.getCurrentPage() === 'portco') {
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
        if (!document.getElementById('file-attachment-input')) {
            document.body.insertAdjacentHTML('beforeend', `<input type="file" id="file-attachment-input" style="display: none;" multiple />`);
        }

        // NEW LOGIC TO HANDLE INCOMING ACTIONS FROM URL
        const taskToOpen = urlParams.get('openTask');
        const phaseToExpand = urlParams.get('expandPhase');

        if (phaseToExpand) {
            setTimeout(() => {
                const phaseHeader = document.querySelector(`.gantt-row[data-row-id="${phaseToExpand}"]`);
                if (phaseHeader) {
                    const toggleElement = phaseHeader.querySelector('[data-action="toggle-rows"]');
                    if (toggleElement) {
                        const icon = toggleElement.querySelector('.chevron-icon');
                        if (icon && !icon.classList.contains('rotate-180')) {
                            toggleElement.click();
                        }
                    }
                }
            }, 100); 
        }

        if (taskToOpen) {
            setTimeout(() => {
                renderTaskDetailModal(taskToOpen);
            }, 200);
        }
    }
});

// --- GANTT RENDERING ---
function generateGanttHTML(planData, state, statusOverrides = {}) {
    const planWithDates = projectPlanUtils.calculateTaskDates(planData);
    const phaseDefinitions = [{ name: "Phase 1: Foundation", dayRange: [1, 2] }, { name: "Phase 2: Deep Dive", dayRange: [3, 5] }, { name: "Phase 3: Analysis", dayRange: [6, 11] }, { name: "Phase 4: Synthesis & Finalization", dayRange: [12, 17] }];
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
                const commentary = projectPlanUtils.generateAriaCommentary(task, statusOverrides);
                return state.diligenceFilters.workstreams.includes(task.workstream) && state.diligenceFilters.statuses.includes(commentary.status);
            });
        });
        phase.categories = Object.values(phase.categories).filter(cat => cat.tasks.length > 0);
    });
    const timelineDates = Array.from({ length: 17 }, (_, i) => projectPlanUtils.mapBusinessDayToDate(i + 1, PROJECT_START_DATE));
    const today = projectPlanUtils.mapBusinessDayToDate(CURRENT_PROJECT_DAY, PROJECT_START_DATE);
    let leftPaneHTML = '';
    let rightPaneHTML = '';
    const workstreamColors = { "Business & Strategy": "var(--accent-blue)", "Commercial & Customer": "var(--accent-teal)", "Technology & Operations": "var(--purple)", "Financial & Risk": "var(--status-warning)", "Synthesis": "var(--text-secondary)", "Value Creation": "var(--text-secondary)", "Investment Committee": "var(--text-secondary)", "Final Deliverables": "var(--text-secondary)" };
    
    Object.values(displayHierarchy).filter(phase => phase.categories.length > 0).forEach(phase => {
        const originalPhase = hierarchy[phase.name];
        const phaseId = `phase-${phase.name.replace(/[^a-zA-Z0-9-]/g, '').replace(/ /g, '-')}`;
        leftPaneHTML += `<div class="gantt-row" data-row-id="${phaseId}"><div class="gantt-row-left gantt-phase-header-left" data-action="toggle-rows" data-target-class="${phaseId}"><div class="gantt-phase-details"><svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg><span>${phase.name}</span></div></div></div>`;
        rightPaneHTML += `<div class="gantt-row" data-row-id="${phaseId}"><div class="gantt-row-right gantt-phase-header-right" data-action="toggle-rows" data-target-class="${phaseId}"><div class="gantt-timeline-grid"><div class="gantt-summary-bar phase-bar" style="grid-column: ${originalPhase.summaryStartDay} / span ${originalPhase.summaryDuration};"></div></div></div></div>`;
        phase.categories.forEach(cat => {
            const originalCategory = originalPhase.categories[cat.name];
            const categoryId = `cat-${cat.name.replace(/[^a-zA-Z0-9-]/g, '').replace(/ /g, '-')}`;
            leftPaneHTML += `<div class="gantt-row ${phaseId} collapsed" data-row-id="${categoryId}" data-row-type="category"><div class="gantt-row-left gantt-category-header-left" data-action="toggle-rows" data-target-class="${categoryId}"><div class="gantt-category-details"><svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg><span>${cat.name}</span></div></div></div>`;
            rightPaneHTML += `<div class="gantt-row ${phaseId} collapsed" data-row-id="${categoryId}" data-row-type="category"><div class="gantt-row-right gantt-category-header-right" data-action="toggle-rows" data-target-class="${categoryId}"><div class="gantt-timeline-grid"><div class="gantt-summary-bar category-bar" style="grid-column: ${originalCategory.summaryStartDay} / span ${originalCategory.summaryDuration};"></div></div></div></div>`;
            cat.tasks.forEach(task => {
                const commentary = projectPlanUtils.generateAriaCommentary(task, statusOverrides);
                const workstreamClass = `ws-${task.workstream.split(' ')[0].toLowerCase().replace('&', '')}`;
                const statusClass = `status-${commentary.status.toLowerCase().replace(/ /g, '-')}`;
                const taskEndDay = task.startDay + Math.ceil(task.duration) - 1;
                const extensionStart = taskEndDay + 1;
                const extensionEnd = CURRENT_PROJECT_DAY + 1;
                const workstreamColor = workstreamColors[task.workstream] || 'var(--status-error)';
                leftPaneHTML += `<div class="gantt-row ${phaseId} ${categoryId} collapsed" data-row-id="${task.id}"><div class="gantt-row-left" data-action="show-task-details" data-task-id="${task.id}"><div class="gantt-task-details"><div class="gantt-task-id">${task.id}</div><div class="gantt-task-element">${task.name}</div><div class="gantt-task-status"><div class="status-pill-column ${statusClass}">${commentary.status}</div></div></div></div></div>`;
                rightPaneHTML += `<div class="gantt-row ${phaseId} ${categoryId} collapsed" data-row-id="${task.id}"><div class="gantt-row-right" data-action="show-task-details" data-task-id="${task.id}"><div class="gantt-timeline-grid"><div class="gantt-bar ${workstreamClass}" style="grid-column: ${task.startDay} / span ${Math.max(1, Math.ceil(task.duration))};"></div>${commentary.status === 'Late' && extensionStart < extensionEnd ? `<div class="gantt-bar-extension" style="grid-column: ${extensionStart} / ${extensionEnd}; background-color: ${workstreamColor}33;"></div>` : ''}</div></div></div>`;
            });
        });
    });
    const todayBandLeft = (CURRENT_PROJECT_DAY - 1) * 42;
    return `
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
        </div>
    `;
}

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
            <div id="portco-conversation-log" class="mt-6 space-y-4"></div>
            <div id="portco-prompt-container" class="mt-6"></div>
        </div>
    `;
    renderDiligenceTabContent('Plan', companyId);
}

function renderDiligenceTabContent(tabName, companyId) {
    const contentArea = document.getElementById('diligence-content-area');
    const promptContainer = document.getElementById('portco-prompt-container');
    const conversationLog = document.getElementById('portco-conversation-log');
    if (!contentArea || !promptContainer) return;
    conversationLog.innerHTML = '';
    if (tabName === 'Plan') {
        renderPlanTab();
        promptContainer.innerHTML = getPromptBoxHTML([
            "What is the impact of the 1-day delay on the critical path?",
            "Can we start the analysis 2 days earlier?",
            "Which resources are overallocated next week?"
        ]);
    } else {
        contentArea.innerHTML = renderWorkstreamTab(tabName);
        promptContainer.innerHTML = getPromptBoxHTML([`Summarize the key risks for ${tabName}.`, "Draft an IC memo slide for this section.", `Who are the key contacts for ${tabName}?`]);
    }
}

function renderPlanTab(keepFilterOpen = false) {
    const state = loadState();
    const contentArea = document.getElementById('diligence-content-area');
    const ganttHTML = generateGanttHTML(diligencePlan_v3, state);
    
    contentArea.innerHTML = `
        ${ganttHTML}
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
                        ${FILTER_DATA.workstreams.map(item => `<label class="custom-checkbox-wrapper"><input type="checkbox" data-action="filter" data-type="workstreams" data-value="${item.label}" ${state.diligenceFilters.workstreams.includes(item.label) ? 'checked' : ''}><span class="custom-checkbox"></span><span class="checkbox-label">${item.label}</span></label>`).join('')}
                    </div>
                    <div class="filter-group">
                        <div class="filter-group-header">
                            <h5 class="filter-group-title">Status</h5>
                            <div class="filter-group-actions">
                                <button class="filter-action-btn" data-action="filter-all" data-type="statuses" data-mode="select">All</button>
                                <button class="filter-action-btn" data-action="filter-all" data-type="statuses" data-mode="deselect">None</button>
                            </div>
                        </div>
                        ${FILTER_DATA.statuses.map(item => `<label class="custom-checkbox-wrapper"><input type="checkbox" data-action="filter" data-type="statuses" data-value="${item}" ${state.diligenceFilters.statuses.includes(item) ? 'checked' : ''}><span class="custom-checkbox"></span><span class="checkbox-label">${item}</span></label>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    setTimeout(() => {
        const chartArea = document.querySelector('#diligence-content-area .gantt-scroll-wrapper');
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
    document.querySelectorAll('.gantt-grid-container').forEach(container => {
        container.addEventListener('mouseover', e => {
            const rowTarget = e.target.closest('[data-row-id]');
            if (rowTarget) {
                const rowId = rowTarget.dataset.rowId;
                container.querySelectorAll(`[data-row-id="${rowId}"] .gantt-row-left, [data-row-id="${rowId}"] .gantt-row-right`).forEach(el => el.classList.add('hover'));
            }
        });
        container.addEventListener('mouseout', e => {
            const rowTarget = e.target.closest('[data-row-id]');
            if (rowTarget) {
                const rowId = rowTarget.dataset.rowId;
                container.querySelectorAll(`[data-row-id="${rowId}"] .gantt-row-left, [data-row-id="${rowId}"] .gantt-row-right`).forEach(el => el.classList.remove('hover'));
            }
        });
    });
}


function renderTaskDetailModal(taskId) {
    const task = diligencePlan_v3.find(t => t.id === taskId);
    if (!task) return;
    const container = document.getElementById('gantt-task-modal-container');
    if (!container) return;
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
    container.innerHTML = `
        <div id="gantt-task-modal-overlay" class="gantt-modal-overlay visible" data-action="close-task-modal">
            <div class="gantt-task-modal">
                <div class="gantt-modal-header"><h3>${task.id}: ${task.name}</h3><button class="close-btn" data-action="close-task-modal">×</button></div>
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
                            ${statusDetails.actions.length > 0 ? `<div class="modal-suggested-actions">${statusDetails.actions.map(action => `<button class="modal-action-button" data-action="run-prompt" data-prompt="${action.prompt}">${action.text}</button>`).join('')}</div>` : ''}
                        </div>
                    </div>
                    <div class="modal-description"><h4 class="modal-section-title">Description</h4><p>${task.description || 'No description provided.'}</p></div>
                    <div class="modal-description"><h4 class="modal-section-title">Expected Output</h4><p>${task.output || 'No output specified.'}</p></div>
                    <div class="modal-grid">
                        <div class="modal-dependencies"><h4 class="modal-section-title">Predecessors (Dependencies)</h4><ul>${predecessors}</ul></div>
                        <div class="modal-dependencies"><h4 class="modal-section-title">Successors</h4><ul>${successors}</ul></div>
                    </div>
                    <button class="modal-aria-button" data-action="run-prompt" data-prompt="Provide me with a current overview and understanding of the '${task.name}' task.">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>
                        Ask Aria about this task
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderWorkstreamTab(workstreamName) {
    const allFindings = [...techflow_anomalies, ...otherObservations_v2];
    const relevantFindings = allFindings.filter(f => f.workstream === workstreamName);
    const openQuestions = diligencePlan_v3.filter(item => item.workstream === workstreamName && item.startDay > 7);
    return `
        <div class="workstream-synthesis">
            <h3 class="synthesis-title">Aria's Synthesis for ${workstreamName}</h3>
            <p class="synthesis-text">Analysis of the <strong>${workstreamName}</strong> workstream has surfaced ${relevantFindings.length} key findings that require attention. The primary areas of concern are [Example: non-standard revenue recognition and high customer concentration]. There are currently ${openQuestions.length} open items from the diligence plan for this area.</p>
        </div>
        <div class="finding-cards-grid">
            ${relevantFindings.length > 0 ? relevantFindings.map(finding => `<div class="finding-card"><div class="finding-card-header"><span class="font-semibold">${finding.title || finding.text}</span>${finding.severity ? `<span class="ws-item-badge severity-${finding.severity.toLowerCase()}">${finding.severity}</span>` : ''}</div><p class="finding-card-body">${finding.impact || finding.description || ''}</p><div class="finding-card-actions"><button class="card-action-button" data-action="run-prompt" data-prompt="Model the financial impact of '${finding.title || finding.text}'">Model Impact</button><button class="card-action-button" data-action="run-prompt" data-prompt="Draft an email to the CFO about '${finding.title || finding.text}'">Draft Email</button><button class="card-action-button" data-action="run-prompt" data-prompt="Add '${finding.title || finding.text}' to the IC memo">Add to Memo</button></div></div>`).join('') : '<p class="text-secondary">No specific findings flagged for this workstream yet.</p>'}
        </div>
        <div class="open-questions-box">
             <h3 class="synthesis-title">Aria's Open Questions</h3>
             <ul class="open-questions-list">
                ${openQuestions.length > 0 ? openQuestions.map(item => `<li><span class="font-semibold">${item.id}: ${item.name}</span></li>`).join('') : '<li class="text-secondary">All diligence questions for this workstream have been initiated.</li>'}
             </ul>
        </div>
    `;
}

function renderGuidedGenerativePortcoPage(companyId) {
    const mainContent = document.getElementById('main-content');
    const state = loadState();
    const { activePersona } = state;

    // Persona-based routing for CloudVantage
    if (companyId === 'cloudvantage') {
        if (activePersona === 'evelyn') {
            mainContent.innerHTML = renderCeoDashboard();
            return;
        }
        if (activePersona === 'connor') {
            mainContent.innerHTML = renderCroRenewalHub();
            return;
        }
    }

    // Default view for Adrian or other companies
    const companyData = getCompanySpecificData(companyId);
    mainContent.innerHTML = `
        <div class="portfolio-container">
            <div class="ai-briefing-card">
                <h1 class="briefing-title">${companyData.briefing.title}</h1>
                <p class="briefing-text">${companyData.briefing.text}</p>
            </div>
            ${renderRecommendedActions(companyData.actions)}
            <div id="portco-conversation-log" class="mt-6 space-y-4"></div>
            <div id="portco-prompt-container">
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

function getCompanySpecificData(companyId) {
    const dataConfig = portcoPageData[companyId];
    const genericData = {
        briefing: { title: `Dashboard for ${companyId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`, text: "A detailed, AI-native dashboard is being configured for this company. The data below represents the current structured view." },
        actions: [],
        prompts: ["What are the top 3 risks for this company?", "Summarize the latest board meeting."],
    };

    if (dataConfig) {
        return {
            ...dataConfig,
            dataViewHTML: companyId === 'cloudvantage' ? renderCloudVantageDashboard_DataView() : renderGenericDashboard_DataView(companyId)
        };
    }
    
    return {
        ...genericData,
        dataViewHTML: renderGenericDashboard_DataView(companyId)
    };
}

function renderCloudVantageDashboard_DataView() {
    const kpis = cloudVantageKpis;
    const programs = cloudVantagePrograms;
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

// MODIFIED: This function now intelligently handles both pre-canned and dynamic task overview prompts and applies the typing effect.
async function runPortcoPrompt(promptText, companyId) {
    const conversationLog = document.getElementById('portco-conversation-log');
    const promptContainer = document.getElementById('portco-prompt-container');
    if (!conversationLog || !promptContainer) return;

    conversationLog.insertAdjacentHTML('beforeend', `<div class="user-prompt-bubble"><p>${promptText}</p></div>`);
    
    const promptBox = promptContainer.querySelector('.prompt-area-large-v4');
    if (promptBox) {
        const suggestions = promptBox.querySelector('.suggestion-pills-container');
        if (suggestions) suggestions.style.display = 'none';
    }

    const thinkingId = `thinking-${Date.now()}`;
    conversationLog.insertAdjacentHTML('beforeend', `<div id="${thinkingId}" class="portfolio-response-card"><p>ARIA is thinking...</p></div>`);
    document.getElementById(thinkingId).scrollIntoView({ behavior: 'smooth' });

    await new Promise(resolve => setTimeout(resolve, 1500));

    document.getElementById(thinkingId)?.remove();

    let response = portcoResponses[promptText];
    let followUpQuestions = [];

    // --- NEW DYNAMIC LOGIC ---
    const taskOverviewPattern = /Provide me with a current overview and understanding of the '(.*)' task\./;
    const taskDependencyPattern = /What are the dependencies for the '(.*)' task\?/;
    const taskAssignmentPattern = /Who is assigned to the '(.*)' task\?/;

    let match = promptText.match(taskOverviewPattern);
    if (match && match[1]) {
        const taskName = match[1];
        const task = diligencePlan_v3.find(t => t.name === taskName);
        if (task) {
            response = {
                renderFunc: () => {
                    const statusDetails = projectPlanUtils.getAriaStatusDetails(task);
                    const teamDetails = task.id === 'DD-13' 
                        ? `<p class="response-text" data-typing-text="This specialized task is led by **Peter Wood (Sr. Director, Digital Value Creation)** and our partner, **AWS**. They have initiated the review of the provided architecture diagrams but are **blocked** pending the full documentation of the development process from task DD-12."></p>`
                        : `<p class="response-text" data-typing-text="The task is assigned to the core deal team, with support from relevant functional experts."></p>`;

                    return `<div class="portfolio-response-card">
                                <h4 class="response-title">Deep Dive: ${task.id} ${task.name}</h4>
                                <p class="response-text" data-typing-text="This task is a critical component of the **${task.workstream}** workstream. Its primary objective is to ${task.description.toLowerCase()}"></p>
                                <div class="mt-4">
                                    <h5 class="font-semibold text-sm mb-2">Team & Status:</h5>
                                    ${teamDetails}
                                </div>
                                <div class="mt-4">
                                    <h5 class="font-semibold text-sm mb-2">Critical Questions to Answer:</h5>
                                    <p class="response-text" data-typing-text="${task.questionsAnswered}"></p>
                                </div>
                                <div class="judgement-box success mt-4">
                                    <p class="judgement-title">Judgement (High Confidence - 92%):</p>
                                    <p class="judgement-text" data-typing-text="Based on the inputs, my assessment is that ${statusDetails.text}"></p>
                                </div>
                            </div>`;
                },
                followUpQuestions: [`What are the dependencies for the '${task.name}' task?`, `Who is assigned to the '${task.name}' task?`]
            };
        }
    }
    
    match = promptText.match(taskDependencyPattern);
    if (match && match[1]) {
        const taskName = match[1];
        const task = diligencePlan_v3.find(t => t.name === taskName);
        if (task) {
            response = portcoResponses[`What are the dependencies for the '${task.name}' task?`] || portcoResponses["What are the dependencies for the 'Audited Financials' task?"]; // Fallback for demo
        }
    }

    match = promptText.match(taskAssignmentPattern);
    if (match && match[1]) {
        const taskName = match[1];
        const task = diligencePlan_v3.find(t => t.name === taskName);
        if (task) {
             response = portcoResponses[`Who is assigned to the '${task.name}' task?`] || portcoResponses["Who is assigned to the 'Audited Financials' task?"]; // Fallback for demo
        }
    }
    // --- END DYNAMIC LOGIC ---

    let responseHTML = '';

    if (response && typeof response.renderFunc === 'function') {
        responseHTML = response.renderFunc();
        followUpQuestions = response.followUpQuestions || [];
    } else {
        responseHTML = `<div class="portfolio-response-card"><p>Aria is not trained to provide a response for that specific query yet.</p></div>`;
    }
    
    conversationLog.insertAdjacentHTML('beforeend', responseHTML);
    const newResponseElement = conversationLog.lastElementChild;
    
    const typingElements = newResponseElement.querySelectorAll('[data-typing-text]');
    for (const el of typingElements) {
        await new Promise(resolve => typeWords(el, el.dataset.typingText, resolve));
    }
    
    promptContainer.innerHTML = getPromptBoxHTML(followUpQuestions);
    
    initializeGanttHover();
    
    if(newResponseElement) newResponseElement.scrollIntoView({ behavior: 'smooth' });
}

function initializePortcoEventListeners() {
    document.addEventListener('click', e => {
        const target = e.target.closest('[data-action]');
        if (!target) {
            if (!e.target.closest('.gantt-modal, .settings-modal')) {
                document.querySelectorAll('.gantt-modal, .settings-modal').forEach(modal => modal.classList.remove('visible'));
            }
            return;
        }
        const action = target.dataset.action;
        let state = loadState();
        const companyId = state.selectedCompanyId;
        switch(action) {
            case 'run-prompt': {
                const promptText = target.dataset.prompt;
                if (promptText) {
                    const modal = document.getElementById('gantt-task-modal-overlay');
                    if (modal) modal.remove();
                    runPortcoPrompt(promptText, companyId);
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
            case 'restart-conversation': {
                const currentTab = document.querySelector('.diligence-pills .pill.active')?.dataset.tabName || 'Plan';
                renderDiligenceTabContent(currentTab, companyId);
                break;
            }
            case 'attach-file':
                document.getElementById('file-attachment-input').click();
                break;
            case 'toggle-settings-modal':
                state.ariaSettings.isModalOpen = !state.ariaSettings.isModalOpen;
                saveState(state);
                reRenderPromptBox();
                break;
            case 'toggle-category':
                const categoryKey = target.dataset.category;
                if (!state.ariaSettings.expandedCategories) state.ariaSettings.expandedCategories = {};
                state.ariaSettings.expandedCategories[categoryKey] = !state.ariaSettings.expandedCategories[categoryKey];
                saveState(state);
                reRenderPromptBox();
                break;
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
            case 'switch-diligence-tab':
                document.querySelectorAll('.diligence-pills .pill').forEach(p => p.classList.remove('active'));
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
                
                const parentGantt = headerRow.closest('.gantt-grid-container');

                if (targetClass.startsWith('phase-')) {
                    parentGantt.querySelectorAll(`.${targetClass}[data-row-type="category"]`).forEach(row => {
                        row.classList.toggle('collapsed', isCollapsing);
                        // Also ensure its children are collapsed if the category itself is
                        const catIcon = row.querySelector('.chevron-icon');
                        if (isCollapsing || (catIcon && !catIcon.classList.contains('rotate-180'))) {
                            const categoryId = row.dataset.rowId;
                            parentGantt.querySelectorAll(`.${categoryId}`).forEach(taskRow => taskRow.classList.add('collapsed'));
                        }
                    });
                }
                parentGantt.querySelectorAll(`.${targetClass}:not([data-row-type="category"])`).forEach(row => {
                    row.classList.toggle('collapsed', isCollapsing);
                });
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
                renderTaskDetailModal(taskId);
                break;
            case 'close-task-modal':
                const overlay = document.getElementById('gantt-task-modal-overlay');
                if (overlay && (target.id === 'gantt-task-modal-overlay' || target.closest('.close-btn'))) {
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
    document.addEventListener('change', e => {
        const target = e.target.closest('input[data-action="filter"], input[data-action="update-setting"]');
        if (!target) return;
        let state = loadState();
        const { type, value, parent, key } = target.dataset;
        if (type === 'workstreams' || type === 'statuses') {
            const filterArray = state.diligenceFilters[type];
            const index = filterArray.indexOf(value);
            if (target.checked) {
                if (index === -1) filterArray.push(value);
            } else {
                if (index > -1) filterArray.splice(index, 1);
            }
            saveState(state);
            renderPlanTab(true);
        } else if (parent && key) {
            if (!state.ariaSettings[parent]) state.ariaSettings[parent] = {};
            state.ariaSettings[parent][key] = target.checked;
            saveState(state);
            reRenderPromptBox();
        }
    });
    document.addEventListener('change', handleFileAttachment);
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
        deptContentContainer.innerHTML = `<div class="dept-kpi-grid">${deptData.metrics.map(metric => `<div class="dept-kpi-item"><p class="dept-kpi-label">${metric.label}</p><p class="dept-kpi-value" style="color: ${metric.color};">${metric.value}</p></div>`).join('')}</div><div class="dept-content">${deptData.content}</div><div class="dept-actions"><button data-action="navigate-aria" data-context="${deptData.context}" class="primary-button">Dive Deeper with Aria</button></div>`;
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

function renderSettingsModal(settings) {
    const { isModalOpen, expandedCategories = {} } = settings;
    const settingsStructure = {
        context: { label: 'Context', main: settings.context?.main ?? true, items: { ddDataRoom: 'DD Data Room', investmentThesis: 'Investment Thesis', financialModel: 'Financial Model', meetingTranscripts: 'Meeting Transcripts' } },
        domainKnowledge: { label: 'Domain Knowledge', main: settings.domainKnowledge?.main ?? true, items: { playbooks: 'Playbooks', kpiLibrary: 'KPI Library', maturityModel: 'Maturity Model', industryBenchmarks: 'Industry Benchmarks' } },
        externalData: { label: 'External Data', main: settings.externalData?.main ?? true, items: { linkedin: 'LinkedIn', pitchbook: 'PitchBook', glassdoor: 'Glassdoor', web: 'Web Research' } },
        internalData: { label: 'Internal Data', main: settings.internalData?.main ?? true, items: { erp: 'ERP Systems', crm: 'CRM Data', hcm: 'HCM Systems', devops: 'DevOps Metrics' } }
    };
    const renderCategory = (categoryKey, category) => {
        const isExpanded = expandedCategories[categoryKey] || false;
        const subItemsHTML = Object.entries(category.items).map(([itemKey, itemLabel]) => `<div class="flex items-center justify-between pl-6 py-1"><label for="setting-${categoryKey}-${itemKey}" class="text-xs text-secondary">${itemLabel}</label><label class="toggle-switch toggle-switch-sm"><input type="checkbox" id="setting-${categoryKey}-${itemKey}" data-action="update-setting" data-parent="${categoryKey}" data-key="${itemKey}" ${settings[categoryKey]?.[itemKey] ? 'checked' : ''}><span class="slider round"></span></label></div>`).join('');
        return `<div class="border-b border-border-color last:border-b-0"><div class="flex items-center justify-between py-2 cursor-pointer" data-action="toggle-category" data-category="${categoryKey}"><div class="flex items-center gap-2"><svg class="w-4 h-4 text-text-muted transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg><span class="text-sm font-bold text-text-primary">${category.label}</span></div><label class="toggle-switch" onclick="event.stopPropagation();"><input type="checkbox" data-action="update-setting" data-parent="${categoryKey}" data-key="main" ${category.main ? 'checked' : ''}><span class="slider round"></span></label></div><div class="category-content ${isExpanded ? 'expanded' : ''}">${subItemsHTML}</div></div>`;
    };
    return `<div id="settings-modal" class="settings-modal ${isModalOpen ? 'visible' : ''}" style="bottom: 125%; left: 0;"><div class="p-3 space-y-1 text-sm"><div class="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 pb-1 border-b border-border-color">Data Sources</div>${Object.entries(settingsStructure).map(([key, category]) => renderCategory(key, category)).join('')}</div></div>`;
}

function handleFileAttachment(e) {
    if (e.target.id !== 'file-attachment-input') return;
    const displayContainer = document.getElementById('file-attachment-display');
    if (!displayContainer) return;
    displayContainer.innerHTML = '';
    for (const file of e.target.files) {
        const filePillHTML = `<div class="file-pill" data-filename="${file.name}"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg><span class="file-name">${file.name}</span><button class="remove-file-btn" data-action="remove-file" title="Remove file">×</button></div>`;
        displayContainer.innerHTML += filePillHTML;
    }
}

function reRenderPromptBox() {
    const promptContainer = document.getElementById('portco-prompt-container');
    if (promptContainer) {
        const currentQuestions = Array.from(promptContainer.querySelectorAll('.suggestion-pill')).map(p => p.dataset.prompt);
        promptContainer.innerHTML = getPromptBoxHTML(currentQuestions);
    }
}