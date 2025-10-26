import React from 'react';
import { cn } from '../../utils/cn';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-colors duration-200';
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    primary: 'bg-primary-100 text-primary-700 hover:bg-primary-200',
    secondary: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200',
    accent: 'bg-accent-100 text-accent-700 hover:bg-accent-200',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Tag;
