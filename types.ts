export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  imageUrl: string;
  metrics?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  techUsed: string[];
}

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}