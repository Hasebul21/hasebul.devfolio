import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { Project, ProjectFilter } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService extends ApiService {

  getProjects(filter?: ProjectFilter): Observable<Project[]> {
    const params: Record<string, string> = {};
    if (filter?.tech) params['tech'] = filter.tech;
    if (filter?.category) params['category'] = filter.category;
    return this.get<Project[]>('/projects', params);
  }

  getProject(id: number): Observable<Project> {
    return this.get<Project>(`/projects/${id}`);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return this.get<Project[]>('/projects/featured');
  }

  getTechTags(): Observable<string[]> {
    return this.get<string[]>('/projects/tech-tags');
  }

  getStaticProjects(): Observable<Project[]> {
    return of(STATIC_PROJECTS);
  }
}

const STATIC_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'QuickChat — Real-Time Chat Application',
    description: 'Real-time chat platform featuring WebSocket-based messaging, Redis caching for performance, and Elasticsearch-powered message search.',
    techStack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Docker'],
    githubUrl: 'https://github.com/Hasebul21/quick-chat',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'TodayTechBlog — Blog Management System',
    description: 'Full-featured blog management platform supporting CRUD operations with 90%+ unit test coverage across frontend and backend.',
    techStack: ['Java', 'Spring Boot', 'React', 'MySQL'],
    githubUrl: 'https://github.com/Hasebul21/TechBlogRestAPISpring',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 3,
    title: 'ATS Platform',
    description: 'Applicant Tracking System with role-based access control and HackerRank integration. Reduced archive import time from 3–4 min to under 1 min via PostgreSQL indexing and Ehcache.',
    techStack: ['TypeScript', 'NestJS', 'React', 'PostgreSQL', 'Ehcache', 'AWS'],
    featured: true,
    category: 'Enterprise',
  },
  {
    id: 4,
    title: 'Zaui Booking Platform',
    description: 'Booking workflow automation — quotation generation, discount modules, Redis caching, and Angular i18n support for global multi-language accessibility.',
    techStack: ['Java', 'Spring Boot', 'Angular', 'NestJS', 'Redis', 'PostgreSQL'],
    featured: false,
    category: 'Enterprise',
  },
  {
    id: 5,
    title: 'Respiratory Irritation Prediction',
    description: 'ML pipeline combining Random Forest and LSTM to predict respiratory irritation from biomass combustion exposure using environmental and clinical signals. Published at ICCCES 2026.',
    techStack: ['Python', 'Random Forest', 'LSTM', 'Machine Learning', 'AI'],
    liveUrl: 'https://ieeexplore.ieee.org/document/11437157',
    featured: true,
    category: 'Research',
  },
  {
    id: 6,
    title: 'Gen Z Sustainable Fashion ML Analysis',
    description: 'Comparative ML framework with SHAP-based explainability identifying affordability and promotion as dominant adoption factors for sustainable fashion among Gen Z in Bangladesh.',
    techStack: ['Python', 'Machine Learning', 'SHAP', 'Data Science'],
    featured: true,
    category: 'Research',
  },
];
