BEGIN;

-- Forcefully drop the foreign key constraint from the assessment_scores table.
-- This constraint incorrectly forces all scores to be for levers only.
ALTER TABLE assessment_scores 
DROP CONSTRAINT IF EXISTS "assessment_scores_lever_id_fkey";

-- Forcefully drop the corresponding constraint from the committed_scores table.
ALTER TABLE committed_scores 
DROP CONSTRAINT IF EXISTS "committed_scores_lever_id_fkey";

COMMIT;