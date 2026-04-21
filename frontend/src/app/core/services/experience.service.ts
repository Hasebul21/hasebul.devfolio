import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { Experience } from '../models/experience.model';
import { Education } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ExperienceService extends ApiService {

  getExperiences(): Observable<Experience[]> {
    return this.get<Experience[]>('/experience');
  }

  getEducation(): Observable<Education[]> {
    return this.get<Education[]>('/education');
  }

  getStaticExperiences(): Observable<Experience[]> {
    return of(STATIC_EXPERIENCES);
  }

  getStaticEducation(): Observable<Education[]> {
    return of(STATIC_EDUCATION);
  }
}

const STATIC_EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: 'Cefalo Bangladesh Ltd.',
    role: 'Senior Software Engineer',
    startDate: 'Feb 2026',
    current: true,
    location: 'Dhaka, Bangladesh (onsite)',
    description: 'Leading a team of 4 engineers in building an ATS platform, driving performance improvements, and enhancing CI/CD pipelines.',
    highlights: [
      'Directed a team of 4 engineers developing an ATS platform using TypeScript, NestJS, and React with role-based access control and HackerRank integration.',
      'Reduced large archive import query execution time from 3–4 minutes to under 1 minute via strategic PostgreSQL indexing and Ehcache.',
      'Implemented ELK stack (Elasticsearch, Logstash, Kibana) for application monitoring and integrated Slack notifications with Jenkins.',
      'Designed GitHub Actions + Docker Hub + AWS EC2 release pipelines, achieving a 30% reduction in release time.',
    ],
    techStack: ['TypeScript', 'NestJS', 'React', 'PostgreSQL', 'Ehcache', 'ELK Stack', 'GitHub Actions', 'Docker', 'AWS EC2'],
    companyUrl: 'https://www.cefalo.com',
    type: 'full-time',
  },
  {
    id: 2,
    company: 'Cefalo Bangladesh Ltd.',
    role: 'Software Engineer',
    startDate: 'Feb 2024',
    endDate: 'Jan 2026',
    current: false,
    location: 'Dhaka, Bangladesh (onsite)',
    description: 'Developed booking automation features and performance improvements for the Zaui platform, serving global customers.',
    highlights: [
      'Developed quotation generation, booking workflow, and discount modules using Java, Spring Boot, NestJS, and Angular.',
      'Introduced scheduler-based background processing and Redis caching, achieving significant latency reduction in high-traffic scenarios.',
      'Implemented Angular i18n support in the Zaui booking platform, enabling multi-language accessibility for global customers.',
      'Contributed to feature development, bug fixing, and customer support within an Agile environment.',
      'Created and maintained technical documentation, reducing onboarding time for new team members.',
    ],
    techStack: ['Java', 'Spring Boot', 'NestJS', 'Angular', 'JavaScript', 'Redis', 'PostgreSQL'],
    companyUrl: 'https://www.cefalo.com',
    type: 'full-time',
  },
  {
    id: 3,
    company: 'Cefalo Bangladesh Ltd.',
    role: 'Associate Software Engineer',
    startDate: 'Jun 2022',
    endDate: 'Jan 2024',
    current: false,
    location: 'Dhaka, Bangladesh (onsite)',
    description: 'Built and maintained backend RESTful services and contributed to Agile development workflows.',
    highlights: [
      'Built and maintained backend RESTful services using Java, Spring Boot, and Hibernate for Angular-based frontends.',
      'Contributed to Agile/Scrum workflows including sprint planning, code reviews, and CI/CD pipeline activities.',
      'Developed unit and integration tests using JUnit and Mockito, improving test coverage and reducing production regressions.',
    ],
    techStack: ['Java', 'Spring Boot', 'Hibernate', 'Angular', 'JUnit', 'Mockito', 'CI/CD'],
    companyUrl: 'https://www.cefalo.com',
    type: 'full-time',
  },
  {
    id: 4,
    company: 'American International University-Bangladesh (AIUB)',
    role: 'Web Developer',
    startDate: 'Jun 2021',
    endDate: 'May 2022',
    current: false,
    location: 'Dhaka, Bangladesh (onsite)',
    description: 'Developed and maintained web-based features for students, faculty, and administrative users of the university portal.',
    highlights: [
      'Built responsive frontend pages and interactive modules using HTML, CSS, JavaScript, and WordPress.',
      'Implemented backend functionalities using Java for internal portal modules and dynamic data-driven university pages.',
      'Designed and optimized MySQL queries for storage and retrieval of academic and student service data.',
      'Developed dynamic modules: notices, announcements, department pages, and student service features.',
    ],
    techStack: ['Java', 'HTML', 'CSS', 'JavaScript', 'WordPress', 'MySQL'],
    type: 'full-time',
  },
];

const STATIC_EDUCATION: Education[] = [
  {
    id: 1,
    institution: 'American International University-Bangladesh (AIUB)',
    degree: 'Bachelor of Science',
    field: 'Computer Science and Engineering (CSE)',
    startYear: 2018,
    endYear: 2022,
    current: false,
    location: 'Dhaka, Bangladesh',
    gpa: 'CGPA: 3.58 / 4.00',
    description: 'Focused on software engineering, algorithms, data structures, and distributed systems. Active competitive programmer.',
  },
];
