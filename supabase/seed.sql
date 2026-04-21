-- ============================================================
-- Seed Data for Portfolio Database
-- Run after schema.sql
-- ============================================================

-- ─────────────────────────────────────────
-- PROJECTS
-- ─────────────────────────────────────────
INSERT INTO projects (title, description, long_description, github_url, live_url, featured, category) VALUES
(
  'AI-Enhanced Prediction of Respiratory Irritation From Biomass Combustion Byproducts',
  'IEEE-published research proposing an integrative machine learning framework to predict respiratory irritation caused by biomass combustion byproducts, supporting sustainable bioenergy systems.',
  'An Integrative Machine Learning Framework for Sustainable Bioenergy Systems — published in IEEE conference proceedings (DOI: 10.1109/ICAICT65506.2025.11437157).',
  NULL,
  'https://ieeexplore.ieee.org/document/11437157',
  TRUE, 'Research'
),
(
  'AI-Powered Study Assistant',
  'An intelligent study companion that leverages NLP to generate summaries, quizzes, and study plans from uploaded documents.',
  'Built with FastAPI and OpenAI API, this tool processes PDF/DOCX documents and generates targeted flashcards, summaries, and quizzes using GPT-4. Features a React frontend with real-time streaming responses.',
  'https://github.com/hasebul/ai-study-assistant',
  'https://ai-study-assistant.vercel.app',
  TRUE, 'AI/ML'
),
(
  'Smart Home Automation System',
  'IoT platform for controlling home devices using MQTT protocol with real-time dashboard and mobile app.',
  'A full-stack IoT solution using Raspberry Pi, MQTT broker (Mosquitto), Spring Boot backend, Angular dashboard, and a Flutter mobile app. Supports scheduling, automation rules, and energy monitoring.',
  'https://github.com/hasebul/smart-home',
  NULL,
  TRUE, 'IoT'
),
(
  'E-Commerce Microservices Platform',
  'Scalable e-commerce backend built with microservices architecture, including product, order, and payment services.',
  'Microservices communicating via Kafka event bus. Services: API Gateway (Spring Cloud), Product Service, Order Service, Payment Service (Stripe integration), Notification Service. Deployed with Docker Compose.',
  'https://github.com/hasebul/ecommerce-microservices',
  NULL,
  TRUE, 'Backend'
),
(
  'Real-Time Chat Application',
  'Full-stack chat application with WebSocket support, rooms, direct messaging, and file sharing.',
  NULL,
  'https://github.com/hasebul/realtime-chat',
  'https://realtime-chat.vercel.app',
  FALSE, 'Full Stack'
),
(
  'Network Packet Analyzer',
  'CLI tool for capturing and analyzing network packets with protocol breakdown and anomaly detection.',
  NULL,
  'https://github.com/hasebul/packet-analyzer',
  NULL,
  FALSE, 'Networking'
),
(
  'Personal Finance Tracker',
  'Cross-platform mobile app for tracking income, expenses, and investments with beautiful charts.',
  NULL,
  'https://github.com/hasebul/finance-tracker',
  NULL,
  FALSE, 'Mobile'
);

-- Tech stacks
INSERT INTO project_tech_stack (project_id, tech) VALUES
(1,'Machine Learning'),(1,'Python'),(1,'scikit-learn'),(1,'AI'),(1,'Healthcare'),
(2,'Python'),(2,'FastAPI'),(2,'OpenAI API'),(2,'React'),(2,'PostgreSQL'),
(2,'Spring Boot'),(2,'Angular'),(2,'MQTT'),(2,'Raspberry Pi'),(2,'MySQL'),
(3,'Spring Boot'),(3,'Docker'),(3,'Kafka'),(3,'Redis'),(3,'PostgreSQL'),(3,'Angular'),
(4,'Node.js'),(4,'Socket.IO'),(4,'React'),(4,'MongoDB'),(4,'Redis'),
(5,'Python'),(5,'Scapy'),(5,'Pandas'),(5,'Matplotlib'),
(6,'Flutter'),(6,'Dart'),(6,'Firebase'),(6,'Riverpod');

-- ─────────────────────────────────────────
-- EXPERIENCE
-- ─────────────────────────────────────────
INSERT INTO experience (company, role, start_date, end_date, current, location, description, company_url, type, display_order) VALUES
(
  'Tech Innovations Ltd.', 'Software Engineer Intern',
  '2024-06', '2024-12', FALSE,
  'Dhaka, Bangladesh',
  'Developed RESTful APIs and contributed to microservices architecture for a SaaS platform serving 10,000+ users.',
  'https://techinnovations.com', 'internship', 1
),
(
  'Freelance', 'Full Stack Developer',
  '2023-01', NULL, TRUE,
  'Remote',
  'Delivering custom web solutions for clients across education, e-commerce, and healthcare domains.',
  NULL, 'freelance', 2
);

-- Highlights
INSERT INTO experience_highlights (experience_id, highlight) VALUES
(1, 'Built 15+ REST endpoints with Spring Boot, reducing response time by 40%'),
(1, 'Implemented CI/CD pipeline using GitHub Actions and Docker'),
(1, 'Collaborated with frontend team to design scalable API contracts'),
(1, 'Wrote unit and integration tests achieving 85% code coverage'),
(2, 'Delivered 8+ projects on time and within budget'),
(2, 'Built a school management system used by 500+ students'),
(2, 'Integrated payment gateways (SSLCommerz, Stripe) for 3 clients'),
(2, 'Maintained long-term client relationships with 5-star reviews');

-- Tech stacks
INSERT INTO experience_tech_stack (experience_id, tech) VALUES
(1,'Spring Boot'),(1,'Angular'),(1,'Docker'),(1,'PostgreSQL'),(1,'Redis'),
(2,'React'),(2,'Next.js'),(2,'Node.js'),(2,'MySQL'),(2,'Tailwind CSS');

-- ─────────────────────────────────────────
-- SKILLS
-- ─────────────────────────────────────────
INSERT INTO skills (name, category, proficiency, years_of_experience, display_order) VALUES
-- Languages
('Java',       'languages', 90, 3, 1),
('Python',     'languages', 85, 3, 2),
('TypeScript', 'languages', 85, 2, 3),
('JavaScript', 'languages', 88, 3, 4),
('C/C++',      'languages', 75, 3, 5),
('SQL',        'languages', 82, 3, 6),
('Dart',       'languages', 65, 1, 7),
-- Frameworks
('Spring Boot',  'frameworks', 88, 2, 1),
('Angular',      'frameworks', 85, 2, 2),
('React',        'frameworks', 80, 2, 3),
('Next.js',      'frameworks', 75, 1, 4),
('FastAPI',      'frameworks', 78, 2, 5),
('Flutter',      'frameworks', 65, 1, 6),
('Tailwind CSS', 'frameworks', 90, 2, 7),
-- Tools
('Git & GitHub', 'tools', 90, 3, 1),
('Docker',       'tools', 78, 2, 2),
('Linux',        'tools', 82, 3, 3),
('VS Code',      'tools', 95, 3, 4),
('Postman',      'tools', 88, 2, 5),
('Figma',        'tools', 65, 1, 6),
-- Databases
('PostgreSQL', 'databases', 85, 2, 1),
('MySQL',      'databases', 82, 2, 2),
('MongoDB',    'databases', 75, 2, 3),
('Redis',      'databases', 70, 1, 4),
('Supabase',   'databases', 80, 1, 5),
-- AI/ML
('TensorFlow',   'ai-ml', 70, 1, 1),
('scikit-learn', 'ai-ml', 75, 2, 2),
('LangChain',    'ai-ml', 65, 1, 3),
('OpenAI API',   'ai-ml', 80, 1, 4);
