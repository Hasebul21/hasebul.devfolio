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

  /** Returns all unique tech stack tags across projects */
  getTechTags(): Observable<string[]> {
    return this.get<string[]>('/projects/tech-tags');
  }

  /** Fallback static data for demo/development */
  getStaticProjects(): Observable<Project[]> {
    return of(STATIC_PROJECTS);
  }
}

const STATIC_PROJECTS: Project[] = [
  {
    id: 0,
    title: 'AI-Enhanced Prediction of Respiratory Irritation From Biomass Combustion Byproducts',
    description: 'IEEE-published research proposing an integrative machine learning framework to predict respiratory irritation caused by biomass combustion byproducts, supporting sustainable bioenergy systems.',
    longDescription: 'An Integrative Machine Learning Framework for Sustainable Bioenergy Systems — published in IEEE conference proceedings.',
    techStack: ['Machine Learning', 'Python', 'scikit-learn', 'AI', 'Healthcare'],
    liveUrl: 'https://ieeexplore.ieee.org/document/11437157',
    featured: true,
    category: 'Research',
  },
  {
    id: 1,
    title: 'AI-Powered Study Assistant',
    description: 'An intelligent study companion that leverages NLP to generate summaries, quizzes, and study plans from uploaded documents.',
    techStack: ['Python', 'FastAPI', 'OpenAI API', 'React', 'PostgreSQL'],
    githubUrl: 'https://github.com/hasebul/ai-study-assistant',
    liveUrl: 'https://ai-study-assistant.vercel.app',
    featured: true,
    category: 'AI/ML',
    imageUrl: 'assets/images/project-ai.jpg',
  },
  {
    id: 2,
    title: 'Smart Home Automation System',
    description: 'IoT platform for controlling home devices using MQTT protocol with real-time dashboard and mobile app.',
    techStack: ['Spring Boot', 'Angular', 'MQTT', 'Raspberry Pi', 'MySQL'],
    githubUrl: 'https://github.com/hasebul/smart-home',
    featured: true,
    category: 'IoT',
  },
  {
    id: 3,
    title: 'E-Commerce Microservices Platform',
    description: 'Scalable e-commerce backend built with microservices architecture, including product, order, and payment services.',
    techStack: ['Spring Boot', 'Docker', 'Kafka', 'Redis', 'PostgreSQL', 'Angular'],
    githubUrl: 'https://github.com/hasebul/ecommerce-microservices',
    featured: true,
    category: 'Backend',
  },
  {
    id: 4,
    title: 'Real-Time Chat Application',
    description: 'Full-stack chat application with WebSocket support, rooms, direct messaging, and file sharing.',
    techStack: ['Node.js', 'Socket.IO', 'React', 'MongoDB', 'Redis'],
    githubUrl: 'https://github.com/hasebul/realtime-chat',
    liveUrl: 'https://realtime-chat.vercel.app',
    featured: false,
    category: 'Full Stack',
  },
  {
    id: 5,
    title: 'Network Packet Analyzer',
    description: 'CLI tool for capturing and analyzing network packets with protocol breakdown and anomaly detection.',
    techStack: ['Python', 'Scapy', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/hasebul/packet-analyzer',
    featured: false,
    category: 'Networking',
  },
  {
    id: 6,
    title: 'Personal Finance Tracker',
    description: 'Cross-platform mobile app for tracking income, expenses, and investments with beautiful charts.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Riverpod'],
    githubUrl: 'https://github.com/hasebul/finance-tracker',
    featured: false,
    category: 'Mobile',
  },
];
