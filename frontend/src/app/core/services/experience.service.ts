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
    company: 'Tech Innovations Ltd.',
    role: 'Software Engineer Intern',
    startDate: '2024-06',
    endDate: '2024-12',
    current: false,
    location: 'Dhaka, Bangladesh',
    description: 'Developed RESTful APIs and contributed to microservices architecture for a SaaS platform serving 10,000+ users.',
    highlights: [
      'Built 15+ REST endpoints with Spring Boot, reducing response time by 40%',
      'Implemented CI/CD pipeline using GitHub Actions and Docker',
      'Collaborated with frontend team to design scalable API contracts',
      'Wrote unit and integration tests achieving 85% code coverage',
    ],
    techStack: ['Spring Boot', 'Angular', 'Docker', 'PostgreSQL', 'Redis'],
    companyUrl: 'https://techinnovations.com',
    type: 'internship',
  },
  {
    id: 2,
    company: 'Freelance',
    role: 'Full Stack Developer',
    startDate: '2023-01',
    current: true,
    location: 'Remote',
    description: 'Delivering custom web solutions for clients across education, e-commerce, and healthcare domains.',
    highlights: [
      'Delivered 8+ projects on time and within budget',
      'Built a school management system used by 500+ students',
      'Integrated payment gateways (SSLCommerz, Stripe) for 3 clients',
      'Maintained long-term client relationships with 5-star reviews',
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
    type: 'freelance',
  },
];

const STATIC_EDUCATION: Education[] = [
  {
    id: 1,
    institution: 'Bangladesh University of Engineering and Technology (BUET)',
    degree: 'Bachelor of Science',
    field: 'Computer Science & Engineering',
    startYear: 2021,
    current: true,
    location: 'Dhaka, Bangladesh',
    gpa: '3.82 / 4.00',
    description: 'Focused on AI/ML, distributed systems, and computer networks. Active member of the Programming Club.',
  },
  {
    id: 2,
    institution: 'Notre Dame College',
    degree: 'Higher Secondary Certificate (HSC)',
    field: 'Science',
    startYear: 2018,
    endYear: 2020,
    current: false,
    location: 'Dhaka, Bangladesh',
    gpa: 'GPA 5.00 / 5.00',
  },
];
