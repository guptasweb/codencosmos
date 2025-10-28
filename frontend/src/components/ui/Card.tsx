import React from 'react';
import { CardProps } from '../../types';
import { cn } from '../../utils/cn';

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  icon,
  hover = true,
  gradient = false,
  className,
  ...props
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg border border-orange-100 overflow-hidden transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  const gradientClasses = gradient ? 'bg-gradient-to-br from-orange-50 to-background' : '';

  return (
    <div
      className={cn(
        baseClasses,
        hoverClasses,
        gradientClasses,
        className
      )}
      {...props}
    >
      {(title || subtitle || icon) && (
        <div className="p-6 pb-4">
          {icon && (
            <div className="text-4xl mb-4 text-center">
              {icon}
            </div>
          )}
          {title && (
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-gray-600 text-center">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className={cn('p-6', (title || subtitle || icon) && 'pt-0')}>
        {children}
      </div>
    </div>
  );
};

export default Card;
