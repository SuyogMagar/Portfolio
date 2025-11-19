export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'full-stack' | 'backend' | 'frontend' | 'mobile';
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  caseStudy?: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  createdAt: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database';
  proficiency: 'expert' | 'advanced' | 'intermediate' | 'basic';
  yearsOfExperience: number;
  icon: string;
  displayOrder?: number;
}

export interface ContactRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
  inquiryType: 'job-opportunity' | 'collaboration' | 'general';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  inquiryType: string;
  createdAt: string;
}

export interface VisitorAnalytics {
  id: string;
  pageUrl: string;
  userAgent: string;
  referrer?: string;
  visitedAt: string;
  ipAddress?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ProjectFilter {
  category?: string;
  technologies?: string[];
  featured?: boolean;
  search?: string;
  sortBy?: 'date' | 'name' | 'featured';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}