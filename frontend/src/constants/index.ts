import { NavItem, ExpertiseItem } from '../types';

// Navigation Items
export const NAV_ITEMS: NavItem[] = [
  { label: 'Tech Journey', href: '/tech-portfolio' },
  { label: 'Wellness Path', href: '#wellness' },
  { label: 'The Balance', href: '/' },
  { label: 'Connect', href: '/contact' },
];

// Expertise Data
export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    title: "Frontend Development",
    icon: "⚙️",
    tags: ["Angular 16", "React", "TypeScript", "Redux", "WCAG"],
    description: "Building modern, accessible user interfaces with cutting-edge technologies"
  },
  {
    title: "Backend & APIs",
    icon: "🔧",
    tags: ["Ruby on Rails", "Node.js", "Spring Boot", "GraphQL"],
    description: "Creating robust, scalable server-side applications and APIs"
  },
  {
    title: "Yoga Practice",
    icon: "🧘‍♀️",
    tags: ["Asana", "Pranayama", "Meditation", "Mindfulness"],
    description: "Guiding holistic wellness through ancient practices"
  },
  {
    title: "Ayurveda & Herbalism",
    icon: "🌱",
    tags: ["Dosha Balance", "Herbal Medicine", "Plant Wisdom", "Wellness Consulting"],
    description: "Natural healing through traditional medicine and plant-based remedies"
  },
  {
    title: "Testing & Quality",
    icon: "🧪",
    tags: ["Cypress", "Jest", "Karma/Jasmine", "E2E Testing"],
    description: "Ensuring code quality and reliability through comprehensive testing"
  },
  {
    title: "Astrology",
    icon: "✨",
    tags: ["Birth Charts", "Planetary Transits", "Cosmic Guidance", "Timing"],
    description: "Cosmic wisdom for life guidance and timing decisions"
  }
];

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:8000',
  ENDPOINTS: {
    CONTACT: '/api/contact',
    EXPERTISE: '/api/expertise',
    BLOG: '/api/blog',
    HEALTH: '/api/health',
  }
};

// Animation Durations
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
};

// Breakpoints
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
};

// Gradient Configurations
export const GRADIENTS = {
  PRIMARY: 'bg-gradient-to-br from-primary-500 to-primary-700',
  SECONDARY: 'bg-gradient-to-br from-secondary-500 to-secondary-700',
  ACCENT: 'bg-gradient-to-br from-accent-500 to-accent-700',
  HERO: 'bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600',
  CTA: 'bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-600',
  CARD: 'bg-gradient-to-br from-white to-gray-50',
};

// Social Links
export const SOCIAL_LINKS = {
  PORTFOLIO: '#portfolio',
  OCTOPUS: 'https://github.com/guptasweb',
  CAMERA: '#camera',
  EMAIL: 'mailto:shivani@example.com',
  GITHUB: 'https://github.com/guptasweb',
};

// Contact Form Options
export const CONTACT_TYPES = [
  { value: 'tech', label: 'Tech Projects' },
  { value: 'wellness', label: 'Wellness Consultation' },
];

// SEO Configuration
export const SEO_CONFIG = {
  TITLE: 'LightBeforeDusk - Where Code Meets Consciousness',
  DESCRIPTION: 'Full-Stack Engineer & Wellness Practitioner. Building scalable applications and guiding holistic healing through technology and ancient wisdom.',
  KEYWORDS: ['React', 'TypeScript', 'Yoga', 'Ayurveda', 'Full-Stack', 'Wellness', 'Astrology'],
  AUTHOR: 'LightBeforeDusk',
};
