// js/workspace.js - V3 Logic for the interactive workspace

// --- ICON SVGS ---
const ICONS = {
    vcp: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    ic: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    day100: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    pdf: `<svg class="ws-format-icon" viewBox="0 0 24 24"><path fill="#e53e3e" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.5 18H8v-5h1.5a1.5 1.5 0 0 1 0 3H9v2zm2.5-2.5a1.5 1.5 0 0 1-3 0V13h3v2.5zM16 18h-1.8l-1.2-5h1.5l.7 3.4.7-3.4h1.5l-1.2 5z"/></svg>`,
    word: `<svg class="ws-format-icon" viewBox="0 0 24 24"><path fill="#2b579a" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.5 15.5H11L12 18h1.5l-2.25-6H9.75L7.5 18H9l1-2.5zm-2-3.5L9 8h1.5l1.5 4H10l-.75-2.25L8.5 12H7.5z"/></svg>`,
    excel: `<svg class="ws-format-icon" viewBox="0 0 24 24"><path fill="#1e7e42" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.5 18l-3-3 3-3 1.5 1.5L9.5 15l1.5 1.5-1.5 1.5zm5-5l-3-3 3-3 1.5 1.5L14.5 9l1.5 1.5-1.5 1.5z"/></svg>`,
    powerpoint: `<svg class="ws-format-icon" viewBox="0 0 24 24"><path fill="#d24726" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM8 18v-5h1.5a1.5 1.5 0 0 1 0 3H8v2zm7-5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5H13V13h2z"/></svg>`,
};

const TOGGLE_CONFIG = [
    { id: 'ic', label: 'IC Report', icon: ICONS.ic },
    { id: 'vcp', label: 'VCP', icon: ICONS.vcp },
    { id: 'day100', label: '100-Day Plan', icon: ICONS.day100 },
];

document.addEventListener('DOMContentLoaded', async () => {
    await loadSharedComponents();
    renderWorkspacePage();
    initializeWorkspaceListeners();
});

function renderWorkspacePage() {
    const state = loadState();
    const companyId = state.selectedCompanyId || 'techflow-solutions';
    const mainContent = document.getElementById('main-content');

    if (!state.diligenceWorkspace.itemSelections) {
        state.diligenceWorkspace.itemSelections = {};
    }
    if (!state.diligenceWorkspace.itemSelections[companyId]) {
        state.diligenceWorkspace.itemSelections[companyId] = {};
        saveState(state);
    }

    const headerData = workspaceHeaders[companyId];
    const selections = state.diligenceWorkspace.itemSelections[companyId];
    
    if (companyId === 'all') {
        mainContent.innerHTML = `<div class="p-8 text-center text-secondary"><h2>Please select a portfolio company to view its workspace.</h2></div>`;
        return;
    }

    mainContent.innerHTML = `
        <div class="workspace-v3-container">
            <div class="workspace-v3-top-section">
                ${renderWorkspaceHeader(headerData)}
            </div>
            <div class="workspace-v3-bottom-section">
                <div class="ws-input-column">
                    ${renderInputCard('Strategic Value Levers', strategicValueLevers_v2, selections)}
                    ${renderInputCard('Flagged Anomalies', [], selections)}
                    ${renderInputCard('Other Observations', otherObservations_v2, selections)}
                </div>
                <div class="ws-narrative-column">
                    ${renderNarrative(state, selections)}
                </div>
            </div>
        </div>
    `;
}

function renderWorkspaceHeader(data) {
    if (!data) return '<div>Header data not found for this company.</div>';
    return `
        <div class="workspace-v3-header">
            <div class="ws-header-title-area">
                <div>
                    <h2 class="ws-header-title">${data.title}</h2>
                    <p class="ws-header-description">${data.description}</p>
                </div>
                <span class="ws-header-stage-badge">${data.stage}</span>
            </div>
            <div>
                <h3 class="ws-priorities-title">${data.priorities.title}</h3>
                <p class="ws-priorities-text">${data.priorities.text}</p>
            </div>
        </div>
    `;
}

function renderInputCard(title, items, selections) {
    let itemsToRender = items; // Use the default passed-in items

    // DYNAMIC LOGIC: If this is the Flagged Anomalies card, get the items from the state instead.
    if (title === 'Flagged Anomalies') {
        const state = loadState();
        // The keyRisks object in the state holds all flagged items.
        // We convert it from an object to an array for rendering.
        itemsToRender = Object.values(state.diligenceWorkspace.keyRisks);
    }

    return `
        <div class="ws-input-card">
            <h3 class="ws-input-title">${title}</h3>
            <div class="ws-input-list">
                ${itemsToRender.map(item => renderInputItem(item, selections[item.id] || {})).join('')}
            </div>
        </div>
    `;
}

function renderInputItem(item, selection) {
    const hasBadges = item.impact || item.complexity || item.severity;
    return `
        <div class="ws-input-item" data-item-id="${item.id}">
            <div class="ws-input-item-header">
                <div>
                    <h4 class="ws-item-title">${item.title || item.text}</h4>
                    ${item.description ? `<p class="ws-item-description">${item.description}</p>` : ''}
                </div>
                ${hasBadges ? `
                    <div class="ws-item-badges">
                        ${item.impact ? `<span class="ws-item-badge impact-${item.impact.toLowerCase()}">Impact: ${item.impact}</span>` : ''}
                        ${item.complexity ? `<span class="ws-item-badge complexity-${item.complexity.toLowerCase()}">Complexity: ${item.complexity}</span>` : ''}
                        ${item.severity ? `<span class="ws-item-badge severity-${item.severity.toLowerCase()}">${item.severity}</span>` : ''}
                    </div>
                ` : ''}
            </div>
            <div class="ws-item-actions">
                ${TOGGLE_CONFIG.map(toggle => `
                    <div class="ws-action-toggle ${selection[toggle.id] ? 'active' : ''}" data-action="toggle-selection" data-item-id="${item.id}" data-toggle-id="${toggle.id}">
                        <span class="icon-shell">${toggle.icon}</span>
                        <span>${toggle.label}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderNarrative(state, selections) {
    const companyId = state.selectedCompanyId;
    const outputData = workspaceOutputs[companyId];
    let narrativeHtml = '';
    const allItems = [...strategicValueLevers_v2, ...Object.values(state.diligenceWorkspace.keyRisks), ...otherObservations_v2];
    
    let hasContent = false;

    for (const toggle of TOGGLE_CONFIG) {
        const itemsForToggle = allItems.filter(item => selections[item.id] && selections[item.id][toggle.id]);
        
        if (itemsForToggle.length > 0) {
            hasContent = true;
            narrativeHtml += `<h4 class="font-semibold text-primary mb-2 mt-4">${toggle.label}</h4><ul>`;
            itemsForToggle.forEach(item => {
                const title = item.title || item.text;
                const description = item.description || `Severity: ${item.severity}` || 'Included for review.';
                narrativeHtml += `<li class="mb-2 list-disc ml-4"><strong>${title}</strong><span class="narrative-tag">[${toggle.id.toUpperCase()}]</span>: ${description}</li>`;
            });
            narrativeHtml += `</ul>`;
        }
    }

    return `
        <div class="ws-narrative-card">
            <div class="ws-narrative-header">
                <h3 class="ws-input-title">Strategic Narrative</h3>
                <div class="flex items-center gap-2">
                    <button class="ws-output-button-small" data-action="reset-workspace-selections" title="Reset Selections">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                        <span>Reset</span>
                    </button>
                    <div class="ws-output-module">
                        <button class="ws-output-button-small" data-action="toggle-output-popup">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            <span>Generate Output</span>
                        </button>
                        <div class="ws-output-popup" id="output-popup" style="display: none;">
                            ${(outputData || []).map(item => `
                                <div class="ws-output-item">
                                    <span class="ws-output-name">${item.name}</span>
                                    <div class="ws-output-formats">
                                        ${item.formats.map(format => ICONS[format] || '').join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
            <div class="ws-narrative-content">
                ${hasContent ? narrativeHtml : '<p class="ws-narrative-placeholder">Select items from the left to build the narrative...</p>'}
            </div>
        </div>
    `;
}

function assembleReportData(state) {
    const companyId = state.selectedCompanyId;
    if (!companyId || companyId === 'all') return null;

    const companyData = workspaceHeaders[companyId];
    const selections = state.diligenceWorkspace.itemSelections[companyId] || {};

    // DYNAMIC LOGIC: Get all selectable items, including the dynamic risks from the state
    const allSelectableItems = [
        ...strategicValueLevers_v2,
        ...Object.values(state.diligenceWorkspace.keyRisks), // Use risks from state
        ...otherObservations_v2
    ];

    // Create a map of all possible ARIA responses by their ID for easy lookup
    const allAriaResponses = { ...techflow_ariaResponses, ...cloudvantage_ariaResponses };

    const selectedRisks = allSelectableItems
        .filter(item => selections[item.id]?.ic)
        .map(item => {
            // Check if it's a rich ARIA response by looking it up by its ID
            const fullAriaResponse = allAriaResponses[item.id];
            if (fullAriaResponse && fullAriaResponse.renderFunc) {
                return { ...fullAriaResponse, isAriaResponse: true, title: item.title };
            }
            
            // Check if it's a standard anomaly
            const fullAnomalyData = techflow_anomalies.find(a => a.id === item.id);
            if (fullAnomalyData) {
                return { ...fullAnomalyData };
            }

            // Handle other simple item types
            return {
                title: item.title || item.text,
                severity: item.severity || 'Medium',
                impact: item.impact || 'Varies',
                sourceDocuments: ['Workspace Analysis'],
                analysis: item.description || 'This item was flagged for inclusion in the IC report.'
            };
        });

    const selectedLevers = allSelectableItems
        .filter(item => selections[item.id]?.vcp)
        .map(item => ({
            title: item.title || item.text,
            description: item.description || ''
        }));

    return {
        company: companyData,
        recommendation: {
            recommendation: 'Proceed with Investment, Subject to Final Diligence',
            color: [34, 146, 84]
        },
        risks: selectedRisks,
        levers: selectedLevers
    };
}

function initializeWorkspaceListeners() {
    const mainContent = document.getElementById('main-content');
    let popupOpen = false;

    mainContent.addEventListener('click', (e) => {
        const state = loadState();
        const companyId = state.selectedCompanyId;
        const actionTarget = e.target.closest('[data-action]');

        if (!actionTarget) return;

        const { action, itemId, toggleId } = actionTarget.dataset;

        switch (action) {
            case 'toggle-selection':
                if (!companyId || companyId === 'all') return;

                if (!state.diligenceWorkspace.itemSelections[companyId]) {
                    state.diligenceWorkspace.itemSelections[companyId] = {};
                }
                if (!state.diligenceWorkspace.itemSelections[companyId][itemId]) {
                    state.diligenceWorkspace.itemSelections[companyId][itemId] = {};
                }

                const currentVal = state.diligenceWorkspace.itemSelections[companyId][itemId][toggleId];
                state.diligenceWorkspace.itemSelections[companyId][itemId][toggleId] = !currentVal;

                saveState(state);
                renderWorkspacePage();
                break;

            case 'reset-workspace-selections':
                if (confirm("Are you sure you want to clear all selections for this workspace?")) {
                    if (!companyId || companyId === 'all') return;
                    state.diligenceWorkspace.itemSelections[companyId] = {};
                    saveState(state);
                    renderWorkspacePage();
                }
                break;

            case 'toggle-output-popup':
                const button = e.target.closest('button');
                if (!button) return;
                
                const originalContent = button.innerHTML;
                button.innerHTML = `Generating...`;
                button.disabled = true;

                setTimeout(async () => {
                    try {
                        const reportData = assembleReportData(loadState());
                        if (!reportData) {
                            alert("Cannot generate a report. Please select a specific company.");
                            return;
                        }
                        const generator = new ReportGenerator(reportData);
                        await generator.generate();
                    } catch (error) {
                        console.error("Failed to generate PDF:", error);
                        alert("An error occurred while generating the report. Check the console for details.");
                    } finally {
                        button.innerHTML = originalContent;
                        button.disabled = false;
                    }
                }, 50);
                break;
        }
    });

    document.addEventListener('click', (e) => {
        const outputModule = e.target.closest('.ws-output-module');
        if (!outputModule && popupOpen) {
            const popup = document.getElementById('output-popup');
            if (popup) {
                popupOpen = false;
                popup.style.display = 'none';
            }
        }
    });
}