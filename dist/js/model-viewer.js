// js/model-viewer.js - Final version with SVG Roadmap Visualizer and Cumulative Initiatives.

document.addEventListener('DOMContentLoaded', async () => {
    const path = window.location.pathname.split('/').pop();
    if (path === 'model-viewer.html') {
        initializeViewerEventListeners(); 
        await initializeViewerPage();
    }
});

async function initializeViewerPage() {
    await loadSharedComponents();
    await loadAndStructureModelData();
    renderViewerPage();
}

async function loadAndStructureModelData() {
    let state = loadState();
    if (state.maturityModelData && !state.maturityModelData.rubricCache) state.maturityModelData.rubricCache = {};
    if (state.maturityModelData && !state.maturityModelData.roadmapCache) state.maturityModelData.roadmapCache = {};
    saveState(state);
    if (state.maturityModelData && state.maturityModelData.disciplines.length > 0) return;

    try {
        const response = await fetch('/api/get-full-model');
        if (!response.ok) throw new Error(`API Error: ${response.status} - ${response.statusText}`);
        const fullModel = await response.json();
        const structuredModel = {
            disciplines: fullModel.disciplines || [], capabilities: {}, levers: {},
            rubricCache: {}, roadmapCache: {}
        };
        for (const cap of (fullModel.capabilities || [])) {
            if (!structuredModel.capabilities[cap.discipline_id]) structuredModel.capabilities[cap.discipline_id] = [];
            structuredModel.capabilities[cap.discipline_id].push(cap);
        }
        for (const lever of (fullModel.levers || [])) {
            if (!structuredModel.levers[lever.capability_id]) structuredModel.levers[lever.capability_id] = [];
            structuredModel.levers[lever.capability_id].push(lever);
        }
        state.maturityModelData = structuredModel;
        saveState(state);
    } catch (error) {
        console.error("Fatal Error: Could not load core model from API.", error);
        const detailsPane = document.getElementById('item-details-content');
        if(detailsPane) detailsPane.innerHTML = `<div class="p-4 text-red-600"><strong>API Error:</strong><p>${error.message}</p></div>`;
    }
}

async function loadRubricForItem(itemId) {
    if (!itemId || itemId === 'all-disciplines') return;
    let state = loadState();
    if (state.maturityModelData.rubricCache[itemId]) return;
    try {
        const response = await fetch(`/api/rubric/${itemId}`);
        if (!response.ok) throw new Error(`API Error: Status ${response.status}`);
        const rubricData = await response.json();
        state.maturityModelData.rubricCache[itemId] = rubricData.sort((a, b) => a.stage_number - b.stage_number);
        saveState(state);
    } catch (error) {
        console.error(`Error fetching rubric for ${itemId}:`, error);
        state.maturityModelData.rubricCache[itemId] = [];
        saveState(state);
    }
}

async function loadRoadmapForItem(itemId) {
    let state = loadState();
    const item = findItemInModel(itemId);
    if (!item || item.type !== 'lever') return;
    if (state.maturityModelData.roadmapCache[itemId]) return;
    try {
        const response = await fetch(`/api/roadmap/${itemId}`);
        if (!response.ok) throw new Error(`API Error: Status ${response.status}`);
        const roadmapData = await response.json();
        state.maturityModelData.roadmapCache[itemId] = roadmapData;
        saveState(state);
    } catch (error) {
        console.error(`Error fetching roadmap for ${itemId}:`, error);
        state.maturityModelData.roadmapCache[itemId] = [];
        saveState(state);
    }
}

function renderViewerPage() {
    renderVccTree();
    renderDetailsPane();
}

function renderVccTree() {
    // This function remains unchanged
    const container = document.getElementById('vcc-tree-container');
    if (!container) return;
    let state = loadState();
    if (!state.modelViewer) {
        state.modelViewer = { selectedItemId: 'all-disciplines', expandedNodes: {}, selectedTransition: null };
        saveState(state);
    }
    const { expandedNodes, selectedItemId } = state.modelViewer;
    const { disciplines, capabilities, levers } = state.maturityModelData;
    if (!disciplines || disciplines.length === 0) {
        container.innerHTML = '<div class="p-4 text-secondary">Loading model or API failed...</div>';
        return;
    }
    let html = `<div class="tree-node ${selectedItemId === 'all-disciplines' ? 'active' : ''}" data-action="select-item" data-item-id="all-disciplines"><span class="chevron hidden"></span><span class="node-label is-discipline">All Disciplines</span></div>`;
    disciplines.slice().sort((a, b) => a.discipline_id.localeCompare(b.discipline_id)).forEach(d => {
        const isExpanded = expandedNodes[d.discipline_id];
        html += `<div class="tree-node ${selectedItemId === d.discipline_id ? 'active' : ''}" data-action="select-item" data-item-id="${d.discipline_id}"><svg class="chevron ${isExpanded ? 'expanded' : ''}" data-action="toggle-node" data-node-id="${d.discipline_id}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg><span class="node-label is-discipline">${d.name}</span></div>`;
        if (isExpanded) {
            html += `<div class="node-children">`;
            const caps = capabilities[d.discipline_id] || [];
            caps.slice().sort((a, b) => a.capability_id.localeCompare(b.capability_id)).forEach(c => {
                const capIsExpanded = expandedNodes[c.capability_id];
                html += `<div class="tree-node ${selectedItemId === c.capability_id ? 'active' : ''}" data-action="select-item" data-item-id="${c.capability_id}"><svg class="chevron ${capIsExpanded ? 'expanded' : ''}" data-action="toggle-node" data-node-id="${c.capability_id}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg><span class="node-label">${c.name}</span></div>`;
                if (capIsExpanded) {
                    html += `<div class="node-children">`;
                    const levs = levers[c.capability_id] || [];
                    levs.slice().sort((a, b) => a.lever_id.localeCompare(b.lever_id)).forEach(l => {
                        html += `<div class="tree-node ${selectedItemId === l.lever_id ? 'active' : ''}" data-action="select-item" data-item-id="${l.lever_id}"><span class="chevron hidden"></span><span class="node-label">${l.name}</span></div>`;
                    });
                    html += `</div>`;
                }
            });
            html += `</div>`;
        }
    });
    container.innerHTML = html;
}

function renderDetailsPane() {
    // This function remains unchanged
    const container = document.getElementById('item-details-content');
    if (!container) return;
    const state = loadState();
    const selectedItem = findItemInModel(state.modelViewer.selectedItemId);
    if (!selectedItem) {
        container.innerHTML = '<p class="text-secondary p-4">Select an item to view details.</p>';
        return;
    }
    const createDetailRow = (label, value) => {
        const displayValue = value ? value : '<span class="text-text-muted italic">Not available</span>';
        return `<div class="py-3"><dt class="font-bold text-sm text-text-muted uppercase tracking-wider">${label}</dt><dd class="mt-1 text-text-secondary text-sm">${displayValue}</dd></div>`;
    };
    let detailsHtml = `<div class="p-1"><h3 class="text-xl font-bold mb-2">${selectedItem.name}</h3><p class="text-sm font-mono bg-bg-secondary px-2 py-1 rounded-md text-accent-blue inline-block mb-4">Type: <strong>${selectedItem.type}</strong></p><dl class="divide-y divide-border-color">`;
    switch (selectedItem.type) { case 'discipline': detailsHtml += createDetailRow('discipline_id', selectedItem.discipline_id); detailsHtml += createDetailRow('name', selectedItem.name); detailsHtml += createDetailRow('short_description', selectedItem.short_description); detailsHtml += createDetailRow('long_description', selectedItem.long_description); detailsHtml += createDetailRow('control_question', selectedItem.control_question); detailsHtml += createDetailRow('benefits_statement', selectedItem.benefits_statement); break; case 'capability': detailsHtml += createDetailRow('capability_id', selectedItem.capability_id); detailsHtml += createDetailRow('discipline_id (Parent)', selectedItem.discipline_id); detailsHtml += createDetailRow('name', selectedItem.name); detailsHtml += createDetailRow('short_description', selectedItem.short_description); detailsHtml += createDetailRow('long_description', selectedItem.long_description); detailsHtml += createDetailRow('control_question', selectedItem.control_question); detailsHtml += createDetailRow('benefits_statement', selectedItem.benefits_statement); break; case 'lever': detailsHtml += createDetailRow('lever_id', selectedItem.lever_id); detailsHtml += createDetailRow('capability_id (Parent)', selectedItem.capability_id); detailsHtml += createDetailRow('name', selectedItem.name); detailsHtml += createDetailRow('short_description', selectedItem.short_description); detailsHtml += createDetailRow('long_description', selectedItem.long_description); detailsHtml += createDetailRow('control_question', selectedItem.control_question); break; default: detailsHtml += createDetailRow('ID', selectedItem.id); detailsHtml += createDetailRow('Description', selectedItem.short_description); break; }
    detailsHtml += `</dl>`;
    const rubricItems = state.maturityModelData.rubricCache[selectedItem.id] || [];
    detailsHtml += `<div class="mt-6 pt-6 border-t border-border-color"><h4 class="text-lg font-bold mb-4">Maturity Rubric</h4>`;
    if (rubricItems.length > 0) {
        detailsHtml += `<div class="space-y-4">`;
        rubricItems.forEach(stage => {
            const stageName = maturityStageNames[stage.stage_number - 1] || `Stage ${stage.stage_number}`;
            detailsHtml += `<div class="bg-bg-secondary p-4 rounded-lg border border-border-color"><h5 class="font-bold text-md text-accent-blue">Stage ${stage.stage_number}: ${stageName}</h5><p class="text-sm text-text-secondary mt-2 mb-3">${stage.description || 'No description.'}</p><div class="text-xs border-t border-border-color pt-2"><span class="font-semibold text-text-muted">Benchmark KPI:</span> <span class="font-mono text-text-secondary">${stage.kpi_name || 'N/A'}</span> | <span class="font-semibold text-text-muted">Target:</span> <span class="font-mono text-text-secondary">${stage.kpi_target_value || 'N/A'}</span></div></div>`;
        });
        detailsHtml += `</div>`;
    } else {
        detailsHtml += `<p class="text-text-muted italic text-sm">No rubric information available.</p>`;
    }
    detailsHtml += `</div>`;
    detailsHtml += `<div class="mt-6 pt-6 border-t border-border-color"><h4 class="text-lg font-bold mb-4">Transformation Roadmap</h4>`;
    if (selectedItem.type === 'lever') {
        detailsHtml += `<div id="roadmap-visualizer-container"><div id="roadmap-svg-container"></div><div id="roadmap-details-content" class="mt-4"></div></div>`;
    } else {
        detailsHtml += `<p class="text-text-muted italic text-sm">Roadmap details are only available for Levers.</p>`;
    }
    detailsHtml += `</div></div>`;
    container.innerHTML = detailsHtml;
    if (selectedItem.type === 'lever') {
        renderRoadmapVisualizer();
    }
}

function renderRoadmapVisualizer() {
    const container = document.getElementById('roadmap-svg-container');
    if (!container) return;
    
    const state = loadState();
    const roadmapItems = state.maturityModelData.roadmapCache[state.modelViewer.selectedItemId] || [];
    const selectedTransition = state.modelViewer.selectedTransition || null;

    // --- SVG Constants ---
    const SVG_WIDTH = 600;
    const SVG_HEIGHT = 250; // INCREASED: From 200 to 250 to give arcs more vertical space
    const NODE_RADIUS = 25;
    const Y_POS = SVG_HEIGHT / 2;

    let svgContent = `<svg width="100%" viewBox="0 0 ${SVG_WIDTH} ${SVG_HEIGHT}" style="overflow: visible;">
        <defs>
            <marker id="arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z"></path>
            </marker>
        </defs>`;

    const nodePositions = {};
    for (let i = 1; i <= 5; i++) {
        nodePositions[i] = { x: (SVG_WIDTH / 6) * i, y: Y_POS };
    }

    const sortedItems = [...roadmapItems].sort((a, b) => {
        if (a.from_stage !== b.from_stage) return a.from_stage - b.from_stage;
        return a.to_stage - b.to_stage;
    });

    let lastFromStage = -1;
    let arcDirection = 1;

    sortedItems.forEach(item => {
        const from = item.from_stage;
        const to = item.to_stage;
        const startPos = nodePositions[from];
        const endPos = nodePositions[to];
        
        const isSelected = selectedTransition && selectedTransition.from === from && selectedTransition.to === to;
        const distance = Math.abs(to - from);

        if (from !== lastFromStage) {
            arcDirection = 1;
            lastFromStage = from;
        }
        
        const controlX = (startPos.x + endPos.x) / 2;
        let controlY;

        if (distance === 1) {
            controlY = startPos.y;
        } else {
            // INCREASED: The arc height multiplier from 25 to 40 for more dramatic curves
            controlY = startPos.y - (distance * 40 * arcDirection);
        }

        svgContent += `<path d="M ${startPos.x} ${startPos.y} Q ${controlX} ${controlY} ${endPos.x} ${endPos.y}" 
            class="roadmap-arrow ${isSelected ? 'active' : ''}" 
            marker-end="url(#arrowhead)" 
            data-action="show-roadmap-details" data-from-stage="${from}" data-to-stage="${to}"
        />`;

        if (distance > 1) {
            arcDirection *= -1;
        }
    });

    for (let i = 1; i <= 5; i++) {
        const pos = nodePositions[i];
        svgContent += `<g class="roadmap-node">
            <circle cx="${pos.x}" cy="${pos.y}" r="${NODE_RADIUS}" fill="var(--bg-card)" stroke="var(--text-secondary)" stroke-width="2" />
            <text x="${pos.x}" y="${pos.y}" dy="0.3em" text-anchor="middle" font-size="20" font-weight="bold" fill="var(--text-primary)">${i}</text>
        </g>`;
    }

    svgContent += `</svg>`;
    container.innerHTML = svgContent;
    
    if (selectedTransition) {
        renderRoadmapTransitionDetails(selectedTransition.from, selectedTransition.to);
    } else {
        document.getElementById('roadmap-details-content').innerHTML = `<p class="text-center text-text-muted p-4">Click an arrow to see transition details.</p>`;
    }
}

/**
 * UPGRADED: Renders details for a transition, handling cumulative initiatives.
 */
function renderRoadmapTransitionDetails(fromStage, toStage) {
    const container = document.getElementById('roadmap-details-content');
    const state = loadState();
    const allRoadmapItems = state.maturityModelData.roadmapCache[state.modelViewer.selectedItemId] || [];
    
    // Find the specific transition that was clicked (for its "What to Skip" section)
    const directTransitionData = allRoadmapItems.find(item => item.from_stage == fromStage && item.to_stage == toStage);

    if (!container || !directTransitionData) {
        container.innerHTML = `<p class="text-center text-text-muted p-4">No details for this transition.</p>`;
        return;
    }

    const distance = toStage - fromStage;
    let initiativesHtml = '';

    if (distance > 1) {
        // --- CUMULATIVE LOGIC ---
        initiativesHtml += `<h6>Cumulative Initiatives</h6>`;
        let allInitiativesFound = true;
        for (let i = fromStage; i < toStage; i++) {
            const intermediateStep = allRoadmapItems.find(item => item.from_stage === i && item.to_stage === i + 1);
            initiativesHtml += `<div class="roadmap-phase-group">
                <h5 class="phase-title">Phase: Stage ${i} → Stage ${i + 1}</h5>`;
            if (intermediateStep && intermediateStep.key_initiatives) {
                const stepInitiatives = (intermediateStep.key_initiatives || '').split('\n').filter(Boolean).map(line => `<li>${line}</li>`).join('');
                initiativesHtml += `<ul class="list-disc pl-5 mt-2 text-sm text-green-700 space-y-1">${stepInitiatives}</ul>`;
            } else {
                initiativesHtml += `<p class="text-sm text-text-muted mt-2 italic">No specific initiatives defined for this phase.</p>`;
                allInitiativesFound = false;
            }
            initiativesHtml += `</div>`;
        }
        if (!allInitiativesFound) {
             initiativesHtml += `<p class="text-xs text-text-muted mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded">Note: Not all intermediate steps have defined initiatives. The list above may be incomplete.</p>`;
        }
    } else {
        // --- SINGLE STEP LOGIC ---
        initiativesHtml += `<h6>Key Initiatives</h6>`;
        const singleStepInitiatives = (directTransitionData.key_initiatives || '').split('\n').filter(Boolean).map(line => `<li>${line}</li>`).join('');
        if (singleStepInitiatives) {
            initiativesHtml += `<ul class="list-disc pl-5 mt-2 text-sm text-green-700 space-y-1">${singleStepInitiatives}</ul>`;
        } else {
            initiativesHtml += `<p class="text-sm text-green-700 mt-2 italic">None specified.</p>`;
        }
    }

    const skipsHtml = (directTransitionData.what_to_skip || '').split('\n').filter(Boolean).map(line => `<li>${line}</li>`).join('');

    container.innerHTML = `
        <div class="border border-border-color rounded-lg">
            <div class="bg-bg-secondary p-3 border-b border-border-color">
                <h5 class="font-bold text-md text-accent-blue">Improvement Path: Stage ${directTransitionData.from_stage} → Stage ${directTransitionData.to_stage}</h5>
            </div>
            <div class="p-4 grid grid-cols-2 gap-6">
                <div class="initiatives-container">
                    ${initiativesHtml}
                </div>
                <div>
                    <h6>What to Skip (Direct Path)</h6>
                    ${skipsHtml ? `<ul class="list-disc pl-5 mt-2 text-sm text-red-700 space-y-1">${skipsHtml}</ul>` : '<p class="text-sm text-red-700 mt-2 italic">None specified.</p>'}
                </div>
            </div>
        </div>`;
}

function initializeViewerEventListeners() {
    // This function remains unchanged
    document.addEventListener('click', async (e) => {
        const target = e.target.closest('[data-action]');
        if (!target || (!target.closest('#viewer-vcc-pane') && !target.closest('#viewer-details-pane'))) return;
        
        e.stopPropagation();
        let state = loadState();
        if (!state.modelViewer) state.modelViewer = { selectedItemId: 'all-disciplines', expandedNodes: {}, selectedTransition: null };
        
        const action = target.dataset.action;

        if (action === 'toggle-node') {
            const nodeId = target.dataset.nodeId;
            state.modelViewer.expandedNodes[nodeId] = !state.modelViewer.expandedNodes[nodeId];
            saveState(state);
            renderVccTree();
        } 
        else if (action === 'select-item') {
            const nodeId = target.dataset.itemId;
            state.modelViewer.selectedItemId = nodeId;
            state.modelViewer.selectedTransition = null;
            saveState(state);
            await loadRubricForItem(nodeId);
            await loadRoadmapForItem(nodeId);
            renderViewerPage();
        }
        else if (action === 'show-roadmap-details') {
            const fromStage = parseInt(target.dataset.fromStage, 10);
            const toStage = parseInt(target.dataset.toStage, 10);
            state.modelViewer.selectedTransition = { from: fromStage, to: toStage };
            saveState(state);
            renderRoadmapVisualizer();
        }
    });
}

function findItemInModel(id) {
    // This function remains unchanged
    const state = loadState();
    const { disciplines, capabilities, levers } = state.maturityModelData;
    if (!id || id === 'all-disciplines') return { id: 'all-disciplines', name: 'All Disciplines', type: 'root', short_description: 'An overview of the entire maturity model.', long_description: 'Select a specific Discipline, Capability, or Lever to see its detailed descriptions.' };
    for (const d of (disciplines || [])) { if (d.discipline_id === id) return { ...d, id: d.discipline_id, type: 'discipline' }; }
    for (const capList of Object.values(capabilities || {})) { for (const c of capList) { if (c.capability_id === id) return { ...c, id: c.capability_id, type: 'capability' }; } }
    for (const leverList of Object.values(levers || {})) { for (const l of leverList) { if (l.lever_id === id) return { ...l, id: l.lever_id, type: 'lever' }; } }
    return null;
}