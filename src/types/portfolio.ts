export interface NavMenuItem {
  label: string;
  href: string;
}

export interface ProfileInfo {
  name: string;
  roleBadge: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix: string;
  bio: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutDescription2?: string;
  avatarUrl: string;
  cvDownloadUrl: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: 'calendar' | 'code' | 'smile' | 'trophy' | 'users' | 'star';
  color?: string;
}

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'database' | 'tools' | 'devops';

export interface SkillItem {
  id: string;
  name: string;
  percentage: number;
  category: SkillCategory;
  icon: string;
  color: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  images?: string[];   // optional gallery for slider in modal
  tags: string[];
  category: 'Full Stack' | 'Frontend' | 'Backend & API' | 'Mobile & Cloud';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights?: string[];
  technologies: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'mail' | 'phone' | 'facebook' | 'telegram' | 'whatsapp';
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availableForFreelance: boolean;
  socials: SocialLink[];
}

export interface PortfolioData {
  profile: ProfileInfo;
  stats: StatItem[];
  skills: SkillItem[];
  techStackIcons: { name: string; icon: string; color: string }[];
  projects: ProjectItem[];
  testimonials: TestimonialItem[];
  contact: ContactInfo;
}
