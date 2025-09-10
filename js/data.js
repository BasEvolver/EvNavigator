// js/data.js - Centralized Application Data - RATIONALIZED & CONSOLIDATED (FINAL CORRECTED VERSION)

const diligencePlan_v3 = [
    // Each task now includes a 'critical' flag, a 'description', and an 'output'.
    // Business & Strategy
    { id: "DD-1", name: "Company Overview & History", duration: 0.2, dependencies: [], startDay: 1, workstream: "Business & Strategy", category: "Company & Team", critical: true, description: "Review the company's founding story, mission, and key historical milestones.", output: "1-page summary of company history and structure." },
    { id: "DD-2", name: "Organization Review", duration: 0.2, dependencies: ["DD-1"], startDay: 1, workstream: "Business & Strategy", category: "Company & Team", critical: true, description: "Analyze the current organizational chart, reporting lines, and headcount by department.", output: "Validated org chart and headcount analysis." },
    { id: "DD-3", name: "Management Assessment", duration: 0.5, dependencies: ["DD-1", "DD-2"], startDay: 1, workstream: "Business & Strategy", category: "Company & Team", critical: true, description: "Conduct interviews with key management to assess strengths, weaknesses, and cultural fit.", output: "Management team scorecard and qualitative assessment." },
    { id: "DD-4", name: "Comp Incentives Analysis", duration: 0.3, dependencies: ["DD-2", "DD-3"], startDay: 2, workstream: "Business & Strategy", category: "Company & Team", critical: false, description: "Review salary bands, bonus structures, and equity plans for alignment with growth goals.", output: "Compensation and incentive plan summary." },
    { id: "DD-5", name: "HR Growth Plans", duration: 0.4, dependencies: ["DD-2", "DD-3"], startDay: 2, workstream: "Business & Strategy", category: "Company & Team", critical: false, description: "Evaluate the company's hiring plan, onboarding processes, and talent retention strategies.", output: "Assessment of HR scalability and key hiring risks." },
    { id: "DD-6", name: "Acquisition History", duration: 0.3, dependencies: ["DD-1"], startDay: 1, workstream: "Business & Strategy", category: "Company & Team", critical: false, description: "Review past M&A activity for integration success and realized synergies.", output: "Summary of historical M&A performance." },
    { id: "DD-7", name: "Addressable Market", duration: 0.4, dependencies: [], startDay: 1, workstream: "Business & Strategy", category: "Market & Competition", critical: true, description: "Validate management's TAM, SAM, and SOM estimates using third-party data.", output: "Validated market sizing model." },
    { id: "DD-8", name: "Barriers to Entry", duration: 0.3, dependencies: ["DD-7"], startDay: 2, workstream: "Business & Strategy", category: "Market & Competition", critical: false, description: "Assess the company's competitive moat, including IP, network effects, and switching costs.", output: "Analysis of competitive differentiators." },
    { id: "DD-9", name: "Macro Trends", duration: 0.2, dependencies: ["DD-7"], startDay: 2, workstream: "Business & Strategy", category: "Market & Competition", critical: false, description: "Identify key industry trends (e.g., regulatory, technological) that could impact the business.", output: "Summary of market tailwinds and headwinds." },
    { id: "DD-10", name: "Competitive Dynamics", duration: 0.4, dependencies: ["DD-7", "DD-8", "DD-9"], startDay: 2, workstream: "Business & Strategy", category: "Market & Competition", critical: true, description: "Profile key competitors, their market share, and relative strengths/weaknesses.", output: "Competitive landscape matrix." },
    { id: "DD-11", name: "Market Positioning", duration: 0.3, dependencies: ["DD-7", "DD-8", "DD-10"], startDay: 3, workstream: "Business & Strategy", category: "Market & Competition", critical: true, description: "Determine the company's position in the market relative to competitors (e.g., price vs. features).", output: "2x2 positioning chart." },
    // Technology & Operations
    { id: "DD-12", name: "Development Process", duration: 0.3, dependencies: [], startDay: 2, workstream: "Technology & Operations", category: "Products and Technology", critical: true, description: "Review the software development lifecycle (SDLC), agile methodologies, and release cadence.", output: "Assessment of engineering team's velocity and process maturity." },
    { id: "DD-13", name: "Architecture Review", duration: 0.4, dependencies: ["DD-12"], startDay: 3, workstream: "Technology & Operations", category: "Products and Technology", critical: true, description: "Analyze the core application architecture for scalability, technical debt, and modernization risks.", output: "Architectural diagram with key risks and recommendations.", assignedTo: [{name: "Chris Green", role: "Lead Architect (Target)"}, {name: "Brenda (VP)", role: "Internal"}] },
    { id: "DD-14", name: "Product Roadmap", duration: 0.3, dependencies: ["DD-12"], startDay: 3, workstream: "Technology & Operations", category: "Products and Technology", critical: false, description: "Evaluate the credibility and ROI of the product roadmap for the next 18-24 months.", output: "Critique of the product roadmap and alignment with strategy." },
    { id: "DD-15", name: "Product Management", duration: 0.3, dependencies: ["DD-12", "DD-14"], startDay: 3, workstream: "Technology & Operations", category: "Products and Technology", critical: false, description: "Assess the process for gathering customer feedback and prioritizing features.", output: "Review of product management function." },
    { id: "DD-16", name: "Code Scan", duration: 0.4, dependencies: ["DD-13"], startDay: 4, workstream: "Technology & Operations", category: "Products and Technology", critical: false, description: "Perform a static code analysis to identify security vulnerabilities and code quality issues.", output: "Code quality and security report (e.g., Veracode scan results).", assignedTo: [{name: "Veracode", role: "External Partner"}, {name: "Alex (Analyst)", role: "Internal"}] },
    { id: "DD-17", name: "Documentation", duration: 0.3, dependencies: ["DD-13", "DD-16"], startDay: 4, workstream: "Technology & Operations", category: "Products and Technology", critical: false, description: "Review the quality and completeness of technical and user documentation.", output: "Gap analysis of existing documentation." },
    { id: "DD-18", name: "QA Testing Review", duration: 0.3, dependencies: ["DD-15", "DD-16", "DD-17"], startDay: 5, workstream: "Technology & Operations", category: "Products and Technology", critical: false, description: "Analyze the company's quality assurance processes, including automated and manual testing.", output: "Assessment of QA maturity and bug tracking." },
    { id: "DD-19", name: "Release Management", duration: 0.2, dependencies: ["DD-15", "DD-18"], startDay: 5, workstream: "Technology & Operations", category: "Products and Technology", critical: false, description: "Review the process for deploying new releases to production and handling rollbacks.", output: "Summary of release management process." },
    // Commercial & Customer
    { id: "DD-20", name: "Pipeline Review", duration: 0.3, dependencies: [], startDay: 2, workstream: "Commercial & Customer", category: "Sales & Marketing", critical: true, description: "Analyze the sales pipeline for coverage, stage distribution, and forecast accuracy.", output: "Sales pipeline health assessment." },
    { id: "DD-21", name: "Quota Attainment Analysis", duration: 0.2, dependencies: ["DD-20"], startDay: 2, workstream: "Commercial & Customer", category: "Sales & Marketing", critical: false, description: "Review historical quota attainment by sales reps and segments.", output: "Analysis of sales team performance." },
    { id: "DD-22", name: "Turnover Analysis", duration: 0.2, dependencies: ["DD-4", "DD-5", "DD-21"], startDay: 3, workstream: "Commercial & Customer", category: "Sales & Marketing", critical: false, description: "Analyze sales team attrition rates and identify potential causes.", output: "Sales turnover risk assessment." },
    { id: "DD-23", name: "Distributors / Channel Partners", duration: 0.5, dependencies: [], startDay: 2, workstream: "Commercial & Customer", category: "Sales & Marketing", critical: false, description: "Evaluate the performance and structure of any existing channel partnership programs.", output: "Channel program effectiveness review." },
    { id: "DD-24", name: "Sales Effectiveness", duration: 0.4, dependencies: ["DD-20", "DD-21", "DD-23"], startDay: 3, workstream: "Commercial & Customer", category: "Sales & Marketing", critical: true, description: "Assess the efficiency of the sales process, including conversion rates and sales cycle length.", output: "Funnel conversion and efficiency metrics." },
    { id: "DD-25", name: "Lead Funnel Metrics", duration: 0.2, dependencies: [], startDay: 2, workstream: "Commercial & Customer", category: "Sales & Marketing", critical: false, description: "Analyze the marketing funnel from lead generation to MQL and SQL.", output: "Marketing lead funnel analysis." },
    { id: "DD-26", name: "Conversion Trends", duration: 0.2, dependencies: ["DD-9", "DD-25"], startDay: 3, workstream: "Commercial & Customer", category: "Sales & Marketing", critical: false, description: "Review trends in lead-to-opportunity and opportunity-to-close conversion rates.", output: "Historical conversion rate trends." },
    { id: "DD-27", name: "Pricing Strategy", duration: 0.4, dependencies: ["DD-10", "DD-11", "DD-26"], startDay: 4, workstream: "Commercial & Customer", category: "Sales & Marketing", critical: true, description: "Analyze the current pricing model, discounting practices, and packaging strategy.", output: "Pricing and packaging assessment with recommendations." },
    { id: "DD-28", name: "Brand Assessment", duration: 0.3, dependencies: ["DD-11"], startDay: 3, workstream: "Commercial & Customer", category: "Sales & Marketing", critical: false, description: "Review brand perception, awareness, and messaging consistency.", output: "Brand equity summary." },
    { id: "DD-29", name: "Yield on Sales & Marketing $", duration: 0.3, dependencies: ["DD-20", "DD-23", "DD-24", "DD-25", "DD-26"], startDay: 4, workstream: "Commercial & Customer", category: "Sales & Marketing", critical: false, description: "Calculate LTV:CAC ratio and marketing spend ROI.", output: "Unit economics analysis." },
    { id: "DD-30", name: "Detailed Transaction Analysis", duration: 0.2, dependencies: [], startDay: 3, workstream: "Commercial & Customer", category: "Customers", critical: true, description: "Analyze raw transaction data to understand purchasing patterns.", output: "Transactional data summary." },
    { id: "DD-31", name: "Cohort Analysis", duration: 0.2, dependencies: ["DD-30"], startDay: 3, workstream: "Commercial & Customer", category: "Customers", critical: false, description: "Analyze customer cohorts to understand retention and expansion behavior over time.", output: "Cohort analysis chart for NRR." },
    { id: "DD-32", name: "Customer Concentration over time", duration: 0.2, dependencies: ["DD-30"], startDay: 3, workstream: "Commercial & Customer", category: "Customers", critical: true, description: "Identify revenue concentration by customer and assess risks.", output: "Top 10 customer list and concentration percentage." },
    { id: "DD-33", name: "Churn Analysis", duration: 0.2, dependencies: ["DD-31", "DD-32"], startDay: 4, workstream: "Commercial & Customer", category: "Customers", critical: false, description: "Analyze gross and net revenue churn rates, and identify reasons for churn.", output: "Churn analysis summary." },
    { id: "DD-34", name: "Net Promoter Score", duration: 0.3, dependencies: ["DD-28", "DD-33"], startDay: 4, workstream: "Commercial & Customer", category: "Customers", critical: false, description: "Review NPS data and customer feedback.", output: "NPS trend analysis.", assignedTo: [{name: "Acme Marketing", role: "External Agency"}, {name: "Sarah (Associate)", role: "Internal"}] },
    { id: "DD-35", name: "Lifetime Value", duration: 0.2, dependencies: ["DD-30", "DD-31", "DD-33"], startDay: 4, workstream: "Commercial & Customer", category: "Customers", critical: true, description: "Calculate customer lifetime value (LTV).", output: "LTV calculation model." },
    { id: "DD-36", name: "Customer Segmentation", duration: 0.2, dependencies: ["DD-31", "DD-35"], startDay: 5, workstream: "Commercial & Customer", category: "Customers", critical: false, description: "Segment customers by size, industry, or behavior to identify ideal customer profiles.", output: "Customer segmentation analysis." },
    { id: "DD-37", name: "Annual Contract Value Trends", duration: 0.2, dependencies: ["DD-30"], startDay: 4, workstream: "Commercial & Customer", category: "Customers", critical: true, description: "Analyze the trend of average ACV for new customers.", output: "ACV trend chart." },
    { id: "DD-38", name: "Survey Analysis", duration: 0.4, dependencies: ["DD-28", "DD-34", "DD-36"], startDay: 5, workstream: "Commercial & Customer", category: "Customers", critical: false, description: "Review any customer satisfaction or product feedback surveys.", output: "Survey results summary." },
    { id: "DD-39", name: "Interview w Top Customers", duration: 3, dependencies: ["DD-34", "DD-38"], startDay: 5, workstream: "Commercial & Customer", category: "Customers", critical: false, description: "Conduct interviews with a sample of top customers to validate the value proposition.", output: "Customer interview transcripts and summary of findings." },
    // Financial & Risk
    { id: "DD-40", name: "Financial Statement Analysis", duration: 0.3, dependencies: [], startDay: 4, workstream: "Financial & Risk", category: "Financial & Accounting", critical: true, description: "Analyze historical income statements, balance sheets, and cash flow statements.", output: "Historical financial performance summary.", assignedTo: [{name: "EY", role: "External Partner"}, {name: "Alex (Analyst)", role: "Internal"}] },
    { id: "DD-41", name: "Expense Breakdown", duration: 0.2, dependencies: ["DD-29", "DD-40"], startDay: 5, workstream: "Financial & Risk", category: "Financial & Accounting", critical: false, description: "Break down operating expenses by department and nature (fixed vs. variable).", output: "Detailed expense structure analysis." },
    { id: "DD-42", name: "Capex Projections", duration: 0.2, dependencies: ["DD-41"], startDay: 8, workstream: "Financial & Risk", category: "Financial & Accounting", critical: false, description: "Review historical and projected capital expenditures.", output: "Capex analysis and forecast." },
    { id: "DD-43", name: "Pro-Forma Financial Model", duration: 0.5, dependencies: ["DD-6", "DD-14", "DD-35", "DD-41", "DD-42"], startDay: 8, workstream: "Financial & Risk", category: "Financial & Accounting", critical: true, description: "Build a pro-forma financial model based on diligence findings and growth assumptions.", output: "Base case financial model." },
    { id: "DD-44", name: "Gross Margin Analysis", duration: 0.3, dependencies: ["DD-27", "DD-40", "DD-41"], startDay: 8, workstream: "Financial & Risk", category: "Financial & Accounting", critical: true, description: "Analyze gross margin trends by product and service line.", output: "Gross margin bridge and analysis." },
    { id: "DD-45", name: "Growth Assumptions Review", duration: 0.3, dependencies: ["DD-6", "DD-9", "DD-42", "DD-43"], startDay: 9, workstream: "Financial & Risk", category: "Financial & Accounting", critical: true, description: "Pressure-test the key assumptions driving the revenue forecast in the financial model.", output: "Sensitivity analysis on key growth drivers." },
    { id: "DD-46", name: "Quality of Revenue Analysis", duration: 0.4, dependencies: ["DD-27", "DD-32", "DD-37", "DD-40", "DD-44"], startDay: 9, workstream: "Financial & Risk", category: "Financial & Accounting", critical: true, description: "Assess the quality and predictability of recurring revenue streams.", output: "Quality of Revenue report." },
    { id: "DD-47", name: "Accounting Policies", duration: 0.2, dependencies: [], startDay: 4, workstream: "Financial & Risk", category: "Financial & Accounting", critical: false, description: "Review key accounting policies, especially revenue recognition, for aggressiveness.", output: "Summary of key accounting policies." },
    { id: "DD-48", name: "Audited Financials", duration: 0.3, dependencies: ["DD-40", "DD-47"], startDay: 10, workstream: "Financial & Risk", category: "Financial & Accounting", critical: true, description: "Review audited financial statements and any management letter comments.", output: "Auditor's report summary." },
    { id: "DD-49", name: "Contingent Liabilities", duration: 0.3, dependencies: [], startDay: 11, workstream: "Financial & Risk", category: "Financial & Accounting", critical: false, description: "Identify any off-balance sheet or contingent liabilities.", output: "List of potential liabilities." },
    { id: "DD-50", name: "Tax Analysis", duration: 0.2, dependencies: ["DD-47"], startDay: 5, workstream: "Financial & Risk", category: "Financial & Accounting", critical: false, description: "Review tax returns and ensure compliance.", output: "Tax diligence report.", assignedTo: [{name: "EY", role: "External Partner"}, {name: "Brenda (VP)", role: "Internal"}] },
    { id: "DD-51", name: "Working Capital Review", duration: 0.2, dependencies: ["DD-40", "DD-50"], startDay: 8, workstream: "Financial & Risk", category: "Financial & Accounting", critical: false, description: "Analyze historical working capital levels and define a target.", output: "Working capital peg calculation." },
    { id: "DD-52", name: "Quality of Earnings", duration: 0.4, dependencies: ["DD-37", "DD-40", "DD-44", "DD-46", "DD-48", "DD-51"], startDay: 11, workstream: "Financial & Risk", category: "Financial & Accounting", critical: true, description: "Perform a Quality of Earnings (QoE) analysis to normalize EBITDA.", output: "QoE report with adjustments." },
    { id: "DD-53", name: "Corporate Documentation Review", duration: 0.2, dependencies: [], startDay: 1, workstream: "Financial & Risk", category: "Legal", critical: false, description: "Review articles of incorporation, bylaws, and board minutes.", output: "Corporate structure summary." },
    { id: "DD-54", name: "Patent Analysis", duration: 0.3, dependencies: ["DD-53"], startDay: 1, workstream: "Financial & Risk", category: "Legal", critical: false, description: "Review key patents and intellectual property.", output: "IP portfolio summary." },
    { id: "DD-55", name: "Contract Analysis", duration: 0.4, dependencies: ["DD-53", "DD-54"], startDay: 10, workstream: "Financial & Risk", category: "Legal", critical: false, description: "Review key customer and vendor contracts for non-standard terms.", output: "Contract review summary with red flags." },
    { id: "DD-56", name: "Litigation Review", duration: 0.3, dependencies: ["DD-49", "DD-55"], startDay: 11, workstream: "Financial & Risk", category: "Legal", critical: false, description: "Identify any ongoing or pending litigation.", output: "Litigation summary." },
    { id: "DD-57", name: "Capitalization Analysis", duration: 0.2, dependencies: ["DD-49", "DD-53", "DD-56"], startDay: 12, workstream: "Financial & Risk", category: "Legal", critical: false, description: "Review the company's capitalization table.", output: "Validated cap table." },
    { id: "DD-58", name: "FCPA Audit", duration: 0.4, dependencies: ["DD-57"], startDay: 12, workstream: "Financial & Risk", category: "Legal", critical: false, description: "Ensure compliance with anti-bribery and corruption laws.", output: "FCPA compliance checklist." },
    // Synthesis & Finalization
    { id: "DD-59", name: "Executive Summary & Key Findings", duration: 0.3, dependencies: ["DD-52"], startDay: 11, workstream: "Synthesis", category: "Synthesis & Planning", critical: false, description: "Synthesize all findings into a concise executive summary.", output: "Draft of executive summary." },
    { id: "DD-60", name: "Risk Matrix & Mitigation Plan", duration: 0.4, dependencies: ["DD-52", "DD-56", "DD-57", "DD-58"], startDay: 12, workstream: "Synthesis", category: "Synthesis & Planning", critical: false, description: "Create a matrix of all identified risks and propose mitigation strategies.", output: "Risk mitigation plan." },
    { id: "DD-61", name: "Synergy Identification", duration: 0.3, dependencies: ["DD-11", "DD-24", "DD-46"], startDay: 11, workstream: "Synthesis", category: "Synthesis & Planning", critical: false, description: "Identify potential cost and revenue synergies.", output: "List of quantified synergies." },
    { id: "DD-62", name: "100-Day Integration Plan", duration: 0.5, dependencies: ["DD-59", "DD-60", "DD-61"], startDay: 12, workstream: "Synthesis", category: "Synthesis & Planning", critical: false, description: "Develop a detailed 100-day plan for post-close execution.", output: "Draft of 100-Day Plan." },
    { id: "DD-63", name: "Value Creation Plan", duration: 0.5, dependencies: ["DD-43", "DD-45", "DD-61"], startDay: 12, workstream: "Value Creation", category: "Value Creation", critical: false, description: "Outline the key levers for value creation over the investment horizon.", output: "Value Creation Plan (VCP) document." },
    { id: "DD-64", name: "Operating Model Design", duration: 0.4, dependencies: ["DD-3", "DD-11", "DD-62"], startDay: 15, workstream: "Value Creation", category: "Value Creation", critical: false, description: "Design the target operating model, including any organizational changes.", output: "Target Operating Model blueprint." },
    { id: "DD-65", name: "Investment Committee Memo", duration: 0.4, dependencies: ["DD-59", "DD-63"], startDay: 12, workstream: "Investment Committee", category: "IC Prep", critical: false, description: "Draft the investment committee memorandum.", output: "IC Memo draft." },
    { id: "DD-66", name: "Financial Model Scenarios", duration: 0.3, dependencies: ["DD-43", "DD-63"], startDay: 12, workstream: "Investment Committee", category: "IC Prep", critical: false, description: "Run upside, base, and downside scenarios in the financial model.", output: "Scenario analysis outputs." },
    { id: "DD-67", name: "Deal Terms Recommendation", duration: 0.2, dependencies: ["DD-60", "DD-65"], startDay: 15, workstream: "Investment Committee", category: "IC Prep", critical: false, description: "Finalize recommendation on deal structure and key terms.", output: "Term sheet recommendations." },
    { id: "DD-68", name: "Comprehensive DD Report", duration: 0.5, dependencies: ["DD-59", "DD-67"], startDay: 16, workstream: "Final Deliverables", category: "Final Deliverables", critical: false, description: "Compile all findings into a final, comprehensive due diligence report.", output: "Final Due Diligence Report." },
    { id: "DD-69", name: "Management Presentation", duration: 0.3, dependencies: ["DD-65", "DD-68"], startDay: 16, workstream: "Final Deliverables", category: "Final Deliverables", critical: false, description: "Prepare a presentation for management on the key findings and go-forward plan.", output: "Management presentation deck." },
    { id: "DD-70", name: "Data Room Archive", duration: 0.2, dependencies: [], startDay: 16, workstream: "Final Deliverables", category: "Final Deliverables", critical: false, description: "Create a final archive of the data room for legal and compliance purposes.", output: "Zipped archive of the data room." }
];

const categoryToWorkstreamMap = {
    'Documentation': 'Technology & Operations',
    'Technical': 'Technology & Operations',
    'Commercial': 'Commercial & Customer',
    'HR': 'Business & Strategy',
    'Finance': 'Financial & Risk',
    'Legal': 'Financial & Risk',
    'Security': 'Technology & Operations',
    'Sales': 'Commercial & Customer',
    'Marketing': 'Commercial & Customer',
    'Product': 'Technology & Operations',
    'BI': 'Financial & Risk',
    'Operations': 'Technology & Operations'
};

const menuItems = [
    { id: 'home', label: 'Home', icon: `<svg>...</svg>`},
    { id: 'portco', label: 'PortCo', icon: `<svg>...</svg>`},
    { id: 'aria', label: 'ARIA', icon: `<svg>...</svg>`},
    { id: 'workspace', label: "Workspace", icon: `<svg>...</svg>`},
    { id: 'modeling', label: 'Modeling', icon: `<svg>...</svg>`}
];

const techflow_anomalies = [
    { id: 'arr-comp', workstream: 'Financial & Risk', title: 'Anomaly #1: Non-Standard ARR Composition', issue: 'ARR includes projected perpetual revenue spread over 18 months', severity: 'CRITICAL', sourceDocuments: ['DDI-039 - Revenue_Recognition_Policy.pdf', 'DDI-026 - Audited_Financial_Statements.pdf'], impact: 'Overstated recurring revenue metrics', analysis: 'The reported $12M ARR is composed of multiple revenue streams that do not align with generally accepted ARR definitions. Our analysis found that approximately 23% ($2.76M) of the reported ARR consists of projected perpetual license revenue spread over 18 months post-contract signing. Additionally, maintenance fees on legacy perpetual contracts comprise another 18% ($2.16M). Only 59% ($7.08M) represents true committed subscription revenue. This composition significantly overstates the company\'s recurring revenue quality and predictability, which is a key metric for SaaS valuations.' },
    { id: 'maint-fee', workstream: 'Financial & Risk', title: 'Anomaly #2: Inconsistent Maintenance Fee Structure', issue: 'Maintenance fees vary from 12% to 28% of contract value', severity: 'HIGH', sourceDocuments: ['DDI-010 - Customer_Contracts_Top_50.zip', 'DDI-061 - Customer_Contracts_and_Terms.zip'], impact: 'Revenue predictability and pricing strategy concerns', analysis: 'Our contract analysis revealed significant inconsistencies in maintenance fee structures across the customer base. Of the 247 perpetual license contracts reviewed, 34% charge maintenance fees below the industry minimum of 17%, with some as low as 12%. This suggests either aggressive pricing to win deals or lack of pricing discipline. The wide variance (12%-28%) indicates inconsistent value delivery or negotiation practices. Industry benchmarks typically see maintenance fees between 18-22% for mature software companies, making TechFlow\'s structure both below market and highly variable.' },
    { id: 'product-launch', workstream: 'Technology & Operations', title: 'Anomaly #3: Failed Recent Product Launches', issue: 'Zero sales recorded for 3 most recent product launches', severity: 'CRITICAL', sourceDocuments: ['DDI-073 - Product_Roadmaps.pptx', 'DDI-050 - CRM_Pipeline_Reports.csv', 'DDI-031 - Financial_Models.xlsx'], impact: 'Innovation capacity and market fit concerns', analysis: "Three recent product launches have generated zero revenue to date: 'TechFlow Analytics Pro' (launched March 2024), 'TechFlow Mobile Suite' (launched September 2024), and 'TechFlow AI Assistant' (launched February 2025). Combined R&D investment for these products totaled $3.2M over 18 months. This pattern suggests potential issues with product-market fit, go-to-market execution, or competitive positioning. The lack of any sales traction, even pilot programs or trials, raises questions about the company's innovation pipeline and ability to expand beyond its core offerings. This could significantly impact future growth projections and the sustainability of R&D investments." }
];

const otherObservations_v2 = [
    { id: 'obs1', workstream: 'Business & Strategy', text: 'Management team is technically strong but lacks experience scaling a sales organization.' },
    { id: 'obs2', workstream: 'Technology & Operations', text: 'The core product has a loyal customer base but an aging user interface.' },
    { id: 'obs3', workstream: 'Commercial & Customer', text: 'Company has no formal channel partnership program, representing an untapped growth vector.' }
];

const techflow_minorObservations = [
    { id: 'obs1', category: 'Documentation', title: 'Inconsistent naming conventions in technical documents.', severity: 'Minor', analysis: 'Analysis of technical documents revealed multiple, conflicting naming conventions for key modules. This poses a minor risk of confusion during technical hand-offs and could slightly increase onboarding time for new engineers.' },
    { id: 'obs2', category: 'Technical', title: 'Multiple active coding standards in repository.', severity: 'Minor', analysis: 'The primary code repository contains modules adhering to different standards (PEP8, Google Style Guide). This increases code complexity and maintenance overhead, impacting long-term developer velocity.' },
    { id: 'obs3', category: 'Commercial', title: 'Sample SOWs lack specific, measurable deliverables.', severity: 'Minor', analysis: 'A review of 20 sample Statements of Work found that 40% lack specific, measurable deliverables. This creates a risk of scope creep and potential customer disputes over project completion.' },
    { id: 'obs4', category: 'HR', title: 'High turnover in junior engineering department.', severity: 'Minor', analysis: 'HR records show a 35% annualized turnover rate for engineers with less than two years of tenure. This indicates potential issues with management, compensation, or career pathing that could impact team stability.' },
    { id: 'obs5', category: 'Finance', title: 'Expense reporting process is entirely manual.', severity: 'Minor', analysis: 'The expense reporting process requires physical signatures and manual data entry into the accounting system. This is an inefficient process that creates delays in the monthly financial close.' },
    { id: 'obs6', category: 'Legal', title: 'Several enterprise contracts are missing customer signatures.', severity: 'Minor', analysis: 'A review of the contract database found five enterprise contracts that are missing the final customer signature. This poses a potential, though unlikely, risk regarding the enforceability of these agreements.' },
    { id: 'obs7', category: 'Security', title: 'Multi-factor authentication is not enforced on key internal systems.', severity: 'Minor', analysis: 'Key internal systems, including the primary CRM, do not have mandatory multi-factor authentication. This increases the risk of unauthorized access from compromised credentials.' },
    { id: 'obs8', category: 'Sales', title: 'Low adoption of contact logging in Salesforce.', severity: 'Minor', analysis: 'Salesforce data shows that Account Executives log less than 50% of their customer interactions. This results in an incomplete customer history, hindering accurate forecasting and account hand-offs.' },
    { id: 'obs9', category: 'Marketing', title: 'Website has a low Lighthouse performance score.', severity: 'Minor', analysis: 'The company website scores 65/100 on Google Lighthouse for performance. This provides a poor user experience for prospects and has a negative impact on search engine optimization (SEO) rankings.' },
    { id: 'obs10', category: 'Product', title: 'No formal process for prioritizing customer feature requests.', severity: 'Minor', analysis: 'Feature requests are collected in an ad-hoc manner via email and support tickets. The lack of a formal prioritization process creates a risk of building features that lack broad market demand.' },
    { id: 'obs11', category: 'BI', title: 'Key business dashboards are manually updated.', severity: 'Minor', analysis: 'Critical business dashboards for sales and marketing are manually updated in spreadsheets. This is a significant time sink for analysts and carries a high risk of data entry errors.' },
    { id: 'obs12', category: 'Operations', title: 'Vendor contract review process is ad-hoc.', severity: 'Minor', analysis: 'There is no central repository or formal review cadence for vendor contracts. This creates a risk of auto-renewals for unused or unfavorable services, leading to unnecessary operational expense.' }
];

const techflow_workstreamData = [
    { 
        id: 'business', 
        title: 'Business & Strategy', 
        color: 'var(--accent-blue)', 
        icon: `<svg>...</svg>`, // Icon SVG remains the same
        cards: [
            {label: "Market Size (TAM)", value: "$5.2B", context: "Based on third-party analyst reports (DDI-068), but management's internal model (DDI-069) uses aggressive assumptions.", next_step: "Next step is to validate management's assumptions in task DD-7."},
            {label: "Competitive Moat", value: "Medium", context: "The company has a loyal customer base but faces pressure from a modern competitor (InnovateCorp) and a slow-moving incumbent (Legacy Inc.).", next_step: "Deep dive on competitive dynamics (DD-10) is scheduled for Day 2."},
            {label: "Management Strength", value: "7.5/10", context: "The team is technically strong and deeply knowledgeable about the product. However, there is a notable lack of experience in scaling a GTM organization.", next_step: "Formal management assessments (DD-3) are underway to create a development plan."}
        ],
        suggestedActions: [
            { text: "Analyze the credibility of the 5-year strategic plan.", description: "Compare management's forecast against historical performance and market data." },
            { text: "Generate key questions for the CEO regarding the strategic plan.", description: "Create a list of targeted questions to challenge the plan's assumptions." },
            { text: "Add 'Lack of GTM Experience' as a key risk to the workspace.", description: "Flag this organizational gap to track it as part of the diligence process." }
        ] 
    },
    { 
        id: 'commercial', 
        title: 'Commercial & Customer', 
        color: 'var(--accent-teal)', 
        icon: `<svg>...</svg>`,
        cards: [
            {label: "LTV:CAC Ratio", value: "3.1x", context: "This is a healthy ratio, but analysis of CRM data (DDI-050) shows it's driven by a few large accounts, not broad market efficiency.", next_step: "A full analysis of the sales and marketing yield (DD-29) is planned for Day 4."},
            {label: "Net Revenue Retention", value: "105%", context: "NRR is positive but lower than top-quartile SaaS benchmarks. Cohort analysis (DDI-063) suggests limited expansion revenue.", next_step: "A detailed churn analysis (DD-33) is needed to understand the drivers."},
            {label: "Customer Concentration", value: "High", context: "The top 2 customers account for 28% of ARR (DDI-062). One of these key contracts (DDI-010) has non-standard terms.", next_step: "Interviews with top customers (DD-39) are scheduled for Day 5 to assess relationship health."}
        ],
        suggestedActions: [
            { text: "Identify the top 10 customers by revenue and any concentration risks.", description: "Generate a chart showing the revenue distribution across the customer base." },
            { text: "Analyze the efficiency of the sales and marketing funnel.", description: "Create a funnel visualization to identify key leakage points from MQL to close." },
            { text: "Generate a pricing model with 'Good-Better-Best' tiers.", description: "Create a draft pricing model to improve monetization and expansion revenue." }
        ] 
    },
    { 
        id: 'tech', 
        title: 'Technology & Operations', 
        color: 'var(--purple)', 
        icon: `<svg>...</svg>`,
        cards: [
            {label: "Technical Debt Score", value: "High", context: "Architectural diagrams (DDI-078) and initial code reviews indicate a legacy monolithic architecture that hinders scalability.", next_step: "A full code scan (DD-16) is scheduled for Day 4 to quantify the risks."},
            {label: "Dev Velocity", value: "Low", context: "Analysis of Jira data (DDI-076) shows a 95-day cycle time, well below the industry benchmark of 45-60 days for this sector.", next_step: "A detailed review of the development process (DD-12) is currently in progress."},
            {label: "Product Launch Success", value: "Poor", context: "Financial models (DDI-031) and CRM data (DDI-050) confirm zero revenue from the last three major product launches.", next_step: "A review of the product roadmap (DD-14) is scheduled for Day 3 to assess market alignment."}
        ],
        suggestedActions: [
            { text: "Summarize the key architectural risks and their potential cost to remediate.", description: "Provide an analysis of the legacy monolith and its impact on future growth." },
            { text: "How does the R&D team's velocity compare to industry benchmarks?", description: "Generate a comparison of TechFlow's key R&D metrics against similar SaaS companies." },
            { text: "What is the plan for migrating off the legacy monolithic architecture?", description: "Assess the credibility and completeness of the current migration plan." }
        ] 
    },
    { 
        id: 'financial', 
        title: 'Financial & Risk', 
        color: 'var(--status-warning)', 
        icon: `<svg>...</svg>`,
        cards: [
            {label: "Gross Margin", value: "72%", context: "This is a strong margin, but a deeper COGS analysis (DDI-048) is needed to confirm its stability across product lines.", next_step: "A full Gross Margin Analysis (DD-44) is scheduled for Day 8."},
            {label: "Quality of Earnings", value: "Medium", context: "Initial review of financials (DDI-026) and the revenue recognition policy (DDI-039) has surfaced two critical anomalies.", next_step: "A full Quality of Earnings analysis (DD-52) is planned for Day 11 to produce an adjusted EBITDA."},
            {label: "Cash Runway", value: "11 mos", context: "Based on the management's financial model (DDI-031), which contains aggressive and unvalidated growth assumptions.", next_step: "A 'Base Case' financial model (DD-43) will be built on Day 8 to provide a more realistic runway."}
        ],
        suggestedActions: [
            { text: "Provide an overview of the current registered anomalies.", description: "Detail the critical and high-severity issues found in the financial and operational data." },
            { text: "Analyze the quality of earnings and identify any one-time adjustments.", description: "Generate a QoE bridge from reported EBITDA to a normalized, adjusted EBITDA." },
            { text: "What are the key risks to achieving the 2025 forecast?", description: "Assess the credibility of management's financial projections against diligence findings." }
        ] 
    }
];

const cloudvantage_workstreamData = [
    { id: 'integration', title: 'NewCo Integration', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-purple-600"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`, cards: [{label: "100-Day Plan", value: "On Track"}, {label: "Synergy Target", value: "$2.1M"}, {label: "Team Morale", value: "Medium"}], suggestedQuestions: ["Generate a 100-day integration plan for the NewCo acquisition.", "Analyze the cross-sell opportunities between CloudVantage and NewCo products.", "Draft a communication plan to NewCo customers about the acquisition."], suggestedActions: [{ text: "Draft a communication plan to NewCo customers about the acquisition.", description: "Generate a customer-facing email to announce the acquisition and reassure them." }, { text: "Identify key integration risks.", description: "Analyze potential culture clashes, system incompatibilities, and leadership gaps." }, { text: "Create a synergy tracking dashboard.", description: "Build a simple dashboard to monitor the realization of cost and revenue synergies." }] },
    { id: 'sales', title: 'Sales & GTM', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-blue-600"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>`, cards: [{label: "Quota Attainment", value: "103%"}, {label: "Pipeline Coverage", value: "3.5x"}, {label: "NewCo Product Sales", value: "$250k"}], suggestedQuestions: ["Process the renewals for the NewCo acquisition customers.", "Analyze the current sales compensation plan for the Enterprise team.", "What are the biggest risks in the current sales pipeline?"], suggestedActions: [{ text: "Draft a revised sales comp plan.", description: "Create a new compensation plan that incentivizes cross-selling NewCo products." }, { text: "Generate talking points for the sales team about top pipeline risks.", description: "Equip the sales team with strategies to de-risk key deals in the pipeline." }, { text: "Analyze sales rep performance.", description: "Identify top performers and reps who may need additional coaching." }] },
    { id: 'product', title: 'Product & Engineering', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-indigo-600"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" x2="12" y1="2" y2="22"/></svg>`, cards: [{label: "Roadmap Progress", value: "75%"}, {label: "NPS", value: "52"}, {label: "Ticket Volume", value: "-15% WoW"}], suggestedQuestions: ["What are the key drivers behind our current NPS score?", "Analyze the recent trends in customer support ticket volume.", "What is the status of the NewCo product integration?"], suggestedActions: [{ text: "Draft a product roadmap update for the board.", description: "Create a summary slide of recent progress and upcoming feature releases." }, { text: "Analyze the root cause of recent support tickets.", description: "Identify common themes in customer issues to inform product improvements." }, { text: "Generate a list of questions for the Head of Engineering about the NewCo integration.", description: "Prepare for a technical review of the product integration status." }] },
    { id: 'finance', title: 'Financial Performance', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-green-600"><path d="M12 2.02c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4h-6"/><path d="M12 18V6"/></svg>`, cards: [{label: "ARR Growth (YoY)", value: "28%"}, {label: "EBITDA Margin", value: "31%"}, {label: "NRR", value: "128%"}], suggestedQuestions: ["Generate a board-level summary of Q2 financial performance.", "Analyze the key drivers of our Net Revenue Retention.", "Model the financial impact of a 5% price increase on the legacy NewCo customer base."], suggestedActions: [{ text: "Model the financial impact of a 5% price increase on the legacy NewCo customer base.", description: "Create a scenario model to understand the potential impact of a price change." }, { text: "Draft an email to the CFO about the EBITDA margin dip.", description: "Prepare a data-driven inquiry to understand the variance against the target." }, { text: "Generate a cohort analysis of NRR.", description: "Break down Net Revenue Retention by customer start date to identify trends." }] }
];

function renderAriaWorkstreamResponse(workstreamName, state) {
    const wsData = techflow_workstreamData.find(ws => ws.title === workstreamName);
    if (!wsData) return '<p>Workstream data not found.</p>';

    // --- DYNAMIC CONTENT GENERATION ---
    const synthesisText = `Here is the current state of the ${workstreamName} workstream. My initial analysis is focused on synthesizing foundational documents and identifying key areas for deeper investigation. The primary metrics are still being validated, and several upcoming diligence activities will provide further clarity.`;

    // Find relevant documents from the knowledge graph
    const foundationalDocs = knowledgeGraphData.nodes.filter(node => 
        node.group === 'input_document' && node.workstream === workstreamName
    ).slice(0, 2);

    // Find upcoming tasks from the project plan
    const upcomingTasks = diligencePlan_v3.filter(task => 
        task.workstream === workstreamName && task.startDay > CURRENT_PROJECT_DAY
    ).slice(0, 2);

    // --- HTML RENDERERS ---
    const kpiCardsHTML = wsData.cards.map(kpi => `
        <div class="card-base p-4">
            <p class="aria-kpi-label">${kpi.label}</p>
            <p class="aria-kpi-value">${kpi.value}</p>
            <p class="text-xs text-secondary mt-2"><strong class="text-text-primary">Context:</strong> ${kpi.context}</p>
            <p class="text-xs text-secondary mt-1"><strong class="text-text-primary">Next Step:</strong> ${kpi.next_step}</p>
        </div>
    `).join('');

    const suggestedActionsHTML = wsData.suggestedActions.map(action => `
        <button class="aria-action-card text-left w-full" data-action="run-suggested-prompt" data-question="${action.text}">
            <p class="font-semibold text-sm text-primary">${action.text}</p>
            <p class="text-xs text-secondary">${action.description}</p>
        </button>
    `).join('');

    return `
        <div class="aria-response-content">
            <div class="build-item themed-synthesis-box" style="--theme-color: ${wsData.color};">
                <div class="synthesis-content-wrapper">
                    <h3 class="response-title">${wsData.title} Workstream Briefing</h3>
                    <p class="response-text" data-typing-text="${synthesisText}"></p>
                </div>
            </div>

            <div class="build-item">
                <h4 class="response-section-title">Key Intelligence & Inputs</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="card-base">
                        <h5 class="font-bold text-sm">Foundational Documents</h5>
                        <ul class="text-xs text-secondary mt-2 space-y-1">${foundationalDocs.map(doc => `<li>${doc.label} (Quality: ${doc.qualityAssessment.rating}, Rev: ${doc.revisions})</li>`).join('')}</ul>
                    </div>
                    <div class="card-base">
                        <h5 class="font-bold text-sm">Recent Insights (Refinery)</h5>
                        <ul class="text-xs text-secondary mt-2 space-y-1"><li>Updated Pricing Model Analysis.docx</li><li>Competitor GTM Strategy Deck.pptx</li></ul>
                    </div>
                    <div class="card-base">
                        <h5 class="font-bold text-sm">Upcoming Activities</h5>
                        <ul class="text-xs text-secondary mt-2 space-y-1">${upcomingTasks.map(task => `<li>${task.id}: ${task.name}</li>`).join('')}</ul>
                    </div>
                </div>
            </div>

            <div class="build-item">
                <h4 class="response-section-title">Current Assessment</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">${kpiCardsHTML}</div>
            </div>

            <div class="build-item">
                <h4 class="response-section-title">Recommended Next Steps</h4>
                <div class="aria-action-list">${suggestedActionsHTML}</div>
            </div>
        </div>
    `;
}

function renderAriaDisciplineResponse(disciplineId, state) {
    const discipline = maturityModel.disciplines[disciplineId];
    if (!discipline) return '<p>Discipline data not found.</p>';

    const disciplineColorMap = {
        'D1': 'var(--accent-blue)', 'D2': 'var(--accent-teal)', 'D3': 'var(--purple)',
        'D4': 'var(--status-warning)', 'D5': 'var(--status-success)', 'D6': 'var(--text-secondary)'
    };
    const themeColor = disciplineColorMap[disciplineId] || 'var(--accent-blue)';

    const kpiCardsHTML = Object.values(discipline.capabilities).slice(0, 3).map(cap => `
        <div class="kpi-card">
            <p class="kpi-label">${cap.name.toUpperCase()}</p>
            <p class="kpi-value">${(Math.random() * (4.5 - 2.5) + 2.5).toFixed(1)}</p>
        </div>
    `).join('');

    const synthesisText = `This is a summary for the ${discipline.name} discipline. ${discipline.levels[2]}`;

    return `
        <div class="aria-response-content">
            <div class="build-item themed-synthesis-box" style="--theme-color: ${themeColor};">
                <div class="synthesis-content-wrapper">
                    <h3 class="response-title">${discipline.name} Discipline Synthesis</h3>
                    <p class="response-text" data-typing-text="${synthesisText}"></p>
                </div>
            </div>
            <div class="build-item">
                <h4 class="response-section-title">Key Capabilities</h4>
                <div class="kpi-grid">${kpiCardsHTML}</div>
            </div>
        </div>
    `;
}



const selectableNotes = [ { id: 'note1', text: 'The management team appears strong but lacks experience in a private equity-backed environment.' }, { id: 'note2', text: 'There is a significant concentration of revenue with the top two customers, posing a potential risk.' }, { id: 'note3', text: 'The company has strong brand recognition in its niche but has not yet explored adjacent markets.' }, { id: 'note4', text: 'Technical debt in the core product could hinder future growth and scalability if not addressed.' } ];
const capabilities = [
    { id: 'sales-strategy', discipline: 'Sales', name: 'Sales Strategy' }, { id: 'brand-awareness', discipline: 'Marketing', name: 'Brand Awareness' },
    { id: 'applications', discipline: 'Build', name: 'Application Architecture' }, { id: 'customer-success', discipline: 'Run', name: 'Customer Success' },
    { id: 'financial-reporting', discipline: 'Finance', name: 'Financial Reporting & Controls' }, { id: 'budgeting-forecasting', discipline: 'Finance', name: 'Budgeting & Forecasting' },
    { id: 'cash-flow-management', discipline: 'Finance', name: 'Cash Flow Management' }, { id: 'pricing-margin-analysis', discipline: 'Finance', name: 'Pricing & Margin Analysis' }
];
const capabilityScenarios = {
    'sales-strategy': { 1: { 2: { actions: ['Define basic lead qualification criteria (e.g., BANT).', 'Document the current sales process.'], insight: 'Establishing a documented process is the first step to identifying bottlenecks and improving team consistency.' } }, 2: { 3: { actions: ['Implement a CRM system (e.g., HubSpot, Salesforce).', 'Create standardized sales collateral and email templates.'], insight: 'A CRM will provide a single source of truth for customer interactions, enabling basic pipeline reporting and forecasting.' } }, 3: { 4: { actions: ['Develop and implement a formal sales methodology (e.g., MEDDIC, Challenger).', 'Integrate lead scoring into the CRM.'], insight: 'A formal methodology ensures a repeatable, scalable sales motion and improves forecast accuracy by qualifying deals more rigorously.' } }, 4: { 5: { actions: ['Deploy AI-powered sales forecasting and conversation intelligence tools.', 'Implement a dynamic, data-driven territory and quota plan.'], insight: 'AI-driven insights will optimize sales efforts by predicting which deals are most likely to close and identifying coaching opportunities for reps.' } } },
    'brand-awareness': { 1: { 2: { actions: ['Create professional social media profiles on relevant platforms (e.g., LinkedIn).', 'Develop a basic brand style guide (logo, colors, fonts).'], insight: 'A consistent visual identity is foundational for building brand recognition.' } }, 2: { 3: { actions: ['Launch a company blog with regular, SEO-optimized content.', 'Begin targeted social media advertising campaigns.'], insight: 'Content marketing and targeted ads will start driving inbound traffic and building an audience.' } }, 3: { 4: { actions: ['Implement a marketing automation platform to manage campaigns and nurture leads.', 'Develop a thought leadership program (webinars, whitepapers).'], insight: 'Marketing automation allows for scaling communication and personalizing the user journey, significantly improving lead quality.' } }, 4: { 5: { actions: ['Utilize a Customer Data Platform (CDP) for hyper-personalization.', 'Launch an influencer and partner marketing program.'], insight: 'A CDP provides a unified customer view, enabling highly targeted, multi-channel campaigns that maximize ROI and brand impact.' } } },
    'applications': { 1: { 2: { actions: ['Map all application dependencies.', 'Establish a version control system (e.g., Git) for all codebases.'], insight: 'Version control is non-negotiable for collaborative development and preventing code loss.' } }, 2: { 3: { actions: ['Containerize the main application using Docker.', 'Set up a basic CI/CD pipeline for automated testing and deployment.'], insight: 'CI/CD dramatically increases deployment frequency and reduces manual errors, accelerating time-to-market for new features.' } }, 3: { 4: { actions: ['Begin decomposing the monolith by extracting the first microservice.', 'Implement an API Gateway to manage service-to-service communication.'], insight: 'Extracting the first microservice proves the architectural pattern and provides immediate scalability benefits for that specific function.' } }, 4: { 5: { actions: ['Adopt a service mesh (e.g., Istio) for advanced traffic management and observability.', 'Implement event-driven architecture for asynchronous communication.'], insight: 'A service mesh provides granular control and deep insights into a complex microservices environment, ensuring resilience and security.' } } },
    'customer-success': { 1: { 2: { actions: ['Implement a shared inbox or basic ticketing system for support.', 'Create a simple FAQ/knowledge base for customers.'], insight: 'Centralizing support requests is the first step to tracking issues and identifying common problems.' } }, 2: { 3: { actions: ['Define and track a basic Customer Health Score.', 'Establish a proactive check-in cadence for key accounts.'], insight: 'A health score allows the team to move from a reactive to a proactive stance, identifying at-risk customers before they churn.' } }, 3: { 4: { actions: ['Deploy a dedicated Customer Success Platform (e.g., Gainsight, ChurnZero).', 'Automate onboarding and key touchpoints based on product usage data.'], insight: 'A CS platform automates proactive engagement at scale, ensuring a consistent customer experience and freeing up CSMs for high-value strategic work.' } }, 4: { 5: { actions: ['Use AI to predict churn risk and identify expansion opportunities.', 'Provide CSMs with AI-generated "next best actions" for each customer.'], insight: 'Predictive AI transforms customer success from a cost center to a revenue driver by systematically reducing churn and surfacing upsell opportunities.' } } },
    'financial-reporting': { 1: { 2: { actions: ['Document a month-end close checklist.', 'Perform manual bank and key balance sheet reconciliations.'], insight: 'A documented checklist is the first step toward a repeatable and auditable close process, reducing reliance on individuals.' } }, 2: { 3: { actions: ['Implement accounting software/ERP to automate journal entries.', 'Standardize the chart of accounts across the business.'], insight: 'An ERP system creates a single source of truth for financial data, drastically reducing manual consolidation errors and enabling faster closing.' } }, 3: { 4: { actions: ['Deploy a financial reporting tool (e.g., PowerBI, Tableau) for self-service dashboards.', 'Establish a formal internal controls framework (e.g., COSO-lite).'], insight: 'Self-service dashboards empower business leaders with real-time data, while a controls framework builds trust with lenders and auditors.' } }, 4: { 5: { actions: ['Implement AI for transaction categorization and anomaly detection.', 'Move towards a continuous close process with real-time reporting.'], insight: 'AI-driven finance functions can predict closing variances and identify risks before they become material, representing best-in-class financial management.' } } },
    'budgeting-forecasting': { 1: { 2: { actions: ['Establish a formal annual budgeting process with department head input.', 'Begin monthly budget vs. actual variance analysis.'], insight: 'A formal budget process creates accountability, while variance analysis is the first step in understanding business performance drivers.' } }, 2: { 3: { actions: ['Develop a driver-based financial model in Excel.', 'Implement a rolling 12-month forecast, updated quarterly.'], insight: 'A driver-based model links financial outcomes to operational metrics (e.g., sales reps, website traffic), making the forecast more accurate and actionable.' } }, 3: { 4: { actions: ['Implement a dedicated Corporate Performance Management (CPM/FP&A) tool.', 'Integrate operational data (e.g., CRM pipeline) directly into the forecast model.'], insight: 'A dedicated CPM tool eliminates Excel errors, enables complex scenario planning, and provides a scalable platform for a growing business.' } }, 4: { 5: { actions: ['Utilize predictive analytics/ML to generate baseline forecasts.', 'Automate scenario analysis for key strategic decisions.'], insight: 'AI/ML can identify complex correlations and seasonality that human analysis might miss, leading to a more accurate and less biased forecast.' } } },
    'cash-flow-management': { 1: { 2: { actions: ['Create and maintain a 13-week cash flow forecast in Excel.', 'Establish a formal process for reviewing aged receivables.'], insight: 'A 13-week cash forecast is the standard for PE-backed companies, providing critical visibility into short-term liquidity and covenant compliance.' } }, 2: { 3: { actions: ['Implement automated dunning/collections reminders.', 'Negotiate improved payment terms with key suppliers and customers.'], insight: 'Automating collections is a high-ROI activity that accelerates cash inflows, while negotiating terms can permanently improve the cash conversion cycle.' } }, 3: { 4: { actions: ['Implement a Treasury Management System (TMS) for cash pooling and investment.', 'Develop a formal working capital optimization program with clear KPIs.'], insight: 'A formal working capital program with dedicated resources can unlock millions in trapped cash from the balance sheet, a key PE value lever.' } }, 4: { 5: { actions: ['Use AI to predict customer payment behavior and optimize collections strategy.', 'Implement dynamic discounting for early payment based on real-time liquidity needs.'], insight: 'Predictive analytics transforms cash management from a reporting function to a strategic weapon, optimizing liquidity and returns.' } } },
    'pricing-margin-analysis': { 1: { 2: { actions: ['Develop a standard price list for all products/services.', 'Perform high-level gross margin analysis by product line.'], insight: 'A standard price list is the first step to instilling pricing discipline and moving away from ad-hoc discounting.' } }, 2: { 3: { actions: ['Analyze profitability by customer and product/SKU.', 'Implement a formal deal desk or approval matrix for non-standard discounts.'], insight: 'Granular profitability analysis often reveals that 20% of customers generate 80% of profits, allowing for focused retention and sales efforts.' } }, 3: { 4: { actions: ['Implement a Configure, Price, Quote (CPQ) system to enforce pricing rules.', 'Conduct a value-based pricing study to align price with customer value.'], insight: 'A CPQ system automates and controls the sales quoting process, preventing margin erosion from unauthorized discounting. Value-based pricing can lead to significant margin uplift.' } }, 4: { 5: { actions: ['Implement dynamic pricing models based on demand and competitive intelligence.', 'Use AI to provide sales reps with optimized pricing recommendations in real-time.'], insight: 'Dynamic and AI-driven pricing allows the company to maximize revenue for every single transaction, a hallmark of a highly sophisticated commercial organization.' } } },
}; 

const workspaceHeaders = {
    'techflow-solutions': {
        title: 'TechFlow Solutions',
        description: 'A niche leader in data workflow automation for the financial services industry.',
        stage: 'Due Diligence',
        priorities: {
            title: 'Investment Thesis & Strategic Objectives',
            text: "The focus is on validating the <strong>Investment Thesis</strong>, which posits that acquiring this undervalued asset and correcting its go-to-market inefficiencies will unlock significant growth. Key <strong>Strategic Objectives</strong> include quantifying technical debt, confirming customer concentration risks, and building a base-case financial model."
        }
    },
    'cloudvantage': {
        title: 'CloudVantage',
        description: 'A high-growth portfolio company specializing in enterprise cloud management software.',
        stage: 'Growth & Execution',
        priorities: {
            title: 'Execution Against Northstar Plan',
            text: "The focus is on <strong>Execution Against the Northstar</strong>, which is to achieve a Rule of 60 by FY2026. Key objectives include integrating the recent 'NewCo' acquisition to meet synergy targets, driving cross-sell of NewCo products, and maintaining momentum on the core product's technical roadmap."
        }
    }
};

const workspaceOutputs = {
    'techflow-solutions': [
        { name: 'IC Report', formats: ['word', 'pdf'] },
        { name: '100-Day Plan', formats: ['word', 'pdf'] },
        { name: 'Value Creation Plan', formats: ['excel', 'pdf'] },
        { name: 'Investment Model', formats: ['excel', 'pdf'] }
    ],
    'cloudvantage': [
        { name: 'Q3 Board Deck', formats: ['powerpoint', 'pdf'] },
        { name: 'FY26 Technical Roadmap', formats: ['powerpoint', 'pdf'] },
        { name: 'Quarterly Business Review', formats: ['word', 'pdf'] }
    ]
};

const strategicValueLevers_v2 = [
    { id: 'lever1', title: 'Territory Expansion', description: 'Expand sales into two new adjacent geographic markets.', impact: 'Medium', complexity: 'Medium' },
    { id: 'lever2', title: 'Industry Consolidation', description: 'Acquire 1-2 smaller competitors to gain market share and technology.', impact: 'High', complexity: 'High' },
    { id: 'lever3', title: 'Pricing Optimization', description: 'Implement a three-tiered, value-based pricing model.', impact: 'High', complexity: 'Medium' },
    { id: 'lever4', title: 'Operational Efficiency', description: 'Reduce cloud infrastructure costs by 15% through optimization.', impact: 'Medium', complexity: 'Low' }
];

const flaggedAnomalies = [
    { id: 'arr-comp', title: 'Non-Standard ARR Composition', severity: 'CRITICAL' },
    { id: 'product-launch', title: 'Failed Recent Product Launches', severity: 'CRITICAL' },
    { id: 'maint-fee', title: 'Inconsistent Maintenance Fee Structure', severity: 'HIGH' }
];

// =================================================================
// CONSOLIDATED RESPONSE MAPS
// =================================================================

const commandCenterAriaResponses = {
    "Provide an overview of the TechFlow Due Diligence activities.": {
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">TechFlow Due Diligence Overview</h3></div>
            <div class="build-item"><p class="response-text" data-typing-text="We are currently on **Day 9 of a 17-day** diligence plan for the TechFlow Solutions acquisition. The process is structured across four key workstreams. My analysis indicates the project is **65% complete** but is currently **'At Risk'** due to a critical blocker in the Technology workstream."></p></div>
            <div class="build-item workstream-grid mt-4">
                <div class="workstream-card alert" data-action="run-suggested-prompt" data-question="Show me the Technology & Operations workstream."><div class="workstream-alert-dot"></div><h4 class="workstream-title">Technology & Operations</h4><div class="workstream-metrics"><div><p class="workstream-value">45%</p><p class="workstream-label">Complete</p></div><div><p class="workstream-value text-error">Blocked</p><p class="workstream-label">Status</p></div></div></div>
                <div class="workstream-card" data-action="run-suggested-prompt" data-question="Show me the Commercial & Customer workstream."><h4 class="workstream-title">Commercial & Customer</h4><div class="workstream-metrics"><div><p class="workstream-value">80%</p><p class="workstream-label">Complete</p></div><div><p class="workstream-value text-success">On Track</p><p class="workstream-label">Status</p></div></div></div>
                <div class="workstream-card" data-action="run-suggested-prompt" data-question="Show me the Financial & Risk workstream."><h4 class="workstream-title">Financial & Risk</h4><div class="workstream-metrics"><div><p class="workstream-value">70%</p><p class="workstream-label">Complete</p></div><div><p class="workstream-value text-success">On Track</p><p class="workstream-label">Status</p></div></div></div>
                <div class="workstream-card" data-action="run-suggested-prompt" data-question="Show me the Business & Strategy workstream."><h4 class="workstream-title">Business & Strategy</h4><div class="workstream-metrics"><div><p class="workstream-value">90%</p><p class="workstream-label">Complete</p></div><div><p class="workstream-value text-success">On Track</p><p class="workstream-label">Status</p></div></div></div>
            </div>
        </div>`,
        followUpQuestions: ["What is the blocker in the Technology workstream?", "Show me the key findings from the Commercial diligence.", "What is the current valuation model?"]
    },
    "How is the NewCo integration going for CloudVantage?": {
        renderFunc: () => {
            const integrationPriorities = [ { name: 'NewCo Integration', progress: 85, status: 'On Track', statusClass: 'status-completed' }, { name: 'AI Feature Launch', progress: 30, status: 'At Risk', statusClass: 'status-warning' }, { name: 'Enterprise GTM Push', progress: 75, status: 'On Track', statusClass: 'status-completed' } ];
            const prioritiesHTML = integrationPriorities.map(p => createProgressBarHTML(p.name, p.progress, p.status, p.statusClass)).join('');
            return `<div class="aria-response-content"><div class="build-item"><h3 class="response-title">CloudVantage: NewCo Integration Status</h3></div><div class="build-item"><p class="response-text" data-typing-text="The NewCo integration is progressing well and is currently rated **'On Track'**. We are 60 days into the 100-day plan. Financial system consolidation is complete, and the sales team has been enabled on cross-selling NewCo products, which is already contributing to the strong NRR performance."></p></div><div class="build-item card-base mt-4"><h4 class="response-section-title">Strategic Priority Progress</h4><div class="mt-4">${prioritiesHTML}</div></div><div class="build-item judgement-box warning mt-4"><p class="judgement-title">Key Risk:</p><p class="judgement-text" data-typing-text="The primary risk is the timeline for integrating NewCo's legacy data models into the main CloudVantage platform. This is the root cause of the delay in the **AI-Powered Feature Launch** and requires close monitoring."></p></div></div>`;
        },
        followUpQuestions: ["Generate a risk mitigation plan for the AI feature delay.", "Analyze the key drivers of our Net Revenue Retention.", "Draft a board update on the NewCo integration."]
    },
    "Give me a deep dive on TechFlow's financial health score.": {
        renderFunc: () => {
            const anomaly1 = techflow_anomalies.find(a => a.id === 'arr-comp');
            const anomaly2 = techflow_anomalies.find(a => a.id === 'maint-fee');
            return `<div class="aria-response-content">
                <div class="build-item"><h3 class="response-title">Deep Dive: Financial Health Score (8.4)</h3></div>
                <div class="build-item"><p class="response-text" data-typing-text="TechFlow's Financial Health score is currently stable at 8.4. However, this score is based on reported financials. My analysis has flagged two underlying anomalies in the source data that present a risk to this score:"></p></div>
                <div class="build-item card-base p-4 mt-4">
                    <h3 class="font-bold text-lg">${anomaly1.title}</h3>
                    <p class="text-sm text-secondary">${anomaly1.issue}</p>
                    <div class="analysis-box mt-2"><p class="response-text"><span class="font-bold">Analysis:</span> ${anomaly1.analysis}</p></div>
                </div>
                <div class="build-item card-base p-4 mt-4">
                    <h3 class="font-bold text-lg">${anomaly2.title}</h3>
                    <p class="text-sm text-secondary">${anomaly2.issue}</p>
                    <div class="analysis-box mt-2"><p class="response-text"><span class="font-bold">Analysis:</span> ${anomaly2.analysis}</p></div>
                </div>
            </div>`;
        },
        followUpQuestions: ["Model the financial impact of the ARR re-statement.", "Draft an email to the CFO about these findings."]
    },
    "Tell me more about the 'Valuation Model Complete' activity.": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item card-base"><h4 class="response-title">Activity Detail: Valuation Model Complete</h4><p class="response-text" data-typing-text="The base case valuation model for TechFlow Solutions was completed by the deal team 2 hours ago. The preliminary valuation is pegged at **$150M**, assuming the successful mitigation of the flagged financial anomalies. The model has been uploaded to the data room."></p></div></div>`,
        followUpQuestions: ["Show me the key assumptions in the valuation model.", "Run a scenario with 25% lower synergy realization."]
    },
    "Tell me more about the 'Customer Churn Anomaly Detected' activity.": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h3 class="response-title">Deep Dive: Customer Churn Anomaly</h3></div><div class="build-item"><p class="response-text" data-typing-text="On August 14th, I detected a **5% increase in logo churn** that deviates from the 12-month historical average. Analysis of the 8 recently churned accounts indicates a common theme: they were all heavy users of the 'Advanced Reporting Module,' a feature set that was deprecated in the last product release. This suggests the churn was driven by a product decision."></p></div><div class="build-item judgement-box error mt-4"><p class="judgement-title">Actionable Insight:</p><p class="judgement-text" data-typing-text="This churn is likely preventable. I recommend immediately generating a list of remaining customers who are also heavy users of this deprecated module. A proactive outreach campaign from Customer Success could mitigate further churn."></p></div></div>`,
        followUpQuestions: ["Generate a list of at-risk customers.", "Draft an email to the Head of Product about this finding."]
    },
    "Tell me more about the 'Synergy Analysis Updated' activity.": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item card-base"><h4 class="response-title">Activity Detail: Synergy Analysis Updated</h4><p class="response-text" data-typing-text="The synergy analysis for the TechFlow acquisition was updated 6 hours ago. The total identifiable cost synergies have been revised down from $2.5M to **$2.1M** due to higher-than-expected costs for retaining key technical personnel."></p></div></div>`,
        followUpQuestions: ["What is the impact of this on the valuation model?", "Which cost synergy category was revised?"]
    }
};




// --- HELPER FUNCTION TO RENDER ORPHANED ACTIONS ---
function renderRecommendedActionsHTML(actions) {
    if (!actions || actions.length === 0) {
        return '';
    }
    const actionsHTML = actions.map(action => `
        <button class="aria-action-card ${!isPromptModeled(action.prompt) ? 'unmodeled' : ''}" data-action="run-suggested-prompt" data-question="${action.prompt}">
            <p class="font-semibold text-sm text-primary">${action.text}</p>
            <p class="text-xs text-secondary">${action.description}</p>
        </button>
    `).join('');

    return `
        <div class="build-item">
            <h4 class="response-section-title">Recommended Actions</h4>
            <div class="aria-action-list">
                ${actionsHTML}
            </div>
        </div>
    `;
}

// =================================================================
// NEW: UNIFIED ARIA RESPONSE MAP
// This single object replaces all the scattered `..._ariaResponses` constants.
// =================================================================
const ariaResponseMap = {
    // ===========================================================
    // CONTEXT: All Portfolio Companies
    // ===========================================================
     'all': {
        "Show me the priority alerts.": {
            renderFunc: function() { return `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Top 3 Priority Alerts</h2><div class="aria-action-list mt-4"><button class="aria-action-card" data-action="run-suggested-prompt" data-question="Drill down on the TechFlow diligence block."><div class="flex items-start gap-3"><span class="list-number text-error mt-1">1</span><div><h4 class="list-title">[TechFlow] Technical Diligence Blocked</h4><p class="list-text">The 'Code Scan' (DD-16) task is late and blocking the Technology workstream. We are waiting for the target's CTO to provide GitHub credentials.</p></div></div></button><button class="aria-action-card" data-action="run-suggested-prompt" data-question="Analyze the critical anomalies at TechFlow."><div class="flex items-start gap-3"><span class="list-number text-error mt-1">2</span><div><h4 class="list-title">[TechFlow] Critical Anomalies Discovered</h4><p class="list-text">ARIA has flagged 2 critical anomalies: Non-Standard ARR Composition and Failed Recent Product Launches. These could materially impact valuation.</p></div></div></button><button class="aria-action-card" data-action="run-suggested-prompt" data-question="Assess the CloudVantage AI feature delay."><div class="flex items-start gap-3"><span class="list-number text-warning mt-1">3</span><div><h4 class="list-title">[CloudVantage] AI Feature Launch At Risk</h4><p class="list-text">The 'AI-Powered Feature' development is behind schedule due to technical complexities. This puts the critical Q4 launch at risk.</p></div></div></button></div></div>${renderRecommendedActionsHTML(this.recommendedActions)}</div>`},
            recommendedActions: [ { text: "Draft escalation email to TechFlow CTO", description: "Generate an email to the CTO regarding the urgent need for GitHub credentials.", prompt: "Action: Draft escalation to TechFlow CTO" }, { text: "Generate risk mitigation plan for CloudVantage", description: "Use ARIA to create a plan to get the delayed AI feature back on track.", prompt: "Generate a risk mitigation plan for the AI feature delay." }, { text: "View full anomaly report for TechFlow", description: "Navigate to the ARIA workspace to see the detailed anomaly findings.", prompt: "Provide an overview of the current registered anomalies." } ],
            followUpQuestions: [ "What is the financial impact of the TechFlow anomalies?", "Who is the lead engineer on the CloudVantage AI feature?", "What is the new critical path for the TechFlow diligence?" ]
        },
        "Drill down on the TechFlow diligence block.": {
            renderFunc: function() { return `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Alert Deep Dive: TechFlow Diligence Block</h2><div class="judgement-box error mt-4"><p class="judgement-title">Situation:</p><p class="judgement-text">The 'Code Scan' (DD-16) task is now 3 days late. This is a critical dependency for the 'Documentation' (DD-17) and 'QA Testing Review' (DD-18) tasks. The entire Technology workstream is blocked until we receive admin-level access to the target's private GitHub repository from their CTO.</p></div><div class="chart-narrative"><p>A 3-day delay on this task consumes all remaining slack in the Technology workstream, putting the final 'Comprehensive DD Report' (DD-68) delivery date at risk. Any further delays will push out the final deadline.</p></div></div>${renderRecommendedActionsHTML(this.recommendedActions)}</div>`},
            recommendedActions: [ { text: "Draft escalation email to TechFlow CTO", description: "Generate a polite but firm email regarding the urgent need for GitHub credentials.", prompt: "Action: Draft escalation to TechFlow CTO" }, { text: "Assess critical path impact of a 5-day delay", description: "Model the cascading effects if the delay extends to a full week.", prompt: "Assess the critical path impact of a 5-day delay on task DD-16." } ],
            followUpQuestions: ["What is the new critical path for the TechFlow diligence?", "Re-plan the project with a compressed QA cycle."]
        },
        "Analyze the critical anomalies at TechFlow.": {
            renderFunc: function() { return `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Alert Deep Dive: TechFlow Critical Anomalies</h2><div class="aria-list mt-4"><div class="aria-list-item"><span class="text-error">1.</span><div><h4>Non-Standard ARR Composition</h4><p>Analysis of the financials reveals that only 59% ($7.08M) of the reported $12M ARR is true, recurring subscription revenue. The remainder is comprised of non-standard perpetual license amortization and legacy maintenance fees, which will require a significant valuation adjustment.</p></div></div><div class="aria-list-item"><span class="text-error">2.</span><div><h4>Failed Recent Product Launches</h4><p>The last three major product launches have generated zero revenue, despite a combined R&D investment of $3.2M. This indicates critical issues with product-market fit and go-to-market execution, questioning future growth projections.</p></div></div></div></div>${renderRecommendedActionsHTML(this.recommendedActions)}</div>`},
            recommendedActions: [ { text: "Model the financial impact of the ARR re-statement", description: "Simulate the valuation impact of adjusting ARR from $12M to $7.08M.", prompt: "Model the financial impact of 'Non-Standard ARR Composition'" }, { text: "Draft an IC memo slide on these risks", description: "Summarize these two critical risks for the next Investment Committee update.", prompt: "Draft an IC memo slide for this section." } ],
            followUpQuestions: ["What is the adjusted 'true' ARR for TechFlow?", "What's the plan to fix the failed product launches?"]
        },
        "Assess the CloudVantage AI feature delay.": {
            renderFunc: function() { return `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Alert Deep Dive: CloudVantage AI Feature Delay</h2><div class="judgement-box warning mt-4"><p class="judgement-title">Situation:</p><p class="judgement-text">The 'AI-Powered Feature' is currently 'At Risk' and behind schedule. The delay is due to unforeseen technical complexities in integrating with legacy data models from the recent NewCo acquisition. This jeopardizes the planned Q4 launch, which is a key driver of the FY25 growth plan.</p></div></div>${renderRecommendedActionsHTML(this.recommendedActions)}</div>`},
            recommendedActions: [ { text: "Generate risk mitigation plan for AI feature", description: "Use ARIA to create a plan with a de-scoped MVP and dedicated resources to get the project back on track.", prompt: "Generate a risk mitigation plan for the AI feature delay." }, { text: "Estimate the budget impact of the delay", description: "Analyze the financial implications of the delay and the proposed mitigation plan.", prompt: "What is the budget impact of the AI feature delay?" } ],
            followUpQuestions: ["Who is the lead engineer on the AI feature?", "What is the new projected launch date?"]
        },
        "How did the portfolio perform over the past 12 months?": {
            chartId: 'portfolio-performance-chart',
            chartConfig: { type: 'line', data: { labels: ['Sep \'24', 'Oct', 'Nov', 'Dec', 'Jan \'25', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'], datasets: [ { label: 'Portfolio ARR ($M)', data: [220, 225, 230, 235, 240, 245, 250, 255, 275, 280, 285, 290], borderColor: 'THEME_ACCENT_BLUE', backgroundColor: 'THEME_ACCENT_BLUE_TRANSLUCENT', yAxisID: 'y', tension: 0.1, fill: true }, { label: 'Portfolio EBITDA ($M)', data: [55, 56, 45, 58, 60, 61, 62, 63, 68, 70, 71, 72], borderColor: 'THEME_ACCENT_TEAL', backgroundColor: 'THEME_ACCENT_TEAL_TRANSLUCENT', yAxisID: 'y1', tension: 0.1, fill: true } ] },
            options: { responsive: true, maintainAspectRatio: false, scales: { y: { type: 'linear', display: true, position: 'left', title: { display: true, text: 'ARR ($M)', color: 'THEME_TEXT_SECONDARY' }, ticks: { color: 'THEME_TEXT_MUTED' }, grid: { color: 'THEME_BORDER_COLOR' } }, y1: { type: 'linear', display: true, position: 'right', title: { display: true, text: 'EBITDA ($M)', color: 'THEME_TEXT_SECONDARY' }, grid: { drawOnChartArea: false }, ticks: { color: 'THEME_TEXT_MUTED' } }, x: { ticks: { color: 'THEME_TEXT_MUTED' }, grid: { color: 'THEME_BORDER_COLOR' } } }, plugins: { legend: { labels: { color: 'THEME_TEXT_SECONDARY' } } } }
        },
        renderFunc: function() { return `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Portfolio Performance: Last 12 Months</h2><div class="chart-wrapper"><canvas id="portfolio-performance-chart"></canvas></div><div class="chart-narrative"><p>Overall performance is strong, with a notable <strong>EBITDA dip in November</strong> from one-time integration costs and a <strong>sharp ARR spike in May</strong> driven by CloudVantage landing two major enterprise deals.</p></div></div>${renderRecommendedActionsHTML(this.recommendedActions)}</div>`},
        recommendedActions: [ { text: "Add 'CloudVantage Outperformance' to Q3 Board Deck", description: "Generate a pre-formatted slide for your next board meeting.", prompt: "Action: Add CloudVantage to Board Deck" }, { text: "Schedule review of DataFlow integration costs", description: "Draft a meeting invite with the DataFlow CFO to review the one-time costs.", prompt: "Action: Schedule DataFlow cost review" }, { text: "Flag CloudVantage for early exit planning", description: "Add a task to the VCP to begin exploring exit opportunities ahead of schedule.", prompt: "Action: Flag CloudVantage for exit planning" } ],
        followUpQuestions: [ "Which companies contributed most to the growth?", "Show me the portfolio's 'Rule of 40' score.", "How does our portfolio's NRR compare to industry benchmarks?" ]
    },
    "Forecast portfolio ARR for the next 6 months.": {
        chartId: 'forecast-chart',
        chartConfig: { type: 'line', data: { labels: ['Aug \'25', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan \'26'], datasets: [ { label: 'Bull Case', data: [290, 295, 298, 300, 302, 305], borderColor: 'THEME_STATUS_SUCCESS', borderDash: [5, 5], fill: false }, { label: 'Base Case', data: [290, 292, 294, 296, 298, 299], borderColor: 'THEME_ACCENT_BLUE', fill: '-1', backgroundColor: 'THEME_ACCENT_BLUE_TRANSLUCENT' }, { label: 'Bear Case', data: [290, 288, 287, 286, 285, 285], borderColor: 'THEME_STATUS_ERROR', borderDash: [5, 5], fill: '-1', backgroundColor: 'THEME_STATUS_ERROR_TRANSLUCENT' } ] },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { title: { display: true, text: 'Projected ARR ($M)', color: 'THEME_TEXT_SECONDARY' }, ticks: { color: 'THEME_TEXT_MUTED' }, grid: { color: 'THEME_BORDER_COLOR' } }, x: { ticks: { color: 'THEME_TEXT_MUTED' }, grid: { color: 'THEME_BORDER_COLOR' } } }, plugins: { legend: { labels: { color: 'THEME_TEXT_SECONDARY' } } } }
    },
        renderFunc: function() { return `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">6-Month ARR Forecast with Sensitivity Analysis</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="forecast-chart"></canvas></div><div class="chart-narrative"><p>The forecast projects steady growth, with a <strong>90% confidence</strong> that ARR will land between <strong>$285M (bear case)</strong> and <strong>$305M (bull case)</strong> by January 2026. The widening sensitivity band reflects increased uncertainty in Q4.</p></div></div>${renderRecommendedActionsHTML(this.recommendedActions)}</div>`},
        recommendedActions: [ { text: "Update master financial model with this forecast", description: "Export and integrate these projections into the master Excel model.", prompt: "Action: Update master financial model" }, { text: "Generate talking points for the next LP update", description: "Create a summary of this forecast for Limited Partner communications.", prompt: "Action: Generate LP talking points" }, { text: "Identify key risks to the 'Bear Case'", description: "Analyze the top 3 factors that could lead to the lower-bound forecast.", prompt: "Action: Identify risks to Bear Case" } ],
        followUpQuestions: [ "What is the required hiring plan to support this forecast?", "Model the portfolio's cash runway based on this forecast.", "Which value creation lever has the biggest impact on this forecast?" ]
    },
    "Model the next 12 months assuming we acquire TechFlow.": {
        chartId: 'scenario-chart',
        chartConfig: { type: 'line', data: { labels: ['Q3 \'25', 'Q4 \'25', 'Q1 \'26', 'Q2 \'26'], datasets: [ { label: 'Pro-Forma ARR (w/ TechFlow)', data: [302, 315, 328, 342], borderColor: 'THEME_ACCENT_BLUE', tension: 0.1 }, { label: 'Base Case ARR (Organic)', data: [296, 301, 306, 311], borderColor: 'THEME_TEXT_MUTED', borderDash: [5, 5], tension: 0.1 } ] },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { title: { display: true, text: 'Portfolio ARR ($M)', color: 'THEME_TEXT_SECONDARY' }, beginAtZero: false, ticks: { color: 'THEME_TEXT_MUTED' }, grid: { color: 'THEME_BORDER_COLOR' } }, x: { ticks: { color: 'THEME_TEXT_MUTED' }, grid: { color: 'THEME_BORDER_COLOR' } } }, plugins: { legend: { labels: { color: 'THEME_TEXT_SECONDARY' } } } }
    },
        renderFunc: function() { return `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">24-Month Scenario: TechFlow Solutions Acquisition</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="scenario-chart"></canvas></div><div class="judgement-box warning mt-6"><p class="judgement-title">Judgement (Medium Confidence):</p><p class="judgement-text">The acquisition is accretive to ARR and accelerates growth, but initially dilutes portfolio EBITDA margin. The model assumes successful pricing initiatives and synergy realization, causing the pro-forma growth lines to diverge positively from the base case over time.</p></div></div>${renderRecommendedActionsHTML(this.recommendedActions)}</div>`},
        recommendedActions: [ { text: "Add 'TechFlow Synergy Plan' to the 100-day plan workspace", description: "Create a new workstream in the Workspace to track synergy realization.", prompt: "Action: Add Synergy Plan to Workspace" }, { text: "Draft email to legal to begin confirmatory diligence", description: "Generate a pre-written email to your legal counsel to kick off the final diligence phase.", prompt: "Action: Draft email to legal" }, { text: "Run a scenario with 25% lower synergy realization", description: "Model a downside case to understand the impact if synergies are not fully met.", prompt: "Action: Model lower synergy case" } ],
        followUpQuestions: [ "What are the top 3 integration risks for the TechFlow acquisition?", "Detail the $4.5M synergy plan.", "Who are the key employees to retain at TechFlow?" ]
    },
    "Which companies contributed most to the growth?": {
        chartId: 'contribution-chart',
        chartConfig: { type: 'bar', data: { labels: ['CloudVantage', 'Innovate Inc.', 'DataFlow', 'ScaleOps'], datasets: [{ label: 'ARR Growth Contribution ($M)', data: [18, 12, 5, 2], backgroundColor: ['THEME_ACCENT_BLUE', 'THEME_ACCENT_TEAL', 'THEME_PURPLE', 'THEME_TEXT_MUTED'] }] },
        options: { responsive: true, maintainAspectRatio: false, indexAxis: 'y', plugins: { legend: { display: false } }, scales: { x: { ticks: { color: 'THEME_TEXT_MUTED' }, grid: { color: 'THEME_BORDER_COLOR' } }, y: { ticks: { color: 'THEME_TEXT_SECONDARY' }, grid: { display: false } } } }
    },
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">LTM ARR Growth Contribution</h2><div class="chart-wrapper" style="height: 250px;"><canvas id="contribution-chart"></canvas></div></div>`,
        recommendedActions: [], followUpQuestions: ["How does CloudVantage's growth compare to its peers?", "What is Innovate Inc.'s value creation plan?", "Why is ScaleOps's growth lagging?"]
    },
    "Show me the portfolio's 'Rule of 40' score.": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Portfolio 'Rule of 40' Analysis</h2><div class="kpi-grid"><div class="kpi-card"><p class="kpi-label">LTM Revenue Growth</p><p class="kpi-value">31%</p></div><div class="kpi-card"><p class="kpi-label">LTM EBITDA Margin</p><p class="kpi-value">25%</p></div><div class="kpi-card" style="border-color: var(--status-success);"><p class="kpi-label">Rule of 40 Score</p><p class="kpi-value text-success">56%</p></div></div><div class="judgement-box success mt-6"><p class="judgement-title">Judgement:</p><p class="judgement-text">The portfolio is healthy, exceeding the 40% benchmark. This indicates an efficient balance of growth and profitability.</p></div></div></div>`,
        recommendedActions: [], followUpQuestions: ["Which companies are dragging down the average?", "Model the impact of a 5% margin improvement.", "How has this score trended over time?"]
    },
    "How does our portfolio's NRR compare to industry benchmarks?": {
        chartId: 'nrr-chart',
        chartConfig: { type: 'bar', data: { labels: ['CloudVantage', 'Innovate Inc.', 'DataFlow', 'TechFlow', 'ScaleOps'], datasets: [ { label: 'Portfolio NRR', data: [128, 122, 115, 105, 108], backgroundColor: 'THEME_ACCENT_BLUE' }, { label: 'SaaS Benchmark', data: [120, 120, 110, 110, 110], backgroundColor: 'THEME_BORDER_COLOR' } ] },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { title: { display: true, text: 'Net Revenue Retention (%)', color: 'THEME_TEXT_SECONDARY' }, ticks: { color: 'THEME_TEXT_MUTED' }, grid: { color: 'THEME_BORDER_COLOR' } }, x: { ticks: { color: 'THEME_TEXT_SECONDARY' }, grid: { display: false } } }, plugins: { legend: { labels: { color: 'THEME_TEXT_SECONDARY' } } } }
    },
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Net Revenue Retention vs. SaaS Benchmark</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="nrr-chart"></canvas></div></div>`,
        recommendedActions: [], followUpQuestions: ["What is CloudVantage's gross retention?", "What is the plan to improve TechFlow's NRR?", "Which product has the highest upsell rate?"]
    },
    "What are the top 3 integration risks for the TechFlow acquisition?": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Top 3 Integration Risks: TechFlow</h2><div class="aria-list mt-4"><div class="aria-list-item"><span class="text-error">1.</span><div><h4>Technical Debt</h4><p>The legacy monolith will slow down product integration and requires a $4.5M remediation budget, impacting short-term EBITDA.</p></div></div><div class="aria-list-item"><span class="text-warning">2.</span><div><h4>Customer Concentration</h4><p>Losing Global FinCorp (28% of ARR) post-acquisition would severely impact the deal thesis. A renewal must be secured.</p></div></div><div class="aria-list-item"><span class="text-warning">3.</span><div><h4>Sales Team Inexperience</h4><p>The current sales team has no experience with a structured, PE-backed growth motion. Significant training will be required.</p></div></div></div></div></div>`,
        recommendedActions: [], followUpQuestions: ["Draft a 100-day plan for the technical debt.", "What is the renewal status of Global FinCorp?", "Generate a sales team onboarding plan."]
    },
    "Detail the $4.5M synergy plan.": {
        chartId: 'synergy-chart',
        chartConfig: { type: 'doughnut', data: { labels: ['Headcount Reduction', 'Vendor Consolidation', 'Pricing Optimization', 'Cross-Sell'], datasets: [{ data: [1.5, 0.8, 1.2, 1.0], backgroundColor: ['THEME_ACCENT_BLUE', 'THEME_ACCENT_TEAL', 'THEME_PURPLE', 'THEME_STATUS_SUCCESS'] }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right', labels: { color: 'THEME_TEXT_SECONDARY' } } } }
    },
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">TechFlow Synergy Plan Breakdown</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="synergy-chart"></canvas></div></div>`,
        recommendedActions: [], followUpQuestions: ["What are the biggest risks to this synergy plan?", "Who is responsible for tracking these synergies?", "How does this compare to similar deals?"]
    },
    "Who are the key employees to retain at TechFlow?": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Key Employee Retention Targets: TechFlow</h2><div class="people-grid"><div class="person-card"><h4>Sarah Jenkins</h4><p>VP, Engineering</p><span>Deep institutional knowledge of the legacy platform. Critical for migration.</span></div><div class="person-card"><h4>Michael Chen</h4><p>Lead Sales Engineer</p><span>Trusted by top customers, including Global FinCorp. Highest technical win rate.</span></div><div class="person-card"><h4>Emily Rodriguez</h4><p>Product Manager</p><span>Authored the original product vision and has the strongest customer relationships.</span></div></div></div></div>`,
        recommendedActions: [], followUpQuestions: ["Draft retention packages for these employees.", "What is their current compensation?", "Identify potential backfill candidates."]
    },
    "Action: Add CloudVantage to Board Deck": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Generated Board Deck Slide</h2><div class="board-slide"><div class="slide-title">Q3 Update: CloudVantage Outperformance</div><ul><li>ARR Growth hit <strong>128% NRR</strong>, exceeding synergy targets by 15%.</li><li>Landed two strategic enterprise logos: <strong>Global Health Inc. & Apex Logistics</strong>.</li><li>Successfully launched new 'Analytics Suite' which is driving expansion revenue.</li></ul></div></div></div>`,
        recommendedActions: [], followUpQuestions: ["Export this slide to PowerPoint.", "Add a chart showing NRR trend.", "Who is the deal lead for Apex Logistics?"]
    },
    "Action: Schedule DataFlow cost review": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Generated Email Draft</h2><div class="email-draft"><p><strong>To:</strong> cfo@dataflow.com</p><p><strong>Subject:</strong> Quick Sync: Q4 Integration Costs</p><hr/><p>Hi John,</p><p>Hope you're well. As we prepare for the Q1 board meeting, I wanted to schedule a brief 30-minute review of the one-time integration costs incurred in November. Our goal is to ensure we've accurately categorized them to provide a clear picture of run-rate EBITDA.</p><p>Please let me know what time works best for you next week.</p><p>Best,</p></div></div>`,
        recommendedActions: [], followUpQuestions: ["Send the email.", "Add this to my calendar for next week.", "What were the original synergy estimates?"]
    },
     "Action: Identify risks to Bear Case": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Top 3 Risks to 'Bear Case' Forecast</h2><div class="aria-list mt-4"><div class="aria-list-item"><span class="text-error">1.</span><div><h4>TechFlow Churn</h4><p>Failure to renew the Global FinCorp contract (28% of ARR) at TechFlow would immediately trigger the bear case scenario.</p></div></div><div class="aria-list-item"><span class="text-warning">2.</span><div><h4>Macroeconomic Slowdown</h4><p>A broader economic downturn could delay enterprise sales cycles at CloudVantage and Innovate Inc., pushing the bull case out of reach.</p></div></div><div class="aria-list-item"><span class="text-warning">3.</span><div><h4>Competitor Pricing Pressure</h4><p>Aggressive pricing from competitors could impact new logo acquisition and NRR at ScaleOps.</p></div></div></div></div></div>`,
        recommendedActions: [], followUpQuestions: ["What's our mitigation plan for the TechFlow churn risk?", "Model a scenario where enterprise sales cycles lengthen by 30 days."]
    },
    "What is the required hiring plan to support this forecast?": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Required Hiring Plan to Support Forecast</h2><div class="data-table-container"><table class="data-table"><thead><tr><th>Department</th><th>Q3 2025 Hires</th><th>Q4 2025 Hires</th><th>Rationale</th></tr></thead><tbody><tr><td>Sales (Enterprise)</td><td>+5 AE, +3 SDR</td><td>+4 AE, +2 SDR</td><td>To capture projected Q4/Q1 enterprise demand.</td></tr><tr><td>Customer Success</td><td>+4 CSM</td><td>+3 CSM</td><td>To maintain NRR as the customer base grows.</td></tr><tr><td>Engineering</td><td>+6 SWE</td><td>+4 SWE</td><td>To support roadmap acceleration at CloudVantage & Innovate.</td></tr></tbody></table></div></div>`,
        recommendedActions: [], followUpQuestions: ["What is the estimated cost of this hiring plan?", "Which roles are the highest priority to fill?"]
    },
    "Model the portfolio's cash runway based on this forecast.": {
        chartId: 'cash-runway-chart',
        chartConfig: { type: 'line', data: { labels: ['Q3 \'25', 'Q4 \'25', 'Q1 \'26', 'Q2 \'26', 'Q3 \'26', 'Q4 \'26'], datasets: [{ label: 'Cash Balance ($M)', data: [150, 142, 135, 128, 122, 118], borderColor: 'THEME_ACCENT_BLUE', fill: true, backgroundColor: 'THEME_ACCENT_BLUE_TRANSLUCENT' }] },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { title: { display: true, text: 'Cash Balance ($M)', color: 'THEME_TEXT_SECONDARY' }, ticks: { color: 'THEME_TEXT_MUTED' }, grid: { color: 'THEME_BORDER_COLOR' } }, x: { ticks: { color: 'THEME_TEXT_MUTED' }, grid: { color: 'THEME_BORDER_COLOR' } } }, plugins: { legend: { labels: { color: 'THEME_TEXT_SECONDARY' } } } }
    },
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Portfolio Cash Runway Forecast</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="cash-runway-chart"></canvas></div><div class="chart-narrative"><p>Based on the forecast and the associated hiring plan, the portfolio has a healthy cash runway of approximately <strong>28 months</strong>. The model projects the portfolio to reach cash flow breakeven in <strong>Q4 2026</strong>.</p></div></div>`,
        recommendedActions: [], followUpQuestions: ["What is the impact on runway if we accelerate hiring by 50%?", "At what point should we consider a new fundraise?"]
    },
    "Which value creation lever has the biggest impact on this forecast?": {
        chartId: 'lever-impact-chart',
        chartConfig: { type: 'bar', data: { labels: ['Expansion (NRR)', 'New Logos', 'Price Increase'], datasets: [{ label: 'ARR Growth Contribution ($M)', data: [5.5, 3.0, 0.5], backgroundColor: ['THEME_ACCENT_BLUE', 'THEME_ACCENT_TEAL', 'THEME_PURPLE'] }] },
        options: { responsive: true, maintainAspectRatio: false, indexAxis: 'y', plugins: { legend: { display: false } }, scales: { x: { ticks: { color: 'THEME_TEXT_MUTED' }, grid: { color: 'THEME_BORDER_COLOR' } }, y: { ticks: { color: 'THEME_TEXT_SECONDARY' }, grid: { display: false } } } }
    },
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Forecasted ARR Growth Drivers</h2><div class="chart-wrapper" style="height: 250px;"><canvas id="lever-impact-chart"></canvas></div><div class="chart-narrative"><p>The 6-month forecast is primarily driven by <strong>Expansion (NRR)</strong> from the existing customer base, accounting for nearly 60% of the projected growth. New logo acquisition remains a consistent contributor, while planned price increases have a smaller, but meaningful, impact.</p></div></div>`,
        recommendedActions: [], followUpQuestions: ["Double-click on the NRR driver.", "How does this compare to last year's drivers?"]
    },
    "Action: Add Synergy Plan to Workspace": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Action Confirmation</h2><div class="board-slide"><strong>Success:</strong> A new workstream "TechFlow Synergy Plan" has been added to the 100-Day Plan in the Workspace. Key synergy targets have been pre-populated and assigned to the integration lead.</div></div></div>`,
        recommendedActions: [], followUpQuestions: ["Assign this workstream to Brenda.", "Set a deadline for initial synergy realization."]
    },
    "Action: Draft email to legal": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Generated Email Draft</h2><div class="email-draft"><p><strong>To:</strong> legal@firm.com</p><p><strong>Subject:</strong> Kick Off Confirmatory Diligence - Project TechFlow</p><hr/><p>Hi Team,</p><p>We are moving forward with the acquisition of TechFlow Solutions. The preliminary diligence has been positive, and we'd like to engage your team to begin the final confirmatory diligence process.</p><p>Please find the executed LOI attached. We'd like to schedule a kick-off call for early next week to align on the timeline and key areas of focus.</p><p>Best,</p></div></div>`,
        recommendedActions: [], followUpQuestions: ["Attach the LOI to this email.", "Send the email and CC the deal team."]
    },
    "Action: Model lower synergy case": {
        chartId: 'lower-synergy-chart',
        chartConfig: { type: 'line', data: { labels: ['Q3 \'25', 'Q4 \'25', 'Q1 \'26', 'Q2 \'26'], datasets: [ { label: 'Pro-Forma ARR (Base Synergies)', data: [302, 315, 328, 342], borderColor: 'THEME_ACCENT_BLUE', tension: 0.1 }, { label: 'Pro-Forma ARR (Lower Synergies)', data: [302, 313, 324, 335], borderColor: 'THEME_STATUS_WARNING', borderDash: [5, 5], tension: 0.1 } ] },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { title: { display: true, text: 'Portfolio ARR ($M)', color: 'THEME_TEXT_SECONDARY' }, beginAtZero: false, ticks: { color: 'THEME_TEXT_MUTED' }, grid: { color: 'THEME_BORDER_COLOR' } }, x: { ticks: { color: 'THEME_TEXT_MUTED' }, grid: { color: 'THEME_BORDER_COLOR' } } }, plugins: { legend: { labels: { color: 'THEME_TEXT_SECONDARY' } } } }
    },
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><h2 class="response-title">Scenario: TechFlow Acquisition with 25% Lower Synergies</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="lower-synergy-chart"></canvas></div><div class="judgement-box warning mt-6"><p class="judgement-title">Judgement (Medium Confidence):</p><p class="judgement-text">In this downside scenario, the acquisition is still accretive, but the impact on portfolio EBITDA margin is more pronounced and the payback period extends by approximately 9 months. The deal remains strategically sound, but the financial returns are less compelling.</p></div></div>`,
        recommendedActions: [], followUpQuestions: ["What is the new IRR in this scenario?", "What are the most at-risk synergy components?"]
    }
    },
    // ===========================================================
    // CONTEXT: TechFlow Solutions
    // ===========================================================
    'techflow-solutions': {
            "Show me the Business & Strategy workstream.": {
        id: 'ws-business',
        title: "Business & Strategy Workstream Synthesis",
        renderFunc: (state) => renderAriaWorkstreamResponse('Business & Strategy', state),
        followUpQuestions: [
            "Summarize the competitive landscape and TechFlow's position.",
            "What are the key market trends impacting the company?",
            "Analyze the credibility of the 5-year strategic plan."
        ]
    },
    "Show me the Commercial & Customer workstream.": {
        id: 'ws-commercial',
        title: "Commercial & Customer Workstream Synthesis",
        renderFunc: (state) => renderAriaWorkstreamResponse('Commercial & Customer', state),
        followUpQuestions: [
            "Show the Quality of Revenue report.",
            "Analyze the efficiency of the sales and marketing funnel.",
            "Identify the top 10 customers by revenue and any concentration risks."
        ]
    },
    "Show me the Technology & Operations workstream.": {
        id: 'ws-tech',
        title: "Technology & Operations Workstream Synthesis",
        renderFunc: (state) => renderAriaWorkstreamResponse('Technology & Operations', state),
        followUpQuestions: [
            "Summarize the key architectural risks and their potential cost to remediate.",
            "How does the R&D team's velocity compare to industry benchmarks?",
            "What is the plan for migrating off the legacy monolithic architecture?"
        ]
    },
    "Show me the Financial & Risk workstream.": {
        id: 'ws-financial',
        title: "Financial & Risk Workstream Synthesis",
        renderFunc: (state) => renderAriaWorkstreamResponse('Financial & Risk', state),
        followUpQuestions: [
            "Provide an overview of the current registered anomalies.",
            "What are the key risks to achieving the 2025 forecast?",
            "Analyze the quality of earnings and identify any one-time adjustments."
        ]
    },
    "Provide an overview of the current registered anomalies.": {
        id: 'anomaly-overview',
        title: "Anomaly Overview",
        renderFunc: function() { 
            const state = loadState();
            const criticalAnomalies = techflow_anomalies.filter(a => a.severity === 'CRITICAL');
            const otherAnomalies = techflow_anomalies.filter(a => a.severity === 'HIGH');
            const isExpanded = state.techflowAria.minorObservationsExpanded;
            const renderAnomalyCard = (anomaly) => {
                const severityClass = anomaly.severity.toLowerCase();
                const isFlagged = !!state.diligenceWorkspace.keyRisks[anomaly.id];
                return `<div class="card-base p-4 space-y-3">
                    <div class="response-title-area">
                        <h3 class="font-bold text-lg">${anomaly.title}</h3>
                        <button class="feedback-icon ${isFlagged ? 'filled' : ''}" data-action="flag-response" data-response-id="${anomaly.id}" title="Add to Workspace">
                            <span class="icon-unfilled"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21 21 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21 21 0 0 0 14 7.655V1.222z"/></svg></span>
                            <span class="icon-filled"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001z"/></svg></span>
                        </button>
                    </div>
                    <p class="text-sm text-secondary">${anomaly.issue}</p>
                    <div class="data-table-container"><table class="data-table"><thead><tr><th>Severity</th><th>Impact</th><th>Source Documents</th></tr></thead><tbody><tr><td><span class="status-badge ${severityClass}">${anomaly.severity}</span></td><td>${anomaly.impact}</td><td>${anomaly.sourceDocuments.join(', ')}</td></tr></tbody></table></div>
                    <div class="analysis-box"><p class="response-text"><span class="font-bold">Analysis:</span> <span data-typing-text="${anomaly.analysis}"></span></p></div>
                </div>`;
            };
            const renderMinorObservation = (obs) => {
                const isFlagged = !!state.diligenceWorkspace.keyRisks[obs.id];
                const workstream = categoryToWorkstreamMap[obs.category] || 'Business & Strategy';
                const colorClass = workstream.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
                return `<div class="minor-observation-item">
                    <div class="flex-grow"><p class="font-semibold">${obs.title}</p><p class="text-secondary mt-1">${obs.analysis}</p></div>
                    <div class="flex-shrink-0 ml-4 flex flex-col items-end gap-2">
                        <span class="status-badge ${colorClass}">${obs.category}</span>
                        <button data-action="flag-response" data-response-id="${obs.id}" class="feedback-icon ${isFlagged ? 'filled' : ''}" title="Add to Workspace">
                            <span class="icon-unfilled"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21 21 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21 21 0 0 0 14 7.655V1.222z"/></svg></span>
                            <span class="icon-filled"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001z"/></svg></span>
                        </button>
                    </div>
                </div>`;
            };
            return `<div class="aria-response-content" id="anomaly-discovery-content">
                <div class="build-item alert-callout error"><h2 class="alert-callout-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>Significant Anomalies Detected</h2><p class="response-text" data-typing-text="Our Auto Due Diligence Agent has completed its analysis and identified ${techflow_anomalies.length} significant anomalies that require immediate attention. These findings could materially impact the investment decision and valuation model."></p></div>
                ${criticalAnomalies.map(a => `<div class="build-item">${renderAnomalyCard(a)}</div>`).join('')}
                ${otherAnomalies.length > 0 ? `<div class="build-item"><h4 class="response-section-title">Other Significant Findings</h4></div>` : ''}
                ${otherAnomalies.map(a => `<div class="build-item">${renderAnomalyCard(a)}</div>`).join('')}
                <div class="build-item card-base"><button class="minor-observations-header" data-action="toggle-observations"><h3 class="response-title">Minor Observations (${techflow_minorObservations.length})</h3><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon ${isExpanded ? 'rotate-180' : ''}"><path d="m6 9 6 6 6-6"/></svg></button><div class="minor-observations-content ${isExpanded ? 'expanded' : ''}"><div class="minor-observations-grid">${techflow_minorObservations.map(renderMinorObservation).join('')}</div></div></div>
                ${renderRecommendedActionsHTML(this.recommendedActions)}
            </div>`;
        },
        recommendedActions: [
            { text: "Draft an email to the CFO requesting clarification on revenue recognition policies.", description: "Generate a pre-written email to the CFO to get clarity on a key accounting policy.", prompt: "Draft an email to the CFO requesting clarification on revenue recognition policies." },
            { text: "Request all contracts with non-standard terms be uploaded to the data room.", description: "Log a formal request to the deal team to gather critical legal documents.", prompt: "Request all contracts with non-standard terms be uploaded to the data room." },
            { text: "Build the 'Base Case' financial model.", description: "Create a more realistic financial model based on diligence findings, not just management's view.", prompt: "Build the 'Base Case' financial model." }
        ],
        followUpQuestions: [
            "Which anomaly has the biggest impact on valuation?",
            "Draft an email to the CFO about the ARR composition.",
            "What's the plan to fix the failed product launches?"
        ]
    },
    "What are the key risks to achieving the 2025 forecast?": {
        id: 'forecast-risks',
        title: "Forecast Risk Assessment",
        renderFunc: () => techflow_ariaResponses["Analyze the credibility of the 5-year strategic plan."].renderFunc(),
        followUpQuestions: ["Build a more realistic 'Base Case' financial model.", "What are the key questions for the CEO about this plan?", "How does this plan compare to their last 3-year plan?"]
    },
    "Analyze the quality of earnings and identify any one-time adjustments.": {
        id: 'qoe-analysis',
        title: "Quality of Earnings Analysis",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Quality of Earnings (QoE) Analysis</h3><p class="response-subtitle">Source Documents: Financial_Statements_2024.pdf, Revenue_Recognition_Policy.pdf</p></div>
            <div class="build-item"><p class="response-text" data-typing-text="My analysis of the reported financials indicates several adjustments are necessary to arrive at a normalized EBITDA that reflects the true, ongoing profitability of the business."></p></div>
            <div class="build-item data-table-container mt-4">
                <table class="data-table">
                    <thead><tr><th>Adjustment</th><th>Amount</th><th>Rationale</th></tr></thead>
                    <tbody>
                        <tr><td class="font-semibold">Reported LTM EBITDA</td><td class="font-semibold">$1,500,000</td><td>Per management financials.</td></tr>
                        <tr><td>Non-Standard Revenue</td><td class="text-error">($4,920,000)</td><td>Reversal of non-recurring perpetual license and legacy maintenance revenue incorrectly included in ARR.</td></tr>
                        <tr><td>One-Time Legal Fees</td><td class="text-success">$350,000</td><td>Add-back of legal fees related to a settled litigation that is not expected to recur.</td></tr>
                        <tr><td>Below-Market Salaries</td><td class="text-error">($600,000)</td><td>Adjustment to normalize key executive salaries to market rates.</td></tr>
                        <tr><td class="font-semibold border-t-2">Adjusted LTM EBITDA</td><td class="font-semibold border-t-2">($3,670,000)</td><td>Normalized recurring profitability.</td></tr>
                    </tbody>
                </table>
            </div>
             <div class="build-item judgement-box error mt-4"><p class="judgement-title">Judgement (High Confidence - 98%):</p><p class="judgement-text" data-typing-text="The Quality of Earnings is poor. After adjustments, the company is operating at a significant loss from its core recurring activities. The reported profitability is misleading and should not be used for valuation without these adjustments."></p></div>
        </div>`,
        followUpQuestions: ["What is the impact of this on the valuation model?", "Draft an email to the CFO about these adjustments."]
    },
"Summarize the competitive landscape and TechFlow's position.": { 
    id: 'competitive-landscape',
    title: "Competitive Landscape",
    chartId: 'competitor-market-share-chart',
    chartConfig: {
        type: 'bar',
        data: {
            labels: ['Legacy Inc.', 'InnovateCorp', 'TechFlow', 'Others'],
            datasets: [{
                label: 'Market Share',
                data: [60, 25, 10, 5],
                backgroundColor: [
                    'THEME_PURPLE',
                    'THEME_ACCENT_TEAL',
                    'THEME_ACCENT_BLUE',
                    'var(--text-muted)' // This one is safe as it's not a theme color
                ]
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { x: { ticks: { callback: value => value + '%' } } }
        }
    },
    renderFunc: () => `<div class="aria-response-content">
        <div class="build-item"><h3 class="response-title">Competitive Landscape</h3><p class="response-subtitle">Source Documents: Market_Sizing_Model.xlsx, ...</p></div>
        <div class="build-item"><div class="response-section-title">Key Competitors by Market Share:</div><div class="chart-wrapper" style="height: 200px;"><canvas id="competitor-market-share-chart"></canvas></div></div>
        <div class="build-item"><p class="response-section-title">Analysis:</p><p class="response-text" data-typing-text="The market is dominated by **Legacy Inc.**, a slow-moving incumbent with a large, entrenched customer base. The primary growth competitor is **InnovateCorp**, a well-funded startup that is winning new logos with a more modern, cloud-native platform. TechFlow is positioned as a **Niche Challenger**, competing on deep domain expertise and strong customer service rather than technology."></p></div>
        <div class="build-item judgement-box warning"><p class="judgement-title">Judgement (Medium Confidence - 80%):</p><p class="judgement-text" data-typing-text="TechFlow's position is defensible in the short term due to customer loyalty, but it is at high risk of being out-innovated by InnovateCorp. A significant investment in product modernization is required to compete for new market share."></p></div>
    </div>`,
    followUpQuestions: ["How does TechFlow's pricing compare to these competitors?", "What is the customer sentiment for InnovateCorp vs. TechFlow?", "Generate a SWOT analysis for TechFlow."]
},
    "Analyze the credibility of the 5-year strategic plan.": { 
        id: 'strategic-plan-credibility',
        title: "Strategic Plan Credibility Assessment",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Strategic Plan Credibility Assessment</h3><p class="response-subtitle">Source Documents: 5-Year_Strategic_Plan.pptx, ...</p></div>
            <div class="build-item"><div class="response-section-title">Plan vs. Reality Check:</div><div class="data-table-container"><table class="data-table"><thead><tr><th>Metric</th><th>Plan (YoY Growth)</th><th>Actual (LTM)</th><th>Credibility</th></tr></thead><tbody><tr><td>New ARR Growth</td><td>40%</td><td class="text-error">15%</td><td class="text-error">Low</td></tr><tr><td>Geographic Expansion (EMEA)</td><td>$5M ARR</td><td class="text-error">$0.5M ARR</td><td class="text-error">Low</td></tr><tr><td>Headcount Growth</td><td>25%</td><td class="text-success">22%</td><td class="text-success">High</td></tr></tbody></table></div></div>
            <div class="build-item"><p class="response-section-title">Analysis:</p><p class="response-text" data-typing-text="The strategic plan's revenue projections are overly optimistic and not grounded in recent performance. The plan assumes a 40% growth in new ARR, whereas the company has only achieved 15% in the last twelve months. The EMEA expansion target is significantly off-track. The plan lacks concrete initiatives to address the product gaps and competitive pressures."></p></div>
            <div class="build-item judgement-box error"><p class="judgement-title">Judgement (High Confidence - 95%):</p><p class="judgement-text" data-typing-text="The management's strategic plan is not credible and requires a complete overhaul. The financial model should be rebuilt using a more conservative, bottom-up approach based on historical performance and known risks."></p></div>
        </div>`,
        followUpQuestions: ["Build a more realistic 'Base Case' financial model.", "What are the key questions for the CEO about this plan?", "How does this plan compare to their last 3-year plan?"]
    },
    "Show the Quality of Revenue report.": { 
        id: 'qor-report',
        title: "Quality of Revenue Report",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Quality of Revenue (QoR) Report</h3><p class="response-subtitle">Source Documents: Stripe_Data_Export.csv, ...</p></div>
            <div class="build-item grid md:grid-cols-2 gap-6">
                <div class="space-y-6"><div class="card-base"><h4 class="response-section-title">Upsell / Cross-sell</h4><ul class="list-disc pl-5 space-y-1 text-sm" data-animate-list><li>Only 15% of customers use >1 module.</li><li>No formal process for identifying expansion opportunities.</li><li>Sales team is compensated on new logos only.</li></ul></div><div class="card-base"><h4 class="response-section-title">Packaging & Pricing</h4><ul class="list-disc pl-5 space-y-1 text-sm" data-animate-list><li>Single, flat-rate pricing model limits monetization.</li><li>No usage-based or tiered pricing exists.</li><li>Heavy, inconsistent discounting observed at quarter-end.</li></ul></div></div>
                <div class="card-base"><h4 class="response-section-title">ARR Growth Recommendations</h4><div class="data-table-container"><table class="data-table"><thead><tr><th>Recommendation</th><th>Impact</th></tr></thead><tbody><tr><td>Implement 3-tiered pricing (Good, Better, Best) with usage-based components.</td><td><span class="status-badge high">High</span></td></tr><tr><td>Launch a program to convert the perpetual license base to recurring subscriptions.</td><td><span class="status-badge high">High</span></td></tr><tr><td>Introduce a dedicated Customer Success team focused on NRR.</td><td><span class="status-badge">Medium</span></td></tr></tbody></table></div></div>
            </div>
            <div class="build-item judgement-box success"><p class="judgement-title">Judgement (High Confidence - 90%):</p><p class="judgement-text" data-typing-text="Significant, untapped potential exists to improve revenue quality. Implementing tiered packaging, an expansion-focused sales motion, and a proactive customer success function could dramatically increase NRR and LTV."></p></div>
        </div>`,
        followUpQuestions: ["What are the low-hanging fruit / low-risk options we should prioritize?", "What items can be part of the 100-day plan vs. the longer-term strategy?", "Do we have the right talent in the organization to execute on these recommendations?"],
    },
"Analyze the efficiency of the sales and marketing funnel.": { 
    id: 'funnel-efficiency',
    title: "Sales & Marketing Funnel Analysis",
    renderFunc: () => `<div class="aria-response-content">
        <div class="build-item"><h3 class="response-title">Sales & Marketing Funnel Analysis</h3><p class="response-subtitle">Source Documents: HubSpot_Analytics_Export.csv, ...</p></div>
        <div class="build-item funnel-chart-container"><div class="funnel-item"><div class="funnel-label">Leads</div><div class="funnel-bar" style="width: 100%; background-color: var(--accent-blue);">10,000</div></div><div class="funnel-item"><div class="funnel-label">MQLs (5%)</div><div class="funnel-bar" style="width: 50%; background-color: var(--accent-teal);">500</div></div><div class="funnel-item"><div class="funnel-label">SQLs (20%)</div><div class="funnel-bar" style="width: 10%; background-color: var(--purple);">100</div></div><div class="funnel-item"><div class="funnel-label">Wins (15%)</div><div class="funnel-bar" style="width: 1.5%; background-color: var(--status-success);">15</div></div></div>
        <div class="build-item"><p class="response-section-title">Analysis:</p><p class="response-text" data-typing-text="The funnel shows a significant drop-off from MQL (Marketing Qualified Lead) to SQL (Sales Qualified Lead), with an 80% leakage rate. This suggests a misalignment between marketing campaigns and sales criteria, or an ineffective lead nurturing process. The final win rate of 15% from qualified opportunities is below the industry benchmark of 20-25%."></p></div>
        <div class="build-item judgement-box warning"><p class="judgement-title">Judgement (Medium Confidence - 85%):</p><p class="judgement-text" data-typing-text="The sales and marketing engine is inefficient. There is a clear opportunity to create value by improving lead qualification, nurturing, and sales closing processes."></p></div>
    </div>`,
    followUpQuestions: ["What are the top 3 initiatives to improve the win rate?", "How does this funnel compare to portfolio company benchmarks?"],
},
    "Identify the top 10 customers by revenue and any concentration risks.": { 
        id: 'customer-concentration',
        title: "Customer Concentration Analysis",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Customer Concentration Analysis</h3><p class="response-subtitle">Source Documents: ARR_by_Customer.xlsx, ...</p></div>
            <div class="build-item"><div class="response-section-title">Top 10 Customer ARR Contribution:</div><div class="stacked-bar-container"><div class="stacked-bar-segment" style="width: 28%; background-color: var(--status-error);" title="Top 2: $3.36M">Top 2 (28%)</div><div class="stacked-bar-segment" style="width: 17%; background-color: var(--status-warning);" title="Top 3-5: $2.04M">Top 3-5 (17%)</div><div class="stacked-bar-segment" style="width: 15%; background-color: var(--accent-blue);" title="Top 6-10: $1.8M">Top 6-10 (15%)</div><div class="stacked-bar-segment" style="width: 40%; background-color: var(--bg-hover); color: var(--text-secondary);">All Others (40%)</div></div></div>
            <div class="build-item"><p class="response-section-title">Analysis:</p><p class="response-text" data-typing-text="There is a significant customer concentration risk. The top 2 customers, Global FinCorp and HealthUnited, account for 28% of the total $12M reported ARR. The top 10 customers collectively represent 60% of total ARR. Furthermore, the contract for Global FinCorp ($3.36M ARR) is up for renewal in 4 months and contains non-standard termination for convenience clauses."></p></div>
            <div class="build-item judgement-box error"><p class="judgement-title">Judgement (High Confidence - 100%):</p><p class="judgement-text" data-typing-text="Customer concentration is a critical risk. A key condition of the deal should be the successful and early renewal of the Global FinCorp contract under standard terms. A VCP to diversify the customer base is essential."></p></div>
        </div>`,
        followUpQuestions: ["What is the renewal status of the Global FinCorp contract?", "What is the plan to diversify the customer base?", "What is the financial impact if Global FinCorp churns?"],
    },
    "Summarize the key architectural risks and their potential cost to remediate.": { 
        id: 'architectural-risks',
        title: "Architectural Risk Summary",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Architectural Risk Summary</h3><p class="response-subtitle">Source Documents: Tech_Architecture_Overview.pptx, ...</p></div>
            <div class="build-item"><p class="response-section-title">Analysis:</p><p class="response-text" data-typing-text="The core application is a legacy monolith built on an outdated framework. This creates significant risks: 1) **Scalability:** It cannot handle the projected 3x user growth. 2) **Developer Velocity:** A small change requires a full system redeployment, slowing down feature releases. 3) **Hiring:** It is difficult to find engineers skilled in this legacy technology. The CTO estimates a full migration to a microservices architecture would take 18-24 months and cost approximately $4.5M in dedicated engineering resources."></p></div>
            <div class="build-item judgement-box error"><p class="judgement-title">Judgement (High Confidence - 95%):</p><p class="judgement-text" data-typing-text="Technical debt is a critical issue that will throttle growth if not addressed. The remediation cost must be factored into the valuation model, and a detailed migration plan should be a Day 1 priority."></p></div>
        </div>`,
        followUpQuestions: ["What is the current plan for this migration?", "Who on the team has experience with microservices?", "How does this impact the hiring plan?"],
    },
    "How does the R&D team's velocity compare to industry benchmarks?": { 
        id: 'rd-velocity',
        title: "R&D Velocity & Efficiency Analysis",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">R&D Velocity & Efficiency</h3><p class="response-subtitle">Source Documents: Jira_Velocity_Reports.csv, ...</p></div>
            <div class="build-item"><div class="response-section-title">Key R&D Metrics:</div><div class="data-table-container"><table class="data-table"><thead><tr><th>Metric</th><th>TechFlow</th><th>Industry Benchmark</th><th>Assessment</th></tr></thead><tbody><tr><td>Cycle Time (Idea to Prod)</td><td>95 days</td><td>45-60 days</td><td class="text-error">Poor</td></tr><tr><td>Deployment Frequency</td><td>Monthly</td><td>Weekly/Daily</td><td class="text-error">Poor</td></tr><tr><td>R&D % of Revenue</td><td>32%</td><td>20-25%</td><td class="text-warning">High</td></tr></tbody></table></div></div>
            <div class="build-item"><p class="response-section-title">Analysis:</p><p class="response-text" data-typing-text="TechFlow's R&D velocity is significantly below industry standards. The long cycle time and infrequent deployments are direct symptoms of the monolithic architecture and lack of automated testing. Furthermore, R&D spending as a percentage of revenue is high, indicating inefficiency. The company is spending more than its peers to produce less."></p></div>
            <div class="build-item judgement-box error"><p class="judgement-title">Judgement (High Confidence - 90%):</p><p class="judgement-text" data-typing-text="The R&D function is inefficient and slow, representing a major operational drag. A transformation plan focusing on DevOps, agile practices, and ROI-based project selection is required."></p></div>
        </div>`,
        followUpQuestions: ["What are the main drivers of the long cycle time?", "How can we improve the ROI of R&D spend?", "What is the current state of automated testing?"],
    },
    "What is the plan for migrating off the legacy monolithic architecture?": {
        id: 'migration-plan',
        title: "Monolith Migration Plan",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Monolith Migration Plan Analysis</h3><p class="response-subtitle">Source Documents: CTO_Interview_Transcript.docx, ...</p></div>
            <div class="build-item"><p class="response-text" data-typing-text="Currently, there is **no formal, documented plan** for migrating off the legacy monolithic architecture. The CTO has acknowledged the technical debt but has not allocated dedicated resources or a timeline for a migration project. The immediate focus of the engineering team is on maintaining the existing system and delivering features on the current roadmap."></p></div>
            <div class="build-item judgement-box error"><p class="judgement-title">Judgement (High Confidence - 95%):</p><p class="judgement-text" data-typing-text="The lack of a migration plan is a critical strategic risk. It indicates a reactive rather than proactive approach to technology management. A key component of the Value Creation Plan must be to develop and fund a phased migration to a modern, microservices-based architecture."></p></div>
        </div>`,
        followUpQuestions: ["Estimate the cost and timeline for a monolith-to-microservices migration.", "Generate a job description for a 'Lead DevOps Engineer' to lead this.", "Draft an IC memo slide on technical debt."]
    },
        "Draft an email to the CFO requesting clarification on revenue recognition policies.": {
        id: 'draft-cfo-email-revrec',
        title: "CFO Email Draft: Revenue Recognition",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">CFO Email Draft: Revenue Recognition</h3></div>
            <div class="build-item card-base p-4">
                <p><strong>To:</strong> CFO, TechFlow Solutions</p>
                <p><strong>Subject:</strong> Diligence Question: Revenue Recognition for Perpetual Licenses</p>
                <hr class="my-2 border-border-color"/>
                <div class="response-text" data-typing-text="Hi [Name],\n\nAs part of our ongoing diligence, we are analyzing the composition of the company's ARR. We noted that revenue from some perpetual license contracts appears to be recognized over an 18-month period.\n\nCould you please provide the formal revenue recognition policy document that outlines the accounting treatment for these specific contracts? Understanding this is key to accurately assessing the quality of recurring revenue.\n\nAppreciate your help.\n\nBest,\nAria"></div>
            </div>
        </div>`,
        followUpQuestions: ["Send the email.", "Log this request in the diligence tracker."]
    },
    "Request all contracts with non-standard terms be uploaded to the data room.": {
        id: 'request-contracts-log',
        title: "Action Logged: Request for Contracts",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Action Logged: Request for Contracts</h3></div>
            <div class="build-item judgement-box success mt-4">
                <p class="judgement-title">Action Complete:</p>
                <p class="judgement-text" data-typing-text="A formal request has been logged in the diligence tracker and sent to the deal team lead: 'Please request that the target company identify and upload all customer contracts containing non-standard termination or payment clauses to the 'Legal' folder in the data room by EOD tomorrow.'"></p>
            </div>
        </div>`,
        followUpQuestions: ["Who is responsible for uploading these?", "Set a reminder to follow up tomorrow."]
    },
    "Build the 'Base Case' financial model.": {
        id: 'build-base-case-model',
        title: "Financial Model: Base Case vs. Management Case",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">'Base Case' Financial Model (Adjusted from Management Case)</h3></div>
            <div class="build-item data-table-container mt-4">
                <table class="data-table">
                    <thead><tr><th>Metric</th><th>Management Case (2025)</th><th>Base Case (2025)</th><th>Key Adjustment</th></tr></thead>
                    <tbody>
                        <tr><td>New ARR Growth</td><td>40%</td><td class="text-warning">18%</td><td>Aligned to historical + 3% uplift</td></tr>
                        <tr><td>New Product Revenue</td><td>$4.0M</td><td class="text-warning">$0.5M</td><td>Discounted by 87.5% due to launch risk</td></tr>
                        <tr class="font-bold border-t-2"><td >Total Revenue</td><td>$77M</td><td>$62M</td><td>Reflects lower growth assumptions</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="build-item judgement-box warning mt-4">
                <p class="judgement-title">Judgement (High Confidence - 95%):</p>
                <p class="judgement-text" data-typing-text="The 'Base Case' model provides a more realistic financial outlook by correcting for management's overly optimistic assumptions. This adjusted model should be used as the foundation for our valuation."></p>
            </div>
        </div>`,
        followUpQuestions: ["What is the impact of this on the valuation model?", "Export this table to Excel."]
    },
    "Which anomaly has the biggest impact on valuation?": {
        id: 'anomaly-valuation-impact',
        title: "Anomaly Impact on Valuation",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Valuation Impact Analysis</h3></div>
            <div class="build-item judgement-box error">
                <p class="judgement-title">Primary Impact Driver:</p>
                <p class="judgement-text" data-typing-text="The **Non-Standard ARR Composition** anomaly has the most significant and immediate impact on valuation. Re-classifying $4.92M of reported ARR to non-recurring revenue would reduce the company's valuation by an estimated **$40M - $50M**, assuming a standard 8-10x ARR multiple. This is a critical adjustment."></p>
            </div>
        </div>`,
        followUpQuestions: ["Build the 'Base Case' financial model.", "What is the second most impactful anomaly?"]
    },
    "Draft an email to the CFO about the ARR composition.": {
        id: 'draft-cfo-email-arr',
        title: "CFO Email Draft: ARR Composition",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">CFO Email Draft: ARR Composition</h3></div>
            <div class="build-item card-base p-4">
                <p><strong>To:</strong> CFO, TechFlow Solutions</p>
                <p><strong>Subject:</strong> Diligence Question: ARR Composition</p>
                <hr class="my-2 border-border-color"/>
                <div class="response-text" data-typing-text="Hi [Name],\n\nFollowing up on our analysis of the company's revenue, we're working to align the reported ARR with our internal definitions. Could you please provide a bridge that breaks down the reported $12M ARR into its core components: 1) recurring subscription revenue, 2) recurring maintenance revenue, and 3) any amortized perpetual license revenue?\n\nThis will help us accurately model the business for the Investment Committee. Thanks for your help.\n\nBest,\nAria"></div>
            </div>
        </div>`,
        followUpQuestions: ["Send the email.", "Log this request in the diligence tracker."]
    },
   "What's the plan to fix the failed product launches?": {
    id: 'product-launch-remediation',
    title: "Product Launch Remediation Plan",
    renderFunc: () => `<div class="aria-response-content">
        <div class="build-item"><h3 class="response-title">Product Launch Remediation Plan</h3></div>
        <div class="build-item"><p class="response-text" data-typing-text="There is currently no formal remediation plan. A core part of the value creation plan will be to implement a new product lifecycle management process. Key steps would include:"></p></div>
        <div class="build-item aria-list mt-4">
            <div class="aria-list-item"><span>1.</span><div><h4>Conduct Post-Mortem Analysis:</h4><p>Perform a full root cause analysis on the three failed launches to identify systemic issues in the product development and GTM process.</p></div></div>
            <div class="aria-list-item"><span>2.</span><div><h4>Implement 'Voice of the Customer' Program:</h4><p>Establish a formal process for gathering and incorporating customer feedback early in the development cycle to ensure product-market fit.</p></div></div>
            <div class="aria-list-item"><span>3.</span><div><h4>Establish Stage-Gate Process:</h4><p>Implement a formal stage-gate process for new product development with clear go/no-go criteria at each phase, tied to market validation and business metrics.</p></div></div>
        </div>
    </div>`,
    followUpQuestions: ["Add this to the Value Creation Plan workspace.", "Estimate the cost of implementing a 'Voice of the Customer' program."]
},
    "Can we start the analysis 2 days earlier?": {
        simulation: { 
            type: 'GANTT_REPLAN', 
            params: { startDayOffset: -2, phaseToShift: 'Phase 3: Analysis' } 
        },
renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Scenario: Accelerate Analysis Phase by 2 Days</h3></div>
            
            <!-- FIX: Replaced spinner with a simple, empty placeholder div -->
            <div class="build-item" id="gantt-replan-target-${Date.now()}" style="min-height: 300px;">
                <!-- The re-planned Gantt chart will be rendered here by JS -->
            </div>
            
            <div class="build-item"><p class="response-text" data-typing-text="I have simulated a 2-day acceleration of the Analysis phase, which you can see reflected in the updated plan above. This is possible, but it creates significant resource contention:"></p></div>
            
            <div class="build-item card-base p-4 space-y-4">
                <div>
                    <h4 class="font-bold text-primary">Positive Impact</h4>
                    <p class="text-secondary text-sm" data-typing-text="The final IC Memo (DD-65) would be ready on Day 10 instead of Day 12, providing the deal team with an earlier read on the key findings."></p>
                </div>
                <div>
                    <h4 class="font-bold text-primary">Consideration (Resource Overload)</h4>
                    <p class="text-secondary text-sm" data-typing-text="This scenario would require **Alex (Analyst)** and **Sarah (Associate)** to work an estimated 65 hours each during that week, a high risk for burnout and errors. The external partner **EY** would also need to approve an expedited timeline."></p>
                </div>
            </div>

        </div>`,
        followUpQuestions: ["Show me the resource allocation for that week.", "Draft an email to EY requesting the expedited timeline."]
    },
    "What is the impact of the 1-day delay on the critical path?": {
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Critical Path Impact Analysis</h3></div>
            <div class="build-item judgement-box warning mt-4">
                <p class="judgement-title">Judgement (Medium Confidence - 85%):</p>
                <p class="judgement-text" data-typing-text="A 1-day delay on the current critical path task, **DD-16 (Code Scan)**, will consume all remaining slack in the Technology workstream. This puts the final **'Comprehensive DD Report' (DD-68)** delivery date at risk. Any further delays beyond this will push out the final deadline."></p>
            </div>
        </div>`,
        followUpQuestions: ["What is the new critical path for the TechFlow diligence?", "Re-plan the project with a compressed QA cycle."]
    },
    "Which resources are overallocated next week?": {
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Resource Allocation: Next Week (Day 11-15)</h3></div>
            <div class="build-item"><p class="response-text" data-typing-text="Based on the current plan for next week, two resources are projected to be overallocated:"></p></div>
            <div class="build-item data-table-container mt-4">
                <table class="data-table">
                    <thead><tr><th>Resource</th><th>Assigned Tasks</th><th>Allocated Hours</th><th>Capacity</th><th class="text-error">Overload</th></tr></thead>
                    <tbody>
                        <tr><td>Alex (Analyst)</td><td>DD-52, DD-60, DD-61</td><td>48</td><td>40</td><td class="text-error">8 hours</td></tr>
                        <tr><td>EY (Partner)</td><td>DD-50, DD-52, DD-65</td><td>55</td><td>50</td><td class="text-error">5 hours</td></tr>
                    </tbody>
                </table>
            </div>
        </div>`,
        followUpQuestions: ["Which tasks can we de-prioritize to resolve this?", "Can we bring in another analyst to help Alex?"]
    },
        "What are the dependencies for the 'Audited Financials' task?": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><div class="portfolio-response-card"><h4 class="response-title">Dependencies for DD-48: Audited Financials</h4><p class="response-text" data-typing-text="This task has one primary predecessor:"></p><ul class="list-disc pl-6 mt-2 text-secondary"><li><strong>DD-40: Financial Statement Analysis:</strong> This task must be completed first to develop a baseline understanding of the company's financials before diving into the audited details. The current status of DD-40 is <strong>Completed</strong>.</li></ul></div></div></div>`,
        followUpQuestions: ["Who is assigned to the 'Audited Financials' task?"]
    },
    "Who is assigned to the 'Audited Financials' task?": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><div class="portfolio-response-card"><h4 class="response-title">Team for DD-48: Audited Financials</h4><p class="response-text" data-typing-text="The following team members are assigned to this task:"></p><div class="data-table-container mt-2"><table class="data-table"><thead><tr><th>Name</th><th>Role</th><th>Responsibility</th></tr></thead><tbody><tr><td>Brenda (VP)</td><td>Internal</td><td>Overall review and sign-off.</td></tr><tr><td>Sarah (Associate)</td><td>Internal</td><td>Detailed analysis and summary report.</td></tr><tr><td>PwC</td><td>Partner</td><td>Provide audited statements and answer clarifying questions.</td></tr></tbody></table></div></div></div></div>`,
        followUpQuestions: ["What is the current status of this task?"]
    },
    "What are the dependencies for the 'Architecture Review' task?": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><div class="portfolio-response-card"><h4 class="response-title">Dependencies for DD-13: Architecture Review</h4><p class="response-text" data-typing-text="This task is dependent on the completion of the following predecessor:"></p><ul class="list-disc pl-6 mt-2 text-secondary"><li><strong>DD-12: Development Process:</strong> A full understanding of the SDLC and release cadence is required before the architecture can be properly assessed for scalability and efficiency. The current status of DD-12 is <strong>In Progress</strong>.</li></ul></div></div></div>`,
        followUpQuestions: ["Who is assigned to the 'Architecture Review' task?", "What is the status of the DD-12 deliverable?"]
    },
    "Who is assigned to the 'Architecture Review' task?": {
        renderFunc: () => `<div class="aria-response-content"><div class="build-item"><div class="portfolio-response-card"><h4 class="response-title">Team for DD-13: Architecture Review</h4><p class="response-text" data-typing-text="This is a specialized task led by our internal and external technology experts:"></p><div class="data-table-container mt-2"><table class="data-table"><thead><tr><th>Name</th><th>Role</th><th>Responsibility</th></tr></thead><tbody><tr><td>Peter Wood</td><td>Sr. Director, Digital Value Creation</td><td>Lead reviewer, focus on scalability and PE value levers.</td></tr><tr><td>AWS</td><td>Partner</td><td>Provide Well-Architected Framework review and cloud-readiness assessment.</td></tr><tr><td>Alex Johnson (CTO)</td><td>Target</td><td>Provide documentation and answer technical questions.</td></tr></tbody></table></div></div></div></div>`,
        followUpQuestions: ["What are the dependencies for the 'Architecture Review' task?", "Draft an email to the CTO about the DD-12 deliverable."]
    }
    
    },

    // ===========================================================
    // CONTEXT: CloudVantage
    // ===========================================================
    'cloudvantage': {
        // --- CONNOR (CRO) WORKFLOWS ---
    // --- CONNOR (CRO) WORKFLOWS ---

    // FIX #1: This is the NEW initial briefing for Connor. It runs automatically when he lands on the ARIA page.
    "Give me my CRO daily briefing.": {
        id: 'cro-daily-briefing',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item themed-synthesis-box" style="--theme-color: var(--accent-blue);">
                <h3 class="response-title">CRO Daily Briefing</h3>
                <p class="response-text" data-typing-text="Good morning, Connor. Here is the current state of the business. Overall performance is strong, led by North America's successful cross-selling of NewCo products. However, two key areas require your attention: the underperformance of the EMEA region and increasing competitive pressure from AgileCloud in the mid-market."></p>
            </div>
            <div class="build-item aria-kpi-grid">
                <div class="aria-kpi-card"><p class="aria-kpi-label">Global Quota Attainment</p><p class="aria-kpi-value text-success">103%</p></div>
                <div class="aria-kpi-card"><p class="aria-kpi-label">Net Revenue Retention</p><p class="aria-kpi-value text-success">128%</p></div>
                <div class="aria-kpi-card"><p class="aria-kpi-label">Win Rate vs. AgileCloud</p><p class="aria-kpi-value text-error">35%</p></div>
            </div>
            <div class="build-item">
                <h4 class="response-section-title">Priority Focus Areas</h4>
                <div class="aria-list">
                    <div class="aria-list-item"><span>1.</span><div><h4>EMEA Region Turnaround:</h4><p>The region is at 75% of quota due to a 9% drop in logo retention. A new VP is needed to stabilize the team.</p></div></div>
                    <div class="aria-list-item"><span>2.</span><div><h4>Upcoming NewCo Renewals:</h4><p>There is a cohort of 12 NewCo customers up for renewal, representing a significant opportunity to standardize contracts and capture price uplift.</p></div></div>
                </div>
            </div>
        </div>`,
        followUpQuestions: ["What is the plan to address the EMEA performance issue?", "Let's process the upcoming renewals.", "What are the biggest risks in the current sales pipeline?"]
    },

    // FIX #1: ADDED THE MISSING RESPONSE FOR THE "PERFORMANCE" PILL
    "Give me a breakdown of our current sales performance against targets.": {
        id: 'sales-performance-breakdown',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Sales Performance Breakdown</h3></div>
            <div class="build-item">
                <h4 class="response-section-title">Regional Quota Attainment (YTD)</h4>
                <div class="histogram-container">
                    <div class="histogram-bar-wrapper"><div class="histogram-bar over-target" style="height: 100%;"></div><p class="histogram-label">NA (115%)</p></div>
                    <div class="histogram-bar-wrapper"><div class="histogram-bar over-target" style="height: 85%;"></div><p class="histogram-label">APAC (105%)</p></div>
                    <div class="histogram-bar-wrapper"><div class="histogram-bar under-target" style="height: 60%;"></div><p class="histogram-label">EMEA (75%)</p></div>
                </div>
            </div>
            <div class="build-item judgement-box"><p class="judgement-title">Judgement:</p><p class="judgement-text" data-typing-text="The immediate priority is to stabilize the EMEA region by addressing the leadership gap. The successful NA cross-sell motion provides a ready-made playbook that can be deployed in EMEA once new leadership is in place."></p><p class="text-xs text-text-muted mt-2"><strong>Source Confidence:</strong> High (Salesforce CRM Pipeline, refreshed today; Workday HR Records, refreshed weekly).</p></div>
        </div>`,
        followUpQuestions: ["What is the plan to address the EMEA performance issue?", "Generate a list of at-risk renewal accounts in EMEA."]
    },

    // FIX #1: ADDED THE MISSING RESPONSE FOR THE "PIPELINE & FORECAST" PILL
    "What are the biggest risks and opportunities in the current sales pipeline?": {
        id: 'pipeline-risks-opps',
        renderFunc: function() { 
            return `<div class="aria-response-content">
                <div class="build-item"><h3 class="response-title">Pipeline Analysis</h3></div>
                <div class="build-item data-table-container"><table class="data-table"><thead><tr><th>Account</th><th>ARR</th><th>Stage</th><th>Risk/Opportunity</th></tr></thead><tbody>
                    <tr><td>Apex Solutions</td><td>$2.8M</td><td>Negotiation</td><td class="text-error">Stalled (14 months in cycle)</td></tr>
                    <tr><td>Stellar Technologies</td><td>$925k</td><td>Proposal</td><td class="text-warning">Competing with AgileCloud</td></tr>
                    <tr><td>Global Enterprises Inc.</td><td>$3.2M</td><td>Verbal Commit</td><td class="text-success">Opportunity to upsell Security Module</td></tr>
                </tbody></table></div>
                <div class="build-item judgement-box error"><p class="judgement-title">Judgement:</p><p class="judgement-text" data-typing-text="The pipeline is heavily concentrated on the Apex Solutions deal, which shows signs of being stalled. The competitive threat from AgileCloud is the most systemic risk. However, the most immediate revenue opportunity lies in systematically processing the upcoming NewCo renewals."></p></div>
                ${renderRecommendedActionsHTML(this.recommendedActions)}
            </div>`
        },
        recommendedActions: [
            { text: "Process the 12 upcoming renewals.", description: "Begin the renewal and re-segmentation play for the NewCo cohort.", prompt: "Let's process the upcoming renewals." },
            { text: "Identify mid-contract upsell opportunities.", description: "Find customers exceeding their plan limits who are not yet up for renewal.", prompt: "Identify mid-contract upsell opportunities." },
            { text: "Generate a battle card for the sales team to compete against AgileCloud.", description: "Equip the sales team with competitive intelligence to improve win rates.", prompt: "Generate a battle card for the sales team to compete against AgileCloud." }
        ],
        followUpQuestions: ["What is the status of the stalled Apex Solutions deal?"]
    },
    
"Analyze the key drivers of our Net Revenue Retention.": {
    id: 'nrr-drivers',
    chartId: 'nrr-drivers-chart',
    chartConfig: {
        type: 'bar',
        data: {
            labels: ['NewCo Cross-Sell', 'Enterprise Upgrades', 'Standard Upsell'],
            datasets: [{
                label: 'Contribution to Expansion ARR',
                data: [55, 30, 15],
                backgroundColor: [
                    'THEME_ACCENT_BLUE',
                    'THEME_ACCENT_TEAL',
                    'THEME_PURPLE'
                ]
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { x: { ticks: { callback: value => value + '%' } } }
        }
    },
    renderFunc: () => `<div class="aria-response-content">
        <div class="build-item"><h3 class="response-title">NRR Driver Analysis (128%)</h3></div>
        <div class="build-item"><div class="response-section-title">Contribution to Expansion ARR:</div><div class="chart-wrapper" style="height: 180px;"><canvas id="nrr-drivers-chart"></canvas></div></div>
        <div class="build-item judgement-box success"><p class="judgement-title">Judgement:</p><p class="judgement-text" data-typing-text="The 128% NRR is exceptionally strong and validates the core synergy thesis of the NewCo deal. The immediate priority is to replicate the successful cross-sell playbook from North America in the underperforming EMEA region."></p><p class="text-xs text-text-muted mt-2"><strong>Source Confidence:</strong> High (NetSuite ERP, refreshed daily).</p></div>
    </div>`,
    followUpQuestions: ["What is the plan to address the EMEA performance issue?", "Which customers are the best candidates for the next upsell campaign?"]
},
    // REMAINDER OF THE CONVERSATIONAL FLOWS
    "What is the plan to address the EMEA performance issue?": {
        id: 'emea-plan',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">EMEA Turnaround Plan</h3></div>
            <div class="build-item"><p class="response-text" data-typing-text="The root cause of the EMEA underperformance is the leadership vacuum created by the VP's departure 3 months ago. The immediate plan is to hire a new VP of Sales for the region."></p></div>
            <div class="build-item judgement-box"><p class="judgement-title">Actionable Insight:</p><p class="judgement-text" data-typing-text="I can assist by drafting a job description based on the profiles of our most successful sales leaders and identifying potential candidates within our network."></p></div>
        </div>`,
        followUpQuestions: ["Draft a job description for the new EMEA VP of Sales.", "Identify potential candidates in our network."]
    },
    "Analyze the NewCo customer base for further cross-sell opportunities.": {
        id: 'initiatives-overview',
        renderFunc: function() {
            return `<div class="aria-response-content">
                <div class="build-item"><h3 class="response-title">Strategic Initiatives Overview</h3></div>
                <div class="build-item"><p class="response-text" data-typing-text="The primary initiative is the successful integration of NewCo. A key part of realizing the deal's value is cross-selling our existing modules into the acquired customer base. My analysis of their historical data indicates a strong latent demand for data governance and compliance solutions."></p></div>
                ${renderRecommendedActionsHTML(this.recommendedActions)}
            </div>`
        },
        recommendedActions: [
            { text: "Generate a target list for NewCo cross-sell.", description: "Analyze past feature requests to find high-propensity cross-sell targets.", prompt: "Target customers for NewCo cross-sell." }
        ],
        followUpQuestions: ["What is the total synergy target for the NewCo acquisition?", "Show me the 100-day integration plan."]
    },

  "Let's process the upcoming renewals.": {
    id: 'renewal-initial-list',
    // REPLACE the renderFunc with this:
    renderFunc: () => {
        const tableRows = croData.renewalOpportunities.map(c => `<tr><td>${c.account}</td><td>${c.legacySegment}</td><td>$${c.currentARR.toLocaleString()}</td><td>${c.renewalDate}</td></tr>`).join('');
        return `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Upcoming Renewals (Next 90 Days)</h3></div>
            <div class="build-item data-table-container"><table class="data-table"><thead><tr><th>Account</th><th>Legacy Segment</th><th>Current ARR</th><th>Renewal Date</th></tr></thead><tbody>${tableRows}</tbody></table></div>
            <div class="build-item judgement-box"><p class="judgement-title">Judgement:</p><p class="judgement-text" data-typing-text="There are 12 upcoming renewals totaling $1,240,000 in ARR. The current customer segmentation ('Tier 1', 'Key Account') is inconsistent and doesn't align with our value-based playbook. I recommend re-segmenting this cohort into our standard Gold/Silver/Bronze tiers to standardize the renewal and upsell motion."></p></div>
        </div>`;
    },
    followUpQuestions: ["Okay, re-segment these customers based on our playbook criteria.", "Which of these accounts are at risk?"]
},
    "Okay, re-segment these customers based on our playbook criteria.": {
    id: 'renewal-resegment',
    // REPLACE the renderFunc with this:
    renderFunc: () => {
        const tableRows = croData.renewalOpportunities.map(c => `<tr><td>${c.account}</td><td>${c.legacySegment}</td><td><span class="segment-badge ${c.proposedSegment.toLowerCase()}">${c.proposedSegment}</span></td><td>${c.rationale}</td></tr>`).join('');
        return `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Proposed Customer Re-segmentation</h3></div>
            <div class="build-item data-table-container"><table class="data-table"><thead><tr><th>Account</th><th>Legacy Segment</th><th>Proposed Segment</th><th>Rationale</th></tr></thead><tbody>${tableRows}</tbody></table></div>
            <div class="build-item judgement-box"><p class="judgement-title">Next Step:</p><p class="judgement-text" data-typing-text="Segmentation is complete for all 12 accounts. Now, let's define the renewal strategy. We can apply the standard playbook price uplifts, but we should consider a more cautious approach for the accounts flagged as 'At Risk'. How would you like to proceed?"></p></div>
        </div>`;
    },
    followUpQuestions: ["Apply the standard playbook uplift, but use a conservative 5% for at-risk accounts.", "What is the financial impact of this re-segmentation and uplift plan?", "Which accounts have the highest upsell potential?"]
},
"Apply the standard playbook uplift, but use a conservative 5% for at-risk accounts.": {
    id: 'renewal-uplift-model',
    // REPLACE the renderFunc with this:
    renderFunc: () => {
        const playbookUplifts = { 'Gold': 0.20, 'Silver': 0.10, 'Bronze': 0.05 };
        const tableRows = croData.renewalOpportunities.map(c => {
            const isAtRisk = c.health === 'At Risk';
            const upliftPercent = isAtRisk ? 0.05 : playbookUplifts[c.proposedSegment];
            const upliftAmount = c.currentARR * upliftPercent;
            const newARR = c.currentARR + upliftAmount;
            return `<tr><td>${c.account}</td><td><span class="segment-badge ${c.proposedSegment.toLowerCase()}">${c.proposedSegment}</span></td><td>$${c.currentARR.toLocaleString()}</td><td class="${isAtRisk ? 'text-warning' : ''}">${(upliftPercent * 100).toFixed(0)}% ${isAtRisk ? '(At Risk)' : ''}</td><td class="text-success">$${upliftAmount.toLocaleString()}</td><td>$${newARR.toLocaleString()}</td></tr>`;
        }).join('');
        const totalIncrease = croData.renewalOpportunities.reduce((sum, c) => {
            const isAtRisk = c.health === 'At Risk';
            const upliftPercent = isAtRisk ? 0.05 : playbookUplifts[c.proposedSegment];
            return sum + (c.currentARR * upliftPercent);
        }, 0);
        return `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Renewal Uplift Financial Impact</h3></div>
            <div class="build-item data-table-container"><table class="data-table"><thead><tr><th>Account</th><th>Segment</th><th>Current ARR</th><th>Uplift %</th><th>ARR Increase</th><th>New ARR</th></tr></thead><tbody>${tableRows}</tbody></table></div>
            <div class="build-item judgement-box success"><p class="judgement-title">Actionable Insight:</p><p class="judgement-text" data-typing-text="This renewal strategy for the 12 accounts projects a total ARR increase of **$${totalIncrease.toLocaleString()}**. This is a strong, data-driven plan. I am ready to generate the specific action items and renewal targets for the Account Managers. Shall I proceed?"></p></div>
        </div>`;
    },
    followUpQuestions: ["Yes, please generate conversation guides for each segment action.", "Which customers are at the highest risk of churning with this increase?"]
},
    "Yes, please generate conversation guides for each segment action.": {
        id: 'generate-guides',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Generated Conversation Guides by Segment</h3></div>
            <div class="build-item card-base p-4">
                <h4 class="response-section-title">Gold Segment Guide (20% Uplift)</h4>
                <ul class="list-disc pl-5 text-sm space-y-1">
                    <li><strong>Goal:</strong> Reinforce strategic partnership and secure renewal with value-based uplift.</li>
                    <li><strong>Talking Points:</strong> Highlight increased usage, ROI achieved, and introduce new enterprise features unlocked by the Gold tier. Frame the uplift around enhanced value and dedicated support.</li>
                </ul>
            </div>
            <div class="build-item card-base p-4">
                <h4 class="response-section-title">Silver Segment Guide (10% Uplift)</h4>
                <ul class="list-disc pl-5 text-sm space-y-1">
                    <li><strong>Goal:</strong> Secure renewal and introduce expansion potential.</li>
                    <li><strong>Talking Points:</strong> Focus on consistency and reliability. Introduce one key feature from the next tier up as a potential future upsell. Justify uplift based on product improvements over the last term.</li>
                </ul>
            </div>
            <div class="build-item card-base p-4">
                <h4 class="response-section-title">Bronze Segment Guide (5% Uplift)</h4>
                <ul class="list-disc pl-5 text-sm space-y-1">
                    <li><strong>Goal:</strong> Secure a simple, low-friction renewal.</li>
                    <li><strong>Talking Points:</strong> Emphasize stability and ease of use. Position the modest uplift as a standard cost-of-living adjustment to maintain service levels.</li>
                </ul>
            </div>
            <div class="build-item judgement-box"><p class="judgement-title">Next Step:</p><p class="judgement-text" data-typing-text="The guides are ready. Shall I create the renewal opportunities in Salesforce and assign them to the account owners with these guides and target ARRs attached?"></p></div>
        </div>`,
        followUpQuestions: ["Yes, assign these renewal targets to the account owners."]
    },
"Yes, assign these renewal targets to the account owners.": {
        id: 'renewal-assign-ams',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item card-base">
                <h4 class="response-title">Action Complete: Renewals Assigned in CRM</h4>
                <p class="response-text" data-typing-text="Excellent. I have created renewal opportunities in Salesforce for the 12 NewCo accounts. Each opportunity has been assigned to the correct owner and includes the target ARR and a link to the appropriate conversation guide. Maya Singh, John Chen, and Anna Wong have been notified."></p>
            </div>
        </div>`,
        followUpQuestions: [] // This empty array correctly signifies the end of this conversational play.
    },
    "Identify mid-contract upsell opportunities.": {
        id: 'upsell-opportunities',
        renderFunc: () => {
            const tableRows = croData.upsellOpportunities.map(c => `<tr><td>${c.account}</td><td>${c.currentPlan}</td><td class="text-warning">${c.usageMetric} (${c.metricValue})</td><td>${c.contractEnd}</td><td class="text-success">$${c.potentialARR.toLocaleString()}</td></tr>`).join('');
            const totalPotential = croData.upsellOpportunities.reduce((sum, c) => sum + c.potentialARR, 0);
            return `<div class="aria-response-content">
                <div class="build-item"><h3 class="response-title">Mid-Contract Upsell Opportunities</h3></div>
                <div class="build-item data-table-container"><table class="data-table"><thead><tr><th>Account</th><th>Current Plan</th><th>Usage Trigger</th><th>Contract Ends</th><th>Potential ARR Lift</th></tr></thead><tbody>${tableRows}</tbody></table></div>
                <div class="build-item judgement-box success"><p class="judgement-title">Actionable Insight:</p><p class="judgement-text" data-typing-text="I've identified **${croData.upsellOpportunities.length} customers** who are exceeding their plan limits but are not yet up for renewal. There is a total of **$${totalPotential.toLocaleString()}** in potential ARR that can be captured proactively. I recommend assigning these to the AMs for immediate outreach."></p></div>
            </div>`;
        },
        followUpQuestions: ["Draft an outreach email for Summit Financial highlighting the benefits of the Enterprise tier.", "Assign these to the account managers."]
    },
    "Target customers for NewCo cross-sell.": {
        id: 'cross-sell-opportunities',
        renderFunc: () => {
            const tableRows = croData.crossSellOpportunities.map(c => `<tr><td>${c.account}</td><td>${c.pastRequest}</td><td class="text-success">${c.newcoProduct}</td><td class="text-success">$${c.potentialARR.toLocaleString()}</td></tr>`).join('');
            const totalPotential = croData.crossSellOpportunities.reduce((sum, c) => sum + c.potentialARR, 0);
            return `<div class="aria-response-content">
                <div class="build-item"><h3 class="response-title">NewCo Cross-Sell Opportunities</h3></div>
                <div class="build-item data-table-container"><table class="data-table"><thead><tr><th>Account</th><th>Past Feature Request</th><th>Matching NewCo Product</th><th>Potential ARR</th></tr></thead><tbody>${tableRows}</tbody></table></div>
                <div class="build-item judgement-box success"><p class="judgement-title">Actionable Insight:</p><p class="judgement-text" data-typing-text="My analysis of historical support tickets and feature requests has identified **${croData.crossSellOpportunities.length} high-propensity customers** for the NewCo product suite, representing a potential **$${totalPotential.toLocaleString()}** in new ARR."></p></div>
            </div>`;
        },
        followUpQuestions: ["Generate a one-pager on the NewCo Govern module for Anchor Bank.", "Who is the best person to contact at Innovate Labs about this?"]
    },
    "What is the status of the stalled Apex Solutions deal?": { /* ... (This response remains the same as before) ... */ },
    "Draft a job description for the new EMEA VP of Sales.": { /* ... (This response remains the same as before) ... */ },

    // --- MAYA (AM) WORKFLOWS ---
    "What are my priority renewals for this week?": {
    id: 'maya-weekly-briefing',
    // REPLACE the renderFunc with this:
    renderFunc: () => {
        const myRenewals = croData.renewalOpportunities.filter(c => c.owner === 'Maya Singh');
        const tableRows = myRenewals.map(c => `<tr><td>${c.account}</td><td>${c.renewalDate}</td><td>$${c.currentARR.toLocaleString()}</td><td class="${c.health === 'At Risk' ? 'text-error' : 'text-success'}">${c.health}</td></tr>`).join('');
        return `<div class="aria-response-content">
            <div class="build-item themed-synthesis-box" style="--theme-color: var(--accent-blue);">
                <h3 class="response-title">Your Priority Renewals</h3>
                <p class="response-text" data-typing-text="Good morning, Maya. Based on the renewal plan finalized by Connor, you have **${myRenewals.length} accounts** up for renewal in the next 90 days. Your highest priority is **Global Enterprises Inc.**, which has been flagged as 'At Risk' due to recent support activity."></p>
            </div>
            <div class="build-item">
                <h4 class="response-section-title">Your Upcoming Renewals</h4>
                <div class="data-table-container"><table class="data-table"><thead><tr><th>Account</th><th>Renewal Date</th><th>Current ARR</th><th>Health Score</th></tr></thead><tbody>${tableRows}</tbody></table></div>
            </div>
        </div>`;
    },
    followUpQuestions: ["Generate a conversation guide for my call with Global Enterprises Inc.", "What is the recommended renewal offer for Catalyst Corp?"]
},
    "Generate a conversation guide for my call with Global Enterprises Inc.": {
        id: 'maya-convo-guide-global',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Conversation Guide: Global Enterprises Inc.</h3></div>
            <div class="build-item card-base p-4">
                <p class="response-section-title">Context & Goal</p>
                <p class="text-sm text-secondary mb-4">This account is 'At Risk' due to 4 support tickets in the last 60 days. The goal is to renew them to the **Gold** tier with a **20% uplift** to **$96,000 ARR** by demonstrating value and addressing their support concerns with our Platinum offer.</p>
                <p class="response-section-title">Key Talking Points:</p>
                <ul class="list-disc pl-5 text-sm space-y-1" data-animate-list>
                    <li><strong>Acknowledge & Solve:</strong> "I see you've had 4 support tickets recently. Our new Platinum Support, included in the Gold tier, provides a 4-hour SLA and a dedicated TAM to prevent these issues going forward."</li>
                    <li><strong>Highlight Value:</strong> "Your usage of the Analytics Suite has increased by 35% this past quarter. The Gold tier unlocks advanced analytics features that will further accelerate your team's efficiency."</li>
                    <li><strong>Justify Uplift:</strong> "To provide this higher level of support and the advanced features you're already leveraging, we are moving you to our Gold tier, which is reflected in the new pricing."</li>
                </ul>
            </div>
        </div>`,
        followUpQuestions: ["What were the root causes of their support tickets?", "I want to introduce our Platinum Support Offer, please generate a deck for Global outlining the specific benefits that would have helped them last term and what additional benefits they can leverage in the new term."]
    },
    "I want to introduce our Platinum Support Offer, please generate a deck for Global outlining the specific benefits that would have helped them last term and what additional benefits they can leverage in the new term.": {
        id: 'maya-platinum-deck',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Generated Presentation: Platinum Support for Global Inc.</h3></div>
            <div class="build-item card-base p-4">
                <h4 class="response-section-title">Slide 1: A Partnership Focused on Your Success</h4>
                <ul class="list-disc pl-5 text-sm space-y-1">
                    <li>Acknowledge the 4 support tickets in the last 60 days.</li>
                    <li>Reiterate our commitment to their success and the value they've achieved (35% increase in Analytics Suite usage).</li>
                </ul>
            </div>
            <div class="build-item card-base p-4">
                <h4 class="response-section-title">Slide 2: Introducing the Platinum Support Offer</h4>
                <ul class="list-disc pl-5 text-sm space-y-1">
                    <li><strong>Dedicated Technical Account Manager:</strong> A named expert who understands their environment.</li>
                    <li><strong>4-Hour SLA:</strong> Guaranteed response times for critical issues, preventing the 48-hour delays they experienced.</li>
                    <li><strong>Quarterly Strategy Reviews:</strong> Proactive sessions to ensure they are maximizing value from the platform.</li>
                </ul>
            </div>
            <div class="build-item card-base p-4">
                <h4 class="response-section-title">Slide 3: Your Path Forward with CloudVantage</h4>
                <ul class="list-disc pl-5 text-sm space-y-1">
                    <li>Clear breakdown of the Gold tier renewal, including the Platinum Support package.</li>
                    <li>Next steps for discussion and finalizing the renewal.</li>
                </ul>
            </div>
            <div class="build-item judgement-box"><p class="judgement-title">Action Complete:</p><p class="judgement-text" data-typing-text="The presentation has been generated and saved to your drafts. It is ready to be attached to an email."></p></div>
        </div>`,
        followUpQuestions: ["Draft an email to Michael Wilson with this deck attached.", "What other customers are good candidates for this offer?"]
    },

    // --- DISCIPLINE OVERVIEWS (ADRIAN/EVELYN) ---
    "Tell me about the Sales discipline for CloudVantage.": {
        id: 'discipline-sales-overview',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item themed-synthesis-box" style="--theme-color: var(--accent-blue);">
                <h3 class="response-title">Sales Discipline Synthesis</h3>
                <p class="response-text" data-typing-text="The Sales discipline is a tale of two regions. North America is significantly over-performing at 115% of quota, driven almost entirely by successful cross-selling into the NewCo customer base. This success, however, is masking a critical issue in the **EMEA region, which is tracking at only 75% of its target.** My analysis of Workday records confirms this is directly correlated to the departure of the regional VP three months ago, leading to a 9% drop in logo retention and low team morale."></p>
            </div>
            <div class="build-item">
                <h4 class="response-section-title">Regional Quota Attainment (YTD)</h4>
                <div class="histogram-container">
                    <div class="histogram-bar-wrapper"><div class="histogram-bar over-target" style="height: 100%;"></div><p class="histogram-label">NA (115%)</p></div>
                    <div class="histogram-bar-wrapper"><div class="histogram-bar over-target" style="height: 85%;"></div><p class="histogram-label">APAC (105%)</p></div>
                    <div class="histogram-bar-wrapper"><div class="histogram-bar under-target" style="height: 60%;"></div><p class="histogram-label">EMEA (75%)</p></div>
                </div>
            </div>
            <div class="build-item judgement-box">
                <p class="judgement-title">Judgement:</p>
                <p class="judgement-text" data-typing-text="The immediate priority is to stabilize the EMEA region by addressing the leadership gap. The successful NA cross-sell motion provides a ready-made playbook that can be deployed in EMEA once new leadership is in place."></p>
                <p class="text-xs text-text-muted mt-2"><strong>Source Confidence:</strong> High (Salesforce CRM Pipeline, refreshed today; Workday HR Records, refreshed weekly).</p>
            </div>
        </div>`,
        followUpQuestions: ["Analyze the key drivers of our Net Revenue Retention.", "What is the plan to address the EMEA performance issue?", "Generate a list of at-risk renewal accounts in EMEA."]
    },
    "Tell me about the Marketing discipline for CloudVantage.": {
        id: 'discipline-marketing-overview',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item themed-synthesis-box" style="--theme-color: var(--accent-teal);">
                <h3 class="response-title">Marketing Discipline Synthesis</h3>
                <p class="response-text" data-typing-text="Marketing is effectively supporting the GTM strategy, with MQLs 15% above target. However, competitive intelligence reports show we are increasingly losing late-stage deals to a competitor named **'AgileCloud'**. Their strategy appears to be aggressive end-of-quarter discounting, which is impacting our win rates in the mid-market segment."></p>
            </div>
            <div class="build-item aria-kpi-grid">
                <div class="aria-kpi-card"><p class="aria-kpi-label">MQLs vs Target</p><p class="aria-kpi-value text-success">115%</p></div>
                <div class="aria-kpi-card"><p class="aria-kpi-label">Win Rate vs. AgileCloud</p><p class="aria-kpi-value text-error">35%</p></div>
                <div class="aria-kpi-card"><p class="aria-kpi-label">Avg. Discount Rate</p><p class="aria-kpi-value">12%</p></div>
            </div>
        </div>`,
        followUpQuestions: ["How has our win rate against AgileCloud changed over time?", "Generate a battle card for the sales team to compete against AgileCloud.", "What is the financial impact of matching AgileCloud's discounts?"]
    },
    "Tell me about the Build discipline for CloudVantage.": {
        id: 'discipline-build-overview',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item themed-synthesis-box" style="--theme-color: var(--status-warning);">
                <h3 class="response-title">Build Discipline Synthesis</h3>
                <p class="response-text" data-typing-text="The Build discipline is maintaining excellent platform stability with 99.98% uptime. However, the team is facing a significant challenge with the **'AI-Powered Feature Launch,' which is currently 'At Risk'**. The delay is due to technical complexities in integrating NewCo's legacy data models, which is consuming more resources than planned."></p>
            </div>
            <div class="build-item aria-kpi-grid">
                <div class="aria-kpi-card"><p class="aria-kpi-label">Roadmap Adherence</p><p class="aria-kpi-value text-error">70%</p></div>
                <div class="aria-kpi-card"><p class="aria-kpi-label">Platform Uptime</p><p class="aria-kpi-value text-success">99.98%</p></div>
                <div class="aria-kpi-card"><p class="aria-kpi-label">AI Feature Status</p><p class="aria-kpi-value text-error">At Risk</p></div>
            </div>
        </div>`,
        followUpQuestions: ["Generate a risk mitigation plan for the AI feature delay.", "What is the status of the NewCo product integration?", "Who is the lead engineer on the AI feature?"]
    },
    "Tell me about the Run discipline for CloudVantage.": {
        id: 'discipline-run-overview',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item themed-synthesis-box" style="--theme-color: var(--status-success);">
                <h3 class="response-title">Run Discipline Synthesis</h3>
                <p class="response-text" data-typing-text="The Run discipline is performing well, reflected in a strong NPS score of 52, driven by excellent customer support. However, the integration of NewCo customers has led to a temporary **15% increase in support ticket volume**. The team's focus is on improving the onboarding experience for former NewCo clients to reduce this initial friction."></p>
            </div>
            <div class="build-item aria-kpi-grid">
                <div class="aria-kpi-card"><p class="aria-kpi-label">NPS</p><p class="aria-kpi-value text-success">52</p></div>
                <div class="aria-kpi-card"><p class="aria-kpi-label">Ticket Volume</p><p class="aria-kpi-value text-warning">+15% WoW</p></div>
                <div class="aria-kpi-card"><p class="aria-kpi-label">Customer Retention</p><p class="aria-kpi-value text-success">98%</p></div>
            </div>
        </div>`,
        followUpQuestions: ["What are the key drivers behind our current NPS score?", "Analyze the recent trends in customer support ticket volume.", "What is our plan to improve the onboarding experience for NewCo customers?"]
    },
    "Tell me about the Finance discipline for CloudVantage.": {
        id: 'discipline-finance-overview',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item themed-synthesis-box" style="--theme-color: var(--status-success);">
                <h3 class="response-title">Finance Discipline Synthesis</h3>
                <p class="response-text" data-typing-text="The company's financial health is strong, with a 'Rule of 40' score of 58%. However, a detailed analysis of our pricing performance reveals a potential issue: our **'Professional' tier has a low win rate (25%) in the mid-market segment**, with consistent feedback citing price as the primary blocker. This suggests a mismatch between the value delivered and the price point for this specific segment."></p>
            </div>
            <div class="build-item aria-kpi-grid">
                <div class="aria-kpi-card"><p class="aria-kpi-label">Rule of 40</p><p class="aria-kpi-value text-success">58%</p></div>
                <div class="aria-kpi-card"><p class="aria-kpi-label">Gross Margin</p><p class="aria-kpi-value">78%</p></div>
                <div class="aria-kpi-card"><p class="aria-kpi-label">Mid-Market Win Rate</p><p class="aria-kpi-value text-error">25%</p></div>
            </div>
            <div class="build-item">
                <button class="aria-action-card" data-action="navigate-to-modeling" data-capability-id="C840" data-context-title="Pricing & Margin Analysis" data-context-desc="Investigating the pricing mismatch for the Professional tier in the mid-market segment.">
                    <p class="font-semibold text-sm text-primary">Suggest Modeling: Pricing & Margin Analysis</p>
                    <p class="text-xs text-secondary">Let's use the modeling canvas to analyze the 'Pricing & Margin Analysis' capability and identify specific actions to improve our pricing strategy.</p>
                </button>
            </div>
        </div>`,
        followUpQuestions: ["Generate a board-level summary of Q2 financial performance.", "Model the financial impact of a 15% price reduction on the Professional tier.", "What are the key tax and compliance risks associated with the NewCo integration?"]
    },
    "What are the key tax and compliance risks associated with the NewCo integration?": {
    id: 'newco-tax-risks',
    renderFunc: () => `<div class="aria-response-content">
        <div class="build-item"><h3 class="response-title">Key Tax & Compliance Risks: NewCo Integration</h3></div>
        <div class="build-item aria-list mt-4">
            <div class="aria-list-item"><span class="text-error">1.</span><div><h4>Sales Tax Nexus:</h4><p data-typing-text="NewCo has employees in three new states (Colorado, Texas, Florida), creating a sales tax nexus that needs to be immediately registered and configured in our billing system to avoid penalties."></p></div></div>
            <div class="aria-list-item"><span class="text-warning">2.</span><div><h4>Revenue Recognition (ASC 606):</h4><p data-typing-text="NewCo's legacy contracts have different performance obligations. We need a formal accounting review to ensure revenue is recognized in compliance with ASC 606."></p></div></div>
            <div class="aria-list-item"><span class="text-warning">3.</span><div><h4>Data Residency (GDPR):</h4><p data-typing-text="Some of NewCo's European customer data may be subject to GDPR data residency rules that require it to be stored within the EU. An audit of our data storage is required."></p></div></div>
        </div>
        <div class="build-item judgement-box error"><p class="judgement-title">Judgement:</p><p class="judgement-text" data-typing-text="These are standard but critical post-acquisition risks. I recommend engaging a third-party expert, like Evolver's tax and audit team, to conduct a formal review and ensure we are fully compliant to avoid future penalties."></p><p class="text-xs text-text-muted mt-2"><strong>Source Confidence:</strong> High (NewCo Employee Roster, NewCo Contract Review, Legal Diligence Report).</p></div>
    </div>`,
    followUpQuestions: ["Draft an engagement letter for a tax advisor.", "What is the estimated cost of a GDPR compliance audit?"]
},
    "Tell me about the Context discipline for CloudVantage.": {
        id: 'discipline-context-overview',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item themed-synthesis-box" style="--theme-color: var(--text-secondary);">
                <h3 class="response-title">Context Discipline Synthesis</h3>
                <p class="response-text" data-typing-text="From a Context perspective, the primary focus is the execution of the NewCo acquisition. We are currently on **Day 60 of the 100-day integration plan**, which is tracking **'On Track'**. Key workstreams for GTM alignment and financial consolidation are complete. The main outstanding item is the joint product roadmap, which is dependent on the 'Build' team's progress."></p>
            </div>
            <div class="build-item aria-kpi-grid">
                <div class="aria-kpi-card"><p class="aria-kpi-label">Integration Progress</p><p class="aria-kpi-value">60%</p></div>
                <div class="aria-kpi-card"><p class="aria-kpi-label">Synergy Realization</p><p class="aria-kpi-value">$1.2M</p></div>
                <div class="aria-kpi-card"><p class="aria-kpi-label">Team Morale (eNPS)</p><p class="aria-kpi-value">65</p></div>
            </div>
        </div>`,
        followUpQuestions: ["Show me the detailed 100-day integration plan.", "What are the key integration risks?", "Draft a communication plan to NewCo customers about the acquisition."]
    },
    
    // --- ALL OTHER FOLLOW-UP RESPONSES ---
    "How has our win rate against AgileCloud changed over time?": {
         id: 'win-rate-chart-agilecloud',
    chartId: 'winRateChart',
    chartConfig: {
        type: 'line',
        data: {
            labels: ['Q4 2024', 'Q1 2025', 'Q2 2025'],
            datasets: [{ label: 'Win Rate vs. AgileCloud', data: [62, 55, 35], borderColor: 'THEME_STATUS_ERROR', backgroundColor: 'THEME_STATUS_ERROR_TRANSLUCENT', fill: true, tension: 0.1 }]
        },
        options: { scales: { y: { beginAtZero: true, max: 100, ticks: { callback: value => value + '%' } } } }
    },
      renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Win Rate Trend vs. AgileCloud</h3></div>
            <div class="build-item chart-wrapper" style="height: 250px;"><canvas id="winRateChart"></canvas></div>
            <div class="build-item judgement-box error"><p class="judgement-title">Judgement:</p><p class="judgement-text" data-typing-text="The sharp decline in the win rate over the last six months directly correlates with AgileCloud's new pricing strategy. Our current pricing model lacks the flexibility to respond effectively to this competitive pressure."></p><p class="text-xs text-text-muted mt-2"><strong>Source Confidence:</strong> High (Salesforce CRM, Win/Loss Analysis Reports, Q1 & Q2 2025).</p></div>
        </div>`,
        followUpQuestions: ["Generate a battle card for the sales team to compete against AgileCloud.", "What is the financial impact of matching AgileCloud's discounts?"]
    },
    "Show me the detailed 100-day integration plan.": {
        id: '100-day-plan',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">100-Day Integration Plan: NewCo</h3><p class="response-subtitle">Generated by Aria based on the PE Integration Playbook.</p></div>
            <div class="build-item"><div class="timeline-container">
                <div class="timeline-phase"><div class="timeline-phase-title">Phase 1: Day 0-30 (Stabilize & Communicate)</div><ul class="timeline-items" data-animate-list><li>Launch internal and external communication plan.</li><li>Confirm key NewCo leadership and employee retention packages.</li><li>Establish joint steering committee and define integration workstreams.</li><li>Secure all IT systems and begin data backup and migration planning.</li></ul></div>
                <div class="timeline-phase"><div class="timeline-phase-title">Phase 2: Day 31-60 (Assess & Plan)</div><ul class="timeline-items" data-animate-list><li>Complete detailed assessment of NewCo's technology stack and product roadmap.</li><li>Develop joint GTM strategy, including sales training on cross-selling.</li><li>Finalize synergy targets and create detailed tracking dashboards.</li><li>Conduct cultural assessment and plan team-building activities.</li></ul></div>
                <div class="timeline-phase"><div class="timeline-phase-title">Phase 3: Day 61-100 (Execute & Integrate)</div><ul class="timeline-items" data-animate-list><li>Begin execution of priority technology integration projects.</li><li>Launch first joint marketing campaign and enable sales team with new collateral.</li><li>Consolidate financial reporting into CloudVantage's ERP system.</li><li>Report initial synergy wins and 100-day progress to the board.</li></ul></div>
            </div></div>
        </div>`,
        followUpQuestions: ["Identify key integration risks.", "Create a synergy tracking dashboard.", "Draft a communication plan to NewCo customers about the acquisition."]
    },
    "Generate a board-level summary of Q2 financial performance.": {
        id: 'q2-summary',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Q2 2025 Financial Summary for the Board</h3></div>
            <div class="build-item aria-kpi-grid">${[
                { label: 'ARR', value: '$78M', change: '+4% QoQ' },
                { label: 'NRR', value: '128%', change: '+3% vs Target' },
                { label: 'EBITDA Margin', value: '31%', change: '-1% vs Target' }
            ].map(kpi => `<div class="aria-kpi-card"><p class="aria-kpi-label">${kpi.label}</p><p class="aria-kpi-value">${kpi.value}</p><p class="text-sm text-secondary">${kpi.change}</p></div>`).join('')}</div>
            <div class="build-item"><p class="response-section-title">Executive Narrative:</p><p class="response-text" data-typing-text="CloudVantage delivered a strong Q2, exceeding ARR targets driven by robust Net Revenue Retention of 128%. This indicates strong product stickiness and successful expansion within the existing customer base, largely fueled by the NewCo integration. EBITDA margin was slightly below target due to planned investments in integration and R&D for the upcoming AI feature. Overall, the business remains healthy and is tracking well against the annual plan."></p></div>
        </div>`,
        followUpQuestions: ["Analyze the key drivers of our Net Revenue Retention.", "What caused the dip in EBITDA margin?", "What is the forecast for Q3?"]
    },
    "Model the financial impact of a 15% price reduction on the Professional tier.": {
        id: 'model-price-reduction',
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Scenario: 15% Price Reduction for Professional Tier</h3></div>
            <div class="build-item data-table-container"><table class="data-table"><thead><tr><th>Scenario</th><th>Win Rate Assumption</th><th>Net ARR Impact</th></tr></thead><tbody>
                <tr><td>Scenario A</td><td>Improves to 40%</td><td class="text-success">+$2.2M</td></tr>
                <tr><td>Scenario B</td><td>Improves to 30%</td><td class="text-error">-$0.5M</td></tr>
            </tbody></table></div>
            <div class="build-item judgement-box warning"><p class="judgement-title">Judgement:</p><p class="judgement-text" data-typing-text="The success of a price reduction is highly dependent on achieving a significant increase in conversion volume. The breakeven point is a win rate of approximately 34%. I recommend conducting a pilot with a select group of customers before a full rollout."></p><p class="text-xs text-text-muted mt-2"><strong>Source Confidence:</strong> High (Salesforce CRM, Internal Financial Model).</p></div>
        </div>`,
        followUpQuestions: ["Which customers would be good candidates for this pilot?", "How would this impact Gross Margin?"]
    
    }
    }
};

