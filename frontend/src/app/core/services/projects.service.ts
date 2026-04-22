import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {

  getStaticProjects(): Observable<Project[]> {
    // Frontend runs with embedded static data only.
    return of(STATIC_PROJECTS);
  }
}

const STATIC_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Trading Portfolio Platform',
    description: 'Built and deployed a full-stack stock portfolio platform for transaction logging, live holdings, watchlist classification, and realized/unrealized P/L analytics with near real-time market data integration.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Market Data APIs'],
    githubUrl: 'https://github.com/Hasebul21/trading-portfolio',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'QuickChat — Real-Time Chat Application',
    description: 'Developed a real-time chat application using WebSockets for bidirectional communication, user authentication, Redis caching, and Elasticsearch-powered message indexing and retrieval.',
    techStack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Docker'],
    githubUrl: 'https://github.com/Hasebul21/quick-chat',
    featured: true,
    category: 'Full Stack',
  },
];
