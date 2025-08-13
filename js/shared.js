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
            const companyHeaderData = workspaceHeaders[companyId];
            title = companyHeaderData ? `${companyHeaderData.title} - ${companyHeaderData.stage}` : 'Portfolio Company';
        }
        
        titleElement.textContent = title;
    },

    updateCompanySelector() {
        const selector = document.getElementById('company-selector');
        if (selector) {
            const state = loadState();
            selector.value = state.selectedCompanyId || 'all';
            selector.addEventListener('change', (e) => {
                let state = loadState();
                state.selectedCompanyId = e.target.value;
                saveState(state);
                const currentPage = Navigation.getCurrentPage();
                window.location.href = `${currentPage}.html?company=${e.target.value}`;
            });
        }
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
        const { selectedCompanyId } = loadState();
        const linkCompanyId = (selectedCompanyId && selectedCompanyId !== 'all') ? selectedCompanyId : 'techflow-solutions';

        document.querySelectorAll('#sidebar-menu .nav-link[data-page]').forEach(link => {
            const page = link.dataset.page;
            if (page === 'index') {
                link.href = 'index.html';
            } else {
                link.href = `${page}.html?company=${linkCompanyId}`;
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

    // Set initial state from localStorage
    const savedSidebarState = localStorage.getItem('sidebarCollapsed') === 'true';
    setSidebarState(savedSidebarState);

    // Listener for the main collapse button
    if (collapseButton) {
        collapseButton.addEventListener('click', () => {
            const isCurrentlyCollapsed = sidebar.classList.contains('collapsed');
            const newState = !isCurrentlyCollapsed;
            localStorage.setItem('sidebarCollapsed', newState);
            setSidebarState(newState);
        });
    }
    
    // --- MAIN EVENT LISTENER FOR ALL OTHER SIDEBAR CLICKS ---
    document.body.addEventListener('click', (e) => {
        const target = e.target;
        
        // Logic for Submenus like "Knowledge"
        const parentLink = target.closest('[data-is-parent="true"]');
        if (parentLink) {
            const isCollapsed = sidebar.classList.contains('collapsed');
            
            if (isCollapsed) {
                // If collapsed, expand the whole sidebar and open the submenu
                e.preventDefault();
                localStorage.setItem('sidebarCollapsed', 'false');
                setSidebarState(false);
                
                // We need to wait a moment for the CSS transition to start
                setTimeout(() => {
                    const parentLi = parentLink.closest('.nav-parent');
                    const childrenUl = parentLi.querySelector('.nav-children');
                    const chevron = parentLink.querySelector('.chevron-icon');
                    childrenUl.style.maxHeight = childrenUl.scrollHeight + "px";
                    chevron.classList.add('expanded');
                }, 50);

            } else {
                // If expanded, just toggle the submenu
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

        // Logic for other actions like Settings and Logout
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
                        localStorage.clear(); // Clear all local storage for a full reset
                        window.location.reload();
                    }
                    return;
                case 'logout':
                    if (typeof window.logout === 'function') {
                        window.logout();
                    }
                    return;
            }
        }

        // Logic to close the settings modal if clicking outside
        const settingsModal = document.getElementById('settings-popup-modal');
        const settingsButton = document.getElementById('settings-icon');
        if (settingsModal && settingsModal.classList.contains('visible')) {
            if (!settingsModal.contains(target) && !target.closest('[data-action="toggle-settings-popup"]')) {
                settingsModal.classList.remove('visible');
            }
        }
    });

    window.sidebarListenersAttached = true;
},

    updateAll() {
        this.updateHeaderTitle();
        this.updateCompanySelector();
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