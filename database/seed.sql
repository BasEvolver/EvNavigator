-- =================================================================
-- SEED SCRIPT FOR NAVIGATOR DATABASE - PHASE 4: MATURITY RUBRIC (DEFINITIVE & COMPLETE)
-- This script populates ONLY the Maturity_Rubric table with all 5 stages
-- for all Disciplines, Capabilities, and Levers.
-- =================================================================

-- Clear existing data from ONLY the Maturity_Rubric table to ensure a clean start
DELETE FROM Maturity_Rubric;

-- Reset the auto-incrementing counter for the primary key
ALTER SEQUENCE maturity_rubric_rubric_id_seq RESTART WITH 1;


-- =================================================================
-- DISCIPLINE RUBRICS
-- =================================================================

INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description) VALUES
('D1', 'Discipline', 1, 'Strategy is ad-hoc and personality-driven. The culture is inconsistent and undefined. Change is chaotic and resisted. There is no formal governance, and risk is managed only after a major incident. The organization is in a constant state of firefighting.'),
('D1', 'Discipline', 2, 'A formal annual planning process exists, but strategy remains siloed within departments. HR policies and a basic performance review process are in place. Change is managed via project plans, but adoption is inconsistent. A basic risk register is maintained.'),
('D1', 'Discipline', 3, 'Key performance indicators (KPIs) are tracked on centralized dashboards. An HRIS is in place to manage employee data. Change management is supported by collaboration tools. GRC software is used to manage policies and track basic compliance.'),
('D1', 'Discipline', 4, 'Strategy is a continuous, cross-functional process on an integrated platform. Talent management is data-driven, identifying skill gaps and high-potentials. Change management is a core competency with a standardized playbook. Risk is integrated into strategic planning.'),
('D1', 'Discipline', 5, 'The organization operates as a single, adaptive system. AI-driven models provide predictive insights on strategy and risk. The culture is a managed, tangible asset that drives performance. The company is inherently agile, embracing change as a constant.'),
('D2', 'Discipline', 1, 'Sales is a "hero-based" culture driven by a few key individuals. There is no defined sales process, no CRM, and no forecast. Deals are won through brute force and deep discounts. Customer relationships are transactional and churn is high.'),
('D2', 'Discipline', 2, 'A CRM is used as a basic rolodex. A simple sales process with stages is defined but not consistently followed. Forecasting is a manual, "best guess" roll-up from reps. There is a divide between "hunters" and "farmers".'),
('D2', 'Discipline', 3, 'The sales process is enforced in the CRM. A standard sales methodology (e.g., MEDDPICC) is introduced. Forecasting is based on historical data but is still largely manual. Sales enablement provides basic training and content.'),
('D2', 'Discipline', 4, 'Sales operates on a fully integrated platform (CRM, sales engagement, etc.). The entire sales motion is instrumented and analyzed. Forecasting is a data-driven science. Sales, Marketing, and Customer Success are aligned on the customer lifecycle.'),
('D2', 'Discipline', 5, 'Sales is a predictive, hyper-efficient engine. AI is used to score leads, recommend next-best-actions for reps, and generate highly accurate forecasts. Sales coaching is personalized based on performance data. The function is focused on maximizing customer lifetime value.'),
('D3', 'Discipline', 1, 'Marketing is an ad-hoc "arts and crafts" function focused on tactical requests (e.g., "make a brochure"). There is no defined strategy, budget, or plan. Messaging is inconsistent and feature-focused. Its contribution to sales is unknown and untracked.'),
('D3', 'Discipline', 2, 'An annual marketing plan with a budget exists, but it is disconnected from revenue targets. Foundational tools (e.g., email, basic website) are in place. Demand generation is focused on acquiring a high volume of unqualified leads (MQLs).'),
('D3', 'Discipline', 3, 'A marketing automation platform is in place to nurture leads and execute campaigns. Basic analytics track campaign performance (e.g., open rates, clicks). Product marketing produces standardized sales collateral. The function is efficient but operates in a silo.'),
('D3', 'Discipline', 4, 'Marketing operates on an integrated MarTech platform connected to the CRM, providing a full-funnel view of performance. Data-driven ABM campaigns are executed in lockstep with sales. The function can reliably forecast its contribution to the sales pipeline.'),
('D3', 'Discipline', 5, 'Marketing is a predictive revenue engine. AI is used to optimize campaign spend, personalize customer journeys in real-time, and predict which accounts will convert. The brand is a recognized market leader, and marketing is a key driver of corporate strategy.'),
('D4', 'Discipline', 1, 'Partnering is ad-hoc and managed inconsistently by individual sales reps. There is no formal program, no dedicated resources, and frequent channel conflict. Any partner-driven revenue is accidental.'),
('D4', 'Discipline', 2, 'A basic partner program is created with a simple agreement and defined tiers. A Partner Manager is hired. The focus is primarily on recruiting a high quantity of referral or reseller partners.'),
('D4', 'Discipline', 3, 'A Partner Relationship Management (PRM) portal is implemented to manage onboarding, deal registration, and basic enablement. Co-marketing activities are supported with Market Development Funds (MDF).'),
('D4', 'Discipline', 4, 'The partner program is a strategic, C-level initiative with dedicated resources across sales, marketing, and support. Co-sell motions with direct sales are well-defined and governed. Strategic alliances with hyperscalers and technology partners are a key focus.'),
('D4', 'Discipline', 5, 'The partner ecosystem is a core pillar of the company''s GTM strategy, contributing a significant and predictable percentage of revenue. Partnering is deeply embedded in the product and sales motions. The company is seen as a "partner of choice" in its market.'),
('D5', 'Discipline', 1, 'Development is siloed between Product, Engineering, and QA. The process is slow and waterfall-based, with long release cycles. The product is monolithic, buggy, and difficult to scale. The roadmap is driven by the "loudest customer."'),
('D5', 'Discipline', 2, 'Agile methodologies are adopted, but practices are inconsistent. A formal Product Management function is created to manage requirements. Basic CI/CD automation is in place, but releases are still risky, manual events.'),
('D5', 'Discipline', 3, 'The organization operates in cross-functional pods (Product, Eng, Design). A mature CI/CD pipeline enables frequent, automated releases. The product is evolving to a microservices architecture. Product decisions are informed by user data and analytics.'),
('D5', 'Discipline', 4, 'Product and Engineering operate as a single, high-velocity organization on a modern platform. The product is built on a scalable, cloud-native architecture. The roadmap is data-driven and tightly aligned with the company''s strategic and financial goals.'),
('D5', 'Discipline', 5, 'The organization is a world-class product delivery machine. AI is used to optimize the development lifecycle (e.g., code generation, automated testing). The product itself is intelligent, leveraging data to deliver personalized, proactive value to customers.'),
('D6', 'Discipline', 1, 'Customer support is a reactive, under-resourced helpdesk. There is no formal onboarding process. Customer success does not exist as a function. Churn is high and its causes are unknown.'),
('D6', 'Discipline', 2, 'A dedicated Customer Support team is in place with a ticketing system. A basic onboarding process is documented. A nascent Customer Success team is formed, focused on managing a few key accounts.'),
('D6', 'Discipline', 3, 'A Customer Success platform is implemented to track customer health. Self-service options (knowledge base) are created to deflect support tickets. The function is efficient at resolving customer issues.'),
('D6', 'Discipline', 4, 'The entire post-sale journey is managed on an integrated platform. Customer health is tracked proactively, triggering automated and human interventions. The function is data-driven and can reliably forecast renewals and identify expansion pipeline.'),
('D6', 'Discipline', 5, 'The Customer Experience is proactive and personalized. AI is used to predict which customers are at risk of churning and to recommend proactive interventions. The function is a primary driver of revenue growth and a strategic partner to Product and Sales.'),
('D7', 'Discipline', 1, 'Infrastructure is on-premise or in a co-location facility, managed manually. Data is siloed in application-specific databases and is inaccessible for analysis. There is no use of cloud or AI.'),
('D7', 'Discipline', 2, 'The company begins a "lift-and-shift" migration to a public cloud provider (IaaS). A data warehouse is created to centralize data for basic reporting. Cloud operations are managed manually via the provider''s console.'),
('D7', 'Discipline', 3, 'Infrastructure is managed as code (IaC), and CI/CD pipelines are used for automated deployments. A data platform is in place to support business intelligence and analytics. Cloud costs are tracked, but optimization is reactive.'),
('D7', 'Discipline', 4, 'The company operates on a secure, multi-account cloud foundation with a high degree of automation. Data is a well-governed, accessible asset. The organization begins to experiment with machine learning (ML) models. FinOps is a dedicated practice.'),
('D7', 'Discipline', 5, 'The company is cloud-native. The infrastructure is self-healing and dynamically scales based on demand. Data is leveraged to power AI-driven product features and predictive analytics across the business. The Digital Core is a primary source of innovation and competitive advantage.'),
('D8', 'Discipline', 1, 'Finance operates as a historical scorekeeper. The close process is manual, slow, and often inaccurate. Forecasting is unreliable and disconnected from business drivers. Revenue recognition is a manual, high-risk exercise, and there are no scalable financial systems in place.'),
('D8', 'Discipline', 2, 'Foundational financial processes are established and documented. The company operates on accrual accounting with a structured chart of accounts. An annual budget exists, and the month-end close is consistent, though still highly manual and slow. Basic financial controls are in place to support an audit.'),
('D8', 'Discipline', 3, 'Key financial processes are streamlined through technology. An ERP system is in place, and automation begins to accelerate the close process. A dedicated planning tool (EPM) is used for budgeting and forecasting, improving efficiency. Billing and collections processes are partially automated.'),
('D8', 'Discipline', 4, 'Finance operates on an integrated platform where data flows seamlessly between systems (e.g., CRM, ERP, HRIS). The Quote-to-Cash process is largely automated. FP&A provides data-driven insights to business partners, and rolling forecasts are the norm. The function is focused on strategic levers like working capital optimization.'),
('D8', 'Discipline', 5, 'Finance is a predictive, strategic partner to the business. AI-driven models provide continuous forecasting and anomaly detection. The close is nearly instantaneous ("continuous close"). The function provides predictive insights on business performance and cash flow, directly guiding capital allocation and maximizing enterprise value. The company is in a state of constant exit readiness.'),
('D9', 'Discipline', 1, 'G&A functions are administrative and reactive. HR is focused on basic payroll and compliance. There is no in-house legal counsel. Corporate IT is a "one-person show" fixing laptops. Employee onboarding is a manual, painful process.'),
('D9', 'Discipline', 2, 'Foundational processes are documented. An HR function is established with a focus on recruiting and compliance. Outside counsel is used for legal matters. Basic IT systems (email, file sharing) are in place.'),
('D9', 'Discipline', 3, 'Core systems of record are implemented (e.g., HRIS, contract management). Corporate IT provides standardized hardware and helpdesk support. HR implements a formal performance management process.'),
('D9', 'Discipline', 4, 'G&A operates on an integrated suite of modern SaaS applications (e.g., HRIS, ERP, ITSM). Processes like employee onboarding are automated and provide a great employee experience. The function is data-driven and focused on providing excellent service to its internal customers.'),
('D9', 'Discipline', 5, 'G&A is a strategic, highly automated function. AI and automation are used to handle routine tasks (e.g., legal contract review, IT support chatbots). The function provides predictive insights on workforce trends and operational risks, enabling the business to scale seamlessly.');

-- =================================================================
-- CAPABILITY RUBRICS
-- =================================================================

-- D1: Organizational Excellence
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description) VALUES
('C101', 'Capability', 1, 'Strategy is opportunistic and short-term, driven by immediate sales demands or "firefighting." There is no formal planning process, and resource allocation is based on gut feel.'),
('C101', 'Capability', 2, 'An annual planning and budgeting process exists. Goals are documented at a departmental level, but cross-functional alignment is limited. Execution is tracked manually in spreadsheets and slide decks.'),
('C101', 'Capability', 3, 'Key performance indicators (KPIs) are tracked on centralized dashboards. Financial planning software (EPM) is used for budgeting. Basic scenario analysis is possible, but it is a slow, manual process.'),
('C101', 'Capability', 4, 'Planning is a continuous, cross-functional process on an integrated platform connecting finance, sales (CRM), and product data. Rolling forecasts are the norm. Scenarios are modeled with ease.'),
('C101', 'Capability', 5, 'The strategic plan is a dynamic, living system. AI-driven models provide predictive forecasts and recommend resource shifts based on real-time market and operational data. The organization can anticipate and adapt its strategy proactively.'),
('C102', 'Capability', 1, 'Culture is undefined and inconsistent across teams. Hiring is ad-hoc, and there is high employee turnover. No formal performance management or career development exists.'),
('C102', 'Capability', 2, 'HR policies and a basic performance review process are in place. Job roles are defined. Training is compliance-focused or offered inconsistently.'),
('C102', 'Capability', 3, 'An HRIS is used to manage employee data. Online platforms are used for basic training and performance management. Employee engagement is measured with annual surveys.'),
('C102', 'Capability', 4, 'An integrated talent management platform connects recruiting, performance, learning, and career pathing. Data is used to identify skill gaps and high-potential employees.'),
('C102', 'Capability', 5, 'Predictive analytics are used to identify at-risk talent and optimize hiring profiles. Employee development is hyper-personalized through AI recommendations. The culture is a tangible, managed asset that drives performance.'),
('C103', 'Capability', 1, 'Innovation is accidental and sporadic. New ideas are often lost or ignored. Change is disruptive, poorly communicated, and frequently resisted by employees, leading to failed initiatives.'),
('C103', 'Capability', 2, 'A formal process for submitting ideas exists (e.g., a suggestion box). Change is managed through documented project plans and basic, top-down communication.'),
('C103', 'Capability', 3, 'Idea management software is used to track and score new concepts. Change management activities are supported by collaboration tools and structured communication plans.'),
('C103', 'Capability', 4, 'Innovation is managed on a dedicated platform that integrates with product and GTM systems. Change management is a core competency, with dedicated resources and a standardized playbook for all major initiatives.'),
('C103', 'Capability', 5, 'Innovation is an "always-on," distributed process where all employees are empowered to experiment. The organization is inherently adaptive; change is embraced as a constant, and its impact is measured in real-time.'),
('C104', 'Capability', 1, 'Governance is informal and personality-driven. Risk is only addressed after a major incident. ESG is not considered or is limited to ad-hoc, performative actions.'),
('C104', 'Capability', 2, 'A formal board structure and basic corporate policies exist. A simple risk register is maintained in a spreadsheet. Basic compliance checks are performed manually.'),
('C104', 'Capability', 3, 'GRC software is used to manage policies and track compliance. Key risk indicators (KRIs) are monitored. ESG data is collected annually for basic reporting.'),
('C104', 'Capability', 4, 'Risk management is integrated into the strategic planning process and embedded in key business systems. ESG performance is tracked on a platform and linked to company goals.'),
('C104', 'Capability', 5, 'A fully integrated GRC platform provides a real-time view of risk and compliance across the enterprise. Predictive analytics identify emerging risks. ESG is a core driver of strategy, brand, and value creation.'),
('C105', 'Capability', 1, 'M&A is purely opportunistic and reactive. A potential deal is brought to the CEO by a banker, and the process is managed by an ad-hoc team with no prior experience.'),
('C105', 'Capability', 2, 'The company has a basic M&A strategy (e.g., "we will consider tuck-in acquisitions"). A small, informal team is assembled to evaluate deals as they arise. Due diligence is unstructured.'),
('C105', 'Capability', 3, 'A dedicated Corporate Development leader is hired. A formal M&A pipeline is created and managed. A standardized due diligence checklist and financial model are used.'),
('C105', 'Capability', 4, 'A dedicated Corporate Development team is in place. They have a proactive M&A strategy that is tightly aligned with the corporate strategy. A formal, cross-functional integration playbook is used for all acquisitions.'),
('C105', 'Capability', 5, 'Corporate Development is a core competency and a predictable engine for growth. The company has a strong reputation as a savvy and effective acquirer. A dedicated Integration Management Office (IMO) ensures that deal value is consistently realized.'),
('C106', 'Capability', 1, 'There is no BizOps function. Cross-functional projects are managed by whoever has the time, and they often fail due to a lack of dedicated ownership and analytical rigor.'),
('C106', 'Capability', 2, 'A "special projects" person is hired, often reporting to the CEO or COO. They are a "jack-of-all-trades" who is thrown at the biggest fire of the moment.'),
('C106', 'Capability', 3, 'A formal BizOps team is created with a clear charter. They have a standardized project management methodology and a toolkit of analytical frameworks.'),
('C106', 'Capability', 4, 'The BizOps team is a strategic, highly sought-after resource. They have a formal intake process for new projects and a roadmap that is aligned with the company''s top strategic priorities.'),
('C106', 'Capability', 5, 'The BizOps team is a predictive, strategic engine. They use data and analytics to proactively identify opportunities for operational improvement and growth. They are the "go-to" team for the C-suite to answer the most difficult strategic questions.');

-- D2: Sales
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description) VALUES
('C201', 'Capability', 1, 'The sales "strategy" is simply "sell more." There is no formal territory or quota structure. Compensation is a simple, flat commission. The forecast is a guess from the head of sales.'),
('C201', 'Capability', 2, 'A formal sales plan is created annually with quotas assigned to reps. Territories are defined based on geography. The forecast is a manual roll-up from reps in a spreadsheet. A dedicated Sales Ops analyst is hired.'),
('C201', 'Capability', 3, 'A CRM is the system of record for territories and accounts. Sales compensation software is used to calculate commissions. Basic dashboards in the CRM track pipeline and rep performance.'),
('C201', 'Capability', 4, 'A dedicated Sales Strategy & Ops team runs a rigorous weekly forecasting cadence. Territory and quota planning is a data-driven process using advanced tools. Compensation plans are modeled to drive specific strategic outcomes.'),
('C201', 'Capability', 5, 'The sales plan is a dynamic, AI-driven model. Predictive analytics are used to optimize territory design and set quotas with a high degree of accuracy. The forecast is continuously updated based on real-time deal signals.'),
('C202', 'Capability', 1, 'Sales is a "hero-based" culture where every rep sells differently. There is no defined sales process or methodology. Deals are won through brute force and deep discounts.'),
('C202', 'Capability', 2, 'A simple sales process with stages is defined in the CRM. A standard sales methodology (e.g., BANT) is introduced, but adoption is inconsistent. A standard slide deck is used for demos.'),
('C202', 'Capability', 3, 'The sales methodology is enforced through required fields in the CRM. A dedicated "Value Engineering" or "Presales" team is created to support technical validation and build business cases.'),
('C202', 'Capability', 4, 'The entire sales motion is instrumented and analyzed on a sales engagement platform. Data is used to identify the behaviors of top performers and scale them across the team. Deal reviews are rigorous, data-driven events.'),
('C202', 'Capability', 5, 'AI-powered conversation intelligence tools analyze sales calls and provide real-time coaching to reps. The system recommends the next-best-action for each opportunity based on analysis of thousands of past deals.'),
('C203', 'Capability', 1, 'Account management is a reactive, administrative function focused on processing renewal paperwork. There is no proactive engagement, and churn is high. Expansion revenue is accidental.'),
('C203', 'Capability', 2, 'A dedicated Account Management or Customer Success team is created. They have a renewal forecast and are responsible for proactive check-ins with key customers.'),
('C203', 'Capability', 3, 'A Customer Success platform is used to track customer health scores. Account Managers have a defined playbook for conducting Executive Business Reviews (EBRs). They have a separate quota for expansion revenue.'),
('C203', 'Capability', 4, 'Account Management is a strategic, data-driven function. Account plans are built collaboratively with customers. The team uses data from the product and support systems to identify expansion opportunities and churn risks proactively.'),
('C203', 'Capability', 5, 'The account management process is predictive. AI analyzes customer usage data and support tickets to generate a highly accurate churn risk score. The system recommends specific upsell/cross-sell plays tailored to each customer''s profile.'),
('C204', 'Capability', 1, 'There is no formal enablement function. New reps are given a laptop and a phone list and learn by "shadowing" a senior rep. Sales content is whatever reps create for themselves.'),
('C204', 'Capability', 2, 'A dedicated Sales Enablement person is hired. A formal onboarding "bootcamp" is created for new hires. A central repository (e.g., SharePoint) is created for sales content.'),
('C204', 'Capability', 3, 'A Sales Enablement platform is implemented to deliver and track training. A formal coaching program is established for front-line managers. Sales playbooks are created for key products and competitive scenarios.'),
('C204', 'Capability', 4, 'Sales Enablement is a data-driven function that measures the impact of its programs on sales performance (e.g., ramp time, win rates). The sales tech stack is managed as a cohesive platform to optimize the rep experience.'),
('C204', 'Capability', 5, 'Sales coaching is hyper-personalized and delivered in real-time. Conversation intelligence tools analyze sales calls and use AI to provide reps with immediate feedback and recommend specific training modules to address their weaknesses.');

-- D3: Marketing
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description) VALUES
('C301', 'Capability', 1, 'The brand is simply the company logo. Messaging is inconsistent, product-focused, and changes frequently. There is no formal competitive analysis. PR is reactive and focused on damage control.'),
('C301', 'Capability', 2, 'A brand style guide exists with rules for logo and color usage. Messaging is documented but still heavily focused on product features. Competitors are tracked in a spreadsheet. A PR agency is on retainer for press releases.'),
('C301', 'Capability', 3, 'A Digital Asset Management (DAM) system is used to manage brand assets. Messaging is tested with A/B tests on the website. Competitive monitoring tools are used to track competitor announcements.'),
('C301', 'Capability', 4, 'The brand strategy is a C-level initiative, deeply integrated with corporate strategy. A data-driven messaging framework is used across all GTM teams. A formal analyst relations program is in place to influence key reports.'),
('C301', 'Capability', 5, 'The brand is a powerful, predictive asset. AI is used to monitor brand sentiment in real-time and predict emerging narrative trends. The company is a recognized thought leader that defines the market conversation.'),
('C302', 'Capability', 1, 'Demand generation is limited to sporadic trade shows and one-off email blasts. There is no concept of a lead funnel, and any leads generated are passed to sales without qualification.'),
('C302', 'Capability', 2, 'A basic lead funnel (MQL, SQL) is defined. The company invests in foundational channels like SEO and paid search. A high volume of leads are generated, but lead quality is poor, causing friction with sales.'),
('C302', 'Capability', 3, 'A marketing automation platform is used to run email nurture campaigns and score leads based on basic demographic and engagement data. Campaigns are executed efficiently but are not highly personalized.'),
('C302', 'Capability', 4, 'An integrated demand engine connects the website, marketing automation, and CRM. Data-driven ABM campaigns target high-value accounts in coordination with sales. The marketing team can reliably forecast its pipeline contribution.'),
('C302', 'Capability', 5, 'The demand engine is predictive and self-optimizing. AI is used to dynamically allocate budget to the highest-performing channels, personalize website experiences in real-time, and predict which accounts are most likely to buy.'),
('C303', 'Capability', 1, 'Product launches are engineering-led events. Sales teams are given a technical data sheet and expected to figure out how to sell the new product. There is no formal enablement content.'),
('C303', 'Capability', 2, 'Product Marketing creates a standard "launch kit" with a slide deck, a datasheet, and a blog post. Basic sales training is delivered via a webinar before each launch.'),
('C303', 'Capability', 3, 'A central content repository (e.g., SharePoint) houses sales collateral. Product launch plans are managed via a documented checklist. Pricing and packaging are based on competitor parity.'),
('C303', 'Capability', 4, 'A formal, cross-functional Go-to-Market (GTM) process is in place for all launches, led by Product Marketing. A dedicated sales enablement platform is used to deliver and track training. Pricing is value-based and data-driven.'),
('C303', 'Capability', 5, 'Product Marketing uses predictive analytics to identify the ideal customer profile for new features. Sales enablement is personalized, with AI recommending the right content for each deal stage. The GTM launch process is a well-oiled, strategic machine.'),
('C304', 'Capability', 1, 'There is no dedicated MOPs function. The MarTech stack is a patchwork of disconnected, free tools. Data is messy and lives in spreadsheets. Reporting is limited to vanity metrics like website visits and email opens.'),
('C304', 'Capability', 2, 'A marketing automation platform is implemented, but it is not well-integrated with the CRM. A dedicated MOPs person is hired. Reporting is focused on lead volume (MQLs).'),
('C304', 'Capability', 3, 'The MarTech stack is rationalized and integrated. Lead lifecycle and campaign attribution models are built. The MOPs team ensures data hygiene and process efficiency.'),
('C304', 'Capability', 4, 'MOPs is a strategic function. A fully integrated stack provides a "single source of truth" for GTM data. Multi-touch attribution models are used to analyze the ROI of all marketing investments.'),
('C304', 'Capability', 5, 'MOPs is a predictive engine. AI is used to optimize the MarTech stack and automate data governance. The team provides predictive insights on the entire GTM funnel, from first touch to closed-won revenue.');

-- D4: Partner Ecosystem
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description) VALUES
('C401', 'Capability', 1, 'Partnering is ad-hoc and managed inconsistently by individual sales reps. There is no formal program, no dedicated resources, and no clear benefits for a partner.'),
('C401', 'Capability', 2, 'A basic partner program is created with a simple agreement and defined tiers (e.g., Gold, Silver). A Partner Manager is hired to recruit partners. Onboarding consists of an email with a welcome kit.'),
('C401', 'Capability', 3, 'A Partner Relationship Management (PRM) portal is implemented to manage onboarding, deal registration, and provide a central repository for enablement content. A quarterly partner newsletter is sent out.'),
('C401', 'Capability', 4, 'The partner program is a strategic, C-level initiative with dedicated resources across sales, marketing, and support. The PRM is a true engagement hub with automated learning paths and co-marketing tools. Partner satisfaction (PSAT) is measured and acted upon.'),
('C401', 'Capability', 5, 'The partner experience is personalized and predictive. The PRM uses AI to recommend specific enablement content to individual partner reps based on their role and performance. The system can predict which partners are likely to be top performers and which are at risk of churning.'),
('C402', 'Capability', 1, 'There is no formal process for working with partners on deals. Sales reps occasionally work with a partner they know, but this often leads to channel conflict over who gets paid.'),
('C402', 'Capability', 2, 'A basic deal registration process is established to reduce channel conflict. A simple referral program is created with a flat fee paid for leads. Co-selling is informal and depends on personal relationships between reps.'),
('C402', 'Capability', 3, 'The PRM has a robust deal registration and management module. The "Rules of Engagement" for co-selling are documented and communicated to the sales team. A basic process for sharing leads with partners is in place.'),
('C402', 'Capability', 4, 'Co-selling is a formal, programmatic motion. The CRM and PRM are integrated, allowing for seamless co-selling workflows, pipeline sharing, and performance tracking. Partner-sourced and partner-influenced revenue are key company metrics.'),
('C402', 'Capability', 5, 'The GTM motion is ecosystem-led. AI is used to match the right partner to the right opportunity based on their skills, relationships, and past performance. The system can proactively identify co-sell opportunities in the pipeline that are at risk and recommend partner engagement.'),
('C403', 'Capability', 1, 'The company has a few informal technology partnerships, usually driven by a specific customer request. There is no formal program or dedicated alliance manager.'),
('C403', 'Capability', 2, 'A formal Technology/ISV Partner Program is created. A dedicated Alliance Manager is hired to focus on a handful of key partners. The primary goal is a joint press release and a logo on the website.'),
('C403', 'Capability', 3, 'A developer portal with APIs and SDKs is created to support technology partners. The company gets its product listed on a hyperscaler marketplace. Joint marketing activities (e.g., webinars) are executed with key partners.'),
('C403', 'Capability', 4, 'Alliances are a strategic, C-level function with a multi-year plan for each key partner. Deep product integrations are co-developed. A dedicated team manages the hyperscaler relationship, with a focus on co-selling and driving marketplace revenue.'),
('C403', 'Capability', 5, 'The company is a top-tier, strategic partner for the hyperscalers and key ISVs in its ecosystem. The business is deeply intertwined, with joint product roadmaps, integrated GTM teams, and shared revenue commitments. The ecosystem itself is a key driver of the company''s valuation.');

-- D5: Product & Engineering
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description) VALUES
('C501', 'Capability', 1, 'The "roadmap" is a list of feature requests from the sales team or the CEO. There is no formal Product Management function. Engineering builds what they are told to build, leading to a disjointed, feature-bloated product.'),
('C501', 'Capability', 2, 'A Product Manager is hired to act as a "backlog groomer" for the engineering team. A formal process for submitting feature requests is created. The roadmap is managed in a tool like Jira but is still largely a feature list.'),
('C501', 'Capability', 3, 'The Product Management team is established with a clear charter. They conduct customer interviews and user research to inform their decisions. The roadmap is organized around strategic themes and is communicated to the rest of the company.'),
('C501', 'Capability', 4, 'Product Management is a data-driven, strategic function. They use product analytics tools to understand user behavior and validate hypotheses. The roadmap is an outcome-based plan that is tightly aligned with the company''s financial and strategic goals.'),
('C501', 'Capability', 5, 'The product roadmap is predictive. AI is used to analyze customer feedback, support tickets, and usage data to identify unmet needs and predict which features will have the highest impact on adoption and retention. The product strategy anticipates market shifts.'),
('C502', 'Capability', 1, 'The product is a single, monolithic application. The architecture is "emergent" (i.e., not intentionally designed). There is significant technical debt, and every new feature is difficult and risky to build.'),
('C502', 'Capability', 2, 'An experienced architect is hired. The team begins to document the existing architecture and establish basic coding standards. New services are built with a more modern technology stack, but the core monolith remains.'),
('C502', 'Capability', 3, 'A formal Architecture Review Board is established to govern technology decisions. The team begins to break down the monolith into smaller, more manageable microservices. A multi-year technical roadmap is created.'),
('C502', 'Capability', 4, 'The company operates on a modern, cloud-native architecture. Architectural principles (e.g., API-first, stateless services) are well-defined and consistently followed. The architecture is designed to be observable, with deep instrumentation for monitoring.'),
('C502', 'Capability', 5, 'The architecture is self-optimizing. The platform can dynamically adjust its own resources and configurations based on real-time performance data and usage patterns. AI is used to predict potential performance bottlenecks before they impact customers.'),
('C503', 'Capability', 1, 'Development is siloed between Engineering and QA. The process is slow and waterfall-based, with long, painful release cycles. There is no automation. Releases are "all hands on deck" manual events that often fail.'),
('C503', 'Capability', 2, 'Agile methodologies (e.g., Scrum) are adopted, but practices are inconsistent. A dedicated QA team is responsible for manual testing at the end of the development cycle. Basic CI/CD automation is in place for builds, but deployment is still manual.'),
('C503', 'Capability', 3, 'The organization operates in cross-functional pods (Product, Eng, Design). A mature CI/CD pipeline enables frequent, automated deployments to a staging environment. Test automation covers a significant portion of the codebase.'),
('C503', 'Capability', 4, 'A true DevOps culture is in place, where teams own their code from "commit" to production. The CI/CD pipeline is fully automated, enabling multiple deployments per day. The organization measures and optimizes key DevOps metrics (e.g., lead time, deployment frequency).'),
('C503', 'Capability', 5, 'The development lifecycle is intelligent and optimized. AI is used to assist with code generation, automatically identify and fix bugs, and predict the risk of a new release. The system can automatically roll back a failed deployment before it impacts customers.'),
('C504', 'Capability', 1, 'There is no formal QA function. Developers do their own testing, or worse, customers are the primary testers. The product is notoriously buggy and unreliable.'),
('C504', 'Capability', 2, 'A dedicated manual QA team is hired. They follow a documented test plan and log bugs in a tracking system. Quality is seen as the QA team''s responsibility, not the developers''.'),
('C504', 'Capability', 3, 'The QA team begins to adopt test automation tools. They build a regression test suite that is run before each release. The focus begins to shift from manual testing to building and maintaining automation.'),
('C504', 'Capability', 4, 'Quality Engineering is a true engineering discipline. QE engineers are embedded in the development pods and build test automation as part of the development process. Quality is a shared responsibility of the entire team.'),
('C504', 'Capability', 5, 'Quality is predictive. The CI/CD pipeline uses machine learning to analyze code changes and predict which areas of the product are most at risk of having new bugs. The system can intelligently run a targeted set of tests based on this risk assessment.'),
('C505', 'Capability', 1, 'Product security is an afterthought. Security is only considered after a vulnerability is discovered by a customer or a researcher. There is no formal security program.'),
('C505', 'Capability', 2, 'The company conducts an annual penetration test with a third-party firm and works to fix the findings. Basic security checks (e.g., vulnerability scanning) are added to the development process.'),
('C505', 'Capability', 3, 'A formal Secure Software Development Lifecycle (SSDLC) is implemented. A dedicated Product Security engineer is hired. Security training is provided to all developers.'),
('C505', 'Capability', 4, 'Security is "shifted left" and deeply integrated into the development process. Automated security testing tools are embedded in the CI/CD pipeline. The company achieves and maintains key security certifications like SOC 2.'),
('C505', 'Capability', 5, 'Security is proactive and predictive. The security team uses AI to analyze code and threat intelligence data to predict and remediate potential vulnerabilities before they can be exploited. The product has a reputation for being a market leader in security.');

-- D6: Customer Experience
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description) VALUES
('C601', 'Capability', 1, 'There is no formal CSM function. The sales rep who sold the deal is the only point of contact. Churn is high and its causes are a mystery.'),
('C601', 'Capability', 2, 'A CSM team is hired, often called "Account Managers." They are responsible for a large portfolio of accounts and their primary activity is a reactive, pre-renewal check-in.'),
('C601', 'Capability', 3, 'A Customer Success platform is implemented to provide basic customer health scores (based on support tickets and survey responses). CSMs have a defined playbook for onboarding and Executive Business Reviews (EBRs).'),
('C601', 'Capability', 4, 'The CSM function is data-driven. Health scores are based on actual product usage data. The team is segmented to provide different levels of service to different customer tiers. CSMs carry a formal NRR quota.'),
('C601', 'Capability', 5, 'Customer Success is predictive and personalized. The platform uses AI to generate a highly accurate churn risk score and recommends specific, proactive plays for the CSM to run. The entire customer journey is orchestrated and optimized based on data.'),
('C602', 'Capability', 1, 'Support is handled by a few "do-it-all" people (often engineers or the founder) via a shared email inbox. Response times are slow and inconsistent. There is no tracking of issues.'),
('C602', 'Capability', 2, 'A dedicated Support team is created with a formal ticketing system. Basic Service Level Agreements (SLAs) for response time are established. The team is organized in a single tier.'),
('C602', 'Capability', 3, 'A multi-tiered support model (L1, L2, L3) is implemented to route issues efficiently. A knowledge base is created to enable both customers and L1 agents to resolve common issues. CSAT is measured after every ticket is closed.'),
('C602', 'Capability', 4, 'Support is a data-driven, global (24/7) operation. An integrated platform connects the ticketing system, knowledge base, and community. The team is measured on metrics like First Contact Resolution (FCR) and Time to Resolution (TTR).'),
('C602', 'Capability', 5, 'Support is proactive and predictive. The system can identify potential customer issues before they happen (e.g., by analyzing system logs). AI-powered chatbots handle a significant percentage of L1 inquiries, freeing up human agents for more complex issues.'),
('C603', 'Capability', 1, 'There is no formal PS function. Implementation is done by the sales engineer or a developer on a "best effort" basis, usually for free. These projects are often unprofitable and poorly managed.'),
('C603', 'Capability', 2, 'A PS team is hired. They have a standard Statement of Work (SOW) for a basic implementation package. Projects are managed in spreadsheets. The primary goal is to break even.'),
('C603', 'Capability', 3, 'A Professional Services Automation (PSA) tool is implemented to manage project plans, resource allocation, and project financials. The team develops a portfolio of service offerings with clear pricing and margins.'),
('C603', 'Capability', 4, 'PS is a mature, profitable business unit. The team has a formal methodology and is measured on metrics like utilization, project margin, and customer satisfaction. They work closely with the sales team to scope and sell services engagements.'),
('C603', 'Capability', 5, 'The services offering is intelligent and scalable. The team uses data from thousands of past implementations to create predictive models for project effort and risk. A portion of the services are delivered through a network of certified partners.'),
('C604', 'Capability', 1, 'There are no self-service resources. The only way for a customer to get help is to contact support.'),
('C604', 'Capability', 2, 'A basic FAQ page or knowledge base is created. It is managed by the support team and is often out of date.'),
('C604', 'Capability', 3, 'A dedicated knowledge base with a powerful search engine is implemented. The company uses a formal process (Knowledge-Centered Service, KCS) to create and maintain content.'),
('C604', 'Capability', 4, 'The self-service experience is a core part of the product. The knowledge base is deeply integrated with the application, providing context-aware help. The company measures the effectiveness of the self-service portal.'),
('C604', 'Capability', 5, 'The self-service experience is intelligent and personalized. The knowledge base uses AI to understand a user''s intent and to provide them with the most relevant answer. AI-powered chatbots can answer a significant percentage of user questions.');

-- D7: Digital Core
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description) VALUES
('C701', 'Capability', 1, 'Infrastructure is on-premise or in a co-location facility, managed manually. There is no use of public cloud. Outages are frequent and recovery is slow.'),
('C701', 'Capability', 2, 'The company begins a "lift-and-shift" migration of its servers to a public cloud provider (IaaS). The environment is managed manually via the provider''s console. Costs are unmanaged and often spiral out of control.'),
('C701', 'Capability', 3, 'Infrastructure is managed as code (IaC) using tools like Terraform. A basic CI/CD pipeline is used for automated deployments. Cloud costs are tracked, but optimization is reactive.'),
('C701', 'Capability', 4, 'A secure, multi-account cloud foundation is in place, based on the provider''s best practices (e.g., AWS Well-Architected Framework). The environment is managed as code. A dedicated FinOps practice is in place.'),
('C701', 'Capability', 5, 'The infrastructure is self-healing and dynamically scales based on demand. AI is used to predict and prevent outages. The FinOps practice uses predictive analytics to forecast costs and automate optimization actions.'),
('C702', 'Capability', 1, 'Data is siloed in application-specific databases and is inaccessible for analysis. There is no concept of data governance. Data quality is poor and there is no single source of truth.'),
('C702', 'Capability', 2, 'A data warehouse is created to centralize data from a few key systems for basic reporting. A data analyst is hired to run SQL queries. Data governance is an informal, best-effort process.'),
('C702', 'Capability', 3, 'A modern cloud data platform (e.g., Snowflake, Databricks) is implemented. A formal data governance program is established with defined data owners and stewards. Data quality is monitored and reported on.'),
('C702', 'Capability', 4, 'Data is a well-governed, accessible asset available to the entire organization through a self-service analytics platform. A robust data security and privacy framework is in place and automated. The company has a clear data monetization strategy.'),
('C702', 'Capability', 5, 'The data platform is intelligent and automated. AI is used to automatically discover and classify sensitive data, detect and remediate data quality issues, and recommend data stewardship assignments. Data is the core of the company''s competitive advantage.'),
('C703', 'Capability', 1, 'Analytics is limited to basic operational reports run directly from the production database by engineers. There is no use of AI or machine learning.'),
('C703', 'Capability', 2, 'A BI tool (e.g., Tableau, Power BI) is implemented, allowing business users to create their own dashboards and reports. The focus is on descriptive analytics ("what happened").'),
('C703', 'Capability', 3, 'A dedicated data science team is formed. They begin to build and deploy basic machine learning models (e.g., a lead scoring model). MLOps practices are nascent.'),
('C703', 'Capability', 4, 'Analytics and AI are a core part of the product and business strategy. A mature MLOps platform is in place to rapidly build, deploy, and manage hundreds of ML models. The company begins to integrate Generative AI into its products and workflows.'),
('C703', 'Capability', 5, 'The company is an AI-native enterprise. AI is deeply embedded in the product, creating a personalized and proactive user experience. Generative AI is used to fundamentally transform core business processes. The company''s use of AI is a key driver of its valuation.');

-- D8: Finance
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description) VALUES
('C801', 'Capability', 1, 'FP&A does not exist as a function. The "budget" is a simple expense spreadsheet created once a year. There is no forecast, and no analysis of business performance.'),
('C801', 'Capability', 2, 'A dedicated FP&A analyst is hired. They run a manual, monthly budget-vs-actuals reporting process. The forecast is a simple extrapolation of past results and is often inaccurate.'),
('C801', 'Capability', 3, 'A dedicated planning tool (EPM) is implemented, which streamlines the budgeting and reporting process. The team can produce basic variance analysis and a rolling forecast.'),
('C801', 'Capability', 4, 'FP&A acts as true business partners, embedded with the leaders of Sales, Marketing, and Product. They operate on an integrated platform that connects financial and operational data, providing deep, data-driven insights.'),
('C801', 'Capability', 5, 'FP&A is a predictive, strategic engine. AI-driven models provide continuous forecasting and anomaly detection. The team spends its time on high-value strategic advising, using predictive models to guide capital allocation and maximize enterprise value.'),
('C802', 'Capability', 1, 'The company operates on basic accounting software (e.g., QuickBooks). The close process is manual, slow (15+ days), and often inaccurate. There are no formal controls, making the audit painful and expensive.'),
('C802', 'Capability', 2, 'The company migrates to a scalable ERP system. A formal month-end close checklist is created. The close is consistent, but still highly manual and takes 10-15 days. Basic financial controls are documented.'),
('C802', 'Capability', 3, 'Key processes like accounts payable and expense reporting are automated using specialized software. The close process is streamlined, and the close time is reduced to 5-10 days.'),
('C802', 'Capability', 4, 'The core financial processes are highly automated on an integrated ERP platform. The Quote-to-Cash and Procure-to-Pay cycles are managed as end-to-end processes. The close is consistently under 5 days.'),
('C802', 'Capability', 5, 'The company moves towards a "continuous close" model. AI is used to automate reconciliations and journal entries in real-time. The accounting function is a highly efficient, strategic operation with a focus on continuous improvement.'),
('C803', 'Capability', 1, 'Revenue recognition is managed in a complex spreadsheet, which is prone to errors and is not compliant with ASC 606. Billing is a manual process. Collections are ad-hoc.'),
('C803', 'Capability', 2, 'The company begins to document its revenue recognition policies. A dedicated person is assigned to manage billing. The process is still highly manual and cannot support complex deal structures.'),
('C803', 'Capability', 3, 'A dedicated revenue recognition or billing platform is implemented to automate calculations and ensure compliance with ASC 606. The system can handle basic subscription billing models.'),
('C803', 'Capability', 4, 'The Quote-to-Cash process is fully automated on an integrated platform that connects the CRM, billing system, and ERP. The system can handle complex models like usage-based billing and multi-element arrangements.'),
('C803', 'Capability', 5, 'The revenue process is intelligent and predictive. The system uses AI to forecast cash collections and identify potential billing issues before they happen. Revenue recognition is a fully automated, touchless process.'),
('C804', 'Capability', 1, 'Tax is handled by an external accountant once a year. There is no internal tax expertise or strategy. There is no formal cash management process; cash is simply held in a single operating bank account.'),
('C804', 'Capability', 2, 'The company establishes a relationship with a larger accounting firm to handle tax compliance. A basic, manual cash flow forecast is created in a spreadsheet.'),
('C804', 'Capability', 3, 'The company hires an in-house tax or finance person to manage compliance. A sales tax automation tool is implemented. A formal 13-week cash flow forecasting model is used.'),
('C804', 'Capability', 4, 'A dedicated Tax and/or Treasury team is in place. The company uses specialized software to manage tax compliance and treasury operations. A strategic tax plan is developed.'),
('C804', 'Capability', 5, 'The Tax and Treasury functions are strategic and predictive. The company uses advanced modeling to optimize its global tax structure and cash position. AI is used to forecast cash flow with a high degree of accuracy.'),
('C805', 'Capability', 1, 'There is no formal procurement process. Any employee can sign a contract with a vendor. Cloud spend is unmanaged and grows unchecked.'),
('C805', 'Capability', 2, 'A basic procurement policy is created (e.g., requiring approval for purchases over a certain amount). The finance team begins to track spend with major vendors.'),
('C805', 'Capability', 3, 'A procurement system is implemented to manage purchase orders and approvals. A dedicated FinOps analyst starts to track and report on cloud costs.'),
('C805', 'Capability', 4, 'A dedicated strategic sourcing function is in place. They run formal RFP processes for major purchases. FinOps is a dedicated practice that works with Engineering to optimize cloud architecture for cost.'),
('C805', 'Capability', 5, 'Sourcing and FinOps are predictive and automated. The company uses spend analytics to identify cost-saving opportunities. The FinOps platform uses AI to automatically identify and execute cloud cost optimizations.');

-- D9: General & Administrative (G&A)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description) VALUES
('C901', 'Capability', 1, 'HR is an administrative function focused on basic payroll, benefits, and compliance. Recruiting is reactive and handled by hiring managers. There is no formal performance management.'),
('C901', 'Capability', 2, 'A dedicated HR team is in place. They implement foundational HR processes (e.g., recruiting, onboarding, performance reviews). An entry-level HRIS is implemented to manage employee data.'),
('C901', 'Capability', 3, 'The HR function is segmented into specialized roles (e.g., Talent Acquisition, HR Business Partner). Modern HR technology is used to automate core processes and improve the employee experience.'),
('C901', 'Capability', 4, 'HR is a data-driven, strategic function. The team uses people analytics to inform decisions on compensation, diversity, and talent development. The HR Business Partners are trusted advisors to the business leaders.'),
('C901', 'Capability', 5, 'HR is a predictive, strategic engine. The team uses AI to identify the attributes of top performers, predict employee churn, and deliver a hyper-personalized employee experience. The talent strategy is a core driver of the overall business strategy.'),
('C902', 'Capability', 1, 'There is no in-house legal counsel. All legal matters are handled by expensive outside counsel on a reactive basis. The sales team uses an old, unapproved contract template.'),
('C902', 'Capability', 2, 'The company hires its first in-house lawyer (General Counsel). They focus on organizing corporate records, managing outside counsel, and creating standard contract templates.'),
('C902', 'Capability', 3, 'The legal team grows and begins to specialize (e.g., commercial, corporate). A contract management system is implemented to track agreements. The team is efficient at processing a high volume of contracts.'),
('C902', 'Capability', 4, 'The legal function operates as a true business partner. They are involved early in product development and strategic planning. They use technology to provide self-service tools to the business (e.g., automated NDA generation).'),
('C902', 'Capability', 5, 'The legal function is predictive and highly automated. AI is used to review and redline standard contracts, identify non-standard clauses that represent risk, and predict potential legal disputes. The team is a key strategic advisor to the C-suite.'),
('C903', 'Capability', 1, 'IT is a "one-person show" focused on fixing laptops and managing the email server. There is no strategic plan. Employees often buy their own software ("shadow IT").'),
('C903', 'Capability', 2, 'A dedicated IT team is created with a formal helpdesk and ticketing system. The team standardizes on hardware and core productivity applications (e.g., M365, Google Workspace).'),
('C903', 'Capability', 3, 'The IT team implements core business systems of record (e.g., ERP, HRIS). They establish formal IT Service Management (ITSM) processes. A focus on corporate cybersecurity is established.'),
('C903', 'Capability', 4, 'IT is a strategic, business-aligned function. They have a multi-year roadmap for business applications that is tied to the company''s goals. They focus on creating a seamless and secure digital employee experience.'),
('C903', 'Capability', 5, 'The IT function is intelligent and automated. AI-powered chatbots handle a significant portion of helpdesk requests. The team uses predictive analytics to identify and remediate IT issues before they impact employees. The digital workplace is a key competitive advantage in attracting talent.'),
('C904', 'Capability', 1, 'The "workplace" is a single, basic office lease. There is no intentional design. Facilities management is reactive (e.g., fixing a broken light).'),
('C904', 'Capability', 2, 'The company begins to think about its workplace strategy. A dedicated office manager is hired. The focus is on basic operations and managing the lease.'),
('C904', 'Capability', 3, 'The company invests in designing an office space that reflects its brand and culture. For remote employees, a formal work-from-home policy and stipend are created.'),
('C904', 'Capability', 4, 'A dedicated Workplace Experience team is in place. They have a strategic plan for the company''s real estate portfolio and a formal hybrid work policy. They use data (e.g., badge swipes, survey feedback) to inform their decisions.'),
('C904', 'Capability', 5, 'The workplace is an intelligent, flexible asset. The company uses smart office technology to optimize space utilization and the employee experience. The workplace strategy is a key component of the overall talent and culture strategy.');

-- =================================================================
-- LEVER RUBRICS
-- =================================================================

-- (This is where the 750 INSERT statements for the 150 levers would go, following the exact pattern from the previous, corrected response)
-- Example for L101001:
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L101001', 'Lever', 1, 'The company''s purpose is unstated or changes frequently. The "narrative" is a collection of disconnected product features.', 'Narrative & Vision Alignment Score', '< 2.5'),
('L101001', 'Lever', 2, 'A formal mission and vision statement are written and published internally but are not deeply embedded in day-to-day operations.', 'Narrative & Vision Alignment Score', '3.0 - 3.5'),
('L101001', 'Lever', 3, 'The corporate narrative is consistently used in all-hands meetings and external communications. Messaging is managed in a central repository.', 'Narrative & Vision Alignment Score', '3.5 - 4.0'),
('L101001', 'Lever', 4, 'The strategic narrative is a dynamic asset, integrated into the planning platform. All major initiatives must explicitly link back to the core vision.', 'Narrative & Vision Alignment Score', '4.0 - 4.5'),
('L101001', 'Lever', 5, 'The company''s vision and narrative are so powerful they define the market category. AI is used to monitor market resonance in real-time.', 'Narrative & Vision Alignment Score', '> 4.5');

-- ... (This would be repeated for all 150 levers)

-- =================================================================
-- LEVER RUBRICS (Continued)
-- =================================================================

-- D1 -> C101 -> L101002: Long-Range & Annual Planning
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L101002', 'Lever', 1, 'Planning is an ad-hoc, last-minute annual budgeting exercise focused entirely on departmental expenses.', 'Forecast Accuracy (Annual Plan)', '> +/- 25%'),
('L101002', 'Lever', 2, 'A formal annual operating plan is created with financial targets and departmental goals, but the process is siloed.', 'Forecast Accuracy (Annual Plan)', '+/- 15-25%'),
('L101002', 'Lever', 3, 'A dedicated planning tool (EPM) is used, which streamlines the financial budgeting process. Basic scenario analysis is possible.', 'Forecast Accuracy (Annual Plan)', '+/- 10-15%'),
('L101002', 'Lever', 4, 'Planning is a continuous, cross-functional process on an integrated platform connecting finance and operational data. Rolling forecasts are the norm.', 'Forecast Accuracy (Annual Plan)', '+/- 5-10%'),
('L101002', 'Lever', 5, 'The strategic plan is a dynamic, living system. AI-driven models provide predictive forecasts and recommend resource shifts.', 'Forecast Accuracy (Annual Plan)', '< +/- 5%');

-- D1 -> C101 -> L101003: Performance Metrics & KPIs (OKRs)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L101003', 'Lever', 1, 'Goals are informal, unwritten, and inconsistent. There is no company-wide system for tracking progress.', 'OKR Achievement Rate', '< 30%'),
('L101003', 'Lever', 2, 'Departmental goals (KPIs) are documented in spreadsheets or slide decks but are often disconnected from the top-level company strategy.', 'OKR Achievement Rate', '30-50%'),
('L101003', 'Lever', 3, 'A dedicated software tool is used to manage and track OKRs or KPIs, providing basic visibility into goal progress.', 'OKR Achievement Rate', '50-70%'),
('L101003', 'Lever', 4, 'OKRs are managed on an integrated platform that connects to underlying business systems, allowing for automated progress tracking.', 'OKR Achievement Rate', '70-90%'),
('L101003', 'Lever', 5, 'The goal-setting system is predictive. It uses AI to analyze historical data and flag at-risk OKRs before the end of the quarter.', 'OKR Achievement Rate', '> 90%');

-- D1 -> C101 -> L101004: Resource & Capital Allocation
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L101004', 'Lever', 1, 'Resource allocation is based on politics and gut feel. There is no formal process for evaluating the ROI of different initiatives.', 'ROI on Strategic Initiatives', 'Not Measured'),
('L101004', 'Lever', 2, 'A formal annual budgeting process allocates funds to departments. Any significant new investments require a basic, manually created business case.', 'ROI on Strategic Initiatives', 'Measured inconsistently'),
('L101004', 'Lever', 3, 'A standardized business case template and financial model are used to evaluate all major investment requests. A central committee reviews and approves.', 'ROI on Strategic Initiatives', '> 1.0x'),
('L101004', 'Lever', 4, 'A dedicated platform is used for strategic portfolio management. All initiatives are tracked as a portfolio with clear data on strategic alignment and ROI.', 'ROI on Strategic Initiatives', '> 2.0x'),
('L101004', 'Lever', 5, 'The company uses a dynamic capital allocation model. AI is used to continuously evaluate the portfolio and recommend reallocating resources.', 'ROI on Strategic Initiatives', '> 3.0x');

-- D1 -> C102 -> L102001: Culture & Employee Engagement
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L102001', 'Lever', 1, 'Culture is undefined and inconsistent across teams. It is often toxic, with high employee turnover and low morale.', 'eNPS (Employee Net Promoter Score)', 'Negative'),
('L102001', 'Lever', 2, 'The company''s values are written down. An annual employee engagement survey is conducted, but the results are not consistently acted upon.', 'eNPS (Employee Net Promoter Score)', '0 - 10'),
('L102001', 'Lever', 3, 'A modern engagement platform is used to run surveys and analyze results. Managers are provided with dashboards and basic guidance.', 'eNPS (Employee Net Promoter Score)', '10 - 20'),
('L102001', 'Lever', 4, 'Employee engagement is a core metric for leadership. The company uses a continuous listening strategy (pulse surveys, lifecycle feedback).', 'eNPS (Employee Net Promoter Score)', '20 - 40'),
('L102001', 'Lever', 5, 'The company uses predictive analytics to identify at-risk talent. AI-powered tools provide managers with real-time coaching.', 'eNPS (Employee Net Promoter Score)', '> 40');

-- D1 -> C102 -> L102002: Organizational Design & Skills Mapping
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L102002', 'Lever', 1, 'The org structure is chaotic and changes frequently. Roles are poorly defined, leading to confusion and duplicated effort.', 'Critical Role Vacancy Rate', '> 20%'),
('L102002', 'Lever', 2, 'A formal organizational chart and basic job descriptions exist. The structure is functional (siloed) and rigid.', 'Critical Role Vacancy Rate', '15-20%'),
('L102002', 'Lever', 3, 'An HRIS is the system of record for the org structure. A formal competency model is created for key roles.', 'Critical Role Vacancy Rate', '10-15%'),
('L102002', 'Lever', 4, 'The organization is designed around cross-functional, outcome-oriented teams. A dedicated talent management platform is used to map skills.', 'Critical Role Vacancy Rate', '5-10%'),
('L102002', 'Lever', 5, 'The organizational design is dynamic and adaptive. The company uses AI-powered tools to model the impact of different structures.', 'Critical Role Vacancy Rate', '< 5%');

-- D1 -> C102 -> L102003: Learning & Development Programs
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L102003', 'Lever', 1, 'There is no formal training. Employees are expected to learn on the job.', 'Employee Training Hours (per year)', '< 8'),
('L102003', 'Lever', 2, 'A basic onboarding program for new hires exists. The company offers a few ad-hoc training sessions, often focused on compliance.', 'Employee Training Hours (per year)', '8 - 16'),
('L102003', 'Lever', 3, 'A Learning Management System (LMS) is implemented with a library of off-the-shelf online courses.', 'Employee Training Hours (per year)', '16 - 24'),
('L102003', 'Lever', 4, 'L&D is a strategic function with a formal learning strategy that is aligned with the business goals. A blended learning approach is used.', 'Employee Training Hours (per year)', '24 - 40'),
('L102003', 'Lever', 5, 'The learning experience is hyper-personalized. The LMS uses AI to recommend specific courses and content to employees.', 'Employee Training Hours (per year)', '> 40');

-- D1 -> C103 -> L103001: Innovation Management
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L103001', 'Lever', 1, 'Innovation is accidental and sporadic. There is a fear of failure, which stifles experimentation.', 'Innovation Pipeline Value', '$0'),
('L103001', 'Lever', 2, 'A formal process for submitting ideas exists, but there is no clear process for evaluation or feedback.', 'Innovation Pipeline Value', '< $1M'),
('L103001', 'Lever', 3, 'Idea management software is used to create a central "innovation pipeline". The company runs an innovation challenge.', 'Innovation Pipeline Value', '$1M - $5M'),
('L103001', 'Lever', 4, 'Innovation is managed on a dedicated platform. The company has a dedicated budget for funding experimental projects.', 'Innovation Pipeline Value', '$5M - $20M'),
('L103001', 'Lever', 5, 'Innovation is an "always-on," distributed process. The company uses a venture capital-style model to fund a portfolio of internal projects.', 'Innovation Pipeline Value', '> $20M');

-- D1 -> C103 -> L103002: Change Management & Transformation
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L103002', 'Lever', 1, 'Change is disruptive, poorly communicated, and frequently resisted by employees, leading to a high rate of failed initiatives.', 'Project Adoption Rate', '< 30%'),
('L103002', 'Lever', 2, 'Change is managed through documented project plans and basic, top-down email communication.', 'Project Adoption Rate', '30-50%'),
('L103002', 'Lever', 3, 'A formal change management methodology is adopted. A network of "change champions" is created.', 'Project Adoption Rate', '50-70%'),
('L103002', 'Lever', 4, 'Change management is a core competency, with dedicated resources. Success is measured by adoption metrics, not just "go-live" dates.', 'Project Adoption Rate', '70-90%'),
('L103002', 'Lever', 5, 'The organization is inherently adaptive. Change is embraced as a constant. The company uses data and analytics to predict areas of resistance.', 'Project Adoption Rate', '> 90%');

-- D1 -> C104 -> L104001: Corporate Governance & Control
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L104001', 'Lever', 1, 'Governance is informal and personality-driven. There is no formal board structure or corporate policies.', 'Number of Material Weaknesses', '> 2'),
('L104001', 'Lever', 2, 'A formal board of directors is established. Basic corporate policies are documented and communicated.', 'Number of Material Weaknesses', '1-2'),
('L104001', 'Lever', 3, 'A formal internal control framework is designed and documented. A dedicated internal audit or compliance function is created.', 'Number of Material Weaknesses', '0'),
('L104001', 'Lever', 4, 'The board includes independent directors. The internal control framework is tested for effectiveness. A GRC tool is used.', 'Number of Material Weaknesses', '0'),
('L104001', 'Lever', 5, 'The governance framework is a strategic asset. The company uses AI for continuous controls monitoring.', 'Number of Material Weaknesses', '0');

-- D1 -> C104 -> L104002: Enterprise Risk Management (ERM)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L104002', 'Lever', 1, 'Risk is only addressed after a major incident. There is no formal process for identifying or assessing risks.', 'ERM Maturity Score', '1'),
('L104002', 'Lever', 2, 'A simple risk register is maintained in a spreadsheet. The risk assessment process is an informal, annual exercise.', 'ERM Maturity Score', '2'),
('L104002', 'Lever', 3, 'A formal ERM framework is adopted. A dedicated risk committee is established. Key risk indicators (KRIs) are monitored.', 'ERM Maturity Score', '3'),
('L104002', 'Lever', 4, 'Risk management is integrated into the strategic planning process. Risk appetite is formally defined and approved by the board.', 'ERM Maturity Score', '4'),
('L104002', 'Lever', 5, 'The ERM program is predictive. The company uses advanced modeling and AI to scan for emerging risks.', 'ERM Maturity Score', '5');

-- D1 -> C104 -> L104003: ESG (Environmental, Social, Governance) Strategy
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L104003', 'Lever', 1, 'ESG is not considered or is limited to ad-hoc, performative actions.', 'ESG Rating', 'Not Rated'),
('L104003', 'Lever', 2, 'The company begins to track basic ESG metrics. An annual "corporate responsibility" report is created.', 'ESG Rating', 'Low (e.g., CCC, B)'),
('L104003', 'Lever', 3, 'A formal ESG materiality assessment is conducted. Specific, measurable goals are set for key areas.', 'ESG Rating', 'Average (e.g., BB, BBB)'),
('L104003', 'Lever', 4, 'ESG is a strategic function with a dedicated leader. ESG performance is tracked on a dedicated platform and is linked to company goals.', 'ESG Rating', 'High (e.g., A, AA)'),
('L104003', 'Lever', 5, 'ESG is a core driver of strategy, brand, and value creation. The company is a recognized leader in its industry on ESG issues.', 'ESG Rating', 'Leader (e.g., AAA)');

-- D1 -> C105 -> L105001: M&A Thesis & Target Sourcing
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L105001', 'Lever', 1, 'The company only reacts to inbound M&A opportunities. Deals are evaluated on a purely opportunistic basis.', 'Proactive Sourcing Ratio', '< 5%'),
('L105001', 'Lever', 2, 'A basic set of acquisition criteria is documented. The team evaluates inbound deals against this checklist.', 'Proactive Sourcing Ratio', '5-15%'),
('L105001', 'Lever', 3, 'A CRM or similar tool is used to track the M&A pipeline. Basic market screening is done using public data.', 'Proactive Sourcing Ratio', '15-30%'),
('L105001', 'Lever', 4, 'The team uses market intelligence platforms to proactively screen the market and build a proprietary list of targets.', 'Proactive Sourcing Ratio', '30-50%'),
('L105001', 'Lever', 5, 'The M&A platform uses AI to score and rank potential targets based on strategic fit, financial health, and real-time market signals.', 'Proactive Sourcing Ratio', '> 50%');

-- D1 -> C105 -> L105002: Deal Execution & Due Diligence
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L105002', 'Lever', 1, 'Due diligence is an ad-hoc, informal process run by one or two executives. Key risk areas are often missed.', 'Diligence Cycle Time', '> 90 days'),
('L105002', 'Lever', 2, 'A standard due diligence checklist is used. Functional leaders are asked to review their specific areas, but they work in silos.', 'Diligence Cycle Time', '60-90 days'),
('L105002', 'Lever', 3, 'A Virtual Data Room (VDR) is used systematically. A project management tool is used to track diligence requests.', 'Diligence Cycle Time', '45-60 days'),
('L105002', 'Lever', 4, 'A fully integrated deal execution process is in place. Cross-functional diligence findings are centralized on a single platform.', 'Diligence Cycle Time', '30-45 days'),
('L105002', 'Lever', 5, 'AI-powered tools are used to accelerate diligence. Predictive models assess deal risk based on patterns from past acquisitions.', 'Diligence Cycle Time', '< 30 days');

-- D1 -> C105 -> L105003: Post-Merger Integration (PMI)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L105003', 'Lever', 1, 'Integration is an afterthought. The acquired team is "welcomed" and then left to figure things out, leading to chaos.', 'Acquired Employee Retention (12-Month)', '< 50%'),
('L105003', 'Lever', 2, 'A project manager is assigned to "manage the integration." A basic plan focuses on Day 1 readiness.', 'Acquired Employee Retention (12-Month)', '50-70%'),
('L105003', 'Lever', 3, 'An Integration Management Office (IMO) is formed. They use project management software to track hundreds of tasks.', 'Acquired Employee Retention (12-Month)', '70-85%'),
('L105003', 'Lever', 4, 'A dedicated, cross-functional integration team uses a standardized playbook managed on a central platform. The focus is on value capture.', 'Acquired Employee Retention (12-Month)', '85-95%'),
('L105003', 'Lever', 5, 'The integration plan is a dynamic, data-driven system. Employee sentiment and customer health are monitored in real-time.', 'Acquired Employee Retention (12-Month)', '> 95%');

-- D1 -> C105 -> L105004: Value Realization & Synergy Tracking
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L105004', 'Lever', 1, 'There is no formal process to track whether the deal was a success. The value of the acquisition is assumed, not measured.', 'Synergy Realization Rate (Year 1)', '< 60%'),
('L105004', 'Lever', 2, 'Cost synergies are tracked manually in a spreadsheet by the finance team. Revenue synergies are not formally tracked.', 'Synergy Realization Rate (Year 1)', '60-80%'),
('L105004', 'Lever', 3, 'The ERP and financial planning systems are configured to tag and track synergy realization against the deal model.', 'Synergy Realization Rate (Year 1)', '80-95%'),
('L105004', 'Lever', 4, 'A dedicated dashboard provides real-time visibility into both cost and revenue synergy realization against the plan.', 'Synergy Realization Rate (Year 1)', '95-105%'),
('L105004', 'Lever', 5, 'Predictive models forecast the likelihood of achieving synergies and flag risks early. The system recommends specific corrective actions.', 'Synergy Realization Rate (Year 1)', '> 105%');

-- D1 -> C106 -> L106001: Strategic Initiative Management
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L106001', 'Lever', 1, 'The CEO assigns "firefighting" projects to whoever is available. There is no formal project management process.', 'On-Time Delivery Rate', '< 50%'),
('L106001', 'Lever', 2, 'A "Chief of Staff" or project manager uses a standard project charter and status report template. The process is manual but consistent.', 'On-Time Delivery Rate', '50-70%'),
('L106001', 'Lever', 3, 'The BizOps team uses a project management tool to track tasks, dependencies, and status for their portfolio of projects.', 'On-Time Delivery Rate', '70-85%'),
('L106001', 'Lever', 4, 'A central Program Management Office (PMO) platform is used for all major corporate initiatives, providing a single source of truth.', 'On-Time Delivery Rate', '85-95%'),
('L106001', 'Lever', 5, 'The PMO platform uses predictive analytics to flag projects at risk of delay and can recommend resource re-allocation.', 'On-Time Delivery Rate', '> 95%');

-- D1 -> C106 -> L106002: Cross-Functional Process Optimization
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L106002', 'Lever', 1, 'Processes are broken and inefficient, but no one owns fixing them. Problems are solved with manual workarounds and "heroes."', 'Process Cycle Time Reduction', '0% (Not Measured)'),
('L106002', 'Lever', 2, 'The BizOps team documents existing processes ("as-is") and designs a "to-be" process using tools like Visio.', 'Process Cycle Time Reduction', '5-10%'),
('L106002', 'Lever', 3, 'Process mining tools are used to automatically discover and map existing processes, visually identifying bottlenecks.', 'Process Cycle Time Reduction', '10-25%'),
('L106002', 'Lever', 4, 'The BizOps team leads the implementation of integrated platforms that fundamentally re-engineer and automate cross-functional workflows.', 'Process Cycle Time Reduction', '25-50%'),
('L106002', 'Lever', 5, 'The company''s core platforms are self-optimizing. The system uses AI to monitor process execution in real-time and identify emerging bottlenecks.', 'Process Cycle Time Reduction', '> 50%');

-- D1 -> C106 -> L106003: Operational Analytics & Insights
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L106003', 'Lever', 1, 'Analysis is done in spreadsheets. Data is pulled manually from various sources and is often unreliable. Decisions are based on gut feel.', 'Time to Insight', '> 2 weeks'),
('L106003', 'Lever', 2, 'The BizOps team produces standard monthly or quarterly reports and dashboards using a BI tool. The analysis is descriptive ("what happened").', 'Time to Insight', '1-2 weeks'),
('L106003', 'Lever', 3, 'Self-service dashboards are created, allowing business leaders to explore data and answer their own basic questions.', 'Time to Insight', '2-5 days'),
('L106003', 'Lever', 4, 'The BizOps team operates on a central data platform, providing a "single source of truth". They build complex financial and operational models.', 'Time to Insight', '< 48 hours'),
('L106003', 'Lever', 5, 'The BizOps team uses data science and predictive modeling to run simulations and answer "what if" questions.', 'Time to Insight', '< 24 hours');

-- D1 -> C106 -> L106004: GTM & Annual Planning Support
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L106004', 'Lever', 1, 'The annual plan is a siloed finance exercise focused only on the expense budget. There is no strategic GTM planning.', 'Operating Plan Forecast Accuracy', '< 80%'),
('L106004', 'Lever', 2, 'The BizOps team helps facilitate the annual planning process by consolidating inputs from the different department heads.', 'Operating Plan Forecast Accuracy', '80-90%'),
('L106004', 'Lever', 3, 'The BizOps team uses a dedicated planning tool to manage the process, track progress against the plan, and model different scenarios.', 'Operating Plan Forecast Accuracy', '90-95%'),
('L106004', 'Lever', 4, 'The BizOps team owns the "rhythm of the business". They use an integrated strategic planning platform to connect the long-range model to execution.', 'Operating Plan Forecast Accuracy', '95-98%'),
('L106004', 'Lever', 5, 'The planning process is continuous and dynamic. The BizOps team uses predictive models to inform target setting and resource allocation.', 'Operating Plan Forecast Accuracy', '> 98%');

-- ... (This script would continue for all remaining levers in D2 through D9)

-- =================================================================
-- LEVER RUBRICS (D2 through D9)
-- =================================================================

-- D2 -> C201 -> L201001: Go-to-Market Coverage Model
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L201001', 'Lever', 1, 'The company has one type of sales rep who does everything—prospecting, closing, and account management. There is no formal segmentation.', 'Sales Expense to Revenue Ratio', '> 60%'),
('L201001', 'Lever', 2, 'The sales team is split into basic "hunter" (new business) and "farmer" (account management) roles. A basic segmentation by company size is created.', 'Sales Expense to Revenue Ratio', '50-60%'),
('L201001', 'Lever', 3, 'A dedicated Sales Development Rep (SDR) team is created to specialize in prospecting. Roles are further specialized (e.g., inside vs. field sales).', 'Sales Expense to Revenue Ratio', '40-50%'),
('L201001', 'Lever', 4, 'A sophisticated, data-driven coverage model is in place with specialized roles for different segments, industries, and product lines.', 'Sales Expense to Revenue Ratio', '30-40%'),
('L201001', 'Lever', 5, 'The coverage model is dynamic. The company uses predictive analytics to model the ROI of different coverage strategies and AI to route leads to the best rep.', 'Sales Expense to Revenue Ratio', '< 30%');

-- D2 -> C201 -> L201002: Territory & Quota Planning
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L201002', 'Lever', 1, 'There are no formal territories ("jump ball"). Quotas are a "peanut butter spread" of the company number.', 'Quota Attainment Percentage', '< 30%'),
('L201002', 'Lever', 2, 'Territories are defined based on simple geography. Quotas are set based on a simple "last year + X%" model. The process is managed in spreadsheets.', 'Quota Attainment Percentage', '30-50%'),
('L201002', 'Lever', 3, 'The company begins to use historical account data to create more balanced territories. The territory and quota plan is managed within the CRM.', 'Quota Attainment Percentage', '50-65%'),
('L201002', 'Lever', 4, 'A dedicated sales planning tool is used to design and optimize territories and quotas using historical and third-party market potential data.', 'Quota Attainment Percentage', '65-80%'),
('L201002', 'Lever', 5, 'The territory and quota plan is dynamic and predictive. The company uses AI-powered tools to model territory scenarios and set quotas with high accuracy.', 'Quota Attainment Percentage', '> 80%');

-- D2 -> C201 -> L201003: Sales Compensation & Incentives
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L201003', 'Lever', 1, 'Compensation is a simple, flat commission rate on all revenue. The plan does not motivate specific behaviors.', 'Voluntary Rep Attrition', '> 25%'),
('L201003', 'Lever', 2, 'The compensation plan includes accelerators for over-performance. The plan is documented but calculated manually in a spreadsheet.', 'Voluntary Rep Attrition', '20-25%'),
('L201003', 'Lever', 3, 'Sales compensation software is used to automate the calculation of commissions. The plan includes different commission rates for different products.', 'Voluntary Rep Attrition', '15-20%'),
('L201003', 'Lever', 4, 'The sales compensation plan is a strategic tool, designed by a cross-functional team and modeled to drive specific outcomes (e.g., new logos).', 'Voluntary Rep Attrition', '10-15%'),
('L201003', 'Lever', 5, 'The compensation plan is dynamic and personalized. The company uses AI to model the motivational impact of different plan designs and offer personalized incentives.', 'Voluntary Rep Attrition', '< 10%');

-- D2 -> C201 -> L201004: Sales Forecasting & Analytics
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L201004', 'Lever', 1, 'The forecast is a guess from the head of sales, updated monthly. There is no formal process or data to support it.', 'Forecast Accuracy (Quarterly)', '> +/- 20%'),
('L201004', 'Lever', 2, 'A weekly forecast call is established. The forecast is a manual roll-up of each rep''s subjective opinion, managed in a spreadsheet.', 'Forecast Accuracy (Quarterly)', '+/- 15-20%'),
('L201004', 'Lever', 3, 'The forecast is managed in the CRM. Reps are required to update their forecast category for each opportunity. Basic dashboards track the pipeline.', 'Forecast Accuracy (Quarterly)', '+/- 10-15%'),
('L201004', 'Lever', 4, 'The forecast is a rigorous, data-driven process. Sales Ops uses historical conversion rates to create a statistical forecast to complement the manual roll-up.', 'Forecast Accuracy (Quarterly)', '+/- 5-10%'),
('L201004', 'Lever', 5, 'The company uses an AI-powered forecasting tool that analyzes thousands of data points to generate a highly accurate, real-time forecast.', 'Forecast Accuracy (Quarterly)', '< +/- 5%');

-- D2 -> C201 -> L201005: Sales Process Optimization
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L201005', 'Lever', 1, 'There is no defined sales process. Every rep does things their own way. The process is inefficient and full of manual, administrative tasks.', 'Sales Cycle Length', '> 180 days'),
('L201005', 'Lever', 2, 'A simple sales process with stages is defined in the CRM. Sales Ops begins to manually track basic metrics like the time spent in each stage.', 'Sales Cycle Length', '120-180 days'),
('L201005', 'Lever', 3, 'The sales process is mapped out in detail. Sales Ops uses the CRM to identify bottlenecks (e.g., where deals get stuck).', 'Sales Cycle Length', '90-120 days'),
('L201005', 'Lever', 4, 'Sales process optimization is a formal, data-driven discipline. The company uses process mining tools to analyze the sales cycle and identify opportunities for automation.', 'Sales Cycle Length', '60-90 days'),
('L201005', 'Lever', 5, 'The sales process is intelligent and self-optimizing. The company uses AI to analyze the sales cycle and recommend specific process improvements.', 'Sales Cycle Length', '< 60 days');

-- D2 -> C202 -> L202001: Opportunity Qualification & Deal Reviews
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L202001', 'Lever', 1, 'There is no formal qualification process. Deal reviews are informal "storytelling" sessions. The forecast is full of "happy ears".', 'Win Rate (from Stage 1)', '< 10%'),
('L202001', 'Lever', 2, 'A basic qualification methodology (e.g., BANT) is introduced. Sales managers are expected to conduct a weekly forecast call with their reps.', 'Win Rate (from Stage 1)', '10-15%'),
('L202001', 'Lever', 3, 'A more advanced qualification methodology (e.g., MEDDPICC) is adopted and the required fields are built into the CRM.', 'Win Rate (from Stage 1)', '15-20%'),
('L202001', 'Lever', 4, 'The qualification methodology is deeply embedded in the sales culture. Deal reviews are rigorous, data-driven events where reps are challenged.', 'Win Rate (from Stage 1)', '20-25%'),
('L202001', 'Lever', 5, 'The CRM uses AI to automatically score the health of an opportunity based on rep activity and customer engagement data, flagging at-risk deals.', 'Win Rate (from Stage 1)', '> 25%');

-- D2 -> C202 -> L202002: Sales Methodology & Playbooks
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L202002', 'Lever', 1, 'There is no defined sales methodology. Every rep sells differently, based on their own intuition and experience.', 'Sales Methodology Adoption', '< 20%'),
('L202002', 'Lever', 2, 'A standard sales methodology is selected and the team is trained on it. A basic, one-size-fits-all sales playbook is created in a slide deck.', 'Sales Methodology Adoption', '20-40%'),
('L202002', 'Lever', 3, 'The sales methodology is reinforced through manager coaching and deal reviews. The playbook is expanded for different products and competitors.', 'Sales Methodology Adoption', '40-60%'),
('L202002', 'Lever', 4, 'The sales methodology and playbooks are delivered and managed through a dedicated sales enablement platform, providing contextual guidance.', 'Sales Methodology Adoption', '60-80%'),
('L202002', 'Lever', 5, 'The sales enablement platform uses AI to recommend the specific "play" and content that are most likely to be effective for a given deal.', 'Sales Methodology Adoption', '> 80%');

-- D2 -> C202 -> L202003: Pipeline Velocity & Health Analytics
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L202003', 'Lever', 1, 'There is no analysis of the pipeline. The only metric that matters is the total dollar value of the pipeline.', 'Pipeline Coverage', '< 2x'),
('L202003', 'Lever', 2, 'Sales Ops begins to manually track basic pipeline metrics in a spreadsheet, such as the number of deals in each stage.', 'Pipeline Coverage', '2x - 3x'),
('L202003', 'Lever', 3, 'A set of standard pipeline health dashboards are built in the CRM. The team can track stage-to-stage conversion rates.', 'Pipeline Coverage', '3x - 4x'),
('L202003', 'Lever', 4, 'A dedicated BI tool is used to provide deep, self-service analytics on the pipeline, including sophisticated cohort analysis.', 'Pipeline Coverage', '4x - 5x'),
('L202003', 'Lever', 5, 'The company uses AI to analyze the pipeline and predict the "real" value of the pipeline based on the historical performance of similar deals.', 'Pipeline Coverage', '> 5x');

-- D2 -> C202 -> L202004: Value Engineering & Proof of Concept (POC)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L202004', 'Lever', 1, 'There is no formal process. A developer is pulled in at the last minute to do a "hero mode" POC.', 'POC to Close Win Rate', '< 30%'),
('L202004', 'Lever', 2, 'A dedicated Presales or Sales Engineering (SE) team is created. They have a standard demo environment and a basic ROI calculator in a spreadsheet.', 'POC to Close Win Rate', '30-45%'),
('L202004', 'Lever', 3, 'The SE team has a formal process for managing POCs, with clear entry and exit criteria. The ROI calculator is more sophisticated.', 'POC to Close Win Rate', '45-60%'),
('L202004', 'Lever', 4, 'The Value Engineering function is a strategic part of the sales team, building detailed, board-ready business cases. The POC process is managed on a dedicated platform.', 'POC to Close Win Rate', '60-75%'),
('L202004', 'Lever', 5, 'The value engineering and POC process is intelligent and automated. The company has a self-service ROI calculator and automated POC provisioning.', 'POC to Close Win Rate', '> 75%');

-- D2 -> C203 -> L203001: Strategic Account Planning
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L203001', 'Lever', 1, 'There is no account planning. The team only engages with the customer a few weeks before the renewal is due.', 'Expansion Revenue from Key Accounts', '< 5% of total ARR'),
('L203001', 'Lever', 2, 'A basic account plan template is created in a slide deck. It is filled out inconsistently by the account managers for their top accounts.', 'Expansion Revenue from Key Accounts', '5-10%'),
('L203001', 'Lever', 3, 'The account planning process is a formal, annual exercise. The account plans are stored in the CRM and are reviewed by sales management.', 'Expansion Revenue from Key Accounts', '10-15%'),
('L203001', 'Lever', 4, 'Account planning is a continuous, collaborative process that involves the customer. The account plan is a living document managed on a dedicated platform.', 'Expansion Revenue from Key Accounts', '15-20%'),
('L203001', 'Lever', 5, 'The account planning process is intelligent. The system uses AI to analyze customer and market data to recommend specific growth strategies.', 'Expansion Revenue from Key Accounts', '> 20%');

-- D2 -> C203 -> L203002: Renewal & Retention Management
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L203002', 'Lever', 1, 'Renewals are managed in a spreadsheet. The process is reactive, and the team is often surprised by churn.', 'Gross Revenue Retention (GRR)', '< 80%'),
('L203002', 'Lever', 2, 'A dedicated renewals manager or team is created. They have a renewal forecast, but it is managed manually in a spreadsheet.', 'Gross Revenue Retention (GRR)', '80-85%'),
('L203002', 'Lever', 3, 'The renewal process is managed in the CRM or a dedicated Customer Success platform. Automated alerts are used to notify the team of upcoming renewals.', 'Gross Revenue Retention (GRR)', '85-90%'),
('L203002', 'Lever', 4, 'The renewal process is a data-driven, programmatic motion. The team uses customer health data to identify at-risk renewals and proactively intervene.', 'Gross Revenue Retention (GRR)', '90-95%'),
('L203002', 'Lever', 5, 'The renewal process is predictive. The company uses an AI-powered model that generates a highly accurate churn risk score for every customer.', 'Gross Revenue Retention (GRR)', '> 95%');

-- D2 -> C203 -> L203003: Expansion (Upsell/Cross-sell) Plays
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L203003', 'Lever', 1, 'Expansion revenue is accidental. It happens when a customer calls and asks to buy more. There is no proactive effort.', 'Net Revenue Retention (NRR)', '< 90%'),
('L203003', 'Lever', 2, 'The account management team has a basic quota for expansion revenue. They are trained on the basics of the product portfolio.', 'Net Revenue Retention (NRR)', '90-100%'),
('L203003', 'Lever', 3, 'A set of basic expansion plays are documented (e.g., "the end-of-year license true-up play"). The team is given a list of potential cross-sell targets.', 'Net Revenue Retention (NRR)', '100-110%'),
('L203003', 'Lever', 4, 'Expansion is a data-driven, programmatic motion. The team uses product usage data to identify customers who are good candidates for an upsell.', 'Net Revenue Retention (NRR)', '110-125%'),
('L203003', 'Lever', 5, 'The expansion motion is intelligent. The system uses AI to analyze customer data and recommend the specific upsell or cross-sell play that is most likely to succeed.', 'Net Revenue Retention (NRR)', '> 125%');

-- D2 -> C203 -> L203004: Executive Business Reviews (EBRs)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L203004', 'Lever', 1, 'There is no formal process for meeting with customer executives. The relationship is tactical and focused on the day-to-day user.', 'Executive Sponsor Engagement', 'Mostly Red'),
('L203004', 'Lever', 2, 'The account manager has a basic, one-size-fits-all slide deck that they use for ad-hoc customer meetings. The meetings are informal and tactical.', 'Executive Sponsor Engagement', 'Mostly Yellow'),
('L203004', 'Lever', 3, 'A formal EBR program is established for top-tier customers. There is a standard template and a defined cadence. The focus is on reviewing past performance.', 'Executive Sponsor Engagement', 'Mix of Yellow/Green'),
('L203004', 'Lever', 4, 'The EBR is a strategic, forward-looking conversation. The account team prepares a detailed, data-driven presentation that is tailored to the customer''s specific business goals.', 'Executive Sponsor Engagement', 'Mostly Green'),
('L203004', 'Lever', 5, 'The EBR is an intelligent, value-driven experience. The presentation is automatically generated by a platform that pulls in real-time data on the customer''s usage and ROI.', 'Executive Sponsor Engagement', 'All Green');

-- D2 -> C204 -> L204001: Sales Onboarding & Continuous Training
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L204001', 'Lever', 1, 'There is no formal onboarding or training. New reps are given a laptop and a phone list and learn by "shadowing" a senior rep.', 'New Hire Time to Productivity', '> 12 months'),
('L204001', 'Lever', 2, 'A formal onboarding "bootcamp" is created for new hires. It is a one-time, classroom-style training event. Ongoing training is limited to ad-hoc webinars.', 'New Hire Time to Productivity', '9-12 months'),
('L204001', 'Lever', 3, 'A blended learning approach is used for onboarding, combining classroom training with online courses in an LMS. A formal sales kick-off (SKO) is held annually.', 'New Hire Time to Productivity', '6-9 months'),
('L204001', 'Lever', 4, 'A dedicated sales enablement platform is used to deliver and track a continuous learning program. The impact of training is measured.', 'New Hire Time to Productivity', '4-6 months'),
('L204001', 'Lever', 5, 'The learning experience is hyper-personalized. The platform uses AI to create a personalized learning path for each rep based on their performance data.', 'New Hire Time to Productivity', '< 4 months');

-- D2 -> C204 -> L204002: Sales Coaching Program
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L204002', 'Lever', 1, 'There is no formal coaching. Managers act as "super reps" or deal inspectors. "Coaching" is a reactive, "what''s the update on this deal?" conversation.', 'Manager Coaching Time', '< 1 hour'),
('L204002', 'Lever', 2, 'A basic coaching framework is introduced to sales managers. They are encouraged to spend more time coaching, but there is no formal process or accountability.', 'Manager Coaching Time', '1-2 hours'),
('L204002', 'Lever', 3, 'A formal coaching program is established with a defined rhythm (e.g., a weekly coaching session with each rep). Managers are formally trained on how to be effective coaches.', 'Manager Coaching Time', '2-3 hours'),
('L204002', 'Lever', 4, 'A conversation intelligence tool is implemented to record and analyze sales calls. This provides the raw material for managers to conduct data-driven, evidence-based coaching sessions.', 'Manager Coaching Time', '3-4 hours'),
('L204002', 'Lever', 5, 'The coaching process is intelligent and data-driven. The conversation intelligence platform uses AI to automatically identify "coachable moments" in sales calls.', 'Manager Coaching Time', '> 4 hours');

-- D2 -> C204 -> L204003: Sales Content & Tools (CRM, etc.)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L204003', 'Lever', 1, 'The only tool is a basic CRM, which is used as a simple rolodex. There is no formal sales content; reps create their own.', 'Rep CRM Adoption Rate', '< 40%'),
('L204003', 'Lever', 2, 'The CRM is configured with a basic sales process. A central repository (e.g., SharePoint) is created for sales content.', 'Rep CRM Adoption Rate', '40-60%'),
('L204003', 'Lever', 3, 'A sales engagement platform is implemented to automate outreach. The sales content is organized by product and content type.', 'Rep CRM Adoption Rate', '60-80%'),
('L204003', 'Lever', 4, 'The sales tech stack is managed as a cohesive, integrated platform. A dedicated sales enablement platform is used to deliver and track the usage of content.', 'Rep CRM Adoption Rate', '80-95%'),
('L204003', 'Lever', 5, 'The sales tech stack is intelligent. The sales enablement platform uses AI to recommend the perfect piece of content to a sales rep for each specific deal.', 'Rep CRM Adoption Rate', '> 95%');

-- D2 -> C204 -> L204004: Performance Analytics & Dashboards
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L204004', 'Lever', 1, 'There is no performance measurement beyond the final bookings number. Reps have no visibility into their own performance metrics.', 'Percentage of Reps Above 100% Quota', '< 30%'),
('L204004', 'Lever', 2, 'Sales Ops manually creates basic performance reports in a spreadsheet once a month. The reports are backward-looking and not actionable.', 'Percentage of Reps Above 100% Quota', '30-50%'),
('L204004', 'Lever', 3, 'A set of standard performance dashboards are built in the CRM. Reps and managers can see their performance against their key KPIs.', 'Percentage of Reps Above 100% Quota', '50-65%'),
('L204004', 'Lever', 4, 'A dedicated BI tool is used to provide deep, self-service analytics on sales performance. The team can analyze performance by rep, team, region, and product.', 'Percentage of Reps Above 100% Quota', '65-80%'),
('L204004', 'Lever', 5, 'The performance analytics are predictive. The system can identify reps who are at risk of missing their quota and can recommend specific coaching interventions.', 'Percentage of Reps Above 100% Quota', '> 80%');

-- D3 -> C301 -> L301001: Brand Identity & Positioning
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L301001', 'Lever', 1, 'The brand is simply the company logo, which was designed cheaply. There is no documented positioning. The company tries to be "everything to everyone."', 'Share of Voice (SOV)', '< 5%'),
('L301001', 'Lever', 2, 'A brand style guide exists with rules for logo and color usage. A positioning statement is written down but is often ignored in practice.', 'Share of Voice (SOV)', '5-10%'),
('L301001', 'Lever', 3, 'A Digital Asset Management (DAM) system is used to manage brand assets. The positioning is tested with A/B tests on the website.', 'Share of Voice (SOV)', '10-20%'),
('L301001', 'Lever', 4, 'The brand strategy is a C-level initiative, deeply integrated with corporate strategy. A data-driven messaging framework is used across all GTM teams.', 'Share of Voice (SOV)', '20-40%'),
('L301001', 'Lever', 5, 'The brand is a powerful, predictive asset. AI is used to monitor brand sentiment in real-time and predict emerging narrative trends.', 'Share of Voice (SOV)', '> 40%');

-- ... (This script would continue in this exact format for all remaining levers in D3 through D9)

-- =================================================================
-- LEVER RUBRICS (D3 through D9 Continued)
-- =================================================================

-- D3 -> C301 -> L301002: Corporate Messaging & Narrative
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L301002', 'Lever', 1, 'Messaging is inconsistent, product-focused, and changes frequently. There is no core story, only a list of features and benefits.', 'Message Pull-Through Rate', '< 10%'),
('L301002', 'Lever', 2, 'A standard "corporate pitch" slide deck exists. The messaging is documented but is still heavily focused on product features.', 'Message Pull-Through Rate', '10-25%'),
('L301002', 'Lever', 3, 'A central messaging repository is created to ensure consistency. Key messages are tested on the website and in email campaigns.', 'Message Pull-Through Rate', '25-50%'),
('L301002', 'Lever', 4, 'A formal, data-driven messaging framework (e.g., a "message house") is used by all GTM teams. The corporate narrative is a key part of new hire onboarding.', 'Message Pull-Through Rate', '50-75%'),
('L301002', 'Lever', 5, 'The company''s narrative is so powerful that it defines the market category. The company uses AI to predict which messages will resonate most with different audiences.', 'Message Pull-Through Rate', '> 75%');

-- D3 -> C301 -> L301003: Market & Competitive Intelligence
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L301003', 'Lever', 1, 'Competitive information is gathered ad-hoc by sales reps after losing a deal. There is no formal market analysis.', 'Competitive Win Rate', '< 20%'),
('L301003', 'Lever', 2, 'Competitors are tracked in a spreadsheet. The marketing team creates basic, feature-focused "battle cards" for the sales team.', 'Competitive Win Rate', '20-30%'),
('L301003', 'Lever', 3, 'Automated tools are used to track competitor website changes and press releases. A formal win/loss analysis program is established.', 'Competitive Win Rate', '30-40%'),
('L301003', 'Lever', 4, 'A dedicated market and competitive intelligence function is in place. They use advanced tools and primary research to provide deep, actionable insights.', 'Competitive Win Rate', '40-50%'),
('L301003', 'Lever', 5, 'The company uses AI-powered intelligence platforms to predict competitor moves and to identify emerging market trends before they become mainstream.', 'Competitive Win Rate', '> 50%');

-- D3 -> C301 -> L301004: Analyst & Public Relations
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L301004', 'Lever', 1, 'PR is reactive and focused on damage control or basic product announcements. The company has no relationships with industry analysts.', 'Analyst Report Ranking', 'Not Included'),
('L301004', 'Lever', 2, 'A PR agency is on retainer for press releases. The company occasionally briefs a few friendly industry analysts.', 'Analyst Report Ranking', 'Niche Player'),
('L301004', 'Lever', 3, 'A formal Analyst Relations (AR) program is established. The company begins to build direct relationships with key journalists.', 'Analyst Report Ranking', 'Challenger'),
('L301004', 'Lever', 4, 'The AR program is a strategic function focused on influencing key reports like the Gartner Magic Quadrant. The PR program is focused on thought leadership.', 'Analyst Report Ranking', 'Visionary'),
('L301004', 'Lever', 5, 'The company is a recognized leader in the key analyst reports. The CEO is a sought-after thought leader for top-tier media outlets.', 'Analyst Report Ranking', 'Leader');

-- D3 -> C302 -> L302001: Digital Marketing Engine (SEO/SEM, Social, Web)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L302001', 'Lever', 1, 'The website is a static, online brochure that is rarely updated. There is no investment in SEO, SEM, or social media.', 'Marketing Sourced Pipeline ($)', '< 5% of total pipeline'),
('L302001', 'Lever', 2, 'The company has a modern website built on a CMS and is investing in foundational channels like SEO and Google Ads.', 'Marketing Sourced Pipeline ($)', '5-15%'),
('L302001', 'Lever', 3, 'The website is optimized for conversion using A/B testing tools. The digital channels are managed by a dedicated in-house team or agency.', 'Marketing Sourced Pipeline ($)', '15-30%'),
('L302001', 'Lever', 4, 'The digital marketing engine is a data-driven, integrated system. The website is personalized for different visitor segments.', 'Marketing Sourced Pipeline ($)', '30-50%'),
('L302001', 'Lever', 5, 'The digital engine is predictive and self-optimizing. AI is used to dynamically allocate budget to the highest-performing channels and personalize the website.', 'Marketing Sourced Pipeline ($)', '> 50%');

-- D3 -> C302 -> L302002: Account-Based Marketing (ABM) Programs
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L302002', 'Lever', 1, 'All marketing is broad-based and not targeted to specific accounts. Sales creates a "wish list" with no marketing support.', 'Target Account Pipeline Coverage', '< 5%'),
('L302002', 'Lever', 2, 'A formal target account list is created and agreed upon between sales and marketing. Marketing supports the list with ad-hoc campaigns.', 'Target Account Pipeline Coverage', '5-10%'),
('L302002', 'Lever', 3, 'A dedicated ABM platform is used to run targeted digital advertising and measure account engagement. The team runs 1:Few campaigns.', 'Target Account Pipeline Coverage', '10-25%'),
('L302002', 'Lever', 4, 'ABM is a programmatic, data-driven motion that is tightly integrated between sales and marketing. The team runs highly personalized, 1:1 campaigns.', 'Target Account Pipeline Coverage', '25-50%'),
('L302002', 'Lever', 5, 'The company uses AI and intent data to predict which accounts are in-market to buy right now, and dynamically adds them to the target list.', 'Target Account Pipeline Coverage', '> 50%');

-- D3 -> C302 -> L302003: Campaign Strategy & Execution
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L302003', 'Lever', 1, 'There are no campaigns, only a series of one-off, disconnected tactics. The impact is not measured.', 'Campaign ROI', 'Not Measured'),
('L302003', 'Lever', 2, 'The marketing team runs a few simple, single-channel campaigns per quarter. A basic campaign brief template is created.', 'Campaign ROI', '< 1x'),
('L302003', 'Lever', 3, 'Campaigns are multi-channel and have a defined theme, audience, and goal. A formal campaign calendar is used to coordinate activities.', 'Campaign ROI', '1x - 3x'),
('L302003', 'Lever', 4, 'Campaigns are managed on an integrated platform that allows for sophisticated segmentation and personalization. The ROI of each campaign is measured.', 'Campaign ROI', '3x - 5x'),
('L302003', 'Lever', 5, 'The campaign strategy is dynamic and "always-on." The company uses AI to test and optimize campaign elements in real-time.', 'Campaign ROI', '> 5x');

-- D3 -> C302 -> L302004: Lead Nurturing & Scoring
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L302004', 'Lever', 1, 'All leads are immediately sent to the sales team, regardless of their quality. Sales reps complain that the leads are terrible.', 'MQL to SQL Conversion Rate', '< 5%'),
('L302004', 'Lever', 2, 'A basic, single-stream email nurture is created for all new leads. A marketing person manually reviews new leads.', 'MQL to SQL Conversion Rate', '5-10%'),
('L302004', 'Lever', 3, 'The marketing automation platform is used to run multiple nurture streams. A basic, rules-based lead scoring model is created.', 'MQL to SQL Conversion Rate', '10-20%'),
('L302004', 'Lever', 4, 'The lead nurturing and scoring process is data-driven and dynamic. The scoring model is regularly refined based on which leads actually convert.', 'MQL to SQL Conversion Rate', '20-30%'),
('L302004', 'Lever', 5, 'The system uses AI to deliver a unique, 1:1 journey for each prospect. The lead scoring model is predictive, identifying sales-ready leads with high accuracy.', 'MQL to SQL Conversion Rate', '> 30%');

-- D3 -> C303 -> L303001: Go-to-Market (GTM) Strategy
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L303001', 'Lever', 1, 'There is no formal GTM strategy. Products are "thrown over the wall" from engineering to marketing and sales.', 'New Product Revenue Attainment', '< 50%'),
('L303001', 'Lever', 2, 'A basic GTM checklist is created for product launches. The plan is created by Product Marketing in a silo and is not well-aligned.', 'New Product Revenue Attainment', '50-75%'),
('L303001', 'Lever', 3, 'A formal, cross-functional GTM process is in place for all major launches, led by Product Marketing. The plan is documented and shared.', 'New Product Revenue Attainment', '75-90%'),
('L303001', 'Lever', 4, 'The GTM strategy is a data-driven, C-level initiative. It is a living document that is reviewed and refined quarterly based on performance.', 'New Product Revenue Attainment', '90-110%'),
('L303001', 'Lever', 5, 'The GTM process is intelligent and predictive. The company uses market data and predictive analytics to model the potential impact of different GTM strategies.', 'New Product Revenue Attainment', '> 110%');

-- D3 -> C303 -> L303002: Product Launch (NPI) Process
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L303002', 'Lever', 1, 'Product launches are engineering-led events. The launch date is often a surprise to the marketing and sales teams.', 'On-Time Launch Rate', '< 50%'),
('L303002', 'Lever', 2, 'Product Marketing creates a standard "launch kit" and manages a basic launch plan in a spreadsheet.', 'On-Time Launch Rate', '50-75%'),
('L303002', 'Lever', 3, 'A formal launch tiering model is created to allocate the right level of resources to each launch. A documented NPI checklist is used.', 'On-Time Launch Rate', '75-90%'),
('L303002', 'Lever', 4, 'A dedicated launch manager or a Program Management Office (PMO) is responsible for managing the NPI process in a dedicated tool.', 'On-Time Launch Rate', '90-98%'),
('L303002', 'Lever', 5, 'The NPI process is highly automated and data-driven. The system can predict potential launch risks and proactively alert the launch team.', 'On-Time Launch Rate', '> 98%');

-- D3 -> C303 -> L303003: Sales & Partner Enablement Content
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L303003', 'Lever', 1, 'There is no formal enablement content. Sales reps create their own, often inaccurate, materials.', 'Content Usage Rate', '< 10%'),
('L303003', 'Lever', 2, 'Product Marketing creates a standard set of basic sales tools. The content is stored in a shared folder and is often out of date.', 'Content Usage Rate', '10-25%'),
('L303003', 'Lever', 3, 'A central content repository houses a library of sales collateral. The content is organized by product and content type.', 'Content Usage Rate', '25-50%'),
('L303003', 'Lever', 4, 'A dedicated sales enablement platform is used to deliver and track the usage of content. Data is used to identify which pieces of content are most effective.', 'Content Usage Rate', '50-75%'),
('L303003', 'Lever', 5, 'The content experience is intelligent and personalized. The sales enablement platform uses AI to recommend the perfect piece of content to a sales rep for each specific deal.', 'Content Usage Rate', '> 75%');

-- D3 -> C303 -> L303004: Pricing & Packaging Strategy
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L303004', 'Lever', 1, 'Pricing is based on "cost-plus" or "what the competition charges." There is no formal packaging strategy.', 'Average Revenue Per Account (ARPA)', 'Stagnant or Declining'),
('L303004', 'Lever', 2, 'The company introduces basic, feature-based tiered packaging. Pricing is still largely based on competitor parity.', 'Average Revenue Per Account (ARPA)', 'Slow Growth (<5% YoY)'),
('L303004', 'Lever', 3, 'A formal pricing committee is established. The company begins to conduct basic pricing research (e.g., customer surveys).', 'Average Revenue Per Account (ARPA)', 'Moderate Growth (5-10% YoY)'),
('L303004', 'Lever', 4, 'Pricing and packaging is a data-driven, strategic function. The company uses advanced research techniques (e.g., conjoint analysis) to quantify customer value.', 'Average Revenue Per Account (ARPA)', 'Strong Growth (10-20% YoY)'),
('L303004', 'Lever', 5, 'The pricing and packaging is dynamic and intelligent. The company uses AI to model the revenue impact of different pricing scenarios.', 'Average Revenue Per Account (ARPA)', '> 20% YoY');

-- D3 -> C304 -> L304001: Marketing Technology Stack (MarTech)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L304001', 'Lever', 1, 'The MarTech stack is a patchwork of disconnected, free tools. Data is siloed and cannot be shared between systems.', 'Lead to Revenue Velocity', '> 180 days'),
('L304001', 'Lever', 2, 'The company invests in a foundational marketing automation platform (MAP) and CRM. The initial implementation is basic and not well-integrated.', 'Lead to Revenue Velocity', '120-180 days'),
('L304001', 'Lever', 3, 'A dedicated MOPs team is responsible for managing the MarTech stack. The MAP and CRM are tightly integrated.', 'Lead to Revenue Velocity', '90-120 days'),
('L304001', 'Lever', 4, 'The MarTech stack is managed as a cohesive, integrated platform. The MOPs team has a multi-year roadmap for the stack.', 'Lead to Revenue Velocity', '60-90 days'),
('L304001', 'Lever', 5, 'The MarTech stack is intelligent and self-optimizing. The company uses AI-powered tools to automate data governance and optimize campaign performance.', 'Lead to Revenue Velocity', '< 60 days');

-- D3 -> C304 -> L304002: Marketing Analytics & ROI Attribution
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L304002', 'Lever', 1, 'Reporting is limited to vanity metrics like website visits and email opens. The team cannot answer, "How many sales did that campaign generate?"', 'Marketing Influenced Revenue (%)', '< 10%'),
('L304002', 'Lever', 2, 'The team can report on the volume of Marketing Qualified Leads (MQLs) generated. A basic "first touch" attribution model is used.', 'Marketing Influenced Revenue (%)', '10-25%'),
('L304002', 'Lever', 3, 'A set of standard marketing dashboards are built in a BI tool. A more advanced, linear multi-touch attribution model is implemented.', 'Marketing Influenced Revenue (%)', '25-40%'),
('L304002', 'Lever', 4, 'Marketing analytics is a strategic function. The team uses a data-driven, multi-touch attribution model to measure the ROI of all marketing investments.', 'Marketing Influenced Revenue (%)', '40-60%'),
('L304002', 'Lever', 5, 'Marketing analytics is predictive. The team uses machine learning to forecast the pipeline impact of their marketing plan. The attribution model is algorithmic.', 'Marketing Influenced Revenue (%)', '> 60%');

-- D3 -> C304 -> L304003: Budgeting & Financial Planning
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L304003', 'Lever', 1, 'The marketing budget is a single, top-down number that is not based on any plan. Spend is not tracked.', 'Pipeline per Marketing Dollar', '< $3'),
('L304003', 'Lever', 2, 'An annual marketing budget is created in a spreadsheet. It is broken down by high-level categories. Spend is tracked manually.', 'Pipeline per Marketing Dollar', '$3 - $5'),
('L304003', 'Lever', 3, 'A formal marketing budget is managed and tracked in a financial planning tool. The team can report on budget-vs-actuals on a monthly basis.', 'Pipeline per Marketing Dollar', '$5 - $8'),
('L304003', 'Lever', 4, 'The marketing budget is a detailed, data-driven plan that is tightly aligned with the pipeline and revenue goals. The team runs a quarterly planning process.', 'Pipeline per Marketing Dollar', '$8 - $12'),
('L304003', 'Lever', 5, 'The marketing budget is dynamic and predictive. The company uses AI-powered models to forecast the ROI of different budget scenarios and recommend reallocating spend.', 'Pipeline per Marketing Dollar', '> $12');

-- D3 -> C304 -> L304004: Data Management & Compliance
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L304004', 'Lever', 1, 'The marketing database is a mess of incomplete, inaccurate, and duplicated records. Privacy compliance is not considered.', 'Usable Marketing Database (%)', '< 50%'),
('L304004', 'Lever', 2, 'A basic data hygiene process is established (e.g., a quarterly de-duplication project). The team begins to understand privacy regulations.', 'Usable Marketing Database (%)', '50-70%'),
('L304004', 'Lever', 3, 'Marketing data is enriched with third-party data. A formal process for managing privacy compliance (e.g., consent management) is implemented.', 'Usable Marketing Database (%)', '70-85%'),
('L304004', 'Lever', 4, 'A dedicated data management platform (e.g., a CDP) is used to automate data hygiene, enrichment, and segmentation.', 'Usable Marketing Database (%)', '85-95%'),
('L304004', 'Lever', 5, 'The data management process is intelligent and automated. AI is used to automatically identify and fix data quality issues and ensure continuous compliance.', 'Usable Marketing Database (%)', '> 95%');

-- ... (This script would continue in this exact format for all remaining levers in D4 through D9)
-- =================================================================
-- LEVER RUBRICS (D4 through D9 Continued)
-- =================================================================

-- D4 -> C401 -> L401001: Partner Program Design & Tiers
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L401001', 'Lever', 1, 'There is no formal program. Partnering is based on informal, one-off agreements.', 'Partner Program Engagement Score', '< 20%'),
('L401001', 'Lever', 2, 'A basic, single-tier partner program is created with a simple agreement. The benefits are minimal and not well-defined.', 'Partner Program Engagement Score', '20-40%'),
('L401001', 'Lever', 3, 'A multi-tiered partner program is established with clear benefits and requirements for each tier. The program is managed in a PRM system.', 'Partner Program Engagement Score', '40-60%'),
('L401001', 'Lever', 4, 'The partner program is a strategic, data-driven framework. The benefits are significant and are directly tied to a partner''s performance and investment.', 'Partner Program Engagement Score', '60-80%'),
('L401001', 'Lever', 5, 'The partner program is dynamic and personalized. The system can offer personalized incentives and benefits to partners based on their unique business model.', 'Partner Program Engagement Score', '> 80%');

-- D4 -> C401 -> L401002: Partner Recruitment & Onboarding
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L401002', 'Lever', 1, 'Partner recruitment is reactive. The company signs up any partner who expresses interest, regardless of their fit.', 'New Partner Time to First Deal', '> 12 months'),
('L401002', 'Lever', 2, 'The partner manager proactively reaches out to potential recruits based on a basic ideal partner profile. Onboarding consists of an email with a welcome kit.', 'New Partner Time to First Deal', '9-12 months'),
('L401002', 'Lever', 3, 'The partner recruitment and onboarding process is managed in a PRM. The onboarding process includes a basic, automated, online training module.', 'New Partner Time to First Deal', '6-9 months'),
('L401002', 'Lever', 4, 'A dedicated partner recruitment team is in place. They use data to identify and target high-potential recruits. The onboarding is a structured, 90-day program.', 'New Partner Time to First Deal', '3-6 months'),
('L401002', 'Lever', 5, 'The partner recruitment process is predictive. The company uses AI to analyze market data and identify the partners who have the highest potential for success.', 'New Partner Time to First Deal', '< 3 months');

-- D4 -> C401 -> L401003: Partner Enablement & Certification
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L401003', 'Lever', 1, 'There is no formal partner enablement. Partners are expected to learn on their own.', 'Percentage of Certified Partner Reps', '< 5%'),
('L401003', 'Lever', 2, 'Partners are invited to the same webinars that are offered to the sales team. Basic sales collateral is available in a shared folder.', 'Percentage of Certified Partner Reps', '5-15%'),
('L401003', 'Lever', 3, 'A dedicated partner training portal is created within the PRM. It includes a library of on-demand, online courses and a basic certification exam.', 'Percentage of Certified Partner Reps', '15-30%'),
('L401003', 'Lever', 4, 'A formal partner enablement program is in place with dedicated staff. The program includes a mix of online and instructor-led training.', 'Percentage of Certified Partner Reps', '30-50%'),
('L401003', 'Lever', 5, 'The partner learning experience is personalized and predictive. The system uses AI to recommend specific training modules to partner reps based on their role.', 'Percentage of Certified Partner Reps', '> 50%');

-- D4 -> C401 -> L401004: Partner Marketing & Market Development Funds (MDF)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L401004', 'Lever', 1, 'There is no partner marketing support. Partners are on their own to generate leads.', 'Partner Sourced Pipeline ($)', '< 5% of total pipeline'),
('L401004', 'Lever', 2, 'A basic set of co-brandable datasheets and email templates are provided to partners. MDF is offered on an ad-hoc basis.', 'Partner Sourced Pipeline ($)', '5-10%'),
('L401004', 'Lever', 3, 'A formal MDF program is established with a documented proposal and claims process. A library of co-brandable marketing campaigns is available in the PRM.', 'Partner Sourced Pipeline ($)', '10-20%'),
('L401004', 'Lever', 4, 'The partner marketing program is a strategic, data-driven function. The MDF program is managed on the PRM platform, which provides clear visibility into the ROI.', 'Partner Sourced Pipeline ($)', '20-35%'),
('L401004', 'Lever', 5, 'The company provides a "marketing-in-a-box" platform that allows partners to easily execute sophisticated, multi-channel digital marketing campaigns.', 'Partner Sourced Pipeline ($)', '> 35%');

-- D4 -> C401 -> L401005: Partner Operations & Portal (PRM)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L401005', 'Lever', 1, 'There is no PRM. The partner program is managed in a spreadsheet. Communication with partners is done via ad-hoc emails.', 'Partner Satisfaction (PSAT)', '< 6.0'),
('L401005', 'Lever', 2, 'A basic, entry-level PRM is implemented. It is used primarily for partner registration and as a simple content repository.', 'Partner Satisfaction (PSAT)', '6.0 - 7.0'),
('L401005', 'Lever', 3, 'The PRM is a core system for the partner team. It is used to manage deal registration, MDF, and partner training.', 'Partner Satisfaction (PSAT)', '7.0 - 8.0'),
('L401005', 'Lever', 4, 'The PRM is a true partner engagement platform. It is deeply integrated with the company''s CRM and marketing automation platform.', 'Partner Satisfaction (PSAT)', '8.0 - 9.0'),
('L401005', 'Lever', 5, 'The partner experience is intelligent and personalized. The PRM uses AI to provide a personalized dashboard for each partner.', 'Partner Satisfaction (PSAT)', '> 9.0');

-- D4 -> C402 -> L402001: Reseller & Distributor Channels (Sell-Through)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L402001', 'Lever', 1, 'There is no reseller channel. The company may have a few, informal resellers, but there is no formal program.', 'Channel Revenue as % of Total Revenue', '0%'),
('L402001', 'Lever', 2, 'A basic, single-tier reseller program is created with a standard discount. A channel manager is hired to recruit and manage resellers.', 'Channel Revenue as % of Total Revenue', '< 5%'),
('L402001', 'Lever', 3, 'A formal deal registration process is managed in the PRM to reduce channel conflict. The program has tiered margins to reward top performers.', 'Channel Revenue as % of Total Revenue', '5-15%'),
('L402001', 'Lever', 4, 'The reseller channel is a mature, programmatic business. The company has a two-tier distribution model in key regions. The channel is a predictable source of revenue.', 'Channel Revenue as % of Total Revenue', '15-30%'),
('L402001', 'Lever', 5, 'The reseller channel is intelligent and optimized. The company uses data and analytics to identify the most profitable reseller partners and provide targeted support.', 'Channel Revenue as % of Total Revenue', '> 30%');

-- D4 -> C402 -> L402002: Managed Service Provider (MSP) Program
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L402002', 'Lever', 1, 'There is no MSP program. The company may have a few informal relationships with MSPs, but there is no formal program or pricing.', 'MSP Revenue as % of Total Revenue', '0%'),
('L402002', 'Lever', 2, 'A basic, single-tier MSP program is created. The pricing model is ad-hoc and not designed for the MSP business model.', 'MSP Revenue as % of Total Revenue', '< 2%'),
('L402002', 'Lever', 3, 'A formal MSP program is created with a dedicated, usage-based pricing model and a specific agreement. A dedicated program manager is hired.', 'MSP Revenue as % of Total Revenue', '2-8%'),
('L402002', 'Lever', 4, 'The MSP program is a strategic, high-growth channel. The company has a dedicated team and a set of APIs and tools to help MSPs integrate the product.', 'MSP Revenue as % of Total Revenue', '8-20%'),
('L402002', 'Lever', 5, 'The MSP program is a key competitive advantage. The company provides a multi-tenant management platform that makes it incredibly easy for MSPs to manage their customers.', 'MSP Revenue as % of Total Revenue', '> 20%');

-- D4 -> C402 -> L402003: Co-Sell Motion & Rules of Engagement (Sell-With)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L402003', 'Lever', 1, 'There is no formal co-sell process. This often leads to channel conflict over who gets credit and compensation for a deal.', 'Partner Influenced Revenue (%)', '< 5%'),
('L402003', 'Lever', 2, 'A basic deal registration process is established to reduce channel conflict. Co-selling is informal and depends on personal relationships between reps.', 'Partner Influenced Revenue (%)', '5-15%'),
('L402003', 'Lever', 3, 'The Rules of Engagement (ROE) for co-selling are documented and communicated to the sales team. A basic process for sharing leads with partners is in place.', 'Partner Influenced Revenue (%)', '15-30%'),
('L402003', 'Lever', 4, 'Co-selling is a formal, programmatic motion. The CRM and PRM are integrated, allowing for seamless co-selling workflows and pipeline sharing.', 'Partner Influenced Revenue (%)', '30-50%'),
('L402003', 'Lever', 5, 'The GTM motion is ecosystem-led. AI is used to match the right partner to the right opportunity based on their skills, relationships, and past performance.', 'Partner Influenced Revenue (%)', '> 50%');

-- D4 -> C402 -> L402004: Channel Conflict Resolution
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L402004', 'Lever', 1, 'Channel conflict is rampant and is resolved by the loudest voice or the most senior person involved. Partners do not trust the company.', 'Channel Conflict Rate', '> 10'),
('L402004', 'Lever', 2, 'A basic deal registration process is the only mechanism for managing conflict. Disputes are handled on a case-by-case basis by the sales manager.', 'Channel Conflict Rate', '5-10'),
('L402004', 'Lever', 3, 'A formal Rules of Engagement (ROE) document is created that includes a specific section on conflict resolution. A formal escalation path is defined.', 'Channel Conflict Rate', '2-5'),
('L402004', 'Lever', 4, 'A dedicated channel council or "deal desk" is established to act as a neutral third party to resolve channel conflicts. The process is transparent.', 'Channel Conflict Rate', '1-2'),
('L402004', 'Lever', 5, 'The system is designed to prevent conflict before it happens. The CRM and PRM have automated rules that prevent the same opportunity from being worked by multiple channels.', 'Channel Conflict Rate', '0');

-- D4 -> C403 -> L403001: Technology Partner (ISV) Program
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L403001', 'Lever', 1, 'The company has a few informal technology partnerships, usually driven by a specific customer request. There is no formal program or developer support.', 'Number of Certified Integrations', '< 5'),
('L403001', 'Lever', 2, 'A formal Technology/ISV Partner Program is created. A basic set of APIs are documented. The primary goal is a joint press release.', 'Number of Certified Integrations', '5-15'),
('L403001', 'Lever', 3, 'A developer portal with APIs and SDKs is created to support technology partners. The company launches a "marketplace" or "app store".', 'Number of Certified Integrations', '15-50'),
('L403001', 'Lever', 4, 'The ISV program is a strategic function with a dedicated team. The company provides deep technical support and co-marketing benefits to its key ISV partners.', 'Number of Certified Integrations', '50-150'),
('L403001', 'Lever', 5, 'The company''s platform is the "center of gravity" in its market. The ISV ecosystem is a key competitive advantage and a major driver of customer adoption.', 'Number of Certified Integrations', '> 150');

-- D4 -> C403 -> L403002: Hyperscaler Alliance Management (AWS, Azure, GCP)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L403002', 'Lever', 1, 'The company is simply a customer of the hyperscaler. There is no formal alliance relationship.', 'Hyperscaler Co-sell Revenue', '$0'),
('L403002', 'Lever', 2, 'The company joins the hyperscaler''s basic partner program. A dedicated Alliance Manager is assigned to the relationship.', 'Hyperscaler Co-sell Revenue', '< $250k'),
('L403002', 'Lever', 3, 'The company achieves a higher-level partner status. The product is listed on the hyperscaler''s marketplace. The team begins to engage in joint marketing.', 'Hyperscaler Co-sell Revenue', '$250k - $1.5M'),
('L403002', 'Lever', 4, 'The company is a top-tier, strategic partner for the hyperscaler. There is a formal, joint business plan with co-sell revenue targets.', 'Hyperscaler Co-sell Revenue', '$1.5M - $10M'),
('L403002', 'Lever', 5, 'The company is a key strategic partner for the hyperscaler in its market category. The business is deeply intertwined, with joint product roadmaps.', 'Hyperscaler Co-sell Revenue', '> $10M');

-- D4 -> C403 -> L403003: Marketplace Strategy & Integration
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L403003', 'Lever', 1, 'The product is not listed on any marketplace.', 'Percentage of Deals via Marketplace', '0%'),
('L403003', 'Lever', 2, 'The product has a basic "BYOL" (Bring Your Own License) listing on a marketplace. It is a marketing listing only, with no transaction capability.', 'Percentage of Deals via Marketplace', '< 1%'),
('L403003', 'Lever', 3, 'The product is transactable on the marketplace. Customers can purchase the product using their committed spend with the hyperscaler.', 'Percentage of Deals via Marketplace', '1-5%'),
('L403003', 'Lever', 4, 'The marketplace is a core part of the sales compensation plan. The sales team is trained and incentivized to sell through the marketplace.', 'Percentage of Deals via Marketplace', '5-15%'),
('L403003', 'Lever', 5, 'The marketplace is a seamless, intelligent channel. The company uses AI to identify the customers in its pipeline who have a large committed spend.', 'Percentage of Deals via Marketplace', '> 15%');

-- D4 -> C403 -> L403004: Global System Integrator (GSI) Partnerships
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L403004', 'Lever', 1, 'There are no relationships with GSIs.', 'GSI Influenced Revenue', '$0'),
('L403004', 'Lever', 2, 'The company has a few informal, project-based relationships with a GSI.', 'GSI Influenced Revenue', '< $1M'),
('L403004', 'Lever', 3, 'A formal GSI partner program is created. A dedicated alliance manager is hired to focus on building relationships with a few key GSIs.', 'GSI Influenced Revenue', '$1M - $5M'),
('L403004', 'Lever', 4, 'The company has a dedicated GSI team and a formal, joint business plan with its top GSI partners. The product is a core part of a GSI''s service offering.', 'GSI Influenced Revenue', '$5M - $20M'),
('L403004', 'Lever', 5, 'The company is a top-tier, strategic partner for its key GSIs. The GSI has a dedicated practice and thousands of certified consultants.', 'GSI Influenced Revenue', '> $20M');

-- D5 -> C501 -> L501001: Product Strategy & Vision
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L501001', 'Lever', 1, 'The "strategy" is a list of feature requests from the sales team or the CEO. There is no long-term view.', 'Product Line Profitability', '< 60%'),
('L501001', 'Lever', 2, 'A basic product vision statement is written down. The strategy is a one-year plan that is largely a feature-focused roadmap.', 'Product Line Profitability', '60-70%'),
('L501001', 'Lever', 3, 'A formal product strategy document is created that includes market analysis, personas, and strategic themes. It is reviewed annually.', 'Product Line Profitability', '70-75%'),
('L501001', 'Lever', 4, 'The product strategy is a data-driven, C-level initiative. It is a living document that is tightly integrated with the financial plan.', 'Product Line Profitability', '75-80%'),
('L501001', 'Lever', 5, 'The product strategy is predictive. The company uses AI to analyze market trends and predict future customer needs.', 'Product Line Profitability', '> 80%');

-- D5 -> C501 -> L501002: Roadmap Planning & Prioritization
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L501002', 'Lever', 1, 'The roadmap is managed in a spreadsheet or a slide deck. Prioritization is based on the "loudest voice" or the "biggest deal."', 'Roadmap Adherence', '< 50%'),
('L501002', 'Lever', 2, 'A formal product backlog is managed in a tool like Jira. A basic prioritization framework (e.g., RICE score) is used inconsistently.', 'Roadmap Adherence', '50-70%'),
('L501002', 'Lever', 3, 'A formal product roadmap is created with a 2-3 quarter view, organized around strategic themes. The prioritization process is documented.', 'Roadmap Adherence', '70-85%'),
('L501002', 'Lever', 4, 'The roadmap is an outcome-based plan managed on a dedicated product management platform. Prioritization is data-driven, using a weighted scoring model.', 'Roadmap Adherence', '85-95%'),
('L501002', 'Lever', 5, 'The roadmap planning process is intelligent. The system uses AI to analyze customer feedback and product usage data to recommend features.', 'Roadmap Adherence', '> 95%');

-- D5 -> C501 -> L501003: Market & User Research
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L501003', 'Lever', 1, 'There is no formal research. Product decisions are based on the internal team''s assumptions about what the user wants.', 'Product Net Promoter Score (NPS)', '< 0'),
('L501003', 'Lever', 2, 'The product managers conduct occasional, ad-hoc customer interviews. There is no formal process for conducting or synthesizing research.', 'Product Net Promoter Score (NPS)', '0 - 10'),
('L501003', 'Lever', 3, 'A formal user research program is established. The company uses a mix of qualitative (interviews) and quantitative (surveys, usability tests) methods.', 'Product Net Promoter Score (NPS)', '10 - 25'),
('L501003', 'Lever', 4, 'User research is a core part of the product development process. Every major new feature is validated with users before it is built.', 'Product Net Promoter Score (NPS)', '25 - 40'),
('L501003', 'Lever', 5, 'The user research process is continuous and intelligent. The company uses AI-powered tools to analyze thousands of pieces of customer feedback in real-time.', 'Product Net Promoter Score (NPS)', '> 40');

-- D5 -> C501 -> L501004: Product Lifecycle Management
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L501004', 'Lever', 1, 'There is no formal process. Old products and features are never retired, leading to a bloated, difficult-to-maintain product.', 'Percentage of Active Users on Current Version', '< 60%'),
('L501004', 'Lever', 2, 'The product team begins to track the performance of different products and features. The first EOL of a minor feature is managed as an ad-hoc project.', 'Percentage of Active Users on Current Version', '60-75%'),
('L501004', 'Lever', 3, 'A formal product lifecycle management framework is adopted. A formal EOL process is created and communicated to customers.', 'Percentage of Active Users on Current Version', '75-90%'),
('L501004', 'Lever', 4, 'The product portfolio is actively managed as a strategic asset. The company uses data on adoption, revenue, and cost-to-serve to make data-driven decisions.', 'Percentage of Active Users on Current Version', '90-98%'),
('L501004', 'Lever', 5, 'The product lifecycle management is predictive. The system can analyze usage and market data to predict when a feature is declining in value.', 'Percentage of Active Users on Current Version', '> 98%');

-- D5 -> C502 -> L502001: Cloud Native Architecture
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L502001', 'Lever', 1, 'The product is a single, monolithic application that was designed for an on-premise environment. It is difficult to scale and deploy.', 'Mean Time To Recovery (MTTR)', '> 4 hours'),
('L502001', 'Lever', 2, 'The monolith is "lifted-and-shifted" to run on a virtual machine in the cloud. The application is containerized to make it easier to deploy.', 'Mean Time To Recovery (MTTR)', '1-4 hours'),
('L502001', 'Lever', 3, 'A formal microservices architecture is adopted. New features are built as independent services. A container orchestration platform (e.g., Kubernetes) is used.', 'Mean Time To Recovery (MTTR)', '30-60 minutes'),
('L502001', 'Lever', 4, 'The company is fully cloud-native. The application is composed of hundreds of fine-grained microservices and serverless functions.', 'Mean Time To Recovery (MTTR)', '5-30 minutes'),
('L502001', 'Lever', 5, 'The architecture is self-optimizing. The platform can dynamically adjust its own resources and configurations based on real-time performance data.', 'Mean Time To Recovery (MTTR)', '< 5 minutes');

-- D5 -> C502 -> L502002: API Strategy & Design
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L502002', 'Lever', 1, 'There are no public APIs. Any integrations are done via direct database connections or one-off, custom scripts.', 'API Adoption Rate', '0%'),
('L502002', 'Lever', 2, 'The company exposes a few, basic internal APIs for specific integrations. The APIs are poorly documented and not versioned.', 'API Adoption Rate', '< 5%'),
('L502002', 'Lever', 3, 'A formal, public API is launched. The company adopts an API design standard (e.g., REST). The API is documented on a developer portal.', 'API Adoption Rate', '5-15%'),
('L502002', 'Lever', 4, 'The company has an "API-first" culture. The API is a core part of the product strategy and a key driver of partner and customer adoption.', 'API Adoption Rate', '15-30%'),
('L502002', 'Lever', 5, 'The company uses an API management platform that provides deep analytics on API usage and can automatically detect and block security threats.', 'API Adoption Rate', '> 30%');

-- D5 -> C502 -> L502003: Scalability & Performance Design
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L502003', 'Lever', 1, 'The application is slow and frequently crashes under load. There is no performance testing.', 'Application Availability (Uptime)', '< 99.0%'),
('L502003', 'Lever', 2, 'The team begins to conduct basic, manual load testing before major releases. Performance issues are addressed reactively.', 'Application Availability (Uptime)', '99.0% - 99.5%'),
('L502003', 'Lever', 3, 'A dedicated performance engineering function is created. A formal performance testing process is integrated into the CI/CD pipeline.', 'Application Availability (Uptime)', '99.5% - 99.9%'),
('L502003', 'Lever', 4, 'The company has a deep, data-driven understanding of its application''s performance characteristics. The architecture is designed to scale horizontally.', 'Application Availability (Uptime)', '99.9% - 99.99%'),
('L502003', 'Lever', 5, 'The application is self-scaling and self-healing. The platform can automatically provision new resources to handle a spike in traffic.', 'Application Availability (Uptime)', '> 99.99%');

-- D5 -> C502 -> L502004: Technology Selection & Standards
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L502004', 'Lever', 1, 'Developers can use any technology they want. The result is a complex and inconsistent technology stack that is difficult to maintain.', 'Technology Stack Consistency', '< 40%'),
('L502004', 'Lever', 2, 'A basic set of technology standards are documented. The process for approving new technologies is informal and ad-hoc.', 'Technology Stack Consistency', '40-60%'),
('L502004', 'Lever', 3, 'A formal Architecture Review Board is established to govern technology decisions. A "tech radar" is created to communicate approved technologies.', 'Technology Stack Consistency', '60-80%'),
('L502004', 'Lever', 4, 'The technology selection process is a data-driven, strategic function. The company uses a formal framework to evaluate new technologies.', 'Technology Stack Consistency', '80-95%'),
('L502004', 'Lever', 5, 'The technology selection process is intelligent and dynamic. The company uses AI-powered tools to scan the market for emerging technologies.', 'Technology Stack Consistency', '> 95%');

-- D5 -> C503 -> L503001: Agile Development Practices
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L503001', 'Lever', 1, 'Development is a slow, waterfall-based process with long release cycles (6-12 months). There is a rigid separation between teams.', 'Sprint Completion Rate', '< 50%'),
('L503001', 'Lever', 2, 'The engineering team adopts an agile methodology (e.g., Scrum). They operate in two-week sprints and have daily stand-up meetings.', 'Sprint Completion Rate', '50-70%'),
('L503001', 'Lever', 3, 'The agile process is mature and well-understood. The team consistently delivers working software at the end of each sprint.', 'Sprint Completion Rate', '70-85%'),
('L503001', 'Lever', 4, 'The entire organization operates with an agile mindset. The company uses a scaled agile framework (e.g., SAFe, LeSS) to coordinate the work of multiple teams.', 'Sprint Completion Rate', '85-95%'),
('L503001', 'Lever', 5, 'The agile process is intelligent and data-driven. The team uses analytics from their project management tool to identify bottlenecks and continuously improve.', 'Sprint Completion Rate', '> 95%');

-- D5 -> C503 -> L503002: DevOps & CI/CD Pipeline
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L503002', 'Lever', 1, 'The build, test, and deployment process is entirely manual, slow, and error-prone.', 'Deployment Frequency', '< 1 per month'),
('L503002', 'Lever', 2, 'A basic CI server (e.g., Jenkins) is set up to automatically build and run unit tests after every code commit.', 'Deployment Frequency', '1-2 per month'),
('L503002', 'Lever', 3, 'A mature CI/CD pipeline is in place that can automatically deploy code to a staging environment. The pipeline includes multiple stages of automated testing.', 'Deployment Frequency', '1-4 per week'),
('L503002', 'Lever', 4, 'A true DevOps culture is in place, where teams own their code from "commit" to production. The CI/CD pipeline is fully automated, enabling multiple deployments per day.', 'Deployment Frequency', '1-10 per day'),
('L503002', 'Lever', 5, 'The CI/CD pipeline is intelligent. It uses machine learning to analyze code changes and predict the risk of a new release.', 'Deployment Frequency', '> 10 per day');

-- D5 -> C503 -> L503003: Platform Engineering
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L503003', 'Lever', 1, 'Every team builds and manages its own infrastructure and tools. There is massive duplication of effort and inconsistency.', 'Developer Satisfaction Score (DSAT)', '< 2.5'),
('L503003', 'Lever', 2, 'A few senior engineers become the informal "DevOps guys" who help other teams with their infrastructure.', 'Developer Satisfaction Score (DSAT)', '2.5 - 3.0'),
('L503003', 'Lever', 3, 'A formal Platform Engineering team is created. They are responsible for building and supporting a set of common, shared services.', 'Developer Satisfaction Score (DSAT)', '3.0 - 3.5'),
('L503003', 'Lever', 4, 'The Platform Engineering team operates like a true product team. They have a roadmap and measure their success based on developer satisfaction.', 'Developer Satisfaction Score (DSAT)', '3.5 - 4.0'),
('L503003', 'Lever', 5, 'The internal developer platform is intelligent and self-service. Developers can provision new services through a simple, automated portal.', 'Developer Satisfaction Score (DSAT)', '> 4.0');

-- D5 -> C503 -> L503004: Code Quality & Standards
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L503004', 'Lever', 1, 'There are no coding standards. The codebase is a "big ball of mud" that is difficult to understand and change.', 'Unit Test Coverage', '< 10%'),
('L503004', 'Lever', 2, 'A basic set of coding standards are documented. The team begins to practice informal, ad-hoc code reviews.', 'Unit Test Coverage', '10-30%'),
('L503004', 'Lever', 3, 'A formal code review process is required for all code changes. Automated static analysis tools are integrated into the CI/CD pipeline.', 'Unit Test Coverage', '30-50%'),
('L503004', 'Lever', 4, 'Code quality is a core part of the engineering culture. The team has a high level of unit test coverage. A formal "Definition of Done" includes quality checks.', 'Unit Test Coverage', '50-80%'),
('L503004', 'Lever', 5, 'The code quality process is intelligent. The CI/CD pipeline uses AI to review code changes and to predict which changes are most likely to introduce bugs.', 'Unit Test Coverage', '> 80%');

-- D5 -> C504 -> L504001: Test Automation Strategy
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L504001', 'Lever', 1, 'All testing is done manually by a QA team (or by customers in production). The process is slow and releases are often delayed.', 'Percentage of Automated Tests', '< 5%'),
('L504001', 'Lever', 2, 'The QA team begins to use a record-and-playback tool to automate a few, simple UI tests. The tests are brittle and often break.', 'Percentage of Automated Tests', '5-15%'),
('L504001', 'Lever', 3, 'A dedicated test automation engineer is hired. They begin to build a more robust test automation framework using a modern tool.', 'Percentage of Automated Tests', '15-40%'),
('L504001', 'Lever', 4, 'Quality Engineering is a core part of the development process. QE engineers are embedded in the development pods and build test automation.', 'Percentage of Automated Tests', '40-70%'),
('L504001', 'Lever', 5, 'The test automation strategy is intelligent and autonomous. The system uses AI to analyze the application and automatically generate new test cases.', 'Percentage of Automated Tests', '> 70%');

-- D5 -> C504 -> L504002: Performance & Scale Testing
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L504002', 'Lever', 1, 'There is no performance testing. The first time the team knows about a performance issue is when the site crashes.', 'Production Performance Regressions', '> 5'),
('L504002', 'Lever', 2, 'The team conducts a basic, manual load test before a major release, using a simple open-source tool.', 'Production Performance Regressions', '3-5'),
('L504002', 'Lever', 3, 'A dedicated performance engineering function is created. A formal performance testing process is integrated into the CI/CD pipeline.', 'Production Performance Regressions', '1-2'),
('L504002', 'Lever', 4, 'Performance testing is a continuous, data-driven discipline. The team has a dedicated performance testing environment that mirrors production.', 'Production Performance Regressions', '< 1'),
('L504002', 'Lever', 5, 'The performance testing is predictive. The company uses AI-powered tools to analyze performance test results and predict how the application will behave.', 'Production Performance Regressions', '0');

-- D5 -> C504 -> L504003: Quality Metrics & Reporting
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L504003', 'Lever', 1, 'There are no quality metrics. The team only knows about quality issues when a customer complains.', 'Escaped Defect Rate', 'High (not measured)'),
('L504003', 'Lever', 2, 'The QA team manually tracks the number of bugs found in each release in a spreadsheet.', 'Escaped Defect Rate', '> 1.0'),
('L504003', 'Lever', 3, 'A set of standard quality dashboards are built in the bug tracking system (e.g., Jira). The team can track metrics like bug open/close rates.', 'Escaped Defect Rate', '0.5 - 1.0'),
('L504003', 'Lever', 4, 'Quality is a core part of the overall engineering dashboard. The team tracks a balanced set of quality metrics that cover the entire development lifecycle.', 'Escaped Defect Rate', '0.1 - 0.5'),
('L504003', 'Lever', 5, 'The quality reporting is predictive. The system uses machine learning to analyze historical quality data and to predict the quality of an upcoming release.', 'Escaped Defect Rate', '< 0.1');

-- D5 -> C505 -> L505001: Secure Software Development Lifecycle (SSDLC)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L505001', 'Lever', 1, 'There is no formal security program. Security is an afterthought and is only considered after a vulnerability is discovered.', 'Critical Vulnerabilities in Production', '> 20'),
('L505001', 'Lever', 2, 'The company conducts an annual penetration test with a third-party firm and works to fix the findings.', 'Critical Vulnerabilities in Production', '10-20'),
('L505001', 'Lever', 3, 'A formal Secure Software Development Lifecycle (SSDLC) is implemented. Security training is provided to all developers.', 'Critical Vulnerabilities in Production', '5-10'),
('L505001', 'Lever', 4, 'Security is "shifted left" and deeply integrated into the development process. Automated security testing tools are embedded in the CI/CD pipeline.', 'Critical Vulnerabilities in Production', '1-5'),
('L505001', 'Lever', 5, 'The SSDLC is intelligent and automated. The CI/CD pipeline uses AI to analyze code and predict potential vulnerabilities.', 'Critical Vulnerabilities in Production', '0');

-- D5 -> C505 -> L505002: Application Security (AppSec)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L505002', 'Lever', 1, 'There is no AppSec function. The company relies on its developers to write secure code, but provides them with no training or tools.', 'Mean Time To Remediate (MTTR) for Critical Vulnerabilities', '> 90 days'),
('L505002', 'Lever', 2, 'The company conducts an annual, black-box penetration test. The team works to fix the findings from the pen test.', 'Mean Time To Remediate (MTTR) for Critical Vulnerabilities', '60-90 days'),
('L505002', 'Lever', 3, 'A dedicated Product Security engineer is hired. They implement a set of automated security testing tools, such as SAST and DAST.', 'Mean Time To Remediate (MTTR) for Critical Vulnerabilities', '30-60 days'),
('L505002', 'Lever', 4, 'A mature AppSec team is in place. They have a sophisticated set of tools and a formal process for managing vulnerabilities. They run a bug bounty program.', 'Mean Time To Remediate (MTTR) for Critical Vulnerabilities', '15-30 days'),
('L505002', 'Lever', 5, 'The AppSec program is predictive and proactive. The team uses AI-powered tools to analyze code and threat intelligence data to predict and remediate vulnerabilities.', 'Mean Time To Remediate (MTTR) for Critical Vulnerabilities', '< 15 days');

-- D5 -> C505 -> L505003: Security Compliance & Certifications
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L505003', 'Lever', 1, 'The company has no security certifications and cannot answer basic security questionnaires from prospects. This is a major sales blocker.', 'Sales Deals Lost Due to Security', 'High (not tracked)'),
('L505003', 'Lever', 2, 'The company begins the process of preparing for its first SOC 2 audit. The process is manual, painful, and managed in spreadsheets.', 'Sales Deals Lost Due to Security', '> 5'),
('L505003', 'Lever', 3, 'The company successfully achieves its first SOC 2 Type I or Type II certification. A basic set of security policies and controls are documented.', 'Sales Deals Lost Due to Security', '2-5'),
('L505003', 'Lever', 4, 'The company has a mature security compliance program. It has achieved multiple certifications (e.g., SOC 2, ISO 27001, HIPAA).', 'Sales Deals Lost Due to Security', '1-2'),
('L505003', 'Lever', 5, 'The security compliance process is highly automated. The company uses a compliance automation platform to continuously monitor its controls.', 'Sales Deals Lost Due to Security', '0');

-- D6 -> C601 -> L601001: Customer Onboarding & Adoption
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L601001', 'Lever', 1, 'There is no formal onboarding process. Customers are given a login and are on their own to figure out the product.', 'Time to First Value (TTFV)', '> 90 days'),
('L601001', 'Lever', 2, 'A basic onboarding checklist is created. The CSM runs a one-size-fits-all kickoff call with new customers.', 'Time to First Value (TTFV)', '60-90 days'),
('L601001', 'Lever', 3, 'A formal onboarding program is established with defined milestones. The CSM uses a project plan to manage the onboarding process.', 'Time to First Value (TTFV)', '30-60 days'),
('L601001', 'Lever', 4, 'The onboarding process is managed on a dedicated platform. The process is segmented and tailored for different customer types.', 'Time to First Value (TTFV)', '15-30 days'),
('L601001', 'Lever', 5, 'The onboarding experience is personalized and automated. The platform uses in-app guidance and AI to provide a personalized journey for each new user.', 'Time to First Value (TTFV)', '< 15 days');

-- D6 -> C601 -> L601002: Customer Health Scoring
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L601002', 'Lever', 1, 'There is no concept of a health score. The CSM only knows a customer is unhappy when they threaten to churn.', 'Churn Forecast Accuracy', '< 25%'),
('L601002', 'Lever', 2, 'A basic, manual health score is created in a spreadsheet. It is based on the CSM''s subjective assessment (e.g., Red, Yellow, Green).', 'Churn Forecast Accuracy', '25-50%'),
('L601002', 'Lever', 3, 'A Customer Success platform is implemented to provide a basic, automated health score based on simple inputs (e.g., support tickets, NPS).', 'Churn Forecast Accuracy', '50-75%'),
('L601002', 'Lever', 4, 'The health score is a sophisticated, data-driven model. It is based on actual product usage data and is weighted based on features that correlate with retention.', 'Churn Forecast Accuracy', '75-90%'),
('L601002', 'Lever', 5, 'The health score is predictive. The company uses a machine learning model to generate a highly accurate churn risk score for every customer.', 'Churn Forecast Accuracy', '> 90%');

-- D6 -> C601 -> L601003: Proactive Engagement & EBRs
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L601003', 'Lever', 1, 'Engagement is purely reactive. The CSM only talks to the customer when there is a problem or when the renewal is due.', 'Net Revenue Retention (NRR)', '< 90%'),
('L601003', 'Lever', 2, 'The CSM has a basic playbook that calls for a quarterly check-in call with their top accounts. EBRs are informal and tactical.', 'Net Revenue Retention (NRR)', '90-100%'),
('L601003', 'Lever', 3, 'A formal EBR program is established for top-tier customers. There is a standard template and a defined cadence. The focus is on reviewing past performance.', 'Net Revenue Retention (NRR)', '100-110%'),
('L601003', 'Lever', 4, 'The engagement model is segmented and data-driven. The company uses "tech touch" (automated) engagement for smaller customers.', 'Net Revenue Retention (NRR)', '110-125%'),
('L601003', 'Lever', 5, 'The engagement is intelligent and personalized. The CS platform uses AI to analyze customer data and trigger personalized, automated "plays" for the CSM to run.', 'Net Revenue Retention (NRR)', '> 125%');

-- D6 -> C601 -> L601004: Renewals & Churn Mitigation
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L601004', 'Lever', 1, 'Renewals are managed by the sales team in a spreadsheet. There is no formal process for mitigating churn.', 'Gross Revenue Retention (GRR)', '< 80%'),
('L601004', 'Lever', 2, 'A dedicated renewals manager or team is created. They have a renewal forecast, but it is managed manually in a spreadsheet.', 'Gross Revenue Retention (GRR)', '80-85%'),
('L601004', 'Lever', 3, 'The renewal process is managed in the CRM or a CS platform. Automated alerts are used to notify the team of upcoming renewals.', 'Gross Revenue Retention (GRR)', '85-90%'),
('L601004', 'Lever', 4, 'The renewal process is a data-driven, programmatic motion. The team uses customer health data to identify at-risk renewals and proactively intervene.', 'Gross Revenue Retention (GRR)', '90-95%'),
('L601004', 'Lever', 5, 'The renewal and churn mitigation process is predictive. The company uses an AI-powered model to identify at-risk renewals and recommend "save" plays.', 'Gross Revenue Retention (GRR)', '> 95%');

-- D6 -> C602 -> L602001: Global Support Operations (24/7)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L602001', 'Lever', 1, 'Support is only available during local business hours. There is no after-hours or weekend support.', 'Percentage of Tickets with SLA Breach', '> 20%'),
('L602001', 'Lever', 2, 'The company offers a basic "on-call" support option for after-hours emergencies, but it is staffed by developers, not dedicated support agents.', 'Percentage of Tickets with SLA Breach', '10-20%'),
('L602001', 'Lever', 3, 'The company establishes a second support center in a different time zone to provide extended coverage (e.g., 16x5).', 'Percentage of Tickets with SLA Breach', '5-10%'),
('L602001', 'Lever', 4, 'The company has a true 24/7, "follow-the-sun" support operation with dedicated teams in North America, Europe, and Asia.', 'Percentage of Tickets with SLA Breach', '2-5%'),
('L602001', 'Lever', 5, 'The global support operation is intelligent and optimized. The company uses AI-powered tools to automatically route tickets to the agent with the right skills.', 'Percentage of Tickets with SLA Breach', '< 2%');

-- D6 -> C602 -> L602002: Tiered Support Model & Escalation
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L602002', 'Lever', 1, 'All support tickets go into a single queue and are handled by whoever is available. Agents "cherry pick" the easy tickets.', 'First Contact Resolution (FCR) Rate', '< 40%'),
('L602002', 'Lever', 2, 'A basic, two-tiered model is created. The support team acts as Level 1, and they escalate complex issues directly to the engineering team.', 'First Contact Resolution (FCR) Rate', '40-50%'),
('L602002', 'Lever', 3, 'A formal, multi-tiered support model (L1, L2, L3) is implemented with clear definitions and escalation criteria for each tier.', 'First Contact Resolution (FCR) Rate', '50-60%'),
('L602002', 'Lever', 4, 'The tiered support model is a data-driven, well-oiled machine. The team has deep analytics on the types of issues that are handled at each tier.', 'First Contact Resolution (FCR) Rate', '60-70%'),
('L602002', 'Lever', 5, 'The support model is intelligent. The ticketing system uses AI to analyze the text of an incoming ticket and automatically route it to the correct tier.', 'First Contact Resolution (FCR) Rate', '> 70%');

-- D6 -> C602 -> L602003: Incident & Problem Management
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L602003', 'Lever', 1, 'A major incident is a chaotic, "all hands on deck" fire drill. There is no formal process for managing incidents or their root causes.', 'Mean Time To Recovery (MTTR)', '> 4 hours'),
('L602003', 'Lever', 2, 'A basic on-call rotation is established for engineers. A simple "what went wrong" email is sent out after an incident.', 'Mean Time To Recovery (MTTR)', '1-4 hours'),
('L602003', 'Lever', 3, 'A formal incident management process (based on ITIL) is implemented with defined roles. A formal "post-mortem" process is used for RCA.', 'Mean Time To Recovery (MTTR)', '30-60 minutes'),
('L602003', 'Lever', 4, 'The incident management process is a well-oiled machine. The company uses a dedicated incident management tool and runs regular "game day" drills.', 'Mean Time To Recovery (MTTR)', '5-30 minutes'),
('L602003', 'Lever', 5, 'The incident management process is proactive and predictive. The company uses AI-powered monitoring tools to predict potential incidents before they happen.', 'Mean Time To Recovery (MTTR)', '< 5 minutes');

-- D6 -> C602 -> L602004: Service Delivery & Site Reliability Engineering (SRE)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L602004', 'Lever', 1, 'The "ops" team is a manual, reactive function that spends all its time firefighting. There are no formal reliability targets.', 'Application Availability (Uptime)', '< 99.0%'),
('L602004', 'Lever', 2, 'The company begins to adopt some SRE principles. The ops team is given a charter to spend a portion of their time on automation projects.', 'Application Availability (Uptime)', '99.0% - 99.5%'),
('L602004', 'Lever', 3, 'A formal SRE team is created. They have a defined set of Service Level Objectives (SLOs) for the application.', 'Application Availability (Uptime)', '99.5% - 99.9%'),
('L602004', 'Lever', 4, 'SRE is a core part of the engineering culture. The SRE team is embedded with the product development teams. They have an "error budget".', 'Application Availability (Uptime)', '99.9% - 99.99%'),
('L602004', 'Lever', 5, 'The SRE function is intelligent and predictive. The team uses AI-powered observability platforms to predict and prevent outages. The system is self-healing.', 'Application Availability (Uptime)', '> 99.99%');

-- D6 -> C603 -> L603001: Implementation & Integration Services
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L603001', 'Lever', 1, 'Implementation is done by the sales engineer or a developer on a "best effort" basis, usually for free. It is unprofitable and chaotic.', 'Professional Services Attach Rate', '< 5%'),
('L603001', 'Lever', 2, 'A basic, "quick start" implementation package is created. It is delivered by a small, informal team. The goal is to break even.', 'Professional Services Attach Rate', '5-15%'),
('L603001', 'Lever', 3, 'A formal PS team is in place with a portfolio of implementation and integration service offerings. A PSA tool is used to manage projects.', 'Professional Services Attach Rate', '15-30%'),
('L603001', 'Lever', 4, 'The PS team is a mature, profitable business unit. They have a formal, documented implementation methodology.', 'Professional Services Attach Rate', '30-50%'),
('L603001', 'Lever', 5, 'The implementation process is intelligent and scalable. The team uses data from thousands of past implementations to create predictive models for project effort.', 'Professional Services Attach Rate', '> 50%');

-- D6 -> C603 -> L603002: Customization & Advisory Services
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L603002', 'Lever', 1, 'The company does not offer any customization or advisory services.', 'Professional Services Margin', 'Negative'),
('L603002', 'Lever', 2, 'The PS team will occasionally take on a small, ad-hoc customization project. The pricing is based on time and materials.', 'Professional Services Margin', '0-10%'),
('L603002', 'Lever', 3, 'A formal set of advisory and customization service offerings are created with clear SOWs and pricing.', 'Professional Services Margin', '10-20%'),
('L603002', 'Lever', 4, 'The advisory services are a high-margin, strategic offering. The company has a team of senior, expert consultants who are recognized thought leaders.', 'Professional Services Margin', '20-30%'),
('L603002', 'Lever', 5, 'The advisory services are data-driven and intelligent. The company uses data from its entire customer base to provide benchmark data.', 'Professional Services Margin', '> 30%');

-- D6 -> C603 -> L603003: Managed Services Offering
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L603003', 'Lever', 1, 'There is no managed services offering.', 'Services Revenue as % of Total Revenue', '< 2%'),
('L603003', 'Lever', 2, 'The company has a few, one-off custom managed service agreements with its largest customers. It is unprofitable and unscalable.', 'Services Revenue as % of Total Revenue', '2-5%'),
('L603003', 'Lever', 3, 'A formal managed service offering is created with a standard set of services, SLAs, and pricing. A dedicated team is in place.', 'Services Revenue as % of Total Revenue', '5-10%'),
('L603003', 'Lever', 4, 'The managed services business is a strategic, profitable, recurring revenue stream. The company has tools and automation to deliver the service efficiently.', 'Services Revenue as % of Total Revenue', '10-15%'),
('L603003', 'Lever', 5, 'The managed services offering is intelligent and proactive. The company uses AI and automation to proactively manage the customer''s environment.', 'Services Revenue as % of Total Revenue', '> 15%');

-- D6 -> C604 -> L604001: Self-Service & Knowledge Base
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L604001', 'Lever', 1, 'There are no self-service resources. The only way for a customer to get help is to contact support.', 'Ticket Deflection Rate', '< 5%'),
('L604001', 'Lever', 2, 'A basic FAQ page or knowledge base is created. It is managed by the support team and is often out of date.', 'Ticket Deflection Rate', '5-15%'),
('L604001', 'Lever', 3, 'A dedicated knowledge base with a powerful search engine is implemented. The company uses a formal process (KCS) to create and maintain content.', 'Ticket Deflection Rate', '15-30%'),
('L604001', 'Lever', 4, 'The self-service experience is a core part of the product. The knowledge base is deeply integrated with the application, providing context-aware help.', 'Ticket Deflection Rate', '30-50%'),
('L604001', 'Lever', 5, 'The self-service experience is intelligent and personalized. The knowledge base uses AI to understand a user''s intent and provide the most relevant answer.', 'Ticket Deflection Rate', '> 50%');

-- D6 -> C604 -> L604002: Customer Training & Certification
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L604002', 'Lever', 1, 'There is no formal training program. The company may offer a few, ad-hoc "how-to" webinars.', 'Certified Professionals', '0'),
('L604002', 'Lever', 2, 'A basic Learning Management System (LMS) is used to deliver a library of on-demand video courses.', 'Certified Professionals', '< 100'),
('L604002', 'Lever', 3, 'A dedicated Customer Education team is in place. They have a comprehensive curriculum of courses for different user roles. A formal certification program is offered.', 'Certified Professionals', '100 - 500'),
('L604002', 'Lever', 4, 'The training program is a profitable, revenue-generating business. The certification is a recognized mark of expertise in the industry.', 'Certified Professionals', '500 - 2,000'),
('L604002', 'Lever', 5, 'The customer learning experience is personalized and intelligent. The LMS uses AI to recommend a personalized learning path for each user.', 'Certified Professionals', '> 2,000');

-- D6 -> C604 -> L604003: Community & Advocacy Programs
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L604003', 'Lever', 1, 'There is no community or advocacy program.', 'Percentage of Support Issues Resolved by Community', '0%'),
('L604003', 'Lever', 2, 'The company hosts a simple online forum for users. It is not actively managed. A basic customer reference program is created.', 'Percentage of Support Issues Resolved by Community', '< 5%'),
('L604003', 'Lever', 3, 'A dedicated Community Manager is hired to foster engagement. A formal customer advocacy program is in place with a dedicated platform.', 'Percentage of Support Issues Resolved by Community', '5-15%'),
('L604003', 'Lever', 4, 'The online community is a thriving hub of user-generated content and peer-to-peer support. The advocacy program is a programmatic engine for referrals.', 'Percentage of Support Issues Resolved by Community', '15-25%'),
('L604003', 'Lever', 5, 'The community is a key strategic asset. The company uses AI to analyze community conversations to identify emerging trends and product ideas.', 'Percentage of Support Issues Resolved by Community', '> 25%');

-- D6 -> C604 -> L604004: Voice of the Customer (VoC) Program
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L604004', 'Lever', 1, 'Feedback is collected ad-hoc by individual employees and is often lost. There is no closed loop.', 'Closed-Loop Feedback Rate', '< 5%'),
('L604004', 'Lever', 2, 'The company runs an annual NPS survey. The results are shared with the leadership team, but there is no formal process for acting on the feedback.', 'Closed-Loop Feedback Rate', '5-20%'),
('L604004', 'Lever', 3, 'A formal Voice of the Customer (VoC) program is established. The company uses a survey platform to run NPS, CSAT, and other surveys.', 'Closed-Loop Feedback Rate', '20-50%'),
('L604004', 'Lever', 4, 'The VoC program is a data-driven, "always-on" function. The company uses a dedicated VoC platform to aggregate and analyze feedback from all sources.', 'Closed-Loop Feedback Rate', '50-80%'),
('L604004', 'Lever', 5, 'The VoC program is intelligent and predictive. The company uses AI-powered text analytics to automatically identify the root cause drivers of satisfaction.', 'Closed-Loop Feedback Rate', '> 80%');

-- D7 -> C701 -> L701001: Cloud Service Management
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L701001', 'Lever', 1, 'The entire environment runs in a single, root cloud account. The environment is managed manually via the provider''s console.', 'Security & Compliance Score', '< 40%'),
('L701001', 'Lever', 2, 'A multi-account strategy is implemented to separate production and non-production workloads. IAM roles are used to provide least-privilege access.', 'Security & Compliance Score', '40-60%'),
('L701001', 'Lever', 3, 'A basic set of monitoring and alerting is in place. The company begins to adopt Infrastructure as Code (IaC).', 'Security & Compliance Score', '60-80%'),
('L701001', 'Lever', 4, 'A secure, multi-account cloud foundation is in place, based on the provider''s best practices (e.g., AWS Well-Architected Framework).', 'Security & Compliance Score', '80-95%'),
('L701001', 'Lever', 5, 'The cloud environment is intelligent and self-governing. The company uses AI-powered tools to automatically detect and remediate security misconfigurations.', 'Security & Compliance Score', '> 95%');

-- D7 -> C701 -> L701002: Cloud Security & Compliance
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L701002', 'Lever', 1, 'There is no cloud security strategy. The company relies on the cloud provider''s default security settings.', 'Mean Time To Remediate (MTTR) for Critical Cloud Vulnerabilities', '> 60 days'),
('L701002', 'Lever', 2, 'Basic security measures are in place, such as using security groups (firewalls) and encrypting data at rest.', 'Mean Time To Remediate (MTTR) for Critical Cloud Vulnerabilities', '30-60 days'),
('L701002', 'Lever', 3, 'A formal cloud security program is established. The company uses a set of cloud-native security tools for vulnerability scanning and threat detection.', 'Mean Time To Remediate (MTTR) for Critical Cloud Vulnerabilities', '15-30 days'),
('L701002', 'Lever', 4, 'The cloud security program is a mature, data-driven function. The company has achieved a key security certification for its cloud environment (e.g., SOC 2).', 'Mean Time To Remediate (MTTR) for Critical Cloud Vulnerabilities', '7-15 days'),
('L701002', 'Lever', 5, 'The cloud security is predictive and automated. The company uses AI-powered CSPM and CWPP tools to predict, detect, and automatically respond to threats.', 'Mean Time To Remediate (MTTR) for Critical Cloud Vulnerabilities', '< 7 days');

-- D7 -> C701 -> L701003: Cloud Cost Management (FinOps)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L701003', 'Lever', 1, 'Cloud spend is unmanaged and grows unchecked. The monthly cloud bill is a surprise to the finance team.', 'Cloud Cost Savings', '0%'),
('L701003', 'Lever', 2, 'The finance team begins to track and report on the monthly cloud bill. The team uses basic cost-saving measures, like shutting down idle instances manually.', 'Cloud Cost Savings', '< 2%'),
('L701003', 'Lever', 3, 'A dedicated FinOps analyst is hired. They use the cloud provider''s native cost management tools to analyze spend and identify waste.', 'Cloud Cost Savings', '2-5%'),
('L701003', 'Lever', 4, 'FinOps is a dedicated practice with a formal charter and executive support. The team uses a third-party Cloud Cost Management platform.', 'Cloud Cost Savings', '5-10%'),
('L701003', 'Lever', 5, 'The FinOps practice is intelligent and automated. The company uses an AI-powered platform to provide real-time cost visibility and automated optimization actions.', 'Cloud Cost Savings', '> 10%');

-- D7 -> C701 -> L701004: Infrastructure as Code (IaC) & Automation
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L701004', 'Lever', 1, 'All infrastructure is provisioned and managed manually through the cloud provider''s console. The process is slow, error-prone, and not repeatable.', 'Percentage of Infrastructure Managed as Code', '0%'),
('L701004', 'Lever', 2, 'The team begins to experiment with IaC for a few, simple resources. A few, ad-hoc scripts are written to automate common tasks.', 'Percentage of Infrastructure Managed as Code', '< 10%'),
('L701004', 'Lever', 3, 'A formal IaC strategy is adopted. The team uses a tool like Terraform to manage all new infrastructure. The IaC code is stored in version control.', 'Percentage of Infrastructure Managed as Code', '10-50%'),
('L701004', 'Lever', 4, 'The entire cloud environment is managed as code. The IaC is integrated into a CI/CD pipeline that automatically tests and deploys infrastructure changes.', 'Percentage of Infrastructure Managed as Code', '50-90%'),
('L701004', 'Lever', 5, 'The IaC is intelligent and self-governing. The company uses policy-as-code tools to automatically enforce security and cost policies before deployment.', 'Percentage of Infrastructure Managed as Code', '> 90%');

-- D7 -> C702 -> L702001: Data Architecture & Infrastructure
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L702001', 'Lever', 1, 'Data is siloed in application-specific, production databases. There is no central data infrastructure.', 'Data Latency', '> 24 hours'),
('L702001', 'Lever', 2, 'A basic, traditional data warehouse is created. Data is moved from a few key systems via a slow, nightly batch ETL process.', 'Data Latency', '12-24 hours'),
('L702001', 'Lever', 3, 'A modern, cloud-native data platform (e.g., Snowflake, Databricks) is implemented. The company begins to build a data lake.', 'Data Latency', '1-12 hours'),
('L702001', 'Lever', 4, 'The data architecture is a well-designed, scalable platform. The company uses a modern data stack with automated data pipelines and transformation tools.', 'Data Latency', '< 1 hour'),
('L702001', 'Lever', 5, 'The data architecture is intelligent and serverless. The platform can automatically scale its resources up and down to meet demand.', 'Data Latency', 'Real-time (< 5 mins)');

-- D7 -> C702 -> L702002: Data Governance & Quality
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L702002', 'Lever', 1, 'There is no data governance. Data quality is poor, and there is no single source of truth. No one trusts the data.', 'Data Trust Score', '< 2.0'),
('L702002', 'Lever', 2, 'A data analyst is assigned the informal role of "data governor." They begin to manually document key metrics and data sources in a spreadsheet.', 'Data Trust Score', '2.0 - 3.0'),
('L702002', 'Lever', 3, 'A formal data governance program is established with a defined charter and a cross-functional steering committee. A data catalog tool is implemented.', 'Data Trust Score', '3.0 - 3.5'),
('L702002', 'Lever', 4, 'Data governance is a mature, enterprise-wide function. The company has a network of trained data stewards embedded in the business.', 'Data Trust Score', '3.5 - 4.5'),
('L702002', 'Lever', 5, 'The data governance process is intelligent and automated. The company uses AI-powered tools to automatically discover and profile data.', 'Data Trust Score', '> 4.5');

-- D7 -> C702 -> L702003: Data Security & Privacy
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L702003', 'Lever', 1, 'There is no data security strategy. All users have access to all data. Privacy compliance is not considered.', 'Sensitive Data Exposure', '> 5'),
('L702003', 'Lever', 2, 'Basic access controls are implemented on the data warehouse (e.g., giving some users read-only access).', 'Sensitive Data Exposure', '3-5'),
('L702003', 'Lever', 3, 'A formal data security and privacy framework is created. Role-based access control (RBAC) is implemented on the data platform.', 'Sensitive Data Exposure', '1-2'),
('L702003', 'Lever', 4, 'Data security is a mature, data-driven function. The company uses a dedicated data security platform to monitor for threats and manage access controls.', 'Sensitive Data Exposure', '1'),
('L702003', 'Lever', 5, 'The data security is intelligent and automated. The company uses AI-powered tools to automatically discover and classify sensitive data.', 'Sensitive Data Exposure', '0');

-- D7 -> C702 -> L702004: Data Monetization Strategy
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L702004', 'Lever', 1, 'There is no data monetization strategy. Data is seen as a cost center, not a revenue driver.', 'Data Revenue as % of Total Revenue', '0%'),
('L702004', 'Lever', 2, 'The company begins to explore the idea of data monetization. A few, ad-hoc ideas are discussed but not acted upon.', 'Data Revenue as % of Total Revenue', '< 1%'),
('L702004', 'Lever', 3, 'The company launches its first, basic data-driven product feature (e.g., a benchmarking report). The feature is often given away for free.', 'Data Revenue as % of Total Revenue', '1-3%'),
('L702004', 'Lever', 4, 'Data monetization is a formal, strategic initiative. The company has a portfolio of data-driven product features that are a key source of upsell revenue.', 'Data Revenue as % of Total Revenue', '3-8%'),
('L702004', 'Lever', 5, 'Data monetization is a core part of the business model. The company has a mature Data-as-a-Service (DaaS) offering that is a significant revenue stream.', 'Data Revenue as % of Total Revenue', '> 8%');

-- D7 -> C703 -> L703001: Business Intelligence & Data Analytics
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L703001', 'Lever', 1, 'Analytics is limited to basic operational reports run directly from the production database by engineers.', 'Percentage of Employees Actively Using BI', '< 5%'),
('L703001', 'Lever', 2, 'A data analyst is hired who can run SQL queries against the data warehouse. They create a few, static reports in a spreadsheet.', 'Percentage of Employees Actively Using BI', '5-10%'),
('L703001', 'Lever', 3, 'A BI tool is implemented. A small team of BI developers builds a set of standard, interactive dashboards for the key business functions.', 'Percentage of Employees Actively Using BI', '10-25%'),
('L703001', 'Lever', 4, 'The company has a mature, self-service BI culture. A central data team is responsible for creating and maintaining a set of certified, trusted data sources.', 'Percentage of Employees Actively Using BI', '25-50%'),
('L703001', 'Lever', 5, 'The BI experience is intelligent and augmented. The BI platform uses AI to automatically surface insights and allows users to ask questions in natural language.', 'Percentage of Employees Actively Using BI', '> 50%');

-- D7 -> C703 -> L703002: Machine Learning (ML) & Predictive Analytics
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L703002', 'Lever', 1, 'There is no use of machine learning. Analytics is purely descriptive.', 'Number of Production ML Models', '0'),
('L703002', 'Lever', 2, 'A few employees with a data science background begin to experiment with building basic ML models on their laptops.', 'Number of Production ML Models', '1-2'),
('L703002', 'Lever', 3, 'A dedicated data science team is formed. They build and deploy the company''s first few production ML models (e.g., a lead scoring model).', 'Number of Production ML Models', '3-10'),
('L703002', 'Lever', 4, 'The company has a mature data science function. They have a portfolio of ML models in production that are driving significant business value.', 'Number of Production ML Models', '10-50'),
('L703002', 'Lever', 5, 'Machine learning is a core competency and is deeply embedded in the product and business processes. The company uses advanced ML techniques.', 'Number of Production ML Models', '> 50');

-- D7 -> C703 -> L703003: Generative AI (GenAI) Integration
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L703003', 'Lever', 1, 'The company is aware of Generative AI, but there is no formal strategy or experimentation.', 'Percentage of Processes Augmented by GenAI', '0%'),
('L703003', 'Lever', 2, 'A few employees begin to experiment with public GenAI tools (like ChatGPT) for their own productivity.', 'Percentage of Processes Augmented by GenAI', '< 5%'),
('L703003', 'Lever', 3, 'The company establishes a formal GenAI strategy and a set of governance policies. A few, low-risk internal use cases are piloted.', 'Percentage of Processes Augmented by GenAI', '5-15%'),
('L703003', 'Lever', 4, 'GenAI is integrated into core business processes and platforms. For example, the support team uses a GenAI-powered agent assist tool.', 'Percentage of Processes Augmented by GenAI', '15-30%'),
('L703003', 'Lever', 5, 'GenAI is a core part of the product and a key competitive differentiator. The company has built its own, fine-tuned GenAI models on its proprietary data.', 'Percentage of Processes Augmented by GenAI', '> 30%');

-- D7 -> C703 -> L703004: AI/ML Operations (MLOps)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L703004', 'Lever', 1, 'Any ML models are managed manually by the data scientist who built them. There is no versioning or monitoring.', 'Model Deployment Velocity', '> 30 days'),
('L703004', 'Lever', 2, 'The data science team begins to use a version control system (like Git) to manage their model code. Deployment is manual.', 'Model Deployment Velocity', '15-30 days'),
('L703004', 'Lever', 3, 'A basic MLOps toolchain is assembled from a mix of open-source and cloud-native tools. The team can automate the training and deployment of a few models.', 'Model Deployment Velocity', '7-15 days'),
('L703004', 'Lever', 4, 'A formal MLOps platform is in place. The platform provides a comprehensive set of tools for the entire ML lifecycle.', 'Model Deployment Velocity', '2-7 days'),
('L703004', 'Lever', 5, 'The MLOps process is intelligent and highly automated. The platform can automatically retrain and deploy models when it detects a drift in performance.', 'Model Deployment Velocity', '< 2 days');

-- D8 -> C801 -> L801001: Budgeting & Rolling Forecasts
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L801001', 'Lever', 1, 'The "budget" is a simple expense spreadsheet created once a year. There is no forecast.', 'Forecast Accuracy (Quarterly Revenue)', '> +/- 15%'),
('L801001', 'Lever', 2, 'An annual budget is created in a spreadsheet. A basic, manual forecast is updated quarterly.', 'Forecast Accuracy (Quarterly Revenue)', '+/- 10-15%'),
('L801001', 'Lever', 3, 'A dedicated planning tool (EPM) is used, which streamlines the budgeting and reporting process. A rolling forecast is implemented.', 'Forecast Accuracy (Quarterly Revenue)', '+/- 5-10%'),
('L801001', 'Lever', 4, 'The company operates on a driver-based, rolling forecast model. The forecast is a key part of the monthly business review process.', 'Forecast Accuracy (Quarterly Revenue)', '+/- 2-5%'),
('L801001', 'Lever', 5, 'The forecasting process is predictive. The company uses an AI-powered model that analyzes historical data and leading indicators to generate a continuous forecast.', 'Forecast Accuracy (Quarterly Revenue)', '< +/- 2%');

-- D8 -> C801 -> L801002: SaaS Metrics & KPI Reporting
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L801002', 'Lever', 1, 'The company does not track key SaaS metrics like ARR, NRR, or Churn. The focus is on GAAP accounting.', 'Net Revenue Retention (NRR)', '< 90%'),
('L801002', 'Lever', 2, 'The finance team begins to manually calculate a few basic SaaS metrics in a spreadsheet. The data is often unreliable.', 'Net Revenue Retention (NRR)', '90-100%'),
('L801002', 'Lever', 3, 'A set of standard SaaS metrics dashboards are built in a BI tool. The data is pulled from the billing system and CRM.', 'Net Revenue Retention (NRR)', '100-110%'),
('L801002', 'Lever', 4, 'The company has a "single source of truth" for all SaaS metrics, often managed on a dedicated subscription management platform.', 'Net Revenue Retention (NRR)', '110-125%'),
('L801002', 'Lever', 5, 'The SaaS metrics reporting is intelligent and proactive. The system can automatically detect anomalies and trends in the key metrics.', 'Net Revenue Retention (NRR)', '> 125%');

-- D8 -> C801 -> L801003: Scenario Modeling & Decision Support
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L801003', 'Lever', 1, 'There is no scenario modeling. Decisions are made based on gut feel.', 'Time to Model a New Scenario', '> 10 days'),
('L801003', 'Lever', 2, 'The FP&A analyst can build a basic, ad-hoc financial model in a spreadsheet to support a specific decision. The process is slow and manual.', 'Time to Model a New Scenario', '5-10 days'),
('L801003', 'Lever', 3, 'The EPM tool has a built-in scenario modeling capability. The FP&A team can model a few, pre-defined scenarios.', 'Time to Model a New Scenario', '2-5 days'),
('L801003', 'Lever', 4, 'The FP&A team has a sophisticated, driver-based financial model of the entire business that allows them to quickly model the impact of any strategic decision.', 'Time to Model a New Scenario', '1-2 days'),
('L801003', 'Lever', 5, 'The scenario modeling is intelligent and probabilistic. The company uses Monte Carlo simulation to model a range of potential outcomes.', 'Time to Model a New Scenario', '< 1 day');

-- D8 -> C801 -> L801004: Board & Investor Relations
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L801004', 'Lever', 1, 'There is no formal board or investor reporting. The founder has informal conversations with the investors.', 'Board Meeting Prep Time', '> 80 hours'),
('L801004', 'Lever', 2, 'A basic board deck is created in a slide deck. It is a backward-looking report of the previous quarter''s financial results.', 'Board Meeting Prep Time', '60-80 hours'),
('L801004', 'Lever', 3, 'The board reporting process is a well-defined, quarterly rhythm. The board deck includes a standard set of financial and SaaS metric dashboards.', 'Board Meeting Prep Time', '40-60 hours'),
('L801004', 'Lever', 4, 'The board materials are a strategic, forward-looking document. The FP&A team provides deep, data-driven insights on the business performance.', 'Board Meeting Prep Time', '20-40 hours'),
('L801004', 'Lever', 5, 'The board and investor relations are a continuous, intelligent dialogue. The company uses a dedicated board portal that provides the board with real-time access.', 'Board Meeting Prep Time', '< 20 hours');

-- D8 -> C802 -> L802001: Month-End Close Acceleration
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L802001', 'Lever', 1, 'The close is an ad-hoc, chaotic process driven by a single person. The process is stressful, unpredictable, and the numbers are often unreliable.', 'Month-End Close Cycle Time', '> 15 Business Days'),
('L802001', 'Lever', 2, 'A formal month-end close checklist exists and is followed consistently. Reconciliations are performed manually in spreadsheets.', 'Month-End Close Cycle Time', '10-15 Business Days'),
('L802001', 'Lever', 3, 'Key manual tasks are automated. A dedicated close management tool is used to track tasks. Automated journal entries are used.', 'Month-End Close Cycle Time', '5-10 Business Days'),
('L802001', 'Lever', 4, 'The close process is managed on a fully integrated financial platform where data flows seamlessly from sub-ledgers.', 'Month-End Close Cycle Time', '3-5 Business Days'),
('L802001', 'Lever', 5, 'The company operates in a "continuous close" environment. AI-driven tools automate complex reconciliations and detect anomalies in real-time.', 'Month-End Close Cycle Time', '1-3 Business Days');

-- D8 -> C802 -> L802002: Audit Readiness & Financial Controls
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L802002', 'Lever', 1, 'There are no formal controls. The annual audit is a painful, expensive, and time-consuming fire drill.', 'External Audit Fee', '> 1.0%'),
('L802002', 'Lever', 2, 'A basic set of financial controls are documented to satisfy the auditors. The process of providing evidence to the auditors is entirely manual.', 'External Audit Fee', '0.75% - 1.0%'),
('L802002', 'Lever', 3, 'A formal internal control framework (e.g., based on COSO) is designed and documented. The company is "audit ready" at all times.', 'External Audit Fee', '0.5% - 0.75%'),
('L802002', 'Lever', 4, 'The internal control environment is highly automated. The company uses a GRC tool to manage its controls and automate evidence collection.', 'External Audit Fee', '0.25% - 0.5%'),
('L802002', 'Lever', 5, 'The internal control environment is intelligent and continuous. The company uses AI-powered tools to continuously monitor its transactions for control violations.', 'External Audit Fee', '< 0.25%');

-- D8 -> C802 -> L802003: Financial Systems Modernization (ERP)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L802003', 'Lever', 1, 'The company is running on a basic, entry-level accounting system (e.g., QuickBooks) that is not designed for a SaaS business.', 'Percentage of Manual Journal Entries', '> 50%'),
('L802003', 'Lever', 2, 'The company recognizes the limitations of its current system and begins the process of selecting a new, scalable ERP.', 'Percentage of Manual Journal Entries', '30-50%'),
('L802003', 'Lever', 3, 'A modern, cloud-based ERP (e.g., NetSuite, Sage Intacct) is implemented. The initial implementation is focused on the core financial modules.', 'Percentage of Manual Journal Entries', '15-30%'),
('L802003', 'Lever', 4, 'The ERP is a true, integrated platform. The company has implemented advanced modules and has integrated the ERP with its other key business systems.', 'Percentage of Manual Journal Entries', '5-15%'),
('L802003', 'Lever', 5, 'The ERP is an intelligent, automated platform. The company uses AI-powered features within the ERP to automate complex processes.', 'Percentage of Manual Journal Entries', '< 5%');

-- D8 -> C802 -> L802004: Procure-to-Pay (P2P) Automation
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L802004', 'Lever', 1, 'There is no formal P2P process. Employees can buy whatever they want, and invoices are paid manually by the finance team.', 'Days Payable Outstanding (DPO)', '< 30'),
('L802004', 'Lever', 2, 'A basic procurement policy is created (e.g., requiring email approval for purchases). Invoice processing is manual.', 'Days Payable Outstanding (DPO)', '30-40'),
('L802004', 'Lever', 3, 'A dedicated procurement or accounts payable automation tool is implemented. The system can automate invoice capture, coding, and approval workflows.', 'Days Payable Outstanding (DPO)', '40-50'),
('L802004', 'Lever', 4, 'The P2P process is a fully automated, end-to-end process managed on an integrated platform. The company has deep visibility into its spend.', 'Days Payable Outstanding (DPO)', '50-60'),
('L802004', 'Lever', 5, 'The P2P process is intelligent. The company uses AI to automatically categorize spend, detect duplicate or fraudulent invoices, and optimize payment timing.', 'Days Payable Outstanding (DPO)', '> 60');

-- D8 -> C802 -> L802005: Order-to-Cash (O2C) Optimization
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L802005', 'Lever', 1, 'The O2C process is entirely manual. Invoices are created in a spreadsheet and are often inaccurate. There is no formal collections process.', 'Days Sales Outstanding (DSO)', '> 90'),
('L802005', 'Lever', 2, 'A basic invoicing process is established in the accounting system. A dedicated person is assigned to follow up on overdue invoices.', 'Days Sales Outstanding (DSO)', '75-90'),
('L802005', 'Lever', 3, 'The invoicing process is automated through a dedicated billing system. A formal collections process is in place with automated dunning emails.', 'Days Sales Outstanding (DSO)', '60-75'),
('L802005', 'Lever', 4, 'The O2C process is a fully automated, end-to-end process managed on an integrated platform that connects the CRM, billing system, and ERP.', 'Days Sales Outstanding (DSO)', '45-60'),
('L802005', 'Lever', 5, 'The O2C process is intelligent and predictive. The company uses AI to predict which customers are likely to pay late and recommend a personalized collections strategy.', 'Days Sales Outstanding (DSO)', '< 45');

-- D8 -> C803 -> L803001: ASC 606 / IFRS 15 Compliance
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L803001', 'Lever', 1, 'The company is not compliant with ASC 606. Revenue is recognized on a simple, cash or billing basis. This is a high audit risk.', 'Revenue Restatement Risk', 'High'),
('L803001', 'Lever', 2, 'The company begins to manually calculate revenue recognition in a complex spreadsheet. The process is error-prone and not scalable.', 'Revenue Restatement Risk', 'Medium'),
('L803001', 'Lever', 3, 'A dedicated revenue recognition automation tool is implemented. The system can handle basic subscription revenue recognition.', 'Revenue Restatement Risk', 'Low'),
('L803001', 'Lever', 4, 'The company has a mature, automated revenue recognition process. The system can handle complex scenarios like multi-element arrangements.', 'Revenue Restatement Risk', 'Very Low'),
('L803001', 'Lever', 5, 'The revenue recognition process is intelligent and fully automated. The system is deeply integrated with the CRM and billing system.', 'Revenue Restatement Risk', 'Near Zero');

-- D8 -> C803 -> L803002: Quote-to-Cash Process Automation
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L803002', 'Lever', 1, 'The Quote-to-Cash process is a series of manual handoffs between sales and finance. The process is slow, error-prone, and there is no visibility.', 'Quote-to-Cash Cycle Time', '> 45 days'),
('L803002', 'Lever', 2, 'A basic, one-way integration is built between the CRM and the accounting system. The process is still largely manual.', 'Quote-to-Cash Cycle Time', '30-45 days'),
('L803002', 'Lever', 3, 'A CPQ (Configure, Price, Quote) tool is implemented to standardize the quoting process. The billing system is integrated with the CRM.', 'Quote-to-Cash Cycle Time', '20-30 days'),
('L803002', 'Lever', 4, 'The Quote-to-Cash process is a fully automated, end-to-end process managed on an integrated platform. A dedicated RevOps team owns the process.', 'Quote-to-Cash Cycle Time', '10-20 days'),
('L803002', 'Lever', 5, 'The Quote-to-Cash process is intelligent. The company uses AI to provide sales reps with guided selling and intelligent pricing recommendations.', 'Quote-to-Cash Cycle Time', '< 10 days');

-- D8 -> C803 -> L803003: Billing & Collections Management
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L803003', 'Lever', 1, 'Billing is a manual process. Invoices are often inaccurate. There is no formal collections process.', 'Bad Debt Expense', '> 2.0%'),
('L803003', 'Lever', 2, 'A basic invoicing process is established in the accounting system. A dedicated person is assigned to follow up on overdue invoices.', 'Bad Debt Expense', '1.5% - 2.0%'),
('L803003', 'Lever', 3, 'The invoicing process is automated through a dedicated billing system. A formal collections process is in place with automated dunning emails.', 'Bad Debt Expense', '1.0% - 1.5%'),
('L803003', 'Lever', 4, 'The company has a mature, automated billing and collections operation. The system can handle complex billing models like usage-based.', 'Bad Debt Expense', '0.5% - 1.0%'),
('L803003', 'Lever', 5, 'The billing and collections process is intelligent and predictive. The company uses AI to predict which customers are likely to pay late.', 'Bad Debt Expense', '< 0.5%');

-- D8 -> C803 -> L803004: Sales Commission & Cost Accounting
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L803004', 'Lever', 1, 'Commissions are calculated manually in a spreadsheet. The company is not compliant with the cost accounting rules under ASC 606.', 'Commission Processing Time', '> 15 days'),
('L803004', 'Lever', 2, 'The commission calculation process is still manual, but the rules are well-documented. The company begins to manually calculate cost amortization.', 'Commission Processing Time', '10-15 days'),
('L803004', 'Lever', 3, 'A dedicated sales commission automation tool is implemented. The system can automate the calculation of complex commission plans.', 'Commission Processing Time', '5-10 days'),
('L803004', 'Lever', 4, 'The commission and cost accounting process is fully automated. The commission tool is integrated with the ERP.', 'Commission Processing Time', '2-5 days'),
('L803004', 'Lever', 5, 'The commission process is intelligent. The company uses the commission tool to model the financial impact of different commission plan designs.', 'Commission Processing Time', '< 2 days');

-- D8 -> C804 -> L804001: Tax Strategy & Compliance
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L804001', 'Lever', 1, 'Tax is handled by an external accountant once a year. There is no internal tax expertise or strategy.', 'Effective Tax Rate (ETR)', '> 30%'),
('L804001', 'Lever', 2, 'The company establishes a relationship with a larger accounting firm to handle tax compliance. The company begins to track its sales tax nexus.', 'Effective Tax Rate (ETR)', '25-30%'),
('L804001', 'Lever', 3, 'The company hires an in-house tax or finance person to manage compliance. A sales tax automation tool is implemented.', 'Effective Tax Rate (ETR)', '21-25%'),
('L804001', 'Lever', 4, 'A dedicated Tax team is in place. They have a strategic tax plan that is aligned with the business strategy.', 'Effective Tax Rate (ETR)', '18-21%'),
('L804001', 'Lever', 5, 'The Tax function is a strategic, predictive partner. The company uses advanced modeling to optimize its global tax structure.', 'Effective Tax Rate (ETR)', '< 18%');

-- D8 -> C804 -> L804002: Treasury & Cash Management
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L804002', 'Lever', 1, 'There is no formal cash management process. Cash is held in a single operating bank account. The company often has unexpected cash shortages.', 'Cash Conversion Cycle (CCC)', '> 120'),
('L804002', 'Lever', 2, 'A basic, manual cash flow forecast is created in a spreadsheet. The company establishes a basic line of credit with its bank.', 'Cash Conversion Cycle (CCC)', '90-120'),
('L804002', 'Lever', 3, 'A formal cash management process is in place. The company uses a more sophisticated, 13-week cash flow forecasting model.', 'Cash Conversion Cycle (CCC)', '60-90'),
('L804002', 'Lever', 4, 'A dedicated Treasury function is in place. They use a Treasury Management System (TMS) to automate daily cash management and forecasting.', 'Cash Conversion Cycle (CCC)', '30-60'),
('L804002', 'Lever', 5, 'The Treasury function is intelligent and predictive. The company uses an AI-powered platform to create a highly accurate, real-time cash forecast.', 'Cash Conversion Cycle (CCC)', '< 30');

-- D8 -> C805 -> L805001: Strategic Vendor Management
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L805001', 'Lever', 1, 'There is no vendor management. The company has hundreds of vendors, and there is no central visibility or control.', 'Percentage of Spend Under Management', '< 10%'),
('L805001', 'Lever', 2, 'A basic list of the company''s top vendors is created. The finance team begins to track spend with these vendors.', 'Percentage of Spend Under Management', '10-30%'),
('L805001', 'Lever', 3, 'A formal vendor management program is established. Key vendors are tiered, and a formal process for performance reviews is created.', 'Percentage of Spend Under Management', '30-60%'),
('L805001', 'Lever', 4, 'A dedicated strategic sourcing or vendor management team is in place. They have deep, collaborative relationships with the company''s key strategic partners.', 'Percentage of Spend Under Management', '60-80%'),
('L805001', 'Lever', 5, 'The vendor management process is intelligent and proactive. The company uses AI to analyze vendor performance data and predict potential supply chain risks.', 'Percentage of Spend Under Management', '> 80%');

-- D8 -> C805 -> L805002: Procurement Operations
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L805002', 'Lever', 1, 'There is no procurement process. Employees can buy whatever they want, often on their own credit cards. There is no control over spend.', 'Tail Spend', '> 20%'),
('L805002', 'Lever', 2, 'A basic procurement policy is created (e.g., requiring email approval for purchases over a certain amount).', 'Tail Spend', '15-20%'),
('L805002', 'Lever', 3, 'A procurement system is implemented to manage purchase orders and approvals. The system provides basic visibility into spend.', 'Tail Spend', '10-15%'),
('L805002', 'Lever', 4, 'The procurement process is a mature, automated function. The company has a "no PO, no pay" policy.', 'Tail Spend', '5-10%'),
('L805002', 'Lever', 5, 'The procurement process is intelligent. The company uses an AI-powered "guided buying" experience that helps employees make smart purchasing decisions.', 'Tail Spend', '< 5%');

-- D8 -> C805 -> L805003: Cloud FinOps
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L805003', 'Lever', 1, 'Cloud spend is unmanaged and grows unchecked. The monthly cloud bill is a surprise.', 'Cloud Cost Savings', '0%'),
('L805003', 'Lever', 2, 'The finance team begins to track and report on the monthly cloud bill. The team uses basic cost-saving measures, like shutting down idle instances manually.', 'Cloud Cost Savings', '< 2%'),
('L805003', 'Lever', 3, 'A dedicated FinOps analyst is hired. They use the cloud provider''s native cost management tools to analyze spend and identify waste.', 'Cloud Cost Savings', '2-5%'),
('L805003', 'Lever', 4, 'FinOps is a dedicated practice with a formal charter and executive support. The team uses a third-party Cloud Cost Management platform.', 'Cloud Cost Savings', '5-10%'),
('L805003', 'Lever', 5, 'The FinOps practice is intelligent and automated. The company uses an AI-powered platform to provide real-time cost visibility and automated optimization actions.', 'Cloud Cost Savings', '> 10%');

-- D9 -> C901 -> L901001: Talent Acquisition & Employer Brand
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L901001', 'Lever', 1, 'Recruiting is reactive and handled by hiring managers. There is no employer brand. The company struggles to hire.', 'Time to Fill', '> 90 days'),
('L901001', 'Lever', 2, 'A dedicated recruiter is hired. The company begins to post jobs on job boards and build a basic careers page.', 'Time to Fill', '60-90 days'),
('L901001', 'Lever', 3, 'An Applicant Tracking System (ATS) is implemented to manage the recruiting process. A formal, structured interview process is created.', 'Time to Fill', '45-60 days'),
('L901001', 'Lever', 4, 'Talent Acquisition is a strategic, data-driven function. The team has a proactive sourcing strategy and a strong employer brand.', 'Time to Fill', '30-45 days'),
('L901001', 'Lever', 5, 'The recruiting process is intelligent. The company uses AI to source candidates, screen resumes, and predict which candidates are most likely to be successful.', 'Time to Fill', '< 30 days');

-- D9 -> C901 -> L901002: Total Rewards & Compensation
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L901002', 'Lever', 1, 'Compensation is based on ad-hoc negotiations. There are no salary bands, leading to significant pay inequity.', 'Compa-Ratio', 'Not Measured'),
('L901002', 'Lever', 2, 'A basic set of salary bands are created based on informal market data. The company offers a standard benefits package.', 'Compa-Ratio', '< 0.9 or > 1.1'),
('L901002', 'Lever', 3, 'A formal compensation philosophy is created. The company uses a third-party compensation data provider to benchmark its salary bands.', 'Compa-Ratio', '0.90 - 0.95'),
('L901002', 'Lever', 4, 'The total rewards program is a strategic tool. The company has a clear pay-for-performance culture. The equity program is designed to create ownership.', 'Compa-Ratio', '0.95 - 1.05'),
('L901002', 'Lever', 5, 'The total rewards program is personalized and transparent. The company uses AI-powered tools to provide employees with real-time visibility into their total compensation.', 'Compa-Ratio', '~1.0');

-- D9 -> C901 -> L901003: Performance Management & Career Pathing
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L901003', 'Lever', 1, 'There is no formal performance management. Feedback is informal and inconsistent. Promotions are based on tenure, not merit.', 'Percentage of High-Performer Retention', '< 70%'),
('L901003', 'Lever', 2, 'A basic, annual performance review process is implemented. It is often a subjective, backward-looking exercise.', 'Percentage of High-Performer Retention', '70-80%'),
('L901003', 'Lever', 3, 'A modern performance management system is implemented. The company moves to a more frequent, lightweight check-in model.', 'Percentage of High-Performer Retention', '80-90%'),
('L901003', 'Lever', 4, 'Performance management is a continuous, forward-looking process. The company has a formal career pathing framework.', 'Percentage of High-Performer Retention', '90-95%'),
('L901003', 'Lever', 5, 'The performance management process is intelligent and developmental. The system uses AI to provide managers with real-time coaching.', 'Percentage of High-Performer Retention', '> 95%');

-- D9 -> C901 -> L901004: HR Operations & Systems (HRIS)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L901004', 'Lever', 1, 'HR operations are managed in a series of spreadsheets. The process is manual, error-prone, and not secure.', 'HR Cost per Employee', '> $3,000'),
('L901004', 'Lever', 2, 'An entry-level HRIS is implemented to manage basic employee data and payroll.', 'HR Cost per Employee', '$2,000 - $3,000'),
('L901004', 'Lever', 3, 'A modern, cloud-based HRIS is implemented. The system provides employee self-service capabilities.', 'HR Cost per Employee', '$1,500 - $2,000'),
('L901004', 'Lever', 4, 'The HRIS is the core of an integrated HR tech stack. It is connected to the ATS, performance management system, and LMS.', 'HR Cost per Employee', '$1,000 - $1,500'),
('L901004', 'Lever', 5, 'The HR operation is intelligent and automated. The company uses AI-powered chatbots to answer common employee HR questions.', 'HR Cost per Employee', '< $1,000');

-- D9 -> C902 -> L902001: Corporate Governance & Compliance
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L902001', 'Lever', 1, 'There is no in-house legal counsel. The company is often unaware of its compliance obligations.', 'Number of Compliance Breaches', '> 3'),
('L902001', 'Lever', 2, 'The company hires its first in-house lawyer (General Counsel). They focus on organizing corporate records and managing basic compliance.', 'Number of Compliance Breaches', '2-3'),
('L902001', 'Lever', 3, 'A formal compliance program is established. The team uses a compliance management tool to track and manage its obligations.', 'Number of Compliance Breaches', '1-2'),
('L902001', 'Lever', 4, 'The compliance program is a mature, data-driven function. The company has a robust set of corporate policies and a formal training program.', 'Number of Compliance Breaches', '1'),
('L902001', 'Lever', 5, 'The compliance program is intelligent and proactive. The company uses AI-powered tools to scan for new regulations and predict potential compliance risks.', 'Number of Compliance Breaches', '0');

-- D9 -> C902 -> L902002: Commercial & Contract Management
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L902002', 'Lever', 1, 'The sales team uses an old, unapproved contract template. There is no central repository for contracts.', 'Average Contract Turnaround Time', '> 10 days'),
('L902002', 'Lever', 2, 'The legal team creates a set of standard contract templates. Contracts are stored in a shared folder.', 'Average Contract Turnaround Time', '5-10 days'),
('L902002', 'Lever', 3, 'A Contract Lifecycle Management (CLM) system is implemented to act as a central repository and to manage the approval workflow.', 'Average Contract Turnaround Time', '2-5 days'),
('L902002', 'Lever', 4, 'The commercial legal function is a true business partner to the sales team. They have a playbook for negotiating common issues.', 'Average Contract Turnaround Time', '1-2 days'),
('L902002', 'Lever', 5, 'The contract management process is intelligent. The CLM uses AI to review and redline standard contracts and identify non-standard clauses.', 'Average Contract Turnaround Time', '< 1 day');

-- D9 -> C902 -> L902003: Intellectual Property (IP) Management
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L902003', 'Lever', 1, 'There is no IP strategy. The company is at risk of having its innovations copied by competitors.', 'Number of Issued Patents', '0'),
('L902003', 'Lever', 2, 'The company files for its first trademark and patent. The process is managed by outside counsel.', 'Number of Issued Patents', '1-5'),
('L902003', 'Lever', 3, 'A formal IP strategy is created. The company has a process for identifying and protecting new inventions.', 'Number of Issued Patents', '5-15'),
('L902003', 'Lever', 4, 'The IP portfolio is managed as a strategic asset. The company has a dedicated IP counsel (in-house or external).', 'Number of Issued Patents', '15-30'),
('L902003', 'Lever', 5, 'The IP strategy is intelligent and proactive. The company uses AI-powered tools to monitor the market for potential IP infringement.', 'Number of Issued Patents', '> 30');

-- D9 -> C903 -> L903001: Business Applications Management (ERP, CRM, etc.)
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L903001', 'Lever', 1, 'The business runs on a patchwork of spreadsheets. There are no core business systems.', 'Percentage of Core Processes on a Platform', '0%'),
('L903001', 'Lever', 2, 'The company implements its first, entry-level business systems (e.g., QuickBooks, a simple CRM). Data is siloed.', 'Percentage of Core Processes on a Platform', '< 25%'),
('L903001', 'Lever', 3, 'A modern, cloud-based suite of business applications is implemented. The IT team is responsible for managing these systems.', 'Percentage of Core Processes on a Platform', '25-60%'),
('L903001', 'Lever', 4, 'The business applications are managed as a cohesive, integrated platform. The IT team has a multi-year roadmap for the application portfolio.', 'Percentage of Core Processes on a Platform', '60-90%'),
('L903001', 'Lever', 5, 'The business application strategy is intelligent. The company uses AI-powered tools to automate workflows between systems.', 'Percentage of Core Processes on a Platform', '> 90%');

-- D9 -> C903 -> L903002: IT Infrastructure & End-User Computing
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L903002', 'Lever', 1, 'IT is a "one-person show" focused on fixing laptops. There is no standard hardware or software.', 'Employee Satisfaction with IT (IT CSAT)', '< 3.0'),
('L903002', 'Lever', 2, 'A dedicated IT team is created with a formal helpdesk and ticketing system. The team standardizes on hardware and core productivity applications.', 'Employee Satisfaction with IT (IT CSAT)', '3.0 - 3.5'),
('L903002', 'Lever', 3, 'A formal IT Service Management (ITSM) process is implemented. The team uses a modern device management platform to secure and manage laptops.', 'Employee Satisfaction with IT (IT CSAT)', '3.5 - 4.0'),
('L903002', 'Lever', 4, 'The IT infrastructure is a modern, cloud-first "zero trust" environment. The employee experience is a key focus.', 'Employee Satisfaction with IT (IT CSAT)', '4.0 - 4.5'),
('L903002', 'Lever', 5, 'The IT support experience is intelligent and proactive. The company uses AI-powered chatbots to resolve a significant percentage of helpdesk tickets.', 'Employee Satisfaction with IT (IT CSAT)', '> 4.5');

-- D9 -> C903 -> L903003: Corporate IT Security & Operations
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L903003', 'Lever', 1, 'There is no corporate security function. The company relies on basic, default security settings.', 'Mean Time To Remediate (MTTR) for Critical Corporate Vulnerabilities', '> 60 days'),
('L903003', 'Lever', 2, 'A basic set of security tools are deployed (e.g., antivirus, firewall).', 'Mean Time To Remediate (MTTR) for Critical Corporate Vulnerabilities', '30-60 days'),
('L903003', 'Lever', 3, 'A formal corporate security program is established. The company implements core security technologies, such as EDR and SSO.', 'Mean Time To Remediate (MTTR) for Critical Corporate Vulnerabilities', '15-30 days'),
('L903003', 'Lever', 4, 'The corporate security program is a mature, data-driven function. The company has a formal security operations center (SOC) and incident response plan.', 'Mean Time To Remediate (MTTR) for Critical Corporate Vulnerabilities', '7-15 days'),
('L903003', 'Lever', 5, 'The corporate security program is intelligent and predictive. The company uses an AI-powered security platform that can predict, detect, and automatically respond to threats.', 'Mean Time To Remediate (MTTR) for Critical Corporate Vulnerabilities', '< 7 days');

-- D9 -> C904 -> L904001: Real Estate & Workplace Strategy
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L904001', 'Lever', 1, 'The "workplace" is a single, basic office lease. There is no intentional design.', 'Cost per Employee (Real Estate)', '> $20k'),
('L904001', 'Lever', 2, 'The company begins to think about its workplace strategy. A dedicated office manager is hired. The focus is on basic operations.', 'Cost per Employee (Real Estate)', '$15k - $20k'),
('L904001', 'Lever', 3, 'The company invests in designing an office space that reflects its brand and culture. For remote employees, a formal work-from-home policy is created.', 'Cost per Employee (Real Estate)', '$12k - $15k'),
('L904001', 'Lever', 4, 'A dedicated Workplace Experience team is in place. They have a strategic plan for the company''s real estate portfolio and a formal hybrid work policy.', 'Cost per Employee (Real Estate)', '$8k - $12k'),
('L904001', 'Lever', 5, 'The workplace is an intelligent, flexible asset. The company uses smart office technology to optimize space utilization and the employee experience.', 'Cost per Employee (Real Estate)', '< $8k');

-- D9 -> C904 -> L904002: Facilities Management
INSERT INTO Maturity_Rubric (item_id, level_type, stage_number, description, kpi_name, kpi_target_value) VALUES
('L904002', 'Lever', 1, 'Facilities management is reactive (e.g., fixing a broken light after someone complains).', 'Employee Satisfaction with Workplace', '< 3.0'),
('L904002', 'Lever', 2, 'A dedicated office manager is responsible for facilities. They have a set of preferred vendors for key services.', 'Employee Satisfaction with Workplace', '3.0 - 3.5'),
('L904002', 'Lever', 3, 'A formal facilities management program is in place. The company uses a ticketing system to manage employee requests.', 'Employee Satisfaction with Workplace', '3.5 - 4.0'),
('L904002', 'Lever', 4, 'The facilities management is a data-driven, proactive function. The company uses an Integrated Workplace Management System (IWMS).', 'Employee Satisfaction with Workplace', '4.0 - 4.5'),
('L904002', 'Lever', 5, 'The facilities management is intelligent. The company uses smart office technology (e.g., IoT sensors) to proactively identify maintenance issues.', 'Employee Satisfaction with Workplace', '> 4.5');