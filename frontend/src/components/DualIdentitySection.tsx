import React from 'react';
import './DualIdentitySection.css';

const DualIdentitySection: React.FC = () => {
  return (
    <section className="dual-identity-section">
      <div className="dual-identity-container">
        <div className="identity-card engineer-card">
          <div className="card-icon">💻</div>
          <h2 className="card-title">Full-Stack Engineer</h2>
          <p className="card-description">
            Building scalable, accessible web applications with Angular, React, and Rails. 
            9+ years of experience in enterprise software development.
          </p>
          <button className="btn btn-white">View Tech Portfolio</button>
        </div>
        
        <div className="identity-card wellness-card">
          <div className="card-icon">🍃</div>
          <h2 className="card-title">Wellness Practitioner</h2>
          <p className="card-description">
            Guiding holistic healing through Ayurveda, herbalism, yoga, and astrological wisdom. 
            Bridging ancient practices with modern life.
          </p>
          <button className="btn btn-white">Explore Wellness</button>
        </div>
      </div>
    </section>
  );
};

export default DualIdentitySection;
