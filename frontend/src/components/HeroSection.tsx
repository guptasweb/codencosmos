import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

const HeroSection: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      ref={elementRef}
      className="min-h-[60vh] flex items-center justify-center bg-background-dark pt-24 pb-16"
    >
      <div className="container-custom text-center px-4">
        <div
          className={cn(
            'transition-all duration-1000 ease-out',
            isIntersecting
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          )}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 gradient-text">
            Where Code Meets Consciousness
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-primary-800 leading-relaxed">
              I'm Shivani—a software engineer who believes in building systems that work for both 
              technology and humanity. By day, I architect robust applications and mentor 
              developers. By evening, I'm in my garden with herbs, studying planetary movements, or 
              on my yoga mat. I've discovered that the logic of code and the wisdom of Ayurveda 
              aren't so different—both seek balance, both require debugging, and both transform 
              when you understand their underlying patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
