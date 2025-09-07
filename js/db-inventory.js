// js/db-inventory.js - Logic for the live database inventory page.

document.addEventListener('DOMContentLoaded', async () => {
    // Ensure this logic only runs on the DB inventory page
    const path = window.location.pathname.split('/').pop();
    if (path !== 'db-inventory.html') {
        return;
    }

    // First, load the shared components like the header and sidebar
    await loadSharedComponents();

    // Now, run the logic specific to this page
    const reportContainer = document.getElementById('inventory-report');
    
    // NOTE: If your local server runs on a different port, change it here.
    // If your API is deployed, use the production URL.
    const API_BASE_URL = ''; // Use a relative path for deployed apps

    const showLoading = (message) => {
        reportContainer.innerHTML = `<div class="loading-state"><div class="spinner"></div><p>${message}</p></div>`;
    };

    const showError = (message, details) => {
        reportContainer.innerHTML = `<div class="loading-state"><p style="color: #DC2626; font-weight: bold;">${message}</p><p>${details}</p></div>`;
    };

    const fetchApiData = async (endpoint) => {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`);
            if (!response.ok) return null;
            return await response.json();
        } catch (error) { return null; }
    };

    const createTableCard = (title, recordCount, columns) => {
        const columnsHTML = columns.map(col => `<tr><td>${col.name}</td><td>${col.type}</td></tr>`).join('');
        return `<div class="table-card"><div class="table-header"><h2 class="table-title">${title}</h2><span class="record-count">${recordCount} Records</span></div><table class="schema-table"><thead><tr><th>Column Name</th><th>Data Type</th></tr></thead><tbody>${columnsHTML}</tbody></table></div>`;
    };

    // --- MAIN EXECUTION ---
    showLoading('Fetching live database stats and schema...');

    const [stats, schema] = await Promise.all([
        fetchApiData('/api/db-stats'),
        fetchApiData('/api/db-schema')
    ]);

    if (!stats || !schema) {
        showError('Failed to connect to the admin APIs.', `Please ensure your API server is running and the '/api/db-stats' and '/api/db-schema' functions are available.`);
        return;
    }

    const tableOrder = [
        'assessments', 'assessment_scores', 'committed_scores',
        'disciplines', 'capabilities', 'levers',
        'maturity_rubric', 'transformation_roadmap'
    ];

    let finalHTML = '';
    for (const tableName of tableOrder) {
        if (schema[tableName]) {
            const recordCount = stats[tableName] !== undefined ? stats[tableName] : 'N/A';
            const columns = schema[tableName];
            finalHTML += createTableCard(tableName, recordCount, columns);
        }
    }

    reportContainer.innerHTML = finalHTML;
});