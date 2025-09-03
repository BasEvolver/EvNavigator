-- Drop tables if they exist to ensure a clean start (optional, but good for development)
DROP TABLE IF EXISTS User_Assessments, Transformation_Roadmap, Maturity_Rubric, Levers, Capabilities, Disciplines CASCADE;

-- Table for Disciplines (D1, D2, etc.)
CREATE TABLE Disciplines (
    discipline_id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    short_description TEXT,
    long_description TEXT,
    control_question TEXT,
    benefits_statement TEXT
);

-- Table for Capabilities (C101, C201, etc.)
CREATE TABLE Capabilities (
    capability_id VARCHAR(10) PRIMARY KEY,
    discipline_id VARCHAR(10) NOT NULL REFERENCES Disciplines(discipline_id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    short_description TEXT,
    long_description TEXT,
    control_question TEXT,
    benefits_statement TEXT
);

-- Table for Levers (L101001, L201001, etc.)
CREATE TABLE Levers (
    lever_id VARCHAR(10) PRIMARY KEY,
    capability_id VARCHAR(10) NOT NULL REFERENCES Capabilities(capability_id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    short_description TEXT,
    long_description TEXT
);

-- Table for the Maturity Rubric (The 5 stages for each lever)
CREATE TABLE Maturity_Rubric (
    rubric_id SERIAL PRIMARY KEY, -- Auto-incrementing integer for a unique ID
    lever_id VARCHAR(10) NOT NULL REFERENCES Levers(lever_id) ON DELETE CASCADE,
    stage_number SMALLINT NOT NULL,
    description TEXT NOT NULL,
    kpi_name VARCHAR(255),
    kpi_description TEXT,
    kpi_formula VARCHAR(255),
    kpi_target_value VARCHAR(100)
);

-- Table for the Transformation Roadmap (The "how-to" guide)
CREATE TABLE Transformation_Roadmap (
    roadmap_id SERIAL PRIMARY KEY,
    lever_id VARCHAR(10) NOT NULL REFERENCES Levers(lever_id) ON DELETE CASCADE,
    from_stage SMALLINT NOT NULL,
    to_stage SMALLINT NOT NULL,
    key_initiatives TEXT NOT NULL,
    what_to_skip TEXT
);

-- Table to store user assessments (This is for your application's functionality)
CREATE TABLE User_Assessments (
    assessment_id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL, -- This would link to your user table
    lever_id VARCHAR(10) NOT NULL REFERENCES Levers(lever_id) ON DELETE CASCADE,
    current_stage REAL, -- Use REAL to store decimal values like 1.4
    target_stage REAL,  -- Use REAL to store decimal values like 4.1
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);