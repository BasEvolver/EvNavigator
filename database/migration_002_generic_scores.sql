BEGIN;

-- Add the 'committed_at' column to the 'assessments' table.
-- This column is used to distinguish between a regular save and a final, locked-in version.
-- "IF NOT EXISTS" makes the script safe to run multiple times.
ALTER TABLE assessments 
ADD COLUMN IF NOT EXISTS committed_at TIMESTAMPTZ NULL;

COMMIT;