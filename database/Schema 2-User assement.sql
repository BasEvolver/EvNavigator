-- =================================================================
-- MIGRATION SCRIPT 001
-- Replaces the old User_Assessments table with the new, versioned schema.
-- =================================================================

-- Step 1: Drop the old table if it exists.
DROP TABLE IF EXISTS User_Assessments CASCADE;

-- Step 2: Create the new tables.

-- Table to define a named assessment version (e.g., "Q3 2025 Baseline")
CREATE TABLE Assessments (
    assessment_id SERIAL PRIMARY KEY,
    portfolio_company_id VARCHAR(255) NOT NULL, -- e.g., 'techflow-solutions'
    version_name VARCHAR(255) NOT NULL,
    version_description TEXT,
    is_committed BOOLEAN DEFAULT FALSE, -- Flag to show if this is the official, agreed-upon version
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table to store individual scores from multiple sources (users and ARIA) for a given assessment version
CREATE TABLE Assessment_Scores (
    score_id SERIAL PRIMARY KEY,
    assessment_id INTEGER NOT NULL REFERENCES Assessments(assessment_id) ON DELETE CASCADE,
    lever_id VARCHAR(10) NOT NULL REFERENCES Levers(lever_id) ON DELETE CASCADE,
    source_id VARCHAR(255) NOT NULL, -- Can be a user_id (e.g., 'bas@evolver.ai') or 'ARIA'
    
    as_is_score REAL,
    as_is_rationale TEXT,
    as_is_confidence_score REAL,
    as_is_confidence_rationale TEXT,

    to_be_score REAL,
    to_be_rationale TEXT,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    UNIQUE (assessment_id, lever_id, source_id)
);

-- Table to store the final, "committed" scores for an assessment version after team consensus
CREATE TABLE Committed_Scores (
    committed_score_id SERIAL PRIMARY KEY,
    assessment_id INTEGER NOT NULL REFERENCES Assessments(assessment_id) ON DELETE CASCADE,
    lever_id VARCHAR(10) NOT NULL REFERENCES Levers(lever_id) ON DELETE CASCADE,
    
    committed_as_is_score REAL NOT NULL,
    committed_to_be_score REAL NOT NULL,
    
    final_rationale TEXT,
    
    committed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    UNIQUE (assessment_id, lever_id)
);

-- Add indexes for faster lookups
CREATE INDEX idx_assessments_company_id ON Assessments (portfolio_company_id);
CREATE INDEX idx_assessment_scores_assessment_id ON Assessment_Scores (assessment_id);
CREATE INDEX idx_committed_scores_assessment_id ON Committed_Scores (assessment_id);