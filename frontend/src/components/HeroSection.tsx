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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20"
    >
      <div className="container-custom text-center">
        <div
          className={cn(
            'transition-all duration-1000 ease-out',
            isIntersecting
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          )}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text">
            Where Code Meets Consciousness
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              I'm Shivani, a software engineer who builds systems for both technology and humanity. 
              By day, I architect robust applications and mentor developers. By evening, I'm tending 
              to my herb garden, studying planetary movements, or flowing through yoga sequences.
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 italic leading-relaxed">
              I believe the logic of code and the wisdom of Ayurveda share the same principles: 
              both seek balance, require debugging, and transform when you understand their underlying patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
