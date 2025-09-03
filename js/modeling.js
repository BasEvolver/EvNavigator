// js/modeling.js - Logic for the new Maturity Modeling Canvas V7 (API Integration - FINAL, CORRECTED)

// This demo data will eventually be replaced by API-fetched scores from a source_id='aria'
const ariaAssessments = {
    'techflow-solutions': { 'C130': { as_is: 1.4, to_be: 4.1 }, 'D-111': { as_is: 2.0, to_be: 3.5 }, 'D-112': { as_is: 1.5, to_be: 4.0 }, 'D-131': { as_is: 1.2, to_be: 4.2 }, },
    'cloudvantage': { 'C130': { as_is: 3.8, to_be: 4.8 }, 'D-131': { as_is: 3.5, to_be: 4.9 }, }
};

// A fallback for maturity descriptions until the rubric API is fully integrated.
const summaryMaturityLevels = [
    "Initial: Processes are ad-hoc, chaotic, or undefined. Success depends on individual effort.", "Reactive: Basic processes are established, but often reactive. Some consistency, but limited foresight.", "Organized: Processes are documented and somewhat standardized. Proactive measures are taken.", "Platform-led: Processes are integrated, automated, and driven by technology platforms. Data-driven decisions.", "Intelligent: Processes are optimized, self-improving, and leverage advanced analytics/AI for strategic advantage."
];

document.addEventListener('DOMContentLoaded', async () => {
    if (Navigation.getCurrentPage() === 'modeling') {
        await initializeModelingPage();
    }
});

async function initializeModelingPage() {
    let state = loadState();
    const urlParams = new URLSearchParams(window.location.search);
    const companyIdFromUrl = urlParams.get('company');
    const companyId = companyIdFromUrl || (state.selectedCompanyId && state.selectedCompanyId !== 'all' ? state.selectedCompanyId : 'techflow-solutions');
    
    if (state.selectedCompanyId !== companyId) {
        state.selectedCompanyId = companyId;
        state.selectedAssessmentId = null;
        saveState(state);
    }

    await loadSharedComponents();
    
    // Call the new, efficient data loading functions
    await loadMaturityModelFromAPI();
    await loadAvailableAssessments(state.selectedCompanyId);

    state = loadState(); // Reload state after async operations
    if (!state.selectedAssessmentId && state.availableAssessments.length > 0) {
        state.selectedAssessmentId = state.availableAssessments[0].assessment_id;
        saveState(state);
    }
    
    if (state.selectedAssessmentId) {
        await loadAssessmentScores(state.selectedAssessmentId);
    }

    renderModelingPage(loadState());
    initializeModelingEventListeners();
}

// --- API FETCHERS ---

// UPDATED to be fast and efficient
async function loadMaturityModelFromAPI() {
    let state = loadState();
    if (state.maturityModelData && state.maturityModelData.disciplines.length > 0) return;

    try {
        // 1. Make a SINGLE API call
        const response = await fetch('/api/get-full-model');
        if (!response.ok) throw new Error('Failed to fetch the full model');
        const fullModel = await response.json();

        // 2. Restructure the flat arrays into the nested object format our code expects
        const structuredModel = {
            disciplines: fullModel.disciplines,
            capabilities: {},
            levers: {}
        };

        for (const cap of fullModel.capabilities) {
            if (!structuredModel.capabilities[cap.discipline_id]) {
                structuredModel.capabilities[cap.discipline_id] = [];
            }
            structuredModel.capabilities[cap.discipline_id].push(cap);
        }

        for (const lever of fullModel.levers) {
            if (!structuredModel.levers[lever.capability_id]) {
                structuredModel.levers[lever.capability_id] = [];
            }
            structuredModel.levers[lever.capability_id].push(lever);
        }
        
        state.maturityModelData = structuredModel;
        saveState(state);
        console.log("Successfully fetched and processed full model in one request.");
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
            if (score.source_id.toLowerCase().includes('user') || score.source_id.toLowerCase().includes('croft')) {
                transformedScores[score.lever_id] = { current: score.as_is_score, target: score.to_be_score };
            }
        });
        state.assessmentScores = transformedScores;
        saveState(state);
    } catch (error) {
        console.error(`Error loading scores for assessment ${assessmentId}:`, error);
        state.assessmentScores = {};
        saveState(state);
    }
}

async function saveAssessmentScore(assessmentId, leverId, type, value) {
    let state = loadState();
    const existingScores = state.assessmentScores[leverId] || { current: 0, target: 0 };
    const persona = PERSONAS[state.activePersona] || { name: 'Unknown User' };

    const payload = {
        assessment_id: parseInt(assessmentId, 10),
        lever_id: leverId,
        source_id: persona.name,
        as_is_score: type === 'current' ? value : existingScores.current,
        to_be_score: type === 'target' ? value : existingScores.target,
        as_is_rationale: null, as_is_confidence_score: null, as_is_confidence_rationale: null, to_be_rationale: null
    };

    try {
        const response = await fetch('/api/scores', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        if (!response.ok) { throw new Error(`HTTP error ${response.status}: ${await response.text()}`); }
        const savedScore = await response.json();
        
        state = loadState();
        state.assessmentScores[leverId] = { current: savedScore.as_is_score, target: savedScore.to_be_score };
        saveState(state);
    } catch (error) {
        console.error("Error saving score:", error);
    }
}

// --- MAIN RENDERER ---
function renderModelingPage(state) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `<div class="modeling-container"><div class="modeling-pane modeling-left-pane" id="modeling-left-pane"></div><div class="modeling-pane modeling-right-pane" id="modeling-right-pane"></div></div>`;
    renderRightPane(state);
    updateDynamicPanes(state);
}

function updateDynamicPanes(state) {
    renderLeftPane(state);
    drawRadarChart(state);
}

// --- PANE RENDERERS ---
function renderRightPane(state) {
    const rightPane = document.getElementById('modeling-right-pane');
    const { selectedCompanyId, availableAssessments, selectedAssessmentId } = state;
    const companySelectHtml = `<div class="mb-4 flex items-center space-x-2"><label for="company-select" class="text-sm font-medium text-secondary">Company:</label><select id="company-select" class="form-select text-sm p-1 rounded-md bg-bg-secondary border border-border-color" data-action="select-company"><option value="techflow-solutions" ${selectedCompanyId === 'techflow-solutions' ? 'selected' : ''}>TechFlow Solutions</option><option value="cloudvantage" ${selectedCompanyId === 'cloudvantage' ? 'selected' : ''}>CloudVantage</option></select><label for="assessment-select" class="text-sm font-medium text-secondary ml-4">Assessment:</label><select id="assessment-select" class="form-select text-sm p-1 rounded-md bg-bg-secondary border border-border-color" data-action="select-assessment">${availableAssessments.map(a => `<option value="${a.assessment_id}" ${a.assessment_id == selectedAssessmentId ? 'selected' : ''}>${a.version_name}</option>`).join('')}${availableAssessments.length === 0 ? '<option disabled>No assessments found</option>' : ''}</select><button class="btn-primary text-sm ml-auto" data-action="create-new-assessment">New Assessment</button></div>`;
    rightPane.innerHTML = `<div class="modeling-card h-full"><h2 class="text-xl font-bold mb-2">Value Creation Canvas</h2>${companySelectHtml}<div class="tree-view-container">${renderTreeView(state)}</div></div>`;
}

function renderLeftPane(state) {
    const leftPane = document.getElementById('modeling-left-pane');
    const { selectedItemId } = state.modeling;
    const item = findItemInModel(selectedItemId);
    if (!item) return;
    const title = item.type === 'lever' ? (findParent(selectedItemId)?.name || 'Lever') : item.name;
    leftPane.innerHTML = `<div class="modeling-card radar-card"><div class="radar-table-grid"><div class="radar-chart-container"><h3 class="radar-chart-title">${title}</h3><canvas id="modeling-radar-chart"></canvas></div><div class="maturity-table-container">${renderMaturityTable(state)}</div></div></div><div class="aria-perspective-card"><div class="aria-perspective-header"><h3>ARIA's Perspective</h3><button class="reset-button" title="Reset to default scores" disabled><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg></button></div><div id="aria-perspective-content">${generateAriaPerspective(state)}</div></div><div class="modeling-card description-card"><h3 class="text-lg font-bold">${item.name}</h3><p class="text-sm text-secondary mt-1">${item.controlQuestion || 'Select an item to see its details.'}</p>${renderDualSlider(state)}</div>`;
}

function renderMaturityTable(state) {
    const { selectedItemId } = state.modeling;
    const assessmentScores = state.assessmentScores;
    const selectedItem = findItemInModel(selectedItemId);
    if (!selectedItem) return '<p>Select an item from the tree.</p>';
    
    const itemsToDisplay = getChildren(selectedItem);
    if (!Array.isArray(itemsToDisplay)) return '<p class="text-secondary p-4">Could not load items for this view.</p>';

    let tableHTML = `<table class="maturity-table"><thead><tr><th>Name</th><th class="stage-cell">As-Is Stage</th><th class="stage-cell">To-Be Stage</th><th class="score-cell">Gap</th></tr></thead><tbody>`;
    itemsToDisplay.sort((a, b) => a.name.localeCompare(b.name)).forEach(item => {
        const scores = calculateAverage(item, assessmentScores);
        const gap = scores.target - scores.current;
        const gapClass = gap > 0.1 ? 'gap-positive' : (gap < -0.1 ? 'gap-negative' : '');
        tableHTML += `<tr data-action="select-item" data-item-id="${item.id}"><td>${item.name}</td><td class="stage-cell">${getMaturityLevelName(scores.current)}</td><td class="stage-cell">${getMaturityLevelName(scores.target)}</td><td class="score-cell ${gapClass}">${gap.toFixed(1)}</td></tr>`;
    });
    return tableHTML + `</tbody></table>`;
}

function renderDualSlider(state) {
    const { selectedItemId } = state.modeling;
    const { assessmentScores, selectedAssessmentId, selectedCompanyId } = state;
    const item = findItemInModel(selectedItemId);
    if (!item || !selectedAssessmentId) return `<div class="p-4 text-secondary text-center">Please select an assessment to view and edit scores.</div>`;
    
    const isLever = item.type === 'lever';
    const scores = calculateAverage(item, assessmentScores);
    const [currentLevelName, targetLevelName] = [getMaturityLevelName(scores.current), getMaturityLevelName(scores.target)];
    const [currentDescription, targetDescription] = [getMaturityLevelDescription(scores.current), getMaturityLevelDescription(scores.target)];
    const ariaScores = ariaAssessments[selectedCompanyId]?.[selectedItemId];
    let ariaIndicatorHTML = '';
    if (ariaScores) {
        const asIsPercent = (ariaScores.as_is / 5) * 100;
        const toBePercent = (ariaScores.to_be / 5) * 100;
        ariaIndicatorHTML = `<div class="aria-indicator-container"><div class="aria-indicator as-is" style="left: ${asIsPercent}%;" title="Aria As-Is: ${ariaScores.as_is.toFixed(1)}"></div><div class="aria-indicator to-be" style="left: ${toBePercent}%;" title="Aria To-Be: ${ariaScores.to_be.toFixed(1)}"></div></div>`;
    }
    const sliderDisabledAttribute = isLever ? '' : 'disabled';
    return `<div class="dual-slider-component"><div class="dual-slider-header"><div class="dual-slider-labels" data-action="activate-slider" data-type="current">CURRENT STATE <div class="dual-slider-values" id="current-value-display">${scores.current.toFixed(1)} <span class="value-text">${currentLevelName}</span></div></div><div class="dual-slider-labels text-right" data-action="activate-slider" data-type="target">TARGET STATE <div class="dual-slider-values" id="target-value-display">${scores.target.toFixed(1)} <span class="value-text">${targetLevelName}</span></div></div></div>${ariaIndicatorHTML}<div class="dual-slider-track-container ${isLever ? '' : 'disabled-slider'}"><div class="dual-slider-track"></div><input type="range" min="0" max="5" value="${scores.current}" step="0.1" class="dual-slider-range-input as-is" data-action="update-score" data-item-id="${selectedItemId}" data-type="current" ${sliderDisabledAttribute}><input type="range" min="0" max="5" value="${scores.target}" step="0.1" class="dual-slider-range-input to-be" data-action="update-score" data-item-id="${selectedItemId}" data-type="target" ${sliderDisabledAttribute}></div><div class="dual-slider-descriptions"><div class="slider-description-box" id="current-desc-display">${currentDescription}</div><div class="slider-description-box" id="target-desc-display">${targetDescription}</div></div>${!isLever ? '<p class="text-sm text-secondary mt-2 text-center">Select a specific Lever to adjust its scores.</p>' : ''}</div>`;
}

// CORRECTED to use the right property names and ID-Name format
function renderTreeView(state) {
    const { expandedNodes, selectedItemId } = state.modeling;
    const { disciplines, capabilities, levers } = state.maturityModelData;
    if (!disciplines || disciplines.length === 0) return '<div class="p-4 text-secondary">Loading model...</div>';
    let html = `<div class="tree-node ${selectedItemId === 'all-disciplines' ? 'active' : ''}" data-action="select-item" data-item-id="all-disciplines"><span class="chevron hidden"></span><span class="node-label font-bold">All Disciplines</span></div>`;
    disciplines.slice().sort((a, b) => a.discipline_id.localeCompare(b.discipline_id)).forEach(d => {
        const isExpanded = expandedNodes[d.discipline_id];
        html += `<div class="tree-node ${selectedItemId === d.discipline_id ? 'active' : ''}" data-action="select-item" data-item-id="${d.discipline_id}"><svg class="chevron ${isExpanded ? 'expanded' : ''}" data-action="toggle-node" data-node-id="${d.discipline_id}" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg><span class="node-label">${d.discipline_id} - ${d.name}</span></div>`;
        if (isExpanded) {
            html += `<div class="node-children">`;
            const caps = capabilities[d.discipline_id] || [];
            caps.slice().sort((a, b) => a.capability_id.localeCompare(b.capability_id)).forEach(c => {
                const capIsExpanded = expandedNodes[c.capability_id];
                html += `<div class="tree-node ${selectedItemId === c.capability_id ? 'active' : ''}" data-action="select-item" data-item-id="${c.capability_id}"><svg class="chevron ${capIsExpanded ? 'expanded' : ''}" data-action="toggle-node" data-node-id="${c.capability_id}" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg><span class="node-label">${c.capability_id} - ${c.name}</span></div>`;
                if (capIsExpanded) {
                    html += `<div class="node-children">`;
                    const levs = levers[c.capability_id] || [];
                    levs.slice().sort((a, b) => a.lever_id.localeCompare(b.lever_id)).forEach(l => {
                        html += `<div class="tree-node ${selectedItemId === l.lever_id ? 'active' : ''}" data-action="select-item" data-item-id="${l.lever_id}"><span class="chevron hidden"></span><span class="node-label">${l.lever_id} - ${l.name}</span></div>`;
                    });
                    html += `</div>`;
                }
            });
            html += `</div>`;
        }
    });
    return html;
}

// --- ARIA'S PERSPECTIVE GENERATOR ---
function generateAriaPerspective(state) {
    const { selectedItemId } = state.modeling;
    const { selectedCompanyId, assessmentScores, selectedAssessmentId } = state;
    if (!selectedAssessmentId) return '<p>Select an assessment to see ARIA\'s perspective.</p>';
    const item = findItemInModel(selectedItemId);
    if (!item) return '';
    const scores = calculateAverage(item, assessmentScores);
    const gap = scores.target - scores.current;
    let html = `<h4>On ${item.name}</h4><p class="mt-2">For <strong>${selectedCompanyId === 'techflow-solutions' ? 'TechFlow Solutions' : 'CloudVantage'}</strong>, bridging the gap from <strong>Level ${scores.current.toFixed(1)}</strong> to <strong>${scores.target.toFixed(1)}</strong> is important.</p>`;
    if (item.type !== 'lever') {
        const leversWithGaps = getLeversRecursive(item).map(l => ({ ...l, score: assessmentScores[l.id] || { current: 0, target: 0 } })).map(l => ({ ...l, gap: l.score.target - l.score.current })).filter(l => l.gap > 0.1).sort((a, b) => b.gap - a.gap);
        if (leversWithGaps.length > 0) html += `<p class="mt-4">The highest priority should be on these levers:</p><ul class="list-disc pl-5 mt-2 space-y-1">${leversWithGaps.slice(0, 3).map(l => `<li><strong>${l.name}</strong> (Gap of ${l.gap.toFixed(1)})</li>`).join('')}</ul>`;
        else html += `<p class="mt-4">All underlying levers currently meet their target maturity levels.</p>`;
    } else {
        html += `<p class="mt-4">The immediate next step is achieving the characteristics of <strong>Level ${Math.floor(scores.current) + 1}</strong>.</p>`;
    }
    return html;
}

// --- CHART & DATA HELPERS ---
let chartInstance = null;
function drawRadarChart(state) {
    const ctx = document.getElementById('modeling-radar-chart')?.getContext('2d');
    if (!ctx) return;
    if (chartInstance) chartInstance.destroy();
    const { selectedItemId } = state.modeling;
    const { assessmentScores, selectedAssessmentId } = state;
    const selectedItem = findItemInModel(selectedItemId);
    if (!selectedItem || !selectedAssessmentId) return;
    const itemsToChart = getChildren(selectedItem);
    if (!Array.isArray(itemsToChart) || itemsToChart.length === 0) { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); return; }
    const labels = itemsToChart.map(i => i.name);
    const asIsData = itemsToChart.map(i => calculateAverage(i, assessmentScores).current);
    const toBeData = itemsToChart.map(i => calculateAverage(i, assessmentScores).target);
    const styles = getComputedStyle(document.body);
    chartInstance = new Chart(ctx, { type: 'radar', data: { labels, datasets: [ { label: 'As-Is', data: asIsData, borderColor: styles.getPropertyValue('--purple').trim(), backgroundColor: 'rgba(108, 101, 205, 0.2)', borderWidth: 2, pointBackgroundColor: styles.getPropertyValue('--purple').trim(), fill: true }, { label: 'To-Be', data: toBeData, borderColor: styles.getPropertyValue('--accent-blue').trim(), backgroundColor: 'rgba(72, 170, 221, 0.2)', borderWidth: 2, pointBackgroundColor: styles.getPropertyValue('--accent-blue').trim(), fill: true } ]}, options: { responsive: true, maintainAspectRatio: false, scales: { r: { beginAtZero: true, max: 5, stepSize: 1, pointLabels: { color: styles.getPropertyValue('--text-secondary').trim() }, grid: { color: styles.getPropertyValue('--border-color').trim() }, angleLines: { color: styles.getPropertyValue('--border-color').trim() }, ticks: { backdropColor: styles.getPropertyValue('--bg-card').trim(), color: styles.getPropertyValue('--text-primary').trim(), }}}, plugins: { legend: { position: 'bottom', labels: { color: styles.getPropertyValue('--text-primary').trim() }}} }});
}

// CORRECTED HELPER FUNCTIONS that use the right property names
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

// CORRECTED HELPER with safety filter
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
    return children.filter(child => child != null); // CRITICAL FIX
}

function getLeversRecursive(item) {
    if (!item) return [];
    if (item.type === 'lever') return [item];
    return getChildren(item).flatMap(getLeversRecursive);
}

function calculateAverage(item, assessmentData) {
    if (!assessmentData) return { current: 0, target: 0 };
    if (item.type === 'lever') return assessmentData[item.id] || { current: 0, target: 0 };
    const childLevers = getLeversRecursive(item);
    if (childLevers.length === 0) return { current: 0, target: 0 };
    const scores = childLevers.map(l => assessmentData[l.id] || { current: 0, target: 0 });
    const totalCurrent = scores.reduce((sum, s) => sum + s.current, 0);
    const totalTarget = scores.reduce((sum, s) => sum + s.target, 0);
    return { current: scores.length > 0 ? totalCurrent / scores.length : 0, target: scores.length > 0 ? totalTarget / scores.length : 0 };
}

function getMaturityLevelName(score) {
    if (score >= 4.5) return "Intelligent"; if (score >= 3.5) return "Platform-led"; if (score >= 2.5) return "Organized"; if (score >= 1.5) return "Reactive"; return "Initial";
}

function getMaturityLevelDescription(score) {
    const roundedScore = Math.round(score);
    if (roundedScore >= 5) return summaryMaturityLevels[4]; if (roundedScore >= 4) return summaryMaturityLevels[3]; if (roundedScore >= 3) return summaryMaturityLevels[2]; if (roundedScore >= 2) return summaryMaturityLevels[1]; return summaryMaturityLevels[0];
}

// --- EVENT LISTENERS ---
function initializeModelingEventListeners() {
    const mainContent = document.getElementById('main-content');
    
    mainContent.addEventListener('click', async (e) => {
        const target = e.target.closest('[data-action]');
        if (!target) return;
        let state = loadState();
        const action = target.dataset.action;

        if (action === 'select-item' || action === 'toggle-node') {
            e.stopPropagation();
            const nodeId = target.dataset.nodeId || target.dataset.itemId;
            if (action === 'toggle-node') state.modeling.expandedNodes[nodeId] = !state.modeling.expandedNodes[nodeId];
            else if (state.modeling.selectedItemId !== nodeId) state.modeling.selectedItemId = nodeId;
            saveState(state);
            renderRightPane(state);
            updateDynamicPanes(state);
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
    
    mainContent.addEventListener('change', async (e) => {
        const target = e.target.closest('[data-action]');
        if (!target) return;
        let state = loadState();
        if (target.dataset.action === 'select-company') window.location.search = `?company=${target.value}`;
        if (target.dataset.action === 'select-assessment') {
            if (state.selectedAssessmentId != target.value) {
                state.selectedAssessmentId = target.value;
                saveState(state);
                await loadAssessmentScores(target.value);
                renderModelingPage(loadState());
            }
        }
    });

    mainContent.addEventListener('input', (e) => {
        const target = e.target;
        if (target.dataset.action === 'update-score') {
            let state = loadState();
            const { itemId, type } = target.dataset;
            const value = parseFloat(target.value);
            const displayId = type === 'current' ? '#current-value-display' : '#target-value-display';
            const descId = type === 'current' ? '#current-desc-display' : '#target-desc-display';
            target.closest('.dual-slider-component').querySelector(displayId).innerHTML = `${value.toFixed(1)} <span class="value-text">${getMaturityLevelName(value)}</span>`;
            target.closest('.dual-slider-component').querySelector(descId).textContent = getMaturityLevelDescription(value);
            
            clearTimeout(window.saveDebounce);
            window.saveDebounce = setTimeout(() => {
                saveAssessmentScore(state.selectedAssessmentId, itemId, type, value).then(() => {
                    clearTimeout(window.rerenderDebounce);
                    window.rerenderDebounce = setTimeout(() => {
                        const freshState = loadState();
                        document.querySelector('.maturity-table-container').innerHTML = renderMaturityTable(freshState);
                        drawRadarChart(freshState);
                    }, 150);
                });
            }, 500);
        }
    });
}