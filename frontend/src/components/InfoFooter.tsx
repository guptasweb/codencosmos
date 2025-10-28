import React from 'react';

const InfoFooter: React.FC = () => {
  return (
    <section className="bg-[#92400e] text-orange-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 px-8">
          {/* Tech Realm */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#fbbf24] mb-4">
              Tech Realm
            </h2>
            <p className="text-orange-100 mb-6 leading-relaxed">
              Exploring code, systems, and digital craftsmanship. A decade of building, learning, 
              and evolving through technology.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="https://github.com/guptasweb" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-200 hover:text-[#fbbf24] transition-colors duration-200 underline underline-offset-4"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/shivanigupta-108/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-200 hover:text-[#fbbf24] transition-colors duration-200 underline underline-offset-4"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Wellness Journey */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#fbbf24] mb-4">
              Wellness Journey
            </h2>
            <p className="text-orange-100 mb-6 leading-relaxed">
              Cultivating presence, balance, and holistic living. Practices that sustain the creator 
              and honor the human experience.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="#" 
                className="text-orange-200 hover:text-[#fbbf24] transition-colors duration-200 underline underline-offset-4"
              >
                Blog
              </a>
              <a 
                href="#" 
                className="text-orange-200 hover:text-[#fbbf24] transition-colors duration-200 underline underline-offset-4"
              >
                Resources
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#7c2d12] py-6 text-center">
        <p className="text-orange-100 text-sm">
        © 2025 Shivani Gupta — Built with intention
        </p>
      </div>
    </section>
  );
};

export default InfoFooter;

