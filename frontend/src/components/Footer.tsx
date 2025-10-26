import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-icons">
          <a href="#portfolio" className="footer-icon" aria-label="Portfolio">
            💼
          </a>
          <a href="#octopus" className="footer-icon" aria-label="Octopus">
            🐙
          </a>
          <a href="#camera" className="footer-icon" aria-label="Camera">
            📷
          </a>
          <a href="#contact" className="footer-icon" aria-label="Contact">
            ✉️
          </a>
        </div>
        <p className="footer-text">
          © 2025 Shivani Gupta. Built with intention.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
