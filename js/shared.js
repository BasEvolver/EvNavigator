// js/shared.js - Shared utilities, state, component loading, and navigation

// =================================================================
// GENERATIVE UTILITIES
// =================================================================
const Utils = {
    generateUpliftInitiative(capabilityId, state) {
        const { assessmentData } = state.modeling;
        const companyId = state.selectedCompanyId;
        const capability = this.findCapability(capabilityId);
        if (!capability || !capability.domains) return null;

        const domainsInCapability = Object.values(capability.domains);
        
        const relevantDomains = domainsInCapability.filter(d => 
            assessmentData[d.id] && assessmentData[d.id].target > assessmentData[d.id].current
        );

        if (relevantDomains.length === 0) {
            return {
                id: `INIT-${capability.id}`,
                title: `No Uplift Required for ${capability.name}`,
                rationale: "The current and target maturity levels are the same across all domains. No new actions are needed.",
                actions: [],
                kpis: [],
                risks: [],
                budget: { software: '$0', headcount: '$0' }
            };
        }

        let allActions = [];
        relevantDomains.forEach(domain => {
            const { current, target } = assessmentData[domain.id];
            for (let i = current; i < target; i++) {
                allActions.push(`[${domain.name}] Action to progress from Level ${i} ('${domain.levels[i-1]}') to Level ${i + 1} ('${domain.levels[i]}').`);
            }
        });
        
        let rationale = `This initiative is designed to mature the '${capability.name}' capability. `;
        if (companyId === 'techflow-solutions') {
            rationale += "It directly addresses critical diligence findings related to operational inefficiency and market risk, forming a key part of the 100-Day Plan to stabilize and prepare the asset for growth.";
        } else {
            rationale += "It aligns with the strategic objective of achieving 'Rule of 60' by enhancing scalability and optimizing for growth, forming a key pillar of the long-term Value Creation Plan.";
        }

        return {
            id: `INIT-${capability.id}`,
            title: `Uplift Initiative: ${capability.name}`,
            rationale: rationale,
            actions: allActions.slice(0, 5),
            kpis: ["Reduce related operational costs by 15%", "Improve team efficiency score by 20 points", "Increase customer satisfaction in this area by 10%"],
            risks: ["Potential for disruption to current operations during implementation.", "Requires significant buy-in and change management from department heads."],
            budget: { software: '$15,000', headcount: '$90,000' }
        };
    },

    findCapability(capabilityId) {
        for (const discipline of Object.values(maturityModel.disciplines)) {
            if (discipline.capabilities[capabilityId]) {
                return discipline.capabilities[capabilityId];
            }
        }
        return null;
    }
};


// =================================================================
// THEME MANAGEMENT
// =================================================================
function updateLogoForTheme(theme) {
    const fullLogo = document.getElementById('full-logo');
    const iconLogo = document.getElementById('icon-logo');
    
    // Handles the full-size logo
    if (fullLogo) {
        fullLogo.src = (theme === 'dark') ? 'Navigator lock up_white_25.png' : 'Navigator lock up_Veridian_25.png';
    }
    
    // Handles the small icon logo with your new filenames
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
            // CORRECTED: Add specific title for the command center view
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

        // This clone-and-replace pattern is correct for preventing duplicate event listeners.
        const newSelector = selector.cloneNode(true);
        selector.parentNode.replaceChild(newSelector, selector);

        const state = loadState();
        const { activePersona, selectedCompanyId } = state;

        // --- CHANGE START: New, robust persona-based filtering logic ---

        if (activePersona === 'adrian') {
            // Adrian's Path: He can see everything.
            
            // 1. Make sure all options are visible.
            for (const option of newSelector.options) {
                option.style.display = '';
            }
            
            // 2. Enable the dropdown for interaction.
            newSelector.disabled = false;
            newSelector.style.display = 'block';

            // 3. Set the currently selected value based on the application state.
            newSelector.value = selectedCompanyId || 'all';

        } else {
            // Non-Adrian Persona Path (e.g., Evelyn, Connor): They only see their own company.

            const allowedCompanyId = PERSONAS[activePersona].defaultCompany;

            // 1. Iterate through all options and hide the ones that are not allowed.
            for (const option of newSelector.options) {
                if (option.value !== allowedCompanyId) {
                    option.style.display = 'none';
                } else {
                    option.style.display = ''; // Ensure the correct one is visible
                }
            }
            
            // 2. Set the value to their specific company.
            newSelector.value = allowedCompanyId;

            // 3. Disable the dropdown so they cannot change it.
            newSelector.disabled = true;
            newSelector.style.display = 'block';
        }
        
        // The event listener for navigation remains the same.
        newSelector.addEventListener('change', (e) => {
            let state = loadState();
            state.selectedCompanyId = e.target.value;
            saveState(state);
            
            if (e.target.value === 'all') {
                window.location.href = `portco.html`;
            } else {
                const companyName = e.target.options[e.target.selectedIndex].text;
                const promptText = `Give me a high-level overview of ${companyName}.`;
                window.location.href = `aria.html?company=${e.target.value}&prompt=${encodeURIComponent(promptText)}`;
            }
        });
        // --- CHANGE END ---
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
                // THIS IS THE FIX: Ensure 'all' is passed correctly to ARIA
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

        // --- THEME TOGGLE LOGIC ---
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

        // --- SIDEBAR COLLAPSE LOGIC ---
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
        
        // --- MAIN EVENT LISTENER FOR ALL OTHER CLICKS ---
        document.body.addEventListener('click', (e) => {
            const target = e.target;

            // --- FIX START: Add specific logic for Adrian clicking the Portfolio link ---
            const portfolioLinkTarget = target.closest('a.nav-link[data-page="index"]');
            if (portfolioLinkTarget) {
                const state = loadState();
                if (state.activePersona === 'adrian') {
                    e.preventDefault(); // Stop the link from navigating immediately
                    state.selectedCompanyId = 'all'; // Reset the company selection
                    saveState(state); // Save the new state
                    window.location.href = portfolioLinkTarget.href; // Now, navigate to the home page
                    return; // Stop further processing for this click
                }
                // For any other persona, the link will behave normally without this special logic.
            }
            // --- FIX END ---
            
            // Logic for Submenus like "Knowledge"
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

            // Logic for other actions
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

            // Logic to close popups if clicking outside
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