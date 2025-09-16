'use client';

import React, { useState } from 'react';

const PaymentSelection: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');

  const handlePaymentMethod = (method: string) => {
    setSelectedMethod(method);
    console.log(`Selected payment method: ${method}`);
    // Handle navigation to the selected payment method
  };

  return (
    <section className="w-full py-4 sm:py-8 lg:py-20 px-2 sm:px-4 lg:px-8 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-36">
          <h1 
            className="font-normal mx-auto"
            style={{
              width: 'clamp(300px, 90vw, 677px)',
              height: 'auto',
              fontFamily: 'Genoa, serif',
              fontWeight: 400,
              fontSize: 'clamp(28px, 5vw, 55px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: 'rgba(30, 30, 30, 1)',
              whiteSpace: 'nowrap'
            }}
          >
            SELECT A PAYMENT METHOD
          </h1>
        </div>

        {/* Payment Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 lg:gap-64 max-w-7xl mx-auto">
          {/* ACH Payment Button */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => handlePaymentMethod('ach')}
              className="transition-all duration-200 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
              style={{
                width: 'clamp(280px, 80vw, 488px)',
                height: 'clamp(60px, 12vw, 80px)',
                borderRadius: '6px',
                paddingTop: 'clamp(12px, 2vw, 16px)',
                paddingRight: 'clamp(20px, 4vw, 36px)',
                paddingBottom: 'clamp(12px, 2vw, 16px)',
                paddingLeft: 'clamp(20px, 4vw, 36px)',
                background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                gap: '10px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(18px, 3vw, 32px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: 'rgba(255, 255, 255, 1)',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              Continue to Ach Payment
            </button>
          </div>

          {/* Credit Card Payment Button */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => handlePaymentMethod('credit-card')}
              className="transition-all duration-200 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 mb-3"
              style={{
                width: 'clamp(300px, 85vw, 580px)',
                height: 'clamp(60px, 12vw, 80px)',
                borderRadius: '6px',
                paddingTop: 'clamp(12px, 2vw, 16px)',
                paddingRight: 'clamp(20px, 4vw, 36px)',
                paddingBottom: 'clamp(12px, 2vw, 16px)',
                paddingLeft: 'clamp(20px, 4vw, 36px)',
                background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                gap: '10px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(18px, 3vw, 32px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: 'rgba(255, 255, 255, 1)',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              Continue to Credit Card Payment
            </button>
            
            {/* Processing Fee Notice */}
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base text-center max-w-xs px-2">
              Credit cards incur a 2.5% processing fee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSelection;