// js/test-canvas.js

// This object will hold our fetched data
const maturityModel = {
    disciplines: [],
    capabilities: {}, // Keyed by discipline_id
    levers: {}        // Keyed by capability_id
};

// This object will track which nodes are open
let expandedNodes = {};

// Main function that runs when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    await fetchFullModel();
    renderCanvas();
    initializeEventListeners();
});

// --- DATA FETCHING ---
async function fetchFullModel() {
    const container = document.getElementById('canvas-container');
    try {
        // 1. Make a SINGLE API call to our new efficient endpoint
        const response = await fetch('/api/get-full-model');
        if (!response.ok) throw new Error('Failed to fetch the full model');
        const fullModel = await response.json();

        // 2. Restructure the flat arrays into the nested object format our code expects
        maturityModel.disciplines = fullModel.disciplines;
        
        // Group capabilities by their discipline_id
        for (const cap of fullModel.capabilities) {
            if (!maturityModel.capabilities[cap.discipline_id]) {
                maturityModel.capabilities[cap.discipline_id] = [];
            }
            maturityModel.capabilities[cap.discipline_id].push(cap);
        }

        // Group levers by their capability_id
        for (const lever of fullModel.levers) {
            if (!maturityModel.levers[lever.capability_id]) {
                maturityModel.levers[lever.capability_id] = [];
            }
            maturityModel.levers[lever.capability_id].push(lever);
        }

        console.log("Successfully fetched and processed full model in one request:", maturityModel);
    } catch (error) {
        console.error("API Error:", error);
        container.innerHTML = `<p class="text-red-500 font-bold">Error fetching data from API.</p><p class="text-sm text-secondary mt-2">${error.message}</p>`;
    }
}

// --- RENDERING ---
function renderCanvas() {
    const container = document.getElementById('canvas-container');
    let html = '';

    // Sort disciplines by ID for consistent order
    maturityModel.disciplines.sort((a, b) => a.discipline_id.localeCompare(b.discipline_id));

    for (const discipline of maturityModel.disciplines) {
        const isExpanded = !!expandedNodes[discipline.discipline_id];
        const capabilities = maturityModel.capabilities[discipline.discipline_id] || [];
        
        html += `
            <div class="tree-node">
                <svg class="chevron ${isExpanded ? 'expanded' : ''}" data-action="toggle-node" data-node-id="${discipline.discipline_id}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <!-- CORRECTED: Using 'name' property and adding ID -->
                <span class="node-label font-semibold">${discipline.discipline_id} - ${discipline.name}</span>
            </div>
        `;

        if (isExpanded) {
            html += `<div class="node-children">`;
            capabilities.sort((a, b) => a.capability_id.localeCompare(b.capability_id));
            
            for (const capability of capabilities) {
                const capIsExpanded = !!expandedNodes[capability.capability_id];
                const levers = maturityModel.levers[capability.capability_id] || [];

                html += `
                    <div class="tree-node">
                        <svg class="chevron ${capIsExpanded ? 'expanded' : ''}" data-action="toggle-node" data-node-id="${capability.capability_id}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        <!-- CORRECTED: Using 'name' property and adding ID -->
                        <span class="node-label">${capability.capability_id} - ${capability.name}</span>
                    </div>
                `;

                if (capIsExpanded) {
                    html += `<div class="node-children">`;
                    levers.sort((a, b) => a.lever_id.localeCompare(b.lever_id));

                    for (const lever of levers) {
                        html += `
                            <div class="tree-node">
                                <svg class="chevron hidden"></svg> <!-- Placeholder for alignment -->
                                <!-- CORRECTED: Using 'name' property and adding ID -->
                                <span class="node-label text-sm">${lever.lever_id} - ${lever.name}</span>
                            </div>
                        `;
                    }
                    html += `</div>`;
                }
            }
            html += `</div>`;
        }
    }
    container.innerHTML = html;
}

// --- EVENT LISTENERS ---
function initializeEventListeners() {
    const container = document.getElementById('canvas-container');
    container.addEventListener('click', (e) => {
        const target = e.target.closest('[data-action="toggle-node"]');
        if (!target) return;

        const nodeId = target.dataset.nodeId;
        // Flip the boolean value for the node's expanded state
        expandedNodes[nodeId] = !expandedNodes[nodeId];
        
        // Re-render the entire canvas to reflect the change
        renderCanvas();
    });
}