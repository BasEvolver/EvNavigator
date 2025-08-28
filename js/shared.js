// js/shared.js - Shared utilities, state, component loading, and navigation (CORRECTED)

// =================================================================
// CRITICAL UTILITIES AND CONSTANTS
// =================================================================
const PROJECT_DAY_FOR_TODAY = 6;

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



// Helper function to dynamically check if a prompt is modeled
function isPromptModeled(promptText) {
    if (!promptText) return false;

    // Combine all possible response maps into one place for checking.
    // This makes the function aware of every possible response in the app.
    const allResponses = {
        ...(typeof techflow_ariaResponses !== 'undefined' ? techflow_ariaResponses : {}),
        ...(typeof cloudvantage_ariaResponses !== 'undefined' ? cloudvantage_ariaResponses : {}),
        ...(typeof commandCenterAriaResponses !== 'undefined' ? commandCenterAriaResponses : {}),
        ...(typeof diligenceHubAriaResponses !== 'undefined' ? diligenceHubAriaResponses : {}),
        ...(typeof portco_ariaResponses !== 'undefined' ? portco_ariaResponses : {}),
        ...(typeof portfolio_ariaResponses !== 'undefined' ? portfolio_ariaResponses : {})
    };

    // Check if a direct key exists in any of the response maps.
    if (allResponses[promptText]) {
        return true;
    }

    // Check for dynamic prompts that are handled by logic, not just a key.
    if (promptText.startsWith("Provide me with a current overview and understanding of the")) {
        return true;
    }
    
    // If no match is found, it's unmodeled.
    return false;
}

// =================================================================
// GENERATIVE UTILITIES
// =================================================================
const Utils = {
    generateUpliftInitiative(capabilityId, state) {
        // ... (code remains the same)
    },
    findCapability(capabilityId) {
        // ... (code remains the same)
    }
};


// =================================================================
// THEME MANAGEMENT
// =================================================================
function updateLogoForTheme(theme) {
    const fullLogo = document.getElementById('full-logo');
    const iconLogo = document.getElementById('icon-logo');
    
    if (fullLogo) {
        fullLogo.src = (theme === 'dark') ? 'Navigator lock up_white_25.png' : 'Navigator lock up_Veridian_25.png';
    }
    
    if (iconLogo) {
        iconLogo.src = (theme === 'dark') ? 'Evolver_Dark.png' : 'Evolver_light.png';
    }
}


function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateLogoForTheme(savedTheme);
}

// =================================================================
// COMPONENT LOADER
// =================================================================
const ComponentLoader = {
    async loadComponent(path) {
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`Failed to load ${path}`);
            return await response.text();
        } catch (error) {
            console.error('Error loading component:', error);
            return `<div class="text-red-500">Error: ${path} could not be loaded.</div>`;
        }
    },
    async loadHeader() { return this.loadComponent('components/header.html'); },
    async loadSidebar() { return this.loadComponent('components/sidebar.html'); }
};

// =================================================================
// NAVIGATION
// =================================================================
const Navigation = {
    getCurrentPage() {
        const path = window.location.pathname;
        const pageName = path.split('/').pop().replace('.html', '');
        return pageName === '' ? 'index' : pageName;
    },

    updateHeaderTitle() {
        const titleElement = document.getElementById('header-title');
        if (!titleElement) return;
        const page = this.getCurrentPage();
        const state = loadState(); 
        
        let title = 'Portfolio';
        const pageTitles = {
            'index': 'Portfolio Overview',
            'aria': 'ARIA',
            'workspace': 'Diligence Workspace',
            'modeling': 'Capability Modeling',
            'knowledge': 'Knowledge Graph',
            'knowledge-refinery': 'Knowledge Refinery',
            'data-quality': 'Data Quality Control Center'
        };
        title = pageTitles[page] || 'Portfolio Company';

        if (page === 'portco' || page === 'workspace' || page === 'modeling' || page === 'aria') {
            const companyId = state.selectedCompanyId;
            if (companyId === 'all' && page === 'portco') {
                title = 'Portfolio Command Center';
            } else {
                const companyHeaderData = workspaceHeaders[companyId];
                title = companyHeaderData ? `${companyHeaderData.title} - ${companyHeaderData.stage}` : 'Portfolio Company';
            }
        }
        
        titleElement.textContent = title;
    },

    updateCompanySelector() {
        const selector = document.getElementById('company-selector');
        if (!selector) return;

        const newSelector = selector.cloneNode(true);
        selector.parentNode.replaceChild(newSelector, selector);

        const state = loadState();
        const { activePersona, selectedCompanyId } = state;

        if (activePersona === 'adrian') {
            for (const option of newSelector.options) {
                option.style.display = '';
            }
            newSelector.disabled = false;
            newSelector.style.display = 'block';
            newSelector.value = selectedCompanyId || 'all';
        } else {
            const allowedCompanyId = PERSONAS[activePersona].defaultCompany;
            for (const option of newSelector.options) {
                if (option.value !== allowedCompanyId) {
                    option.style.display = 'none';
                } else {
                    option.style.display = '';
                }
            }
            newSelector.value = allowedCompanyId;
            newSelector.disabled = true;
            newSelector.style.display = 'block';
        }
        
        newSelector.addEventListener('change', (e) => {
            let state = loadState();
            const newCompanyId = e.target.value;
            state.selectedCompanyId = newCompanyId;
            saveState(state);

            const currentPage = Navigation.getCurrentPage();
            window.location.href = `${currentPage}.html?company=${newCompanyId}`;
        });
    },

    updatePersonaSwitcher() {
        const container = document.getElementById('persona-hub-container');
        if (!container) return;

        const state = loadState();
        const { activePersona } = state;
        const activePersonaData = PERSONAS[activePersona];
        const nameParts = activePersonaData.name.split(' ');
        const initials = (nameParts[0]?.[0] || '') + (nameParts[1]?.[0] || '');

        let popupItemsHTML = '';
        for (const [id, persona] of Object.entries(PERSONAS)) {
            const pNameParts = persona.name.split(' ');
            const pInitials = (pNameParts[0]?.[0] || '') + (pNameParts[1]?.[0] || '');
            popupItemsHTML += `
                <div class="persona-popup-item ${id === activePersona ? 'active' : ''}" data-action="switch-persona" data-persona-id="${id}">
                    <div class="persona-avatar small" style="background-color: ${persona.avatarColor}; color: ${persona.avatarTextColor};">${pInitials}</div>
                    <div>
                        <div class="persona-name small">${persona.name}</div>
                        <div class="persona-role small">${persona.role}</div>
                    </div>
                </div>
            `;
        }

        container.innerHTML = `
            <div class="persona-switcher" data-action="toggle-persona-popup">
                <div class="persona-avatar" style="background-color: ${activePersonaData.avatarColor}; color: ${activePersonaData.avatarTextColor};">${initials}</div>
                <div>
                    <div class="persona-name">${activePersonaData.name}</div>
                    <div class="persona-role">${activePersonaData.role}</div>
                </div>
            </div>
            <div class="persona-popup">
                <div class="persona-popup-header">
                    <h6>Switch Persona</h6>
                    <p>Select a user to view their experience.</p>
                </div>
                <div class="persona-popup-body">
                    ${popupItemsHTML}
                </div>
            </div>
        `;
    },

    updateActiveNavigation() {
        const currentPage = this.getCurrentPage();
        const navLinks = document.querySelectorAll('.nav-link');
        let activeParent = null;

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
                const parentLi = link.closest('li.nav-parent');
                if (parentLi) activeParent = parentLi;
            }
        });

        document.querySelectorAll('.nav-parent').forEach(parentLi => {
            const childrenUl = parentLi.querySelector('.nav-children');
            const parentLink = parentLi.querySelector('[data-page-parent]');
            const chevron = parentLink.querySelector('.chevron-icon');
            const isActive = parentLi === activeParent;
            
            childrenUl.style.maxHeight = isActive ? childrenUl.scrollHeight + "px" : null;
            parentLink.classList.toggle('active', isActive);
            chevron.classList.toggle('expanded', isActive);
        });
    },
    
    updateNavigationLinks() {
        const { selectedCompanyId, activePersona } = loadState();
        
        document.querySelectorAll('#sidebar-menu .nav-link[data-page]').forEach(link => {
            const page = link.dataset.page;
    
            if (page === 'index') {
                link.href = 'index.html';
            } else if (page === 'portco') {
                if (activePersona === 'adrian') {
                    link.href = 'portco.html';
                } else {
                    link.href = `portco.html?company=cloudvantage`;
                }
            } else {
                const companyParam = selectedCompanyId || 'techflow-solutions';
                link.href = `${page}.html?company=${companyParam}`;
            }
        });
    },

    applyPersonaPermissions() {
        const state = loadState();
        const { activePersona } = state;
        if (!activePersona) return;

        document.querySelectorAll('#sidebar-menu li[data-roles]').forEach(li => {
            const allowedRoles = li.dataset.roles.split(',');
            if (allowedRoles.includes(activePersona)) {
                li.style.display = '';
            } else {
                li.style.display = 'none';
            }
        });
    },
    
   initializeSidebarInteractions() {
        if (window.sidebarListenersAttached) {
            return;
        }

        const sidebar = document.getElementById('sidebar');
        if (!sidebar) return;

        const themeToggleButton = document.getElementById('theme-toggle-button');
        if (themeToggleButton) {
            themeToggleButton.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateLogoForTheme(newTheme);
            });
        }

        const collapseButton = document.getElementById('sidebar-collapse-button');
        const collapseIconLeft = document.getElementById('collapse-icon-left');
        const collapseIconRight = document.getElementById('collapse-icon-right');

        const setSidebarState = (isCollapsed) => {
            sidebar.classList.toggle('collapsed', isCollapsed);
            document.documentElement.classList.remove('sidebar-collapsed-preload');
            if (collapseIconLeft && collapseIconRight) {
                collapseIconLeft.classList.toggle('hidden', isCollapsed);
                collapseIconRight.classList.toggle('hidden', !isCollapsed);
            }
        };

        const savedSidebarState = localStorage.getItem('sidebarCollapsed') === 'true';
        setSidebarState(savedSidebarState);

        if (collapseButton) {
            collapseButton.addEventListener('click', () => {
                const isCurrentlyCollapsed = sidebar.classList.contains('collapsed');
                const newState = !isCurrentlyCollapsed;
                localStorage.setItem('sidebarCollapsed', newState);
                setSidebarState(newState);
            });
        }
        
        document.body.addEventListener('click', (e) => {
            const target = e.target;

            const portfolioLinkTarget = target.closest('a.nav-link[data-page="index"]');
            if (portfolioLinkTarget) {
                const state = loadState();
                if (state.activePersona === 'adrian') {
                    e.preventDefault(); 
                    state.selectedCompanyId = 'all'; 
                    saveState(state); 
                    window.location.href = portfolioLinkTarget.href; 
                    return; 
                }
            }
            
            const parentLink = target.closest('[data-is-parent="true"]');
            if (parentLink) {
                const isCollapsed = sidebar.classList.contains('collapsed');
                
                if (isCollapsed) {
                    e.preventDefault();
                    localStorage.setItem('sidebarCollapsed', 'false');
                    setSidebarState(false);
                    
                    setTimeout(() => {
                        const parentLi = parentLink.closest('.nav-parent');
                        const childrenUl = parentLi.querySelector('.nav-children');
                        const chevron = parentLink.querySelector('.chevron-icon');
                        childrenUl.style.maxHeight = childrenUl.scrollHeight + "px";
                        chevron.classList.add('expanded');
                    }, 50);

                } else {
                    e.preventDefault();
                    const parentLi = parentLink.closest('.nav-parent');
                    const childrenUl = parentLi.querySelector('.nav-children');
                    const chevron = parentLink.querySelector('.chevron-icon');
                    const isExpanded = childrenUl.style.maxHeight && childrenUl.style.maxHeight !== "0px";

                    childrenUl.style.maxHeight = isExpanded ? null : childrenUl.scrollHeight + "px";
                    chevron.classList.toggle('expanded', !isExpanded);
                }
                return;
            }

            const actionTarget = target.closest('[data-action]');
            if (actionTarget) {
                const action = actionTarget.dataset.action;
                switch (action) {
                    case 'toggle-settings-popup':
                        e.stopPropagation();
                        document.getElementById('settings-popup-modal')?.classList.toggle('visible');
                        return;
                    case 'reset-app-state':
                        if (confirm("Are you sure you want to reset the application? All changes will be lost.")) {
                            localStorage.clear();
                            window.location.reload();
                        }
                        return;
                    case 'logout':
                        if (typeof window.logout === 'function') {
                            window.logout();
                        }
                        return;
                    case 'toggle-persona-popup':
                        e.stopPropagation();
                        const popup = document.querySelector('.persona-popup');
                        if (popup) popup.classList.toggle('visible');
                        return;
                    case 'switch-persona':
                        const newPersonaId = actionTarget.dataset.personaId;
                        const persona = PERSONAS[newPersonaId];
                        if (persona) {
                            let state = loadState();
                            state.activePersona = newPersonaId;
                            state.selectedCompanyId = persona.defaultCompany;
                            saveState(state);
                            if (persona.defaultCompany === 'all') {
                                window.location.href = persona.defaultPage;
                            } else {
                                window.location.href = `${persona.defaultPage}?company=${persona.defaultCompany}`;
                            }
                        }
                        return;
                }
            }

            const settingsModal = document.getElementById('settings-popup-modal');
            if (settingsModal && settingsModal.classList.contains('visible') && !target.closest('[data-action="toggle-settings-popup"]')) {
                settingsModal.classList.remove('visible');
            }
            const personaPopup = document.querySelector('.persona-popup');
            if (personaPopup && personaPopup.classList.contains('visible') && !target.closest('[data-action="toggle-persona-popup"]')) {
                personaPopup.classList.remove('visible');
            }
        });

        window.sidebarListenersAttached = true;
    },

    updateAll() {
        this.updateHeaderTitle();
        this.updatePersonaSwitcher();
        this.updateCompanySelector();
        this.applyPersonaPermissions();
        this.updateActiveNavigation();
        this.updateNavigationLinks();
        this.initializeSidebarInteractions();
    }
};

// =================================================================
// SHARED PROMPT BOX UI GENERATOR
// =================================================================
function getAdvancedPromptBoxHTML(questions = [], contextualPills = null) {
    const state = loadState();
   const promptsHTML = (Array.isArray(questions) ? questions : [])
    .map(q => `<button class="suggestion-pill ${!isPromptModeled(q) ? 'unmodeled' : ''}" data-action="run-suggested-prompt" data-question="${q}">${q}</button>`)
    .join('');
    let contextualPillsHTML = '';
    if (contextualPills) {
        const pillButtons = contextualPills.pills.map(p => 
            `<button class="suggestion-pill" data-action="run-suggested-prompt" data-question="${p.prompt}" style="background-color: ${p.color}20; border-color: ${p.color}; color: ${p.color};">
                ${p.label}
            </button>`
        ).join('');
        contextualPillsHTML = `
            <div class="flex items-center gap-3 mb-2">
                <h4 class="list-header !mb-0">${contextualPills.title}</h4>
                <div class="actions-list !mt-0 !gap-2">${pillButtons}</div>
            </div>`;
    }

    const currentPage = Navigation.getCurrentPage();
    const sendAction = currentPage === 'aria' ? 'ask-aria' : 'ask-portco-aria';
    const inputId = currentPage === 'aria' ? 'aria-prompt-input' : 'portco-prompt-input';

    return `
        <div id="aria-prompt-container" class="mt-auto pt-4 flex-shrink-0">
            <div class="prompt-area-large-v4">
                ${contextualPillsHTML}
                <div class="suggestion-pills-container ${contextualPills ? 'pt-4 border-t border-border-color' : ''}">${promptsHTML}</div>
                <textarea id="${inputId}" class="prompt-textarea" rows="1" placeholder="Ask a follow-up..."></textarea>
                <div id="file-attachment-display" class="file-attachment-display"></div>
                <div class="prompt-actions-bottom-bar">
                    <div class="prompt-actions-left">
                        <button data-action="attach-file" class="prompt-action-button" title="Attach File"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg></button>
                        <div class="relative"><button data-action="toggle-settings-modal" class="prompt-action-button" title="Settings"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg></button>${renderSettingsModal(state.ariaSettings)}</div>
                    </div>
                    <div class="prompt-actions-right">
                        <button data-action="restart-conversation" class="prompt-action-button" title="Restart Conversation"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg></button>
                        <button class="prompt-send-button" data-action="${sendAction}" title="Send"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg></button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderSettingsModal(settings) {
    const { isModalOpen, expandedCategories = {} } = settings;
    const settingsStructure = {
        context: { label: 'Context', main: settings.context?.main, items: { ddDataRoom: 'DD Data Room', investmentThesis: 'Investment Thesis', financialModel: 'Financial Model', meetingTranscripts: 'Meeting Transcripts' } },
        domainKnowledge: { label: 'Domain Knowledge', main: settings.domainKnowledge?.main, items: { playbooks: 'Playbooks', kpiLibrary: 'KPI Library', maturityModel: 'Maturity Model', industryBenchmarks: 'Industry Benchmarks' } },
        externalData: { label: 'External Data', main: settings.externalData?.main, items: { linkedin: 'LinkedIn', pitchbook: 'PitchBook', glassdoor: 'Glassdoor', web: 'Web Research' } },
        internalData: { label: 'Internal Data', main: settings.internalData?.main, items: { erp: 'ERP Systems', crm: 'CRM Data', hcm: 'HCM Systems', devops: 'DevOps Metrics' } }
    };
    const renderCategory = (categoryKey, category) => {
        const isExpanded = expandedCategories[categoryKey] || false;
        const subItemsHTML = Object.entries(category.items).map(([itemKey, itemLabel]) => `<div class="flex items-center justify-between pl-6 py-1"><label for="setting-${categoryKey}-${itemKey}" class="text-xs text-secondary">${itemLabel}</label><label class="toggle-switch toggle-switch-sm"><input type="checkbox" id="setting-${categoryKey}-${itemKey}" data-action="update-setting" data-parent="${categoryKey}" data-key="${itemKey}" ${settings[categoryKey]?.[itemKey] ? 'checked' : ''}><span class="slider round"></span></label></div>`).join('');
        return `<div class="border-b border-border-color last:border-b-0"><div class="flex items-center justify-between py-2 cursor-pointer" data-action="toggle-category" data-category="${categoryKey}"><div class="flex items-center gap-2"><svg class="w-4 h-4 text-text-muted transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg><span class="text-sm font-bold text-text-primary">${category.label}</span></div><label class="toggle-switch" onclick="event.stopPropagation();"><input type="checkbox" data-action="update-setting" data-parent="${categoryKey}" data-key="main" ${category.main ? 'checked' : ''}><span class="slider round"></span></label></div><div class="category-content ${isExpanded ? 'expanded' : ''}">${subItemsHTML}</div></div>`;
    };
    return `<div id="settings-modal" class="settings-modal ${isModalOpen ? 'visible' : ''}" style="bottom: 125%; left: 0;"><div class="p-3 space-y-1 text-sm"><div class="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 pb-1 border-b border-border-color">Data Sources</div>${Object.entries(settingsStructure).map(([key, category]) => renderCategory(key, category)).join('')}</div></div>`;
}

// =================================================================
// MAIN COMPONENT LOADER FUNCTION
// =================================================================
async function loadSharedComponents() {
    const sidebarContainer = document.getElementById('sidebar-container');
    const headerContainer = document.getElementById('header-container');
    
    if (sidebarContainer) {
        sidebarContainer.innerHTML = await ComponentLoader.loadSidebar();
    }
    if (headerContainer) {
        headerContainer.innerHTML = await ComponentLoader.loadHeader();
    }
    
    initializeTheme();
    if (typeof initializeAssessmentData === 'function') {
        initializeAssessmentData();
    }
    Navigation.updateAll();
}