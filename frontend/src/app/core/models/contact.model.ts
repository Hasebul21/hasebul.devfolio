export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  current: boolean;
  gpa?: string;
  location: string;
  description?: string;
  logoUrl?: string;
}
