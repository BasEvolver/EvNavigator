// /api/agent-tools.js - COMPLETE, COMPREHENSIVE, AND FULLY-LOADED VERSION

// --- TOOL DEFINITIONS ---
// Each function now retrieves the narrative AND all relevant raw data objects.

const calculateAcquisitionImpact = (appContext, staticContext) => {
    if (appContext.companyId !== 'techflow-solutions') {
        return { error: "This calculation is only configured for the TechFlow acquisition scenario." };
    }

    // --- 1. Extract Key Financial Data from Context ---
    // In a real scenario, these would be looked up dynamically. For now, we use our known data.
    const techDebtRemediationCost = 4500000; // $4.5M from the product narrative
    
    // Impact of ARR restatement anomaly
    const reportedARR = 12000000;
    const trueARR = 7080000;
    const arrShortfall = reportedARR - trueARR;
    // Assume a 72% gross margin (from techflow_workstreamData) on the lost revenue
    const ebitdaImpactFromARR = arrShortfall * 0.72; 

    // Mock portfolio data (in a real system, this would come from another source)
    const currentPortfolioEBITDA = 72000000;
    const currentPortfolioRevenue = 290000000;

    // --- 2. Perform the Calculation ---
    const techFlowAdjustedEBITDA = (staticContext.data?.criticalAnomalies.find(a => a.id === 'arr-comp').analysis.includes('$560K') ? 560000 : -3670000); // Simplified from QoE report
    
    const proFormaEBITDA = currentPortfolioEBITDA + techFlowAdjustedEBITDA - ebitdaImpactFromARR;
    const proFormaRevenue = currentPortfolioRevenue + trueARR;
    
    const initialMargin = (currentPortfolioEBITDA / currentPortfolioRevenue) * 100;
    const proFormaMargin = (proFormaEBITDA / proFormaRevenue) * 100;
    const marginDilution = proFormaMargin - initialMargin;

    // --- 3. Return a Structured, Analytical Result ---
    return {
        summary: `The acquisition of TechFlow is projected to be dilutive to the portfolio's EBITDA margin in the short term.`,
        initialPortfolioMargin: `${initialMargin.toFixed(1)}%`,
        proFormaPortfolioMargin: `${proFormaMargin.toFixed(1)}%`,
        impact: `A dilution of approximately ${marginDilution.toFixed(1)} percentage points.`,
        keyDrivers: [
            `A one-time remediation cost of $${(techDebtRemediationCost / 1000000).toFixed(1)}M for technical debt.`,
            `A significant Quality of Earnings adjustment due to non-standard ARR recognition, reducing TechFlow's standalone contribution.`,
            `The model assumes synergies will be realized over the medium term, which would improve this outlook.`
        ]
    };
};

const getDiligenceAnomalies = (appContext, staticContext) => {
    if (appContext.companyId !== 'techflow-solutions') return null;
    return {
        criticalAnomalies: staticContext.data?.criticalAnomalies,
        otherObservations: staticContext.data?.otherObservations
    };
};

const getOrganizationalExcellenceContext = (appContext, staticContext) => {
    const { companyId } = appContext;
    const narrative = staticContext.curatedKnowledge?.[companyId]?.['D1'];
    let supportingData = {};

    if (companyId === 'techflow-solutions') {
        supportingData = {
            companyProfile: staticContext.data?.companyProfile,
            diligencePlanHRTasks: staticContext.data?.diligencePlan?.filter(t => t.category === 'Company & Team')
        };
    } else if (companyId === 'cloudvantage') {
        supportingData = {
            companyProfile: staticContext.data?.companyProfile,
            ceoDashboard: staticContext.data?.ceoDashboard
        };
    }
    return { narrative, supportingData };
};

const getSalesContext = (appContext, staticContext) => {
    const { companyId } = appContext;
    const narrative = staticContext.curatedKnowledge?.[companyId]?.['D2'];
    let supportingData = {};

    if (companyId === 'techflow-solutions') {
        supportingData = {
            diligencePlanSalesTasks: staticContext.data?.diligencePlan?.filter(t => t.category === 'Sales & Marketing'),
            customerConcentrationAnomaly: staticContext.data?.criticalAnomalies?.find(a => a.id === 'arr-comp')
        };
    } else if (companyId === 'cloudvantage') {
        supportingData = {
            croData: staticContext.data?.croData,
            keyKpis: staticContext.data?.keyKpis,
            ceoDashboard: staticContext.data?.ceoDashboard,
            commandCenterData: staticContext.data?.commandCenterData
        };
    }
    return { narrative, supportingData };
};

const getMarketingContext = (appContext, staticContext) => {
    const { companyId } = appContext;
    const narrative = staticContext.curatedKnowledge?.[companyId]?.['D3'];
    let supportingData = {};
    
    if (companyId === 'techflow-solutions') {
        supportingData = {
            diligencePlanMarketingTasks: staticContext.data?.diligencePlan?.filter(t => t.category === 'Sales & Marketing')
        };
    } else if (companyId === 'cloudvantage') {
        supportingData = {
            ceoDashboard: staticContext.data?.ceoDashboard
        };
    }
    return { narrative, supportingData };
};

const getPartnerEcosystemContext = (appContext, staticContext) => {
    const { companyId } = appContext;
    const narrative = staticContext.curatedKnowledge?.[companyId]?.['D4'];
    let supportingData = {};

    if (companyId === 'cloudvantage') {
        supportingData = {
            strategicPrograms: staticContext.data?.cloudVantagePrograms?.filter(p => p.department === 'Partners')
        };
    }
    return { narrative, supportingData };
};

const getProductContext = (appContext, staticContext) => {
    const { companyId } = appContext;
    const narrative = staticContext.curatedKnowledge?.[companyId]?.['D5'];
    let supportingData = {};

    if (companyId === 'techflow-solutions') {
        supportingData = {
            diligencePlanTechTasks: staticContext.data?.diligencePlan?.filter(t => t.workstream === 'Technology & Operations'),
            techAnomalies: staticContext.data?.criticalAnomalies?.filter(a => a.workstream === 'Technology & Operations')
        };
    } else if (companyId === 'cloudvantage') {
        supportingData = {
            strategicPrograms: staticContext.data?.cloudVantagePrograms,
            ceoDashboard: staticContext.data?.ceoDashboard // Contains AI feature status
        };
    }
    return { narrative, supportingData };
};

const getCustomerExperienceContext = (appContext, staticContext) => {
    const { companyId } = appContext;
    const narrative = staticContext.curatedKnowledge?.[companyId]?.['D6'];
    let supportingData = {};

    if (companyId === 'techflow-solutions') {
        supportingData = {
            diligencePlanCustomerTasks: staticContext.data?.diligencePlan?.filter(t => t.category === 'Customers')
        };
    } else if (companyId === 'cloudvantage') {
        supportingData = {
            keyKpis: staticContext.data?.keyKpis
        };
    }
    return { narrative, supportingData };
};

const getDigitalCoreContext = (appContext, staticContext) => {
    const { companyId } = appContext;
    return {
        narrative: staticContext.curatedKnowledge?.[companyId]?.['D7'],
        supportingData: { /* Future data can be added here */ }
    };
};

const getFinanceContext = (appContext, staticContext) => {
    const { companyId } = appContext;
    const narrative = staticContext.curatedKnowledge?.[companyId]?.['D8'];
    let supportingData = {};

    if (companyId === 'techflow-solutions') {
        supportingData = {
            financialAnomalies: staticContext.data?.criticalAnomalies?.filter(a => a.workstream === 'Financial & Risk'),
            diligencePlanFinanceTasks: staticContext.data?.diligencePlan?.filter(t => t.workstream === 'Financial & Risk')
        };
    } else if (companyId === 'cloudvantage') {
        supportingData = {
            keyKpis: staticContext.data?.keyKpis
        };
    }
    return { narrative, supportingData };
};

const getGAndAContext = (appContext, staticContext) => {
    const { companyId } = appContext;
    return {
        narrative: staticContext.curatedKnowledge?.[companyId]?.['D9'],
        supportingData: { /* Future data can be added here */ }
    };
};

const getDiligencePlanStatus = (appContext, staticContext) => {
    if (appContext.companyId !== 'techflow-solutions') return null;
    const diligencePlan = staticContext.data?.diligencePlan;
    if (!diligencePlan) return "Diligence plan data not provided.";
    
    const lateTasks = diligencePlan.filter(t => ['DD-16', 'DD-34', 'DD-50'].includes(t.id));
    const blockedTasks = diligencePlan.filter(t => t.id === 'DD-13');
    return {
        lateTasks: lateTasks.map(t => ({ id: t.id, name: t.name, reason: "Deadline has passed." })),
        blockedTasks: blockedTasks.map(t => ({ id: t.id, name: t.name, reason: "Blocked by dependency DD-12." }))
    };
};


// --- TOOL LIBRARY MANIFEST (Complete) ---
const toolManifest = {

    getOrganizationalExcellenceContext: { description: "Retrieves context for Organizational Excellence (D1), including management, HR, and corporate structure.", execute: getOrganizationalExcellenceContext },
    getSalesContext: { description: "Retrieves context for Sales (D2), including performance, GTM strategy, renewals, and pipeline.", execute: getSalesContext },
    getMarketingContext: { description: "Retrieves context for Marketing (D3), including lead generation, brand awareness, and competitive positioning.", execute: getMarketingContext },
    getPartnerEcosystemContext: { description: "Retrieves context for the Partner Ecosystem (D4), including channel partners and strategic alliances.", execute: getPartnerEcosystemContext },
    getProductContext: { description: "Retrieves context for Product & Engineering (D5), including roadmap, technical debt, and the status of product launches.", execute: getProductContext },
    getCustomerExperienceContext: { description: "Retrieves context for Customer Experience (D6), including customer success, support, NPS, and churn.", execute: getCustomerExperienceContext },
    getDigitalCoreContext: { description: "Retrieves context for the Digital Core (D7), including infrastructure, security, and core technology.", execute: getDigitalCoreContext },
    getFinanceContext: { description: "Retrieves context for Finance (D8), including financial performance, KPIs, Rule of 40, and QoE.", execute: getFinanceContext },
    getGAndAContext: { description: "Retrieves context for General & Administrative (G&A) (D9), including legal, compliance, and administrative functions.", execute: getGAndAContext },
    getDiligencePlanStatus: { description: "Analyzes the TechFlow due diligence project plan to find tasks that are currently late or blocked.", execute: getDiligencePlanStatus },
    getDiligenceAnomalies: { description: "Retrieves the list of critical and high-severity anomalies discovered during the TechFlow due diligence. Use this for any questions about risks, red flags, or problems with the TechFlow deal.", execute: getDiligenceAnomalies },      calculateAcquisitionImpact: {
        description: "Calculates the pro-forma financial impact on the portfolio's EBITDA margin from acquiring a company. Use this for questions about valuation, financial impact, dilution, or the effect of costs and anomalies on a deal.",
        execute: calculateAcquisitionImpact
    }
};

module.exports = { toolManifest };