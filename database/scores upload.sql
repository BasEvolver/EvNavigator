-- =================================================================
-- STEP 1: CLEAR EXISTING ASSESSMENT DATA FOR A CLEAN START
-- =================================================================
DELETE FROM committed_scores;
DELETE FROM assessment_scope;
DELETE FROM assessment_scores;
DELETE FROM assessments;


-- =================================================================
-- STEP 2: RE-INSERT THE MASTER ASSESSMENT RECORDS & ADD SUMMARY COLUMN
-- =================================================================
INSERT INTO assessments (assessment_id, portfolio_company_id, version_name, is_committed, created_at, committed_at) VALUES
(1, 'techflow-solutions', 'Pre-LOI Assessment', false, '2025-08-06 19:31:51.320539+00', NULL),
(2, 'techflow-solutions', 'Due Diligence Findings', false, '2025-09-02 19:31:51.320539+00', NULL),
(3, 'cloudvantage', 'Q4 2022 Baseline', true, '2022-11-15 10:00:00+00', '2022-11-22 10:00:00+00'),
(4, 'cloudvantage', 'Q4 2023 Annual Review', true, '2023-11-20 10:00:00+00', '2023-11-27 10:00:00+00'),
(5, 'cloudvantage', 'Q2 2025 Interim Check-in', false, '2025-08-20 19:31:51.320539+00', NULL);

ALTER TABLE assessments ADD COLUMN IF NOT EXISTS aria_assessment_summary TEXT;


-- =================================================================
-- STEP 3: POPULATE THE ASSESSMENT_SCOPE TABLE
-- =================================================================

-- First, populate the scope for ALL assessments with everything IN-SCOPE by default.
INSERT INTO assessment_scope (assessment_id, item_id, is_in_scope)
SELECT a.assessment_id, i.item_id, true
FROM assessments a,
     (SELECT discipline_id AS item_id FROM disciplines
      UNION ALL
      SELECT capability_id AS item_id FROM capabilities
      UNION ALL
      SELECT lever_id AS item_id FROM levers) AS i;

-- For TechFlow Diligence (assessment_id = 2), turn OFF non-deal-critical capabilities.
-- All Disciplines remain IN-SCOPE at the highest level.
UPDATE assessment_scope SET is_in_scope = false WHERE assessment_id = 2 AND item_id IN (
    'C103', 'C203', 'C401', 'C402', 'C403', 'C601', 'C602', 'C603', 'C604', 
    'C901', 'C902', 'C903', 'C802', 'C803'
);

-- For CloudVantage Check-in (assessment_id = 5), ALL DISCIPLINES ARE IN-SCOPE.
-- We only turn off a few non-priority capabilities.
UPDATE assessment_scope SET is_in_scope = false WHERE assessment_id = 5 AND item_id IN (
    'C401', 'C402', -- M&A is not a current focus
    'C801', 'C802', 'C803' -- GRC is considered stable
);


-- =================================================================
-- STEP 4: POPULATE THE ASSESSMENT_SCORES TABLE (COMPREHENSIVE)
-- =================================================================

-- Scores for TechFlow (assessment_id = 2)
INSERT INTO assessment_scores (assessment_id, item_id, source_id, as_is_score, to_be_score, as_is_rationale, item_type) VALUES
    -- Discipline Scores
    (2, 'D1', 'Adrian Croft', 1.6, 4.2, 'Product strategy is weak and discovery is ad-hoc. This is a major risk to future growth.', 'discipline'),
    (2, 'D2', 'Adrian Croft', 1.7, 4.0, 'Sales is entirely founder-led. There is no scalable process, which severely limits growth potential.', 'discipline'),
    (2, 'D3', 'Adrian Croft', 1.3, 4.8, 'Critical issues in financial reporting and forecasting. The numbers are not reliable.', 'discipline'),
    (2, 'D4', 'Adrian Croft', 1.0, 3.0, 'No formal partner strategy exists. This is an untapped but long-term opportunity.', 'discipline'),
    (2, 'D5', 'Adrian Croft', 2.8, 4.2, 'The core technology is decent, but significant technical debt and slow processes will hinder innovation.', 'discipline'),
    (2, 'D6', 'Adrian Croft', 2.0, 3.5, 'Customer support appears functional but lacks proactive success management.', 'discipline'),
    (2, 'D7', 'Adrian Croft', 1.5, 4.0, 'Data is siloed and analytics capabilities are rudimentary. No data-driven decision culture.', 'discipline'),
    (2, 'D8', 'Adrian Croft', 1.8, 3.5, 'Basic governance is in place, but formal risk management is non-existent.', 'discipline'),
    (2, 'D9', 'Adrian Croft', 2.2, 3.0, 'Culture seems positive but there are no formal HR processes for scaling the team.', 'discipline'),
    -- Detailed Lever/Capability Scores
    (2, 'L1011', 'Adrian Croft', 1.2, 4.5, 'Market analysis in the CIM is superficial.', 'lever'),
    (2, 'L3011', 'Adrian Croft', 1.0, 5.0, 'CRITICAL FINDING: Revenue recognition practices are not aligned with ASC 606.', 'lever'),
    (2, 'L5021', 'Adrian Croft', 3.5, 4.0, 'Technology stack is modern, but carries significant technical debt.', 'lever'),
    (2, 'C202', 'Adrian Croft', 1.5, 4.0, 'Sales team lacks experience in scalable, repeatable GTM motions.', 'capability'),
    (2, 'L3011', 'ARIA', 1.1, 5.0, 'Automated contract analysis (DDI-026) confirms non-compliant revenue recognition in 22% of cases.', 'lever');

-- Scores for CloudVantage (assessment_id = 5)
INSERT INTO assessment_scores (assessment_id, item_id, source_id, as_is_score, to_be_score, as_is_rationale, item_type) VALUES
    -- Discipline Scores
    (5, 'D1', 'Evelyn Reed', 4.0, 4.8, 'Product strategy is strong, but the AI feature delay highlights a need for better dependency management on the roadmap.', 'discipline'),
    (5, 'D2', 'Evelyn Reed', 3.8, 4.5, 'Overall sales performance is strong, but the EMEA leadership gap is a significant concern that is impacting regional targets.', 'discipline'),
    (5, 'D3', 'Evelyn Reed', 4.2, 4.8, 'Finance is a well-oiled machine post-ERP implementation. Best-in-class.', 'discipline'),
    (5, 'D4', 'Evelyn Reed', 3.0, 3.0, 'No active M&A, so this is not a priority. We are in execution mode.', 'discipline'),
    (5, 'D5', 'Evelyn Reed', 3.9, 4.5, 'Platform is stable and deployments are frequent, but the AI feature delay shows we have resource bottlenecks in specialized areas.', 'discipline'),
    (5, 'D6', 'Evelyn Reed', 4.4, 4.8, 'Customer retention is excellent, and the team is managing the increased ticket volume from NewCo well.', 'discipline'),
    (5, 'D7', 'Evelyn Reed', 2.5, 4.5, 'This is our biggest risk. The NewCo data integration must be unblocked to secure our strategic roadmap.', 'discipline'),
    (5, 'D8', 'Evelyn Reed', 3.5, 3.5, 'GRC processes are stable and not a current focus area.', 'discipline'),
    (5, 'D9', 'Evelyn Reed', 3.5, 4.5, 'We need to urgently fill the EMEA VP Sales role. This is a top priority for HR.', 'discipline'),
    -- Detailed Lever/Capability Scores
    (5, 'C203', 'Evelyn Reed', 4.5, 5.0, 'NRR is world-class at 128%, a direct result of the NewCo cross-sell playbook.', 'capability'),
    (5, 'L2012', 'Connor Hayes', 2.8, 4.0, 'EMEA sales performance is lagging at 75% of quota. We have a leadership gap.', 'lever'),
    (5, 'L7021', 'Evelyn Reed', 2.5, 4.5, 'The NewCo data integration is the single biggest risk to our strategic plan.', 'lever'),
    (5, 'L7021', 'ARIA', 2.4, 4.5, 'Jira velocity for the data engineering team has decreased by 30%. This is the root cause of the AI feature delay.', 'lever');


-- =================================================================
-- STEP 5: POPULATE THE COMMITTED_SCORES TABLE
-- =================================================================
INSERT INTO committed_scores (assessment_id, item_id, item_type, committed_as_is_score, committed_to_be_score, final_rationale) VALUES
    (4, 'D1', 'discipline', 3.5, 4.2, 'Consensus: Product team is strong, but roadmap needs better alignment with GTM.'),
    (4, 'D2', 'discipline', 3.8, 4.5, 'Consensus: Sales operations are strong, but forecasting still relies too heavily on manual inputs.'),
    (4, 'D3', 'discipline', 3.8, 4.5, 'Consensus: The new ERP is live, which has significantly improved the close process.'),
    (4, 'L5031', 'lever', 3.0, 4.0, 'Consensus: CI/CD pipeline is stable, but deployment frequency needs to increase.');


-- =================================================================
-- STEP 6: POPULATE THE ARIA_ASSESSMENT_SUMMARY COLUMN
-- =================================================================
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