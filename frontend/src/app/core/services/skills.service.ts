import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { Skill, SkillGroup } from '../models/skill.model';

@Injectable({ providedIn: 'root' })
export class SkillsService extends ApiService {

  getSkills(): Observable<Skill[]> {
    return this.get<Skill[]>('/skills');
  }

  getStaticSkills(): Observable<SkillGroup[]> {
    return of(STATIC_SKILL_GROUPS);
  }
}

const STATIC_SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'languages',
    label: 'Languages',
    skills: [
      { id: 1,  name: 'Java',       category: 'languages', proficiency: 90, yearsOfExperience: 3 },
      { id: 2,  name: 'Python',     category: 'languages', proficiency: 85, yearsOfExperience: 3 },
      { id: 3,  name: 'TypeScript', category: 'languages', proficiency: 85, yearsOfExperience: 2 },
      { id: 4,  name: 'JavaScript', category: 'languages', proficiency: 88, yearsOfExperience: 3 },
      { id: 5,  name: 'C/C++',      category: 'languages', proficiency: 75, yearsOfExperience: 3 },
      { id: 6,  name: 'SQL',        category: 'languages', proficiency: 82, yearsOfExperience: 3 },
      { id: 7,  name: 'Dart',       category: 'languages', proficiency: 65, yearsOfExperience: 1 },
    ],
  },
  {
    category: 'frameworks',
    label: 'Frameworks & Libraries',
    skills: [
      { id: 10, name: 'Spring Boot',  category: 'frameworks', proficiency: 88, yearsOfExperience: 2 },
      { id: 11, name: 'Angular',      category: 'frameworks', proficiency: 85, yearsOfExperience: 2 },
      { id: 12, name: 'React',        category: 'frameworks', proficiency: 80, yearsOfExperience: 2 },
      { id: 13, name: 'Next.js',      category: 'frameworks', proficiency: 75, yearsOfExperience: 1 },
      { id: 14, name: 'FastAPI',      category: 'frameworks', proficiency: 78, yearsOfExperience: 2 },
      { id: 15, name: 'Flutter',      category: 'frameworks', proficiency: 65, yearsOfExperience: 1 },
      { id: 16, name: 'Tailwind CSS', category: 'frameworks', proficiency: 90, yearsOfExperience: 2 },
    ],
  },
  {
    category: 'tools',
    label: 'Tools & DevOps',
    skills: [
      { id: 20, name: 'Git & GitHub', category: 'tools', proficiency: 90, yearsOfExperience: 3 },
      { id: 21, name: 'Docker',       category: 'tools', proficiency: 78, yearsOfExperience: 2 },
      { id: 22, name: 'Linux',        category: 'tools', proficiency: 82, yearsOfExperience: 3 },
      { id: 23, name: 'VS Code',      category: 'tools', proficiency: 95, yearsOfExperience: 3 },
      { id: 24, name: 'Postman',      category: 'tools', proficiency: 88, yearsOfExperience: 2 },
      { id: 25, name: 'Figma',        category: 'tools', proficiency: 65, yearsOfExperience: 1 },
    ],
  },
  {
    category: 'databases',
    label: 'Databases',
    skills: [
      { id: 30, name: 'PostgreSQL', category: 'databases', proficiency: 85, yearsOfExperience: 2 },
      { id: 31, name: 'MySQL',      category: 'databases', proficiency: 82, yearsOfExperience: 2 },
      { id: 32, name: 'MongoDB',    category: 'databases', proficiency: 75, yearsOfExperience: 2 },
      { id: 33, name: 'Redis',      category: 'databases', proficiency: 70, yearsOfExperience: 1 },
      { id: 34, name: 'Supabase',   category: 'databases', proficiency: 80, yearsOfExperience: 1 },
    ],
  },
  {
    category: 'ai-ml',
    label: 'AI / ML',
    skills: [
      { id: 40, name: 'TensorFlow',  category: 'ai-ml', proficiency: 70, yearsOfExperience: 1 },
      { id: 41, name: 'scikit-learn',category: 'ai-ml', proficiency: 75, yearsOfExperience: 2 },
      { id: 42, name: 'LangChain',   category: 'ai-ml', proficiency: 65, yearsOfExperience: 1 },
      { id: 43, name: 'OpenAI API',  category: 'ai-ml', proficiency: 80, yearsOfExperience: 1 },
    ],
  },
];
