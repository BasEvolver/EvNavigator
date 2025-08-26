// js/portco.js - Main Controller for PortCo pages

// --- MAIN SCRIPT ---
document.addEventListener('DOMContentLoaded', async () => {
    if (Navigation.getCurrentPage() === 'portco') {
        const mainContent = document.getElementById('main-content');
        const urlParams = new URLSearchParams(window.location.search);
        
        let state = loadState();
        const { activePersona } = state;
        
        const companyIdFromUrl = urlParams.get('company');
        let companyId;

        if (activePersona === 'adrian') {
            companyId = companyIdFromUrl || 'all';
        } else {
            companyId = companyIdFromUrl || 'cloudvantage';
        }
        state.selectedCompanyId = companyId;
        
        if (!state.diligenceFilters) {
            state.diligenceFilters = {
                workstreams: FILTER_DATA.workstreams.map(w => w.label),
                statuses: [...FILTER_DATA.statuses]
            };
        }
        saveState(state);
        
        await loadSharedComponents();

        // --- ROUTING LOGIC ---
        if (activePersona === 'adrian') {
            if (companyId === 'all') {
                renderPortfolioCommandCenter();
            } else {
                mainContent.innerHTML = renderCeoDashboard();
            }
        } else if (activePersona === 'evelyn') {
            mainContent.innerHTML = renderCeoDashboard();
        } else if (activePersona === 'connor') {
            mainContent.innerHTML = renderCroRenewalHub();
            runPortcoPrompt("Let's process renewals for our newco acquisition.", 'cloudvantage');
        } else {
            // Fallback for any other persona or undefined state
            renderGenericDashboard_DataView(companyId);
        }

        initializePortcoEventListeners();
        
        if (!document.getElementById('file-attachment-input')) {
            document.body.insertAdjacentHTML('beforeend', `<input type="file" id="file-attachment-input" style="display: none;" multiple />`);
        }
    }
});

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
    let match = promptText.match(taskOverviewPattern);
    if (match && match[1]) {
        const taskName = match[1];
        const task = diligencePlan_v3.find(t => t.name === taskName);
        if (task) {
            response = {
                renderFunc: () => {
                    const statusDetails = projectPlanUtils.getAriaStatusDetails(task);
                    return `<div class="portfolio-response-card">
                                <h4 class="response-title">Deep Dive: ${task.id} ${task.name}</h4>
                                <p class="response-text" data-typing-text="This task is a critical component of the **${task.workstream}** workstream. Its primary objective is to ${task.description.toLowerCase()}"></p>
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
            case 'navigate-to-aria-with-prompt':
                const targetCompanyId = target.dataset.companyId;
                const promptText = target.dataset.promptText;
                const workstreamId = target.dataset.workstreamId;
                if (targetCompanyId && promptText) {
                    let url = `aria.html?company=${targetCompanyId}&prompt=${encodeURIComponent(promptText)}`;
                    if (workstreamId) {
                        url += `&workstream=${workstreamId}`;
                    }
                    window.location.href = url;
                }
                break;
            case 'navigate-to-gantt':
                window.location.href = `portco.html?company=techflow-solutions`;
                break;
            case 'expand-to-ceo-view':
                const ceoCompanyId = target.dataset.companyId;
                window.location.href = `portco.html?company=${ceoCompanyId}`;
                break;
            case 'run-prompt': {
                const prompt = target.dataset.prompt;
                if (prompt) {
                    const modal = document.getElementById('gantt-task-modal-overlay');
                    if (modal) modal.remove();
                    runPortcoPrompt(prompt, companyId);
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