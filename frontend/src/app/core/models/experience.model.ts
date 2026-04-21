export interface Experience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  location: string;
  description: string;
  highlights: string[];
  techStack: string[];
  companyUrl?: string;
  logoUrl?: string;
  type: 'full-time' | 'part-time' | 'internship' | 'contract' | 'freelance';
}
