// js/reasoning-steps.js

const reasoningSteps = {
    // Each key matches a tool name from agent-tools.js
    getSalesContext: [
        "Analyzing sales performance...",
        "Accessing CRM for pipeline data...",
        "Reviewing NewCo renewal opportunities...",
        "Synthesizing sales strategy..."
    ],
    getProductContext: [
        "Reviewing product & engineering narrative...",
        "Analyzing strategic programs for roadmap status...",
        "Checking for technical anomalies...",
        "Synthesizing product strategy..."
    ],
    getDiligencePlanStatus: [
        "Accessing TechFlow diligence plan...",
        "Analyzing task dependencies and timelines...",
        "Identifying late or blocked items...",
        "Preparing status summary..."
    ],
    getFinanceContext: [
        "Analyzing financial narratives...",
        "Retrieving key KPIs from financial reports...",
        "Scanning for financial anomalies...",
        "Synthesizing financial health..."
    ],
    // Add default/generic steps for other tools
    getOrganizationalExcellenceContext: ["Analyzing organizational structure...", "Reviewing management and HR data..."],
    getMarketingContext: ["Analyzing marketing performance...", "Reviewing lead generation funnel..."],
    getPartnerEcosystemContext: ["Analyzing partner programs...", "Reviewing strategic alliances..."],
    getCustomerExperienceContext: ["Analyzing customer success data...", "Reviewing NPS and churn metrics..."],
    getDigitalCoreContext: ["Analyzing technical infrastructure...", "Reviewing security and stability reports..."],
    getGAndAContext: ["Analyzing legal and compliance data...", "Reviewing administrative functions..."],
    
    // A fallback for when intent recognition fails but we still want a simulation
    _default: [
        "Parsing user query...",
        "Accessing relevant knowledge bases...",
        "Cross-referencing with database priorities...",
        "Synthesizing final response..."
    ]
};