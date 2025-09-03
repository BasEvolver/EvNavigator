// js/state.js - Global State Management (Refactored for API-driven Maturity Model)

const PERSONAS = {
    'adrian': { name: 'Adrian Croft', role: 'Operating Partner', avatarColor: 'var(--text-secondary)', avatarTextColor: 'var(--bg-primary)', defaultCompany: 'all', defaultPage: 'index.html' },
    'evelyn': { name: 'Evelyn Reed', role: 'CEO, CloudVantage', avatarColor: 'var(--purple)', avatarTextColor: 'var(--bg-primary)', defaultCompany: 'cloudvantage', defaultPage: 'portco.html' },
    'connor': { name: 'Connor Hayes', role: 'CRO, CloudVantage', avatarColor: 'var(--status-warning)', avatarTextColor: 'var(--brand-primary)', defaultCompany: 'cloudvantage', defaultPage: 'portco.html' },
    'maya': { name: 'Maya Singh', role: 'Account Manager, CloudVantage', avatarColor: 'var(--accent-teal)', avatarTextColor: 'var(--brand-primary)', defaultCompany: 'cloudvantage', defaultPage: 'aria.html' }
};

// Removed initialScores and buildInitialAssessmentData as these will come from API

function getInitialState() {
    return {
        activePersona: 'adrian', // Default to the Operating Partner
        selectedCompanyId: 'all',
        // New state for API-fetched maturity model data
        maturityModelData: {
            disciplines: [],
            capabilities: {}, // Store capabilities by disciplineId
            levers: {},      // Store levers by capabilityId
            rubric: {},      // Store rubric items by itemId
            roadmap: {}      // Store roadmap items by leverId
        },
        // New state for selected assessment and its scores
        selectedAssessmentId: null,
        availableAssessments: [], // List of assessments for the selected company
        assessmentScores: {},     // Scores for the selected assessment (leverId -> { as_is, to_be })
        
        modeling: {
            selectedItemId: 'all-disciplines', 
            expandedNodes: {'D1': true}, // Still keep D1 expanded by default for initial view
            // 'assessments' will now be replaced by 'assessmentScores' and 'selectedAssessmentId'
            // For now, we'll keep a dummy structure to prevent immediate errors, but it will be refactored.
            assessments: {
                'techflow-solutions': {},
                'cloudvantage': {}
            }
        },
        activeTabId: 'home',
        isReportFinalized: false,
        diligenceWorkspace: { keyRisks: {}, valueLevers: [], strategicNotes: [], itemSelections: {} },
        cloudvantageAria: { state: 'idle', context: null, conversation: [] },
        techflowAria: { state: 'idle', currentPrompt: '', activeWorkstream: null, minorObservationsExpanded: false },
        ariaSettings: { isModalOpen: false, expandedCategories: {}, context: { main: true, ddDataRoom: true, investmentThesis: true, financialModel: true, meetingTranscripts: false }, domainKnowledge: { main: true, playbooks: true, kpiLibrary: true, maturityModel: true, industryBenchmarks: true, bestPractices: false }, externalData: { main: true, linkedin: true, pitchbook: false, glassdoor: true, web: true, newsFeeds: true }, internalData: { main: true, erp: true, crm: true, hcm: false, devops: true, csm: true, financialReports: true } }
    };
}

// initializeAssessmentData is no longer needed in its previous form,
// as assessments will be loaded dynamically.
function initializeAssessmentData() {
    // This function will be refactored or removed once API integration is complete.
    // For now, ensure the assessments object exists to prevent errors.
    let state = loadState();
    if (!state.modeling.assessments['techflow-solutions']) {
        state.modeling.assessments['techflow-solutions'] = {};
    }
    if (!state.modeling.assessments['cloudvantage']) {
        state.modeling.assessments['cloudvantage'] = {};
    }
    saveState(state);
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
                    // Merge assessments, but be ready to replace this with API-driven scores
                    assessments: {
                        ...initialState.modeling.assessments,
                        ...(savedState.modeling?.assessments || {})
                    }
                },
                // Ensure new API data structures are initialized if not present in saved state
                maturityModelData: {
                    ...initialState.maturityModelData,
                    ...(savedState.maturityModelData || {})
                }
            };
        } catch (e) {
            console.error("Error parsing saved state, returning initial state:", e);
            return initialState;
        }
    }
    return initialState;
}