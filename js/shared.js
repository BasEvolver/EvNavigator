// js/shared.js - Shared utilities, state, component loading, and navigation

// =================================================================
// THEME MANAGEMENT (FINAL)
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
        if (page === 'index') title = 'Portfolio Overview';
        if (page === 'portco') title = state.selectedCompanyId === 'techflow-solutions' ? 'TechFlow Solutions' : 'CloudVantage';
        if (page === 'aria') title = 'ARIA';
        if (page === 'workspace') title = 'Diligence Workspace';
        if (page === 'modeling') title = 'Capability Modeling';
        
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
        const currentPage = this.getCurrentPage().replace('index', 'home');
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkPage = link.getAttribute('data-page');
            if (linkPage === currentPage || (currentPage === 'home' && (linkPage === 'index'))) {
                 link.classList.add('active');
            }
        });
    },
    
    updateNavigationLinks() {
        const { selectedCompanyId } = loadState();
        const navLinks = document.querySelectorAll('#sidebar-menu .nav-link');

        navLinks.forEach(link => {
            const page = link.dataset.page;
            if (page === 'index' || page === 'home') {
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