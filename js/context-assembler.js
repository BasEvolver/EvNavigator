// js/context-assembler.js - CORRECTED

/**
 * Gathers all relevant data, including raw data objects and curated knowledge summaries,
 * based on the current application context.
 * @param {string} companyId - The ID of the currently selected company.
 * @param {string} persona - The ID of the currently active persona.
 * @returns {object} A comprehensive package of context for the AI.
 */
function getDynamicContext(companyId, persona) {
    const contextPackage = {
        summary: `Assembling context for persona '${persona}' looking at company '${companyId}'.`,
        data: {},
        curatedKnowledge: {} 
    };

    // --- UNIVERSAL CONTEXT ---
    contextPackage.data.valueCreationFramework = {
        disciplines: maturityModel.disciplines,
        capabilities: capabilities
    };

    // --- CONTEXT RULES FOR TECHFLOW SOLUTIONS ---
    if (companyId === 'techflow-solutions') {
        contextPackage.data.companyProfile = workspaceHeaders['techflow-solutions'];
        contextPackage.data.diligencePlan = diligencePlan_v3;
        contextPackage.data.criticalAnomalies = techflow_anomalies;
        contextPackage.data.otherObservations = otherObservations_v2;
        
        // THE FIX: Use the correct variable name 'knowledgeNarratives'
        contextPackage.curatedKnowledge = knowledgeNarratives['techflow-solutions'];
    }

    // --- CONTEXT RULES FOR CLOUDVANTAGE ---
    if (companyId === 'cloudvantage') {
        contextPackage.data.companyProfile = workspaceHeaders['cloudvantage'];
        contextPackage.data.ceoDashboard = ceoDashboardData;
        contextPackage.data.croData = croData;
        contextPackage.data.keyKpis = cloudVantageKpis;
        contextPackage.data.cloudVantagePrograms = cloudVantagePrograms; // Make sure this is included
        
        // THE FIX: Use the correct variable name 'knowledgeNarratives'
        contextPackage.curatedKnowledge = knowledgeNarratives['cloudvantage'];
    }

    return contextPackage;
}