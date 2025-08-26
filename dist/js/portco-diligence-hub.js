// js/portco-diligence-hub.js - All logic for the TechFlow Gantt/Diligence view

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