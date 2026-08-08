export type Page = 'home' | 'why' | 'products' | 'requirements' | 'apply';

export interface ProductCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  keyProducts: string[];
  marginRange: string;
  targetDemand: string;
  certifications: string[];
  iconName: string;
  badge?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  description: string;
  badgeText: string;
}

export interface TerritoryRegion {
  id: string;
  name: string;
  flag: string;
  activeDistributors: string;
  status: 'Open for Master Distributor' | 'Expanding Network' | 'Exclusive Available' | 'High Demand';
  countries: string[];
  growthRate: string;
  featuredTerritories: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  country: string;
  flag: string;
  quote: string;
  yearsPartnered: number;
  growthStat: string;
  avatar: string;
}

export interface ApplicationFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  country: string;
  businessType: string;
  experienceYears: string;
  investmentTier: string;
  currentChannels: string[];
  message: string;
}

export interface SupportPackageItem {
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}
