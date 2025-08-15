// js/portco.js - Main Controller for PortCo pages

// --- DYNAMIC DATE CALCULATION ---
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

    if (Navigation.getCurrentPage() === 'portco') {
        const mainContent = document.getElementById('main-content');
        const urlParams = new URLSearchParams(window.location.search);
        let companyId = urlParams.get('company');
        let state = loadState();
        
        if (!companyId) {
            companyId = state.selectedCompanyId || 'all';
        }

        state.selectedCompanyId = companyId;
        if (!state.diligenceFilters) {
            state.diligenceFilters = {
                workstreams: FILTER_DATA.workstreams.map(w => w.label),
                statuses: [...FILTER_DATA.statuses]
            };
        }
        saveState(state);
        
        const { activePersona } = state;

        // --- CORRECTED AND SIMPLIFIED ROUTING LOGIC ---
        if (activePersona === 'adrian') {
            if (companyId === 'all') {
                renderPortfolioCommandCenter();
            } else if (companyId === 'techflow-solutions') {
                renderDiligenceHub(companyId);
            } else if (companyId === 'cloudvantage') {
                mainContent.innerHTML = renderCeoDashboard();
            } else {
                renderGenericDashboard_DataView(companyId);
            }
        } else 
            if (activePersona === 'adrian') {
    if (companyId === 'all') {
        renderPortfolioCommandCenter();
    } else {
        // Now correctly shows the diligence hub for ANY specific company for Adrian
        renderDiligenceHub(companyId);
    }
} else 
            
            if (activePersona === 'evelyn') {
            mainContent.innerHTML = renderCeoDashboard();
        } else if (activePersona === 'connor') {
            mainContent.innerHTML = renderCroRenewalHub();
            runPortcoPrompt("Let's process renewals for our newco acquisition.", 'cloudvantage');
        } else {
            renderGenericDashboard_DataView(companyId);
        }
        // --- END OF CORRECTION ---

        Navigation.updateCompanySelector();
        initializePortcoEventListeners();
        if (!document.getElementById('file-attachment-input')) {
            document.body.insertAdjacentHTML('beforeend', `<input type="file" id="file-attachment-input" style="display: none;" multiple />`);
        }

        const taskToOpen = urlParams.get('openTask');
        const phaseToExpand = urlParams.get('expandPhase');
        const workstreamTab = urlParams.get('workstreamTab');

        if (workstreamTab) {
            setTimeout(() => {
                const tabButton = document.querySelector(`.diligence-pills .pill[data-tab-name="${workstreamTab}"]`);
                if (tabButton) tabButton.click();
            }, 100);
        }

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
            response = portcoResponses[`What are the dependencies for the '${task.name}' task?`] || portcoResponses["What are the dependencies for the 'Audited Financials' task?"];
        }
    }

    match = promptText.match(taskAssignmentPattern);
    if (match && match[1]) {
        const taskName = match[1];
        const task = diligencePlan_v3.find(t => t.name === taskName);
        if (task) {
             response = portcoResponses[`Who is assigned to the '${task.name}' task?`] || portcoResponses["Who is assigned to the 'Audited Financials' task?"];
        }
    }

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
            case 'navigate-to-gantt':
                window.location.href = `portco.html?company=techflow-solutions`;
                break;
            case 'expand-to-ceo-view':
                const targetCompanyId = target.dataset.companyId;
                window.location.href = `portco.html?company=${targetCompanyId}`;
                break;
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