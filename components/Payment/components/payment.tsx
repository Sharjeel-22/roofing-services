'use client';

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Payment: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectNumber: '',
    paymentAmount: '',
    projectAddress: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="w-full py-4 sm:py-8 lg:py-16 px-2 sm:px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Image */}
        <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-4 lg:gap-8">
          <div 
            className="relative overflow-hidden w-full sm:w-1/2"
            style={{
              height: 'clamp(250px, 45vw, 500px)',
              opacity: 1,
              borderTopLeftRadius: 'clamp(16px, 4vw, 32px)',
              borderTopRightRadius: 'clamp(80px, 20vw, 200px)',
              borderBottomRightRadius: 'clamp(16px, 4vw, 32px)',
              borderBottomLeftRadius: 'clamp(16px, 4vw, 32px)',
            }}
          >
            <img 
              src="/RightRoundedPaymentImage.png"
              alt="Professional worker with safety equipment"
              className="w-full h-full object-cover"
              style={{
                borderTopLeftRadius: 'clamp(16px, 4vw, 32px)',
                borderTopRightRadius: 'clamp(80px, 20vw, 200px)',
                borderBottomRightRadius: 'clamp(16px, 4vw, 32px)',
                borderBottomLeftRadius: 'clamp(16px, 4vw, 32px)',
              }}
            />
          </div>
          <div 
            className="relative overflow-hidden w-full sm:w-1/2 mt-4 sm:mt-0"
            style={{
              height: 'clamp(75vw, 556px)',
            }}
          >
            <img 
              src="/PaymentRightContent.png"
              alt="Payment form content"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* New Form and Image Section */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12 lg:mt-16">
          {/* Form Section */}
          <div className="md:col-span-2">
            <div className="bg-gray-50 p-6 lg:p-8 rounded-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Payment Details
              </h2>
              
              <div className="space-y-6">
                {/* Full Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Alex"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="AltarAlex@gmail.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Project Number and Payment Amount Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Number
                    </label>
                    <input
                      type="text"
                      name="projectNumber"
                      value={formData.projectNumber}
                      onChange={handleInputChange}
                      placeholder="eg. alt2032"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Payment Amount ($)
                    </label>
                    <input
                      type="text"
                      name="paymentAmount"
                      value={formData.paymentAmount}
                      onChange={handleInputChange}
                      placeholder="Osama"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Project Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Address
                  </label>
                  <textarea
                    name="projectAddress"
                    value={formData.projectAddress}
                    onChange={handleInputChange}
                    placeholder="Write Full Address"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    onClick={handleSubmit}
                    className="w-[235px] h-[40px] text-white font-semibold rounded-[20px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    style={{
                      background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                      paddingTop: '8px',
                      paddingRight: '30px',
                      paddingBottom: '8px',
                      paddingLeft: '30px',
                      gap: '5px'
                    }}
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="space-y-8">
            <div 
              className="bg-gradient-to-b to-white rounded-lg p-8 flex justify-center items-center min-h-[600px] sticky top-8"
            >
              <img 
                src="/PaymentBox.png"
                alt="Payment process illustration"
                className="w-80 h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;