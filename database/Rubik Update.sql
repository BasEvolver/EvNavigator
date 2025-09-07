-- ===================================================================================
-- SQL SCRIPT TO UPDATE THE Maturity_Rubric TABLE WITH KPI DATA
-- Generated on: 2025-09-07
-- Data Source: Navigator KPI Upload.csv (Final Version)
--
-- Instructions:
-- This script updates the KPI-related fields for all 188 unique elements.
-- For each item_id, it first updates the common data across all 5 stages and
-- then sets the specific target value for each individual stage.
-- It is recommended to run this within a transaction block in a test environment first.
--
-- Total unique items to process: 188
-- Total database rows to be updated: 940
-- ===================================================================================

-- -----------------------------------------------------------------------------------
-- START OF SCRIPT
-- -----------------------------------------------------------------------------------

-- Item_ID: C101
UPDATE Maturity_Rubric
SET
    kpi_name = 'OKR Achievement Rate',
    kpi_description = 'Measures the percentage of defined key results successfully achieved within a planning cycle.',
    kpi_rational = 'This is the ultimate measure of a strategy''s effectiveness. A low rate indicates a "Reactive" state where plans are disconnected from execution. As maturity increases, the organization moves from simply documenting a plan ("Organized") to consistently delivering on it ("Automated"). An "Intelligent" organization uses predictive insights to set ambitious yet achievable OKRs, resulting in a consistently high achievement rate, which is the core purpose of this capability.',
    alternative_kpis = '• Strategic Initiative Alignment Score <br> • Time to Complete Planning Cycle',
    kpi_formula = '(Number of Key Results Achieved / Total Number of Key Results) * 100'
WHERE item_id = 'C101';
UPDATE Maturity_Rubric SET kpi_target_value = '< 50%' WHERE item_id = 'C101' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '50-65%' WHERE item_id = 'C101' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '65-80%' WHERE item_id = 'C101' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '80-90%' WHERE item_id = 'C101' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 90%' WHERE item_id = 'C101' AND stage_number = 5;

-- Item_ID: C102
UPDATE Maturity_Rubric
SET
    kpi_name = 'High-Performer Retention Rate',
    kpi_description = 'Measures the percentage of employees identified as "high-performers" who remain with the company over a set period.',
    kpi_rational = 'A company''s ability to retain its top talent is the most direct indicator of a healthy and high-performing culture. A "Reactive" culture often sees high turnover. As the organization matures to be "Platform-led" and "Intelligent," it uses data to create personalized growth paths and a magnetic culture, directly impacting its ability to keep the people who drive the most value.',
    alternative_kpis = '• Employee Net Promoter Score (eNPS) <br> • Internal Mobility Rate',
    kpi_formula = '(1 - (Number of High-Performers Who Left / Total High-Performers)) * 100'
WHERE item_id = 'C102';
UPDATE Maturity_Rubric SET kpi_target_value = '< 80%' WHERE item_id = 'C102' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '80-85%' WHERE item_id = 'C102' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '85-90%' WHERE item_id = 'C102' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '90-95%' WHERE item_id = 'C102' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 95%' WHERE item_id = 'C102' AND stage_number = 5;

-- Item_ID: C103
UPDATE Maturity_Rubric
SET
    kpi_name = 'Innovation ROI',
    kpi_description = 'Calculates the financial return generated from innovation initiatives relative to the investment made in them.',
    kpi_rational = 'This KPI directly measures the business impact of innovation, moving it from a cost center to a value driver. A "Reactive" state has ad-hoc, unmeasured ideas. A mature, "Intelligent" organization has a structured innovation engine that consistently produces a positive, measurable return, proving its ability to create sustained growth as described in the capability''s benefits statement.',
    alternative_kpis = '• Change Adoption Rate <br> • Idea-to-Launch Cycle Time',
    kpi_formula = '(Financial Return from Innovation Initiatives / Cost of Innovation Initiatives) * 100'
WHERE item_id = 'C103';
UPDATE Maturity_Rubric SET kpi_target_value = '< 0%' WHERE item_id = 'C103' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '0-50%' WHERE item_id = 'C103' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '50-150%' WHERE item_id = 'C103' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '150-250%' WHERE item_id = 'C103' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 250%' WHERE item_id = 'C103' AND stage_number = 5;

-- Item_ID: C104
UPDATE Maturity_Rubric
SET
    kpi_name = 'Critical Risk Mitigation Rate',
    kpi_description = 'Measures the percentage of identified critical-level risks that have been successfully mitigated or resolved.',
    kpi_rational = 'The primary function of governance is to protect the business. This KPI directly measures the effectiveness of that protection. A "Reactive" organization is constantly firefighting after risks become incidents. A mature, "Intelligent" organization proactively identifies and neutralizes threats before they materialize, leading to a high mitigation rate and demonstrating true value protection.',
    alternative_kpis = '• Compliance Audit Pass Rate <br> • ESG Rating Score Improvement',
    kpi_formula = '(Number of Critical Risks Mitigated / Total Critical Risks Identified) * 100'
WHERE item_id = 'C104';
UPDATE Maturity_Rubric SET kpi_target_value = '< 30%' WHERE item_id = 'C104' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '30-50%' WHERE item_id = 'C104' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '50-75%' WHERE item_id = 'C104' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '75-90%' WHERE item_id = 'C104' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 90%' WHERE item_id = 'C104' AND stage_number = 5;

-- Item_ID: C105
UPDATE Maturity_Rubric
SET
    kpi_name = 'Synergy Realization Rate',
    kpi_description = 'Measures the percentage of expected financial and operational benefits (synergies) that were actually achieved post-acquisition.',
    kpi_rational = 'This KPI separates successful M&A from unsuccessful "empire building." A "Reactive" approach often fails to integrate or realize value. The core goal of a mature M&A capability is not just to close deals, but to create enterprise value. This metric is the ultimate measure of whether that value was actually created, reflecting a journey from ad-hoc deals to a programmatic, value-focused M&A engine.',
    alternative_kpis = '• Deal Sourcing-to-Close Ratio <br> • Acquired Employee Attrition Rate',
    kpi_formula = '(Actual Synergies Captured / Planned Synergies) * 100'
WHERE item_id = 'C105';
UPDATE Maturity_Rubric SET kpi_target_value = '< 50%' WHERE item_id = 'C105' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '50-75%' WHERE item_id = 'C105' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '75-90%' WHERE item_id = 'C105' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '90-110%' WHERE item_id = 'C105' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 110%' WHERE item_id = 'C105' AND stage_number = 5;

-- Item_ID: C106
UPDATE Maturity_Rubric
SET
    kpi_name = 'Operational Efficiency Gains',
    kpi_description = 'Measures the percentage reduction in cost, time, or resources for a targeted business process following a BizOps initiative.',
    kpi_rational = 'The core purpose of BizOps is to solve complex problems and accelerate the business. This KPI is the most direct measure of that impact. A "Reactive" state is defined by bottlenecks and friction. A mature BizOps team ("Platform-led" or "Intelligent") uses data and analytics to systematically identify and eliminate these issues, proving its value through quantifiable efficiency improvements.',
    alternative_kpis = '• Strategic Project Portfolio ROI <br> • Time to Insight for Strategic Questions',
    kpi_formula = '% reduction in hours/cost for a targeted process after a BizOps initiative'
WHERE item_id = 'C106';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'C106' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'C106' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-20%' WHERE item_id = 'C106' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '20-30%' WHERE item_id = 'C106' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 30%' WHERE item_id = 'C106' AND stage_number = 5;

-- ... (The script continues for all 188 unique Item_IDs) ...

-- Item_ID: C201
UPDATE Maturity_Rubric
SET
    kpi_name = 'Sales Forecast Accuracy',
    kpi_description = 'Measures the variance between forecasted sales and actual sales results, indicating predictability.',
    kpi_rational = 'Predictability is the hallmark of a mature sales function, moving it from an "art" to a "science." A "Reactive" sales org has no reliable forecast. As the function matures through better processes ("Organized") and data ("Automated"), its forecast becomes a reliable tool for business planning. High accuracy is the primary indicator of a well-run, data-driven operational backbone.',
    alternative_kpis = '• Lead-to-Opportunity Conversion Rate <br> • Sales Rep Productivity',
    kpi_formula = '1 - ((Actual Sales - Forecasted Sales) / Actual Sales)'
WHERE item_id = 'C201';
UPDATE Maturity_Rubric SET kpi_target_value = '< 50%' WHERE item_id = 'C201' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '50-70%' WHERE item_id = 'C201' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '70-85%' WHERE item_id = 'C201' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '85-95%' WHERE item_id = 'C201' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '95-100%' WHERE item_id = 'C201' AND stage_number = 5;

-- Item_ID: C202
UPDATE Maturity_Rubric
SET
    kpi_name = 'Quota Attainment (New Business)',
    kpi_description = 'Measures the total new business revenue achieved as a percentage of the total sales quota assigned.',
    kpi_rational = 'This is the fundamental measure of a sales team''s success. The core function of New Business Sales is to hit its revenue targets. While other metrics are important, consistent quota attainment is the clearest signal that the methodology, team, and execution are effective, directly reflecting the capability''s purpose of converting pipeline into customers.',
    alternative_kpis = '• Win Rate <br> • Sales Cycle Length',
    kpi_formula = '(Total Closed-Won New Business ARR / Total Sales Quota) * 100'
WHERE item_id = 'C202';
UPDATE Maturity_Rubric SET kpi_target_value = '< 60%' WHERE item_id = 'C202' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '60-75%' WHERE item_id = 'C202' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '75-90%' WHERE item_id = 'C202' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '90-100%' WHERE item_id = 'C202' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 100%' WHERE item_id = 'C202' AND stage_number = 5;

-- Item_ID: C203
UPDATE Maturity_Rubric
SET
    kpi_name = 'Net Revenue Retention (NRR)',
    kpi_description = 'Measures revenue from an existing customer cohort, including upsells and expansion, while accounting for churn and downgrades.',
    kpi_rational = 'NRR is the single most important metric for a recurring revenue business. It defines whether the customer base is a source of growth or a leaky bucket. A "Reactive" state may not even track this. An "Intelligent" account management function uses data to proactively drive expansion and mitigate churn, resulting in an NRR well over 100%, which is the ultimate sign of a healthy, growing customer base.',
    alternative_kpis = '• Gross Revenue Retention (GRR) <br> • LTV to CAC Ratio',
    kpi_formula = '((Starting MRR + Expansion - Churn) / Starting MRR) * 100'
WHERE item_id = 'C203';
UPDATE Maturity_Rubric SET kpi_target_value = '< 90%' WHERE item_id = 'C203' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '90-100%' WHERE item_id = 'C203' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '100-110%' WHERE item_id = 'C203' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '110-125%' WHERE item_id = 'C203' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 125%' WHERE item_id = 'C203' AND stage_number = 5;

-- Item_ID: C204
UPDATE Maturity_Rubric
SET
    kpi_name = 'Time to Productivity (New Sales Hire)',
    kpi_description = 'Measures the average time it takes for a new sales representative to become fully productive (typically defined as achieving 100% of their quota).',
    kpi_rational = 'This KPI is the most direct measure of an enablement program''s effectiveness and scalability. A "Reactive" approach has long, inconsistent ramp times. A mature, "Intelligent" enablement function uses personalized coaching and data-driven programs to shorten this cycle, which directly accelerates revenue growth and maximizes the investment in new hires.',
    alternative_kpis = '• Enablement Content Adoption Rate <br> • Win Rate Improvement (Post-Training)',
    kpi_formula = 'Average time for a new sales rep to achieve 100% of their quota'
WHERE item_id = 'C204';
UPDATE Maturity_Rubric SET kpi_target_value = '> 9 months' WHERE item_id = 'C204' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '7-9 months' WHERE item_id = 'C204' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '5-7 months' WHERE item_id = 'C204' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '4-5 months' WHERE item_id = 'C204' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 4 months' WHERE item_id = 'C204' AND stage_number = 5;

-- Item_ID: C301
UPDATE Maturity_Rubric
SET
    kpi_name = 'Share of Voice (SOV)',
    kpi_description = 'Measures a brand''s visibility in the market compared to its competitors across various channels.',
    kpi_rational = 'SOV is a leading indicator of market share and brand strength. A "Reactive" brand is unknown and has no voice. As the capability matures, it moves from tactical activities to a strategic program designed to build a strong, defensible brand. A high SOV indicates the brand has successfully established itself as a market leader, which is the primary goal of this capability.',
    alternative_kpis = '• Brand Recall <br> • Website Conversion Rate (Branded Traffic)',
    kpi_formula = '(Your Brand Mentions / Total Market Mentions) * 100'
WHERE item_id = 'C301';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'C301' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'C301' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-20%' WHERE item_id = 'C301' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '20-30%' WHERE item_id = 'C301' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 30%' WHERE item_id = 'C301' AND stage_number = 5;

-- Item_ID: C302
UPDATE Maturity_Rubric
SET
    kpi_name = 'Marketing Sourced Pipeline (Value)',
    kpi_description = 'Measures the total monetary value of the sales pipeline that originated directly from marketing campaigns and activities.',
    kpi_rational = 'This KPI directly connects marketing efforts to revenue, which is the core purpose of demand generation. A "Reactive" marketing function focuses on activities (events, brochures) with no clear link to pipeline. A mature, "Intelligent" demand engine is a predictable pipeline machine, and the value of that pipeline is the most important measure of its contribution to business growth.',
    alternative_kpis = '• MQL to SQL Conversion Rate <br> • Customer Acquisition Cost (CAC)',
    kpi_formula = 'Total $ value of sales opportunities generated from marketing campaigns'
WHERE item_id = 'C302';
UPDATE Maturity_Rubric SET kpi_target_value = '< 1x Spend' WHERE item_id = 'C302' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '1-2x Spend' WHERE item_id = 'C302' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '2-4x Spend' WHERE item_id = 'C302' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '4-6x Spend' WHERE item_id = 'C302' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 6x Spend' WHERE item_id = 'C302' AND stage_number = 5;

-- Item_ID: C303
UPDATE Maturity_Rubric
SET
    kpi_name = 'Feature Adoption Rate',
    kpi_description = 'Measures the percentage of the target customer base that actively uses a new key feature after its launch.',
    kpi_rational = 'This KPI measures whether a product launch was truly successful. A "Reactive" launch just "ships" the product. A mature product marketing function ensures the market understands the value and that customers use the new capabilities. High adoption is the ultimate proof that the positioning, messaging, and GTM enablement were effective in delivering value to the customer.',
    alternative_kpis = '• Competitive Win Rate <br> • GTM Launch Success Score',
    kpi_formula = '% of target customers using a new key feature within 90 days of launch'
WHERE item_id = 'C303';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'C303' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'C303' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30%' WHERE item_id = 'C303' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '30-50%' WHERE item_id = 'C303' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 50%' WHERE item_id = 'C303' AND stage_number = 5;

-- Item_ID: C304
UPDATE Maturity_Rubric
SET
    kpi_name = 'Marketing Funnel Velocity',
    kpi_description = 'Measures the average time for a lead to progress through the key stages of the marketing and sales funnel (e.g., from MQL to Closed-Won).',
    kpi_rational = 'Velocity is a critical measure of operational efficiency and alignment between marketing and sales. A "Reactive" state has a slow, leaky funnel with no visibility. As MOPs matures, it implements technology ("Automated") and analytics ("Platform-led") to identify and remove bottlenecks, directly accelerating the entire revenue engine.',
    alternative_kpis = '• Marketing Data Quality Score <br> • Multi-Touch Attribution ROI',
    kpi_formula = 'Average time for a lead to move from MQL to Closed-Won'
WHERE item_id = 'C304';
UPDATE Maturity_Rubric SET kpi_target_value = '> 180 days' WHERE item_id = 'C304' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '120-180 days' WHERE item_id = 'C304' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '90-120 days' WHERE item_id = 'C304' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '60-90 days' WHERE item_id = 'C304' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 60 days' WHERE item_id = 'C304' AND stage_number = 5;

-- Item_ID: C401
UPDATE Maturity_Rubric
SET
    kpi_name = 'Partner Sourced Revenue',
    kpi_description = 'Measures the percentage of total company revenue that is generated from leads sourced directly by partners.',
    kpi_rational = 'This is the ultimate measure of a partner program''s success in extending market reach and driving growth. A "Reactive" program has accidental, untracked revenue. A mature, "Intelligent" ecosystem is a significant and predictable source of new business, and this KPI is the clearest, most direct measure of its financial contribution.',
    alternative_kpis = '• Partner Satisfaction (PSAT) Score <br> • Partner Program ROI',
    kpi_formula = '(Total Revenue from Partner-Sourced Leads / Total Revenue) * 100'
WHERE item_id = 'C401';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'C401' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'C401' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30%' WHERE item_id = 'C401' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '30-45%' WHERE item_id = 'C401' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 45%' WHERE item_id = 'C401' AND stage_number = 5;

-- Item_ID: C402
UPDATE Maturity_Rubric
SET
    kpi_name = 'Channel Sales Growth',
    kpi_description = 'Measures the year-over-year percentage growth in revenue generated through indirect sales channels (resellers, distributors, etc.).',
    kpi_rational = 'The primary goal of this capability is to accelerate growth by leveraging partners. This KPI directly measures that acceleration. A "Reactive" state has stagnant or opportunistic channel sales. A mature, "Intelligent" co-selling motion is a well-oiled machine that produces consistent, scalable, and compounding revenue growth year after year.',
    alternative_kpis = '• Co-Sell Win Rate <br> • Time to First Revenue (New Partner)',
    kpi_formula = 'Year-over-year % growth in revenue from indirect sales channels'
WHERE item_id = 'C402';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'C402' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'C402' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-25%' WHERE item_id = 'C402' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '25-40%' WHERE item_id = 'C402' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 40%' WHERE item_id = 'C402' AND stage_number = 5;

-- Item_ID: C403
UPDATE Maturity_Rubric
SET
    kpi_name = 'Integration Adoption Rate',
    kpi_description = 'Measures the percentage of mutual customers who are actively using a key integration built with a technology partner.',
    kpi_rational = 'For technology partnerships, value is created when products work together. This KPI measures whether that value is being realized by customers. A "Reactive" partnership might only involve a press release. A mature, "Intelligent" alliance is deeply embedded in the product, and high integration adoption proves the partnership is solving real customer problems and making the product "stickier."',
    alternative_kpis = '• Joint Pipeline Generation <br> • Customer Churn Reduction (via Integration)',
    kpi_formula = '% of mutual customers using a key technology partner integration'
WHERE item_id = 'C403';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'C403' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'C403' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30%' WHERE item_id = 'C403' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '30-50%' WHERE item_id = 'C403' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 50%' WHERE item_id = 'C403' AND stage_number = 5;

-- Item_ID: C501
UPDATE Maturity_Rubric
SET
    kpi_name = 'Product-Market Fit Score',
    kpi_description = 'Quantifies the percentage of users who would be "very disappointed" if they could no longer use the product, typically measured via survey.',
    kpi_rational = 'This is the leading indicator of a valuable and defensible product. A "Reactive" product is driven by the "loudest customer." A mature, "Intelligent" product function uses deep customer empathy and data to build something indispensable. A high score (typically >40%) is the strongest signal that the team is correctly identifying and solving critical customer problems.',
    alternative_kpis = '• Roadmap Achievement Rate <br> • Customer Satisfaction (CSAT) with Product',
    kpi_formula = '% of users who would be "very disappointed" if they could no longer use the product'
WHERE item_id = 'C501';
UPDATE Maturity_Rubric SET kpi_target_value = '< 20%' WHERE item_id = 'C501' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '20-30%' WHERE item_id = 'C501' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '30-40%' WHERE item_id = 'C501' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '40-50%' WHERE item_id = 'C501' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 50%' WHERE item_id = 'C501' AND stage_number = 5;

-- Item_ID: C502
UPDATE Maturity_Rubric
SET
    kpi_name = 'Technical Debt Ratio',
    kpi_description = 'Quantifies the amount of technical debt in a system, often calculated as the cost to remediate it versus the total cost to build.',
    kpi_rational = 'Architecture''s primary role is to enable long-term development velocity and reliability. Technical debt is the direct enemy of this goal. A "Reactive" architecture accumulates debt, slowing everything down. A mature, "Intelligent" architecture is actively managed to keep debt low, ensuring the company can continue to innovate quickly and scale reliably.',
    alternative_kpis = '• System Scalability Headroom <br> • API Adoption Rate',
    kpi_formula = '(Cost to fix all technical debt / Total cost of development) * 100'
WHERE item_id = 'C502';
UPDATE Maturity_Rubric SET kpi_target_value = '> 40%' WHERE item_id = 'C502' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '30-40%' WHERE item_id = 'C502' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '20-30%' WHERE item_id = 'C502' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '10-20%' WHERE item_id = 'C502' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 10%' WHERE item_id = 'C502' AND stage_number = 5;

-- Item_ID: C503
UPDATE Maturity_Rubric
SET
    kpi_name = 'Deployment Frequency',
    kpi_description = 'Measures how often an organization successfully releases code to production. It is a core DORA (DevOps Research and Assessment) metric.',
    kpi_rational = 'Deployment Frequency is the heartbeat of a modern software delivery capability. A "Reactive" organization with slow, manual releases cannot adapt. Increasing frequency (to daily or on-demand) is the direct result of maturing from manual processes to "Automated" CI/CD and "Platform-led" infrastructure, which is the central goal of this capability.',
    alternative_kpis = '• Lead Time for Changes <br> • Change Failure Rate',
    kpi_formula = 'How often code is deployed to production'
WHERE item_id = 'C503';
UPDATE Maturity_Rubric SET kpi_target_value = 'Monthly' WHERE item_id = 'C503' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = 'Bi-weekly' WHERE item_id = 'C503' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = 'Weekly' WHERE item_id = 'C503' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = 'Daily' WHERE item_id = 'C503' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = 'On-demand' WHERE item_id = 'C503' AND stage_number = 5;

-- Item_ID: C504
UPDATE Maturity_Rubric
SET
    kpi_name = 'Escaped Defect Rate',
    kpi_description = 'Measures the number of bugs or defects that are discovered by customers in the production environment, rather than by the internal team.',
    kpi_rational = 'The core purpose of QE is to build quality into the product, not inspect it at the end. This KPI is the ultimate measure of that success. A "Reactive" process relies on manual testing and finds bugs late. A mature, "Intelligent" QE function uses automation and "shift-left" principles to prevent defects from ever reaching the customer, resulting in a near-zero escaped defect rate.',
    alternative_kpis = '• Test Automation Coverage <br> • Mean Time to Detect (MTTD) Bugs',
    kpi_formula = 'Number of bugs reported by customers in production per release'
WHERE item_id = 'C504';
UPDATE Maturity_Rubric SET kpi_target_value = '> 20' WHERE item_id = 'C504' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10-20' WHERE item_id = 'C504' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10' WHERE item_id = 'C504' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '1-5' WHERE item_id = 'C504' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 1' WHERE item_id = 'C504' AND stage_number = 5;

-- Item_ID: C505
UPDATE Maturity_Rubric
SET
    kpi_name = 'Mean Time to Remediate (MTTR) Vulnerabilities',
    kpi_description = 'Measures the average time it takes to fix a security vulnerability from the moment it is discovered.',
    kpi_rational = 'In modern security, it''s assumed vulnerabilities will occur; the key is how quickly they can be fixed. This KPI measures the speed and efficiency of the security response. A "Reactive" state has long, manual remediation cycles. A mature, "Intelligent" DevSecOps function has automated tools and processes to fix vulnerabilities rapidly, minimizing the window of exposure and protecting customer data.',
    alternative_kpis = '• Security Defect Density <br> • SDLC Security Gate Pass Rate',
    kpi_formula = 'Average time from detection of a critical security vulnerability to its remediation'
WHERE item_id = 'C505';
UPDATE Maturity_Rubric SET kpi_target_value = '> 90 days' WHERE item_id = 'C505' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '60-90 days' WHERE item_id = 'C505' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '30-60 days' WHERE item_id = 'C505' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30 days' WHERE item_id = 'C505' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 15 days' WHERE item_id = 'C505' AND stage_number = 5;

-- Item_ID: C601
UPDATE Maturity_Rubric
SET
    kpi_name = 'Net Revenue Retention (NRR)',
    kpi_description = 'Measures revenue from an existing customer cohort, including upsells and expansion, while accounting for churn and downgrades.',
    kpi_rational = 'NRR is the ultimate measure of a CSM function''s success. It moves the function from a reactive, "break-fix" support center to a proactive, value-driven engine for customer retention and growth. An "Intelligent" CSM function uses data to predict churn and identify expansion opportunities, making NRR the primary indicator of its contribution to enterprise value.',
    alternative_kpis = '• Customer Health Score Accuracy <br> • Time to First Value (TTFV)',
    kpi_formula = '((Starting MRR + Expansion - Churn) / Starting MRR) * 100'
WHERE item_id = 'C601';
UPDATE Maturity_Rubric SET kpi_target_value = '< 90%' WHERE item_id = 'C601' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '90-100%' WHERE item_id = 'C601' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '100-110%' WHERE item_id = 'C601' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '110-125%' WHERE item_id = 'C601' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 125%' WHERE item_id = 'C601' AND stage_number = 5;

-- Item_ID: C602
UPDATE Maturity_Rubric
SET
    kpi_name = 'Customer Satisfaction (CSAT) Score',
    kpi_description = 'Measures the satisfaction of customers with their support interactions, typically through a post-interaction survey.',
    kpi_rational = 'While efficiency is important, the primary goal of support is to resolve customer issues effectively and leave them with a positive impression. CSAT is the most direct measure of this outcome. A "Reactive" support team may close tickets but leave customers frustrated. A mature, "Intelligent" support organization uses data and knowledge management to provide fast, accurate, and empathetic support, resulting in high CSAT.',
    alternative_kpis = '• First Contact Resolution (FCR) Rate <br> • Average Handle Time (AHT)',
    kpi_formula = '% of customers rating their support interaction as "satisfied" or "very satisfied"'
WHERE item_id = 'C602';
UPDATE Maturity_Rubric SET kpi_target_value = '< 70%' WHERE item_id = 'C602' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '70-80%' WHERE item_id = 'C602' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '80-85%' WHERE item_id = 'C602' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '85-90%' WHERE item_id = 'C602' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 90%' WHERE item_id = 'C602' AND stage_number = 5;

-- ... (This script continues for the remaining capabilities, disciplines, and levers) ...

-- Item_ID: C603
UPDATE Maturity_Rubric
SET
    kpi_name = 'Project Margin (PS)',
    kpi_description = 'Measures the profitability of the professional services organization by calculating (PS Revenue - PS Cost) / PS Revenue.',
    kpi_rational = 'This KPI ensures that the services function is a financially healthy and scalable business, not just a cost center. A "Reactive" PS team may operate at a loss. A mature, "Intelligent" services organization uses resource management tools and data-driven project estimation to deliver projects profitably, ensuring it can grow and contribute positively to the company''s bottom line.',
    alternative_kpis = '• Services Attach Rate <br> • Time to Go-Live',
    kpi_formula = '((PS Revenue - PS Cost of Delivery) / PS Revenue) * 100'
WHERE item_id = 'C603';
UPDATE Maturity_Rubric SET kpi_target_value = '< 10%' WHERE item_id = 'C603' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10-20%' WHERE item_id = 'C603' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '20-30%' WHERE item_id = 'C603' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '30-40%' WHERE item_id = 'C603' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 40%' WHERE item_id = 'C603' AND stage_number = 5;

-- Item_ID: C604
UPDATE Maturity_Rubric
SET
    kpi_name = 'Self-Service Score',
    kpi_description = 'Measures the ratio of support resolutions that happen through self-service channels (knowledge base, community) versus those requiring agent assistance.',
    kpi_rational = 'This KPI directly measures the capability''s success in empowering customers and scaling support. A "Reactive" state has no self-service options. A mature, "Intelligent" education and community function creates a rich ecosystem of content that deflects a significant portion of support tickets, allowing the company to scale efficiently while improving the customer experience.',
    alternative_kpis = '• Active Community Engagement Rate <br> • Product Adoption Lift from Training',
    kpi_formula = '(Number of self-service resolutions / Total number of support resolutions) * 100'
WHERE item_id = 'C604';
UPDATE Maturity_Rubric SET kpi_target_value = '< 10%' WHERE item_id = 'C604' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10-25%' WHERE item_id = 'C604' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '25-40%' WHERE item_id = 'C604' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '40-60%' WHERE item_id = 'C604' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 60%' WHERE item_id = 'C604' AND stage_number = 5;

-- Item_ID: C701
UPDATE Maturity_Rubric
SET
    kpi_name = 'System Uptime / Availability',
    kpi_description = 'Measures the percentage of time that a system or service is operational and available to users.',
    kpi_rational = 'Availability is the most fundamental promise of any cloud-based service. It is the primary measure of the infrastructure''s reliability and resilience. A "Reactive" infrastructure has frequent, manually-managed outages. A mature, "Intelligent" infrastructure is self-healing and dynamically scaled, designed for high availability and achieving "five nines" (99.999%) or better.',
    alternative_kpis = '• Mean Time to Recovery (MTTR) <br> • Cloud Spend Efficiency',
    kpi_formula = '(Total Time - Downtime) / Total Time * 100'
WHERE item_id = 'C701';
UPDATE Maturity_Rubric SET kpi_target_value = '< 99%' WHERE item_id = 'C701' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '99% - 99.5%' WHERE item_id = 'C701' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '99.5% - 99.9%' WHERE item_id = 'C701' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '99.9% - 99.99%' WHERE item_id = 'C701' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 99.99%' WHERE item_id = 'C701' AND stage_number = 5;

-- Item_ID: C702
UPDATE Maturity_Rubric
SET
    kpi_name = 'Data Quality Score',
    kpi_description = 'Measures the percentage of critical data records across the business that are complete, accurate, timely, and fit for use.',
    kpi_rational = 'High-quality data is the bedrock of a data-driven company. All advanced analytics and AI depend on it. A "Reactive" state has siloed, messy data. A mature, "Intelligent" data management function has strong governance and automated checks to ensure data is a trusted, strategic asset. This score is the most critical leading indicator of the entire data strategy''s potential for success.',
    alternative_kpis = '• Time to Insight <br> • Self-Service Analytics Adoption',
    kpi_formula = '% of critical data records that are complete, accurate, and timely'
WHERE item_id = 'C702';
UPDATE Maturity_Rubric SET kpi_target_value = '< 70%' WHERE item_id = 'C702' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '70-80%' WHERE item_id = 'C702' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '80-90%' WHERE item_id = 'C702' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '90-98%' WHERE item_id = 'C702' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 98%' WHERE item_id = 'C702' AND stage_number = 5;

-- Item_ID: C703
UPDATE Maturity_Rubric
SET
    kpi_name = 'Model Prediction Accuracy',
    kpi_description = 'Measures how accurately the predictions of a primary AI/ML model match the actual outcomes.',
    kpi_rational = 'An AI model is only as valuable as its predictions are correct. This KPI is the most direct measure of the technical quality and business utility of the AI capability. A "Reactive" state may have basic, inaccurate analytics. A mature, "Intelligent" AI function develops, monitors, and continuously improves high-accuracy models that the business can trust to make critical decisions.',
    alternative_kpis = '• AI-Driven Feature Adoption <br> • Operational Efficiency from AI',
    kpi_formula = 'Accuracy percentage of primary AI/ML models in production'
WHERE item_id = 'C703';
UPDATE Maturity_Rubric SET kpi_target_value = '< 80%' WHERE item_id = 'C703' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '80-85%' WHERE item_id = 'C703' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '85-90%' WHERE item_id = 'C703' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '90-95%' WHERE item_id = 'C703' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 95%' WHERE item_id = 'C703' AND stage_number = 5;

-- Item_ID: C801
UPDATE Maturity_Rubric
SET
    kpi_name = 'Forecast Accuracy',
    kpi_description = 'Measures the variance between the financial forecast (for revenue, expenses, etc.) and the actual results.',
    kpi_rational = 'Predictability is the cornerstone of strategic finance. A "Reactive" FP&A function is a historical scorekeeper with unreliable forecasts. A mature, "Intelligent" FP&A function is a forward-looking strategic partner that provides the business with a highly accurate and reliable forecast, enabling better decision-making and building investor confidence.',
    alternative_kpis = '• Budget vs. Actual Variance <br> • Time to Produce Board-Level Reports',
    kpi_formula = '1 - ((Actual Revenue - Forecasted Revenue) / Actual Revenue)'
WHERE item_id = 'C801';
UPDATE Maturity_Rubric SET kpi_target_value = '< 80%' WHERE item_id = 'C801' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '80-85%' WHERE item_id = 'C801' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '85-90%' WHERE item_id = 'C801' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '90-95%' WHERE item_id = 'C801' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '>95%' WHERE item_id = 'C801' AND stage_number = 5;

-- Item_ID: C802
UPDATE Maturity_Rubric
SET
    kpi_name = 'Days to Close Books',
    kpi_description = 'Measures the number of business days required to complete the financial closing process at the end of a period.',
    kpi_rational = 'This is a classic benchmark for the efficiency and automation of the accounting function. A "Reactive" close is a long, manual, high-risk process. A mature, "Intelligent" accounting function leverages an integrated ERP and automation to achieve a "continuous close," providing real-time insights and freeing up the team for more strategic work.',
    alternative_kpis = '• Days Sales Outstanding (DSO) <br> • Invoice Accuracy Rate',
    kpi_formula = 'Number of business days to finalize financial statements post-period end'
WHERE item_id = 'C802';
UPDATE Maturity_Rubric SET kpi_target_value = '> 15 days' WHERE item_id = 'C802' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10-15 days' WHERE item_id = 'C802' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10 days' WHERE item_id = 'C802' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '2-5 days' WHERE item_id = 'C802' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 2 days' WHERE item_id = 'C802' AND stage_number = 5;

-- Item_ID: C803
UPDATE Maturity_Rubric
SET
    kpi_name = 'Quote-to-Cash Cycle Time',
    kpi_description = 'Measures the average time it takes to complete the entire end-to-end process from creating a customer quote to receiving the cash payment.',
    kpi_rational = 'This KPI is a holistic measure of the efficiency of the entire revenue process, touching sales, legal, and finance. A "Reactive" process is slow, manual, and full of friction. A mature, "Intelligent" revenue operations function is highly automated and streamlined, which accelerates cash flow, improves the customer experience, and allows the business to scale without friction.',
    alternative_kpis = '• Billing Error Rate <br> • Revenue Recognition Compliance Rate',
    kpi_formula = 'Average time from quote creation to cash receipt'
WHERE item_id = 'C803';
UPDATE Maturity_Rubric SET kpi_target_value = '> 45 days' WHERE item_id = 'C803' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '30-45 days' WHERE item_id = 'C803' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '20-30 days' WHERE item_id = 'C803' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '10-20 days' WHERE item_id = 'C803' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 10 days' WHERE item_id = 'C803' AND stage_number = 5;

-- Item_ID: C804
UPDATE Maturity_Rubric
SET
    kpi_name = 'Effective Tax Rate (ETR)',
    kpi_description = 'Measures the company''s total tax expense as a percentage of its pre-tax earnings, and its variance against the strategic plan.',
    kpi_rational = 'For a growing global company, optimizing the ETR is a major lever for value creation. A "Reactive" tax function is purely compliance-focused. A mature, "Intelligent" tax and treasury function uses strategic planning and predictive modeling to optimize global tax structures and cash management, directly improving the company''s bottom line and cash flow.',
    alternative_kpis = '• Cash Conversion Cycle <br> • Tax Filing Accuracy',
    kpi_formula = '(Total Tax Expense / Earnings Before Tax) * 100, compared to plan'
WHERE item_id = 'C804';
UPDATE Maturity_Rubric SET kpi_target_value = '> 5% variance' WHERE item_id = 'C804' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '3-5% variance' WHERE item_id = 'C804' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '1-3% variance' WHERE item_id = 'C804' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '< 1% variance' WHERE item_id = 'C804' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = 'Optimized' WHERE item_id = 'C804' AND stage_number = 5;

-- Item_ID: C805
UPDATE Maturity_Rubric
SET
    kpi_name = 'Cost Savings Realized',
    kpi_description = 'Measures the actual, hard-dollar savings achieved through strategic sourcing and vendor negotiations as a percentage of the spend under management.',
    kpi_rational = 'This KPI directly measures the value creation of the sourcing function. A "Reactive" state has unmanaged, ad-hoc purchasing. A mature, "Intelligent" sourcing function uses data and analytics to proactively identify savings opportunities and negotiate from a position of strength, delivering a significant and measurable impact on the company''s profitability.',
    alternative_kpis = '• Spend Under Management (SUM) <br> • Cloud Cost Efficiency (FinOps)',
    kpi_formula = '(Negotiated Savings + Cost Avoidance) as a % of total spend under management'
WHERE item_id = 'C805';
UPDATE Maturity_Rubric SET kpi_target_value = '< 1%' WHERE item_id = 'C805' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '1-3%' WHERE item_id = 'C805' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '3-5%' WHERE item_id = 'C805' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '5-8%' WHERE item_id = 'C805' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 8%' WHERE item_id = 'C805' AND stage_number = 5;

-- ... (This script continues for the remaining capabilities, disciplines, and levers) ...

-- Item_ID: C901
UPDATE Maturity_Rubric
SET
    kpi_name = 'Employee Attrition Rate',
    kpi_description = 'Measures the rate at which employees leave the organization, either voluntarily or involuntarily.',
    kpi_rational = 'While eNPS is a leading indicator, attrition is the ultimate lagging indicator of HR''s success in building a healthy organization. A "Reactive" HR function struggles with high turnover. A mature, "Intelligent" HR function uses predictive analytics to identify at-risk employees and proactively address issues, directly impacting the company''s ability to retain the talent it needs to execute its strategy.',
    alternative_kpis = '• Time to Fill Open Positions <br> • HR Cost per Employee',
    kpi_formula = '(Number of Employees Who Left / Average Number of Employees) * 100'
WHERE item_id = 'C901';
UPDATE Maturity_Rubric SET kpi_target_value = '> 20%' WHERE item_id = 'C901' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '15-20%' WHERE item_id = 'C901' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-15%' WHERE item_id = 'C901' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'C901' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'C901' AND stage_number = 5;

-- Item_ID: C902
UPDATE Maturity_Rubric
SET
    kpi_name = 'Contract Review Cycle Time',
    kpi_description = 'Measures the average time it takes for the legal team to review and approve a standard business contract (e.g., MSA, NDA).',
    kpi_rational = 'In a fast-moving business, the legal department can be either a bottleneck or a business accelerator. This KPI is the primary measure of its operational efficiency. A "Reactive" legal team is a black box with long delays. A mature, "Intelligent" legal function uses templates, automation, and AI to process routine work rapidly, freeing up lawyers to focus on high-value strategic advice.',
    alternative_kpis = '• Legal Spend as a % of Revenue <br> • Self-Service Legal Adoption',
    kpi_formula = 'Average time from legal receiving a standard contract to final approval'
WHERE item_id = 'C902';
UPDATE Maturity_Rubric SET kpi_target_value = '> 10 days' WHERE item_id = 'C902' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10 days' WHERE item_id = 'C902' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '2-5 days' WHERE item_id = 'C902' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '1-2 days' WHERE item_id = 'C902' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 1 day' WHERE item_id = 'C902' AND stage_number = 5;

-- Item_ID: C903
UPDATE Maturity_Rubric
SET
    kpi_name = 'Employee Satisfaction with IT Services (ITSAT)',
    kpi_description = 'Measures the satisfaction of employees with the technology, tools, and support provided by the corporate IT team.',
    kpi_rational = 'The primary customer of corporate IT is the company''s employees. Their satisfaction is the most direct measure of IT''s effectiveness in enabling productivity. A "Reactive" IT function is seen as a hindrance. A mature, "Intelligent" IT function provides a seamless, consumer-grade technology experience, making it a competitive advantage in attracting and retaining talent.',
    alternative_kpis = '• IT Helpdesk First Response Time <br> • IT Asset Utilization Rate',
    kpi_formula = '% of employees rating their satisfaction with IT support as "high" or "very high"'
WHERE item_id = 'C903';
UPDATE Maturity_Rubric SET kpi_target_value = '< 60%' WHERE item_id = 'C903' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '60-75%' WHERE item_id = 'C903' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '75-85%' WHERE item_id = 'C903' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '85-95%' WHERE item_id = 'C903' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 95%' WHERE item_id = 'C903' AND stage_number = 5;

-- Item_ID: C904
UPDATE Maturity_Rubric
SET
    kpi_name = 'Employee Satisfaction with Workplace (Workplace SAT)',
    kpi_description = 'Measures the satisfaction of employees with their physical and virtual work environments, including office facilities, remote work support, and related services.',
    kpi_rational = 'The workplace is a key driver of culture, collaboration, and employee engagement. This KPI directly measures how well the environment supports employees. A "Reactive" approach provides a basic, one-size-fits-all office. A mature, "Intelligent" workplace function uses data and employee feedback to create a flexible, strategic, and desirable work experience that enhances productivity and talent retention.',
    alternative_kpis = '• Space Utilization Rate <br> • Facilities Ticket Resolution Tim',
    kpi_formula = '% of employees rating their satisfaction with workplace services as "high" or "very high"'
WHERE item_id = 'C904';
UPDATE Maturity_Rubric SET kpi_target_value = '< 60%' WHERE item_id = 'C904' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '60-70%' WHERE item_id = 'C904' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '70-80%' WHERE item_id = 'C904' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '80-90%' WHERE item_id = 'C904' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 90%' WHERE item_id = 'C904' AND stage_number = 5;

-- Item_ID: D1
UPDATE Maturity_Rubric
SET
    kpi_name = 'Employee Attrition Rate',
    kpi_description = 'Measures the rate at which employees leave the organization over a given period, calculated as (Employees Who Left / Average Number of Employees) * 100.',
    kpi_rational = 'This is the ultimate lagging indicator of overall organizational health, culture, and leadership effectiveness. A "Reactive" organization with a chaotic culture will have high, unmanaged attrition. As the discipline matures through better talent management ("Organized") and data-driven HR ("Platform-led"), attrition stabilizes. An "Intelligent" organization can predict and prevent attrition, making this the ultimate measure of a successful, sustainable enterprise.',
    alternative_kpis = '• Employee Net Promoter Score (eNPS) <br> • High-Performer Retention Rate <br> • OKR Achievement Rate',
    kpi_formula = '(Number of Employees Who Left / Average Number of Employees) * 100'
WHERE item_id = 'D1';
UPDATE Maturity_Rubric SET kpi_target_value = '> 20%' WHERE item_id = 'D1' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '15-20%' WHERE item_id = 'D1' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-15%' WHERE item_id = 'D1' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'D1' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'D1' AND stage_number = 5;

-- Item_ID: D2
UPDATE Maturity_Rubric
SET
    kpi_name = 'Sales Forecast Accuracy',
    kpi_description = 'Measures the variance between forecasted sales and actual sales results, calculated as 1 - ((|Actual - Forecasted|) / Actual).',
    kpi_rational = 'This KPI measures predictability, the core trait that separates a mature sales function from a "hero-based" art form. A "Reactive" sales team has no reliable forecast. As it matures through defined processes ("Organized") and instrumentation ("Platform-led"), its ability to predict revenue becomes a cornerstone of company-wide strategic planning. An "Intelligent" sales function uses AI to generate highly accurate forecasts, making this the primary indicator of a mature, data-driven science.',
    alternative_kpis = '• Net Revenue Retention (NRR) <br> • Quota Attainment % <br> • Customer Lifetime Value (LTV)',
    kpi_formula = '1 - (|Actual Sales - Forecasted Sales| / Actual Sales)'
WHERE item_id = 'D2';
UPDATE Maturity_Rubric SET kpi_target_value = '< 50%' WHERE item_id = 'D2' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '50-70%' WHERE item_id = 'D2' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '70-85%' WHERE item_id = 'D2' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '85-95%' WHERE item_id = 'D2' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 95%' WHERE item_id = 'D2' AND stage_number = 5;

-- Item_ID: D3
UPDATE Maturity_Rubric
SET
    kpi_name = 'Return on Marketing Investment (ROMI)',
    kpi_description = 'Measures the revenue growth generated by marketing activities as a multiple of the marketing spend, calculated as ((Sales Growth - Marketing Spend) / Marketing Spend).',
    kpi_rational = 'ROMI is the ultimate measure of marketing''s contribution to enterprise value and its evolution from a cost center to a growth engine. A "Reactive" marketing function has untracked spend and negative ROMI. As it matures, it builds a predictable pipeline ("Organized") and can prove its contribution with hard data ("Platform-led"). An "Intelligent" marketing engine uses AI to optimize spend in real-time, maximizing ROMI and solidifying its role as a key driver of corporate strategy.',
    alternative_kpis = '• Marketing Sourced Pipeline ($) <br> • Customer Acquisition Cost (CAC) <br> • Brand Equity Score',
    kpi_formula = '((Sales Growth from Marketing - Marketing Spend) / Marketing Spend) * 100'
WHERE item_id = 'D3';
UPDATE Maturity_Rubric SET kpi_target_value = 'Negative or untracked' WHERE item_id = 'D3' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '0-2x' WHERE item_id = 'D3' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '2-4x' WHERE item_id = 'D3' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '4-7x' WHERE item_id = 'D3' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 7x' WHERE item_id = 'D3' AND stage_number = 5;

-- Item_ID: D4
UPDATE Maturity_Rubric
SET
    kpi_name = 'Partner Sourced Revenue',
    kpi_description = 'Measures the percentage of total company revenue that is generated from leads sourced directly by partners.',
    kpi_rational = 'This KPI directly measures the financial impact of the partner ecosystem as a force multiplier for the GTM engine. A "Reactive" state has accidental, untracked partner revenue. A mature, "Intelligent" ecosystem is a significant and predictable source of new business, deeply embedded in the product and sales motions. This metric is the clearest indicator of the program''s success in extending market reach and accelerating growth.',
    alternative_kpis = '• Partner Influenced Revenue % <br> • Partner Program ROI <br> • Partner Satisfaction (PSAT)',
    kpi_formula = '(Revenue Generated from Partner-Sourced Leads / Total Revenue) * 100'
WHERE item_id = 'D4';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'D4' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'D4' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30%' WHERE item_id = 'D4' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '30-45%' WHERE item_id = 'D4' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 45%' WHERE item_id = 'D4' AND stage_number = 5;

-- Item_ID: D5
UPDATE Maturity_Rubric
SET
    kpi_name = 'Cycle Time',
    kpi_description = 'Measures the average time from when work starts on an item (e.g., a feature, bug fix) to when it is delivered to production.',
    kpi_rational = 'Cycle Time is a holistic measure of the entire product development machine''s velocity, efficiency, and ability to respond to customer needs. A "Reactive" "feature factory" has long, unpredictable release cycles. As the discipline matures into a unified, agile organization with CI/CD ("Automated") and modern platforms, cycle time shrinks dramatically. An "Intelligent" organization uses AI to optimize the development lifecycle, enabling rapid, high-quality delivery of customer value.',
    alternative_kpis = '• Deployment Frequency <br> • Change Failure Rate <br> • Feature Adoption Rate',
    kpi_formula = 'Average time from work started to work delivered to production'
WHERE item_id = 'D5';
UPDATE Maturity_Rubric SET kpi_target_value = '> 30 days' WHERE item_id = 'D5' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30 days' WHERE item_id = 'D5' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15 days' WHERE item_id = 'D5' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '1-5 days' WHERE item_id = 'D5' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 1 day' WHERE item_id = 'D5' AND stage_number = 5;

-- Item_ID: D6
UPDATE Maturity_Rubric
SET
    kpi_name = 'Net Revenue Retention (NRR)',
    kpi_description = 'Measures revenue from an existing customer cohort, including expansion and upsells, while accounting for churn and downgrades.',
    kpi_rational = 'NRR is the ultimate measure of a successful post-sale function and its impact on long-term enterprise value. It proves the organization is not just supporting customers but delivering ongoing value that leads to loyalty and growth. A "Reactive" "break-fix" center struggles with churn (NRR < 100%). A mature, "Intelligent" CX function is a primary driver of revenue growth, using proactive interventions to achieve a world-class NRR (>125%).',
    alternative_kpis = '• Customer Lifetime Value (LTV) <br> • Customer Satisfaction (CSAT) Score <br> • Gross Revenue Retention (GRR)',
    kpi_formula = '((Starting MRR + Expansion - Churn) / Starting MRR) * 100'
WHERE item_id = 'D6';
UPDATE Maturity_Rubric SET kpi_target_value = '< 90%' WHERE item_id = 'D6' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '90-100%' WHERE item_id = 'D6' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '100-110%' WHERE item_id = 'D6' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '110-125%' WHERE item_id = 'D6' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 125%' WHERE item_id = 'D6' AND stage_number = 5;

-- Item_ID: D7
UPDATE Maturity_Rubric
SET
    kpi_name = 'System Uptime / Availability',
    kpi_description = 'Measures the percentage of time that the foundational technology systems and platforms are operational and available to users.',
    kpi_rational = 'Availability is the most fundamental measure of the technology foundation''s reliability and resilience. A "Reactive" on-premise infrastructure is unstable and a business risk. As the Digital Core matures into a secure, scalable, cloud-native platform, its availability becomes the bedrock upon which all other business functions operate and innovate. An "Intelligent" infrastructure is self-healing and dynamically scaled, ensuring the business is always on.',
    alternative_kpis = '• Mean Time to Recovery (MTTR) <br> • Data Quality Score <br> • Cloud Spend Efficiency',
    kpi_formula = '(Total Time - Downtime) / Total Time * 100'
WHERE item_id = 'D7';
UPDATE Maturity_Rubric SET kpi_target_value = '< 99%' WHERE item_id = 'D7' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '99% - 99.5%' WHERE item_id = 'D7' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '99.5% - 99.9%' WHERE item_id = 'D7' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '99.9% - 99.99%' WHERE item_id = 'D7' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 99.99%' WHERE item_id = 'D7' AND stage_number = 5;

-- Item_ID: D8
UPDATE Maturity_Rubric
SET
    kpi_name = 'Days to Close Books',
    kpi_description = 'Measures the number of business days required to finalize the company''s financial statements after a period ends.',
    kpi_rational = 'This is a classic benchmark for the efficiency, accuracy, and automation of the entire finance function. A "Reactive" finance team is a historical scorekeeper with a long, manual, and high-risk close. As the discipline matures into a strategic partner with integrated systems ("Platform-led"), the close becomes faster. An "Intelligent" function achieves a "continuous close," providing real-time insights that guide capital allocation and maximize enterprise value.',
    alternative_kpis = '• Forecast Accuracy <br> • Cash Conversion Cycle <br> • Operating Margin',
    kpi_formula = 'Number of business days to finalize financial statements post-period end'
WHERE item_id = 'D8';
UPDATE Maturity_Rubric SET kpi_target_value = '> 15 days' WHERE item_id = 'D8' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10-15 days' WHERE item_id = 'D8' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10 days' WHERE item_id = 'D8' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '2-5 days' WHERE item_id = 'D8' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 2 days' WHERE item_id = 'D8' AND stage_number = 5;

-- Item_ID: D9
UPDATE Maturity_Rubric
SET
    kpi_name = 'G&A Expense as a % of Revenue',
    kpi_description = 'Measures the total G&A costs (HR, Legal, IT, Facilities, etc.) as a percentage of the company''s total revenue.',
    kpi_rational = 'This KPI is the primary measure of operational scalability for the company''s central nervous system. A "Reactive" G&A function has costs that grow linearly (or faster) than revenue, creating operational friction. As the discipline matures, it leverages technology, automation, and shared services to support business growth more efficiently. An "Intelligent" G&A function uses AI and predictive insights to scale seamlessly, driving down this percentage over time.',
    alternative_kpis = '• Employee Net Promoter Score (eNPS) <br> • Employee Productivity (Revenue per Employee) <br> • New Hire Time to Productivity',
    kpi_formula = '(Total G&A Expenses / Total Revenue) * 100'
WHERE item_id = 'D9';
UPDATE Maturity_Rubric SET kpi_target_value = '> 25%' WHERE item_id = 'D9' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '20-25%' WHERE item_id = 'D9' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-20%' WHERE item_id = 'D9' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '10-15%' WHERE item_id = 'D9' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 10%' WHERE item_id = 'D9' AND stage_number = 5;

-- Item_ID: L101001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Narrative & Vision Score',
    kpi_description = 'A qualitative score, typically from an employee survey, measuring the clarity, inspiration, and perceived achievability of the company''s "North Star."',
    kpi_rational = 'This KPI directly measures the effectiveness of the company''s core purpose. A "Reactive" state has a confusing vision (low score). As the lever matures, the vision is documented ("Organized") and communicated ("Automated"), improving the score. An "Intelligent" organization has a dynamic, living vision that deeply resonates with all employees, leading to a consistently high score and demonstrating true strategic clarity.',
    alternative_kpis = '• Employee Alignment Survey Score <br> • Clarity of Strategic Priorities Score',
    kpi_formula = 'A qualitative score based on an employee survey'
WHERE item_id = 'L101001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 3.0' WHERE item_id = 'L101001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '3.0 - 3.5' WHERE item_id = 'L101001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '3.5 - 4.0' WHERE item_id = 'L101001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '4.0 - 4.5' WHERE item_id = 'L101001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 4.5' WHERE item_id = 'L101001' AND stage_number = 5;

-- Item_ID: L101002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Forecast Accuracy',
    kpi_description = 'Measures the percentage variance between the initial annual financial forecast (revenue, expenses) and the actual results at year-end.',
    kpi_rational = 'This measures the plan''s connection to reality. A "Reactive" plan is pure guesswork with high variance. As the lever matures with data ("Organized") and better systems ("Automated"), accuracy improves. An "Intelligent" plan uses predictive models, making the forecast highly accurate and a reliable tool for capital allocation.',
    alternative_kpis = '• Budget vs. Actual Variance <br> • Time to Complete Planning Cycle',
    kpi_formula = '(Actual Results / Forecasted Results)'
WHERE item_id = 'L101002';
UPDATE Maturity_Rubric SET kpi_target_value = '+/- 25%' WHERE item_id = 'L101002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '+/- 15-25%' WHERE item_id = 'L101002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '+/- 10-15%' WHERE item_id = 'L101002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '+/- 5-10%' WHERE item_id = 'L101002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< +/- 5%' WHERE item_id = 'L101002' AND stage_number = 5;

-- Item_ID: L101003
UPDATE Maturity_Rubric
SET
    kpi_name = 'OKR Achievement Rate',
    kpi_description = 'Measures the percentage of defined Key Results that are successfully achieved within a given planning cycle.',
    kpi_rational = 'This KPI measures the ability to translate strategy into measurable results. A "Reactive" state has inconsistent, unaligned KPIs. As the lever matures, KPIs are cascaded ("Organized") and tracked in software ("Automated"). An "Intelligent" system uses predictive insights to set ambitious yet achievable OKRs, proving the performance framework is effectively driving execution.',
    alternative_kpis = '• % of KPIs with Baselines & Targets <br> • Data-Driven Decision Ratio',
    kpi_formula = '% of company-level Key Results with a measure of the financial return'
WHERE item_id = 'L101003';
UPDATE Maturity_Rubric SET kpi_target_value = '< 30%' WHERE item_id = 'L101003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '30-50%' WHERE item_id = 'L101003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '50-70%' WHERE item_id = 'L101003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '70-90%' WHERE item_id = 'L101003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 90%' WHERE item_id = 'L101003' AND stage_number = 5;

-- Item_ID: L101004
UPDATE Maturity_Rubric
SET
    kpi_name = 'ROI on Key Results',
    kpi_description = 'A measure of the financial return generated by the company-level Key Results.',
    kpi_rational = 'This KPI elevates the performance framework from a simple execution tracker to a value-creation engine. A "Reactive" state has no clear link between work and financial outcomes. As the lever matures, KPIs are cascaded ("Organized") and become predictive ("Platform-led"). An "Intelligent" system focuses the entire company on achieving Key Results that deliver the highest possible financial return, proving the strategic value of the OKR process.',
    alternative_kpis = '• OKR Achievement Rate <br> • % of KPIs with Financial Impact',
    kpi_formula = '(Financial Gain from Key Results / Investment Cost)'
WHERE item_id = 'L101004';
UPDATE Maturity_Rubric SET kpi_target_value = 'Not Measured' WHERE item_id = 'L101004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = 'Measured Inconsistently' WHERE item_id = 'L101004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '> 1.0x' WHERE item_id = 'L101004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '> 2.0x' WHERE item_id = 'L101004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 3.0x' WHERE item_id = 'L101004' AND stage_number = 5;

-- Item_ID: L102001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Employee Engagement Score',
    kpi_description = 'A measure of an employee''s enthusiasm and connection to their work and company, typically captured via pulse surveys or an annual census.',
    kpi_rational = 'This is the primary indicator of a healthy, high-performing culture. A "Reactive" culture is undefined and results in low engagement. As the lever matures, the company begins to measure engagement ("Organized") and act on the data ("Platform-led"). An "Intelligent" organization uses predictive analytics to proactively shape a dynamic culture, leading to high engagement.',
    alternative_kpis = '• Employee Net Promoter Score (eNPS) <br> • Voluntary Attrition Rate',
    kpi_formula = '% Promoters - % Detractors'
WHERE item_id = 'L102001';
UPDATE Maturity_Rubric SET kpi_target_value = 'Negative' WHERE item_id = 'L102001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '0 - 10' WHERE item_id = 'L102001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10 - 20' WHERE item_id = 'L102001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '20 - 40' WHERE item_id = 'L102001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 40' WHERE item_id = 'L102001' AND stage_number = 5;

-- Item_ID: L102002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Critical Role Vacancy Rate',
    kpi_description = 'Measures the percentage of roles deemed "critical" to the company''s strategy that are currently vacant.',
    kpi_rational = 'This KPI measures the organization''s ability to structure itself for success and fill skill gaps. A "Reactive" org is chaotic with many critical vacancies. As it matures, it defines roles ("Organized") and builds talent pipelines ("Platform-led"). An "Intelligent" organization uses predictive talent models to ensure it always has the right people in the right roles, minimizing this rate.',
    alternative_kpis = '• Internal Mobility Rate <br> • Time to Fill Critical Roles',
    kpi_formula = 'The percentage of roles deemed "critical" to the company''s performance'
WHERE item_id = 'L102002';
UPDATE Maturity_Rubric SET kpi_target_value = '> 20%' WHERE item_id = 'L102002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '15-20%' WHERE item_id = 'L102002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-15%' WHERE item_id = 'L102002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'L102002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L102002' AND stage_number = 5;

-- Item_ID: L102003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Hours of formal training',
    kpi_description = 'The average number of formal training hours completed per employee per year.',
    kpi_rational = 'This KPI measures the company''s investment in its talent. A "Reactive" state has no formal training. As the lever matures, a basic program is created ("Organized") and an LMS is implemented ("Platform-led"). An "Intelligent" organization has a dynamic learning culture with personalized, AI-driven training paths, reflected in a high number of impactful training hours that directly address skill gaps.',
    alternative_kpis = '• Training Satisfaction Score <br> • Skill Gap Reduction %',
    kpi_formula = 'The average number of hours of formal training per employee'
WHERE item_id = 'L102003';
UPDATE Maturity_Rubric SET kpi_target_value = '< 8' WHERE item_id = 'L102003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '8-16' WHERE item_id = 'L102003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '16 - 24' WHERE item_id = 'L102003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '24 - 40' WHERE item_id = 'L102003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 40' WHERE item_id = 'L102003' AND stage_number = 5;

-- ... (This script continues for the remaining 168 unique Item_IDs) ...
-- Item_ID: L103001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Innovation Pipeline Value',
    kpi_description = 'Measures the total potential financial value (e.g., new revenue, cost savings) of all ideas currently in the formal innovation pipeline.',
    kpi_rational = 'This KPI tracks the health and potential of the innovation engine. A "Reactive" state has no formal pipeline. As the lever matures, a process is created ("Organized") and managed ("Automated"), increasing the pipeline''s value. An "Intelligent" organization has a hyper-efficient innovation system that consistently generates high-value, strategic ideas.',
    alternative_kpis = '• Idea-to-Launch Cycle Time <br> • Innovation ROI',
    kpi_formula = 'The total potential financial value (i.e., new revenue, cost savings) of all ideas'
WHERE item_id = 'L103001';
UPDATE Maturity_Rubric SET kpi_target_value = '$0' WHERE item_id = 'L103001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '< $1M' WHERE item_id = 'L103001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '$1M - $5M' WHERE item_id = 'L103001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '$5M - $20M' WHERE item_id = 'L103001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> $20M' WHERE item_id = 'L103001' AND stage_number = 5;

-- Item_ID: L103002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Change Adoption Rate',
    kpi_description = 'Measures the percentage of impacted employees who successfully adopt a new process or technology following a major strategic transformation.',
    kpi_rational = 'This measures the effectiveness of the change management framework. A "Reactive" change is disruptive and poorly adopted. As the lever matures, communication plans are created ("Organized") and supported by playbooks ("Platform-led"). An "Intelligent" organization has an "always-on" change muscle, ensuring new initiatives are seamlessly absorbed with high adoption.',
    alternative_kpis = '• Change Success Score <br> • Time to Proficiency',
    kpi_formula = 'The percentage of active adopters / target employees'
WHERE item_id = 'L103002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 30%' WHERE item_id = 'L103002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '30-50%' WHERE item_id = 'L103002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '50-70%' WHERE item_id = 'L103002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '70-90%' WHERE item_id = 'L103002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 90%' WHERE item_id = 'L103002' AND stage_number = 5;

-- Item_ID: L104001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Number of Significant Deficiencies',
    kpi_description = 'Measures the number of significant or material weaknesses identified in internal or external audits of the company''s governance framework and controls.',
    kpi_rational = 'This is a direct measure of the governance framework''s robustness. A "Reactive" state has informal, weak controls leading to deficiencies. As the lever matures, a formal board and control framework are established ("Organized"), reducing this number. An "Intelligent" organization has an adaptive, embedded governance framework, resulting in zero significant deficiencies.',
    alternative_kpis = '• Policy Compliance Rate <br> • Time to Remediate Audit Findings',
    kpi_formula = 'The number of significant material deficiencies in the internal control framework'
WHERE item_id = 'L104001';
UPDATE Maturity_Rubric SET kpi_target_value = '> 2' WHERE item_id = 'L104001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '1-2' WHERE item_id = 'L104001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L104001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L104001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L104001' AND stage_number = 5;

-- Item_ID: L104002
UPDATE Maturity_Rubric
SET
    kpi_name = 'ERM Maturity Score',
    kpi_description = 'A qualitative score based on an internal or external assessment (e.g., COSO framework) that rates the maturity of the enterprise risk program.',
    kpi_rational = 'This KPI holistically assesses the proactivity of the risk management process. A "Reactive" state has informal, ad-hoc risk management (low score). As the lever matures, a risk register is created ("Organized") and integrated into planning ("Platform-led"). An "Intelligent" organization has a predictive, fully embedded ERM program, achieving the highest maturity score.',
    alternative_kpis = '• % of Critical Risks with Mitigation Plans <br> • Risk-Adjusted Performance',
    kpi_formula = 'A qualitative score based on an internal or external scale'
WHERE item_id = 'L104002';
UPDATE Maturity_Rubric SET kpi_target_value = '1' WHERE item_id = 'L104002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '2' WHERE item_id = 'L104002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '3' WHERE item_id = 'L104002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '4' WHERE item_id = 'L104002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '5' WHERE item_id = 'L104002' AND stage_number = 5;

-- Item_ID: L104003
UPDATE Maturity_Rubric
SET
    kpi_name = 'ESG Rating',
    kpi_description = 'The company''s rating from a major third-party ESG rating agency (e.g., MSCI, Sustainalytics).',
    kpi_rational = 'This is the primary external benchmark of the ESG program''s effectiveness and maturity. A "Reactive" company is unrated or has a low score. As the lever matures, it begins tracking metrics ("Organized") and integrating ESG into strategy ("Platform-led"). An "Intelligent" organization is an ESG leader, reflected by a top-tier rating from major agencies.',
    alternative_kpis = '• Carbon Footprint Reduction % <br> • Diversity & Inclusion Metrics',
    kpi_formula = 'The company''s rating from a major third-party ESG rating agency'
WHERE item_id = 'L104003';
UPDATE Maturity_Rubric SET kpi_target_value = 'Not Rated' WHERE item_id = 'L104003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = 'Low (e.g., CCC, B)' WHERE item_id = 'L104003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = 'Average (e.g., BB, BBB)' WHERE item_id = 'L104003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = 'High (e.g., A, AA)' WHERE item_id = 'L104003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = 'Leader (e.g., AAA)' WHERE item_id = 'L104003' AND stage_number = 5;

-- Item_ID: L105001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Sourced Deals',
    kpi_description = 'Measures the percentage of M&A deals in the pipeline that were proactively sourced by the corporate development team versus those that came from inbound or reactive channels.',
    kpi_rational = 'This KPI measures the proactivity and strategic alignment of the deal-sourcing function. A "Reactive" process is purely opportunistic. As the lever matures, the team uses a defined thesis ("Organized") and data rooms ("Automated"). An "Intelligent" function uses AI to systematically scan the market and source deals that perfectly fit the strategy, leading to a high percentage.',
    alternative_kpis = '• Deal Sourcing-to-Close Ratio <br> • Average Time to Close a Deal',
    kpi_formula = 'The percentage of M&A deals in the pipeline that were proactively sourced'
WHERE item_id = 'L105001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L105001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'L105001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30%' WHERE item_id = 'L105001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '30-50%' WHERE item_id = 'L105001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 50%' WHERE item_id = 'L105001' AND stage_number = 5;

-- Item_ID: L105002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Integration Cycle Time',
    kpi_description = 'Measures the average number of calendar days from deal close to the completion of all key integration milestones.',
    kpi_rational = 'This metric is the most direct measure of the post-merger integration playbook''s operational effectiveness. A "Reactive" integration is ad-hoc and lengthy. As the lever matures, a dedicated project manager ("Organized") and playbook ("Automated") are used. An "Intelligent" integration is a data-driven, programmatic process that significantly shortens the cycle time, accelerating value realization.',
    alternative_kpis = '• Integration Milestone Achievement Rate <br> • Acquired Employee Attrition Rate',
    kpi_formula = 'The average number of calendar days from deal close to completion'
WHERE item_id = 'L105002';
UPDATE Maturity_Rubric SET kpi_target_value = '> 90 days' WHERE item_id = 'L105002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '60-90 days' WHERE item_id = 'L105002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '45-60 days' WHERE item_id = 'L105002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '30-45 days' WHERE item_id = 'L105002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 30 days' WHERE item_id = 'L105002' AND stage_number = 5;

-- Item_ID: L105003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Synergy Realization',
    kpi_description = 'Measures the percentage of key employees from the acquired company who are still employed 12 months after the deal closes. This is a critical indicator of a successful cultural and operational integration.',
    kpi_rational = 'This is the ultimate measure of an M&A''s financial success. A "Reactive" integration has no formal synergy tracking. As the lever matures, synergies are tracked by finance ("Organized") and managed on a central platform ("Platform-led"). An "Intelligent" process uses predictive models to identify and track synergies, ensuring the deal delivers on its promised value.',
    alternative_kpis = '• Acquired Customer Churn Rate <br> • Return on Invested Capital (ROIC) for M&A',
    kpi_formula = 'The percentage of the planned financial synergies (cost and revenue) that are actually achieved'
WHERE item_id = 'L105003';
UPDATE Maturity_Rubric SET kpi_target_value = '< 50%' WHERE item_id = 'L105003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '50-70%' WHERE item_id = 'L105003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '70-85%' WHERE item_id = 'L105003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '85-95%' WHERE item_id = 'L105003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 95%' WHERE item_id = 'L105003' AND stage_number = 5;

-- Item_ID: L105004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Synergy Realization Rate (Year 1)',
    kpi_description = 'Measures the percentage of the planned financial synergies (both cost and revenue) that were actually achieved in the first 12 months post-close. This is the ultimate measure of a deal''s financial success.',
    kpi_rational = 'This KPI is a critical measure of an M&A''s success in retaining the core talent and intellectual property that was paid for. A "Reactive" integration has no focus on talent and leads to a mass exodus. A mature, "Intelligent" integration playbook includes a specific, proactive plan to retain key individuals, ensuring the strategic value of the acquisition is preserved and nurtured.',
    alternative_kpis = '• Acquired Employee Attrition Rate (Overall) <br> • Key Employee Engagement Score',
    kpi_formula = '(Actual Year 1 Synergies / Planned Year 1 Synergies) * 100'
WHERE item_id = 'L105004';
UPDATE Maturity_Rubric SET kpi_target_value = '< 50%' WHERE item_id = 'L105004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '60-80%' WHERE item_id = 'L105004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '80-95%' WHERE item_id = 'L105004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '95-105%' WHERE item_id = 'L105004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 105%' WHERE item_id = 'L105004' AND stage_number = 5;

-- Item_ID: L106001
UPDATE Maturity_Rubric
SET
    kpi_name = 'On-Time Delivery Rate of Strategic Initiatives',
    kpi_description = 'Measures the percentage of key strategic initiatives, managed by the BizOps team, that are delivered by the original committed date.',
    kpi_rational = 'This KPI measures the BizOps team''s effectiveness in execution and project management. A "Reactive" state has chaotic projects with no clear timelines. As the lever matures, the team uses project management tools ("Organized") and a central program ("Platform-led"). A mature BizOps team is a highly predictable execution engine, reflected by a high on-time delivery rate.',
    alternative_kpis = '• Strategic Project Portfolio ROI <br> • Stakeholder Satisfaction Score',
    kpi_formula = 'The percentage of key strategic initiatives that are delivered by the original committed date'
WHERE item_id = 'L106001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 50%' WHERE item_id = 'L106001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '50-70%' WHERE item_id = 'L106001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '70-85%' WHERE item_id = 'L106001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '85-95%' WHERE item_id = 'L106001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 95%' WHERE item_id = 'L106001' AND stage_number = 5;

-- Item_ID: L106002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Process Cycle Time Reduction',
    kpi_description = 'Measures the average percentage reduction in the cycle time of a key business process after a cross-functional analysis and redesign initiative by the BizOps team.',
    kpi_rational = 'This KPI directly measures the BizOps team''s impact on operational efficiency. A "Reactive" state has broken, inefficient processes. As the lever matures, the team documents processes ("Organized") and uses self-service BI ("Automated"). An "Intelligent" BizOps team uses process mining and simulation to drive significant, quantifiable reductions in cycle time.',
    alternative_kpis = '• Operational Efficiency Gains ($) <br> • Process Standardization Rate',
    kpi_formula = 'The average percentage reduction in the cycle time of a key business process'
WHERE item_id = 'L106002';
UPDATE Maturity_Rubric SET kpi_target_value = '0% (Not Measured)' WHERE item_id = 'L106002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'L106002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-25%' WHERE item_id = 'L106002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '25-50%' WHERE item_id = 'L106002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 50%' WHERE item_id = 'L106002' AND stage_number = 5;

-- Item_ID: L106003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Time to Insight',
    kpi_description = 'Measures the time it takes for the BizOps team to answer a complex, ad-hoc strategic question from the executive team with a data-backed recommendation.',
    kpi_rational = 'This measures the team''s analytical agility and value as a "source of truth." A "Reactive" analysis is slow and manual. As the lever matures, the team uses standard dashboards ("Organized") and operates on a data science platform ("Platform-led"). An "Intelligent" BizOps team uses predictive analytics to answer questions almost instantly, guiding strategic decisions in real-time.',
    alternative_kpis = '• Data Quality Score <br> • Self-Service Analytics Adoption by Leadership',
    kpi_formula = 'The time it takes for the BizOps team to answer a complex, ad-hoc strategic question'
WHERE item_id = 'L106003';
UPDATE Maturity_Rubric SET kpi_target_value = '> 2 weeks' WHERE item_id = 'L106003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '1-2 weeks' WHERE item_id = 'L106003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '2-5 days' WHERE item_id = 'L106003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '< 48 hours' WHERE item_id = 'L106003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 24 hours (Near Real-time)' WHERE item_id = 'L106003' AND stage_number = 5;

-- Item_ID: L106004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Delivery Score',
    kpi_description = 'A qualitative score from key business stakeholders (e.g., on a 1-5 scale) rating their satisfaction with the quality, timeliness, and impact of the BizOps team''s deliverables.',
    kpi_rational = 'This measures the BizOps team''s reputation and effectiveness as a strategic partner. A "Reactive" team is seen as a "Chief of Staff" function with unclear value. As the lever matures, the team''s work becomes more data-driven ("Automated") and predictive ("Platform-led"). A high delivery score proves that an "Intelligent" BizOps team is a trusted, high-impact advisor to the business.',
    alternative_kpis = '• Stakeholder Net Promoter Score (sNPS) <br> • On-Time Delivery Rate of Initiatives',
    kpi_formula = 'A qualitative score from key business stakeholders rating their satisfaction with the BizOps team''s deliverables'
WHERE item_id = 'L106004';
UPDATE Maturity_Rubric SET kpi_target_value = '< 3.0' WHERE item_id = 'L106004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '3.0 - 3.5' WHERE item_id = 'L106004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '3.5 - 4.0' WHERE item_id = 'L106004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '4.0 - 4.5' WHERE item_id = 'L106004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 4.5' WHERE item_id = 'L106004' AND stage_number = 5;

-- Item_ID: L201001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Sales Expense to Revenue',
    kpi_description = 'The total sales & marketing expense as a percentage of the company''s total revenue.',
    kpi_rational = 'This is a primary measure of the GTM plan''s efficiency. A "Reactive" plan is inefficient with high costs. As the lever matures, the plan becomes more data-driven ("Organized") and sophisticated ("Platform-led"). An "Intelligent" GTM plan is dynamic and continuously optimized using data models to maximize revenue while improving efficiency, thus lowering this ratio over time.',
    alternative_kpis = '• Customer Acquisition Cost (CAC) <br> • LTV to CAC Ratio',
    kpi_formula = '(Total Sales & Marketing Expense / Total Revenue)'
WHERE item_id = 'L201001';
UPDATE Maturity_Rubric SET kpi_target_value = '> 60%' WHERE item_id = 'L201001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '50-60%' WHERE item_id = 'L201001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '40-50%' WHERE item_id = 'L201001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '30-40%' WHERE item_id = 'L201001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 30%' WHERE item_id = 'L201001' AND stage_number = 5;

-- Item_ID: L201002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Quota Attainment',
    kpi_description = 'The percentage of sales reps who achieved 100% or more of their assigned sales quota',
    kpi_rational = 'This is the best measure of a fair and well-designed territory and quota plan. A "Reactive" plan is based on gut feel, leading to low attainment. As the lever matures, it uses basic data ("Organized") and planning tools ("Automated"). An "Intelligent" plan uses AI to create optimized, data-driven territories and quotas that are challenging but achievable, resulting in high attainment.',
    alternative_kpis = '• Sales Capacity Utilization <br> • Quota to Base Salary Ratio',
    kpi_formula = '(# of Reps at or Above 100% of Quota / Total # of Reps) * 100'
WHERE item_id = 'L201002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 30%' WHERE item_id = 'L201002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '30-50%' WHERE item_id = 'L201002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '50-65%' WHERE item_id = 'L201002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '65-80%' WHERE item_id = 'L201002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 80%' WHERE item_id = 'L201002' AND stage_number = 5;

-- Item_ID: L201003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Voluntary Sales Attrition',
    kpi_description = 'The percentage of sales reps who voluntarily leave the company',
    kpi_rational = 'This KPI is a critical indicator of the sales compensation plan''s effectiveness and the overall health of the sales culture. A "Reactive" plan may be unfair or confusing, leading to high attrition. A mature, "Intelligent" plan is data-driven, motivating, and aligned with strategic goals, which is a key factor in retaining top sales talent.',
    alternative_kpis = '• % of Reps Achieving Accelerators <br> • Time to Payout Accuracy',
    kpi_formula = '(# of Voluntary Sales Departures / Average # of Sales Reps) * 100'
WHERE item_id = 'L201003';
UPDATE Maturity_Rubric SET kpi_target_value = '> 20%' WHERE item_id = 'L201003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '15-20%' WHERE item_id = 'L201003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-15%' WHERE item_id = 'L201003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '10-15%' WHERE item_id = 'L201003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 10%' WHERE item_id = 'L201003' AND stage_number = 5;

-- Item_ID: L201004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Forecast Accuracy',
    kpi_description = 'Actual Bookings - Forecasted Bookings',
    kpi_rational = 'This measures the predictability of the entire sales process. A "Reactive" forecast is a "guess" from reps. As the lever matures, a formal process is implemented ("Organized") and historical data is used ("Automated"). An "Intelligent" forecast is a data-driven, AI-powered science, and high accuracy is the ultimate proof of a mature and reliable sales engine.',
    alternative_kpis = '• Sales Cycle Length <br> • Win Rate',
    kpi_formula = '1 - ((Actual Bookings - Forecasted Bookings) / Actual Bookings)'
WHERE item_id = 'L201004';
UPDATE Maturity_Rubric SET kpi_target_value = '> +/- 20%' WHERE item_id = 'L201004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '+/- 15-20%' WHERE item_id = 'L201004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '+/- 10-15%' WHERE item_id = 'L201004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '+/- 5-10%' WHERE item_id = 'L201004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L201004' AND stage_number = 5;

-- Item_ID: L201005
UPDATE Maturity_Rubric
SET
    kpi_name = 'Sales Cycle Length',
    kpi_description = 'The average number of days it takes for a new deal to close',
    kpi_rational = 'This is a key measure of sales process efficiency. A "Reactive" process is long and unpredictable. As the lever matures, stages are defined ("Organized") and bottlenecks are analyzed ("Automated"). An "Intelligent" process uses AI to recommend next-best-actions and remove friction, systematically shortening the sales cycle and accelerating revenue.',
    alternative_kpis = '• Lead-to-Opportunity Conversion Rate <br> • Deal Velocity',
    kpi_formula = 'Average # of days from Deal Creation to Deal Close'
WHERE item_id = 'L201005';
UPDATE Maturity_Rubric SET kpi_target_value = '> 180 days' WHERE item_id = 'L201005' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '120-180 days' WHERE item_id = 'L201005' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '90-120 days' WHERE item_id = 'L201005' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '60-90 days' WHERE item_id = 'L201005' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 60 days' WHERE item_id = 'L201005' AND stage_number = 5;

-- Item_ID: L202001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Win Rate',
    kpi_description = 'The percentage of qualified opportunities that are converted into closed-won deals.',
    kpi_rational = 'This KPI is the ultimate measure of qualification effectiveness. A "Reactive" process has no defined qualification, leading to low win rates. As the lever matures, a standard methodology like MEDDPICC is adopted ("Organized") and enforced ("Automated"). An "Intelligent" process uses AI to score leads, ensuring reps focus on the deals they are most likely to win, thus maximizing the win rate.',
    alternative_kpis = '• % of Deals with Compliant Qualification <br> • Sales Cycle Length for Won vs. Lost Deals',
    kpi_formula = '(# of Closed-Won Deals / # of Closed-Lost Deals)'
WHERE item_id = 'L202001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 10%' WHERE item_id = 'L202001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10-15%' WHERE item_id = 'L202001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-20%' WHERE item_id = 'L202001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '20-25%' WHERE item_id = 'L202001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 25%' WHERE item_id = 'L202001' AND stage_number = 5;

-- Item_ID: L202002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Pipeline Coverage',
    kpi_description = 'The ratio of the total value of the open, qualified pipeline to the sales quota for the period (e.g., 3x, 4x).',
    kpi_rational = 'This is the leading indicator of future revenue and the health of the sales pipeline. A "Reactive" state has poor visibility into its pipeline. As the lever matures, pipeline analysis becomes a core part of the sales motion ("Organized"). An "Intelligent" pipeline is dynamic and AI-driven, ensuring there is always sufficient coverage to meet and exceed targets.',
    alternative_kpis = '• Average Deal Size <br> • Pipeline Velocity (Value / Cycle Days)',
    kpi_formula = '(Total Value of Open Pipeline / Sales Quota)'
WHERE item_id = 'L202002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 2x' WHERE item_id = 'L202002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '2x - 3x' WHERE item_id = 'L202002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '3x - 4x' WHERE item_id = 'L202002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '4x - 5x' WHERE item_id = 'L202002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 5x' WHERE item_id = 'L202002' AND stage_number = 5;

-- Item_ID: L202003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Pipeline Coverage',
    kpi_description = 'The ratio of the total value of the open, qualified pipeline to the sales quota for the period.',
    kpi_rational = 'This is the leading indicator of future revenue and the health of the sales pipeline. A "Reactive" state has poor visibility into its pipeline. As the lever matures, pipeline analysis becomes a core part of the sales motion ("Organized"). An "Intelligent" pipeline is dynamic and AI-driven, ensuring there is always sufficient coverage to meet and exceed targets.',
    alternative_kpis = '• Average Deal Size <br> • Pipeline Velocity (Value / Cycle Days)',
    kpi_formula = '(Total Value of Open Pipeline / Sales Quota)'
WHERE item_id = 'L202003';
UPDATE Maturity_Rubric SET kpi_target_value = '< 2x' WHERE item_id = 'L202003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '2x - 3x' WHERE item_id = 'L202003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '3x - 4x' WHERE item_id = 'L202003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '4x - 5x' WHERE item_id = 'L202003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 5x' WHERE item_id = 'L202003' AND stage_number = 5;

-- ... (This script continues for the remaining 148 unique Item_IDs) ...
-- ... (Continuation of the SQL script) ...

-- Item_ID: L202004
UPDATE Maturity_Rubric
SET
    kpi_name = 'POC to Close',
    kpi_description = 'The percentage of opportunities that enter the Won Deals',
    kpi_rational = 'This KPI measures the effectiveness of the Sales Engineering (SE) team in technically proving the value of the product. A "Reactive" state has no formal SE team. As the lever matures, a dedicated team is created ("Organized") and becomes a core part of the sales process ("Automated"). An "Intelligent" SE team uses data to optimize the POC process, resulting in a high conversion rate.',
    alternative_kpis = '• Technical Win Rate <br> • Average POC Length',
    kpi_formula = '(# of Won Deals with POC / Total # of Deals with POC) * 100'
WHERE item_id = 'L202004';
UPDATE Maturity_Rubric SET kpi_target_value = '< 30%' WHERE item_id = 'L202004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '30-45%' WHERE item_id = 'L202004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '45-60%' WHERE item_id = 'L202004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '60-75%' WHERE item_id = 'L202004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 75%' WHERE item_id = 'L202004' AND stage_number = 5;

-- Item_ID: L203001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Win Rate',
    kpi_description = 'The percentage of expansion revenue (upsell/cross-sell) from total ARR',
    kpi_rational = 'This KPI specifically measures the success of the strategic account planning process in driving growth. A "Reactive" process has no formal planning. As the lever matures, account plans are developed ("Organized") and tracked ("Automated"). An "Intelligent" process uses data to identify and execute on expansion opportunities, resulting in a high win rate within the customer base.',
    alternative_kpis = '• Expansion ARR as % of Total ARR <br> • Product Penetration Rate in Key Accounts',
    kpi_formula = '(Expansion ARR / Total ARR) * 100'
WHERE item_id = 'L203001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L203001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'L203001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-15%' WHERE item_id = 'L203001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '15-20%' WHERE item_id = 'L203001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 20%' WHERE item_id = 'L203001' AND stage_number = 5;

-- Item_ID: L203002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Net Revenue Retention',
    kpi_description = 'The percentage of recurring revenue retained from an existing customer cohort, including expansion, churn, and downgrades.',
    kpi_rational = 'This is the lifeblood of any recurring revenue business and the ultimate measure of a successful renewal and retention motion. A "Reactive" process is accidental with high churn. As the lever matures, a dedicated renewals manager is assigned ("Organized") and the process becomes data-driven ("Platform-led"). An "Intelligent" process uses AI to predict churn and drive expansion, maximizing NRR.',
    alternative_kpis = '• Gross Revenue Retention <br> • Customer Churn Rate',
    kpi_formula = '((Starting ARR + Expansion - Churn) / Starting ARR)'
WHERE item_id = 'L203002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 90%' WHERE item_id = 'L203002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '90-100%' WHERE item_id = 'L203002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '100-110%' WHERE item_id = 'L203002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '110-125%' WHERE item_id = 'L203002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 125%' WHERE item_id = 'L203002' AND stage_number = 5;

-- Item_ID: L203003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Executive Sponsor Engagement',
    kpi_description = 'A qualitative score of the relationship with the executive sponsor at a key account, often tracked in the CRM.',
    kpi_rational = 'This is a leading indicator of strategic alignment and future growth within key accounts. A "Reactive" state has no executive relationships. As the lever matures, a formal EBR program is established ("Organized") and becomes strategic ("Platform-led"). An "Intelligent" EBR motion ensures deep, multi-threaded relationships with all key executives, reflected in a consistently high engagement score.',
    alternative_kpis = '• Expansion Pipeline Sourced from EBRs <br> • C-Level Meetings per Quarter',
    kpi_formula = 'A qualitative score of the relationship with the executive sponsor'
WHERE item_id = 'L203003';
UPDATE Maturity_Rubric SET kpi_target_value = 'Mostly Red' WHERE item_id = 'L203003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = 'Mostly Yellow' WHERE item_id = 'L203003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = 'Mix of Yellow/Green' WHERE item_id = 'L203003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = 'Mostly Green' WHERE item_id = 'L203003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = 'All Green' WHERE item_id = 'L203003' AND stage_number = 5;

-- Item_ID: L203004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Retention Executive Sponsor',
    kpi_description = 'A qualitative score (e.g., Red/Yellow/Green) that tracks the health of the relationship with the executive sponsor at a key account.',
    kpi_rational = 'This is a leading indicator of strategic alignment and retention risk within the most important accounts. A "Reactive" state has no executive relationships. As the lever matures, a formal EBR program is established ("Organized") and becomes strategic ("Platform-led"). An "Intelligent" motion ensures deep, multi-threaded relationships with all key executives, reflected in a consistently "Green" score.',
    alternative_kpis = '• C-Level Meetings per Quarter <br> • Joint Success Plan Achievement Rate',
    kpi_formula = 'A qualitative score (e.g., Red/Yellow/Green) that tracks the health of the relationship with the executive sponsor at a key account.'
WHERE item_id = 'L203004';
UPDATE Maturity_Rubric SET kpi_target_value = 'Mostly Red' WHERE item_id = 'L203004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = 'Mostly Yellow' WHERE item_id = 'L203004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = 'Mix of Yellow/Green' WHERE item_id = 'L203004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = 'Mostly Green' WHERE item_id = 'L203004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = 'All Green' WHERE item_id = 'L203004' AND stage_number = 5;

-- Item_ID: L204001
UPDATE Maturity_Rubric
SET
    kpi_name = 'New Hire Time to Ramp',
    kpi_description = 'The average amount of time it takes for a new sales rep to become fully productive (e.g., achieve 100% of quota).',
    kpi_rational = 'This KPI is the most direct measure of the sales onboarding program''s effectiveness. A "Reactive" onboarding is informal and slow. As the lever matures, a formal program is created ("Organized") and becomes data-driven ("Platform-led"). An "Intelligent" onboarding experience is personalized and hyper-efficient, significantly shortening the ramp time and accelerating revenue.',
    alternative_kpis = '• New Hire Attrition Rate (First Year) <br> • Onboarding Satisfaction Score',
    kpi_formula = 'Average time in months to reach full productivity'
WHERE item_id = 'L204001';
UPDATE Maturity_Rubric SET kpi_target_value = '> 12 months' WHERE item_id = 'L204001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '9-12 months' WHERE item_id = 'L204001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '6-9 months' WHERE item_id = 'L204001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '4-6 months' WHERE item_id = 'L204001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 4 months' WHERE item_id = 'L204001' AND stage_number = 5;

-- Item_ID: L204002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Manager Coaching Hours',
    kpi_description = 'The average number of hours per week that a front-line sales manager spends on formal and informal coaching activities with their team.',
    kpi_rational = 'This is a leading indicator of team development and performance improvement. A "Reactive" manager does no formal coaching. As the lever matures, a coaching framework is introduced ("Organized") and supported by conversation intelligence tools ("Platform-led"). An "Intelligent" coaching culture makes data-driven coaching a core part of every manager''s week.',
    alternative_kpis = '• Rep Performance Improvement Post-Coaching <br> • Win Rate on Coached Deals',
    kpi_formula = 'Average hours per week per front-line manager'
WHERE item_id = 'L204002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 1 hour' WHERE item_id = 'L204002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '1-2 hours' WHERE item_id = 'L204002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '2-3 hours' WHERE item_id = 'L204002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '3-4 hours' WHERE item_id = 'L204002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 4 hours' WHERE item_id = 'L204002' AND stage_number = 5;

-- Item_ID: L204003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Adoption Rate',
    kpi_description = 'The percentage of sales reps who are actively and effectively using the core sales technology stack',
    kpi_rational = 'Adoption is the primary measure of the sales tech stack''s value and ROI. A "Reactive" state has low adoption and wasted spend. As the lever matures, the tech stack becomes more integrated ("Automated") and intelligent ("Intelligent"). High adoption proves that the tools are successfully enabling rep productivity and driving the desired sales process.',
    alternative_kpis = '• Rep Satisfaction with Sales Tools <br> • Time Spent on Non-Selling Activities',
    kpi_formula = '(% of Sales Reps meeting usage threshold)'
WHERE item_id = 'L204003';
UPDATE Maturity_Rubric SET kpi_target_value = '< 40%' WHERE item_id = 'L204003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '40-60%' WHERE item_id = 'L204003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '60-80%' WHERE item_id = 'L204003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '80-95%' WHERE item_id = 'L204003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 95%' WHERE item_id = 'L204003' AND stage_number = 5;

-- Item_ID: L204004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Share of Reps Above 100%',
    kpi_description = 'The percentage of the sales force that achieves 100% or more of their assigned quota',
    kpi_rational = 'This KPI measures the health of the sales team''s performance distribution. A "Reactive" team has only a few "heroes" succeeding. A mature, "Intelligent" performance management lever uses data and analytics to enable a large portion of the team to overachieve, indicating that success is a scalable, repeatable science, not an art.',
    alternative_kpis = '• Quota Attainment Distribution Curve <br> • Sales Productivity (Revenue per Rep)',
    kpi_formula = '(# of Reps > 100% of Quota / Total # of Reps) * 100'
WHERE item_id = 'L204004';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L204004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'L204004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-20%' WHERE item_id = 'L204004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '20-40%' WHERE item_id = 'L204004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 40%' WHERE item_id = 'L204004' AND stage_number = 5;

-- Item_ID: L301001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Share of Voice (SOV)',
    kpi_description = 'The company''s share of media mentions and analyst articles',
    kpi_rational = 'This is a primary benchmark for market leadership and brand visibility. A "Reactive" company is a niche player with no voice. As the lever matures, it engages with PR agencies ("Organized") and analysts ("Automated"). An "Intelligent" company is a visionary leader with a dominant share of voice, shaping the market conversation.',
    alternative_kpis = '• Analyst Report Ranking (e.g., Gartner MQ) <br> • Media Sentiment Score',
    kpi_formula = '(Your Brand''s Mentions / Total Market Mentions) * 100'
WHERE item_id = 'L301001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 10%' WHERE item_id = 'L301001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10-25%' WHERE item_id = 'L301001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '25-50%' WHERE item_id = 'L301001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '50-75%' WHERE item_id = 'L301001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 75%' WHERE item_id = 'L301001' AND stage_number = 5;

-- Item_ID: L301002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Share of Voice (SOV)',
    kpi_description = 'The company''s share of media mentions and analyst articles',
    kpi_rational = 'This is a primary benchmark for market leadership and brand visibility. A "Reactive" company is a niche player with no voice. As the lever matures, it engages with PR agencies ("Organized") and analysts ("Automated"). An "Intelligent" company is a visionary leader with a dominant share of voice, shaping the market conversation.',
    alternative_kpis = '• Analyst Report Ranking (e.g., Gartner MQ) <br> • Media Sentiment Score',
    kpi_formula = '(Your Brand''s Mentions / Total Market Mentions) * 100'
WHERE item_id = 'L301002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 10%' WHERE item_id = 'L301002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10-25%' WHERE item_id = 'L301002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '25-50%' WHERE item_id = 'L301002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '50-75%' WHERE item_id = 'L301002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 75%' WHERE item_id = 'L301002' AND stage_number = 5;

-- Item_ID: L301003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Win Rate',
    kpi_description = 'The percentage of deals won vs. a specific, named competitor',
    kpi_rational = 'This KPI directly measures the effectiveness of competitive intelligence and analyst relations in a sales context. A "Reactive" company is a niche player that rarely wins head-to-head. As the lever matures, it tracks competitors ("Organized") and becomes a challenger ("Automated"). An "Intelligent" company is a visionary leader that uses deep insights to achieve a dominant win rate against key rivals.',
    alternative_kpis = '• Competitive Displacement Rate <br> • Analyst Report Ranking',
    kpi_formula = '(# of Deals Won vs. Competitor X / Total Deals vs. Competitor X) * 100'
WHERE item_id = 'L301003';
UPDATE Maturity_Rubric SET kpi_target_value = '< 20%' WHERE item_id = 'L301003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '20-30%' WHERE item_id = 'L301003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '30-40%' WHERE item_id = 'L301003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '40-50%' WHERE item_id = 'L301003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 50%' WHERE item_id = 'L301003' AND stage_number = 5;

-- Item_ID: L301004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Analyst Score',
    kpi_description = 'A composite score based on the company''s positioning in key analyst reports',
    kpi_rational = 'This is an objective, third-party validation of the brand and market strategy''s success. A "Reactive" company is not on the radar of analysts. As the lever matures, it begins to brief analysts ("Organized") and becomes a recognized player ("Automated"). An "Intelligent" strategy results in the company being named a "Leader," which is a powerful tool for sales and marketing.',
    alternative_kpis = '• Share of Voice (SOV) <br> • Brand Recall Score',
    kpi_formula = 'A composite score based on the company''s positioning in key analyst reports'
WHERE item_id = 'L301004';
UPDATE Maturity_Rubric SET kpi_target_value = 'Niche Player' WHERE item_id = 'L301004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = 'Challenger' WHERE item_id = 'L301004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = 'Visionary' WHERE item_id = 'L301004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = 'Leader' WHERE item_id = 'L301004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = 'Leader' WHERE item_id = 'L301004' AND stage_number = 5;

-- Item_ID: L302001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Marketing Sourced Pipeline',
    kpi_description = 'The total value of all sales pipeline that originated from digital marketing channels',
    kpi_rational = 'This is the ultimate measure of the digital marketing engine''s contribution to revenue. A "Reactive" company has a basic website with no lead capture. As the lever matures, it optimizes channels ("Organized") and connects to the CRM ("Automated"). An "Intelligent" digital engine is a predictive, self-optimizing machine for generating high-quality pipeline at scale.',
    alternative_kpis = '• Website Traffic-to-Lead Conversion Rate <br> • Cost per MQL',
    kpi_formula = 'Sum(Value of all pipeline from digital channels)'
WHERE item_id = 'L302001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L302001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'L302001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30%' WHERE item_id = 'L302001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '30-50%' WHERE item_id = 'L302001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 50%' WHERE item_id = 'L302001' AND stage_number = 5;

-- Item_ID: L302002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Target Account Engagement',
    kpi_description = 'A composite score that measures the level and depth of engagement (e.g., website visits, content downloads, event attendance) from a defined list of target accounts.',
    kpi_rational = 'This is the leading indicator of an ABM program''s success. A "Reactive" state has no targeted outreach. As the lever matures, a "wish list" is created ("Organized") and campaigns are run ("Automated"). An "Intelligent" ABM program uses data to orchestrate personalized, multi-channel campaigns that drive deep engagement within the accounts most likely to buy.',
    alternative_kpis = '• Pipeline Velocity in Target Accounts <br> • % of Target Accounts with Pipeline',
    kpi_formula = 'A composite score of engagement from target accounts'
WHERE item_id = 'L302002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 10%' WHERE item_id = 'L302002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10-25%' WHERE item_id = 'L302002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '25-50%' WHERE item_id = 'L302002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '50-75%' WHERE item_id = 'L302002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 75%' WHERE item_id = 'L302002' AND stage_number = 5;

-- Item_ID: L302003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Target Account Campaign ROI',
    kpi_description = 'The return on investment for a specific ABM campaign.',
    kpi_rational = 'This KPI measures the financial efficiency and effectiveness of the ABM strategy. A "Reactive" state has no targeted campaigns. As the lever matures, a "wish list" is created ("Organized") and campaigns are run ("Automated"). An "Intelligent" ABM program is a programmatic, data-driven engine that consistently delivers a high ROI on its targeted investments.',
    alternative_kpis = '• Target Account Engagement Score <br> • Pipeline Velocity in Target Accounts',
    kpi_formula = '(Pipeline Generated / Campaign Cost)'
WHERE item_id = 'L302003';
UPDATE Maturity_Rubric SET kpi_target_value = 'Not Measured' WHERE item_id = 'L302003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '< 1x' WHERE item_id = 'L302003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '1x - 3x' WHERE item_id = 'L302003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '3x - 5x' WHERE item_id = 'L302003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 5x' WHERE item_id = 'L302003' AND stage_number = 5;

-- Item_ID: L302004
UPDATE Maturity_Rubric
SET
    kpi_name = 'MQL to SQL Conversion Rate',
    kpi_description = 'The percentage of Marketing Qualified Leads (MQLs) that are accepted by sales and become Sales Qualified Leads (SQLs).',
    kpi_rational = 'This is the most critical measure of lead quality and sales/marketing alignment. A "Reactive" process sends all leads to sales, resulting in a low conversion rate. As the lever matures, a basic nurture stream ("Organized") and scoring model ("Automated") are implemented. An "Intelligent" process uses AI to hyper-personalize nurturing and predict which leads are ready for sales, maximizing the conversion rate.',
    alternative_kpis = '• Lead Score Accuracy <br> • Time to MQL',
    kpi_formula = '(# of SQLs / # of MQLs)'
WHERE item_id = 'L302004';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L302004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'L302004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-20%' WHERE item_id = 'L302004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '20-30%' WHERE item_id = 'L302004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 30%' WHERE item_id = 'L302004' AND stage_number = 5;

-- Item_ID: L303001
UPDATE Maturity_Rubric
SET
    kpi_name = 'New Product On-Time Launch',
    kpi_description = 'The percentage of new product or feature launches that are delivered to the market by the committed date',
    kpi_rational = 'This KPI measures the operational rigor and cross-functional alignment of the GTM process. A "Reactive" launch is a chaotic checklist. As the lever matures, a standard process is created ("Organized") and becomes data-driven ("Platform-led"). An "Intelligent" GTM process is a well-oiled machine that ensures all cross-functional teams are aligned to deliver a successful, predictable launch every time.',
    alternative_kpis = '• Feature Adoption Rate (First 90 Days) <br> • GTM Launch Success Score',
    kpi_formula = '(# of Launches On-Time / Total # of Launches) * 100'
WHERE item_id = 'L303001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 50%' WHERE item_id = 'L303001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '50-75%' WHERE item_id = 'L303001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '75-90%' WHERE item_id = 'L303001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '90-98%' WHERE item_id = 'L303001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 98%' WHERE item_id = 'L303001' AND stage_number = 5;

-- Item_ID: L303002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Content Usage Rate',
    kpi_description = 'The percentage of launch-specific sales and marketing content that is actively used by the sales team',
    kpi_rational = 'This measures the effectiveness and relevance of the content created for a new product introduction (NPI). A "Reactive" launch has ad-hoc, unused content. As the lever matures, a standard repository is created ("Organized") and usage is tracked ("Automated"). An "Intelligent" launch uses data to create and deliver the exact content reps need to be successful.',
    alternative_kpis = '• % of Reps Certified on New Product <br> • Pipeline Created for New Product',
    kpi_formula = '(% of available sales and marketing content used)'
WHERE item_id = 'L303002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 10%' WHERE item_id = 'L303002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10-25%' WHERE item_id = 'L303002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '25-50%' WHERE item_id = 'L303002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '50-75%' WHERE item_id = 'L303002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 75%' WHERE item_id = 'L303002' AND stage_number = 5;

-- Item_ID: L303003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Average Revenue Per Rep',
    kpi_description = 'The average amount of revenue generated per sales or partner representative',
    kpi_rational = 'This is a holistic measure of the enablement program''s impact on overall productivity. A "Reactive" enablement effort is ad-hoc and has little impact. As the lever matures, a standard training program is created ("Organized") and becomes data-driven ("Platform-led"). An "Intelligent" enablement program is personalized and continuously optimized, leading to a measurable increase in the productivity of the entire GTM team.',
    alternative_kpis = '• New Hire Time to Ramp <br> • Enablement Content Satisfaction Score',
    kpi_formula = '(Total Annual Revenue / Total # of Reps)'
WHERE item_id = 'L303003';
UPDATE Maturity_Rubric SET kpi_target_value = 'Stagnant or Declining' WHERE item_id = 'L303003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = 'Slow Growth (< 5%)' WHERE item_id = 'L303003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = 'Moderate Growth (5-10%)' WHERE item_id = 'L303003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = 'Strong Growth (10-20%)' WHERE item_id = 'L303003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = 'Rapid Growth (> 20%)' WHERE item_id = 'L303003' AND stage_number = 5;

-- ... (This script continues for the remaining 128 unique Item_IDs) ...

-- ... (Continuation of the SQL script) ...

-- Item_ID: L303004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Average Revenue Per Account (ARPA)',
    kpi_description = 'The average amount of recurring revenue generated per customer account',
    kpi_rational = 'ARPA is the primary indicator of the pricing and packaging strategy''s success in capturing value. A "Reactive" strategy is cost-plus and leads to low ARPA. As the lever matures, it becomes value-based ("Organized") and data-driven ("Platform-led"). An "Intelligent" strategy uses data to create sophisticated, multi-tiered packaging that maximizes ARPA and drives sustainable growth.',
    alternative_kpis = '• Gross Margin % <br> • Expansion MRR as % of Total MRR',
    kpi_formula = '(Total Recurring Revenue / Total # of Accounts)'
WHERE item_id = 'L303004';
UPDATE Maturity_Rubric SET kpi_target_value = 'Stagnant or Declining' WHERE item_id = 'L303004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = 'Slow Growth (< 5%)' WHERE item_id = 'L303004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = 'Moderate Growth (5-10%)' WHERE item_id = 'L303004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = 'Strong Growth (10-20%)' WHERE item_id = 'L303004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = 'Rapid Growth (> 20%)' WHERE item_id = 'L303004' AND stage_number = 5;

-- Item_ID: L304001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Marketing Tech Stack Lead to Deal Close Time',
    kpi_description = 'The average time it takes for a new lead to be converted into a closed-won deal',
    kpi_rational = 'This is a holistic measure of the tech stack''s efficiency and its impact on revenue velocity. A "Reactive" stack is a patchwork of disconnected tools. As the lever matures, it becomes more integrated ("Organized") and managed by a MOPs team ("Automated"). An "Intelligent" stack is a predictive, unified platform that streamlines the entire customer journey, accelerating the lead-to-close cycle.',
    alternative_kpis = '• Tech Stack Utilization Rate <br> • Marketing Data Quality',
    kpi_formula = 'Average time from lead creation to deal close'
WHERE item_id = 'L304001';
UPDATE Maturity_Rubric SET kpi_target_value = '> 180 days' WHERE item_id = 'L304001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '120-180 days' WHERE item_id = 'L304001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '90-120 days' WHERE item_id = 'L304001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '60-90 days' WHERE item_id = 'L304001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 60 days' WHERE item_id = 'L304001' AND stage_number = 5;

-- Item_ID: L304002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Marketing Pipeline per Dollar of Spend',
    kpi_description = 'The amount of sales pipeline generated for every dollar of marketing spend',
    kpi_rational = 'This is a key measure of marketing''s efficiency and the effectiveness of its budget allocation. A "Reactive" budget is managed like a black box. As the lever matures, basic ROI is tracked ("Organized") and becomes more strategic ("Platform-led"). An "Intelligent" marketing analytics function uses predictive models to allocate budget in real-time to the channels that generate the most pipeline for every dollar spent.',
    alternative_kpis = '• Return on Marketing Investment (ROMI) <br> • Customer Acquisition Cost (CAC)',
    kpi_formula = '(Total Pipeline Generated / Total Marketing Spend)'
WHERE item_id = 'L304002';
UPDATE Maturity_Rubric SET kpi_target_value = '< $3' WHERE item_id = 'L304002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '$3 - $5' WHERE item_id = 'L304002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '$5 - $8' WHERE item_id = 'L304002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '$8 - $12' WHERE item_id = 'L304002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> $12' WHERE item_id = 'L304002' AND stage_number = 5;

-- Item_ID: L304003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Usable Contacts in the Marketing Database',
    kpi_description = 'The percentage of contacts in the marketing database that are complete and marketable',
    kpi_rational = 'This KPI is the foundation of all data-driven marketing. A "Reactive" database is a messy, unusable data silo. As the lever matures, a single-tier database is created ("Organized") and hygiene processes are implemented ("Automated"). An "Intelligent" data management strategy ensures a pristine, unified customer database that is the "source of truth" for all marketing activities.',
    alternative_kpis = '• Data Enrichment Rate <br> • Lead-to-Account Match Rate',
    kpi_formula = '(% of marketable contacts in the database)'
WHERE item_id = 'L304003';
UPDATE Maturity_Rubric SET kpi_target_value = '< 50%' WHERE item_id = 'L304003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '50-70%' WHERE item_id = 'L304003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '70-85%' WHERE item_id = 'L304003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '85-95%' WHERE item_id = 'L304003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 95%' WHERE item_id = 'L304003' AND stage_number = 5;

-- Item_ID: L304004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Usable Contacts in the Marketing Database',
    kpi_description = 'The percentage of contacts in the marketing database that are complete and marketable',
    kpi_rational = 'This KPI is the foundation of all data-driven marketing. A "Reactive" database is a messy, unusable data silo. As the lever matures, a single-tier database is created ("Organized") and hygiene processes are implemented ("Automated"). An "Intelligent" data management strategy ensures a pristine, unified customer database that is the "source of truth" for all marketing activities.',
    alternative_kpis = '• Data Enrichment Rate <br> • Lead-to-Account Match Rate',
    kpi_formula = '(% of marketable contacts in the database)'
WHERE item_id = 'L304004';
UPDATE Maturity_Rubric SET kpi_target_value = '< 50%' WHERE item_id = 'L304004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '50-70%' WHERE item_id = 'L304004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '70-85%' WHERE item_id = 'L304004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '85-95%' WHERE item_id = 'L304004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 95%' WHERE item_id = 'L304004' AND stage_number = 5;

-- Item_ID: L401001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Average Time to First Deal',
    kpi_description = 'The average amount of time it takes for a newly recruited partner to close their first deal',
    kpi_rational = 'This is a critical measure of the partner onboarding and enablement process''s effectiveness. A "Reactive" program has a long, unsupported ramp time. As the lever matures, a formal onboarding process is created ("Organized") and becomes more dynamic ("Platform-led"). An "Intelligent" program is highly automated and personalized, significantly shortening the time to first revenue.',
    alternative_kpis = '• Partner Recruitment Rate <br> • Partner Satisfaction (PSAT) Score',
    kpi_formula = 'Average # of months from partner signing to first closed deal'
WHERE item_id = 'L401001';
UPDATE Maturity_Rubric SET kpi_target_value = '> 12 months' WHERE item_id = 'L401001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '9-12 months' WHERE item_id = 'L401001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '6-9 months' WHERE item_id = 'L401001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '3-6 months' WHERE item_id = 'L401001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 3 months' WHERE item_id = 'L401001' AND stage_number = 5;

-- Item_ID: L401002
UPDATE Maturity_Rubric
SET
    kpi_name = '% of Certified Partners',
    kpi_description = 'The percentage of active partners who have successfully completed all required training and certification programs',
    kpi_rational = 'This is a leading indicator of partner capability and commitment. A "Reactive" program has no formal training. As the lever matures, a basic certification is introduced ("Organized") and becomes part of a more dynamic learning experience ("Platform-led"). An "Intelligent" program uses data to personalize learning paths, ensuring the entire partner ecosystem is highly skilled and effective.',
    alternative_kpis = '• Partner Churn Rate <br> • New Partner Sourced Pipeline (First 90 Days)',
    kpi_formula = '(# of Certified Partners / Total # of Active Partners) * 100'
WHERE item_id = 'L401002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L401002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'L401002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30%' WHERE item_id = 'L401002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '30-50%' WHERE item_id = 'L401002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 50%' WHERE item_id = 'L401002' AND stage_number = 5;

-- Item_ID: L401003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Partner Sourced Pipeline',
    kpi_description = 'The total value of sales pipeline generated from leads sourced directly by partners',
    kpi_rational = 'This KPI is the ultimate measure of the partner enablement and Market Development Fund (MDF) programs'' success. A "Reactive" program has no formal enablement. As the lever matures, a basic set of content is provided ("Organized") and MDF is introduced ("Automated"). An "Intelligent" program provides a personalized experience and co-marketing automation that empowers partners to become a significant and predictable pipeline generation engine.',
    alternative_kpis = '• MDF ROI <br> • Partner Content Usage Rate',
    kpi_formula = '(Sum(Value of Partner Sourced Pipeline) / Total Pipeline) * 100'
WHERE item_id = 'L401003';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5% of total pipeline' WHERE item_id = 'L401003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'L401003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-20%' WHERE item_id = 'L401003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '20-35%' WHERE item_id = 'L401003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 35%' WHERE item_id = 'L401003' AND stage_number = 5;

-- Item_ID: L401004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Partner Satisfaction',
    kpi_description = 'A score on a 1-10 scale, typically from a survey, measuring a partner''s overall satisfaction with the program, technology (PRM), and support.',
    kpi_rational = 'Partner satisfaction is the leading indicator of ecosystem health and loyalty. A "Reactive" program has no formal support and low satisfaction. As the lever matures, a basic PRM is implemented ("Organized") and the experience becomes more personalized ("Platform-led"). An "Intelligent" program uses AI and automation to create a world-class partner experience, resulting in high satisfaction and a "partner of choice" reputation.',
    alternative_kpis = '• Partner Portal Adoption Rate <br> • Time to Resolve Partner Support Tickets',
    kpi_formula = 'A composite score based on a partner survey'
WHERE item_id = 'L401004';
UPDATE Maturity_Rubric SET kpi_target_value = '< 6.0' WHERE item_id = 'L401004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '6.0 - 7.0' WHERE item_id = 'L401004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '7.0 - 8.0' WHERE item_id = 'L401004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '8.0 - 9.0' WHERE item_id = 'L401004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 9.0' WHERE item_id = 'L401004' AND stage_number = 5;

-- Item_ID: L401005
UPDATE Maturity_Rubric
SET
    kpi_name = 'Partner Satisfaction',
    kpi_description = 'A score on a 1-10 scale, typically from a survey, measuring a partner''s overall satisfaction with the program, technology (PRM), and support.',
    kpi_rational = 'Partner satisfaction is the leading indicator of ecosystem health and loyalty. A "Reactive" program has no formal support and low satisfaction. As the lever matures, a basic PRM is implemented ("Organized") and the experience becomes more personalized ("Platform-led"). An "Intelligent" program uses AI and automation to create a world-class partner experience, resulting in high satisfaction and a "partner of choice" reputation.',
    alternative_kpis = '• Partner Portal Adoption Rate <br> • Time to Resolve Partner Support Tickets',
    kpi_formula = 'A composite score based on a partner survey'
WHERE item_id = 'L401005';
UPDATE Maturity_Rubric SET kpi_target_value = '< 6.0' WHERE item_id = 'L401005' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '6.0 - 7.0' WHERE item_id = 'L401005' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '7.0 - 8.0' WHERE item_id = 'L401005' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '8.0 - 9.0' WHERE item_id = 'L401005' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 9.0' WHERE item_id = 'L401005' AND stage_number = 5;

-- Item_ID: L402001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Reseller Channel Revenue',
    kpi_description = 'The percentage of the company''s total bookings that come from the reseller channel',
    kpi_rational = 'This is the primary measure of the "classic sell-through" channel''s scale and effectiveness. A "Reactive" company has no reseller channel. As the lever matures, a basic program is created ("Organized") and becomes more strategic ("Platform-led"). An "Intelligent" MSP program is a significant, predictable, and high-growth revenue stream for the company.',
    alternative_kpis = '• Channel Sales Growth YoY % <br> • Average Deal Size (Channel vs. Direct)',
    kpi_formula = '(Total Bookings from Resellers / Total Company Bookings) * 100'
WHERE item_id = 'L402001';
UPDATE Maturity_Rubric SET kpi_target_value = '0%' WHERE item_id = 'L402001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '0% - 2%' WHERE item_id = 'L402001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '2-8%' WHERE item_id = 'L402001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '8-20%' WHERE item_id = 'L402001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 20%' WHERE item_id = 'L402001' AND stage_number = 5;

-- Item_ID: L402002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Co-Sell Influenced Bookings',
    kpi_description = 'The percentage of the company''s total bookings where a service partner was actively involved in the sales cycle',
    kpi_rational = 'This KPI measures the impact of the "sell-with" motion. A "Reactive" company has no formal co-sell process. As the lever matures, basic rules of engagement are created ("Organized") and the motion becomes a key competitive advantage ("Platform-led"). An "Intelligent" co-sell motion is deeply integrated into the GTM, with partners acting as a seamless extension of the sales team.',
    alternative_kpis = '• Co-Sell Win Rate <br> • Partner Influenced Pipeline',
    kpi_formula = '(Total Bookings with Service Partner Influence / Total Company Bookings) * 100'
WHERE item_id = 'L402002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L402002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'L402002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30%' WHERE item_id = 'L402002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '30-50%' WHERE item_id = 'L402002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 50%' WHERE item_id = 'L402002' AND stage_number = 5;

-- Item_ID: L402003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Number of Channel Conflict Disputes',
    kpi_description = 'The total number of formal channel conflict disputes that are escalated for resolution in a given period',
    kpi_rational = 'A low number of disputes is the clearest sign of a well-run, trusted channel program. A "Reactive" state has rampant, unresolved conflict. As the lever matures, a formal deal registration process is implemented ("Organized") and governed by a "council" ("Platform-led"). An "Intelligent" program uses an integrated system to prevent conflict before it happens, fostering a healthy ecosystem.',
    alternative_kpis = '• Deal Registration Approval Rate <br> • Partner Satisfaction (PSAT) Score',
    kpi_formula = 'A count of escalated channel conflict disputes'
WHERE item_id = 'L402003';
UPDATE Maturity_Rubric SET kpi_target_value = '> 10' WHERE item_id = 'L402003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10' WHERE item_id = 'L402003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '2-5' WHERE item_id = 'L402003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '1-2' WHERE item_id = 'L402003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L402003' AND stage_number = 5;

-- Item_ID: L402004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Partner Satisfaction',
    kpi_description = 'A score on a 1-10 scale, typically from a survey, measuring a partner''s overall satisfaction with the program, technology, and support.',
    kpi_rational = 'Partner satisfaction is the leading indicator of ecosystem health and loyalty. A "Reactive" program has no formal support and low satisfaction. As the lever matures, a basic PRM is implemented ("Organized") and the experience becomes more personalized ("Platform-led"). An "Intelligent" program uses AI and automation to create a world-class partner experience, resulting in high satisfaction and a "partner of choice" reputation.',
    alternative_kpis = '• Partner Churn Rate <br> • Partner Net Promoter Score (pNPS)',
    kpi_formula = 'A score on a 1-10 scale, typically from a survey'
WHERE item_id = 'L402004';
UPDATE Maturity_Rubric SET kpi_target_value = '< 6.0' WHERE item_id = 'L402004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '6.0 - 7.0' WHERE item_id = 'L402004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '7.0 - 8.0' WHERE item_id = 'L402004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '8.0 - 9.0' WHERE item_id = 'L402004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 9.0' WHERE item_id = 'L402004' AND stage_number = 5;

-- Item_ID: L403001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Certified ISV Bookings',
    kpi_description = 'The total value of new and renewal bookings that are certified as being sourced or influenced by an ISV or Hyperscaler alliance partner',
    kpi_rational = 'This KPI measures the commercial success of the company''s most strategic alliances. A "Reactive" company has a few simple technology partners. As the lever matures, it joins hyperscaler marketplaces ("Organized") and builds a strategic, top-tier alliance program ("Platform-led"). An "Intelligent" program is co-sold with hyperscalers, making these alliances a major source of enterprise bookings.',
    alternative_kpis = '• # of Marketplace Listings <br> • Joint Customer Count Growth',
    kpi_formula = 'Sum(Bookings from certified ISV/Hyperscaler deals)'
WHERE item_id = 'L403001';
UPDATE Maturity_Rubric SET kpi_target_value = '$0' WHERE item_id = 'L403001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '< $250k' WHERE item_id = 'L403001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '$250k - $1.5M' WHERE item_id = 'L403001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '$1.5M - $10M' WHERE item_id = 'L403001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> $10M' WHERE item_id = 'L403001' AND stage_number = 5;

-- Item_ID: L403002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Deals via GSI',
    kpi_description = 'The total value of new and renewal bookings that are sourced or influenced by a Global System Integrator (GSI) partner',
    kpi_rational = 'This measures the success of leveraging the largest partners to land and expand in the enterprise. A "Reactive" company has no GSI relationships. As the lever matures, a basic program is created ("Organized") and becomes a core part of the GTM strategy ("Platform-led"). An "Intelligent" GSI program is a seamless, top-tier, strategic motion that drives significant enterprise revenue.',
    alternative_kpis = '• GSI-Led Implementations <br> • Joint Pipeline with GSIs',
    kpi_formula = '(Total Bookings from GSI / Total Company Bookings) * 100'
WHERE item_id = 'L403002';
UPDATE Maturity_Rubric SET kpi_target_value = '0%' WHERE item_id = 'L403002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '0% - 1%' WHERE item_id = 'L403002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '1-5%' WHERE item_id = 'L403002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'L403002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 15%' WHERE item_id = 'L403002' AND stage_number = 5;

-- Item_ID: L403003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Deals via GSI',
    kpi_description = 'The total value of new and renewal bookings that are sourced or influenced by a Global System Integrator (GSI) partner',
    kpi_rational = 'This measures the success of leveraging the largest partners to land and expand in the enterprise. A "Reactive" company has no GSI relationships. As the lever matures, a basic program is created ("Organized") and becomes a core part of the GTM strategy ("Platform-led"). An "Intelligent" GSI program is a seamless, top-tier, strategic motion that drives significant enterprise revenue.',
    alternative_kpis = '• GSI-Led Implementations <br> • Joint Pipeline with GSIs',
    kpi_formula = 'Sum(Bookings from GSI deals)'
WHERE item_id = 'L403003';
UPDATE Maturity_Rubric SET kpi_target_value = '$0' WHERE item_id = 'L403003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '< $1M' WHERE item_id = 'L403003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '$1M - $5M' WHERE item_id = 'L403003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '$5M - $20M' WHERE item_id = 'L403003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> $20M' WHERE item_id = 'L403003' AND stage_number = 5;

-- Item_ID: L403004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Co-sell deals',
    kpi_description = 'The total value of new and renewal bookings that are sourced or influenced by a strategic alliance partner.',
    kpi_rational = 'This KPI measures the commercial success of the company''s most strategic alliances. A "Reactive" company has a few simple technology partners. As the lever matures, it joins hyperscaler marketplaces ("Organized") and builds a strategic, top-tier alliance program ("Platform-led"). An "Intelligent" program is co-sold with hyperscalers, making these alliances a major source of enterprise bookings.',
    alternative_kpis = '• Joint Pipeline with Alliances <br> • Integration Adoption Rate',
    kpi_formula = 'Sum(Bookings from co-sell deals)'
WHERE item_id = 'L403004';
UPDATE Maturity_Rubric SET kpi_target_value = '$0' WHERE item_id = 'L403004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '< $1M' WHERE item_id = 'L403004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '$1M - $5M' WHERE item_id = 'L403004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '$5M - $20M' WHERE item_id = 'L403004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> $20M' WHERE item_id = 'L403004' AND stage_number = 5;

-- Item_ID: L501001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Product Line Profitability',
    kpi_description = 'The gross margin of the product.',
    kpi_rational = 'This is the ultimate measure of the product strategy''s commercial viability. A "Reactive" strategy is not tied to financial outcomes. As the lever matures, the roadmap becomes more strategic ("Organized") and data-driven ("Platform-led"). An "Intelligent" product strategy is deeply aligned with the company''s financial goals, ensuring that what is built is not just valuable to customers but also profitable for the business.',
    alternative_kpis = '• Roadmap Achievement Rate <br> • Revenue from New Products',
    kpi_formula = '(Revenue - Cost of Goods Sold) / Revenue'
WHERE item_id = 'L501001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 60%' WHERE item_id = 'L501001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '60-70%' WHERE item_id = 'L501001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '70-75%' WHERE item_id = 'L501001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '75-80%' WHERE item_id = 'L501001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 80%' WHERE item_id = 'L501001' AND stage_number = 5;

-- Item_ID: L501002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Product Net Promoter Score',
    kpi_description = 'A measure of user satisfaction and loyalty, asking how likely users are to recommend the product',
    kpi_rational = 'This is the leading indicator of user-centricity and product-market fit. A "Reactive" product is built based on assumptions. As the lever matures, formal user research is conducted ("Organized") and becomes a core part of the process ("Platform-led"). An "Intelligent" product process is deeply empathetic to user needs, resulting in a product that users love and actively promote.',
    alternative_kpis = '• Customer Satisfaction (CSAT) with Product <br> • Feature Request to Adoption Rate',
    kpi_formula = '(% of Promoters - % of Detractors)'
WHERE item_id = 'L501002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 0' WHERE item_id = 'L501002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '0 - 10' WHERE item_id = 'L501002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-25' WHERE item_id = 'L501002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '25 - 40' WHERE item_id = 'L501002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 40' WHERE item_id = 'L501002' AND stage_number = 5;

-- ... (This script continues for the remaining 108 unique Item_IDs) ...

-- ... (Continuation of the SQL script) ...

-- Item_ID: L501003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Active Users',
    kpi_description = 'The number of unique users who actively engage with the product in a given period',
    kpi_rational = 'Active usage is the primary measure of the value and stickiness of a product. A "Reactive" product has low or untracked usage. As the lever matures, the product portfolio is actively managed ("Organized") and user base analytics are leveraged ("Platform-led"). An "Intelligent" lifecycle management process uses data to drive engagement and maximize the active user base.',
    alternative_kpis = '• Feature Adoption Rate <br> • Customer Churn Rate',
    kpi_formula = '(# of Users on N / # of Users on N-1)'
WHERE item_id = 'L501003';
UPDATE Maturity_Rubric SET kpi_target_value = '< 60%' WHERE item_id = 'L501003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '60-75%' WHERE item_id = 'L501003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '75-90%' WHERE item_id = 'L501003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '90-98%' WHERE item_id = 'L501003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 98%' WHERE item_id = 'L501003' AND stage_number = 5;

-- Item_ID: L501004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Active Users',
    kpi_description = 'The number of unique users who actively engage with the product in a given period',
    kpi_rational = 'Active usage is the primary measure of the value and stickiness of a product. A "Reactive" product has low or untracked usage. As the lever matures, the product portfolio is actively managed ("Organized") and user base analytics are leveraged ("Platform-led"). An "Intelligent" lifecycle management process uses data to drive engagement and maximize the active user base.',
    alternative_kpis = '• Feature Adoption Rate <br> • Customer Churn Rate',
    kpi_formula = '(# of Users on N / # of Users on N-1)'
WHERE item_id = 'L501004';
UPDATE Maturity_Rubric SET kpi_target_value = '< 60%' WHERE item_id = 'L501004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '60-75%' WHERE item_id = 'L501004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '75-90%' WHERE item_id = 'L501004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '90-98%' WHERE item_id = 'L501004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 98%' WHERE item_id = 'L501004' AND stage_number = 5;

-- Item_ID: L502001
UPDATE Maturity_Rubric
SET
    kpi_name = 'API Uptime',
    kpi_description = 'The percentage of time that the product''s public and key internal APIs are operational',
    kpi_rational = 'API uptime is a critical measure of a modern, cloud-native architecture''s reliability and its ability to support an ecosystem. A "Reactive" architecture is a monolith with no APIs. As the lever matures, an API-first approach is adopted ("Organized") and becomes self-healing ("Platform-led"). An "Intelligent" architecture is a resilient, microservices-based system where high API uptime is a given.',
    alternative_kpis = '• API Adoption Rate <br> • Mean Time to Recovery (MTTR)',
    kpi_formula = '(Total Time - Downtime) / Total Time * 100'
WHERE item_id = 'L502001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 99.0%' WHERE item_id = 'L502001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '99.0% - 99.5%' WHERE item_id = 'L502001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '99.5% - 99.9%' WHERE item_id = 'L502001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '99.9% - 99.99%' WHERE item_id = 'L502001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 99.99%' WHERE item_id = 'L502001' AND stage_number = 5;

-- Item_ID: L502002
UPDATE Maturity_Rubric
SET
    kpi_name = 'API Adoption Rate',
    kpi_description = 'The percentage of the target customer base or internal services that are actively using a given API',
    kpi_rational = 'This KPI measures whether the API strategy is creating value for customers and developers. A "Reactive" state has no public APIs. As the lever matures, a formal API program is created ("Organized") and becomes self-service ("Platform-led"). An "Intelligent" API strategy treats APIs as first-class products, and high adoption is the ultimate proof of their success.',
    alternative_kpis = '• Time to First Hello World (Developer Experience) <br> • API Error Rate',
    kpi_formula = '(% of customer base that is actively using the API)'
WHERE item_id = 'L502002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L502002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'L502002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30%' WHERE item_id = 'L502002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '30-50%' WHERE item_id = 'L502002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 50%' WHERE item_id = 'L502002' AND stage_number = 5;

-- Item_ID: L502003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Application Uptime',
    kpi_description = 'The percentage of time that the total application is operational and available to users',
    kpi_rational = 'This is the fundamental measure of the product''s reliability from a customer''s perspective. A "Reactive" application is unstable and frequently down. As the lever matures, performance testing is introduced ("Organized") and the application becomes self-scaling ("Platform-led"). An "Intelligent" application is designed for high availability, ensuring a reliable and trustworthy customer experience.',
    alternative_kpis = '• Page Load Time (95th Percentile) <br> • Error Rate (e.g., 5xx errors)',
    kpi_formula = '(Total Time - Downtime) / Total Time * 100'
WHERE item_id = 'L502003';
UPDATE Maturity_Rubric SET kpi_target_value = '< 99.0%' WHERE item_id = 'L502003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '99.0% - 99.5%' WHERE item_id = 'L502003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '99.5% - 99.9%' WHERE item_id = 'L502003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '99.9% - 99.99%' WHERE item_id = 'L502003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 99.99%' WHERE item_id = 'L502003' AND stage_number = 5;

-- Item_ID: L502004
UPDATE Maturity_Rubric
SET
    kpi_name = '% of Work on Standard Tech Stack',
    kpi_description = 'The percentage of engineering work that is completed using the company''s officially sanctioned technology stack',
    kpi_rational = 'This KPI measures the effectiveness of the technology governance process in preventing fragmentation and complexity. A "Reactive" state has no standards. As the lever matures, a formal review process is established ("Organized") and becomes data-driven ("Platform-led"). An "Intelligent" process allows for innovation while ensuring the vast majority of work leverages a modern, efficient, and well-understood stack.',
    alternative_kpis = '• # of Deprecated Technologies in Use <br> • Time to Onboard New Engineer',
    kpi_formula = '(% of Services on Standard Stack)'
WHERE item_id = 'L502004';
UPDATE Maturity_Rubric SET kpi_target_value = '< 40%' WHERE item_id = 'L502004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '40-60%' WHERE item_id = 'L502004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '60-80%' WHERE item_id = 'L502004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '80-95%' WHERE item_id = 'L502004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 95%' WHERE item_id = 'L502004' AND stage_number = 5;

-- Item_ID: L503001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Sprint Completion Rate',
    kpi_description = 'The percentage of stories or points that were committed to that were successfully completed',
    kpi_rational = 'This is the most direct measure of an agile team''s predictability and execution discipline. A "Reactive" team has chaotic, failed sprints. As the lever matures, basic ceremonies are adopted ("Organized") and the team becomes a true DevOps culture ("Platform-led"). An "Intelligent" team is a high-performing, predictable delivery engine, reflected in a consistently high completion rate.',
    alternative_kpis = '• Story Point Velocity <br> • Cycle Time',
    kpi_formula = '(% of Stories or Points that was Completed / Committed) * 100'
WHERE item_id = 'L503001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 50%' WHERE item_id = 'L503001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '50-70%' WHERE item_id = 'L503001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '70-85%' WHERE item_id = 'L503001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '85-95%' WHERE item_id = 'L503001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 95%' WHERE item_id = 'L503001' AND stage_number = 5;

-- Item_ID: L503002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Deployment Frequency',
    kpi_description = 'The number of times that a team successfully deploys code to production in a given period',
    kpi_rational = 'Deployment Frequency is the heartbeat of a modern software delivery capability. A "Reactive" state has slow, manual deployments. As the lever matures, a basic CI server is set up ("Organized") and the pipeline becomes fully automated ("Platform-led"). An "Intelligent" pipeline enables multiple, on-demand deployments per day, allowing for rapid delivery of value to customers.',
    alternative_kpis = '• Change Failure Rate <br> • Lead Time for Changes',
    kpi_formula = '(# of successful deployments to production)'
WHERE item_id = 'L503002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 1-2 per month' WHERE item_id = 'L503002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '1-4 per week' WHERE item_id = 'L503002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '1-10 per day' WHERE item_id = 'L503002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '> 10 per day' WHERE item_id = 'L503002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 10 per day' WHERE item_id = 'L503002' AND stage_number = 5;

-- Item_ID: L503003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Developer Satisfaction Score',
    kpi_description = 'A measure of the engineering team''s satisfaction with the culture, tools, processes, and work environment',
    kpi_rational = 'A satisfied and engaged engineering team is a productive and innovative one. A "Reactive" culture has high engineer attrition. As the lever matures, a formal team structure is created ("Organized") and a developer platform is invested in ("Platform-led"). An "Intelligent" engineering culture is a key competitive advantage for attracting and retaining top talent, reflected in a high satisfaction score.',
    alternative_kpis = '• Engineer Attrition Rate <br> • Time Spent on Rework',
    kpi_formula = 'A measure on a 1-5 scale'
WHERE item_id = 'L503003';
UPDATE Maturity_Rubric SET kpi_target_value = '< 2.5' WHERE item_id = 'L503003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '2.5 - 3.0' WHERE item_id = 'L503003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '3.0 - 3.5' WHERE item_id = 'L503003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '3.5 - 4.0' WHERE item_id = 'L503003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 4.0' WHERE item_id = 'L503003' AND stage_number = 5;

-- Item_ID: L503004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Unit Test Coverage',
    kpi_description = 'The percentage of the application''s codebase that is covered by automated unit tests',
    kpi_rational = 'This is a foundational measure of code quality and developer discipline. A "Reactive" team writes no tests. As the lever matures, basic standards are set ("Organized") and testing becomes part of the CI pipeline ("Platform-led"). An "Intelligent" quality process makes comprehensive testing a core part of the development culture, ensuring the codebase is robust and maintainable.',
    alternative_kpis = '• Code Churn / Rework Rate <br> • Static Code Analysis Violations',
    kpi_formula = '(% of code that has covered lines)'
WHERE item_id = 'L503004';
UPDATE Maturity_Rubric SET kpi_target_value = '< 10%' WHERE item_id = 'L503004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10-30%' WHERE item_id = 'L503004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '30-50%' WHERE item_id = 'L503004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '50-80%' WHERE item_id = 'L503004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 80%' WHERE item_id = 'L503004' AND stage_number = 5;

-- Item_ID: L504001
UPDATE Maturity_Rubric
SET
    kpi_name = '% of Automated Test Cases',
    kpi_description = 'The percentage of the total test suite that is fully automated',
    kpi_rational = 'This KPI measures the maturity and scalability of the testing process. A "Reactive" team relies entirely on manual testing. As the lever matures, a basic QA team is formed ("Organized") and test automation becomes a core strategy ("Platform-led"). An "Intelligent" quality process has a high degree of automation, enabling rapid, reliable, and continuous testing.',
    alternative_kpis = '• Time to Run Full Regression Suite <br> • Escaped Defect Rate',
    kpi_formula = '(% of total test cases that are automated)'
WHERE item_id = 'L504001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L504001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'L504001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-40%' WHERE item_id = 'L504001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '40-70%' WHERE item_id = 'L504001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 70%' WHERE item_id = 'L504001' AND stage_number = 5;

-- Item_ID: L504002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Production Performance vs. SLA',
    kpi_description = 'The number of major performance-related incidents in production',
    kpi_rational = 'This is the ultimate measure of the performance testing program''s effectiveness in preventing customer-facing issues. A "Reactive" team does no performance testing. As the lever matures, a basic QA team runs manual tests ("Organized") and a dedicated performance team is formed ("Platform-led"). An "Intelligent" process integrates continuous performance testing into the pipeline, ensuring the application is always fast and scalable.',
    alternative_kpis = '• Load Test Success Rate <br> • Page Load Time (95th Percentile)',
    kpi_formula = 'Count of major performance-related incidents'
WHERE item_id = 'L504002';
UPDATE Maturity_Rubric SET kpi_target_value = '> 5' WHERE item_id = 'L504002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '3-5' WHERE item_id = 'L504002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '1-2' WHERE item_id = 'L504002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '< 1' WHERE item_id = 'L504002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L504002' AND stage_number = 5;

-- Item_ID: L504003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Escaped Defect Rate',
    kpi_description = 'The number of bugs that are found by customers in production',
    kpi_rational = 'This is the ultimate lagging indicator of the entire quality process''s effectiveness. A "Reactive" process finds bugs late, if at all. As the lever matures, a formal defect tracking process is implemented ("Organized") and becomes predictive ("Platform-led"). An "Intelligent" quality process is so effective at preventing and finding bugs early that almost nothing "escapes" to the customer.',
    alternative_kpis = '• Defect Detection Percentage (DDP) <br> • Mean Time to Resolution (MTTR) for Bugs',
    kpi_formula = '(# of bugs found by customers / not measure)'
WHERE item_id = 'L504003';
UPDATE Maturity_Rubric SET kpi_target_value = '> 1.0' WHERE item_id = 'L504003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '0.5 - 1.0' WHERE item_id = 'L504003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '0.1 - 0.5' WHERE item_id = 'L504003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '< 0.1' WHERE item_id = 'L504003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L504003' AND stage_number = 5;

-- Item_ID: L505001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Critical Vulnerabilities Reported',
    kpi_description = 'The number of high-severity or critical security vulnerabilities found in the production application',
    kpi_rational = 'This is a direct measure of the security of the codebase. A "Reactive" process has no formal security program. As the lever matures, a checklist is created ("Organized") and the SSDLC is integrated into the process ("Platform-led"). An "Intelligent" AppSec program "shifts left," building security into every stage of development and using AI to find and fix vulnerabilities, resulting in a near-zero count of critical issues in production.',
    alternative_kpis = '• Vulnerability Remediation Time <br> • Security Defect Density',
    kpi_formula = 'Count of open high-severity or critical vulnerabilities'
WHERE item_id = 'L505001';
UPDATE Maturity_Rubric SET kpi_target_value = '> 20' WHERE item_id = 'L505001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10 - 20' WHERE item_id = 'L505001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '6 - 10' WHERE item_id = 'L505001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '1 - 5' WHERE item_id = 'L505001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L505001' AND stage_number = 5;

-- Item_ID: L505002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Remediation Time',
    kpi_description = 'The average time it takes to fix a critical security vulnerability from the moment it is discovered',
    kpi_rational = 'In modern security, speed of response is critical. This KPI measures the efficiency of the AppSec response. A "Reactive" state has long, manual remediation cycles. A mature, "Intelligent" AppSec program has automated tools and processes to fix vulnerabilities rapidly, minimizing the window of exposure and protecting customer data.',
    alternative_kpis = '• % of Codebase Scanned by SAST/DAST <br> • Security Training Completion Rate',
    kpi_formula = 'Average time it takes to fix a critical vulnerability'
WHERE item_id = 'L505002';
UPDATE Maturity_Rubric SET kpi_target_value = '> 90 days' WHERE item_id = 'L505002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '60-90 days' WHERE item_id = 'L505002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '30-60 days' WHERE item_id = 'L505002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30 days' WHERE item_id = 'L505002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 15 days' WHERE item_id = 'L505002' AND stage_number = 5;

-- Item_ID: L505003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Sales Deals Lost to Security',
    kpi_description = 'The number of sales opportunities that were lost per quarter where security or compliance was cited as the primary reason',
    kpi_rational = 'This KPI directly measures the business impact of the security and compliance program. A "Reactive" company has no security posture and loses deals. As the lever matures, it achieves key certifications like SOC 2 ("Organized") and becomes a market leader in security ("Platform-led"). An "Intelligent" program uses its robust security posture as a competitive differentiator, resulting in zero deals lost for this reason.',
    alternative_kpis = '• Time to Complete Security Questionnaires <br> • Audit Pass Rate',
    kpi_formula = 'Count of deals lost per quarter'
WHERE item_id = 'L505003';
UPDATE Maturity_Rubric SET kpi_target_value = '> 5' WHERE item_id = 'L505003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '2 - 5' WHERE item_id = 'L505003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '2' WHERE item_id = 'L505003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '1' WHERE item_id = 'L505003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L505003' AND stage_number = 5;

-- Item_ID: L601001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Time to First Value (TTFV)',
    kpi_description = 'The average amount of time it takes for a new customer to achieve the first significant business outcome',
    kpi_rational = 'TTFV is the most critical leading indicator of long-term customer success and retention. A "Reactive" onboarding is a long, manual process. A mature, "Intelligent" onboarding experience is personalized and automated to guide customers to value as quickly as possible, which is crucial for starting the relationship on strong footing.',
    alternative_kpis = '• Onboarding CSAT Score <br> • Go-Live On-Time Rate',
    kpi_formula = 'Average Date to First Value'
WHERE item_id = 'L601001';
UPDATE Maturity_Rubric SET kpi_target_value = '> 90 days' WHERE item_id = 'L601001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '60-90 days' WHERE item_id = 'L601001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '30-60 days' WHERE item_id = 'L601001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30 days' WHERE item_id = 'L601001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 15 days' WHERE item_id = 'L601001' AND stage_number = 5;

-- Item_ID: L601002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Health Score Accuracy',
    kpi_description = 'The accuracy of the customer health score in predicting future outcomes',
    kpi_rational = 'An accurate health score is the foundation of a proactive Customer Success motion. A "Reactive" state has no score. As the lever matures, a basic score is created ("Organized") and becomes more sophisticated ("Platform-led"). An "Intelligent" health score uses predictive analytics, and its high accuracy allows the CSM team to trust the data to focus their efforts on the right customers at the right time.',
    alternative_kpis = '• % of Customers with a Health Score <br> • Correlation between Health Score and NRR',
    kpi_formula = '(% of Correctly Predicted outcomes)'
WHERE item_id = 'L601002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 25%' WHERE item_id = 'L601002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '25-50%' WHERE item_id = 'L601002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '50-75%' WHERE item_id = 'L601002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '75-90%' WHERE item_id = 'L601002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 90%' WHERE item_id = 'L601002' AND stage_number = 5;

-- Item_ID: L601003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Net Revenue Retention',
    kpi_description = 'The percentage of recurring revenue retained from an existing customer cohort',
    kpi_rational = 'This is the ultimate measure of a proactive engagement model''s success. A "Reactive" model is purely focused on renewals. As the lever matures, a formal playbook is created ("Organized") and the model becomes data-driven ("Platform-led"). An "Intelligent" engagement model uses AI to predict churn and identify expansion opportunities, making it a primary driver of NRR.',
    alternative_kpis = '• Gross Revenue Retention <br> • Proactive vs. Reactive CSM Engagements',
    kpi_formula = '((Starting ARR + Expansion - Churn) / Starting ARR) * 100'
WHERE item_id = 'L601003';
UPDATE Maturity_Rubric SET kpi_target_value = '< 90%' WHERE item_id = 'L601003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '90-100%' WHERE item_id = 'L601003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '100-110%' WHERE item_id = 'L601003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '110-125%' WHERE item_id = 'L601003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 125%' WHERE item_id = 'L601003' AND stage_number = 5;

-- Item_ID: L601004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Gross Revenue Retention',
    kpi_description = 'The percentage of recurring revenue retained from existing customers, excluding any expansion',
    kpi_rational = 'GRR is the purest measure of churn management and product stickiness. It is the foundation upon which all expansion (NRR) is built. A "Reactive" state has high, unmanaged churn. A mature, "Intelligent" churn management process uses data to predict and mitigate churn risk, ensuring a stable and predictable recurring revenue base.',
    alternative_kpis = '• Customer Churn Rate (by logo) <br> • Downgrade ARR %',
    kpi_formula = '((Starting ARR - Churn) / Starting ARR) * 100'
WHERE item_id = 'L601004';
UPDATE Maturity_Rubric SET kpi_target_value = '< 80%' WHERE item_id = 'L601004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '80-85%' WHERE item_id = 'L601004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '85-90%' WHERE item_id = 'L601004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '90-95%' WHERE item_id = 'L601004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 95%' WHERE item_id = 'L601004' AND stage_number = 5;

-- ... (This script continues for the remaining 108 unique Item_IDs) ...

-- Item_ID: L602001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Tickets that Breached SLA',
    kpi_description = 'The percentage of customer support tickets that were not resolved within the defined SLA timeframes',
    kpi_rational = 'This is a core measure of the support operation''s ability to meet its commitments to customers. A "Reactive" operation has no SLAs. As the lever matures, a tiered support model is implemented ("Organized") and becomes a 24/7 global operation ("Platform-led"). An "Intelligent" operation uses AI and automation to proactively manage queues, ensuring a very low breach rate.',
    alternative_kpis = '• Customer Satisfaction (CSAT) Score <br> • Average Resolution Time',
    kpi_formula = '(% of tickets that breached SLA)'
WHERE item_id = 'L602001';
UPDATE Maturity_Rubric SET kpi_target_value = '> 20%' WHERE item_id = 'L602001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10-20%' WHERE item_id = 'L602001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'L602001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '2-5%' WHERE item_id = 'L602001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 2%' WHERE item_id = 'L602001' AND stage_number = 5;

-- Item_ID: L602002
UPDATE Maturity_Rubric
SET
    kpi_name = 'First Contact Resolution',
    kpi_description = 'The percentage of customer support tickets that are successfully resolved in the first interaction',
    kpi_rational = 'FCR is a powerful measure of both customer satisfaction and operational efficiency. A "Reactive" support desk has long resolution times and multiple handoffs. A mature, "Intelligent" support function uses AI and a robust knowledge base to empower Tier 1 agents to resolve a high percentage of issues on the first touch.',
    alternative_kpis = '• Ticket Escalation Rate <br> • Average Handle Time (AHT)',
    kpi_formula = '(% of tickets resolved on first contact)'
WHERE item_id = 'L602002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 40%' WHERE item_id = 'L602002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '40-50%' WHERE item_id = 'L602002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '50-60%' WHERE item_id = 'L602002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '60-70%' WHERE item_id = 'L602002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 70%' WHERE item_id = 'L602002' AND stage_number = 5;

-- Item_ID: L602003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Mean Time to Recovery',
    kpi_description = 'The average amount of time it takes to restore service for a customer after a major incident',
    kpi_rational = 'This KPI measures the effectiveness of the incident and problem management process in minimizing customer impact. A "Reactive" process is chaotic and slow. As the lever matures, a formal SRE function is created ("Organized") and becomes predictive ("Platform-led"). An "Intelligent" process uses automation and AI to rapidly diagnose and resolve major issues, minimizing MTTR.',
    alternative_kpis = '• # of Major Incidents per Quarter <br> • Root Cause Analysis (RCA) Completion Rate',
    kpi_formula = 'Average time it takes to resolve an incident'
WHERE item_id = 'L602003';
UPDATE Maturity_Rubric SET kpi_target_value = '> 4 hours' WHERE item_id = 'L602003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '1-4 hours' WHERE item_id = 'L602003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '30-60 minutes' WHERE item_id = 'L602003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '5-30 minutes' WHERE item_id = 'L602003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 5 minutes' WHERE item_id = 'L602003' AND stage_number = 5;

-- Item_ID: L602004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Application Availability',
    kpi_description = 'The percentage of time that the application is operational and available to users',
    kpi_rational = 'This is the fundamental measure of the SRE function''s success in ensuring product reliability. A "Reactive" state has poor availability. As the lever matures, the SRE function is established ("Organized") and becomes a core part of the engineering team ("Platform-led"). An "Intelligent" SRE function uses automation and proactive measures to ensure world-class availability.',
    alternative_kpis = '• Mean Time Between Failures (MTBF) <br> • Error Budget Burn Rate',
    kpi_formula = '(Total Time - Downtime) / Total Time * 100'
WHERE item_id = 'L602004';
UPDATE Maturity_Rubric SET kpi_target_value = '< 99.0%' WHERE item_id = 'L602004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '99.0% - 99.5%' WHERE item_id = 'L602004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '99.5% - 99.9%' WHERE item_id = 'L602004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '99.9% - 99.99%' WHERE item_id = 'L602004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 99.99%' WHERE item_id = 'L602004' AND stage_number = 5;

-- Item_ID: L603001
UPDATE Maturity_Rubric
SET
    kpi_name = 'New Business Deals with Professional Services',
    kpi_description = 'The percentage of new business deals that include a paid professional services (PS) component',
    kpi_rational = 'This KPI, also known as the "attach rate," measures the integration of the PS team into the GTM motion. A "Reactive" state has no formal PS offering. As the lever matures, the PS team is established ("Organized") and becomes a profitable business unit ("Platform-led"). An "Intelligent" PS function is a strategic partner to sales, and a high attach rate shows it is seen as critical for customer success.',
    alternative_kpis = '• Project Margin (PS) <br> • Time to Go-Live',
    kpi_formula = '(% of New Deals with PS)'
WHERE item_id = 'L603001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L603001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'L603001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-20%' WHERE item_id = 'L603001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '20-30%' WHERE item_id = 'L603001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 30%' WHERE item_id = 'L603001' AND stage_number = 5;

-- Item_ID: L603002
UPDATE Maturity_Rubric
SET
    kpi_name = 'PS Cost of Revenue',
    kpi_description = 'The total cost of delivering professional services as a percentage of the total professional services revenue',
    kpi_rational = 'This is a key measure of the services business''s profitability and efficiency. A "Reactive" offering may be a loss-leader. As the lever matures, the team becomes a formal business unit with a focus on margin ("Organized"). An "Intelligent" services business uses data and resource management to optimize delivery, ensuring it is a healthy, profitable, and scalable part of the company.',
    alternative_kpis = '• Billable Utilization Rate <br> • Average Project Margin',
    kpi_formula = '(PS Cost / PS Revenue) * 100'
WHERE item_id = 'L603002';
UPDATE Maturity_Rubric SET kpi_target_value = '> 100% (Negative Margin)' WHERE item_id = 'L603002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10-20%' WHERE item_id = 'L603002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '20-30%' WHERE item_id = 'L603002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '> 30%' WHERE item_id = 'L603002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 30%' WHERE item_id = 'L603002' AND stage_number = 5;

-- Item_ID: L603003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Services Revenue as % of Total',
    kpi_description = 'The percentage of the company''s total revenue that comes from recurring managed and advisory services',
    kpi_rational = 'This KPI measures the success of the services function in evolving from one-time projects to a recurring revenue stream. A "Reactive" state has no recurring services. As the lever matures, a formal offering is created ("Organized") and becomes a significant business ("Platform-led"). An "Intelligent" managed services business is a key driver of the company''s overall growth and valuation.',
    alternative_kpis = '• Recurring Services Margin <br> • Customer Retention for Managed Services',
    kpi_formula = '(Services Revenue / Total Company Revenue) * 100'
WHERE item_id = 'L603003';
UPDATE Maturity_Rubric SET kpi_target_value = '< 2%' WHERE item_id = 'L603003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '2-5%' WHERE item_id = 'L603003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'L603003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '10-15%' WHERE item_id = 'L603003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 15%' WHERE item_id = 'L603003' AND stage_number = 5;

-- Item_ID: L604001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Ticket Deflection Rate',
    kpi_description = 'The percentage of customer issues that are resolved through self-service channels',
    kpi_rational = 'This KPI directly measures the success of the self-service strategy in scaling support and empowering customers. A "Reactive" state has no self-service resources. As the lever matures, a basic knowledge base is created ("Organized") and becomes a core part of the customer experience ("Platform-led"). An "Intelligent" experience uses AI to proactively serve knowledge, maximizing deflection.',
    alternative_kpis = '• Knowledge Base Article helpfulness Score <br> • Self-Service Score',
    kpi_formula = '(# of Self-Service Issues / Total Issues) * 100'
WHERE item_id = 'L604001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L604001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'L604001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30%' WHERE item_id = 'L604001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '30-50%' WHERE item_id = 'L604001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 50%' WHERE item_id = 'L604001' AND stage_number = 5;

-- Item_ID: L604002
UPDATE Maturity_Rubric
SET
    kpi_name = '# of Certified Professionals',
    kpi_description = 'The total number of customers and partners who have successfully passed a formal certification exam',
    kpi_rational = 'This is a key measure of the education program''s reach and its success in creating expert users. A "Reactive" state has ad-hoc "how-to" training. As the lever matures, a dedicated LMS is implemented ("Organized") and the program becomes a key strategic asset ("Platform-led"). An "Intelligent" program creates a vibrant community of certified experts who act as brand advocates.',
    alternative_kpis = '• Training CSAT Score <br> • Product Adoption Lift from Training',
    kpi_formula = 'Count of certified customers and partners'
WHERE item_id = 'L604002';
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L604002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '< 100' WHERE item_id = 'L604002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '100 - 500' WHERE item_id = 'L604002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '500 - 2,000' WHERE item_id = 'L604002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 2,000' WHERE item_id = 'L604002' AND stage_number = 5;

-- Item_ID: L604003
UPDATE Maturity_Rubric
SET
    kpi_name = '% of Customers that are Certified',
    kpi_description = 'The percentage of the total customer base that has at least one certified professional',
    kpi_rational = 'This KPI measures the depth and impact of the community and advocacy programs. A "Reactive" state has no formal community. As the lever matures, an online community is launched ("Organized") and becomes a key strategic asset ("Platform-led"). An "Intelligent" program fosters a vibrant ecosystem where certification is a key part of the customer journey, creating a powerful network effect.',
    alternative_kpis = '• Active Community Engagement Rate <br> • Customer Referenceability Rate',
    kpi_formula = '(# of Certified Customers / Total # of Customers) * 100'
WHERE item_id = 'L604003';
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L604003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L604003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'L604003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '15-20%' WHERE item_id = 'L604003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 20%' WHERE item_id = 'L604003' AND stage_number = 5;

-- Item_ID: L604004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Closed-Loop Feedback %',
    kpi_description = 'The percentage of customer feedback submissions for which the customer received a direct response',
    kpi_rational = 'This measures whether the Voice of the Customer program is a true dialogue or just a one-way data collection exercise. A "Reactive" state has no formal feedback channels. As the lever matures, an NPS program is run ("Organized") and becomes a data-driven, multi-channel program ("Platform-led"). An "Intelligent" VoC program ensures every piece of feedback is actioned and acknowledged, building deep customer trust.',
    alternative_kpis = '• Net Promoter Score (NPS) <br> • # of Product Enhancements from Customer Feedback',
    kpi_formula = '(% of feedback with a closed-loop response)'
WHERE item_id = 'L604004';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L604004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-20%' WHERE item_id = 'L604004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '20-40%' WHERE item_id = 'L604004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '40-80%' WHERE item_id = 'L604004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 80%' WHERE item_id = 'L604004' AND stage_number = 5;

-- Item_ID: L701001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Customers who Provide Score',
    kpi_description = 'The percentage of customers who provide a score or rating on their satisfaction with the cloud service',
    kpi_rational = 'This KPI measures customer engagement and the perceived quality of the cloud service. A "Reactive" service is a black box to customers. As the lever matures, a status page is created ("Organized") and the service becomes a multi-cloud environment ("Platform-led"). An "Intelligent" service provides customers with deep visibility and control, and a high response rate indicates they are engaged and trust the provider.',
    alternative_kpis = '• Cloud Provider''s Native Security Score <br> • System Uptime / Availability',
    kpi_formula = '(% of customers who provide a score)'
WHERE item_id = 'L701001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 40%' WHERE item_id = 'L701001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '40-60%' WHERE item_id = 'L701001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '60-80%' WHERE item_id = 'L701001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '80-95%' WHERE item_id = 'L701001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 95%' WHERE item_id = 'L701001' AND stage_number = 5;

-- Item_ID: L701002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Mean Time to Remediate',
    kpi_description = 'The average time it takes to fix a critical security vulnerability or compliance issue',
    kpi_rational = 'This is a critical measure of the cloud security practice''s operational excellence. A "Reactive" state has basic, slow security measures. As the lever matures, a formal security team is created ("Organized") and the environment becomes predictive ("Platform-led"). An "Intelligent" cloud security practice uses automation to detect and remediate threats almost instantly, minimizing the MTTR.',
    alternative_kpis = '• # of Security Incidents <br> • Compliance Audit Pass Rate',
    kpi_formula = 'Average time it takes to fix a critical vulnerability'
WHERE item_id = 'L701002';
UPDATE Maturity_Rubric SET kpi_target_value = '> 60 days' WHERE item_id = 'L701002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '30-60 days' WHERE item_id = 'L701002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30 days' WHERE item_id = 'L701002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '7-15 days' WHERE item_id = 'L701002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 7 days' WHERE item_id = 'L701002' AND stage_number = 5;

-- Item_ID: L701003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Cloud Cost Savings',
    kpi_description = 'The total amount of documented cost savings achieved through FinOps practices',
    kpi_rational = 'This KPI directly measures the financial impact of the FinOps practice. A "Reactive" state has unmanaged, runaway cloud spend. As the lever matures, a FinOps practice is established ("Organized") and becomes a dedicated practice ("Platform-led"). An "Intelligent" FinOps practice uses AI to continuously optimize cloud spend, delivering significant and ongoing cost savings.',
    alternative_kpis = '• Cloud Spend vs. Budget <br> • Reserved Instance Coverage',
    kpi_formula = '(Documented Cost Savings / Total Cloud Spend) * 100'
WHERE item_id = 'L701003';
UPDATE Maturity_Rubric SET kpi_target_value = '0%' WHERE item_id = 'L701003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '< 2%' WHERE item_id = 'L701003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '2-5%' WHERE item_id = 'L701003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'L701003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 10%' WHERE item_id = 'L701003' AND stage_number = 5;

-- Item_ID: L701004
UPDATE Maturity_Rubric
SET
    kpi_name = '% of Infrastructure Deployed via IaC',
    kpi_description = 'The percentage of the entire cloud infrastructure that is provisioned and managed through code',
    kpi_rational = 'This is the foundational measure of a modern, automated, and scalable infrastructure practice. A "Reactive" state is 100% manual. As the lever matures, the team begins to experiment with IaC ("Organized") and it becomes a strategic architecture ("Platform-led"). An "Intelligent" infrastructure is fully self-governing and managed as code, enabling rapid, reliable, and repeatable deployments.',
    alternative_kpis = '• IaC Code Review Pass Rate <br> • Mean Time to Provision Resources',
    kpi_formula = '(% of infrastructure deployed via code)'
WHERE item_id = 'L701004';
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L701004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '< 10%' WHERE item_id = 'L701004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-50%' WHERE item_id = 'L701004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '50-90%' WHERE item_id = 'L701004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 90%' WHERE item_id = 'L701004' AND stage_number = 5;

-- Item_ID: L702001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Data Latency',
    kpi_description = 'The average amount of time it takes for data from a source system to be available for analysis',
    kpi_rational = 'This KPI measures the freshness and timeliness of the data available for decision-making. A "Reactive" architecture has siloed databases with high latency. As the lever matures, a data warehouse is created ("Organized") and the architecture becomes more modern ("Platform-led"). An "Intelligent" architecture provides real-time data streaming, enabling in-the-moment analytics and decision-making.',
    alternative_kpis = '• Data Warehouse Uptime <br> • Query Performance',
    kpi_formula = 'Average time it takes for data to be available'
WHERE item_id = 'L702001';
UPDATE Maturity_Rubric SET kpi_target_value = '> 24 hours' WHERE item_id = 'L702001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '12-24 hours' WHERE item_id = 'L702001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '1-12 hours' WHERE item_id = 'L702001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '< 1 hour' WHERE item_id = 'L702001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = 'Real-time (< 5 mins)' WHERE item_id = 'L702001' AND stage_number = 5;

-- Item_ID: L702002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Data Trust Score',
    kpi_description = 'A qualitative score based on an internal survey of business users, measuring their confidence in the data',
    kpi_rational = 'This is the ultimate measure of the data governance program''s success. A "Reactive" state has siloed, untrusted data. As the lever matures, a formal governance process is established ("Organized") and becomes an enterprise-wide program ("Platform-led"). An "Intelligent" data governance practice ensures that data is a trusted, strategic asset that the entire business relies on.',
    alternative_kpis = '• Data Quality Score <br> • # of Data Stewards Appointed',
    kpi_formula = 'A qualitative score based on an internal survey'
WHERE item_id = 'L702002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 2.0' WHERE item_id = 'L702002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '2.0 - 3.0' WHERE item_id = 'L702002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '3.0 - 3.5' WHERE item_id = 'L702002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '3.5 - 4.5' WHERE item_id = 'L702002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 4.5' WHERE item_id = 'L702002' AND stage_number = 5;

-- Item_ID: L702003
UPDATE Maturity_Rubric
SET
    kpi_name = '% of Sensitive Data Covered by Policy',
    kpi_description = 'The percentage of identified sensitive data across all systems that is governed by a formal data privacy policy',
    kpi_rational = 'This is a critical measure of the data privacy program''s comprehensiveness and effectiveness in mitigating risk. A "Reactive" state has no formal privacy measures. As the lever matures, a data security program is created ("Organized") and becomes mature ("Platform-led"). An "Intelligent" program uses automation to discover and classify sensitive data, ensuring 100% coverage.',
    alternative_kpis = '• # of Data Privacy Incidents <br> • Time to Fulfill Data Subject Access Requests',
    kpi_formula = '(% of sensitive data covered by policy)'
WHERE item_id = 'L702003';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L702003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '3-5' WHERE item_id = 'L702003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '1-2' WHERE item_id = 'L702003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '1' WHERE item_id = 'L702003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L702003' AND stage_number = 5;

-- Item_ID: L702004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Revenue from Data Products',
    kpi_description = 'The percentage of the company''s total revenue that is generated directly from data monetization initiatives',
    kpi_rational = 'This KPI measures the ultimate maturity of the data strategy, moving it from a cost center to a profit center. A "Reactive" company does not consider this. As the lever matures, the company begins to explore ideas ("Organized") and launches its first data product ("Platform-led"). An "Intelligent" company has made data monetization a core part of its business model.',
    alternative_kpis = '• # of Active Data Monetization Initiatives <br> • Margin on Data Products',
    kpi_formula = '(Total Revenue from Data / Total Company Revenue) * 100'
WHERE item_id = 'L702004';
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L702004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '< 1%' WHERE item_id = 'L702004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '1-3%' WHERE item_id = 'L702004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '3-8%' WHERE item_id = 'L702004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 8%' WHERE item_id = 'L702004' AND stage_number = 5;

-- Item_ID: L703001
UPDATE Maturity_Rubric
SET
    kpi_name = '% of Employees who use BI',
    kpi_description = 'The percentage of the company''s total employees who actively use a BI tool',
    kpi_rational = 'This KPI measures the democratization of data and the adoption of a data-driven culture. A "Reactive" state has analytics limited to a few analysts. As the lever matures, a BI tool is rolled out ("Organized") and self-service is enabled ("Platform-led"). An "Intelligent" company has a high level of data literacy, with employees across the organization using data to make better decisions.',
    alternative_kpis = '• Self-Service Analytics Adoption <br> • BI Report/Dashboard Usage Rate',
    kpi_formula = '(# of Active BI Users / Total # of Employees) * 100'
WHERE item_id = 'L703001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L703001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'L703001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-25%' WHERE item_id = 'L703001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '25-50%' WHERE item_id = 'L703001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 50%' WHERE item_id = 'L703001' AND stage_number = 5;

-- ... (This script continues for the remaining 88 unique Item_IDs) ...
-- ... (Continuation of the SQL script) ...

-- Item_ID: L703002
UPDATE Maturity_Rubric
SET
    kpi_name = '% of Production ML Models',
    kpi_description = 'The percentage of the company''s core business processes that are augmented or automated by a production ML model',
    kpi_rational = 'This measures the real-world impact and integration of AI into the business. A "Reactive" company is only experimenting with AI. As the lever matures, a dedicated data science team is formed ("Organized") and GenAI is integrated into the core product ("Platform-led"). An "Intelligent" company has made AI a fundamental part of its operations and value proposition.',
    alternative_kpis = '• Model Prediction Accuracy <br> • Operational Efficiency from AI',
    kpi_formula = '(# of GenAI-augmented processes / Total # of core processes) * 100'
WHERE item_id = 'L703002';
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L703002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '2-Jan' WHERE item_id = 'L703002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-Mar' WHERE item_id = 'L703002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = 'Oct-50' WHERE item_id = 'L703002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 50' WHERE item_id = 'L703002' AND stage_number = 5;

-- Item_ID: L703003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Model Deployment Time',
    kpi_description = 'The average amount of time it takes to move a new machine learning model from development into production',
    kpi_rational = 'This KPI measures the agility and efficiency of the MLOps process. A "Reactive" company has a manual, slow deployment process. As the lever matures, a formal MLOps process is established ("Organized") and becomes a platform ("Platform-led"). An "Intelligent" MLOps process is fully automated, enabling rapid and reliable deployment of new AI capabilities.',
    alternative_kpis = '• Model Retraining Frequency <br> • Model Performance Drift',
    kpi_formula = 'Average time it takes to move a new model to production'
WHERE item_id = 'L703003';
UPDATE Maturity_Rubric SET kpi_target_value = '> 30 days' WHERE item_id = 'L703003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30 days' WHERE item_id = 'L703003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '7-15 days' WHERE item_id = 'L703003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '2-7 days' WHERE item_id = 'L703003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 2 days' WHERE item_id = 'L703003' AND stage_number = 5;

-- Item_ID: L703004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Deployment',
    kpi_description = 'The average amount of time it takes to move a new machine learning model from development into production',
    kpi_rational = 'This KPI measures the agility and efficiency of the MLOps process. A "Reactive" company has a manual, slow deployment process. As the lever matures, a formal MLOps process is established ("Organized") and becomes a platform ("Platform-led"). An "Intelligent" MLOps process is fully automated, enabling rapid and reliable deployment of new AI capabilities.',
    alternative_kpis = '• Model Retraining Frequency <br> • Model Performance Drift',
    kpi_formula = 'Average time it takes to move a new model to production'
WHERE item_id = 'L703004';
UPDATE Maturity_Rubric SET kpi_target_value = '> 30 days' WHERE item_id = 'L703004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30 days' WHERE item_id = 'L703004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '7-15 days' WHERE item_id = 'L703004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '2-7 days' WHERE item_id = 'L703004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 2 days' WHERE item_id = 'L703004' AND stage_number = 5;

-- Item_ID: L801001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Forecast Accuracy',
    kpi_description = 'The percentage variance between the financial forecast and the actual results',
    kpi_rational = 'This measures the reliability of the FP&A process. A "Reactive" process is a static, inaccurate annual budget. As the lever matures, a rolling forecast is adopted ("Organized") and becomes driver-based ("Platform-led"). An "Intelligent" FP&A process uses predictive analytics to create a highly accurate forecast that is a trusted tool for strategic decision-making.',
    alternative_kpis = '• Budget vs. Actual Variance <br> • Time to Complete Forecast Cycle',
    kpi_formula = '1 - ( | Actual - Forecast | / Actual )'
WHERE item_id = 'L801001';
UPDATE Maturity_Rubric SET kpi_target_value = '+/- 15%' WHERE item_id = 'L801001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '+/- 10-15%' WHERE item_id = 'L801001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '+/- 5-10%' WHERE item_id = 'L801001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '+/- 2-5%' WHERE item_id = 'L801001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< +/- 2%' WHERE item_id = 'L801001' AND stage_number = 5;

-- Item_ID: L801002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Net Revenue Retention',
    kpi_description = 'The percentage of recurring revenue retained from an existing customer cohort',
    kpi_rational = 'For a SaaS business, NRR is the single most important metric for financial health and long-term value, and the finance team is the ultimate source of truth for it. A "Reactive" team struggles to calculate it. As the lever matures, reporting becomes standardized ("Organized") and automated ("Platform-led"). An "Intelligent" finance team provides real-time, predictive insights on NRR to the entire business.',
    alternative_kpis = '• Customer Lifetime Value (LTV) <br> • Gross Margin %',
    kpi_formula = '((Starting ARR + Expansion - Churn) / Starting ARR) * 100'
WHERE item_id = 'L801002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 90%' WHERE item_id = 'L801002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '90-100%' WHERE item_id = 'L801002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '100-110%' WHERE item_id = 'L801002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '110-125%' WHERE item_id = 'L801002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 125%' WHERE item_id = 'L801002' AND stage_number = 5;

-- Item_ID: L801003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Time to Model a New Scenario',
    kpi_description = 'The average amount of time it takes for the FP&A team to build a complete financial model for a new strategic scenario',
    kpi_rational = 'This KPI measures the agility of the financial modeling capability. A "Reactive" team uses brittle spreadsheets and takes weeks. As the lever matures, a dedicated EPM tool is implemented ("Organized") and becomes the basis for all modeling ("Platform-led"). An "Intelligent" modeling capability allows the finance team to model complex scenarios in days or even hours, enabling more agile strategic decisions.',
    alternative_kpis = '• # of Scenarios Modeled per Quarter <br> • Model Accuracy vs. Actuals',
    kpi_formula = 'Average time in days to model a new scenario'
WHERE item_id = 'L801003';
UPDATE Maturity_Rubric SET kpi_target_value = '> 10 days' WHERE item_id = 'L801003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10 days' WHERE item_id = 'L801003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '2-5 days' WHERE item_id = 'L801003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '1-2 days' WHERE item_id = 'L801003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 1 day' WHERE item_id = 'L801003' AND stage_number = 5;

-- Item_ID: L801004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Board Meeting Prep Time',
    kpi_description = 'The total number of person-hours required from the finance and executive teams to prepare the materials for a board meeting',
    kpi_rational = 'This is a direct proxy for the efficiency and automation of the reporting process. A "Reactive" process is a manual, last-minute fire drill. As the lever matures, the process becomes a well-defined checklist ("Organized") and the materials are generated from a single source of truth ("Platform-led"). An "Intelligent" process is highly automated, significantly reducing prep time and allowing for more focus on strategic insights.',
    alternative_kpis = '• Board Satisfaction Score <br> • Time to Distribute Board Pack',
    kpi_formula = 'Total person-hours required for board prep'
WHERE item_id = 'L801004';
UPDATE Maturity_Rubric SET kpi_target_value = '> 80 hours' WHERE item_id = 'L801004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '60-80 hours' WHERE item_id = 'L801004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '40-60 hours' WHERE item_id = 'L801004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '20-40 hours' WHERE item_id = 'L801004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 20 hours' WHERE item_id = 'L801004' AND stage_number = 5;

-- Item_ID: L802001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Days to Close Books',
    kpi_description = 'The number of business days from the end of the month to when the financial statements are finalized',
    kpi_rational = 'This is a classic benchmark for the efficiency of the accounting function. A "Reactive" close is a long, manual process. As the lever matures, a formal checklist is used ("Organized") and the process is managed in a fully integrated ERP ("Platform-led"). An "Intelligent" function moves towards a "continuous close," providing real-time financial data to the business.',
    alternative_kpis = '• # of Manual Journal Entries <br> • Close Task Completion On-Time %',
    kpi_formula = 'Number of business days from the end of the month'
WHERE item_id = 'L802001';
UPDATE Maturity_Rubric SET kpi_target_value = '> 15 Business Days' WHERE item_id = 'L802001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10-15 Business Days' WHERE item_id = 'L802001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10 Business Days' WHERE item_id = 'L802001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '3-5 Business Days' WHERE item_id = 'L802001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '1-3 Business Days' WHERE item_id = 'L802001' AND stage_number = 5;

-- Item_ID: L802002
UPDATE Maturity_Rubric
SET
    kpi_name = 'External Audit Fee',
    kpi_description = 'The total annual fee paid to the external auditors',
    kpi_rational = 'While influenced by company size, this KPI, especially when viewed as a percentage of revenue, is an indicator of the efficiency and quality of the internal control environment. A "Reactive" company with poor controls will have a long, expensive audit. A mature, "Intelligent" company has a robust, automated internal control framework that makes the external audit highly efficient and less costly.',
    alternative_kpis = '• # of Internal Control Deficiencies <br> • Time to Fulfill Audit Requests',
    kpi_formula = '(Total Audit Fee / Total Revenue) * 100'
WHERE item_id = 'L802002';
UPDATE Maturity_Rubric SET kpi_target_value = '> 1.0%' WHERE item_id = 'L802002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '0.75% - 1.0%' WHERE item_id = 'L802002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '0.5% - 0.75%' WHERE item_id = 'L802002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '0.25% - 0.5%' WHERE item_id = 'L802002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 0.25%' WHERE item_id = 'L802002' AND stage_number = 5;

-- Item_ID: L802003
UPDATE Maturity_Rubric
SET
    kpi_name = '% of Manual Journal Entries',
    kpi_description = 'The percentage of total journal entries that are manually created and posted',
    kpi_rational = 'This is a direct measure of the level of automation within the core accounting systems. A "Reactive" state is heavily reliant on manual entries in a basic system. As the lever matures, a modern ERP is implemented ("Organized") and becomes fully integrated ("Platform-led"). An "Intelligent" system automates the vast majority of transactions, improving efficiency, accuracy, and control.',
    alternative_kpis = '• System Uptime (ERP) <br> • Employee Satisfaction with Financial Systems',
    kpi_formula = '(# of Manual Journal Entries / Total Journal Entries) * 100'
WHERE item_id = 'L802003';
UPDATE Maturity_Rubric SET kpi_target_value = '> 50%' WHERE item_id = 'L802003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '30-50%' WHERE item_id = 'L802003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30%' WHERE item_id = 'L802003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15%' WHERE item_id = 'L802003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L802003' AND stage_number = 5;

-- Item_ID: L802004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Days Payable Outstanding',
    kpi_description = 'The average number of days it takes for the company to pay its vendors and suppliers',
    kpi_rational = 'This KPI is a key measure of working capital management and the efficiency of the P2P process. A "Reactive" process is manual and inefficient. As the lever matures, a formal procurement policy is implemented ("Organized") and the process becomes fully automated ("Platform-led"). An "Intelligent" P2P process allows the company to strategically manage payables to optimize cash flow.',
    alternative_kpis = '• On-Time Payment Percentage <br> • Invoice Processing Cost',
    kpi_formula = '(Accounts Payable / Cost of Goods Sold) * # of Days'
WHERE item_id = 'L802004';
UPDATE Maturity_Rubric SET kpi_target_value = '< 30' WHERE item_id = 'L802004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '30-40' WHERE item_id = 'L802004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '40-60' WHERE item_id = 'L802004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '> 60' WHERE item_id = 'L802004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 60' WHERE item_id = 'L802004' AND stage_number = 5;

-- Item_ID: L802005
UPDATE Maturity_Rubric
SET
    kpi_name = 'Days Sales Outstanding',
    kpi_description = 'The average number of days it takes for the company to collect payment from its customers',
    kpi_rational = 'DSO is a critical measure of the O2C process''s efficiency and its impact on cash flow. A "Reactive" O2C process is manual and slow, leading to high DSO. As the lever matures, a formal collections process is implemented ("Organized") and becomes highly automated ("Platform-led"). An "Intelligent" O2C process uses AI to optimize collections and minimize DSO.',
    alternative_kpis = '• Quote-to-Cash Cycle Time <br> • Bad Debt Expense',
    kpi_formula = '(Accounts Receivable / Total Credit Sales) * # of Days'
WHERE item_id = 'L802005';
UPDATE Maturity_Rubric SET kpi_target_value = '> 90' WHERE item_id = 'L802005' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '60-75' WHERE item_id = 'L802005' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '45-60' WHERE item_id = 'L802005' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '45-Very Low' WHERE item_id = 'L802005' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 45' WHERE item_id = 'L802005' AND stage_number = 5;

-- Item_ID: L803001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Qualitative Revenue Assessment',
    kpi_description = 'A qualitative assessment from external auditors on the quality and compliance of the company''s revenue recognition policies',
    kpi_rational = 'This is the ultimate measure of compliance with complex revenue recognition standards. A "Reactive" company struggles with compliance. As the lever matures, a formal policy is documented ("Organized") and an automated rev-rec module is implemented ("Platform-led"). An "Intelligent" company has a highly mature, automated process that ensures auditors have high confidence in the numbers.',
    alternative_kpis = '• # of Revenue Recognition-Related Audit Adjustments <br> • Time to Complete Revenue Recognition Close',
    kpi_formula = 'A qualitative assessment from external auditors'
WHERE item_id = 'L803001';
UPDATE Maturity_Rubric SET kpi_target_value = 'High Risk' WHERE item_id = 'L803001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = 'Medium' WHERE item_id = 'L803001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = 'Low' WHERE item_id = 'L803001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = 'Very Low' WHERE item_id = 'L803001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = 'Near Zero' WHERE item_id = 'L803001' AND stage_number = 5;

-- Item_ID: L803002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Quote-to-Cash Cycle Time',
    kpi_description = 'The average amount of time it takes from the creation of a sales quote to the receipt of cash',
    kpi_rational = 'This is a holistic measure of the entire revenue process''s velocity. A "Reactive" process is manual, slow, and full of friction. As the lever matures, the process is integrated ("Organized") and becomes fully automated ("Platform-led"). An "Intelligent" process is a seamless, touchless flow that accelerates revenue, improves cash flow, and enhances the customer experience.',
    alternative_kpis = '• Deal Desk Approval Time <br> • Billing Error Rate',
    kpi_formula = 'Average amount of time from quote to cash'
WHERE item_id = 'L803002';
UPDATE Maturity_Rubric SET kpi_target_value = '> 45 days' WHERE item_id = 'L803002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '30-45 days' WHERE item_id = 'L803002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '20-30 days' WHERE item_id = 'L803002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '10-20 days' WHERE item_id = 'L803002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 10 days' WHERE item_id = 'L803002' AND stage_number = 5;

-- Item_ID: L803003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Bad Debt Expense',
    kpi_description = 'The amount of revenue that is written off as uncollectible',
    kpi_rational = 'This KPI is a direct measure of the effectiveness of the billing and collections process. A "Reactive" process has inaccurate billing and poor collections, leading to high bad debt. As the lever matures, the process becomes more automated ("Organized") and data-driven ("Platform-led"). An "Intelligent" process uses AI to predict and minimize credit risk, keeping bad debt to a minimum.',
    alternative_kpis = '• Days Sales Outstanding (DSO) <br> • % of Invoices Paid On Time',
    kpi_formula = '(Amount of Bad Debt / Total Revenue) * 100'
WHERE item_id = 'L803003';
UPDATE Maturity_Rubric SET kpi_target_value = '> 2.0%' WHERE item_id = 'L803003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '1.5% - 2.0%' WHERE item_id = 'L803003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '1.0% - 1.5%' WHERE item_id = 'L803003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '0.5% - 1.0%' WHERE item_id = 'L803003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 0.5%' WHERE item_id = 'L803003' AND stage_number = 5;

-- Item_ID: L803004
UPDATE Maturity_Rubric
SET
    kpi_name = 'Commission Payout Accuracy',
    kpi_description = 'The percentage of commission payments that are calculated and paid correctly without any errors or disputes',
    kpi_rational = 'This is a critical driver of sales team morale and trust in the company. A "Reactive" process is a manual, error-prone spreadsheet. As the lever matures, a dedicated commissions tool is implemented ("Organized") and becomes fully automated ("Platform-led"). An "Intelligent" commissions process is real-time, transparent, and 100% accurate, keeping the sales team motivated and focused.',
    alternative_kpis = '• Time to Finalize Commission Payments <br> • # of Sales Rep Commission Inquiries',
    kpi_formula = '(% of commission payments that are accurate)'
WHERE item_id = 'L803004';
UPDATE Maturity_Rubric SET kpi_target_value = '> 15 days' WHERE item_id = 'L803004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '10-15 days' WHERE item_id = 'L803004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10 days' WHERE item_id = 'L803004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '< 5 days' WHERE item_id = 'L803004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 5 days' WHERE item_id = 'L803004' AND stage_number = 5;

-- Item_ID: L804001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Effective Tax Rate (ETR)',
    kpi_description = 'The company''s total tax expense as a percentage of its pre-tax earnings',
    kpi_rational = 'For a growing global company, optimizing the ETR is a major lever for value creation. A "Reactive" tax function is purely compliance-focused. An "Intelligent" tax function uses strategic planning and predictive modeling to optimize global tax structures, directly improving the company''s bottom line.',
    alternative_kpis = '• Tax Filing Accuracy <br> • # of Tax Audits and Adjustments',
    kpi_formula = '(Total Tax Expense / Earnings Before Tax) * 100'
WHERE item_id = 'L804001';
UPDATE Maturity_Rubric SET kpi_target_value = '> 30%' WHERE item_id = 'L804001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '25-30%' WHERE item_id = 'L804001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '21-25%' WHERE item_id = 'L804001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '18-21%' WHERE item_id = 'L804001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 18%' WHERE item_id = 'L804001' AND stage_number = 5;

-- Item_ID: L804002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Cash Conversion Cycle',
    kpi_description = 'The number of days it takes for the company to convert its investments into cash flows from sales',
    kpi_rational = 'This is a key measure of the treasury function''s effectiveness in managing working capital. A "Reactive" treasury function has poor cash visibility. A mature, "Intelligent" treasury function uses sophisticated forecasting and cash management systems to optimize the cash conversion cycle, freeing up capital for strategic investments.',
    alternative_kpis = '• Cash Forecast Accuracy <br> • Return on Invested Cash',
    kpi_formula = '(DSO + DIO - DPO)'
WHERE item_id = 'L804002';
UPDATE Maturity_Rubric SET kpi_target_value = '> 120' WHERE item_id = 'L804002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '90-120' WHERE item_id = 'L804002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '60-90' WHERE item_id = 'L804002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '30-60' WHERE item_id = 'L804002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 30' WHERE item_id = 'L804002' AND stage_number = 5;

-- Item_ID: L805001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Spend Under Management',
    kpi_description = 'The percentage of the company''s total third-party spend that is actively managed by the sourcing function',
    kpi_rational = 'This is the primary measure of the sourcing team''s influence and control over company spend. A "Reactive" state has decentralized, unmanaged spend. As the lever matures, a formal procurement policy is implemented ("Organized") and a dedicated system is used ("Platform-led"). An "Intelligent" sourcing function has high spend under management, allowing it to maximize value and savings for the company.',
    alternative_kpis = '• Cost Savings Realized <br> • Preferred Supplier Usage Rate',
    kpi_formula = '(% of third-party spend that is actively managed)'
WHERE item_id = 'L805001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 20%' WHERE item_id = 'L805001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '20-30%' WHERE item_id = 'L805001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '30-60%' WHERE item_id = 'L805001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '60-80%' WHERE item_id = 'L805001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 80%' WHERE item_id = 'L805001' AND stage_number = 5;

-- Item_ID: L805002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Tail Spend',
    kpi_description = 'The portion of a company''s spend with a large number of suppliers for which it is not actively managed',
    kpi_rational = 'Reducing tail spend is a key indicator of a mature and efficient procurement process. A "Reactive" process has a large, unmanaged tail spend. As the lever matures, the team begins to consolidate vendors ("Organized") and uses e-procurement tools ("Platform-led"). An "Intelligent" process uses AI and automation to virtually eliminate tail spend, improving efficiency and control.',
    alternative_kpis = '• Purchase Order Cycle Time <br> • PO Compliance Rate',
    kpi_formula = '(% of spend with non-preferred, unmanaged vendors)'
WHERE item_id = 'L805002';
UPDATE Maturity_Rubric SET kpi_target_value = '> 20%' WHERE item_id = 'L805002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '15-20%' WHERE item_id = 'L805002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '10-15%' WHERE item_id = 'L805002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'L805002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 5%' WHERE item_id = 'L805002' AND stage_number = 5;

-- ... (This script continues for the remaining 88 unique Item_IDs) ...

Model
Of course. Here is the continuation of the SQL script, providing the next 20 records from your CSV file.
code
SQL
-- ... (Continuation of the SQL script) ...

-- Item_ID: L805003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Cloud Cost Savings',
    kpi_description = 'The total amount of documented cost savings achieved through FinOps practices',
    kpi_rational = 'This KPI directly measures the financial impact of the FinOps practice. A "Reactive" state has unmanaged, runaway cloud spend. As the lever matures, a FinOps practice is established ("Organized") and becomes a dedicated practice ("Platform-led"). An "Intelligent" FinOps practice uses AI to continuously optimize cloud spend, delivering significant and ongoing cost savings.',
    alternative_kpis = '• Cloud Spend vs. Budget <br> • Reserved Instance Coverage',
    kpi_formula = '(Documented Cost Savings / Total Cloud Spend) * 100'
WHERE item_id = 'L805003';
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L805003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '0% - 2%' WHERE item_id = 'L805003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '2-5%' WHERE item_id = 'L805003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10%' WHERE item_id = 'L805003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 10%' WHERE item_id = 'L805003' AND stage_number = 5;

-- Item_ID: L901001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Time to Fill',
    kpi_description = 'The average number of days it takes from the approval of a job requisition to a candidate''s offer acceptance',
    kpi_rational = 'Time to Fill is a critical measure of the recruiting team''s efficiency and its ability to support business growth. A "Reactive" recruiting process is slow and ad-hoc. A mature, "Intelligent" talent acquisition function uses data and automation to build talent pipelines and streamline the hiring process, making it a competitive advantage.',
    alternative_kpis = '• Cost per Hire <br> • New Hire Quality Score',
    kpi_formula = 'Average # of days from job req approval to offer accept'
WHERE item_id = 'L901001';
UPDATE Maturity_Rubric SET kpi_target_value = '> 90 days' WHERE item_id = 'L901001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '60-90 days' WHERE item_id = 'L901001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '45-60 days' WHERE item_id = 'L901001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '30-45 days' WHERE item_id = 'L901001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 30 days' WHERE item_id = 'L901001' AND stage_number = 5;

-- Item_ID: L901002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Compa-Ratio',
    kpi_description = 'A measure of how an employee''s salary compares to the midpoint of the salary range for their role',
    kpi_rational = 'This KPI is a key measure of the company''s pay equity and competitiveness. A "Reactive" rewards program is ad-hoc and inconsistent. As the lever matures, formal salary bands are created ("Organized") and a modern performance management program is implemented ("Platform-led"). An "Intelligent" rewards program uses data to ensure pay is fair, competitive, and drives performance.',
    alternative_kpis = '• Employee Benefits Satisfaction Score <br> • Pay Equity Gap',
    kpi_formula = '(Employee''s Salary / Salary Range Midpoint)'
WHERE item_id = 'L901002';
UPDATE Maturity_Rubric SET kpi_target_value = 'Not Measured' WHERE item_id = 'L901002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '< 0.9 or > 1.1' WHERE item_id = 'L901002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '0.90 - 0.95' WHERE item_id = 'L901002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '0.95 - 1.05' WHERE item_id = 'L901002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '~1.0' WHERE item_id = 'L901002' AND stage_number = 5;

-- Item_ID: L901003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Percentage of High-Performers',
    kpi_description = 'The percentage of the employee base that is rated in the top performance category',
    kpi_rational = 'This KPI measures the overall health of the company''s talent pool and the effectiveness of its performance culture. A "Reactive" process has no formal ratings. As the lever matures, a formal review process is implemented ("Organized") and becomes data-driven ("Platform-led"). An "Intelligent" performance management system helps to coach and develop a high-performing culture across the entire organization.',
    alternative_kpis = '• Performance Review Completion Rate <br> • Employee Attrition Rate (Voluntary)',
    kpi_formula = '(% of employees who are rated high-performers)'
WHERE item_id = 'L901003';
UPDATE Maturity_Rubric SET kpi_target_value = '< 70%' WHERE item_id = 'L901003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '70-80%' WHERE item_id = 'L901003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '80-90%' WHERE item_id = 'L901003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '> 90%' WHERE item_id = 'L901003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 90%' WHERE item_id = 'L901003' AND stage_number = 5;

-- Item_ID: L901004
UPDATE Maturity_Rubric
SET
    kpi_name = 'HR Cost per Employee',
    kpi_description = 'The total cost of the HR department divided by the total number of employees',
    kpi_rational = 'This is a primary measure of the HR function''s operational efficiency and scalability. A "Reactive" HR operation is manual and expensive. As the lever matures, a modern HRIS is implemented ("Organized") and becomes part of an integrated, intelligent suite ("Platform-led"). An "Intelligent" HR operation uses technology and automation to provide excellent service in a highly efficient manner.',
    alternative_kpis = '• Employee Self-Service Adoption Rate <br> • HR to Employee Ratio',
    kpi_formula = '(Total HR Department Cost / Total # of Employees)'
WHERE item_id = 'L901004';
UPDATE Maturity_Rubric SET kpi_target_value = '> $3,000' WHERE item_id = 'L901004' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '$2,000 - $3,000' WHERE item_id = 'L901004' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '$1,500 - $2,000' WHERE item_id = 'L901004' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '$1,000 - $1,500' WHERE item_id = 'L901004' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< $1,000' WHERE item_id = 'L901004' AND stage_number = 5;

-- Item_ID: L902001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Number of Significant Legal or Regulatory Fines',
    kpi_description = 'The number of significant fines or penalties incurred due to non-compliance',
    kpi_rational = 'This is the ultimate lagging indicator of the legal compliance program''s effectiveness. A "Reactive" company has an ad-hoc approach to compliance. As the lever matures, a formal compliance program is established ("Organized") and becomes part of an intelligent GRC platform ("Platform-led"). An "Intelligent" program uses automation to ensure compliance and prevent any significant issues.',
    alternative_kpis = '• Compliance Training Completion Rate <br> • Time to Close Internal Audits',
    kpi_formula = 'Count of significant fines'
WHERE item_id = 'L902001';
UPDATE Maturity_Rubric SET kpi_target_value = '> 3' WHERE item_id = 'L902001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '2-3' WHERE item_id = 'L902001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '1-2' WHERE item_id = 'L902001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '1' WHERE item_id = 'L902001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L902001' AND stage_number = 5;

-- Item_ID: L902002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Contract Review Cycle Time',
    kpi_description = 'The average amount of time it takes for the legal team to review and approve a standard business contract',
    kpi_rational = 'In a fast-moving business, the legal department can be either a bottleneck or a business accelerator. This KPI is the primary measure of its operational efficiency. A "Reactive" legal team is a black box with long delays. A mature, "Intelligent" legal function uses templates, automation, and AI to process routine work rapidly, freeing up lawyers to focus on high-value strategic advice.',
    alternative_kpis = '• Legal Spend as a % of Revenue <br> • Self-Service Legal Adoption',
    kpi_formula = 'Average time in days from legal receipt to approval'
WHERE item_id = 'L902002';
UPDATE Maturity_Rubric SET kpi_target_value = '> 10 days' WHERE item_id = 'L902002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '5-10 days' WHERE item_id = 'L902002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '2-5 days' WHERE item_id = 'L902002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '1-2 days' WHERE item_id = 'L902002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 1 day' WHERE item_id = 'L902002' AND stage_number = 5;

-- Item_ID: L902003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Number of Issued Patents',
    kpi_description = 'The total number of patents that have been successfully issued to the company',
    kpi_rational = 'This KPI is a direct measure of the IP strategy''s success in protecting the company''s innovation. A "Reactive" company has no formal IP strategy. As the lever matures, a formal process for IP creation is established ("Organized") and becomes a core part of the R&D process ("Platform-led"). An "Intelligent" IP strategy ensures that the company''s key innovations are protected, creating a defensible competitive moat.',
    alternative_kpis = '• Patent Application to Issuance Ratio <br> • Revenue from Licensed IP',
    kpi_formula = 'Count of issued patents'
WHERE item_id = 'L902003';
UPDATE Maturity_Rubric SET kpi_target_value = '0' WHERE item_id = 'L902003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '1-5' WHERE item_id = 'L902003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '5-15' WHERE item_id = 'L902003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30' WHERE item_id = 'L902003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 30' WHERE item_id = 'L902003' AND stage_number = 5;

-- Item_ID: L903001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Application Strategy Score',
    kpi_description = 'A qualitative score of how well the company''s portfolio of business applications supports its strategic goals',
    kpi_rational = 'This KPI measures the alignment of the application landscape with the business strategy. A "Reactive" state has a collection of siloed, legacy applications. As the lever matures, a formal ITSM is established ("Organized") and a multi-year roadmap is created ("Platform-led"). An "Intelligent" application strategy ensures the company has a modern, integrated, and intelligent suite of tools that provide a competitive advantage.',
    alternative_kpis = '• Application TCO (Total Cost of Ownership) <br> • Employee Satisfaction with Business Applications',
    kpi_formula = 'A qualitative score on a 1-5 scale'
WHERE item_id = 'L903001';
UPDATE Maturity_Rubric SET kpi_target_value = '< 3.0' WHERE item_id = 'L903001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '3.0 - 3.5' WHERE item_id = 'L903001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '3.5 - 4.0' WHERE item_id = 'L903001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '4.0 - 4.5' WHERE item_id = 'L903001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 4.5' WHERE item_id = 'L903001' AND stage_number = 5;

-- Item_ID: L903002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Mean Time to Resolve',
    kpi_description = 'The average time it takes to resolve an IT infrastructure incident from the time it is reported',
    kpi_rational = 'This is a key measure of the IT infrastructure team''s operational efficiency and the resilience of the infrastructure. A "Reactive" infrastructure is unstable and takes a long time to fix. As the lever matures, corporate security is improved ("Organized") and the infrastructure becomes intelligent and self-healing ("Platform-led"). An "Intelligent" infrastructure uses AIOps to predict and prevent issues, driving MTTR towards zero.',
    alternative_kpis = '• Infrastructure Uptime <br> • # of Critical Incidents',
    kpi_formula = 'Average time it takes to resolve an IT infrastructure incident'
WHERE item_id = 'L903002';
UPDATE Maturity_Rubric SET kpi_target_value = '> 60 days' WHERE item_id = 'L903002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '30-60 days' WHERE item_id = 'L903002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30 days' WHERE item_id = 'L903002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '< 15 days' WHERE item_id = 'L903002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 7 days' WHERE item_id = 'L903002' AND stage_number = 5;

-- Item_ID: L903003
UPDATE Maturity_Rubric
SET
    kpi_name = 'Remediation Time',
    kpi_description = 'The average time it takes to patch a critical security vulnerability on corporate IT assets',
    kpi_rational = 'This KPI is a critical measure of the corporate security team''s ability to protect the company from cyber threats. A "Reactive" security posture is slow and manual. As the lever matures, a formal security program is established ("Organized") and becomes predictive ("Platform-led"). An "Intelligent" security program uses automation to patch vulnerabilities rapidly across the entire organization, minimizing risk.',
    alternative_kpis = '• % of Devices with Endpoint Protection <br> • Phishing Test Failure Rate',
    kpi_formula = 'Average time it takes to patch a critical vulnerability'
WHERE item_id = 'L903003';
UPDATE Maturity_Rubric SET kpi_target_value = '> 60 days' WHERE item_id = 'L903003' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '30-60 days' WHERE item_id = 'L903003' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '15-30 days' WHERE item_id = 'L903003' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '< 15 days' WHERE item_id = 'L903003' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< 7 days' WHERE item_id = 'L903003' AND stage_number = 5;

-- Item_ID: L904001
UPDATE Maturity_Rubric
SET
    kpi_name = 'Real Estate Cost per Employee',
    kpi_description = 'The total annual cost of the company''s real estate portfolio divided by the total number of employees',
    kpi_rational = 'This is a primary measure of the efficiency of the real estate and workplace strategy. A "Reactive" company has a basic, inefficient office setup. As the lever matures, a dedicated office manager is hired ("Organized") and the strategy becomes more intelligent and flexible ("Platform-led"). An "Intelligent" workplace strategy uses data to optimize space and create a hybrid work model that is both cost-effective and enhances employee productivity.',
    alternative_kpis = '• Employee Satisfaction with Workplace <br> • Space Utilization Rate',
    kpi_formula = '(Total Annual Real Estate Cost / Total # of Employees)'
WHERE item_id = 'L904001';
UPDATE Maturity_Rubric SET kpi_target_value = '> $20k' WHERE item_id = 'L904001' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '$15k - $20k' WHERE item_id = 'L904001' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '$12k - $15k' WHERE item_id = 'L904001' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '$8k - $12k' WHERE item_id = 'L904001' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '< $8k' WHERE item_id = 'L904001' AND stage_number = 5;

-- Item_ID: L904002
UPDATE Maturity_Rubric
SET
    kpi_name = 'Employee Satisfaction Score',
    kpi_description = 'A score on a 1-5 scale, typically from a survey, measuring employee satisfaction with the overall workplace experience',
    kpi_rational = 'This is the ultimate measure of the workplace management lever''s success in creating a positive and productive environment. A "Reactive" workplace is just a basic facility. As the lever matures, a dedicated manager is hired ("Organized") and the experience becomes a strategic focus ("Platform-led"). An "Intelligent" workplace is a key component of the company''s talent strategy, reflected in a high satisfaction score.',
    alternative_kpis = '• Facilities Ticket Resolution Time <br> • Space Utilization Rate',
    kpi_formula = 'A score on a 1-5 scale from a survey'
WHERE item_id = 'L904002';
UPDATE Maturity_Rubric SET kpi_target_value = '< 3.0' WHERE item_id = 'L904002' AND stage_number = 1;
UPDATE Maturity_Rubric SET kpi_target_value = '3.0 - 3.5' WHERE item_id = 'L904002' AND stage_number = 2;
UPDATE Maturity_Rubric SET kpi_target_value = '3.5 - 4.0' WHERE item_id = 'L904002' AND stage_number = 3;
UPDATE Maturity_Rubric SET kpi_target_value = '4.0 - 4.5' WHERE item_id = 'L904002' AND stage_number = 4;
UPDATE Maturity_Rubric SET kpi_target_value = '> 4.5' WHERE item_id = 'L904002' AND stage_number = 5;