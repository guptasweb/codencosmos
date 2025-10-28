import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#7c2d12] text-center py-12 px-4">
      <div className="container-custom">
        <div className="flex justify-center items-center space-x-8 mb-8">
          <a 
            href={SOCIAL_LINKS.PORTFOLIO} 
            className="text-3xl hover:scale-110 transition-transform duration-200" 
            aria-label="Portfolio"
          >
            💼
          </a>
          <a 
            href={SOCIAL_LINKS.OCTOPUS} 
            className="text-3xl hover:scale-110 transition-transform duration-200" 
            aria-label="Octopus"
          >
            🐙
          </a>
          <a 
            href={SOCIAL_LINKS.CAMERA} 
            className="text-3xl hover:scale-110 transition-transform duration-200" 
            aria-label="Camera"
          >
            📷
          </a>
          <a 
            href={SOCIAL_LINKS.EMAIL} 
            className="text-3xl hover:scale-110 transition-transform duration-200" 
            aria-label="Contact"
          >
            ✉️
          </a>
        </div>
        <p className="text-orange-100 text-sm">
          © 2025 Shivani Gupta — Built with intention
        </p>
      </div>
    </footer>
  );
};

export default Footer;
