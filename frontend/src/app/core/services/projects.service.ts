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
    title: 'QuickChat',
    description: 'Real-time chat application using WebSockets for bidirectional communication, user authentication, Redis caching for performance, and Elasticsearch for efficient message indexing and retrieval.',
    techStack: ['Java', 'Spring Boot', 'WebSocket', 'Redis', 'Elasticsearch', 'Angular'],
    githubUrl: 'https://github.com/Hasebul21',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'TodayTechBlog',
    description: 'Full-stack blogging platform with end-to-end CRUD functionality. Achieved 90% code coverage through comprehensive unit testing across both frontend and backend components.',
    techStack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'JUnit', 'Mockito'],
    githubUrl: 'https://github.com/Hasebul21',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 3,
    title: 'ATS Platform',
    description: 'Applicant Tracking System with role-based access control and HackerRank integration for streamlined interview and candidate management. Reduced archive import time from 3–4 min to under 1 min.',
    techStack: ['TypeScript', 'NestJS', 'React', 'PostgreSQL', 'Ehcache', 'AWS'],
    featured: true,
    category: 'Enterprise',
  },
  {
    id: 4,
    title: 'Zaui Booking Platform',
    description: 'Feature development on a global booking platform — quotation generation, booking workflow, discount modules, Redis caching, and Angular i18n support for multi-language accessibility.',
    techStack: ['Java', 'Spring Boot', 'Angular', 'NestJS', 'Redis', 'PostgreSQL'],
    featured: true,
    category: 'Enterprise',
  },
  {
    id: 5,
    title: 'ML-Based CKD Risk Stratification',
    description: 'IEEE-accepted research: Multi-domain ML framework integrating demographic, biochemical, and longitudinal clinical data to enable early identification of high-risk Chronic Kidney Disease patients.',
    techStack: ['Python', 'Machine Learning', 'scikit-learn', 'Healthcare', 'IEEE'],
    featured: true,
    category: 'Research',
    liveUrl: 'https://ieeexplore.ieee.org',
  },
  {
    id: 6,
    title: 'Respiratory Irritation Prediction',
    description: 'Hybrid Random Forest–LSTM pipeline combining environmental and clinical biomarkers to predict respiratory irritation and identify key combustion-related risk factors. Published at ICCCES 2026.',
    techStack: ['Python', 'Random Forest', 'LSTM', 'Machine Learning', 'AI'],
    featured: true,
    category: 'Research',
    liveUrl: 'https://ieeexplore.ieee.org/document/11437157',
  },
];
