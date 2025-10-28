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
    <section ref={elementRef} className="min-h-screen flex items-center relative">
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        {/* Left Panel - Tech Side */}
        <div
          className={cn(
            'flex-1 flex flex-col justify-center items-center p-16 text-center text-white relative overflow-hidden',
            'transition-all duration-1000 ease-out',
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          )}
          style={{
            background: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 25%, #fb923c 50%, #f97316 75%, #ea580c 100%)'
          }}
        >
          {/* Floating Particles */}
          <div className="particle" style={{ left: '10%', animationDelay: '0s' }}></div>
          <div className="particle" style={{ left: '25%', animationDelay: '2s' }}></div>
          <div className="particle" style={{ left: '40%', animationDelay: '4s' }}></div>
          <div className="particle" style={{ left: '60%', animationDelay: '1s' }}></div>
          <div className="particle" style={{ left: '75%', animationDelay: '3s' }}></div>
          <div className="particle" style={{ left: '90%', animationDelay: '5s' }}></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="text-6xl mb-8 opacity-90">💻</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Full-Stack Engineer
            </h2>
            <p className="text-xl leading-relaxed mb-8 max-w-md opacity-95">
              Building scalable, accessible web applications with Angular, React, Rails, and Python. 
              9+ years of experience in enterprise software development.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={() => navigate('/tech-portfolio')}
              className="bg-secondary-600 hover:bg-secondary-700 text-primary-900 border-none"
            >
              View Tech Portfolio
            </Button>
          </div>
        </div>
        
        {/* Divider */}
        <div 
          className="hidden lg:block w-1"
          style={{
            background: 'linear-gradient(to bottom, #d97706, #f59e0b, #fbbf24, #f59e0b, #d97706)',
            boxShadow: '0 0 20px rgba(217, 119, 6, 0.5)'
          }}
        ></div>
        
        {/* Right Panel - Wellness Side */}
        <div
          className={cn(
            'flex-1 flex flex-col justify-center items-center p-16 text-center relative overflow-hidden',
            'transition-all duration-1000 ease-out delay-200',
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          )}
          style={{
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 25%, #fcd34d 50%, #fbbf24 75%, #f59e0b 100%)'
          }}
        >
          {/* Floating Particles */}
          <div className="particle" style={{ left: '10%', animationDelay: '1s' }}></div>
          <div className="particle" style={{ left: '25%', animationDelay: '3s' }}></div>
          <div className="particle" style={{ left: '40%', animationDelay: '5s' }}></div>
          <div className="particle" style={{ left: '60%', animationDelay: '0s' }}></div>
          <div className="particle" style={{ left: '75%', animationDelay: '4s' }}></div>
          <div className="particle" style={{ left: '90%', animationDelay: '2s' }}></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="text-6xl mb-8 opacity-90">🍃</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-primary-900">
              Wellness Practitioner
            </h2>
            <p className="text-xl leading-relaxed mb-8 max-w-md opacity-95 text-primary-900">
              Guiding holistic healing through Ayurveda, herbalism, yoga, and astrological wisdom. 
              Bridging ancient practices with modern life.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 text-white border-none"
            >
              Explore Wellness
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualIdentitySection;
