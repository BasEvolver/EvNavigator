// js/state.js - Global State Management (Final Version)

const initialScores = {
    'techflow-solutions': {
        // Diligence Target: Foundational issues need fixing.
        'D1': { current: 2, target: 3 }, 'D2': { current: 1, target: 3 }, 'D3': { current: 1, target: 2 },
        'D4': { current: 2, target: 3 }, 'D5': { current: 2, target: 3 }, 'D6': { current: 2, target: 3 },
        'D7': { current: 1, target: 2 }, 'D8': { current: 2, target: 4 }, 'D9': { current: 1, target: 2 },
        'D-251': { current: 1, target: 3 }, 'D-463': { current: 1, target: 3 }, 'D-821': { current: 2, target: 4 },
    },
    'cloudvantage': {
        // Growth Target: Already mature, pushing for excellence.
        'D1': { current: 4, target: 5 }, 'D2': { current: 3, target: 4 }, 'D3': { current: 3, target: 5 },
        'D4': { current: 4, target: 4 }, 'D5': { current: 4, target: 5 }, 'D6': { current: 3, target: 4 },
        'D7': { current: 4, target: 5 }, 'D8': { current: 4, target: 5 }, 'D9': { current: 2, target: 4 },
        'C330': { current: 2, target: 5 }, 'D-911': { current: 2, target: 5 },
    }
};

function buildInitialAssessmentData(companyId = 'techflow-solutions') {
    const data = {};
    if (typeof maturityModel === 'undefined') {
        console.error("CRITICAL ERROR: buildInitialAssessmentData was called before MaturityModel.js was loaded.");
        return data;
    }

    const companyScores = initialScores[companyId] || initialScores['techflow-solutions'];

    for (const disc of Object.values(maturityModel.disciplines)) {
        const discScore = companyScores[disc.id] || { current: 1, target: 1 };
        for (const cap of Object.values(disc.capabilities)) {
            const capScore = companyScores[cap.id] || discScore;
            if (cap.domains) {
                for (const domain of Object.values(cap.domains)) {
                    data[domain.id] = companyScores[domain.id] || capScore;
                }
            }
        }
    }
    return data;
}

function getInitialState() {
    return {
        selectedCompanyId: 'all',
        modeling: {
            selectedItemId: 'all-disciplines', 
            expandedNodes: {'D1': true}, 
            assessmentData: {}, 
        },
        activeTabId: 'home',
        isReportFinalized: false,
        diligenceWorkspace: { keyRisks: {}, valueLevers: [], strategicNotes: [], itemSelections: {} },
        cloudvantageAria: { state: 'idle', context: null, conversation: [] },
        techflowAria: { state: 'idle', currentPrompt: '', activeWorkstream: null, minorObservationsExpanded: false },
        ariaSettings: { isModalOpen: false, expandedCategories: {}, context: { main: true, ddDataRoom: true, investmentThesis: true, financialModel: true, meetingTranscripts: false }, domainKnowledge: { main: true, playbooks: true, kpiLibrary: true, maturityModel: true, industryBenchmarks: true, bestPractices: false }, externalData: { main: true, linkedin: true, pitchbook: false, glassdoor: true, web: true, newsFeeds: true }, internalData: { main: true, erp: true, crm: true, hcm: false, devops: true, csm: true, financialReports: true } }
    };
}

function saveState(state) {
    localStorage.setItem('navigatorAppState', JSON.stringify(state));
}

function loadState() {
    const initialState = getInitialState();
    const savedStateJSON = localStorage.getItem('navigatorAppState');
    
    let state;
    if (savedStateJSON) {
        try {
            const savedState = JSON.parse(savedStateJSON);
            state = { ...initialState, ...savedState, modeling: { ...initialState.modeling, ...(savedState.modeling || {}) } };
        } catch (e) {
            state = initialState;
        }
    } else {
        state = initialState;
    }

    if (!state.modeling.assessmentData || Object.keys(state.modeling.assessmentData).length === 0 || !state.modeling.assessmentData.companyId || state.modeling.assessmentData.companyId !== state.selectedCompanyId) {
        state.modeling.assessmentData = buildInitialAssessmentData(state.selectedCompanyId);
        state.modeling.assessmentData.companyId = state.selectedCompanyId;
        saveState(state);
    }
    
    return state;
}