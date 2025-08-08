// js/state.js - Global State Management (Final Version with Multi-Company Assessments)

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

function buildInitialAssessmentData(companyId) {
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
                    data[domain.id] = { ...(companyScores[domain.id] || capScore) };
                }
            }
        }
    }
    return data;
}

// MODIFIED: This function now only creates the structure, preventing race conditions.
function getInitialState() {
    return {
        selectedCompanyId: 'all',
        modeling: {
            selectedItemId: 'all-disciplines', 
            expandedNodes: {'D1': true}, 
            // Initialize with an empty object. Data will be populated by a separate function.
            assessments: {} 
        },
        activeTabId: 'home',
        isReportFinalized: false,
        diligenceWorkspace: { keyRisks: {}, valueLevers: [], strategicNotes: [], itemSelections: {} },
        cloudvantageAria: { state: 'idle', context: null, conversation: [] },
        techflowAria: { state: 'idle', currentPrompt: '', activeWorkstream: null, minorObservationsExpanded: false },
        ariaSettings: { isModalOpen: false, expandedCategories: {}, context: { main: true, ddDataRoom: true, investmentThesis: true, financialModel: true, meetingTranscripts: false }, domainKnowledge: { main: true, playbooks: true, kpiLibrary: true, maturityModel: true, industryBenchmarks: true, bestPractices: false }, externalData: { main: true, linkedin: true, pitchbook: false, glassdoor: true, web: true, newsFeeds: true }, internalData: { main: true, erp: true, crm: true, hcm: false, devops: true, csm: true, financialReports: true } }
    };
}

// NEW FUNCTION: This function safely populates the assessment data after scripts are loaded.
function initializeAssessmentData() {
    let state = loadState();
    // Check if data is already populated to avoid overwriting user changes.
    if (Object.keys(state.modeling.assessments).length === 0 && typeof maturityModel !== 'undefined') {
        state.modeling.assessments = {
            'techflow-solutions': buildInitialAssessmentData('techflow-solutions'),
            'cloudvantage': buildInitialAssessmentData('cloudvantage')
        };
        saveState(state);
    }
}


function saveState(state) {
    localStorage.setItem('navigatorAppState', JSON.stringify(state));
}

function loadState() {
    const initialState = getInitialState();
    const savedStateJSON = localStorage.getItem('navigatorAppState');
    
    if (savedStateJSON) {
        try {
            const savedState = JSON.parse(savedStateJSON);
            return {
                ...initialState,
                ...savedState,
                modeling: {
                    ...initialState.modeling,
                    ...(savedState.modeling || {}),
                    assessments: {
                        ...initialState.modeling.assessments,
                        ...(savedState.modeling?.assessments || {})
                    }
                }
            };
        } catch (e) {
            return initialState;
        }
    }
    return initialState;
}