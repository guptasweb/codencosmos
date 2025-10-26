import { useState, useCallback } from 'react';
import { ContactFormData, ContactResponse } from '../types';
import { useApi } from './useApi';
import { API_CONFIG } from '../constants';

interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  error: string | null;
  handleChange: (field: keyof ContactFormData, value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  reset: () => void;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  type: 'tech',
};

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { execute, loading: isSubmitting, error } = useApi<ContactResponse>();

  const handleChange = useCallback((field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    try {
      await execute(API_CONFIG.ENDPOINTS.CONTACT, {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      
      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      setSubmitStatus('error');
    }
  }, [formData, execute]);

  const reset = useCallback(() => {
    setFormData(initialFormData);
    setSubmitStatus('idle');
  }, []);

  return {
    formData,
    isSubmitting,
    submitStatus,
    error,
    handleChange,
    handleSubmit,
    reset,
  };
}
