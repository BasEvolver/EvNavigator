// js/modeling.js - V6 with All Fixes and Refinements


// FIX: Corrected maturity stages to match your document (no "Initial")
const maturityStageNames = ["Reactive", "Organized", "Automated", "Platform-led", "Intelligent"];
const summaryMaturityLevels = [
    "Reactive: Basic processes are established, but often reactive. Some consistency, but limited foresight.", 
    "Organized: Processes are documented and somewhat standardized. Proactive measures are taken.", 
    "Automated: Processes are largely standardized and automated. Efficiency is a focus.",
    "Platform-led: Processes are integrated, automated, and driven by technology platforms. Data-driven decisions.", 
    "Intelligent: Processes are optimized, self-improving, and leverage advanced analytics/AI for strategic advantage."
];



document.addEventListener('DOMContentLoaded', async () => {
    if (Navigation.getCurrentPage() === 'modeling') {
        document.getElementById('main-content').classList.add('page-modeling');
        await initializeModelingPage();
    }
});

async function initializeModelingPage() {
    let state = loadState();
    const companyId = state.selectedCompanyId;
    await loadSharedComponents();
    await loadMaturityModelFromAPI();
    await loadAvailableAssessments(companyId);
    state = loadState();
    if (!state.selectedAssessmentId && state.availableAssessments.length > 0) {
        const sortedAssessments = state.availableAssessments.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        state.selectedAssessmentId = sortedAssessments[0].assessment_id;
        saveState(state);
    }
    if (state.selectedAssessmentId) {
        await loadAssessmentScores(state.selectedAssessmentId);
    }
    renderCompassPageV3(loadState()); // Use new V3 renderer
    initializeModelingEventListeners();
}

// --- API FETCHERS (No changes) ---
async function loadMaturityModelFromAPI() {
    let state = loadState();
    if (state.maturityModelData && state.maturityModelData.disciplines.length > 0) return;
    try {
        const response = await fetch('/api/get-full-model');
        if (!response.ok) throw new Error('Failed to fetch the full model');
        const fullModel = await response.json();
        const structuredModel = { disciplines: fullModel.disciplines, capabilities: {}, levers: {} };
        for (const cap of fullModel.capabilities) {
            if (!structuredModel.capabilities[cap.discipline_id]) structuredModel.capabilities[cap.discipline_id] = [];
            structuredModel.capabilities[cap.discipline_id].push(cap);
        }
        for (const lever of fullModel.levers) {
            if (!structuredModel.levers[lever.capability_id]) structuredModel.levers[lever.capability_id] = [];
            structuredModel.levers[lever.capability_id].push(lever);
        }
        state.maturityModelData = structuredModel;
        saveState(state);
    } catch (error) {
        console.error("Fatal Error: Could not load maturity model from API.", error);
        document.getElementById('main-content').innerHTML = `<div class="p-8 text-center"><h1 class="text-2xl font-bold text-red-600">API Error</h1><p class="text-secondary mt-2">Could not load required maturity model data.</p></div>`;
    }
}
async function loadAvailableAssessments(companyId) {
    let state = loadState();
    try {
        const targetCompanyId = (companyId === 'all') ? 'techflow-solutions' : companyId;
        const response = await fetch(`/api/assessments/${targetCompanyId}`);
        if (!response.ok) throw new Error(`API error: ${response.status}`);
        state.availableAssessments = await response.json();
        saveState(state);
    } catch (error) {
        console.error(`Error loading assessments for company ${companyId}:`, error);
        state.availableAssessments = [];
        saveState(state);
    }
}
async function loadAssessmentScores(assessmentId) {
    let state = loadState();
    state.assessmentScores = {};
    try {
        const response = await fetch(`/api/scores/${assessmentId}`);
        if (!response.ok) throw new Error(`API error: ${response.status}`);
        const scores = await response.json();
        const transformedScores = {};
        scores.forEach(score => {
            if (!transformedScores[score.source_id]) transformedScores[score.source_id] = {};
            transformedScores[score.source_id][score.item_id] = {
                current: score.as_is_score,
                target: score.to_be_score,
                rationale: score.as_is_rationale
            };
        });
        state.assessmentScores = transformedScores;
        saveState(state);
    } catch (error) {
        console.error(`Error loading scores for assessment ${assessmentId}:`, error);
        state.assessmentScores = {};
        saveState(state);
    }
}
async function saveAssessmentScore(assessmentId, item, type, value) {
    let state = loadState();
    const persona = PERSONAS[state.activePersona] || { name: 'Unknown User' };
    const userScores = state.assessmentScores[persona.name] || {};
    const existingScores = userScores[item.id] || { current: 0, target: 0 };
    const payload = {
        assessment_id: parseInt(assessmentId, 10),
        item_id: item.id,
        item_type: item.type,
        source_id: persona.name,
        as_is_score: type === 'current' ? value : existingScores.current,
        to_be_score: type === 'target' ? value : existingScores.target,
        as_is_rationale: "Updated via slider",
        to_be_rationale: "Target set via slider"
    };
    try {
        const response = await fetch('/api/scores', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        if (!response.ok) { throw new Error(`HTTP error ${response.status}: ${await response.text()}`); }
        const savedScore = await response.json();
        state = loadState();
        if (!state.assessmentScores[persona.name]) state.assessmentScores[persona.name] = {};
        state.assessmentScores[persona.name][item.id] = { current: savedScore.as_is_score, target: savedScore.to_be_score };
        saveState(state);
    } catch (error) {
        console.error("Error saving score:", error);
    }
}

// --- NEW V6 RENDERER ---
function renderCompassPageV3(state) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="compass-container">
            <div class="compass-pane" id="compass-left-pane"></div>
            <div class="compass-pane" id="compass-center-pane"></div>
            <div class="compass-pane" id="compass-right-pane"></div>
        </div>
    `;
    renderCompassLeftPaneV3(state);
    renderCompassCenterPaneV3(state);
    renderCompassRightPaneV3(state);
}

// --- PANE RENDERERS V6 (Reflecting new layout) ---
function renderCompassLeftPaneV3(state) {
    const leftPane = document.getElementById('compass-left-pane');
    leftPane.innerHTML = `<div class="compass-card h-full"><h2 class="text-xl font-bold mb-4">Value Creation Canvas</h2><div class="tree-view-container">${renderTreeView(state)}</div></div>`;
}

function renderCompassCenterPaneV3(state) {
    const centerPane = document.getElementById('compass-center-pane');
    centerPane.innerHTML = `
        <div class="compass-card timeline-selector-card">
            <h3 class="control-title">Assessment Timeline</h3>
            ${renderTimelineSelector(state)}
        </div>
        <div class="compass-center-content">
            ${renderEnrichedContentCard(state)}
        </div>
    `;
}

function renderCompassRightPaneV3(state) {
    const rightPane = document.getElementById('compass-right-pane');
    const item = findItemInModel(state.modeling.selectedItemId);
    if (!item) return;
    const title = item.type === 'lever' ? (findParent(item.id)?.name || 'Lever') : item.name;
    rightPane.innerHTML = `
        <div class="compass-card" style="height: 300px;">
            <div class="radar-chart-container h-full">
                <h3 class="radar-chart-title">${title}</h3>
                <canvas id="modeling-radar-chart"></canvas>
            </div>
        </div>
        <div class="aria-perspective-card">
            <div class="aria-perspective-header"><h3>ARIA's Perspective</h3></div>
            <div id="aria-perspective-content">${generateAriaPerspective(state)}</div>
        </div>
        <div class="compass-card flex-grow">
            <h3 class="control-title mb-4">Drill Down</h3>
            <div class="maturity-table-container">
                ${renderMaturityTable(state)}
            </div>
        </div>
    `;
    drawRadarChart(state);
}

function generateAriaPerspective(state) {
    const item = findItemInModel(state.modeling.selectedItemId);
    if (!item || !state.selectedAssessmentId) {
        return '<p class="text-sm text-secondary">Select an assessment to see ARIA\'s perspective.</p>';
    }

    // Get all scores for the 'ARIA' source from the live state
    const ariaScores = state.assessmentScores['ARIA'] || {};
    
    // Check if a direct score exists for the currently selected item
    const directAriaScore = ariaScores[item.id];

    if (directAriaScore && directAriaScore.rationale) {
        // If a direct score with rationale exists, display it
        return `
            <p class="font-semibold">On ${item.name}:</p>
            <p class="text-sm text-secondary mt-2" data-typing-text="${directAriaScore.rationale}"></p>
        `;
    } else {
        // Otherwise, show a message indicating no specific insight is available
        return `
            <p class="text-sm text-secondary">ARIA has not provided a specific rationale for <strong>${item.name}</strong> in this assessment.</p>
        `;
    }
}

// --- CORE COMPONENTS (Updated for V6) ---
function renderTimelineSelector(state) {
    const { availableAssessments, selectedAssessmentId } = state;
    if (!availableAssessments || availableAssessments.length === 0) return `<div class="flex items-center justify-center h-full text-secondary">No assessments found.</div>`;
    const sorted = [...availableAssessments].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    const firstDate = new Date(sorted[0].created_at);
    const lastDate = new Date();
    const totalDuration = Math.max(1, lastDate - firstDate);
    const timelineItems = sorted.map(assessment => {
        const assessmentDate = new Date(assessment.created_at);
        const position = 10 + (((assessmentDate - firstDate) / totalDuration) * 80); // Use 80% of width, offset by 10%
        const isCommitted = !!assessment.committed_at;
        const isSelected = assessment.assessment_id == selectedAssessmentId;
        return `<div class="timeline-item" style="left: ${position}%" data-action="select-assessment" data-assessment-id="${assessment.assessment_id}" title="${assessment.version_name} (${assessmentDate.toLocaleDateString()})"><div class="timeline-label">${assessment.version_name}</div><div class="timeline-circle ${isCommitted ? 'committed' : ''} ${isSelected ? 'selected' : ''}"></div></div>`;
    }).join('');
    return `<div class="timeline-container"><div class="timeline-track"></div>${timelineItems}<div class="timeline-scale"><span>${firstDate.toLocaleDateString()}</span><span>Today</span></div></div>`;
}

function renderTreeView(state) {
    const { expandedNodes, selectedItemId } = state.modeling;
    const { disciplines, capabilities, levers } = state.maturityModelData;
    if (!disciplines || disciplines.length === 0) return '<div class="p-4 text-secondary">Loading model...</div>';
    let html = `<div class="tree-node ${selectedItemId === 'all-disciplines' ? 'active' : ''}" data-action="select-item" data-item-id="all-disciplines"><span class="chevron hidden"></span><span class="node-label font-bold">All Disciplines</span></div>`;
    disciplines.slice().sort((a, b) => a.discipline_id.localeCompare(b.discipline_id)).forEach(d => {
        const isExpanded = expandedNodes[d.discipline_id];
        html += `<div class="tree-node ${selectedItemId === d.discipline_id ? 'active' : ''}" data-action="select-item" data-item-id="${d.discipline_id}"><svg class="chevron ${isExpanded ? 'expanded' : ''}" data-action="toggle-node" data-node-id="${d.discipline_id}" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg><span class="node-label">${d.name}</span></div>`;
        if (isExpanded) {
            html += `<div class="node-children">`;
            const caps = capabilities[d.discipline_id] || [];
            caps.slice().sort((a, b) => a.capability_id.localeCompare(b.capability_id)).forEach(c => {
                const capIsExpanded = expandedNodes[c.capability_id];
                html += `<div class="tree-node ${selectedItemId === c.capability_id ? 'active' : ''}" data-action="select-item" data-item-id="${c.capability_id}"><svg class="chevron ${capIsExpanded ? 'expanded' : ''}" data-action="toggle-node" data-node-id="${c.capability_id}" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg><span class="node-label">${c.name}</span></div>`;
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
    return html;
}

function renderMaturityTable(state) {
    const selectedItem = findItemInModel(state.modeling.selectedItemId);
    if (!selectedItem) return '<p>Select an item from the tree.</p>';
    const itemsToDisplay = getChildren(selectedItem);
    if (!Array.isArray(itemsToDisplay) || itemsToDisplay.length === 0) return '<p class="text-secondary p-4 text-center">No sub-items to display.</p>';
    let tableHTML = `<table class="maturity-table"><thead><tr><th>Name</th><th class="stage-cell">As-Is</th><th class="stage-cell">To-Be</th><th class="score-cell">Gap</th></tr></thead><tbody>`;
    itemsToDisplay.sort((a, b) => a.name.localeCompare(b.name)).forEach(item => {
        const scores = getDisplayScores(item, state.assessmentScores);
        const gap = scores.target - scores.current;
        const gapClass = gap > 0.1 ? 'gap-positive' : (gap < -0.1 ? 'gap-negative' : '');
        tableHTML += `<tr data-action="select-item" data-item-id="${item.id}"><td>${item.name}</td><td class="stage-cell">${scores.current.toFixed(1)}</td><td class="stage-cell">${scores.target.toFixed(1)}</td><td class="score-cell ${gapClass}">${gap.toFixed(1)}</td></tr>`;
    });
    return tableHTML + `</tbody></table>`;
}

function renderEnrichedContentCard(state) {
    const item = findItemInModel(state.modeling.selectedItemId);
    if (!item || !item.id) return '<div class="p-8 text-center text-secondary">Please select an item from the Value Creation Canvas to see details.</div>';

    // --- Data Preparation ---
    const scores = getDisplayScores(item, state.assessmentScores);
    const ariaScores = getDisplayScores(item, { 'ARIA': state.assessmentScores['ARIA'] || {} }); // Isolate ARIA scores
    const [currentLevelName, targetLevelName] = [getMaturityLevelName(scores.current), getMaturityLevelName(scores.target)];
    
    // Create a plausible benefits statement from the item description for the mockup
    const benefits = (item.description || "No benefits statement available.")
        .split('. ')
        .filter(s => s.length > 10)
        .map(s => `<li><strong>${s.split(' ')[0]} ${s.split(' ')[1]}:</strong> ${s.substring(s.indexOf(' ') + 1)}</li>`)
        .join('');

    // --- Maturity Stages Table ---
    const benchmarkData = { label: "Benchmark: Employee Attrition Rate", values: ["> 20%", "15-20%", "10-15%", "5-10%", "< 5%"] };
    const characteristicsHTML = summaryMaturityLevels.map(desc => `<div class="maturity-grid-cell">${desc.split(': ')[1]}</div>`).join('');
    const benchmarkHTML = benchmarkData.values.map(val => `<div class="maturity-grid-cell">${val}</div>`).join('');
    const stageHeadersHTML = maturityStageNames.map(name => `<div class="maturity-grid-header">${name}</div>`).join('');

    // --- ARIA Indicators for Slider ---
    const ariaAsIsPosition = (ariaScores.current / 5) * 100;
    const ariaToBePosition = (ariaScores.target / 5) * 100;
    
    const ariaIndicatorHTML = `
        <div class="aria-indicator-container">
            <div class="aria-indicator-label as-is" style="left: ${ariaAsIsPosition}%">ARIA As-Is</div>
            <div class="aria-indicator as-is" style="left: ${ariaAsIsPosition}%"></div>
            <div class="aria-indicator-label to-be" style="left: ${ariaToBePosition}%">ARIA To-Be</div>
            <div class="aria-indicator to-be" style="left: ${ariaToBePosition}%"></div>
        </div>
    `;

    return `
        <div class="compass-card description-card">
            <h3 class="text-2xl font-bold mb-6">${item.name}</h3>

            <!-- Top Section: Description & Benefits -->
            <div class="description-benefits-grid">
                <div class="description-pane">
                    <div>
                        <h4 class="info-label">Description</h4>
                        <p class="info-box">${item.description || 'N/A'}</p>
                    </div>
                    <div>
                        <h4 class="info-label">Control Question</h4>
                        <p class="info-box">${item.controlQuestion || 'N/A'}</p>
                    </div>
                </div>
                <div class="benefits-pane">
                    <h4 class="info-label">Benefits Statement</h4>
                    <ul class="info-box benefits-list">${benefits}</ul>
                </div>
            </div>

            <!-- Middle Section: Slider -->
            <div class="dual-slider-component-v2">
                ${ariaIndicatorHTML}
                <div class="dual-slider-track-container">
                    <div class="dual-slider-track"></div>
                    <input type="range" min="0" max="5" value="${scores.current}" step="0.1" class="dual-slider-range-input as-is" data-action="update-score" data-item-id="${item.id}" data-type="current" title="Current State: ${scores.current.toFixed(1)}">
                    <input type="range" min="0" max="5" value="${scores.target}" step="0.1" class="dual-slider-range-input to-be" data-action="update-score" data-item-id="${item.id}" data-type="target" title="Target State: ${scores.target.toFixed(1)}">
                </div>
                <div class="dual-slider-header mt-2">
                    <div class="dual-slider-labels">
                        <span class="text-xs font-semibold text-gray-500">CURRENT STATE</span>
                        <div class="dual-slider-values" id="current-value-display">${scores.current.toFixed(1)} <span class="value-text">${currentLevelName}</span></div>
                    </div>
                    <div class="dual-slider-labels text-right">
                        <span class="text-xs font-semibold text-gray-500">TARGET STATE</span>
                        <div class="dual-slider-values" id="target-value-display">${scores.target.toFixed(1)} <span class="value-text">${targetLevelName}</span></div>
                    </div>
                </div>
            </div>
            
            <!-- Bottom Section: Maturity Table -->
            <div class="maturity-grid-container">
                <div class="maturity-grid-label-cell">Stage</div>
                <div class="maturity-grid-content-area">${stageHeadersHTML}</div>

                <div class="maturity-grid-label-cell">Characteristics</div>
                <div class="maturity-grid-content-area">${characteristicsHTML}</div>

                <div class="maturity-grid-label-cell">${benchmarkData.label}</div>
                <div class="maturity-grid-content-area">${benchmarkHTML}</div>
            </div>
        </div>
    `;
}

function drawRadarChart(state) {
    const ctx = document.getElementById('modeling-radar-chart')?.getContext('2d');
    if (!ctx) return;
    if (window.chartInstance) window.chartInstance.destroy();
    const selectedItem = findItemInModel(state.modeling.selectedItemId);
    if (!selectedItem || !state.selectedAssessmentId) return;
    const itemsToChart = getChildren(selectedItem);
    if (!Array.isArray(itemsToChart) || itemsToChart.length === 0) { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); return; }
    const labels = itemsToChart.map(i => i.name);
    const asIsData = itemsToChart.map(i => getDisplayScores(i, state.assessmentScores).current);
    const toBeData = itemsToChart.map(i => getDisplayScores(i, state.assessmentScores).target);
    const styles = getComputedStyle(document.body);

    window.chartInstance = new Chart(ctx, { type: 'radar', data: { labels, datasets: [ { label: 'As-Is', data: asIsData, borderColor: '#6d28d9', backgroundColor: 'rgba(109, 40, 217, 0.2)', borderWidth: 2, pointBackgroundColor: '#6d28d9', fill: true }, { label: 'To-Be', data: toBeData, borderColor: '#059669', backgroundColor: 'rgba(5, 150, 105, 0.2)', borderWidth: 2, pointBackgroundColor: '#059669', fill: true } ]}, 
    options: { 
        responsive: true, maintainAspectRatio: false,
        scales: { r: { 
            beginAtZero: true, max: 5, stepSize: 1, 
            pointLabels: { 
                font: { weight: 'bold', size: 11 },
                color: styles.getPropertyValue('--text-secondary').trim(),
                backdropColor: styles.getPropertyValue('--bg-card').trim(),
                backdropPadding: 2
            }, 
            grid: { color: styles.getPropertyValue('--border-color').trim() }, 
            angleLines: { color: styles.getPropertyValue('--border-color').trim() }, 
            ticks: { 
                backdropColor: styles.getPropertyValue('--bg-card').trim(), 
                color: styles.getPropertyValue('--text-primary').trim(),
                z: 1
            }
        }}, 
        plugins: { 
            legend: { position: 'bottom', labels: { color: styles.getPropertyValue('--text-primary').trim() } }
        } 
    }});
}

// ... (All other helper and event listener functions remain the same)
function getDisplayScores(item, allScoresBySource) {
    const persona = PERSONAS[loadState().activePersona] || { name: 'Unknown User' };
    const userScores = allScoresBySource[persona.name] || {};
    const ariaScores = allScoresBySource['ARIA'] || {};
    const directUserScore = userScores[item.id];
    if (directUserScore) return directUserScore;
    const directAriaScore = ariaScores[item.id];
    if (directAriaScore) return directAriaScore;
    const children = getChildren(item);
    if (children.length === 0) return { current: 0, target: 0 };
    const childScores = children.map(child => getDisplayScores(child, allScoresBySource));
    const totalCurrent = childScores.reduce((sum, s) => sum + s.current, 0);
    const totalTarget = childScores.reduce((sum, s) => sum + s.target, 0);
    return { current: totalCurrent / childScores.length, target: totalTarget / childScores.length };
}
function findItemInModel(id) {
    const state = loadState();
    const { disciplines, capabilities, levers } = state.maturityModelData;
    if (!id || id === 'all-disciplines') return { id: 'all-disciplines', name: 'All Disciplines', type: 'root', controlQuestion: 'An overview of the entire maturity model.' };
    for (const d of (disciplines || [])) {
        if (d.discipline_id === id) return { ...d, id: d.discipline_id, name: d.name, type: 'discipline', controlQuestion: d.description };
        for (const c of (Object.values(capabilities).flat() || [])) {
            if (c.capability_id === id) return { ...c, id: c.capability_id, name: c.name, type: 'capability', controlQuestion: c.control_question };
        }
        for (const l of (Object.values(levers).flat() || [])) {
            if (l.lever_id === id) return { ...l, id: l.lever_id, name: l.name, type: 'lever', controlQuestion: l.control_question };
        }
    }
    return null;
}
function findParent(itemId) {
    const state = loadState();
    const { capabilities, levers } = state.maturityModelData;
    for (const capList of Object.values(capabilities)) {
        for (const c of capList) {
            if (c.capability_id === itemId) return findItemInModel(c.discipline_id);
        }
    }
    for (const leverList of Object.values(levers)) {
        for (const l of leverList) {
            if (l.lever_id === itemId) return findItemInModel(l.capability_id);
        }
    }
    return null;
}
function getChildren(item) {
    const state = loadState();
    const { disciplines, capabilities, levers } = state.maturityModelData;
    if (!item) return [];
    let children = [];
    switch (item.type) {
        case 'root': children = (disciplines || []).map(d => findItemInModel(d.discipline_id)); break;
        case 'discipline': children = (capabilities[item.id] || []).map(c => findItemInModel(c.capability_id)); break;
        case 'capability': children = (levers[item.id] || []).map(l => findItemInModel(l.lever_id)); break;
        default: children = [];
    }
    return children.filter(child => child != null);
}
function getMaturityLevelName(score) {
    if (score >= 4.5) return maturityStageNames[3];
    if (score >= 3.5) return maturityStageNames[2];
    if (score >= 2.5) return maturityStageNames[1];
    if (score >= 1.5) return maturityStageNames[0];
    return "Initial"; // Keep initial as a fallback for scores < 1.5
}
function getMaturityLevelDescription(score) {
    if (score >= 4.5) return summaryMaturityLevels[3];
    if (score >= 3.5) return summaryMaturityLevels[2];
    if (score >= 2.5) return summaryMaturityLevels[1];
    if (score >= 1.5) return summaryMaturityLevels[0];
    return "The initial stage before formal processes are established.";
}
function initializeModelingEventListeners() {
    const mainContent = document.getElementById('main-content');
    mainContent.addEventListener('click', async (e) => {
        const target = e.target.closest('[data-action]');
        if (!target) return;
        let state = loadState();
        const action = target.dataset.action;
        if (action === 'select-assessment') {
            const newAssessmentId = target.dataset.assessmentId;
            if (state.selectedAssessmentId != newAssessmentId) {
                state.selectedAssessmentId = newAssessmentId;
                saveState(state);
                await loadAssessmentScores(newAssessmentId);
                renderCompassPageV3(loadState());
            }
        }
        if (action === 'select-item' || action === 'toggle-node') {
            e.stopPropagation();
            const nodeId = target.dataset.nodeId || target.dataset.itemId;
            if (action === 'toggle-node') state.modeling.expandedNodes[nodeId] = !state.modeling.expandedNodes[nodeId];
            else if (state.modeling.selectedItemId !== nodeId) state.modeling.selectedItemId = nodeId;
            saveState(state);
            renderCompassPageV3(loadState());
        }
        if (action === 'create-new-assessment') {
            const versionName = prompt("Enter a name for the new assessment (e.g., 'Q4 2025 Baseline'):");
            if (versionName) {
                const payload = { portfolio_company_id: state.selectedCompanyId, version_name: versionName, version_description: "" };
                try {
                    const response = await fetch('/api/assessments', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                    if (!response.ok) throw new Error('Failed to create assessment');
                    const newAssessment = await response.json();
                    state.selectedAssessmentId = newAssessment.assessment_id;
                    saveState(state);
                    await initializeModelingPage();
                } catch (error) { console.error("Error creating new assessment:", error); alert("Could not create the new assessment."); }
            }
        }
    });
    mainContent.addEventListener('input', (e) => {
        const target = e.target;
        if (target.dataset.action === 'update-score') {
            let state = loadState();
            const { itemId, type } = target.dataset;
            const value = parseFloat(target.value);
            const item = findItemInModel(itemId);
            if (!item) return;
            
            // Debounce the save and full re-render
            clearTimeout(window.saveDebounce);
            window.saveDebounce = setTimeout(() => {
                saveAssessmentScore(state.selectedAssessmentId, item, type, value).then(() => {
                    // Re-render the whole page to ensure all calculated averages are updated
                    renderCompassPageV3(loadState());
                });
            }, 250); // A shorter delay for better responsiveness
        }
    });
}