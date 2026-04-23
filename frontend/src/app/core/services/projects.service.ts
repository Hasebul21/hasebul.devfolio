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
    description: 'Problem: Traders lacked a unified tool to track DSE holdings, P&L, and market data in one place. Solution: Built a full-stack platform (Next.js, TypeScript, Supabase, PostgreSQL) with transaction logging, live DSE market-data integration, watchlist classification, and automated email reports. Impact: Delivered near real-time realized/unrealized P&L analytics and portfolio snapshots, eliminating manual spreadsheet tracking.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'DSE Market API', 'Cursor AI'],
    githubUrl: 'https://github.com/Hasebul21/trading-portfolio',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'QuickChat — Real-Time Chat Application',
    description: 'Problem: Traditional polling-based chat systems suffer high latency and poor scalability under concurrent load. Solution: Built a WebSocket-based bidirectional chat system with JWT authentication, Redis pub/sub caching for low-latency message delivery, and Elasticsearch for full-text message indexing. Impact: Achieved sub-100ms message delivery with efficient search across chat history using a Dockerised, horizontally-scalable architecture.',
    techStack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Docker'],
    githubUrl: 'https://github.com/Hasebul21/quick-chat',
    featured: true,
    category: 'Full Stack',
  },
];
