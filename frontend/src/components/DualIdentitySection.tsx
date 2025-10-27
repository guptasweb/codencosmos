import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

const DualIdentitySection: React.FC = () => {
  const navigate = useNavigate();
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section ref={elementRef} className="min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full">
        <div
          className={cn(
            'flex flex-col justify-center items-center p-12 text-center text-white relative',
            'transition-all duration-1000 ease-out',
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          )}
          style={{
            background: 'linear-gradient(135deg, #3A506B 0%, #5BC0BE 100%)'
          }}
        >
          <div className="text-6xl mb-8 opacity-90">💻</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Full-Stack Engineer
          </h2>
          <p className="text-xl leading-relaxed mb-8 max-w-md opacity-95">
            Building scalable, accessible web applications with Angular, React, and Rails. 
            9+ years of experience in enterprise software development.
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={() => navigate('/tech-portfolio')}
            className="bg-accent-500 hover:bg-accent-600 text-white border-none"
          >
            View Tech Portfolio
          </Button>
        </div>
        
        <div
          className={cn(
            'flex flex-col justify-center items-center p-12 text-center text-white relative',
            'transition-all duration-1000 ease-out delay-200',
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          )}
          style={{
            background: 'linear-gradient(135deg, #5BC0BE 0%, #3A506B 100%)'
          }}
        >
          <div className="text-6xl mb-8 opacity-90">🍃</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Wellness Practitioner
          </h2>
          <p className="text-xl leading-relaxed mb-8 max-w-md opacity-95">
            Guiding holistic healing through Ayurveda, herbalism, yoga, and astrological wisdom. 
            Bridging ancient practices with modern life.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            className="bg-accent-500 hover:bg-accent-600 text-white border-none"
          >
            Explore Wellness
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DualIdentitySection;
