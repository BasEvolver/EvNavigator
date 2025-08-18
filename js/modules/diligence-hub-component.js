// js/modules/diligence-hub-component.js
// This is the FULL, COMPLETE, and CORRECTED version of this component.
// It contains all the logic to render AND interact with the Diligence Hub.

window.DiligenceHubComponent = {
    render: function(targetElement, companyId, initialTask, initialPhase) {
        this.companyId = companyId;
        this.state = loadState();
        this.targetElement = targetElement;

        const hubHTML = `
            <div class="diligence-hub-container">
                <div id="diligence-content-area-${this.companyId}" class="diligence-content"></div>
            </div>
            <div id="gantt-task-modal-container-${this.companyId}"></div>
        `;
        this.targetElement.innerHTML = hubHTML;
        this.contentArea = this.targetElement.querySelector(`#diligence-content-area-${this.companyId}`);

        this._renderPlanTab();
        this._initializeListeners(); // This sets up listeners within the component's scope

        if (initialPhase) {
            setTimeout(() => {
                const phaseHeader = this.targetElement.querySelector(`.gantt-row[data-row-id="${initialPhase}"] [data-action="toggle-rows"]`);
                if (phaseHeader) phaseHeader.click();
            }, 100);
        }
        if (initialTask) {
            setTimeout(() => this._renderTaskDetailModal(initialTask), 200);
        }
    },

    // NEW FUNCTION TO RENDER A MODIFIED GANTT CHART
    renderModifiedPlan: function(targetElement, companyId, modificationParams) {
        this.companyId = companyId;
        this.state = loadState();
        this.targetElement = targetElement;

        let modifiedPlan = JSON.parse(JSON.stringify(diligencePlan_v3)); // Deep copy

        if (modificationParams.phaseToShift) {
            const phaseDef = [{ name: "Phase 3: Analysis", dayRange: [6, 11] }].find(p => p.name === modificationParams.phaseToShift);
            if (phaseDef) {
                modifiedPlan.forEach(task => {
                    if (task.startDay >= phaseDef.dayRange[0] && task.startDay <= phaseDef.dayRange[1]) {
                        task.startDay += modificationParams.startDayOffset;
                    }
                });
            }
        }
        
        const ganttHTML = this._generateGanttHTML(modifiedPlan, this.state);
        this.targetElement.innerHTML = ganttHTML;
        this._initializeGanttHoverAndScroll(this.targetElement);
    },
    
    _initializeGanttHoverAndScroll: function(container) {
        container.querySelectorAll('.gantt-grid-container').forEach(ganttContainer => {
            ganttContainer.addEventListener('mouseover', e => {
                const rowTarget = e.target.closest('[data-row-id]');
                if (rowTarget) {
                    const rowId = rowTarget.dataset.rowId;
                    ganttContainer.querySelectorAll(`[data-row-id="${rowId}"] .gantt-row-left, [data-row-id="${rowId}"] .gantt-row-right`).forEach(el => el.classList.add('hover'));
                }
            });
            ganttContainer.addEventListener('mouseout', e => {
                const rowTarget = e.target.closest('[data-row-id]');
                if (rowTarget) {
                    const rowId = rowTarget.dataset.rowId;
                    ganttContainer.querySelectorAll(`[data-row-id="${rowId}"] .gantt-row-left, [data-row-id="${rowId}"] .gantt-row-right`).forEach(el => el.classList.remove('hover'));
                }
            });
        });

        setTimeout(() => {
            const chartArea = container.querySelector('.gantt-scroll-wrapper');
            if (chartArea) {
                const totalWidth = chartArea.scrollWidth;
                const visibleWidth = chartArea.clientWidth;
                const todayPosition = (totalWidth / 17) * (CURRENT_PROJECT_DAY - 0.5);
                chartArea.scrollLeft = todayPosition - (visibleWidth / 2) + 420;
            }
        }, 0);
    },

    _renderPlanTab: function(keepFilterOpen = false) {
        const ganttHTML = this._generateGanttHTML(diligencePlan_v3, this.state);
        this.contentArea.innerHTML = `
            ${ganttHTML}
            <div id="gantt-filter-modal-${this.companyId}" class="gantt-modal ${keepFilterOpen ? 'visible' : ''}">
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
                            ${FILTER_DATA.workstreams.map(item => `<label class="custom-checkbox-wrapper"><input type="checkbox" data-action="filter" data-type="workstreams" data-value="${item.label}" ${this.state.diligenceFilters.workstreams.includes(item.label) ? 'checked' : ''}><span class="custom-checkbox"></span><span class="checkbox-label">${item.label}</span></label>`).join('')}
                        </div>
                        <div class="filter-group">
                            <div class="filter-group-header">
                                <h5 class="filter-group-title">Status</h5>
                                <div class="filter-group-actions">
                                    <button class="filter-action-btn" data-action="filter-all" data-type="statuses" data-mode="select">All</button>
                                    <button class="filter-action-btn" data-action="filter-all" data-type="statuses" data-mode="deselect">None</button>
                                </div>
                            </div>
                            ${FILTER_DATA.statuses.map(item => `<label class="custom-checkbox-wrapper"><input type="checkbox" data-action="filter" data-type="statuses" data-value="${item}" ${this.state.diligenceFilters.statuses.includes(item) ? 'checked' : ''}><span class="custom-checkbox"></span><span class="checkbox-label">${item}</span></label>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        this._initializeGanttHoverAndScroll(this.contentArea);
    },

    _renderTaskDetailModal: function(taskId) {
        const task = diligencePlan_v3.find(t => t.id === taskId);
        if (!task) return;
        const container = this.targetElement.querySelector(`#gantt-task-modal-container-${this.companyId}`);
        if (!container) return;
        
        const planWithDates = projectPlanUtils.calculateTaskDates(diligencePlan_v3);
        const taskWithDates = planWithDates.find(t => t.id === taskId);
        const commentary = projectPlanUtils.generateAriaCommentary(task);
        const statusDetails = projectPlanUtils.getAriaStatusDetails(task);
        const statusClass = `status-${commentary.status.toLowerCase().replace(/ /g, '-')}`;

        const renderDependencyList = (dependencyIds) => {
            if (!dependencyIds || dependencyIds.length === 0) return '<li class="none">None</li>';
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
            <div class="gantt-modal-overlay visible" data-action="close-task-modal">
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
                                ${statusDetails.actions.length > 0 ? `<div class="modal-suggested-actions">${statusDetails.actions.map(action => `<button class="modal-action-button" data-action="run-suggested-prompt" data-question="${action.prompt}">${action.text}</button>`).join('')}</div>` : ''}
                            </div>
                        </div>
                        <div class="modal-description"><h4 class="modal-section-title">Description</h4><p>${task.description || 'No description provided.'}</p></div>
                        <div class="modal-description"><h4 class="modal-section-title">Expected Output</h4><p>${task.output || 'No output specified.'}</p></div>
                        <div class="modal-grid">
                            <div class="modal-dependencies"><h4 class="modal-section-title">Predecessors (Dependencies)</h4><ul>${predecessors}</ul></div>
                            <div class="modal-dependencies"><h4 class="modal-section-title">Successors</h4><ul>${successors}</ul></div>
                        </div>
                        <button class="modal-aria-button" data-action="run-suggested-prompt" data-question="Provide me with a current overview and understanding of the '${task.name}' task.">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>
                            Ask Aria about this task
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    _initializeListeners: function() {
        this.targetElement.addEventListener('click', (e) => {
            const target = e.target.closest('[data-action]');
            if (!target) return;

            const action = target.dataset.action;
            switch (action) {
                case 'show-task-details':
                    const taskId = target.closest('[data-task-id]').dataset.taskId;
                    this._renderTaskDetailModal(taskId);
                    break;
                case 'close-task-modal':
                    const overlay = this.targetElement.querySelector('.gantt-modal-overlay');
                    if (overlay) overlay.remove();
                    break;
                case 'toggle-filter-modal':
                    this.targetElement.querySelector(`#gantt-filter-modal-${this.companyId}`).classList.toggle('visible');
                    break;
                case 'expand-collapse-all': {
                    const allIcons = this.targetElement.querySelectorAll('.chevron-icon');
                    const shouldExpand = allIcons.length > 0 && !allIcons[0].classList.contains('expanded');
                    allIcons.forEach(icon => icon.classList.toggle('expanded', shouldExpand));
                    const allChildRows = this.targetElement.querySelectorAll('.gantt-row[class*="phase-"], .gantt-row[class*="cat-"]');
                    allChildRows.forEach(row => {
                        row.classList.toggle('collapsed', !shouldExpand);
                    });
                    break;
                }
                case 'toggle-rows': {
                    const targetClass = target.closest('[data-target-class]').dataset.targetClass;
                    if (!targetClass) return;
                    const headerRow = target.closest('.gantt-row');
                    const icon = headerRow.querySelector('.chevron-icon');
                    const isCollapsing = icon.classList.contains('expanded');
                    icon.classList.toggle('expanded', !isCollapsing);
                    
                    const parentGantt = headerRow.closest('.gantt-grid-container');

                    if (targetClass.startsWith('phase-')) {
                        parentGantt.querySelectorAll(`.${targetClass}[data-row-type="category"]`).forEach(row => {
                            row.classList.toggle('collapsed', isCollapsing);
                            const catIcon = row.querySelector('.chevron-icon');
                            if (isCollapsing || (catIcon && !catIcon.classList.contains('expanded'))) {
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
                case 'filter-all': {
                    const { type, mode } = target.dataset;
                    if (mode === 'select') {
                        if (type === 'workstreams') this.state.diligenceFilters.workstreams = FILTER_DATA.workstreams.map(w => w.label);
                        else this.state.diligenceFilters.statuses = [...FILTER_DATA.statuses];
                    } else {
                        this.state.diligenceFilters[type] = [];
                    }
                    saveState(this.state);
                    this._renderPlanTab(true);
                    break;
                }
            }
        });

        this.targetElement.addEventListener('change', e => {
            const target = e.target.closest('input[data-action="filter"]');
            if (!target) return;
            
            const { type, value } = target.dataset;
            const filterArray = this.state.diligenceFilters[type];
            const index = filterArray.indexOf(value);

            if (target.checked) {
                if (index === -1) filterArray.push(value);
            } else {
                if (index > -1) filterArray.splice(index, 1);
            }
            saveState(this.state);
            this._renderPlanTab(true);
        });
    },

    _generateGanttHTML: function(planData, state, statusOverrides = {}) {
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
};