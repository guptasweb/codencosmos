// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: 'success' | 'error';
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: 'tech' | 'wellness';
}

export interface ContactResponse {
  message: string;
  status: 'success' | 'error';
}

// Expertise Types
export interface ExpertiseItem {
  title: string;
  icon: string;
  tags: string[];
  description?: string;
}

// Blog Types
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: 'engineering' | 'wellness';
  published_date: string;
  read_time: number;
  slug?: string;
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  id?: string;
  title?: string;
  subtitle?: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Theme Types
export type Theme = 'light' | 'dark';

// Button Types
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

// Card Types
export interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  icon?: string;
  hover?: boolean;
  gradient?: boolean;
}

// Form Types
export interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}
