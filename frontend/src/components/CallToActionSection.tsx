import React from 'react';
import './CallToActionSection.css';

const CallToActionSection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Let's Create Something Together</h2>
        <p className="cta-description">
          Whether you need a scalable application or guidance on your wellness journey.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Hire for Tech Projects</button>
          <button className="btn btn-secondary">Book Wellness Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
