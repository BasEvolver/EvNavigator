// js/shared.js - Shared utilities, state, component loading, and navigation

// =================================================================
// GENERATIVE UTILITIES (NEW & ENHANCED)
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
        
        // Find all domains within this capability that have a maturity gap.
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
        // This is a placeholder for a more sophisticated lookup, but demonstrates the principle.
        // In a real LLM-powered version, this would be far more dynamic.
        relevantDomains.forEach(domain => {
            const { current, target } = assessmentData[domain.id];
            for (let i = current; i < target; i++) {
                allActions.push(`[${domain.name}] Action to progress from Level ${i} ('${domain.levels[i-1]}') to Level ${i + 1} ('${domain.levels[i]}').`);
            }
        });
        
        // Generate a differentiated rationale based on the company's strategic context.
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
            actions: allActions.slice(0, 5), // Limiting to 5 for demo clarity
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
// THEME MANAGEMENT (UNCHANGED)
// =================================================================
function updateLogoForTheme(theme) {
    const logo = document.getElementById('sidebar-logo');
    if (logo) {
        if (theme === 'dark') {
            logo.src = 'Navigator lock up_white_25.png';
        } else {
            logo.src = 'Navigator lock up_Veridian_25.png';
        }
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
// COMPONENT LOADER (UNCHANGED)
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
// NAVIGATION (UNCHANGED)
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
        
        let title = 'Portfolio'; // Default title
        if (page === 'index') {
            title = 'Portfolio Overview';
        } else if (page === 'portco') {
            const companyId = state.selectedCompanyId;
            if (companyId && companyId !== 'all') {
                title = companyId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            } else {
                title = 'Portfolio Company';
            }
        } else if (page === 'aria') {
            title = 'ARIA';
        } else if (page === 'workspace') {
            title = 'Diligence Workspace';
        } else if (page === 'modeling') {
            title = 'Capability Modeling';
        }
        
        titleElement.textContent = title;
    },

    updateCompanySelector() {
        const selector = document.getElementById('company-selector');
        if (!selector) return;
        selector.value = loadState().selectedCompanyId;
        
        selector.onchange = (e) => {
            const newCompanyId = e.target.value;
            const currentPage = Navigation.getCurrentPage();

            let state = loadState();
            state.selectedCompanyId = newCompanyId;
            saveState(state);
            
            if (newCompanyId === 'all') {
                window.location.href = 'index.html';
            } 
            else if (currentPage === 'index') {
                window.location.href = `portco.html?company=${newCompanyId}`;
            }
            else {
                window.location.href = `${currentPage}.html?company=${newCompanyId}`;
            }
        };
    },

    updateActiveNavigation() {
        const currentPage = this.getCurrentPage();
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkPage = link.getAttribute('data-page');
            if (linkPage === currentPage) {
                 link.classList.add('active');
            }
        });
    },
    
    updateNavigationLinks() {
        const { selectedCompanyId } = loadState();
        const navLinks = document.querySelectorAll('#sidebar-menu .nav-link');

        navLinks.forEach(link => {
            const page = link.dataset.page;
            if (page === 'index') {
                link.href = 'index.html';
                return; 
            }
            if (selectedCompanyId && selectedCompanyId !== 'all') {
                link.href = `${page}.html?company=${selectedCompanyId}`;
            } else {
                link.href = `${page}.html`;
            }
        });
    },

    updateAll() {
        this.updateHeaderTitle();
        this.updateCompanySelector();
        this.updateActiveNavigation();
        this.updateNavigationLinks();
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