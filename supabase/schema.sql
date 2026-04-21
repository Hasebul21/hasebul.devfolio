-- ============================================================
-- Portfolio Database Schema
-- Compatible with Supabase (PostgreSQL 15+)
-- ============================================================

-- Enable UUID extension (optional, using BIGSERIAL here)
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─────────────────────────────────────────
-- PROJECTS
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS projects (
    id               BIGSERIAL PRIMARY KEY,
    title            VARCHAR(200) NOT NULL,
    description      VARCHAR(500) NOT NULL,
    long_description TEXT,
    github_url       VARCHAR(500),
    live_url         VARCHAR(500),
    image_url        VARCHAR(500),
    featured         BOOLEAN NOT NULL DEFAULT FALSE,
    category         VARCHAR(100) NOT NULL,
    created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_projects_featured    ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_category    ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_created_at  ON projects(created_at DESC);

-- Tech stack as a separate table (many-to-one)
CREATE TABLE IF NOT EXISTS project_tech_stack (
    project_id BIGINT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    tech       VARCHAR(100) NOT NULL,
    PRIMARY KEY (project_id, tech)
);

CREATE INDEX IF NOT EXISTS idx_project_tech ON project_tech_stack(tech);

-- ─────────────────────────────────────────
-- EXPERIENCE
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS experience (
    id            BIGSERIAL PRIMARY KEY,
    company       VARCHAR(200) NOT NULL,
    role          VARCHAR(200) NOT NULL,
    start_date    VARCHAR(20)  NOT NULL,
    end_date      VARCHAR(20),
    current       BOOLEAN NOT NULL DEFAULT FALSE,
    location      VARCHAR(200) NOT NULL,
    description   TEXT NOT NULL,
    company_url   VARCHAR(500),
    logo_url      VARCHAR(500),
    type          VARCHAR(50) NOT NULL CHECK (type IN ('full-time','part-time','internship','contract','freelance')),
    display_order INT NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_experience_order ON experience(display_order);

CREATE TABLE IF NOT EXISTS experience_highlights (
    experience_id BIGINT NOT NULL REFERENCES experience(id) ON DELETE CASCADE,
    highlight     TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS experience_tech_stack (
    experience_id BIGINT NOT NULL REFERENCES experience(id) ON DELETE CASCADE,
    tech          VARCHAR(100) NOT NULL,
    PRIMARY KEY (experience_id, tech)
);

-- ─────────────────────────────────────────
-- SKILLS
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS skills (
    id                  BIGSERIAL PRIMARY KEY,
    name                VARCHAR(100) NOT NULL,
    category            VARCHAR(100) NOT NULL
                            CHECK (category IN ('languages','frameworks','tools','databases','cloud','ai-ml','other')),
    proficiency         SMALLINT NOT NULL CHECK (proficiency BETWEEN 1 AND 100),
    icon_url            VARCHAR(500),
    years_of_experience SMALLINT,
    display_order       INT NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category);

-- ─────────────────────────────────────────
-- CONTACTS
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contacts (
    id           BIGSERIAL PRIMARY KEY,
    name         VARCHAR(200) NOT NULL,
    email        VARCHAR(320) NOT NULL,
    subject      VARCHAR(300) NOT NULL,
    message      TEXT NOT NULL,
    read         BOOLEAN NOT NULL DEFAULT FALSE,
    submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contacts_read         ON contacts(read);
CREATE INDEX IF NOT EXISTS idx_contacts_submitted_at ON contacts(submitted_at DESC);

-- ─────────────────────────────────────────
-- ROW LEVEL SECURITY (Supabase)
-- ─────────────────────────────────────────
ALTER TABLE projects               ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_tech_stack     ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience             ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience_highlights  ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience_tech_stack  ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills                 ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts               ENABLE ROW LEVEL SECURITY;

-- Public read access for portfolio data (no authentication needed)
CREATE POLICY "Public read projects"
    ON projects FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Public read project_tech_stack"
    ON project_tech_stack FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Public read experience"
    ON experience FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Public read experience_highlights"
    ON experience_highlights FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Public read experience_tech_stack"
    ON experience_tech_stack FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Public read skills"
    ON skills FOR SELECT TO anon, authenticated USING (true);

-- Contact: only insert allowed publicly (no read from anon)
CREATE POLICY "Public insert contacts"
    ON contacts FOR INSERT TO anon, authenticated WITH CHECK (true);
