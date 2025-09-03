-- This adds a temporary column to the old table
-- ALTER TABLE User_Assessments ADD COLUMN temp_col_for_backup TEXT;

-- This immediately removes it
ALTER TABLE User_Assessments DROP COLUMN temp_col_for_backup;