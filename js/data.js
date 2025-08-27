// js/data.js - Centralized Application Data - RATIONALIZED & CONSOLIDATED

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

const menuItems = [
    { id: 'home', label: 'Home', icon: `<svg>...</svg>`},
    { id: 'portco', label: 'PortCo', icon: `<svg>...</svg>`},
    { id: 'aria', label: 'ARIA', icon: `<svg>...</svg>`},
    { id: 'workspace', label: "Workspace", icon: `<svg>...</svg>`},
    { id: 'modeling', label: 'Modeling', icon: `<svg>...</svg>`}
];

const techflow_anomalies = [
    { id: 'arr-comp', workstream: 'Financial & Risk', title: 'Anomaly #1: Non-Standard ARR Composition', issue: 'ARR includes projected perpetual revenue spread over 18 months', severity: 'CRITICAL', sourceDocuments: ['Financial_Statements_2024.pdf', 'Revenue_Recognition_Policy.pdf'], impact: 'Overstated recurring revenue metrics', analysis: 'The reported $12M ARR is composed of multiple revenue streams that do not align with generally accepted ARR definitions. Our analysis found that approximately 23% ($2.76M) of the reported ARR consists of projected perpetual license revenue spread over 18 months post-contract signing. Additionally, maintenance fees on legacy perpetual contracts comprise another 18% ($2.16M). Only 59% ($7.08M) represents true committed subscription revenue. This composition significantly overstates the company\'s recurring revenue quality and predictability, which is a key metric for SaaS valuations.' },
    { id: 'maint-fee', workstream: 'Financial & Risk', title: 'Anomaly #2: Inconsistent Maintenance Fee Structure', issue: 'Maintenance fees vary from 12% to 28% of contract value', severity: 'HIGH', sourceDocuments: ['Contract_Analysis_2023-2024.xlsx', 'Customer_Agreements_Sample.pdf'], impact: 'Revenue predictability and pricing strategy concerns', analysis: 'Our contract analysis revealed significant inconsistencies in maintenance fee structures across the customer base. Of the 247 perpetual license contracts reviewed, 34% charge maintenance fees below the industry minimum of 17%, with some as low as 12%. This suggests either aggressive pricing to win deals or lack of pricing discipline. The wide variance (12%-28%) indicates inconsistent value delivery or negotiation practices. Industry benchmarks typically see maintenance fees between 18-22% for mature software companies, making TechFlow\'s structure both below market and highly variable.' },
    { id: 'product-launch', workstream: 'Technology & Operations', title: 'Anomaly #3: Failed Recent Product Launches', issue: 'Zero sales recorded for 3 most recent product launches', severity: 'CRITICAL', sourceDocuments: ['Product_Launch_Reports_2024-2025.pdf', 'Sales_Pipeline_Analysis.xlsx'], impact: 'Innovation capacity and market fit concerns', analysis: "Three recent product launches have generated zero revenue to date: 'TechFlow Analytics Pro' (launched March 2024), 'TechFlow Mobile Suite' (launched September 2024), and 'TechFlow AI Assistant' (launched February 2025). Combined R&D investment for these products totaled $3.2M over 18 months. This pattern suggests potential issues with product-market fit, go-to-market execution, or competitive positioning. The lack of any sales traction, even pilot programs or trials, raises questions about the company's innovation pipeline and ability to expand beyond its core offerings. This could significantly impact future growth projections and the sustainability of R&D investments." }
];

const otherObservations_v2 = [
    { id: 'obs1', workstream: 'Business & Strategy', text: 'Management team is technically strong but lacks experience scaling a sales organization.' },
    { id: 'obs2', workstream: 'Technology & Operations', text: 'The core product has a loyal customer base but an aging user interface.' },
    { id: 'obs3', workstream: 'Commercial & Customer', text: 'Company has no formal channel partnership program, representing an untapped growth vector.' }
];

const techflow_minorObservations = [
    { id: 'obs1', category: 'Documentation', text: 'Inconsistent naming conventions found across multiple technical documents.', impact: 'Minor risk of confusion during technical hand-off.' },
    { id: 'obs2', category: 'Technical', text: 'Code repository shows multiple active coding standards (Python PEP8, Google Style Guide).', impact: 'Increases code complexity and onboarding time for new developers.' },
    { id: 'obs3', category: 'Commercial', text: 'Sample SOWs reviewed lack specific, measurable deliverables in 40% of cases.', impact: 'Risk of scope creep and customer disputes.' },
    { id: 'obs4', category: 'HR', text: 'High employee turnover (35% YoY) noted in the junior engineering department.', impact: 'Indicates potential management or compensation issues; loss of institutional knowledge.' },
    { id: 'obs5', category: 'Finance', text: 'Expense reporting process is entirely manual and requires physical signatures.', impact: 'Inefficient process, delays financial closing.' },
    { id: 'obs6', category: 'Legal', text: 'Several enterprise contracts are missing signatures from the customer side.', impact: 'Potential enforceability issues.' },
    { id: 'obs7', category: 'Security', text: 'Multi-factor authentication is not enforced on key internal systems.', impact: 'Increased risk of unauthorized access.' },
    { id: 'obs8', category: 'Sales', text: 'Salesforce data shows low adoption of contact logging by AEs.', impact: 'Incomplete customer interaction history hinders forecasting.' },
    { id: 'obs9', category: 'Marketing', text: 'Website has a low Lighthouse performance score (65/100).', impact: 'Poor user experience and negative impact on SEO.' },
    { id: 'obs10', category: 'Product', text: 'No formal process for collecting and prioritizing customer feature requests.', impact: 'Risk of building features that lack market demand.' },
    { id: 'obs11', category: 'BI', text: 'Key business dashboards are manually updated in spreadsheets.', impact: 'High risk of data errors and significant time sink for analysts.' },
    { id: 'obs12', category: 'Operations', text: 'Vendor contract review process is ad-hoc and lacks a central repository.', impact: 'Potential for auto-renewals of unused or unfavorable services.' }
];

const techflow_workstreamData = [
    { id: 'business', title: 'Business & Strategy', color: 'var(--accent-blue)', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-blue-600"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>`, cards: [{label: "Market Size (TAM)", value: "$5.2B"}, {label: "Market CAGR", value: "18%"}, {label: "Competitive Moat", value: "Medium"}], suggestedQuestions: ["Summarize the competitive landscape and TechFlow's position.", "What are the key market trends impacting the company?", "Analyze the credibility of the 5-year strategic plan."], suggestedActions: [{ text: "Draft a 'Go-to-Market' slide for the IC memo.", description: "Generate a pre-formatted slide summarizing the GTM strategy for your Investment Committee memo." }, { text: "Prioritize 'Platform Consolidation' risk in the 100-day plan.", description: "Add this key risk to the 100-day plan to ensure it is addressed post-close." }, { text: "Generate key questions for the CEO regarding the strategic plan.", description: "Create a list of targeted questions to challenge the assumptions in the management's plan." }] },
    { id: 'commercial', title: 'Commercial & Customer', color: 'var(--accent-teal)', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-teal-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`, cards: [{label: "LTV:CAC Ratio", value: "3.1x"}, {label: "Net Revenue Retention", value: "105%"}, {label: "Logo Churn", value: "18%"}], suggestedQuestions: ["Show the Quality of Revenue report.", "Analyze the efficiency of the sales and marketing funnel.", "Identify the top 10 customers by revenue and any concentration risks."], suggestedActions: [{ text: "Generate a pricing model with 'Good-Better-Best' tiers.", description: "Create a draft pricing model to improve monetization and expansion revenue." }, { text: "Draft an email to the Head of Sales about the MQL-to-SQL drop-off.", description: "Generate a pre-written email to kick off a conversation about funnel efficiency." }, { text: "Add 'Customer Concentration' as a key risk to the workspace.", description: "Flag this critical issue in your workspace to track it as part of the diligence process." }] },
    { id: 'tech', title: 'Technology & Operations', color: 'var(--purple)', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-indigo-600"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" x2="12" y1="2" y2="22"/></svg>`, cards: [{label: "Technical Debt Score", value: "High"}, {label: "Core App Uptime", value: "99.8%"}, {label: "Dev Velocity", value: "Low"}], suggestedQuestions: ["Summarize the key architectural risks and their potential cost to remediate.", "How does the R&D team's velocity compare to industry benchmarks?", "What is the plan for migrating off the legacy monolithic architecture?"], suggestedActions: [{ text: "Estimate the cost and timeline for a monolith-to-microservices migration.", description: "Generate a high-level estimate for the cost and timeline of this critical project." }, { text: "Generate a job description for a 'Lead DevOps Engineer'.", description: "Create a job description to hire the talent needed to improve developer velocity." }, { text: "Draft an IC memo slide on technical debt.", description: "Summarize the technical debt issue and mitigation plan for the Investment Committee." }] },
    { id: 'financial', title: 'Financial & Risk', color: 'var(--status-warning)', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-red-600"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`, cards: [{label: "Gross Margin", value: "72%"}, {label: "Monthly Burn Rate", value: "$450K"}, {label: "Cash Runway", value: "11 mos"}], suggestedQuestions: ["Provide an overview of the current registered anomalies.", "What are the key risks to achieving the 2025 forecast?", "Analyze the quality of earnings and identify any one-time adjustments."], suggestedActions: [{ text: "Draft an email to the CFO requesting clarification on revenue recognition policies.", description: "Generate a pre-written email to the CFO to get clarity on a key accounting policy." }, { text: "Request all contracts with non-standard terms be uploaded to the data room.", description: "Log a formal request to the deal team to gather critical legal documents." }, { text: "Build the 'Base Case' financial model.", description: "Create a more realistic financial model based on diligence findings, not just management's view." }] }
];

const cloudvantage_workstreamData = [
    { id: 'integration', title: 'NewCo Integration', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-purple-600"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`, cards: [{label: "100-Day Plan", value: "On Track"}, {label: "Synergy Target", value: "$2.1M"}, {label: "Team Morale", value: "Medium"}], suggestedQuestions: ["Generate a 100-day integration plan for the NewCo acquisition.", "Analyze the cross-sell opportunities between CloudVantage and NewCo products.", "Draft a communication plan to NewCo customers about the acquisition."], suggestedActions: [{ text: "Draft a communication plan to NewCo customers about the acquisition.", description: "Generate a customer-facing email to announce the acquisition and reassure them." }, { text: "Identify key integration risks.", description: "Analyze potential culture clashes, system incompatibilities, and leadership gaps." }, { text: "Create a synergy tracking dashboard.", description: "Build a simple dashboard to monitor the realization of cost and revenue synergies." }] },
    { id: 'sales', title: 'Sales & GTM', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-blue-600"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>`, cards: [{label: "Quota Attainment", value: "103%"}, {label: "Pipeline Coverage", value: "3.5x"}, {label: "NewCo Product Sales", value: "$250k"}], suggestedQuestions: ["Process the renewals for the NewCo acquisition customers.", "Analyze the current sales compensation plan for the Enterprise team.", "What are the biggest risks in the current sales pipeline?"], suggestedActions: [{ text: "Draft a revised sales comp plan.", description: "Create a new compensation plan that incentivizes cross-selling NewCo products." }, { text: "Generate talking points for the sales team about top pipeline risks.", description: "Equip the sales team with strategies to de-risk key deals in the pipeline." }, { text: "Analyze sales rep performance.", description: "Identify top performers and reps who may need additional coaching." }] },
    { id: 'product', title: 'Product & Engineering', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-indigo-600"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" x2="12" y1="2" y2="22"/></svg>`, cards: [{label: "Roadmap Progress", value: "75%"}, {label: "NPS", value: "52"}, {label: "Ticket Volume", value: "-15% WoW"}], suggestedQuestions: ["What are the key drivers behind our current NPS score?", "Analyze the recent trends in customer support ticket volume.", "What is the status of the NewCo product integration?"], suggestedActions: [{ text: "Draft a product roadmap update for the board.", description: "Create a summary slide of recent progress and upcoming feature releases." }, { text: "Analyze the root cause of recent support tickets.", description: "Identify common themes in customer issues to inform product improvements." }, { text: "Generate a list of questions for the Head of Engineering about the NewCo integration.", description: "Prepare for a technical review of the product integration status." }] },
    { id: 'finance', title: 'Financial Performance', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-green-600"><path d="M12 2.02c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4h-6"/><path d="M12 18V6"/></svg>`, cards: [{label: "ARR Growth (YoY)", value: "28%"}, {label: "EBITDA Margin", value: "31%"}, {label: "NRR", value: "128%"}], suggestedQuestions: ["Generate a board-level summary of Q2 financial performance.", "Analyze the key drivers of our Net Revenue Retention.", "Model the financial impact of a 5% price increase on the legacy NewCo customer base."], suggestedActions: [{ text: "Model the financial impact of a 5% price increase on the legacy NewCo customer base.", description: "Create a scenario model to understand the potential impact of a price change." }, { text: "Draft an email to the CFO about the EBITDA margin dip.", description: "Prepare a data-driven inquiry to understand the variance against the target." }, { text: "Generate a cohort analysis of NRR.", description: "Break down Net Revenue Retention by customer start date to identify trends." }] }
];

const techflow_ariaResponses = {
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
        renderFunc: (state) => {
            const criticalAnomalies = techflow_anomalies.filter(a => a.severity === 'CRITICAL');
            const otherAnomalies = techflow_anomalies.filter(a => a.severity !== 'CRITICAL');
            const isExpanded = state.techflowAria.minorObservationsExpanded;

            const renderAnomalyCard = (anomaly) => {
                const severityClass = anomaly.severity.toLowerCase();
                const isFlagged = state.diligenceWorkspace.keyRisks[anomaly.id];
                return `<div class="card-base p-4 space-y-3">
                    <div class="response-title-area">
                        <h3 class="font-bold text-lg">${anomaly.title}</h3>
                        <div class="flex items-center gap-2">
                            <button class="feedback-icon ${isFlagged ? 'filled' : ''}" data-action="flag-response" data-response-id="${anomaly.id}" title="Flag for Workspace">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon-unfilled" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464A.5.5 0 0 1 14.5 9v5.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .278-.415zM1.49 4.002H8.5a.5.5 0 0 1 0 1H1.49a.5.5 0 0 1 0-1z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon-filled" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464A.5.5 0 0 1 14.5 9v5.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .278-.415zM1.49 4.002H8.5a.5.5 0 0 1 0 1H1.49a.5.5 0 0 1 0-1z"/></svg>
                            </button>
                        </div>
                    </div>
                    <p class="text-sm text-secondary">${anomaly.issue}</p>
                    <div class="data-table-container"><table class="data-table"><thead><tr><th>Severity</th><th>Impact</th></tr></thead><tbody><tr><td><span class="status-badge ${severityClass}">${anomaly.severity}</span></td><td>${anomaly.impact}</td></tr></tbody></table></div>
                    <div class="analysis-box"><p class="response-text"><span class="font-bold">Analysis:</span> <span data-typing-text="${anomaly.analysis}"></span></p></div>
                </div>`;
            };

            return `<div class="aria-response-content" id="anomaly-discovery-content">
                <div class="build-item"><h3 class="response-title">Anomaly Discovery Report</h3><p class="response-subtitle">Source Documents: Multiple financial and operational files</p></div>
                <div class="build-item alert-callout error">
                    <h4 class="alert-callout-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>Critical Findings</h4>
                    <p class="response-text" data-typing-text="My analysis has surfaced **${criticalAnomalies.length} critical anomalies** that materially impact the investment thesis and valuation. These require immediate attention and should be discussed with the target's management."></p>
                </div>
                ${criticalAnomalies.map(a => `<div class="build-item">${renderAnomalyCard(a)}</div>`).join('')}
                <div class="build-item card-base">
                    <button class="minor-observations-header" data-action="toggle-observations">
                        <h4 class="response-section-title !mb-0">Other Observations (${techflow_minorObservations.length})</h4>
                        <svg class="chevron-icon ${isExpanded ? 'rotate-180' : ''}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                    <div class="minor-observations-content ${isExpanded ? 'expanded' : ''}">
                        <div class="minor-observations-grid">
                            ${techflow_minorObservations.map(a => `<div class="minor-observation-item"><span>${a.text}</span><span class="status-badge high">${a.category}</span></div>`).join('')}
                        </div>
                    </div>
                </div>
            </div>`;
        },
        followUpQuestions: ["Which anomaly has the biggest impact on valuation?", "Draft an email to the CFO about the ARR composition.", "What's the plan to fix the failed product launches?"]
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
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Competitive Landscape</h3><p class="response-subtitle">Source Documents: Market_Sizing_Model.xlsx, ...</p></div>
            <div class="build-item"><div class="response-section-title">Key Competitors by Market Share:</div><div class="bar-chart-container"><div class="bar-chart-item"><div class="bar-label">Legacy Inc.</div><div class="bar-wrapper"><div class="bar" style="width: 60%; background-color: var(--purple);">60%</div></div></div><div class="bar-chart-item"><div class="bar-label">InnovateCorp</div><div class="bar-wrapper"><div class="bar" style="width: 25%; background-color: var(--accent-teal);">25%</div></div></div><div class="bar-chart-item"><div class="bar-label">TechFlow</div><div class="bar-wrapper"><div class="bar" style="width: 10%; background-color: var(--accent-blue);">10%</div></div></div><div class="bar-chart-item"><div class="bar-label">Others</div><div class="bar-wrapper"><div class="bar" style="width: 5%; background-color: var(--text-muted);">5%</div></div></div></div></div>
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
    }
};

const cloudvantage_ariaResponses = {
    "Generate a 100-day integration plan for the NewCo acquisition.": {
        id: '100-day-plan',
        title: "100-Day Integration Plan: NewCo Acquisition",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">100-Day Integration Plan: NewCo</h3><p class="response-subtitle">Generated by Aria based on the PE Integration Playbook.</p></div>
            <div class="build-item"><div class="timeline-container">
                <div class="timeline-phase"><div class="timeline-phase-title">Phase 1: Day 0-30 (Stabilize & Communicate)</div><ul class="timeline-items" data-animate-list><li>Launch internal and external communication plan.</li><li>Confirm key NewCo leadership and employee retention packages.</li><li>Establish joint steering committee and define integration workstreams.</li><li>Secure all IT systems and begin data backup and migration planning.</li></ul></div>
                <div class="timeline-phase"><div class="timeline-phase-title">Phase 2: Day 31-60 (Assess & Plan)</div><ul class="timeline-items" data-animate-list><li>Complete detailed assessment of NewCo's technology stack and product roadmap.</li><li>Develop joint GTM strategy, including sales training on cross-selling.</li><li>Finalize synergy targets and create detailed tracking dashboards.</li><li>Conduct cultural assessment and plan team-building activities.</li></ul></div>
                <div class="timeline-phase"><div class="timeline-phase-title">Phase 3: Day 61-100 (Execute & Integrate)</div><ul class="timeline-items" data-animate-list><li>Begin execution of priority technology integration projects.</li><li>Launch first joint marketing campaign and enable sales team with new collateral.</li><li>Consolidate financial reporting into CloudVantage's ERP system.</li><li>Report initial synergy wins and 100-day progress to the board.</li></ul></div>
            </div></div>
            <div class="build-item judgement-box success"><p class="judgement-title">Judgement (High Confidence - 90%):</p><p class="judgement-text" data-typing-text="This plan follows industry best practices for a smooth integration, focusing on early communication, strategic alignment, and disciplined execution to maximize synergy capture and minimize disruption."></p></div>
        </div>`,
        followUpQuestions: ["Identify key integration risks.", "Create a synergy tracking dashboard.", "Draft a communication plan to NewCo customers about the acquisition."]
    },
    "Analyze the cross-sell opportunities between CloudVantage and NewCo products.": {
        id: 'cross-sell-opps',
        title: "Cross-Sell Opportunity Analysis",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Cross-Sell Opportunity Analysis</h3><p class="response-subtitle">Source Documents: CloudVantage_Customer_List.csv, NewCo_Customer_List.csv</p></div>
            <div class="build-item"><p class="response-section-title">Analysis:</p><p class="response-text" data-typing-text="There is a significant cross-sell opportunity. **72%** of NewCo's enterprise customers do not use an existing CloudVantage product, representing a total whitespace ARR of **$18.5M**. The most immediate opportunity is to sell CloudVantage's 'Analytics Suite' into the NewCo customer base, as it directly complements NewCo's core data management offering."></p></div>
            <div class="build-item judgement-box success"><p class="judgement-title">Actionable Insight:</p><p class="judgement-text" data-typing-text="Launch a targeted sales campaign in the next 30 days focused on the top 20 NewCo accounts. A pilot program offering a 15% discount on the 'Analytics Suite' could accelerate adoption."></p></div>
        </div>`,
        followUpQuestions: ["Draft a revised sales comp plan.", "Generate talking points for the sales team about top pipeline risks."]
    },
    "Process the renewals for the NewCo acquisition customers.": {
        id: 'newco-renewals',
        title: "NewCo Customer Renewal Process",
        renderFunc: () => `<div class="aria-response-content build-item card-base">
            <h4 class="response-title">Renewal Process Initiated</h4>
            <p class="response-text" data-typing-text="I have processed the renewal data for the 52 customers acquired from NewCo. 48 have been successfully renewed automatically. 4 require manual intervention due to non-standard terms. I have flagged these in the workspace and assigned them to the legal team for review."></p>
        </div>`,
        followUpQuestions: ["Show me the 4 customers that need manual review.", "What is the total ARR of the renewed customers?"],
        suggestedActions: []
    },
    "Analyze the current sales compensation plan for the Enterprise team.": {
        id: 'sales-comp-analysis',
        title: "Sales Comp Plan Analysis",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Sales Compensation Plan Analysis</h3><p class="response-subtitle">Source Documents: Sales_Comp_Plan_FY25.pdf, ...</p></div>
            <div class="build-item"><p class="response-section-title">Key Findings:</p><ul class="list-disc pl-5 text-sm" data-animate-list><li>The current plan is 100% focused on New Business ARR, with no incentive for renewals or expansion.</li><li>Accelerators for over-performance are below market benchmarks, potentially capping motivation.</li><li>The plan does not include a component for selling newly acquired 'NewCo' products.</li></ul></div>
            <div class="build-item judgement-box warning"><p class="judgement-title">Judgement (Medium Confidence - 85%):</p><p class="judgement-text" data-typing-text="The current compensation plan is misaligned with the strategic goal of increasing Net Revenue Retention (NRR). It actively discourages the sales team from focusing on the existing customer base and cross-selling opportunities."></p></div>
        </div>`,
        followUpQuestions: ["Draft a revised sales comp plan.", "Model the financial impact of the new plan.", "What are the benchmarks for sales accelerators?"]
    },
    "What are the key drivers behind our current NPS score?": {
        id: 'nps-drivers',
        title: "NPS Driver Analysis",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">NPS Driver Analysis (Score: 52)</h3><p class="response-subtitle">Source Documents: NPS_Survey_Results_Q2.csv, ...</p></div>
            <div class="build-item grid md:grid-cols-2 gap-4">
                <div><h4 class="response-section-title text-success">Top Promoters (Score 9-10)</h4><ul class="list-disc pl-5 text-sm" data-animate-list><li>"Excellent customer support"</li><li>"Platform is reliable and always available"</li><li>"Deep domain expertise of the team"</li></ul></div>
                <div><h4 class="response-section-title text-error">Top Detractors (Score 0-6)</h4><ul class="list-disc pl-5 text-sm" data-animate-list><li>"Lack of key features compared to competitors"</li><li>"The user interface feels outdated"</li><li>"Integration with our other tools is difficult"</li></ul></div>
            </div>
            <div class="build-item judgement-box success"><p class="judgement-title">Judgement (High Confidence - 92%):</p><p class="judgement-text" data-typing-text="The high NPS score is primarily driven by strong customer service and reliability, not product superiority. While this is a strength, it's a fragile position. The feedback from detractors clearly indicates a growing product gap that needs to be addressed to maintain customer loyalty long-term."></p></div>
        </div>`,
        followUpQuestions: ["Which features are detractors asking for most?", "What is the status of the UI refresh project?", "How can we improve the integration experience?"]
    },
    "Generate a board-level summary of Q2 financial performance.": {
        id: 'q2-summary',
        title: "Q2 Financial Performance Summary",
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Q2 2025 Financial Summary</h3><p class="response-subtitle">Source Documents: Q2_Financial_Package.xlsx, ...</p></div>
            <div class="build-item kpi-grid">${[
                { label: 'ARR', value: '$78M', change: '+4% QoQ', changeColor: 'var(--status-success)' },
                { label: 'NRR', value: '128%', change: '+3% vs Target', changeColor: 'var(--status-success)' },
                { label: 'EBITDA Margin', value: '31%', change: '-1% vs Target', changeColor: 'var(--status-error)' },
                { label: 'Rule of 40', value: '58%', change: 'Healthy', changeColor: 'var(--text-muted)' }
            ].map(kpi => `<div class="kpi-card"><p class="kpi-label">${kpi.label}</p><p class="kpi-value">${kpi.value}</p><p class="kpi-detail" style="color: ${kpi.changeColor};">${kpi.change}</p></div>`).join('')}</div>
            <div class="build-item"><p class="response-section-title">Executive Summary:</p><p class="response-text" data-typing-text="CloudVantage delivered a strong Q2, exceeding ARR targets driven by robust Net Revenue Retention of 128%. This indicates strong product stickiness and successful expansion within the existing customer base. EBITDA margin was slightly below target due to planned investments in the 'NewCo' integration and R&D for the upcoming AI feature. Overall, the business remains healthy and is tracking well against the annual plan."></p></div>
        </div>`,
        followUpQuestions: ["Analyze the key drivers of our Net Revenue Retention.", "What caused the dip in EBITDA margin?", "What is the forecast for Q3?"]
    },
    "Draft a revised sales comp plan.": {
        id: 'draft-sales-comp',
        title: "Draft Sales Comp Plan",
        renderFunc: () => `<div class="aria-response-content build-item card-base">
            <h4 class="response-title">Draft: Revised Sales Comp Plan</h4>
            <ul class="list-disc pl-5 space-y-2 text-sm" data-animate-list>
                <li><strong>Structure:</strong> 70% Base / 30% Variable</li>
                <li><strong>Commission:</strong> 60% New Business ARR, 30% Expansion ARR (Upsell/Cross-sell), 10% Renewal Rate Modifier.</li>
                <li><strong>NewCo Kicker:</strong> 1.25x commission multiplier on all NewCo products sold for the first 12 months.</li>
                <li><strong>Accelerators:</strong> Tiered accelerators starting at 101% of quota, with a 2x multiplier for deals >200% of quota.</li>
            </ul>
        </div>`,
        followUpQuestions: []
    },
    "Model the financial impact of a 5% price increase on the legacy NewCo customer base.": {
        id: 'model-price-increase',
        title: "Price Increase Impact Model",
        renderFunc: () => `<div class="aria-response-content build-item card-base">
            <h4 class="response-title">Scenario: 5% Price Increase on NewCo Base</h4>
            <div class="data-table-container"><table class="data-table">
                <thead><tr><th>Metric</th><th>Current</th><th>Projected</th><th>Impact</th></tr></thead>
                <tbody>
                    <tr><td>NewCo Customer ARR</td><td>$15.2M</td><td>$15.5M</td><td class="text-success">+$0.3M</td></tr>
                    <tr><td>Assumed Churn Increase</td><td>0%</td><td>2%</td><td class="text-error">-$0.3M</td></tr>
                    <tr><td>Net ARR Impact</td><td></td><td class="font-bold">$0</td><td>Neutral</td></tr>
                </tbody>
            </table></div>
            <p class="response-subtitle mt-2" data-typing-text="**Note:** The model assumes a 2% increase in churn directly attributable to the price increase, resulting in a net-neutral ARR impact. This suggests the price increase is too low to offset the potential churn risk."></p>
        </div>`,
        followUpQuestions: ["What if we model a 10% increase?", "Can we segment customers to apply the increase selectively?"]
    },
    "Draft a communication plan to NewCo customers about the acquisition.": {
        id: 'draft-comm-plan',
        title: "Draft Customer Communication",
        renderFunc: () => `<div class="aria-response-content build-item card-base">
            <p><span class="font-semibold">To:</span> Valued NewCo Customer</p>
            <p><span class="font-semibold">Subject:</span> Exciting News: NewCo is Joining CloudVantage!</p>
            <hr class="my-2 border-border-color">
            <div class="response-text" data-typing-text="Dear [Customer Name],\n\nWe are thrilled to announce that NewCo has been acquired by CloudVantage, a leader in the enterprise software space. This partnership will bring together the best of both companies, accelerating innovation and delivering even more value to you.\n\nThere will be no immediate changes to your service, and your current points of contact will remain the same. We are committed to a smooth transition and will be sharing more details about the exciting future ahead in the coming weeks.\n\nSincerely,\nThe CloudVantage & NewCo Teams"></div>
        </div>`,
        followUpQuestions: []
    }
};

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
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">CloudVantage: NewCo Integration Status</h3></div>
            <div class="build-item"><p class="response-text" data-typing-text="The NewCo integration is progressing well and is currently rated **'On Track'**. We are 60 days into the 100-day plan. Financial system consolidation is complete, and the sales team has been enabled on cross-selling NewCo products, which is already contributing to the strong NRR performance."></p></div>
            <div class="build-item kpi-grid mt-4">
                <div class="kpi-card"><p class="kpi-label">Integration Progress</p><p class="kpi-value">60%</p><p class="kpi-detail">Day 60 of 100</p></div>
                <div class="kpi-card"><p class="kpi-label">Synergy Realization</p><p class="kpi-value">$1.2M</p><p class="kpi-detail">vs. $2.1M Target</p></div>
                <div class="kpi-card"><p class="kpi-label">Team Morale (eNPS)</p><p class="kpi-value">65</p><p class="kpi-detail">Stable</p></div>
                <div class="kpi-card"><p class="kpi-label">Key Risks</p><p class="kpi-value">1</p><p class="kpi-detail text-warning">Moderate</p></div>
            </div>
             <div class="build-item judgement-box warning mt-4"><p class="judgement-title">Key Risk:</p><p class="judgement-text" data-typing-text="The primary risk is the timeline for integrating NewCo's legacy data models into the main CloudVantage platform. This is the root cause of the delay in the **AI-Powered Feature Launch** and requires close monitoring."></p></div>
        </div>`,
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
        renderFunc: () => `<div class="aria-response-content build-item card-base">
            <h4 class="response-title">Activity Detail: Valuation Model Complete</h4>
            <p class="response-text" data-typing-text="The base case valuation model for TechFlow Solutions was completed by the deal team 2 hours ago. The preliminary valuation is pegged at **$150M**, assuming the successful mitigation of the flagged financial anomalies. The model has been uploaded to the data room."></p>
        </div>`,
        followUpQuestions: ["Show me the key assumptions in the valuation model.", "Run a scenario with 25% lower synergy realization."]
    },
    "Tell me more about the 'Customer Churn Anomaly Detected' activity.": {
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Deep Dive: Customer Churn Anomaly</h3></div>
            <div class="build-item"><p class="response-text" data-typing-text="On August 14th, I detected a **5% increase in logo churn** that deviates from the 12-month historical average. Analysis of the 8 recently churned accounts indicates a common theme: they were all heavy users of the 'Advanced Reporting Module,' a feature set that was deprecated in the last product release. This suggests the churn was driven by a product decision."></p></div>
            <div class="build-item judgement-box error mt-4"><p class="judgement-title">Actionable Insight:</p><p class="judgement-text" data-typing-text="This churn is likely preventable. I recommend immediately generating a list of remaining customers who are also heavy users of this deprecated module. A proactive outreach campaign from Customer Success could mitigate further churn."></p></div>
        </div>`,
        followUpQuestions: ["Generate a list of at-risk customers.", "Draft an email to the Head of Product about this finding."]
    },
    "Tell me more about the 'Synergy Analysis Updated' activity.": {
        renderFunc: () => `<div class="aria-response-content build-item card-base">
            <h4 class="response-title">Activity Detail: Synergy Analysis Updated</h4>
            <p class="response-text" data-typing-text="The synergy analysis for the TechFlow acquisition was updated 6 hours ago. The total identifiable cost synergies have been revised down from $2.5M to **$2.1M** due to higher-than-expected costs for retaining key technical personnel."></p>
        </div>`,
        followUpQuestions: ["What is the impact of this on the valuation model?", "Which cost synergy category was revised?"]
    }
};

const diligenceHubAriaResponses = {
    "Can we start the analysis 2 days earlier?": {
        simulation: { 
            type: 'GANTT_REPLAN', 
            params: { startDayOffset: -2, phaseToShift: 'Phase 3: Analysis' } 
        },
        renderFunc: () => `<div class="aria-response-content">
            <div class="build-item"><h3 class="response-title">Scenario: Accelerate Analysis Phase by 2 Days</h3></div>
            <div class="build-item" id="gantt-replan-target-${Date.now()}">
                 <div class="flex items-center justify-center h-64"><div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div></div>
            </div>
            <div class="build-item"><p class="response-text" data-typing-text="I have simulated a 2-day acceleration of the Analysis phase, which you can see reflected in the updated plan above. This is possible, but it creates significant resource contention:"></p></div>
            <div class="build-item list-container mt-4">
                <div class="list-item"><span class="list-number text-success">1</span><div><h4 class="list-title">Positive Impact:</h4><p class="list-text" data-typing-text="The final IC Memo (DD-65) would be ready on Day 10 instead of Day 12, providing the deal team with an earlier read on the key findings."></p></div></div>
                <div class="list-item"><span class="list-number text-error">2</span><div><h4 class="list-title">Negative Impact (Resource Overload):</h4><p class="list-text" data-typing-text="This would require **Alex (Analyst)** and **Sarah (Associate)** to work an estimated 65 hours each during that week, which is a high risk for burnout and errors. The external partner **EY** would also need to approve an expedited timeline."></p></div></div>
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
    }
};

const portco_ariaResponses = {
    "What are the dependencies for the 'Audited Financials' task?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Dependencies for DD-48: Audited Financials</h4><p class="response-text" data-typing-text="This task has one primary predecessor:"></p><ul class="list-disc pl-6 mt-2 text-secondary"><li><strong>DD-40: Financial Statement Analysis:</strong> This task must be completed first to develop a baseline understanding of the company's financials before diving into the audited details. The current status of DD-40 is <strong>Completed</strong>.</li></ul></div>`,
        followUpQuestions: ["Who is assigned to the 'Audited Financials' task?"]
    },
    "Who is assigned to the 'Audited Financials' task?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Team for DD-48: Audited Financials</h4><p class="response-text" data-typing-text="The following team members are assigned to this task:"></p><div class="data-table-container mt-2"><table class="data-table"><thead><tr><th>Name</th><th>Role</th><th>Responsibility</th></tr></thead><tbody><tr><td>Brenda (VP)</td><td>Internal</td><td>Overall review and sign-off.</td></tr><tr><td>Sarah (Associate)</td><td>Internal</td><td>Detailed analysis and summary report.</td></tr><tr><td>PwC</td><td>Partner</td><td>Provide audited statements and answer clarifying questions.</td></tr></tbody></table></div></div>`,
        followUpQuestions: ["What is the current status of this task?"]
    },
    "What are the dependencies for the 'Architecture Review' task?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Dependencies for DD-13: Architecture Review</h4><p class="response-text" data-typing-text="This task is dependent on the completion of the following predecessor:"></p><ul class="list-disc pl-6 mt-2 text-secondary"><li><strong>DD-12: Development Process:</strong> A full understanding of the SDLC and release cadence is required before the architecture can be properly assessed for scalability and efficiency. The current status of DD-12 is <strong>In Progress</strong>.</li></ul></div>`,
        followUpQuestions: ["Who is assigned to the 'Architecture Review' task?", "What is the status of the DD-12 deliverable?"]
    },
    "Who is assigned to the 'Architecture Review' task?": {
        renderFunc: () => `<div class="portfolio-response-card"><h4 class="response-title">Team for DD-13: Architecture Review</h4><p class="response-text" data-typing-text="This is a specialized task led by our internal and external technology experts:"></p><div class="data-table-container mt-2"><table class="data-table"><thead><tr><th>Name</th><th>Role</th><th>Responsibility</th></tr></thead><tbody><tr><td>Peter Wood</td><td>Sr. Director, Digital Value Creation</td><td>Lead reviewer, focus on scalability and PE value levers.</td></tr><tr><td>AWS</td><td>Partner</td><td>Provide Well-Architected Framework review and cloud-readiness assessment.</td></tr><tr><td>Alex Johnson (CTO)</td><td>Target</td><td>Provide documentation and answer technical questions.</td></tr></tbody></table></div></div>`,
        followUpQuestions: ["What are the dependencies for the 'Architecture Review' task?", "Draft an email to the CTO about the DD-12 deliverable."]
    }
};

const portfolio_ariaResponses = {
    "Show me the priority alerts.": {
        renderFunc: () => `
            <h2 class="response-title">Top 3 Priority Alerts</h2>
            <div class="list-container">
                <div class="list-item">
                    <span class="list-number text-error">1</span>
                    <div>
                        <h4 class="list-title">[TechFlow] Technical Diligence Blocked</h4>
                        <p class="list-text">The 'Code Scan' (DD-16) task is late and blocking the Technology workstream. We are waiting for the target's CTO to provide GitHub credentials.</p>
                    </div>
                </div>
                <div class="list-item">
                    <span class="list-number text-error">2</span>
                    <div>
                        <h4 class="list-title">[TechFlow] Critical Anomalies Discovered</h4>
                        <p class="list-text">ARIA has flagged 2 critical anomalies: Non-Standard ARR Composition and Failed Recent Product Launches. These could materially impact valuation.</p>
                    </div>
                </div>
                <div class="list-item">
                    <span class="list-number text-warning">3</span>
                    <div>
                        <h4 class="list-title">[CloudVantage] AI Feature Launch At Risk</h4>
                        <p class="list-text">The 'AI-Powered Feature' development is behind schedule due to technical complexities. This puts the critical Q4 launch at risk.</p>
                    </div>
                </div>
            </div>`,
        recommendedActions: [
            { text: "Draft escalation email to TechFlow CTO", description: "Generate an email to the CTO regarding the urgent need for GitHub credentials.", prompt: "Action: Draft escalation to TechFlow CTO" },
            { text: "Generate risk mitigation plan for CloudVantage", description: "Use ARIA to create a plan to get the delayed AI feature back on track.", prompt: "Action: Generate CloudVantage risk plan" },
            { text: "View full anomaly report for TechFlow", description: "Navigate to the ARIA workspace to see the detailed anomaly findings.", prompt: "Action: View TechFlow Anomaly Report" }
        ],
        followUpQuestions: [ "What is the financial impact of the TechFlow anomalies?", "Who is the lead engineer on the CloudVantage AI feature?", "What is the new critical path for the TechFlow diligence?" ]
    },
    "Drill down on the TechFlow diligence block.": {
        renderFunc: () => `
            <h2 class="response-title">Alert Deep Dive: TechFlow Diligence Block</h2>
            <div class="judgement-box error mt-4">
                <p class="judgement-title">Situation:</p>
                <p class="judgement-text">The 'Code Scan' (DD-16) task is now 3 days late. This is a critical dependency for the 'Documentation' (DD-17) and 'QA Testing Review' (DD-18) tasks. The entire Technology workstream is blocked until we receive admin-level access to the target's private GitHub repository from their CTO.</p>
            </div>
            <div class="chart-narrative">
                <p>A 3-day delay on this task consumes all remaining slack in the Technology workstream, putting the final 'Comprehensive DD Report' (DD-68) delivery date at risk. Any further delays will push out the final deadline.</p>
            </div>`,
        recommendedActions: [
            { text: "Draft escalation email to TechFlow CTO", description: "Generate a polite but firm email regarding the urgent need for GitHub credentials.", prompt: "Action: Draft escalation to TechFlow CTO" },
            { text: "Assess critical path impact of a 5-day delay", description: "Model the cascading effects if the delay extends to a full week.", prompt: "Assess the critical path impact of a 5-day delay on task DD-16." }
        ],
        followUpQuestions: ["What is the new critical path for the TechFlow diligence?", "Re-plan the project with a compressed QA cycle."]
    },
    "Analyze the critical anomalies at TechFlow.": {
        renderFunc: () => `
            <h2 class="response-title">Alert Deep Dive: TechFlow Critical Anomalies</h2>
            <div class="list-container">
                <div class="list-item">
                    <span class="list-number text-error">1</span>
                    <div>
                        <h4 class="list-title">Non-Standard ARR Composition</h4>
                        <p class="list-text">Analysis of the financials reveals that only 59% ($7.08M) of the reported $12M ARR is true, recurring subscription revenue. The remainder is comprised of non-standard perpetual license amortization and legacy maintenance fees, which will require a significant valuation adjustment.</p>
                    </div>
                </div>
                <div class="list-item">
                    <span class="list-number text-error">2</span>
                    <div>
                        <h4 class="list-title">Failed Recent Product Launches</h4>
                        <p class="list-text">The last three major product launches have generated zero revenue, despite a combined R&D investment of $3.2M. This indicates critical issues with product-market fit and go-to-market execution, questioning future growth projections.</p>
                    </div>
                </div>
            </div>`,
        recommendedActions: [
            { text: "Model the financial impact of the ARR re-statement", description: "Simulate the valuation impact of adjusting ARR from $12M to $7.08M.", prompt: "Model the financial impact of 'Non-Standard ARR Composition'" },
            { text: "Draft an IC memo slide on these risks", description: "Summarize these two critical risks for the next Investment Committee update.", prompt: "Draft an IC memo slide for this section." }
        ],
        followUpQuestions: ["What is the adjusted 'true' ARR for TechFlow?", "What's the plan to fix the failed product launches?"]
    },
    "Assess the CloudVantage AI feature delay.": {
        renderFunc: () => `
            <h2 class="response-title">Alert Deep Dive: CloudVantage AI Feature Delay</h2>
            <div class="judgement-box warning mt-4">
                <p class="judgement-title">Situation:</p>
                <p class="judgement-text">The 'AI-Powered Feature' is currently 'At Risk' and behind schedule. The delay is due to unforeseen technical complexities in integrating with legacy data models from the recent NewCo acquisition. This jeopardizes the planned Q4 launch, which is a key driver of the FY25 growth plan.</p>
            </div>`,
        recommendedActions: [
            { text: "Generate risk mitigation plan for AI feature", description: "Use ARIA to create a plan with a de-scoped MVP and dedicated resources to get the project back on track.", prompt: "Generate a risk mitigation plan for the AI feature delay." },
            { text: "Estimate the budget impact of the delay", description: "Analyze the financial implications of the delay and the proposed mitigation plan.", prompt: "What is the budget impact of the AI feature delay?" }
        ],
        followUpQuestions: ["Who is the lead engineer on the AI feature?", "What is the new projected launch date?"]
    },
    "How did the portfolio perform over the past 12 months?": {
        renderFunc: () => `<h2 class="response-title">Portfolio Performance: Last 12 Months</h2><div class="chart-wrapper"><canvas id="portfolio-performance-chart"></canvas></div><div class="chart-narrative"><p>Overall performance is strong, with a notable <strong>EBITDA dip in November</strong> from one-time integration costs and a <strong>sharp ARR spike in May</strong> driven by CloudVantage landing two major enterprise deals.</p></div>`,
        recommendedActions: [
            { text: "Add 'CloudVantage Outperformance' to Q3 Board Deck", description: "Generate a pre-formatted slide for your next board meeting.", prompt: "Action: Add CloudVantage to Board Deck" },
            { text: "Schedule review of DataFlow integration costs", description: "Draft a meeting invite with the DataFlow CFO to review the one-time costs.", prompt: "Action: Schedule DataFlow cost review" },
            { text: "Flag CloudVantage for early exit planning", description: "Add a task to the VCP to begin exploring exit opportunities ahead of schedule.", prompt: "Action: Flag CloudVantage for exit planning" }
        ],
        followUpQuestions: [ "Which companies contributed most to the growth?", "Show me the portfolio's 'Rule of 40' score.", "How does our portfolio's NRR compare to industry benchmarks?" ]
    },
    "Forecast portfolio ARR for the next 6 months.": {
        renderFunc: () => `<h2 class="response-title">6-Month ARR Forecast with Sensitivity Analysis</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="forecast-chart"></canvas></div><div class="chart-narrative"><p>The forecast projects steady growth, with a <strong>90% confidence</strong> that ARR will land between <strong>$285M (bear case)</strong> and <strong>$305M (bull case)</strong> by January 2026. The widening sensitivity band reflects increased uncertainty in Q4.</p></div>`,
        recommendedActions: [
            { text: "Update master financial model with this forecast", description: "Export and integrate these projections into the master Excel model.", prompt: "Action: Update master financial model" },
            { text: "Generate talking points for the next LP update", description: "Create a summary of this forecast for Limited Partner communications.", prompt: "Action: Generate LP talking points" },
            { text: "Identify key risks to the 'Bear Case'", description: "Analyze the top 3 factors that could lead to the lower-bound forecast.", prompt: "Action: Identify risks to Bear Case" }
        ],
        followUpQuestions: [ "What is the required hiring plan to support this forecast?", "Model the portfolio's cash runway based on this forecast.", "Which value creation lever has the biggest impact on this forecast?" ]
    },
    "Model the next 12 months assuming we acquire TechFlow.": {
        renderFunc: () => `<h2 class="response-title">24-Month Scenario: TechFlow Solutions Acquisition</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="scenario-chart"></canvas></div><div class="judgement-box warning mt-6"><p class="judgement-title">Judgement (Medium Confidence):</p><p class="judgement-text">The acquisition is accretive to ARR and accelerates growth, but initially dilutes portfolio EBITDA margin. The model assumes successful pricing initiatives and synergy realization, causing the pro-forma growth lines to diverge positively from the base case over time.</p></div>`,
        recommendedActions: [
            { text: "Add 'TechFlow Synergy Plan' to the 100-day plan workspace", description: "Create a new workstream in the Workspace to track synergy realization.", prompt: "Action: Add Synergy Plan to Workspace" },
            { text: "Draft email to legal to begin confirmatory diligence", description: "Generate a pre-written email to your legal counsel to kick off the final diligence phase.", prompt: "Action: Draft email to legal" },
            { text: "Run a scenario with 25% lower synergy realization", description: "Model a downside case to understand the impact if synergies are not fully met.", prompt: "Action: Model lower synergy case" }
        ],
        followUpQuestions: [ "What are the top 3 integration risks for the TechFlow acquisition?", "Detail the $4.5M synergy plan.", "Who are the key employees to retain at TechFlow?" ]
    },
    // --- FUP & ACTION RESPONSES ---
    "Action: Add CloudVantage to Board Deck": {
        renderFunc: () => `<h2 class="response-title">Generated Board Deck Slide</h2><div class="board-slide"><div class="slide-title">Q3 Update: CloudVantage Outperformance</div><ul><li>ARR Growth hit <strong>128% NRR</strong>, exceeding synergy targets by 15%.</li><li>Landed two strategic enterprise logos: <strong>Global Health Inc. & Apex Logistics</strong>.</li><li>Successfully launched new 'Analytics Suite' which is driving expansion revenue.</li></ul></div>`,
        recommendedActions: [], followUpQuestions: ["Export this slide to PowerPoint.", "Add a chart showing NRR trend.", "Who is the deal lead for Apex Logistics?"]
    },
    "Action: Schedule DataFlow cost review": {
        renderFunc: () => `<h2 class="response-title">Generated Email Draft</h2><div class="email-draft"><p><strong>To:</strong> cfo@dataflow.com</p><p><strong>Subject:</strong> Quick Sync: Q4 Integration Costs</p><hr/><p>Hi John,</p><p>Hope you're well. As we prepare for the Q1 board meeting, I wanted to schedule a brief 30-minute review of the one-time integration costs incurred in November. Our goal is to ensure we've accurately categorized them to provide a clear picture of run-rate EBITDA.</p><p>Please let me know what time works best for you next week.</p><p>Best,</p></div>`,
        recommendedActions: [], followUpQuestions: ["Send the email.", "Add this to my calendar for next week.", "What were the original synergy estimates?"]
    },
    "Which companies contributed most to the growth?": {
        renderFunc: () => `<h2 class="response-title">LTM ARR Growth Contribution</h2><div class="chart-wrapper" style="height: 250px;"><canvas id="contribution-chart"></canvas></div>`,
        recommendedActions: [], followUpQuestions: ["How does CloudVantage's growth compare to its peers?", "What is Innovate Inc.'s value creation plan?", "Why is ScaleOps's growth lagging?"]
    },
    "Show me the portfolio's 'Rule of 40' score.": {
        renderFunc: () => `<h2 class="response-title">Portfolio 'Rule of 40' Analysis</h2><div class="kpi-grid"><div class="kpi-card"><p class="kpi-label">LTM Revenue Growth</p><p class="kpi-value">31%</p></div><div class="kpi-card"><p class="kpi-label">LTM EBITDA Margin</p><p class="kpi-value">25%</p></div><div class="kpi-card" style="border-color: var(--status-success);"><p class="kpi-label">Rule of 40 Score</p><p class="kpi-value text-success">56%</p></div></div><div class="judgement-box success mt-6"><p class="judgement-title">Judgement:</p><p class="judgement-text">The portfolio is healthy, exceeding the 40% benchmark. This indicates an efficient balance of growth and profitability.</p></div>`,
        recommendedActions: [], followUpQuestions: ["Which companies are dragging down the average?", "Model the impact of a 5% margin improvement.", "How has this score trended over time?"]
    },
    "How does our portfolio's NRR compare to industry benchmarks?": {
        renderFunc: () => `<h2 class="response-title">Net Revenue Retention vs. SaaS Benchmark</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="nrr-chart"></canvas></div>`,
        recommendedActions: [], followUpQuestions: ["What is CloudVantage's gross retention?", "What is the plan to improve TechFlow's NRR?", "Which product has the highest upsell rate?"]
    },
    "What are the top 3 integration risks for the TechFlow acquisition?": {
        renderFunc: () => `<h2 class="response-title">Top 3 Integration Risks: TechFlow</h2><div class="list-container"><div class="list-item"><span class="list-number text-error">1</span><div><h4 class="list-title">Technical Debt</h4><p class="list-text">The legacy monolith will slow down product integration and requires a $4.5M remediation budget, impacting short-term EBITDA.</p></div></div><div class="list-item"><span class="list-number text-warning">2</span><div><h4 class="list-title">Customer Concentration</h4><p class="list-text">Losing Global FinCorp (28% of ARR) post-acquisition would severely impact the deal thesis. A renewal must be secured.</p></div></div><div class="list-item"><span class="list-number text-warning">3</span><div><h4 class="list-title">Sales Team Inexperience</h4><p class="list-text">The current sales team has no experience with a structured, PE-backed growth motion. Significant training will be required.</p></div></div></div>`,
        recommendedActions: [], followUpQuestions: ["Draft a 100-day plan for the technical debt.", "What is the renewal status of Global FinCorp?", "Generate a sales team onboarding plan."]
    },
    "Detail the $4.5M synergy plan.": {
        renderFunc: () => `<h2 class="response-title">TechFlow Synergy Plan Breakdown</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="synergy-chart"></canvas></div>`,
        recommendedActions: [], followUpQuestions: ["What are the biggest risks to this synergy plan?", "Who is responsible for tracking these synergies?", "How does this compare to similar deals?"]
    },
    "Who are the key employees to retain at TechFlow?": {
        renderFunc: () => `<h2 class="response-title">Key Employee Retention Targets: TechFlow</h2><div class="people-grid"><div class="person-card"><h4>Sarah Jenkins</h4><p>VP, Engineering</p><span>Deep institutional knowledge of the legacy platform. Critical for migration.</span></div><div class="person-card"><h4>Michael Chen</h4><p>Lead Sales Engineer</p><span>Trusted by top customers, including Global FinCorp. Highest technical win rate.</span></div><div class="person-card"><h4>Emily Rodriguez</h4><p>Product Manager</p><span>Authored the original product vision and has the strongest customer relationships.</span></div></div>`,
        recommendedActions: [], followUpQuestions: ["Draft retention packages for these employees.", "What is their current compensation?", "Identify potential backfill candidates."]
    },
    // CHAIN 2: FORECAST
    "Action: Update master financial model": {
        renderFunc: () => `<h2 class="response-title">Action Confirmation</h2><div class="board-slide"><strong>Success:</strong> The 6-month ARR forecast has been exported and queued for integration into the master financial model. The model owner has been notified to validate the update.</div>`,
        recommendedActions: [], followUpQuestions: ["Export this forecast data as a CSV.", "Who has access to the master model?"]
    },
    "Action: Generate LP talking points": {
        renderFunc: () => `<h2 class="response-title">Generated LP Update Talking Points</h2><div class="board-slide"><div class="slide-title">Q3 LP Update: Key Highlights</div><ul><li>The portfolio is projected to grow ARR to <strong>~$292M</strong> over the next 6 months (base case).</li><li>This is driven by continued strong organic growth and NRR performance, particularly from our top-quartile assets.</li><li>Our 'Bear Case' of <strong>$285M</strong> is well-capitalized, and we see a potential 'Bull Case' of <strong>$305M</strong> if key enterprise deals land in Q4.</li></ul></div>`,
        recommendedActions: [], followUpQuestions: ["Draft a full LP update email.", "Add the forecast chart to this summary."]
    },
     "Action: Identify risks to Bear Case": {
        renderFunc: () => `<h2 class="response-title">Top 3 Risks to 'Bear Case' Forecast</h2><div class="list-container"><div class="list-item"><span class="list-number text-error">1</span><div><h4 class="list-title">TechFlow Churn</h4><p class="list-text">Failure to renew the Global FinCorp contract (28% of ARR) at TechFlow would immediately trigger the bear case scenario.</p></div></div><div class="list-item"><span class="list-number text-warning">2</span><div><h4 class="list-title">Macroeconomic Slowdown</h4><p class="list-text">A broader economic downturn could delay enterprise sales cycles at CloudVantage and Innovate Inc., pushing the bull case out of reach.</p></div></div><div class="list-item"><span class="list-number text-warning">3</span><div><h4 class="list-title">Competitor Pricing Pressure</h4><p class="list-text">Aggressive pricing from competitors could impact new logo acquisition and NRR at ScaleOps.</p></div></div></div>`,
        recommendedActions: [], followUpQuestions: ["What's our mitigation plan for the TechFlow churn risk?", "Model a scenario where enterprise sales cycles lengthen by 30 days."]
    },
    "What is the required hiring plan to support this forecast?": {
        renderFunc: () => `<h2 class="response-title">Required Hiring Plan to Support Forecast</h2><div class="data-table-container"><table class="data-table"><thead><tr><th>Department</th><th>Q3 2025 Hires</th><th>Q4 2025 Hires</th><th>Rationale</th></tr></thead><tbody><tr><td>Sales (Enterprise)</td><td>+5 AE, +3 SDR</td><td>+4 AE, +2 SDR</td><td>To capture projected Q4/Q1 enterprise demand.</td></tr><tr><td>Customer Success</td><td>+4 CSM</td><td>+3 CSM</td><td>To maintain NRR as the customer base grows.</td></tr><tr><td>Engineering</td><td>+6 SWE</td><td>+4 SWE</td><td>To support roadmap acceleration at CloudVantage & Innovate.</td></tr></tbody></table></div>`,
        recommendedActions: [], followUpQuestions: ["What is the estimated cost of this hiring plan?", "Which roles are the highest priority to fill?"]
    },
    "Model the portfolio's cash runway based on this forecast.": {
        renderFunc: () => `<h2 class="response-title">Portfolio Cash Runway Forecast</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="cash-runway-chart"></canvas></div><div class="chart-narrative"><p>Based on the forecast and the associated hiring plan, the portfolio has a healthy cash runway of approximately <strong>28 months</strong>. The model projects the portfolio to reach cash flow breakeven in <strong>Q4 2026</strong>.</p></div>`,
        recommendedActions: [], followUpQuestions: ["What is the impact on runway if we accelerate hiring by 50%?", "At what point should we consider a new fundraise?"]
    },
    "Which value creation lever has the biggest impact on this forecast?": {
        renderFunc: () => `<h2 class="response-title">Forecasted ARR Growth Drivers</h2><div class="chart-wrapper" style="height: 250px;"><canvas id="lever-impact-chart"></canvas></div><div class="chart-narrative"><p>The 6-month forecast is primarily driven by <strong>Expansion (NRR)</strong> from the existing customer base, accounting for nearly 60% of the projected growth. New logo acquisition remains a consistent contributor, while planned price increases have a smaller, but meaningful, impact.</p></div>`,
        recommendedActions: [], followUpQuestions: ["Double-click on the NRR driver.", "How does this compare to last year's drivers?"]
    },
    // CHAIN 3: SCENARIO
    "Action: Add Synergy Plan to Workspace": {
        renderFunc: () => `<h2 class="response-title">Action Confirmation</h2><div class="board-slide"><strong>Success:</strong> A new workstream "TechFlow Synergy Plan" has been added to the 100-Day Plan in the Workspace. Key synergy targets have been pre-populated and assigned to the integration lead.</div>`,
        recommendedActions: [], followUpQuestions: ["Assign this workstream to Brenda.", "Set a deadline for initial synergy realization."]
    },
    "Action: Draft email to legal": {
        renderFunc: () => `<h2 class="response-title">Generated Email Draft</h2><div class="email-draft"><p><strong>To:</strong> legal@firm.com</p><p><strong>Subject:</strong> Kick Off Confirmatory Diligence - Project TechFlow</p><hr/><p>Hi Team,</p><p>We are moving forward with the acquisition of TechFlow Solutions. The preliminary diligence has been positive, and we'd like to engage your team to begin the final confirmatory diligence process.</p><p>Please find the executed LOI attached. We'd like to schedule a kick-off call for early next week to align on the timeline and key areas of focus.</p><p>Best,</p></div>`,
        recommendedActions: [], followUpQuestions: ["Attach the LOI to this email.", "Send the email and CC the deal team."]
    },
    "Action: Model lower synergy case": {
        renderFunc: () => `<h2 class="response-title">Scenario: TechFlow Acquisition with 25% Lower Synergies</h2><div class="chart-wrapper" style="height: 300px;"><canvas id="lower-synergy-chart"></canvas></div><div class="judgement-box warning mt-6"><p class="judgement-title">Judgement (Medium Confidence):</p><p class="judgement-text">In this downside scenario, the acquisition is still accretive, but the impact on portfolio EBITDA margin is more pronounced and the payback period extends by approximately 9 months. The deal remains strategically sound, but the financial returns are less compelling.</p></div>`,
        recommendedActions: [], followUpQuestions: ["What is the new IRR in this scenario?", "What are the most at-risk synergy components?"]
    },
};