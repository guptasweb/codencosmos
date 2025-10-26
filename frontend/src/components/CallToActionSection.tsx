import React from 'react';
import Button from './ui/Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

const CallToActionSection: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section 
      ref={elementRef}
      className="section-padding bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-600 text-center"
    >
      <div className="container-custom">
        <div
          className={cn(
            'transition-all duration-1000 ease-out',
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Create Something Together
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you need a scalable application or guidance on your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="w-full sm:w-auto min-w-[200px]"
            >
              Hire for Tech Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto min-w-[200px] bg-white/20 text-white border-white hover:bg-white hover:text-primary-600"
            >
              Book Wellness Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
