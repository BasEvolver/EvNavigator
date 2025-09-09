-- =================================================================
-- STEP 1: SAFELY ADD THE NEW SUMMARY COLUMN IF IT DOESN'T EXIST
-- =================================================================
ALTER TABLE assessments
ADD COLUMN IF NOT EXISTS aria_assessment_summary TEXT;


-- =================================================================
-- STEP 2: SAFELY RESET AND DEFINE THE SCOPE FOR OUR TARGET ASSESSMENTS
-- =================================================================
-- This is a targeted delete. It only affects the scope for the two assessments
-- we are about to define, leaving all others untouched.
DELETE FROM assessment_scope WHERE assessment_id IN (2, 5);

-- Define the scope for TechFlow Diligence (assessment_id = 2)
INSERT INTO assessment_scope (assessment_id, item_id, is_in_scope)
SELECT 2, item_id, true FROM (
    SELECT discipline_id AS item_id FROM disciplines UNION ALL
    SELECT capability_id AS item_id FROM capabilities UNION ALL
    SELECT lever_id AS item_id FROM levers
) AS all_items;
UPDATE assessment_scope SET is_in_scope = false WHERE assessment_id = 2 AND item_id IN (
    'C102', 'C103', 'C104', 'C105', 'C106', 'C203', 'C204', 'C301', 'C303', 'C304', 'C401', 'C402', 'C403', 'C504', 'C505', 'C601', 'C602', 'C603', 'C604', 
    'C701', 'C703', 'C804', 'C805', 'C901', 'C902', 'C903', 'C904'
);

-- Define the scope for CloudVantage Check-in (assessment_id = 5)
INSERT INTO assessment_scope (assessment_id, item_id, is_in_scope)
SELECT 5, item_id, true FROM (
    SELECT discipline_id AS item_id FROM disciplines UNION ALL
    SELECT capability_id AS item_id FROM capabilities UNION ALL
    SELECT lever_id AS item_id FROM levers
) AS all_items;
UPDATE assessment_scope SET is_in_scope = false WHERE assessment_id = 5 AND item_id IN (
    'C105', 'C106', 'C401', 'C402', 'C801', 'C802', 'C804', 'C805'
);


-- =================================================================
-- STEP 3: SAFELY ADD THE COMPREHENSIVE ARIA SCORES
-- =================================================================
-- This is the most important step. We ONLY delete previous ARIA scores
-- for the two assessments we are working on. All your existing scores
-- from 'Adrian Croft', 'Evelyn Reed', etc., will be completely untouched.
DELETE FROM assessment_scores WHERE source_id = 'ARIA' AND assessment_id IN (2, 5);

-- Use INSERT ... ON CONFLICT (UPSERT) to safely add or update ARIA's scores.
-- This is the safest way to add data without causing errors or duplicates.
INSERT INTO assessment_scores (assessment_id, item_id, source_id, as_is_score, to_be_score, as_is_rationale, to_be_rationale, as_is_confidence_score, item_type) VALUES
    -- TechFlow (assessment_id = 2)
    (2, 'D1', 'ARIA', 1.5, 4.2, 'Product function is reactive. Strategy is disconnected from market reality, evidenced by failed launches and an overstated TAM.', 'A To-Be score of 4.2 is aggressive but achievable by implementing a data-driven discovery process.', 90, 'discipline'),
    (2, 'C101', 'ARIA', 1.4, 4.5, 'The strategic plan is not credible and is based on flawed market assumptions.', 'The goal is to build a strategy based on validated customer needs.', 95, 'capability'),
    (2, 'L101002', 'ARIA', 1.3, 4.5, 'Analysis of market data (DDI-004) and failed product launches (DDI-073) confirms a disconnect between the plan and market reality.', 'A best-in-class planning process is required to inform a credible strategy.', 98, 'lever'),
    (2, 'D2', 'ARIA', 1.7, 4.0, 'The sales motion is entirely founder-led, unscalable, and inefficient.', 'The goal is to build a repeatable, scalable sales process.', 85, 'discipline'),
    (2, 'C202', 'ARIA', 1.6, 4.0, 'CRM data (DDI-050) shows a 95-day sales cycle and a low 15% win rate.', 'Implementing a formal sales methodology is critical.', 92, 'capability'),
    (2, 'D3', 'ARIA', 2.1, 4.5, 'Marketing lacks a data-driven approach to demand generation, resulting in inefficient spend.', 'The goal is to build a predictable pipeline engine by investing in marketing operations and analytics.', 80, 'discipline'),
    (2, 'D5', 'ARIA', 2.8, 4.2, 'The core technology is decent, but significant technical debt and slow processes will hinder innovation.', 'A formal plan to address technical debt and automate deployments is required.', 88, 'discipline'),
    (2, 'L502003', 'ARIA', 3.4, 4.0, 'Static code analysis (DDI-081) identifies a 38% technical debt ratio.', 'This needs to be reduced to below 20% within 18 months.', 95, 'lever'),
    (2, 'D8', 'ARIA', 1.2, 4.8, 'Financial reporting contains material misstatements regarding recurring revenue, posing a significant valuation risk.', 'Achieving an auditable financial reporting function is a non-negotiable requirement.', 99, 'discipline'),
    (2, 'L803001', 'ARIA', 1.1, 5.0, 'Automated contract analysis (DDI-026) confirms non-compliant revenue recognition in 22% of cases.', 'This must be remediated to Stage 5 (fully compliant) immediately post-close.', 100, 'lever'),

    -- CloudVantage (assessment_id = 5)
    (5, 'D1', 'ARIA', 4.0, 4.8, 'Product Management is a high-performing discipline, but the AI feature delay highlights a weakness in managing cross-functional dependencies.', 'The goal is to implement a more rigorous dependency tracking process.', 90, 'discipline'),
    (5, 'C101', 'ARIA', 4.1, 4.8, 'The overall product strategy is strong and aligned with market needs.', 'The target is to maintain this strength while improving execution.', 88, 'capability'),
    (5, 'D2', 'ARIA', 3.8, 4.5, 'Sales is a tale of two regions. Strong NA performance is masking a leadership and execution issue in EMEA.', 'The target is to bring EMEA performance in line with the rest of the world.', 95, 'discipline'),
    (5, 'C203', 'ARIA', 4.6, 5.0, 'CRM data confirms a 15% multi-product attachment rate in the NewCo cohort, driving a 128% NRR.', 'Maintaining this best-in-class performance is the top priority.', 98, 'capability'),
    (5, 'L201002', 'ARIA', 2.7, 4.0, 'Workday HR data confirms the EMEA VP Sales role has been vacant for 92 days, correlating with a 15% drop in regional pipeline creation.', 'Filling this role is the key lever to fix the regional performance.', 99, 'lever'),
    (5, 'D5', 'ARIA', 3.9, 4.6, 'The engineering team is strong, but the AI feature delay reveals a bottleneck in data engineering.', 'The goal is to augment the data team to support both integration and new feature development.', 93, 'discipline'),
    (5, 'L503002', 'ARIA', 3.5, 4.8, 'Jira data shows deployment frequency is stable at weekly, but lead time for changes has increased by 10% QoQ, indicating growing friction.', 'Achieving on-demand deployment is a key strategic goal for FY2025.', 95, 'lever'),
    (5, 'D7', 'ARIA', 2.4, 4.5, 'The Data & Analytics discipline is currently the primary bottleneck for the company''s strategic initiatives.', 'The To-Be state requires a fully integrated data model.', 95, 'discipline'),
    (5, 'L702001', 'ARIA', 2.4, 4.5, 'Jira velocity for the data engineering team has decreased by 30%. This is the root cause of the AI feature delay.', 'Unblocking this team is the most critical action item for the quarter.', 98, 'lever'),
    (5, 'D9', 'ARIA', 3.5, 4.5, 'The organization is strong, but the key leadership gap in EMEA Sales is a strategic risk.', 'Hiring a new VP for EMEA is the top priority for the People function.', 92, 'discipline')
ON CONFLICT (assessment_id, item_id, source_id) DO UPDATE SET 
    as_is_score = EXCLUDED.as_is_score,
    to_be_score = EXCLUDED.to_be_score,
    as_is_rationale = EXCLUDED.as_is_rationale,
    to_be_rationale = EXCLUDED.to_be_rationale,
    as_is_confidence_score = EXCLUDED.as_is_confidence_score,
    item_type = EXCLUDED.item_type;


-- =================================================================
-- STEP 4: SAFELY UPDATE THE ARIA_ASSESSMENT_SUMMARY COLUMN
-- =================================================================
-- This is a safe UPDATE operation that only affects the new column.
-- Note: Single quotes within the text are escaped by doubling them (e.g., 'company''s').
UPDATE assessments SET aria_assessment_summary = '
<p><strong><u>Situation Summary:</u></strong> Based on an initial review of the management-provided CIM, TechFlow presents as a strong investment candidate with a reported $12M in ARR and a loyal customer base. The product appears solid in its niche.</p>
<p><strong><u>Key Findings:</u></strong> The strategic plan relies on aggressive, unvalidated assumptions about market growth and product expansion. The quality of the reported ARR is questionable and requires deep investigation.</p>
<p><strong><u>Recommended Actions:</u></strong>
<ul>
  <li>Validate the true quality of recurring revenue.</li>
  <li>Pressure-test the 5-year forecast against historical performance.</li>
  <li>Assess the scalability of the founder-led sales model.</li>
</ul>
</p>'
WHERE assessment_id = 1;

UPDATE assessments SET aria_assessment_summary = '
<p><strong><u>Situation Summary:</u></strong> The comprehensive due diligence has uncovered <strong>three critical risks</strong> that materially impact the investment thesis and require significant post-close intervention.</p>
<p><strong><u>Key Findings:</u></strong> A detailed Quality of Earnings analysis reveals that only 59% of reported ARR is true recurring revenue, requiring a valuation adjustment of $40M-$50M. Furthermore, the last three major product launches have failed to generate any revenue, questioning the company''s ability to innovate. Finally, the core technology is built on a legacy monolith with significant technical debt that will require an estimated $4.5M to remediate.</p>
<p><strong><u>Recommended Actions:</u></strong>
<ul>
  <li>Re-price the deal to account for the adjusted ARR and required remediation costs.</li>
  <li>Develop a 100-day plan focused on overhauling the product strategy process.</li>
  <li>Make the renewal of the Global FinCorp contract a condition of closing.</li>
</ul>
</p>'
WHERE assessment_id = 2;

UPDATE assessments SET aria_assessment_summary = '
<p><strong><u>Situation Summary:</u></strong> This baseline assessment at the time of investment shows a company with strong product-market fit but immature operational processes that are not built to scale.</p>
<p><strong><u>Key Findings:</u></strong> Major weaknesses were identified in the sales function, which was highly informal and founder-led, and the finance function, which relied on manual spreadsheets for all reporting and forecasting. The customer success function was entirely reactive.</p>
<p><strong><u>Recommended Actions:</u></strong>
<ul>
  <li>Implement a formal, documented sales methodology (e.g., MEDDIC).</li>
  <li>Deploy a modern ERP system to create a single source of truth for financials.</li>
  <li>Build a proactive Customer Success playbook focused on NRR.</li>
</ul>
</p>'
WHERE assessment_id = 3;

UPDATE assessments SET aria_assessment_summary = '
<p><strong><u>Situation Summary:</u></strong> One year post-investment, CloudVantage has made significant progress against the initial value creation plan, successfully maturing its core GTM and financial operations.</p>
<p><strong><u>Key Findings:</u></strong> The successful rollout of the MEDDIC sales methodology and the implementation of the new ERP system are complete. NRR is healthy, and the close cycle has been reduced from 15 days to 6. The company is now positioned to accelerate growth.</p>
<p><strong><u>Recommended Actions:</u></strong>
<ul>
  <li>Execute the strategic acquisition of NewCo to enter an adjacent market.</li>
  <li>Increase R&D velocity by improving the CI/CD pipeline from weekly to daily deployments.</li>
  <li>Invest in a data analytics platform to support the upcoming AI feature launch.</li>
</ul>
</p>'
WHERE assessment_id = 4;

UPDATE assessments SET aria_assessment_summary = '
<p><strong><u>Situation Summary:</u></strong> The business is performing exceptionally well, with NRR at 128% significantly outperforming the annual plan. The primary driver is the successful NewCo integration and cross-sell playbook.</p>
<p><strong><u>Key Findings:</u></strong> This success is creating a new challenge: the integration of NewCo''s legacy data models is behind schedule, which has now become the primary blocker for the critical AI-Powered Feature Launch. This is the most significant risk to the Q4 forecast.</p>
<p><strong><u>Recommended Actions:</u></strong>
<ul>
  <li>Allocate dedicated engineering resources to unblock the data integration project.</li>
  <li>Hire a new VP of Sales for EMEA to address regional underperformance.</li>
  <li>Develop a risk mitigation plan for the AI feature launch, including a de-scoped MVP option.</li>
</ul>
</p>'
WHERE assessment_id = 5;