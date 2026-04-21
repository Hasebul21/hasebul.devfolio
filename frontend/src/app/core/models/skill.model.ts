export interface Skill {
  id: number;
  name: string;
  category: SkillCategory;
  proficiency: number; // 1-100
  iconUrl?: string;
  yearsOfExperience?: number;
}

export type SkillCategory =
  | 'languages'
  | 'frameworks'
  | 'tools'
  | 'databases'
  | 'cloud'
  | 'ai-ml'
  | 'other';

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: Skill[];
}
