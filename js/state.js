// js/state.js - Global State Management (CORRECTED)

/**
 * Helper function to build the initial assessment data from the master model.
 * This should only be called once the maturityModel object is confirmed to be loaded.
 */
function buildInitialAssessmentData() {
    const data = {};
    if (typeof maturityModel === 'undefined') {
        console.error("CRITICAL ERROR: buildInitialAssessmentData was called before MaturityModel.js was loaded.");
        return data; // Return empty to prevent crash
    }

    for (const discipline of Object.values(maturityModel.disciplines)) {
        for (const capability of Object.values(discipline.capabilities)) {
            for (const domain of Object.values(capability.domains)) {
                data[domain.id] = { current: 1, target: 1 };
            }
        }
    }
    return data;
}

/**
 * Defines the basic structure of the application's initial state.
 * Note: assessmentData starts empty and is populated by loadState.
 */
function getInitialState() {
    return {
        activeTabId: 'home',
        selectedCompanyId: 'all',
        isReportFinalized: false,
        diligenceWorkspace: {
            keyRisks: {},
            valueLevers: [],
            strategicNotes: [], 
            itemSelections: {}
        },
        cloudvantageAria: {
            state: 'idle',
            context: null,
            conversation: [],
        },
        techflowAria: {
            state: 'idle',
            currentPrompt: '',
            activeWorkstream: null,
            minorObservationsExpanded: false,
        },
        ariaSettings: {
            isModalOpen: false,
            expandedCategories: {},
            context: { main: true, ddDataRoom: true, investmentThesis: true, financialModel: true, meetingTranscripts: false },
            domainKnowledge: { main: true, playbooks: true, kpiLibrary: true, maturityModel: true, industryBenchmarks: true, bestPractices: false },
            externalData: { main: true, linkedin: true, pitchbook: false, glassdoor: true, web: true, newsFeeds: true },
            internalData: { main: true, erp: true, crm: true, hcm: false, devops: true, csm: true, financialReports: true }
        },
        modeling: {
            view: 'discipline',
            selectedDisciplineId: null,
            selectedCapabilityId: null,
            assessmentData: {}, // CHANGED: Start with an empty object to avoid race condition
            generatedPlan: null
        }
    };
}

function saveState(state) {
    localStorage.setItem('navigatorAppState', JSON.stringify(state));
}

/**
 * Loads state from localStorage or creates a new one.
 * This is now the single source of truth for ensuring the state is fully initialized.
 */
function loadState() {
    const initialState = getInitialState();
    const savedStateJSON = localStorage.getItem('navigatorAppState');
    
    let state;
    if (savedStateJSON) {
        try {
            const savedState = JSON.parse(savedStateJSON);
            // Deep merge to handle nested objects and prevent errors if the model changes
            state = {
                ...initialState,
                ...savedState,
                diligenceWorkspace: { ...initialState.diligenceWorkspace, ...(savedState.diligenceWorkspace || {}) },
                cloudvantageAria: { ...initialState.cloudvantageAria, ...(savedState.cloudvantageAria || {}) },
                techflowAria: { ...initialState.techflowAria, ...(savedState.techflowAria || {}) },
                ariaSettings: { ...initialState.ariaSettings, ...(savedState.ariaSettings || {}) },
                modeling: { ...initialState.modeling, ...(savedState.modeling || {}) }
            };
        } catch (e) {
            console.error("Error parsing saved state, returning initial state.", e);
            state = initialState;
        }
    } else {
        state = initialState;
    }

    // CRITICAL FIX: If the assessment data is missing (e.g., first load or corrupted state),
    // build it now. This guarantees it's populated correctly before any rendering occurs.
    if (!state.modeling.assessmentData || Object.keys(state.modeling.assessmentData).length === 0) {
        state.modeling.assessmentData = buildInitialAssessmentData();
        saveState(state); // Save the newly populated state
    }
    
    return state;
}