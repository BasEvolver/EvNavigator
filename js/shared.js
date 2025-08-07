// js/shared.js - Shared utilities, state, component loading, and navigation

// =================================================================
// GENERATIVE UTILITIES
// =================================================================
const Utils = {
    /**
     * Generates a detailed, structured uplift plan based on a capability's maturity gap.
     * This is the core of the "generative" experience in the Modeling tab.
     * @param {string} capabilityId - The ID of the capability to generate a plan for.
     * @param {object} state - The current global application state.
     * @returns {object|null} A structured plan object or null if not applicable.
     */
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

    /**
     * Helper function to find a capability object by its ID from the main maturity model.
     * @param {string} capabilityId - The ID to search for (e.g., 'C110').
     * @returns {object|null} The capability object or null if not found.
     */
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
    const logo = document.getElementById('sidebar-logo');
    if (logo) {
        logo.src = (theme === 'dark') ? 'Navigator lock up_white_25.png' : 'Navigator lock up_Veridian_25.png';
    }
}

function initializeTheme() {
    const themeToggleButton = document.getElementById('theme-toggle-button');
    if (!themeToggleButton) return;

    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.body.setAttribute('data-theme', savedTheme);
    updateLogoForTheme(savedTheme);

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateLogoForTheme(newTheme);
    });
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

        if (page === 'portco') {
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
                if (currentPage !== 'index') {
                    window.location.href = `${currentPage}.html?company=${e.target.value}`;
                } else {
                    window.location.reload();
                }
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
        document.querySelectorAll('#sidebar-menu .nav-link[data-page]').forEach(link => {
            const page = link.dataset.page;
            if (page === 'index') {
                link.href = 'index.html';
            } else if (selectedCompanyId && selectedCompanyId !== 'all') {
                link.href = `${page}.html?company=${selectedCompanyId}`;
            } else {
                link.href = `${page}.html`;
            }
        });
    },
    
    initializeSidebarInteractions() {
        const sidebar = document.getElementById('sidebar');
        if (!sidebar) return;

        // --- Collapsible Menu Logic ---
        sidebar.addEventListener('click', (e) => {
            const parentLink = e.target.closest('[data-page-parent]');
            if (parentLink) {
                e.preventDefault();
                const parentLi = parentLink.closest('.nav-parent');
                const childrenUl = parentLi.querySelector('.nav-children');
                const chevron = parentLink.querySelector('.chevron-icon');
                const isExpanded = childrenUl.style.maxHeight;

                childrenUl.style.maxHeight = isExpanded ? null : childrenUl.scrollHeight + "px";
                chevron.classList.toggle('expanded', !isExpanded);
            }
        });

        // --- Settings Popup, Reset, and Logout Logic ---
        const settingsButton = sidebar.querySelector('[data-action="toggle-settings-popup"]');
        const settingsModal = sidebar.querySelector('#settings-popup-modal');
        const resetButton = sidebar.querySelector('[data-action="reset-app-state"]');
        const logoutButton = sidebar.querySelector('[data-action="logout"]');

        if (settingsButton && settingsModal) {
            settingsButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent the document click listener from closing it immediately
                settingsModal.classList.toggle('visible');
            });
        }

        if (resetButton) {
            resetButton.addEventListener('click', () => {
                if (confirm("Are you sure you want to reset the application? All changes will be lost.")) {
                    localStorage.removeItem('navigatorAppState');
                    window.location.reload();
                }
            });
        }
        
        if (logoutButton) {
            logoutButton.addEventListener('click', () => {
                if (typeof window.logout === 'function') {
                    window.logout();
                }
            });
        }

        // Close modal if clicking anywhere else on the page
        document.addEventListener('click', (e) => {
            if (settingsModal && settingsModal.classList.contains('visible')) {
                if (!settingsModal.contains(e.target) && !settingsButton.contains(e.target)) {
                    settingsModal.classList.remove('visible');
                }
            }
        });
    },

    updateAll() {
        this.updateHeaderTitle();
        this.updateCompanySelector();
        this.updateActiveNavigation();
        this.updateNavigationLinks();
        this.initializeSidebarInteractions();
    }
};

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
    Navigation.updateAll();
}