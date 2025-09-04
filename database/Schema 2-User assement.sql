-- =================================================================
-- SEED SCRIPT V5 (SCHEMA-COMPLIANT & FULL RATIONALE)
-- =================================================================

BEGIN;

-- Use correct lowercase, unquoted table names
TRUNCATE TABLE committed_scores, assessment_scores, assessments RESTART IDENTITY CASCADE;

-- =================================================================
-- 1. TECHFLOW SOLUTIONS
-- =================================================================

INSERT INTO assessments (portfolio_company_id, version_name, created_at) VALUES
('techflow-solutions', 'Pre-LOI Assessment', NOW() - interval '4 weeks'),
('techflow-solutions', 'Due Diligence Findings', NOW() - interval '1 day');

-- ASSESSMENT 1: Pre-LOI (High-level, direct Discipline scores)
INSERT INTO assessment_scores (assessment_id, item_id, item_type, source_id, as_is_score, to_be_score, as_is_rationale, as_is_confidence_score, as_is_confidence_rationale) VALUES
    (1, 'D3', 'discipline', 'Adrian Croft', 3.0, 4.5, 'Based on CIM, finance function appears robust.', NULL, NULL),
    (1, 'D1', 'discipline', 'Adrian Croft', 2.5, 4.0, 'Product seems solid, but roadmap is unclear.', NULL, NULL),
    (1, 'D3', 'discipline', 'ARIA', 2.8, 4.5, 'CIM financials are strong, but key SaaS metrics are missing.', 75, 'Confidence is moderate; based only on management-provided CIM.');

-- ASSESSMENT 2: Due Diligence (More granular scores at Capability/Lever level)
INSERT INTO assessment_scores (assessment_id, item_id, item_type, source_id, as_is_score, to_be_score, as_is_rationale, as_is_confidence_score, as_is_confidence_rationale) VALUES
    (2, 'C301', 'capability', 'Adrian Croft', 1.5, 5.0, 'Financial Reporting is weak; non-standard ARR composition discovered.', NULL, NULL),
    (2, 'L-311', 'lever', 'Adrian Croft', 1.4, 5.0, 'Revenue recognition policies are aggressive and a critical risk.', NULL, NULL),
    (2, 'C101', 'capability', 'Adrian Croft', 1.4, 4.5, 'Product Strategy is flawed, evidenced by failed launches.', NULL, NULL),
    (2, 'L-111', 'lever', 'Adrian Croft', 1.2, 4.8, 'The strategic plan is not credible and disconnected from market reality.', NULL, NULL),
    (2, 'C301', 'capability', 'ARIA', 1.6, 5.0, 'Analysis of raw financial data confirms systemic issues in revenue recognition.', 95, 'Confidence is high based on direct analysis of DDI-026 and DDI-039.');

-- =================================================================
-- 2. CLOUDVANTAGE
-- =================================================================

INSERT INTO assessments (portfolio_company_id, version_name, created_at, committed_at) VALUES
('cloudvantage', 'Q4 2022 Baseline', '2022-11-15 10:00:00', '2022-11-22 10:00:00'),
('cloudvantage', 'Q4 2023 Annual Review', '2023-11-20 10:00:00', '2023-11-27 10:00:00');
INSERT INTO assessments (portfolio_company_id, version_name, created_at) VALUES
('cloudvantage', 'Q2 2025 Interim Check-in', NOW() - interval '2 weeks');

-- ASSESSMENT 3: Baseline (Scores set at Capability level)
INSERT INTO assessment_scores (assessment_id, item_id, item_type, source_id, as_is_score, to_be_score, as_is_rationale) VALUES
    (3, 'C201', 'capability', 'Evelyn Reed', 3.0, 4.5, 'Sales process is effective but informal.'),
    (3, 'C301', 'capability', 'Evelyn Reed', 2.8, 4.5, 'Finance relies on spreadsheets for forecasting.');

-- ASSESSMENT 4: Annual Review (Scores show improvement at Capability level)
INSERT INTO assessment_scores (assessment_id, item_id, item_type, source_id, as_is_score, to_be_score, as_is_rationale) VALUES
    (4, 'C201', 'capability', 'Evelyn Reed', 4.2, 4.8, 'MEDDIC rollout complete, driving strong NRR.'),
    (4, 'C301', 'capability', 'Evelyn Reed', 3.8, 4.5, 'ERP is live, close cycle is down to 6 days.');

-- ASSESSMENT 5: Interim Check-in (New challenges emerge, scored at LEVER level)
INSERT INTO assessment_scores (assessment_id, item_id, item_type, source_id, as_is_score, to_be_score, as_is_rationale, as_is_confidence_score, as_is_confidence_rationale) VALUES
    (5, 'C402', 'capability', 'Evelyn Reed', 3.8, 5.0, 'Overall innovation is strong, but specific new initiatives are lagging.', NULL, NULL),
    (5, 'L-423', 'lever', 'Evelyn Reed', 3.2, 5.0, 'The team is struggling with integrating NewCo''s legacy data models, delaying the AI feature launch.', NULL, NULL),
    (5, 'L-423', 'lever', 'ARIA', 3.1, 5.0, 'The AI feature is at risk due to data model friction.', 98, 'Confidence is 98% based on Jira velocity reports and engineering meeting transcripts.');

-- Step 2.3: Populate the committed_scores table with CORRECT column names
INSERT INTO committed_scores (assessment_id, item_id, item_type, committed_as_is_score, committed_to_be_score, final_rationale, committed_at) VALUES
    (3, 'C201', 'capability', 3.0, 4.5, 'Consensus: The GTM function is effective but informal. Target requires implementing a formal sales methodology.', '2022-11-22 10:00:00'),
    (3, 'C301', 'capability', 2.8, 4.5, 'Consensus: The finance function is a key risk due to manual processes. Target requires investment in new systems.', '2022-11-22 10:00:00'),
    (4, 'C201', 'capability', 4.2, 4.8, 'Consensus: VCP execution has been strong. The GTM function has matured significantly. New target focuses on optimization.', '2023-11-27 10:00:00'),
    (4, 'C301', 'capability', 3.8, 4.5, 'Consensus: Excellent progress. New systems are in place. Target remains relevant as we focus on leveraging them for BI.', '2023-11-27 10:00:00');

COMMIT;