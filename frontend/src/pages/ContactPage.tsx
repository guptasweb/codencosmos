import React from 'react';
import ContactForm from '../components/ContactForm';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1 className="contact-hero-title">Let's Connect</h1>
        <p className="contact-hero-description">
          Ready to start a project or explore wellness together? I'd love to hear from you.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
