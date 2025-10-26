import React from 'react';
import ContactForm from '../components/ContactForm';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

const ContactPage: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container-custom py-16">
        <div
          ref={elementRef}
          className={cn(
            'text-center mb-12 transition-all duration-1000 ease-out',
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start a project or explore wellness together? I'd love to hear from you.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
