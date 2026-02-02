/**
 * Core TypeScript types for Arrowsphere Holdings Limited website
 */

export interface SocialLink {
  platform: "twitter" | "linkedin" | "github" | "email" | "website";
  url: string;
  label?: string;
}

export interface Badge {
  text: string;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  badges?: Badge[];
  socialLinks?: SocialLink[];
  expertise?: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  badges?: Badge[];
  link?: string;
  icon?: string;
  status?: "active" | "development" | "planning" | "archived";
  features?: string[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
}

export interface ContactInfo {
  type: "email" | "phone" | "address" | "website";
  value: string;
  icon?: string;
  label?: string;
}

export interface TimelineItem {
  year: number | string;
  title: string;
  description: string;
  category?: "milestone" | "launch" | "achievement" | "expansion";
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url?: string;
  logo?: string;
}

export interface CompanyInfo {
  legalName: string;
  foundingYear: number;
  jurisdiction: string;
  registrationNumber?: string;
  type: string;
  headquarters?: string;
}

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

export interface ThesisPillar {
  id: string;
  title: string;
  description: string;
  icon?: string;
}
