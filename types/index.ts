export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export type ProjectCategory =
  | 'Data Analytics'
  | 'Machine Learning'
  | 'Computer Vision'
  | 'AI Applications'
  | 'Web Development'
  | 'IoT + AI';

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
}

export type SkillCategory = 'Data' | 'AI & ML' | 'Web Development' | 'Tools';

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  verificationLink?: string;
  category?: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  type: 'education' | 'work' | 'certification' | 'project';
  startDate: string;
  endDate?: string;
  description?: string;
  location?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  coursework?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  link: string;
  platform: 'medium' | 'linkedin' | 'personal';
}
