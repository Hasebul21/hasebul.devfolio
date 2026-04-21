# Hasebul Hassan — Personal Portfolio

A production-grade full-stack personal portfolio built with **Angular 17+**, **Spring Boot 3**, and **Supabase (PostgreSQL)**.

## Project Structure

```
personal-portfolio/
├── frontend/          # Angular 17+ SPA (Vercel deployment)
├── backend/           # Spring Boot 3 REST API
├── supabase/          # Database schema & seed SQL
├── *.pdf              # Resume PDFs
└── README.md
```

---

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | Angular 17+, Tailwind CSS, RxJS     |
| Backend   | Spring Boot 3, Java 21, Spring JPA  |
| Database  | Supabase (PostgreSQL 15+)           |
| Deployment| Vercel (frontend), Docker (backend) |

---

## Quick Start

### Prerequisites

- Node.js 18+ and npm 9+
- Java 21+
- Maven 3.9+ (or use the Maven wrapper)
- A [Supabase](https://supabase.com) project (free tier works)

---

## 1. Database Setup (Supabase)

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run `supabase/schema.sql`
3. Then run `supabase/seed.sql` to populate sample data
4. Copy your **Project URL** and **DB password** from **Settings → Database**

Your connection string will look like:
```
jdbc:postgresql://db.xxxxxxxxxxxx.supabase.co:5432/postgres
```

---

## 2. Backend (Spring Boot)

### Configure environment

```bash
cd backend
cp .env.example .env
```

Edit `.env`:
```env
SUPABASE_DB_URL=jdbc:postgresql://db.xxxx.supabase.co:5432/postgres
SUPABASE_DB_USER=postgres
SUPABASE_DB_PASSWORD=your-password
CORS_ORIGINS=http://localhost:4200,https://your-portfolio.vercel.app
```

### Run locally

```bash
cd backend

# With Maven
mvn spring-boot:run

# Or build JAR and run
mvn clean package -DskipTests
java -jar target/portfolio-backend-1.0.0.jar
```

API will be available at `http://localhost:8080`.

### API Endpoints

| Method | Endpoint                    | Description                    |
|--------|-----------------------------|--------------------------------|
| GET    | /api/projects               | All projects (filter by tech/category) |
| GET    | /api/projects/featured      | Featured projects only         |
| GET    | /api/projects/tech-tags     | All unique tech tags           |
| GET    | /api/projects/{id}          | Single project                 |
| GET    | /api/experience             | All work experience            |
| GET    | /api/experience/{id}        | Single experience              |
| GET    | /api/skills                 | All skills (filter by category)|
| POST   | /api/contact                | Submit contact form            |

**Query parameter examples:**
```
GET /api/projects?tech=Angular
GET /api/projects?category=Backend
GET /api/skills?category=frameworks
```

### Docker

```bash
cd backend
docker build -t portfolio-backend .
docker run -p 8080:8080 \
  -e SUPABASE_DB_URL=jdbc:postgresql://... \
  -e SUPABASE_DB_USER=postgres \
  -e SUPABASE_DB_PASSWORD=secret \
  -e CORS_ORIGINS=https://your-portfolio.vercel.app \
  portfolio-backend
```

---

## 3. Frontend (Angular)

### Configure environment

Edit `frontend/src/environments/environment.ts` (for local dev):
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  githubUsername: 'your-github-username',
  linkedinUrl: 'https://linkedin.com/in/your-profile',
  githubUrl: 'https://github.com/your-username',
};
```

For production, update `environment.prod.ts` with your deployed API URL.

### Run locally

```bash
cd frontend
npm install
npm start
```

App runs at `http://localhost:4200`.

### Build for production

```bash
cd frontend
npm run build
# Output: dist/frontend/browser/
```

---

## 4. Deployment

### Frontend → Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your repo, set **Root Directory** to `frontend`
4. Set **Build Command**: `npm run build`
5. Set **Output Directory**: `dist/frontend/browser`
6. Add environment variable:
   - `NG_APP_API_URL` = `https://your-backend.railway.app/api`
7. Deploy!

The `vercel.json` in `frontend/` handles SPA routing rewrites automatically.

### Backend → Railway / Render / Fly.io

**Railway (recommended):**
```bash
# Install Railway CLI
npm install -g @railway/cli
railway login
cd backend
railway up
```

Set environment variables in Railway dashboard:
- `SUPABASE_DB_URL`
- `SUPABASE_DB_USER`
- `SUPABASE_DB_PASSWORD`
- `CORS_ORIGINS`

**Or use Docker on any VPS:**
```bash
docker pull your-registry/portfolio-backend
docker run -d -p 8080:8080 --env-file .env portfolio-backend
```

---

## 5. Customization Guide

### Update personal info

1. **Name, title, bio**: `frontend/src/app/features/hero/hero.component.html`
2. **About text**: `frontend/src/app/features/about/about.component.html`
3. **Social links**: Search for `hasebul` across the frontend and replace with your username
4. **Resume PDF**: Replace `frontend/src/assets/resume/resume.pdf`

### Update static data (no backend required)

All feature components fall back to static data when the API is unavailable:
- `frontend/src/app/core/services/projects.service.ts` — `STATIC_PROJECTS`
- `frontend/src/app/core/services/skills.service.ts` — `STATIC_SKILL_GROUPS`
- `frontend/src/app/core/services/experience.service.ts` — `STATIC_EXPERIENCES` / `STATIC_EDUCATION`

Simply edit these arrays to customize your content without a backend.

---

## 6. Project Architecture

### Frontend (Angular 17+)

```
src/app/
├── core/
│   ├── models/       # TypeScript interfaces
│   ├── services/     # API + static data services
│   └── interceptors/ # HTTP error interceptor
├── shared/
│   └── components/   # Navbar, Footer, Skeleton, SectionHeader
├── features/
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── projects/     # With dynamic filtering
│   ├── experience/   # Timeline layout
│   ├── education/
│   ├── resume/       # PDF viewer + download
│   └── contact/      # Reactive form + validation
└── app.ts            # Root component
```

### Backend (Spring Boot 3)

```
src/main/java/com/portfolio/
├── config/       # CORS configuration
├── controller/   # REST endpoints
├── dto/          # Data Transfer Objects
├── model/        # JPA entities
├── repository/   # Spring Data JPA repos
├── service/      # Business logic
└── exception/    # Global error handler
```

---

## 7. Features

- **Dark / Light mode** — persisted in localStorage, respects OS preference
- **Responsive** — mobile-first design with Tailwind CSS
- **Dynamic project filtering** — filter by tech stack tag
- **Resume viewer** — inline PDF + download button
- **Loading skeletons** — smooth loading states
- **SEO** — meta tags, Open Graph, Twitter Card, JSON-LD structured data
- **Smooth scrolling** — navbar links scroll to sections
- **Contact form** — validated with Angular Reactive Forms, submitted to Spring Boot API
- **Sticky navbar** — changes style on scroll

---

## License

MIT License — feel free to use this as a template for your own portfolio!
# hasebul.devfolio
