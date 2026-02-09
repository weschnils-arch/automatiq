// Language type
export type Language = 'de' | 'en';

// Theme type
export type Theme = 'light' | 'dark';

// Service item type
export interface ServiceItem {
  id: string;
  icon: string;
  title: {
    de: string;
    en: string;
  };
  description: {
    de: string;
    en: string;
  };
}

// Pricing plan type
export interface PricingPlan {
  id: string;
  name: {
    de: string;
    en: string;
  };
  price: string;
  description: {
    de: string;
    en: string;
  };
  features: {
    de: string[];
    en: string[];
  };
  cta: {
    de: string;
    en: string;
  };
  highlighted?: boolean;
}

// Team member type
export interface TeamMember {
  id: string;
  name: string;
  title: {
    de: string;
    en: string;
  };
  bio: {
    de: string;
    en: string;
  };
  image?: string;
}

// Testimonial type
export interface Testimonial {
  id: string;
  client: string;
  testimonial: {
    de: string;
    en: string;
  };
  metric: string;
}

// FAQ item type
export interface FAQItem {
  id: string;
  question: {
    de: string;
    en: string;
  };
  answer: {
    de: string;
    en: string;
  };
}

// Navigation item type
export interface NavItem {
  id: string;
  label: {
    de: string;
    en: string;
  };
  href: string;
}

// Counter item type
export interface CounterItem {
  id: string;
  value: number;
  suffix: string;
  label: {
    de: string;
    en: string;
  };
}
