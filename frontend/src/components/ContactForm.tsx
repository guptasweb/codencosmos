import React from 'react';
import { useContactForm } from '../hooks/useContactForm';
import { CONTACT_TYPES } from '../constants';
import Button from './ui/Button';
import Input from './ui/Input';
import Select from './ui/Select';
import Card from './ui/Card';
import { cn } from '../utils/cn';

const ContactForm: React.FC = () => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    error,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
        <p className="text-gray-600">
          Ready to start a project or explore wellness together?
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={(value) => handleChange('name', value)}
            required
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(value) => handleChange('email', value)}
            required
          />
        </div>

        <Select
          label="I'm interested in"
          name="type"
          value={formData.type}
          onChange={(value) => handleChange('type', value as 'tech' | 'wellness')}
          options={CONTACT_TYPES}
          required
        />

        <Input
          label="Subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={(value) => handleChange('subject', value)}
          required
        />

        <Input
          label="Message"
          name="message"
          type="textarea"
          value={formData.message}
          onChange={(value) => handleChange('message', value)}
          required
        />

        <Button
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
          className="w-full"
          size="lg"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
            {error || "Sorry, there was an error sending your message. Please try again."}
          </div>
        )}
      </form>
    </Card>
  );
};

export default ContactForm;
