import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill, SkillGroup } from '../models/skill.model';

@Injectable({ providedIn: 'root' })
export class SkillsService {

  getStaticSkills(): Observable<SkillGroup[]> {
    // Frontend runs with embedded static data only.
    return of(STATIC_SKILL_GROUPS);
  }
}

const STATIC_SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'languages',
    label: 'Languages',
    skills: [
      { id: 1, name: 'Java',       category: 'languages', proficiency: 95, yearsOfExperience: 5 },
      { id: 2, name: 'Kotlin',     category: 'languages', proficiency: 72, yearsOfExperience: 2 },
      { id: 3, name: 'Python',     category: 'languages', proficiency: 80, yearsOfExperience: 3 },
      { id: 4, name: 'JavaScript', category: 'languages', proficiency: 88, yearsOfExperience: 5 },
      { id: 5, name: 'C / C++',    category: 'languages', proficiency: 75, yearsOfExperience: 4 },
    ],
  },
  {
    category: 'frameworks',
    label: 'Backend Frameworks',
    skills: [
      { id: 10, name: 'Spring Boot', category: 'frameworks', proficiency: 95, yearsOfExperience: 4 },
      { id: 11, name: 'NestJS',      category: 'frameworks', proficiency: 88, yearsOfExperience: 3 },
      { id: 12, name: 'FastAPI',     category: 'frameworks', proficiency: 78, yearsOfExperience: 2 },
      { id: 13, name: 'Express.js',  category: 'frameworks', proficiency: 75, yearsOfExperience: 2 },
    ],
  },
  {
    category: 'tools',
    label: 'Frontend',
    skills: [
      { id: 20, name: 'Angular',    category: 'tools', proficiency: 90, yearsOfExperience: 4 },
      { id: 21, name: 'React',      category: 'tools', proficiency: 82, yearsOfExperience: 3 },
      { id: 22, name: 'TypeScript', category: 'tools', proficiency: 88, yearsOfExperience: 3 },
      { id: 23, name: 'HTML / CSS', category: 'tools', proficiency: 90, yearsOfExperience: 5 },
    ],
  },
  {
    category: 'databases',
    label: 'Databases',
    skills: [
      { id: 30, name: 'PostgreSQL',     category: 'databases', proficiency: 90, yearsOfExperience: 4 },
      { id: 31, name: 'MongoDB',        category: 'databases', proficiency: 80, yearsOfExperience: 3 },
      { id: 32, name: 'Redis',          category: 'databases', proficiency: 85, yearsOfExperience: 3 },
      { id: 33, name: 'Elasticsearch',  category: 'databases', proficiency: 78, yearsOfExperience: 2 },
      { id: 34, name: 'MySQL',          category: 'databases', proficiency: 82, yearsOfExperience: 4 },
    ],
  },
  {
    category: 'cloud',
    label: 'Cloud & DevOps',
    skills: [
      { id: 40, name: 'AWS (EC2/S3/ECS/RDS)', category: 'cloud', proficiency: 85, yearsOfExperience: 3 },
      { id: 41, name: 'Docker',               category: 'cloud', proficiency: 88, yearsOfExperience: 3 },
      { id: 42, name: 'GitHub Actions',        category: 'cloud', proficiency: 85, yearsOfExperience: 3 },
      { id: 43, name: 'Jenkins',               category: 'cloud', proficiency: 78, yearsOfExperience: 2 },
      { id: 44, name: 'ELK Stack',             category: 'cloud', proficiency: 75, yearsOfExperience: 2 },
    ],
  },
  {
    category: 'ai-ml',
    label: 'AI / ML',
    skills: [
      { id: 50, name: 'LLM API Integration',  category: 'ai-ml', proficiency: 82, yearsOfExperience: 2 },
      { id: 51, name: 'Prompt Engineering',   category: 'ai-ml', proficiency: 80, yearsOfExperience: 2 },
      { id: 52, name: 'RAG / Vector Search',  category: 'ai-ml', proficiency: 75, yearsOfExperience: 1 },
      { id: 53, name: 'Embeddings',           category: 'ai-ml', proficiency: 72, yearsOfExperience: 1 },
    ],
  },
];
