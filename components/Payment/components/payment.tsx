// components/Payment/Payment.tsx
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle } from 'lucide-react';

// TypeScript interfaces
interface PaymentFormData {
  fullName: string;
  email: string;
  projectNumber: string;
  paymentAmount: string;
  projectAddress: string;
}

interface StepInfo {
  number: number;
  title: string;
  description: string;
}

interface StyleObject {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  color: string;
}

const Payment: React.FC = () => {
  const [formData, setFormData] = useState<PaymentFormData>({
    fullName: '',
    email: '',
    projectNumber: '',
    paymentAmount: '',
    projectAddress: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<PaymentFormData>>({});

  const handleInputChange = (field: keyof PaymentFormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<PaymentFormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (formData.paymentAmount && isNaN(Number(formData.paymentAmount))) {
      newErrors.paymentAmount = 'Please enter a valid amount';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (): Promise<void> => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      // Simulate API call - replace with your actual payment processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Payment form submitted:', formData);
      
      // Here you would typically:
      // 1. Call your payment API
      // 2. Handle success/error responses
      // 3. Redirect to success/failure page
      
    } catch (error) {
      console.error('Payment submission error:', error);
      // Handle error state
    } finally {
      setIsSubmitting(false);
    }
  };

  // Styling constants with proper TypeScript typing
  const headingStyles: StyleObject = {
    fontFamily: 'Main Text, sans-serif',
    fontWeight: 400,
    fontSize: 'clamp(28px, 4vw, 48px)',
    lineHeight: '100%',
    letterSpacing: '0px',
    color: 'rgba(30, 30, 30, 1)',
  };

  const stepNumberStyles: StyleObject = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '32px',
    lineHeight: '100%',
    color: '#4981C2',
  };

  const stepTitleStyles: StyleObject = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '120%',
    color: 'rgba(30, 30, 30, 1)',
  };

  const stepDescriptionStyles: StyleObject = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '140%',
    color: 'rgba(82, 82, 69, 1)',
  };

  const labelStyles: StyleObject = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '100%',
    color: 'rgba(30, 30, 30, 1)',
  };

  // Steps data with proper typing
  const steps: StepInfo[] = [
    {
      number: 1,
      title: 'Client & Project Details',
      description: 'Fill out the form with your information and the project address.'
    },
    {
      number: 2,
      title: 'Choose Your Payment Method',
      description: 'Select from convenient options: ACH transfer or credit card.'
    },
    {
      number: 3,
      title: 'Enter Payment Information',
      description: 'Provide your payment details and complete checkout safely.'
    }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 style={headingStyles} className="mb-4">
            MAKE A SECURE PAYMENT
          </h1>
          <h2 style={{ ...headingStyles, fontSize: 'clamp(24px, 3vw, 36px)' }}>
            IN 3 EASY STEPS
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image and Steps */}
          <div className="space-y-8">
            {/* Hero Image */}
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for worker image */}
                <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full"></div>
                </div>
                
                {/* Check mark badge */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-4 left-4 w-8 h-8 bg-blue-300 rounded"></div>
                  <div className="absolute bottom-6 right-12 w-6 h-6 bg-blue-400 rounded-full"></div>
                  <div className="absolute top-12 right-24 w-4 h-4 bg-blue-300 rounded"></div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div style={stepNumberStyles}>{step.number}.</div>
                  <div className="flex-1">
                    <h3 style={stepTitleStyles} className="mb-2">
                      {step.title}
                    </h3>
                    <p style={stepDescriptionStyles}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form and Envelope */}
          <div className="space-y-8">
            {/* Payment Form */}
            <Card className="border border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" style={labelStyles}>
                        Full Name*
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Alex"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className={`border-gray-300 focus:border-blue-500 ${errors.fullName ? 'border-red-500' : ''}`}
                        required
                      />
                      {errors.fullName && (
                        <span className="text-red-500 text-xs">{errors.fullName}</span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" style={labelStyles}>
                        Email*
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="AltairAlex@gmail.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`border-gray-300 focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                        required
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Project Number and Payment Amount Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectNumber" style={labelStyles}>
                        Project Number
                      </Label>
                      <Input
                        id="projectNumber"
                        placeholder="eg. alt2032"
                        value={formData.projectNumber}
                        onChange={(e) => handleInputChange('projectNumber', e.target.value)}
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="paymentAmount" style={labelStyles}>
                        Payment Amount ($)
                      </Label>
                      <Input
                        id="paymentAmount"
                        placeholder="0.00"
                        value={formData.paymentAmount}
                        onChange={(e) => handleInputChange('paymentAmount', e.target.value)}
                        className={`border-gray-300 focus:border-blue-500 ${errors.paymentAmount ? 'border-red-500' : ''}`}
                      />
                      {errors.paymentAmount && (
                        <span className="text-red-500 text-xs">{errors.paymentAmount}</span>
                      )}
                    </div>
                  </div>

                  {/* Project Address */}
                  <div className="space-y-2">
                    <Label htmlFor="projectAddress" style={labelStyles}>
                      Project Address
                    </Label>
                    <Textarea
                      id="projectAddress"
                      placeholder="Write Full Address"
                      value={formData.projectAddress}
                      onChange={(e) => handleInputChange('projectAddress', e.target.value)}
                      className="border-gray-300 focus:border-blue-500 min-h-[120px] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:opacity-90 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      style={{
                        background: isSubmitting 
                          ? 'rgba(156, 163, 175, 1)' 
                          : 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '16px',
                      }}
                    >
                      {isSubmitting ? 'Processing...' : 'Continue to Payment'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decorative Envelope */}
            <div className="flex justify-end">
              <div className="w-48 h-32 relative">
                {/* Envelope */}
                <div className="w-full h-24 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-lg relative">
                  {/* Envelope flap */}
                  <div className="absolute -top-4 left-0 right-0 h-8">
                    <div className="w-full h-full bg-gradient-to-br from-cyan-300 to-cyan-400 transform rotate-0 origin-bottom rounded-t-lg"></div>
                  </div>
                  
                  {/* Envelope body */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-lg">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-6 bg-cyan-400 rounded opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;