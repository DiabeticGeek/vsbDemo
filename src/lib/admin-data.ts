// Simple data management utilities for admin panel
// In production, replace with API calls to your backend

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  location: string;
  type: "residentieel" | "commercieel";
  year: number;
  coverImage: string;
  gallery: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  author: string;
  company?: string;
  quote: string;
  rating?: number;
  projectRef?: string;
  createdAt: string;
  updatedAt: string;
}

const PROJECTS_KEY = "vansoolingenbouw_projects";
const TESTIMONIALS_KEY = "vansoolingenbouw_testimonials";

// Project management
export const getProjects = (): Project[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(PROJECTS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveProject = (project: Omit<Project, "id" | "createdAt" | "updatedAt">): Project => {
  const projects = getProjects();
  const newProject: Project = {
    ...project,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  projects.push(newProject);
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  return newProject;
};

export const updateProject = (id: string, updates: Partial<Project>): Project | null => {
  const projects = getProjects();
  const index = projects.findIndex(p => p.id === id);

  if (index === -1) return null;

  projects[index] = {
    ...projects[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  return projects[index];
};

export const deleteProject = (id: string): boolean => {
  const projects = getProjects();
  const filtered = projects.filter(p => p.id !== id);

  if (filtered.length === projects.length) return false;

  localStorage.setItem(PROJECTS_KEY, JSON.stringify(filtered));
  return true;
};

// Testimonial management
export const getTestimonials = (): Testimonial[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(TESTIMONIALS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveTestimonial = (testimonial: Omit<Testimonial, "id" | "createdAt" | "updatedAt">): Testimonial => {
  const testimonials = getTestimonials();
  const newTestimonial: Testimonial = {
    ...testimonial,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  testimonials.push(newTestimonial);
  localStorage.setItem(TESTIMONIALS_KEY, JSON.stringify(testimonials));
  return newTestimonial;
};

export const updateTestimonial = (id: string, updates: Partial<Testimonial>): Testimonial | null => {
  const testimonials = getTestimonials();
  const index = testimonials.findIndex(t => t.id === id);

  if (index === -1) return null;

  testimonials[index] = {
    ...testimonials[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(TESTIMONIALS_KEY, JSON.stringify(testimonials));
  return testimonials[index];
};

export const deleteTestimonial = (id: string): boolean => {
  const testimonials = getTestimonials();
  const filtered = testimonials.filter(t => t.id !== id);

  if (filtered.length === testimonials.length) return false;

  localStorage.setItem(TESTIMONIALS_KEY, JSON.stringify(filtered));
  return true;
};
