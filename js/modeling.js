// js/modeling.js - V7 (Corrected and Consolidated)


//const maturityStageNames = ["Reactive", "Organized", "Automated", "Platform-led", "Intelligent"]; // <-- ADD THIS LINE BACK

// Using your preferred icons
const disciplineIcons = {
'D1': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M15.803 8.25h.132a3.369 3.369 0 013.369 3.369V14.5M8.197 8.25h-.132A3.369 3.369 0 004.696 11.619V14.5m11.107-6.25a3.75 3.75 0 00-7.5 0" /></svg>`, 'D2': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.467-.22-2.121-.659-1.172-.879-1.172-2.303 0-3.182C10.536 7.78 11.268 7.561 12 7.561s1.464.219 2.121.578" /></svg>`,
    'D3': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg>`,
    'D4': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>`,
    'D5': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
    'D6': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>`,
    'D7': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0v3a3 3 0 01-3 3m-16.5-6a3 3 0 013 3v3a3 3 0 01-3-3v-3z" /></svg>`,
    'D8': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" /></svg>`,
    'D9': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3-12.5V21a.75.75 0 01-.75.75H6.75A.75.75 0 016 21V5.25a.75.75 0 01.75-.75H10.5m6-2.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-6-2.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-6 0V4.5a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75V6h-6z" /></svg>`
};

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
    renderCompassPageV3(loadState());
    initializeModelingEventListeners();
}

async function loadMaturityModelFromAPI() {
    let state = loadState();
    
    // Check if the core model is already loaded.
    if (state.maturityModelData && state.maturityModelData.disciplines && state.maturityModelData.disciplines.length > 0) {
        // Defensively ensure the caches exist, even if loading from an old state version.
        if (!state.maturityModelData.rubricCache) state.maturityModelData.rubricCache = {};
        if (!state.maturityModelData.roadmapCache) state.maturityModelData.roadmapCache = {};
        saveState(state);
        console.log("Core model data already in state. Skipping API call.");
        return;
    }

    try {
        console.log("Fetching core model structure from /api/get-full-model...");
        const response = await fetch('/api/get-full-model');
        if (!response.ok) throw new Error('Failed to fetch the core model');

        const fullModel = await response.json();

        const structuredModel = { 
            disciplines: fullModel.disciplines || [], 
            capabilities: {}, 
            levers: {},
            // Initialize EMPTY caches. Data will be loaded on-demand.
            rubricCache: {}, 
            roadmapCache: {}
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
        console.log("Successfully loaded and structured core model data.");

    } catch (error) {
        console.error("Fatal Error: Could not load maturity model from API.", error);
        document.getElementById('main-content').innerHTML = `<div class="p-8 text-center"><h1 class="text-2xl font-bold text-red-600">API Error</h1><p class="text-secondary mt-2">Could not load required maturity model data.</p></div>`;
    }
}

async function loadRubricForItem(itemId) {
    if (!itemId || itemId === 'all-disciplines') return;
    let state = loadState();
    if (state.maturityModelData.rubricCache[itemId]) return;

    try {
        const response = await fetch(`/api/rubric/${itemId}`);
        if (!response.ok) {
            // Throw a specific error with the status to be caught below
            throw new Error(`API responded with status ${response.status}`);
        }
        const rubricData = await response.json();
        state.maturityModelData.rubricCache[itemId] = rubricData.sort((a, b) => a.stage_number - b.stage_number);
        saveState(state);
    } catch (error) {
        console.error(`Error fetching rubric for ${itemId}:`, error);
        // THE FIX: Instead of an empty array, store an error object.
        state.maturityModelData.rubricCache[itemId] = { error: true, message: error.message };
        saveState(state);
    }
}

async function loadRoadmapForItem(itemId) {
    let state = loadState();
    const item = findItemInModel(itemId);
    if (!item || item.type !== 'lever') return;
    if (state.maturityModelData.roadmapCache[itemId]) return; // Already cached

    try {
        const response = await fetch(`/api/roadmap/${itemId}`);
        if (!response.ok) throw new Error(`API Error: Status ${response.status}`);
        const roadmapData = await response.json();
        state.maturityModelData.roadmapCache[itemId] = roadmapData;
        saveState(state);
    } catch (error) {
        console.error(`Error fetching roadmap for ${itemId}:`, error);
        state.maturityModelData.roadmapCache[itemId] = []; // Cache empty array on error
        saveState(state);
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

function renderCompassPageV3(state) {
    const { isVccCollapsed, isRightPaneCollapsed } = state.modeling;
    const mainContent = document.getElementById('main-content');
    
    // Add classes to the container based on state
    let containerClasses = 'compass-container';
    if (isVccCollapsed) containerClasses += ' vcc-collapsed';
    if (isRightPaneCollapsed) containerClasses += ' right-pane-collapsed';

    mainContent.innerHTML = `
        <div class="${containerClasses}">
            <div id="compass-left-pane" class="compass-pane collapsible-pane"></div>
            <div class="compass-pane" id="compass-center-pane"></div>
            <div id="compass-right-pane" class="compass-pane collapsible-pane"></div>
        </div>
    `;
    renderCompassLeftPaneV3(state);
    renderCompassCenterPaneV3(state);
    renderCompassRightPaneV3(state);
}

function renderCompassLeftPaneV3(state) {
    const { isVccCollapsed } = state.modeling;
    const leftPane = document.getElementById('compass-left-pane');

    const buttonIcon = isVccCollapsed 
        ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg>`;

    leftPane.innerHTML = `
        <div class="compass-card h-full">
            <div class="vcc-header">
                <h2 class="text-xl font-bold vcc-title">Value Creation Canvas</h2>
                <!-- NEW: Title for collapsed state -->
                <h2 class="text-xl font-bold vcc-title-collapsed">VCC</h2>
            </div>
            <div class="vcc-tree-container ${isVccCollapsed ? 'icon-only' : ''}">
                ${renderTreeView(state)}
            </div>
            <div class="vcc-footer">
                <button class="collapse-toggle-btn" data-action="toggle-vcc" title="${isVccCollapsed ? 'Expand Canvas' : 'Collapse Canvas'}">
                    ${buttonIcon}
                </button>
            </div>
        </div>`;
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

    const { isRightPaneCollapsed } = state.modeling;
    const title = item.type === 'lever' ? (findParent(item.id)?.name || 'Lever') : item.name;

    // --- THE FIX: Replaced with your new, preferred radar icon ---
    const radarIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <polygon points="12,2 20,8 20,16 12,22 4,16 4,8" />
        <polygon points="12,6 16,9 16,15 12,18 8,15 8,9" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 2v20M4 8l16 8M20 8L4 16" />
    </svg>`;
    
    const ariaIcon = `<img src="Evolver_Dark.png" alt="Aria" style="width: 32px; height: 32px; margin-bottom: 0.5rem;">`;
    
    const tableIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75z" />
    </svg>`;
    // --- END FIX ---

    const buttonIcon = isRightPaneCollapsed
        ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg>`;

    const actionWrapperStart = isRightPaneCollapsed ? `<div data-action="toggle-right-pane" class="h-full flex flex-col gap-6 cursor-pointer">` : `<div class="h-full flex flex-col gap-6">`;
    const actionWrapperEnd = `</div>`;

    rightPane.innerHTML = `
        ${actionWrapperStart}
            <div class="compass-card" style="height: 300px;">
                ${isRightPaneCollapsed ? `
                    <div class="card-icon-preview">${radarIcon} <span>Radar</span></div>
                ` : `
                    <div class="radar-chart-container h-full">
                        <h3 class="radar-chart-title">${title}</h3>
                        <canvas id="modeling-radar-chart"></canvas>
                    </div>
                `}
            </div>
            <div class="aria-perspective-card">
                ${isRightPaneCollapsed ? `
                    <div class="card-icon-preview">${ariaIcon} <span>ARIA</span></div>
                ` : `
                    <div class="aria-perspective-header"><h3>ARIA's Perspective</h3></div>
                    <div id="aria-perspective-content">${generateAriaPerspective(state)}</div>
                `}
            </div>
            <div class="compass-card flex-grow">
                ${isRightPaneCollapsed ? `
                    <div class="card-icon-preview">${tableIcon} <span>Drilldown</span></div>
                ` : `
                    <h3 class="control-title mb-4">Drill Down</h3>
                    <div class="maturity-table-container">
                        ${renderMaturityTable(state)}
                    </div>
                `}
            </div>
            <div class="right-pane-footer">
                <button class="collapse-toggle-btn" data-action="toggle-right-pane" title="${isRightPaneCollapsed ? 'Expand Details' : 'Collapse Details'}">
                    ${buttonIcon}
                </button>
            </div>
        ${actionWrapperEnd}
    `;
    
    if (!isRightPaneCollapsed) {
        drawRadarChart(state);
    }
}

function generateAriaPerspective(state) {
    const item = findItemInModel(state.modeling.selectedItemId);
    if (!item || !state.selectedAssessmentId) {
        return '<p class="text-sm text-secondary">Select an assessment to see ARIA\'s perspective.</p>';
    }
    const ariaScores = state.assessmentScores['ARIA'] || {};
    const directAriaScore = ariaScores[item.id];
    if (directAriaScore && directAriaScore.rationale) {
        return `
            <p class="font-semibold">On ${item.name}:</p>
            <p class="text-sm text-secondary mt-2" data-typing-text="${directAriaScore.rationale}"></p>
        `;
    } else {
        return `
            <p class="text-sm text-secondary">ARIA has not provided a specific rationale for <strong>${item.name}</strong> in this assessment.</p>
        `;
    }
}

function renderTimelineSelector(state) {
    const { availableAssessments, selectedAssessmentId } = state;
    if (!availableAssessments || availableAssessments.length === 0) return `<div class="flex items-center justify-center h-full text-secondary">No assessments found.</div>`;
    const sorted = [...availableAssessments].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    const firstDate = new Date(sorted[0].created_at);
    const lastDate = new Date();
    const totalDuration = Math.max(1, lastDate - firstDate);
    const timelineItems = sorted.map(assessment => {
        const assessmentDate = new Date(assessment.created_at);
        const position = 10 + (((assessmentDate - firstDate) / totalDuration) * 80);
        const isCommitted = !!assessment.committed_at;
        const isSelected = assessment.assessment_id == selectedAssessmentId;
        return `<div class="timeline-item" style="left: ${position}%" data-action="select-assessment" data-assessment-id="${assessment.assessment_id}" title="${assessment.version_name} (${assessmentDate.toLocaleDateString()})"><div class="timeline-label">${assessment.version_name}</div><div class="timeline-circle ${isCommitted ? 'committed' : ''} ${isSelected ? 'selected' : ''}"></div></div>`;
    }).join('');
    return `<div class="timeline-container"><div class="timeline-track"></div>${timelineItems}<div class="timeline-scale"><span>${firstDate.toLocaleDateString()}</span><span>Today</span></div></div>`;
}

function renderTreeView(state) {
    const { expandedNodes, selectedItemId, isVccCollapsed } = state.modeling;
    const { disciplines, capabilities, levers } = state.maturityModelData;
    if (!disciplines || disciplines.length === 0) return '<div class="p-4 text-secondary">Loading model...</div>';

    // Logic to find the top-level discipline of the currently selected item
    let topLevelSelectedDisciplineId = null;
    const selectedItem = findItemInModel(selectedItemId);
    if (selectedItem) {
        if (selectedItem.type === 'discipline') {
            topLevelSelectedDisciplineId = selectedItem.id;
        } else {
            let parent = findParent(selectedItem.id);
            while (parent) {
                if (parent.type === 'discipline') {
                    topLevelSelectedDisciplineId = parent.id;
                    break;
                }
                parent = findParent(parent.id);
            }
        }
    }

    if (isVccCollapsed) {
        let iconHtml = `<div class="tree-node ${selectedItemId === 'all-disciplines' ? 'active' : ''}" data-action="select-item" data-item-id="all-disciplines" title="All Disciplines">
            <svg class="discipline-icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
        </div>`;
        disciplines.slice().sort((a, b) => a.discipline_id.localeCompare(b.discipline_id)).forEach(d => {
            const isActive = topLevelSelectedDisciplineId === d.discipline_id;
            iconHtml += `<div class="tree-node ${isActive ? 'active' : ''}" data-action="select-item" data-item-id="${d.discipline_id}" title="${d.name}">
                <div class="discipline-icon-svg">${disciplineIcons[d.discipline_id] || ''}</div>
            </div>`;
        });
        return iconHtml;
    }

    // EXPANDED VIEW
    let html = `<div class="tree-node ${selectedItemId === 'all-disciplines' ? 'active' : ''}" data-action="select-item" data-item-id="all-disciplines"><span class="chevron hidden"></span><span class="node-label is-discipline">All Disciplines</span></div>`;
    disciplines.slice().sort((a, b) => a.discipline_id.localeCompare(b.discipline_id)).forEach(d => {
        const isExpanded = expandedNodes[d.discipline_id];
        html += `<div class="tree-node ${selectedItemId === d.discipline_id ? 'active' : ''}" data-action="select-item" data-item-id="${d.discipline_id}">
            <div class="discipline-icon-svg expanded-view">${disciplineIcons[d.discipline_id] || ''}</div>
            <svg class="chevron ${isExpanded ? 'expanded' : ''}" data-action="toggle-node" data-node-id="${d.discipline_id}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span class="node-label is-discipline">${d.name}</span>
        </div>`;
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

// in js/modeling.js

// in js/modeling.js

function renderEnrichedContentCard(state) {
    const item = findItemInModel(state.modeling.selectedItemId);
    if (!item || !item.id) return '<div class="p-8 text-center text-secondary">Please select an item to see details.</div>';

    // --- 1. Data Preparation ---
    const scores = getDisplayScores(item, state.assessmentScores);
    const ariaScores = getDisplayScores(item, { 'ARIA': state.assessmentScores['ARIA'] || {} });
    const [currentLevelName, targetLevelName] = [getMaturityLevelName(scores.current), getMaturityLevelName(scores.target)];
    const rubricItems = state.maturityModelData.rubricCache[item.id] || [];
    
    const primaryKpiItem = rubricItems.find(r => r.kpi_name) || {};
    const kpiTargetsByStage = maturityStageNames.map((name, index) => {
        const rubricForStage = rubricItems.find(r => r.stage_number === (index + 1));
        return rubricForStage ? rubricForStage.kpi_target_value : 'N/A';
    });
    
    const isExpanded = state.modeling.characteristicsExpanded;
    
    let maxSummaryLines = 1;
    maturityStageNames.forEach((name, index) => {
        const rubricForStage = rubricItems.find(r => r.stage_number === (index + 1));
        const fullText = rubricForStage ? rubricForStage.description : 'N/A';
        const firstPeriodIndex = fullText.indexOf('.');
        const summaryText = firstPeriodIndex > -1 ? fullText.substring(0, firstPeriodIndex + 1) : fullText;
        const lines = Math.ceil(summaryText.length / 50);
        if (lines > maxSummaryLines) maxSummaryLines = lines;
    });
    const summaryHeight = `${(maxSummaryLines * 1.5) + 2}rem`;

    const characteristicsHTML = maturityStageNames.map((name, index) => {
        const rubricForStage = rubricItems.find(r => r.stage_number === (index + 1));
        const fullText = rubricForStage ? rubricForStage.description : 'N/A';
        const firstPeriodIndex = fullText.indexOf('.');
        const summaryText = firstPeriodIndex > -1 ? fullText.substring(0, firstPeriodIndex + 1) : fullText;
        const style = !isExpanded ? `style="height: ${summaryHeight};"` : '';
        return `<div class="stage-content-box stage-characteristics" ${style}><p>${isExpanded ? fullText : summaryText}</p></div>`;
    }).join('');

    // --- 2. Generate HTML for all components ---
    let benefitsHTML = '';
    if (item.type === 'discipline' || item.type === 'capability' || item.type === 'root') {
        benefitsHTML = `<p>${item.benefitsStatement || 'No benefits statement available.'}</p>`;
    } else if (item.type === 'lever') {
        const roadmapItems = state.maturityModelData.roadmapCache[item.id] || [];
        if (roadmapItems.length > 0) {
            const benefitsList = roadmapItems.map(r => `<li><strong>${r.benefit_category || 'Benefit'}:</strong> ${r.benefit_description}</li>`).join('');
            benefitsHTML = `<ul>${benefitsList}</ul>`;
        } else {
            benefitsHTML = '<p>No benefits statement available for this item.</p>';
        }
    }

    const infoIcon = `<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>`;
    const chevronIcon = `<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>`;
    const stageHeadersHTML = maturityStageNames.map(name => `<div class="stage-header-box">${name}</div>`).join('');
    const kpiHTML = kpiTargetsByStage.map(content => `<div class="stage-content-box stage-kpi">${content}</div>`).join('');
    
    const asIsPercent = (scores.current / 5) * 100;
    const toBePercent = (scores.target / 5) * 100;
    const ariaAsIsPercent = (ariaScores.current / 5) * 100;
    const ariaToBePercent = (ariaScores.target / 5) * 100;
    const fromStage = Math.floor(scores.current);
    const toStage = Math.ceil(scores.target);
    const stageGap = toStage - fromStage;
    let prioritiesContentHTML = '<p>No transformation path defined for this gap.</p>';
    if (stageGap > 0 && item.type === 'lever') {
        const allRoadmapItems = state.maturityModelData.roadmapCache[item.id] || [];
        let initiativesHTML = '';
        for (let i = fromStage; i < toStage; i++) {
            const step = allRoadmapItems.find(r => r.from_stage === (i + 1) && r.to_stage === (i + 2));
            if (step && step.key_initiatives) {
                initiativesHTML += (step.key_initiatives || '').split('\n').filter(Boolean).map(line => `<li>${line}</li>`).join('');
            }
        }
        initiativesHTML = `<ul>${initiativesHTML}</ul>`;
        if (stageGap > 1) {
            const directPath = allRoadmapItems.find(r => r.from_stage === fromStage && r.to_stage === toStage);
            const skipsHTML = (directPath && directPath.what_to_skip) ? (directPath.what_to_skip || '').split('\n').filter(Boolean).map(line => `<li>${line}</li>`).join('') : '<li>None specified.</li>';
            prioritiesContentHTML = `<div class="priorities-content-grid"><div><h6>Key Initiatives (Cumulative)</h6>${initiativesHTML}</div><div><h6>What to Skip</h6><ul>${skipsHTML}</ul></div></div>`;
        } else {
            prioritiesContentHTML = `<div class="priorities-content-grid full-width"><div><h6>Key Initiatives</h6>${initiativesHTML}</div></div>`;
        }
    }

    const unifiedGridHTML = `
        <div class="unified-maturity-grid ${isExpanded ? 'is-expanded' : ''}">
            <div class="unified-grid-label"><span>Stage</span></div>
            <div class="unified-grid-content"><div class="content-box-row">${stageHeadersHTML}</div></div>
            <div class="unified-grid-label">
                <span>Characteristics</span>
                <button class="details-toggle-icon" data-action="toggle-characteristic-details">${chevronIcon}</button>
            </div>
            <div class="unified-grid-content"><div class="content-box-row">${characteristicsHTML}</div></div>
            <div class="unified-grid-label" id="kpi-label-cell">
                <span>KPI: ${primaryKpiItem.kpi_name || "Not Defined"}</span>
                <button class="expand-icon-button ml-2" data-action="toggle-kpi-popup" title="Show KPI details">${infoIcon}</button>
            </div> 
            <div class="unified-grid-content"><div class="content-box-row">${kpiHTML}</div></div>
            <div class="unified-grid-label"><span>As-Is</span></div>
            <div class="unified-grid-content slider-row">
                <div class="tv-track-line as-is"></div>
                <input type="range" min="0" max="5" value="${scores.current}" step="0.1" class="tv-slider-track as-is" data-action="update-score" data-item-id="${item.id}" data-type="current">
                <div class="tv-aria-indicator as-is" style="left: ${ariaAsIsPercent}%;"><img src="Evolver_Dark.png" alt="Aria"></div>
                <div class="tv-value-label as-is" style="left: ${asIsPercent}%;" data-position="${getLabelPosition(asIsPercent)}">${currentLevelName} / ${scores.current.toFixed(1)}</div>
            </div>
            <div class="unified-grid-label"></div>
            <div class="unified-grid-content priorities-row" id="priorities-row">
                <div class="tv-priorities-bar">
                    <div class="tv-priorities-title" data-action="toggle-transformation-priorities">Transformation Priorities</div>
                    <div class="tv-priorities-content">${prioritiesContentHTML}</div>
                </div>
            </div>
            <div class="unified-grid-label"><span>To-Be</span></div>
            <div class="unified-grid-content slider-row">
                <div class="tv-track-line to-be"></div>
                <input type="range" min="0" max="5" value="${scores.target}" step="0.1" class="tv-slider-track to-be" data-action="update-score" data-item-id="${item.id}" data-type="target">
                <div class="tv-aria-indicator to-be" style="left: ${ariaToBePercent}%;"><img src="Evolver_Dark.png" alt="Aria"></div>
                <div class="tv-value-label to-be" style="left: ${toBePercent}%;" data-position="${getLabelPosition(toBePercent)}">${targetLevelName} / ${scores.target.toFixed(1)}</div>
            </div>
        </div>
    `;

    // --- 3. Final Assembly ---
    const expandIcon = `<svg class="icon-expand w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5 9 9m0 0H4.5M9 9V4.5" /></svg>`;
    const collapseIcon = `<svg class="icon-collapse w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 19.5 15 15m0 0v4.5m0-4.5h4.5" /></svg>`;

    return `
        <div class="compass-card description-card">
            <div class="compass-breadcrumbs mb-6">${generateBreadcrumbs(state)}</div>
            
            <div id="description-control-grid-wrapper" class="mb-8">
                <div class="info-pane" id="description-pane">
                    <h4 class="info-label">Description</h4>
                    <div class="info-box">
                        <p>${item.short_description || 'N/A'}</p>
                        <div class="details-content">
                            <h5 class="text-sm font-bold text-text-primary mb-2">Detailed Description</h5>
                            <p class="mb-4">${item.description || 'No detailed description available.'}</p>
                            <h5 class="text-sm font-bold text-text-primary mb-2">Benefits Statement</h5>
                            ${benefitsHTML}
                        </div>
                        <button class="expand-icon-button" data-action="toggle-details-expansion" title="Show more details">
                            ${expandIcon}
                            ${collapseIcon}
                        </button>
                    </div>
                </div>
                <div class="info-pane">
                    <h4 class="info-label">Control Question</h4>
                    <p class="info-box">${item.controlQuestion || 'N/A'}</p>
                </div>
            </div>

            ${unifiedGridHTML}
            
            <div id="kpi-details-popup" class="kpi-details-popup"></div>
        </div>
    `;
}


function updateTransformationBoxPosition() {
    const asIsSlider = document.querySelector('.tv-slider-track.as-is');
    const toBeSlider = document.querySelector('.tv-slider-track.to-be');
    const prioritiesBox = document.querySelector('.tv-priorities-box');
    const connectorAsIs = document.getElementById('connector-as-is');
    const connectorToBe = document.getElementById('connector-to-be');

    if (!asIsSlider || !toBeSlider || !prioritiesBox || !connectorAsIs || !connectorToBe) return;

    const asIsValue = parseFloat(asIsSlider.value);
    const toBeValue = parseFloat(toBeSlider.value);
    const asIsPercent = (asIsValue / 5) * 100;
    const toBePercent = (toBeValue / 5) * 100;

    const asIsHandleX = (asIsSlider.offsetWidth * asIsPercent) / 100;
    const toBeHandleX = (toBeSlider.offsetWidth * toBePercent) / 100;

    const prioritiesRow = document.getElementById('priorities-row');
    const boxRect = prioritiesBox.getBoundingClientRect();
    const rowRect = prioritiesRow.getBoundingClientRect();

    // Top connector
    connectorAsIs.style.left = `${asIsHandleX}px`;
    connectorAsIs.style.top = `-${(rowRect.height / 2)}px`; // Start from above the row
    connectorAsIs.style.height = `${(rowRect.height / 2)}px`;

    // Bottom connector
    connectorToBe.style.left = `${toBeHandleX}px`;
    connectorToBe.style.top = `${(boxRect.height)}px`; // Start from the bottom of the box
    connectorToBe.style.height = `${(rowRect.height / 2)}px`;
}

function generateBreadcrumbs(state) {
    const { selectedItemId } = state.modeling;
    if (!selectedItemId || selectedItemId === 'all-disciplines') {
        return `<div><h3 class="text-2xl font-bold">All Disciplines</h3></div>`;
    }
    let path = [];
    let currentItem = findItemInModel(selectedItemId);
    while (currentItem) {
        path.unshift({ name: currentItem.name, id: currentItem.id });
        if (currentItem.type === 'discipline') break;
        currentItem = findParent(currentItem.id);
    }
    const titleItem = path.pop();
    const pathHtml = path.map(item => `<span class="breadcrumb-item" data-action="select-item" data-item-id="${item.id}">${item.name}</span>`).join('<span class="breadcrumb-separator">/</span>');
    return `
        <div>
            <h3 class="text-2xl font-bold">${titleItem.name}</h3>
            ${path.length > 0 ? `<div class="breadcrumb-path">${pathHtml}</div>` : ''}
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
    options: { responsive: true, maintainAspectRatio: false, scales: { r: { beginAtZero: true, max: 5, stepSize: 1, pointLabels: { font: { weight: 'bold', size: 11 }, color: styles.getPropertyValue('--text-secondary').trim(), backdropColor: styles.getPropertyValue('--bg-card').trim(), backdropPadding: 2 }, grid: { color: styles.getPropertyValue('--border-color').trim() }, angleLines: { color: styles.getPropertyValue('--border-color').trim() }, ticks: { backdropColor: styles.getPropertyValue('--bg-card').trim(), color: styles.getPropertyValue('--text-primary').trim(), z: 1 }}}, plugins: { legend: { position: 'bottom', labels: { color: styles.getPropertyValue('--text-primary').trim() } } } }});
}

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

    if (!id || id === 'all-disciplines') {
        return { 
            id: 'all-disciplines', 
            name: 'All Disciplines', 
            type: 'root', 
            description: 'This is an overview of the entire maturity model, encompassing all functional disciplines.',
            controlQuestion: 'How can we assess the overall maturity of the organization across all key operational areas?',
            benefitsStatement: 'Achieving higher maturity across all disciplines leads to increased efficiency, better strategic alignment, and a sustainable competitive advantage.'
        };
    }

    for (const d of (disciplines || [])) { 
        if (d.discipline_id === id) {
            return { 
                ...d, 
                id: d.discipline_id, 
                type: 'discipline',
                // Standardize property names for rendering
                description: d.long_description,
                controlQuestion: d.control_question,
                benefitsStatement: d.benefits_statement 
            }; 
        }
    }
    for (const capList of Object.values(capabilities || {})) {
        for (const c of capList) {
            if (c.capability_id === id) {
                return { 
                    ...c, 
                    id: c.capability_id, 
                    type: 'capability',
                    // Standardize property names
                    description: c.long_description,
                    controlQuestion: c.control_question,
                    benefitsStatement: c.benefits_statement
                };
            }
        }
    }
    for (const leverList of Object.values(levers || {})) {
        for (const l of leverList) {
            if (l.lever_id === id) {
                return { 
                    ...l, 
                    id: l.lever_id, 
                    type: 'lever',
                    // Standardize property names
                    description: l.long_description,
                    controlQuestion: l.control_question
                    // Note: Levers do NOT have a direct benefits_statement field.
                };
            }
        }
    }
    return null;
}

function findParent(itemId) {
    const state = loadState();
    const { capabilities, levers } = state.maturityModelData;
    for (const capList of Object.values(capabilities)) { for (const c of capList) { if (c.capability_id === itemId) return findItemInModel(c.discipline_id); } }
    for (const leverList of Object.values(levers)) { for (const l of leverList) { if (l.lever_id === itemId) return findItemInModel(l.capability_id); } }
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
    const roundedScore = Math.round(score);
    if (roundedScore >= 5) return maturityStageNames[4];
    if (roundedScore >= 1) return maturityStageNames[roundedScore - 1];
    return "Initial";
}

function getLabelPosition(percent) {
    if (percent < 10) return 'left';
    if (percent > 90) return 'right';
    return 'center';
}

function getMaturityLevelDescription(score) {
    const roundedScore = Math.round(score);
    if (roundedScore >= 5) return summaryMaturityLevels[4];
    if (roundedScore >= 1) return summaryMaturityLevels[roundedScore - 1];
    return "The initial stage before formal processes are established.";
}

// in js/modeling.js

// in js/modeling.js

// in js/modeling.js

// in js/modeling.js

function initializeModelingEventListeners() {
    document.body.addEventListener('click', async (e) => {
        if (Navigation.getCurrentPage() !== 'modeling') return;

        const target = e.target.closest('[data-action]');
        const popup = document.getElementById('kpi-details-popup');

        if (popup && popup.classList.contains('visible') && !target.closest('#kpi-details-popup') && !target.closest('[data-action="toggle-kpi-popup"]')) {
            popup.classList.remove('visible');
        }

        if (!target) return;
        e.stopPropagation();
        
        let state = loadState();
        const action = target.dataset.action;

        if (action === 'toggle-characteristic-details') {
            state.modeling.characteristicsExpanded = !state.modeling.characteristicsExpanded;
            saveState(state);
            renderCompassCenterPaneV3(state);
        }
        else if (action === 'toggle-transformation-priorities') {
            const prioritiesRow = document.getElementById('priorities-row');
            if (prioritiesRow) {
                prioritiesRow.classList.toggle('expanded');
            }
        }
        else if (action === 'toggle-kpi-popup') {
            const isVisible = popup.classList.contains('visible');
            if (isVisible) {
                popup.classList.remove('visible');
            } else {
                const item = findItemInModel(state.modeling.selectedItemId);
                const rubricItems = state.maturityModelData.rubricCache[item.id] || [];
                const primaryKpiItem = rubricItems.find(r => r.kpi_name) || {};
                let alternativesHTML = '';
                if (primaryKpiItem.alternative_kpis) {
                    const alternativesList = primaryKpiItem.alternative_kpis.split('\n').map(line => `<li>${line}</li>`).join('');
                    alternativesHTML = `<strong>Alternative KPIs to Consider</strong><ul class="alternatives-list mt-1">${alternativesList}</ul>`;
                }
                const popupContent = `
                    <div class="kpi-popup-header">
                        <h4 class="kpi-popup-title">${primaryKpiItem.kpi_name || 'KPI Details'}</h4>
                        <button class="kpi-popup-close-btn" data-action="close-kpi-popup">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <div class="kpi-popup-body">
                        <p>${primaryKpiItem.kpi_description || 'No description available.'}</p>
                        <strong>Rationale</strong>
                        <p>${primaryKpiItem.kpi_rational || 'No rationale provided.'}</p>
                        <strong>Formula</strong>
                        <code>${primaryKpiItem.kpi_formula || 'N/A'}</code>
                        ${alternativesHTML}
                    </div>
                `;
                popup.innerHTML = popupContent;
                const labelCell = document.getElementById('kpi-label-cell');
                const containerRect = document.getElementById('main-content').getBoundingClientRect();
                const labelRect = labelCell.getBoundingClientRect();
                popup.style.left = `${labelRect.right - containerRect.left}px`;
                const characteristicsRow = document.getElementById('characteristics-content-row');
                const charRect = characteristicsRow.getBoundingClientRect();
                const verticalMidpoint = charRect.top + (charRect.height / 2);
                popup.style.top = `${verticalMidpoint - containerRect.top}px`;
                popup.style.transformOrigin = 'top left';
                popup.style.transform = `translateY(-50%)`;
                popup.classList.add('visible');
            }
        }
        else if (action === 'close-kpi-popup') {
            if (popup) popup.classList.remove('visible');
        }
        else if (action === 'toggle-details-expansion') {
            const gridWrapper = document.getElementById('description-control-grid-wrapper');
            const descPane = document.getElementById('description-pane');
            const button = target.closest('.expand-icon-button');
            gridWrapper.classList.toggle('details-expanded');
            descPane.classList.toggle('is-expanded');
            button.classList.toggle('expanded');
        }
        else if (action === 'toggle-vcc') {
            state.modeling.isVccCollapsed = !state.modeling.isVccCollapsed;
            saveState(state);
            renderCompassPageV3(loadState());
        }
        else if (action === 'select-assessment') {
            const newAssessmentId = target.dataset.assessmentId;
            if (state.selectedAssessmentId != newAssessmentId) {
                state.selectedAssessmentId = newAssessmentId;
                saveState(state);
                await loadAssessmentScores(newAssessmentId);
                renderCompassPageV3(loadState());
            }
        }
        else if (action === 'select-item' || action === 'toggle-node') {
            const nodeId = target.dataset.nodeId || target.dataset.itemId;
            if (action === 'toggle-node') {
                state.modeling.expandedNodes[nodeId] = !state.modeling.expandedNodes[nodeId];
            } else {
                state.modeling.characteristicsExpanded = false;
                state.modeling.selectedItemId = nodeId;
                if (state.modeling.isVccCollapsed) {
                    state.modeling.isVccCollapsed = false;
                    state.modeling.expandedNodes = {};
                    state.modeling.expandedNodes[nodeId] = true;
                } else {
                    state.modeling.isVccCollapsed = true;
                }
            }
            saveState(state);
            await loadRubricForItem(nodeId);
            await loadRoadmapForItem(nodeId);
            renderCompassPageV3(loadState());
        }
    });

    document.body.addEventListener('input', (e) => {
        if (Navigation.getCurrentPage() !== 'modeling') return;
        const target = e.target;
        
        if (target.matches('.tv-slider-track')) {
            const type = target.dataset.type;
            const value = parseFloat(target.value);
            const levelName = getMaturityLevelName(value);
            const percent = (value / 5) * 100;
            
            const trackContainer = target.closest('.unified-grid-content');
            const valueLabel = trackContainer.querySelector('.tv-value-label');
            valueLabel.style.left = `${percent}%`;
            valueLabel.textContent = `${levelName} / ${value.toFixed(1)}`;
            
            updateTransformationBoxPosition();

            clearTimeout(window.saveDebounce);
            window.saveDebounce = setTimeout(() => {
                let state = loadState();
                const item = findItemInModel(state.modeling.selectedItemId);
                if (!item) return;
                saveAssessmentScore(state.selectedAssessmentId, item, type, value)
                    .then(() => console.log(`Saved ${type} score: ${value}`));
            }, 500);
        }
    });
}