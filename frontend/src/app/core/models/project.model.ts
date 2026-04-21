export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: string;
  createdAt?: string;
}

export interface ProjectFilter {
  tech?: string;
  category?: string;
}
