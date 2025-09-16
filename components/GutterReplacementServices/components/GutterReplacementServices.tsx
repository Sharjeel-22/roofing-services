'use client';

import React from 'react';

const GutterReplacementServices: React.FC = () => {
  const handleEstimate = () => {
    console.log('Get estimate clicked');
    // Handle navigation or form submission
  };

  return (
    <section className="w-full py-4 sm:py-8 lg:py-20 px-2 sm:px-4 lg:px-8 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="text-center mb-6">
          <span 
            className="inline-block text-sm font-medium"
            style={{
              background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Trusted Gutter Installers
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 
            className="font-normal mx-auto mb-6"
            style={{
              width: 'clamp(300px, 90vw, 800px)',
              height: 'auto',
              fontFamily: 'Genoa, serif',
              fontWeight: 400,
              fontSize: 'clamp(32px, 6vw, 64px)',
              lineHeight: '110%',
              letterSpacing: '0%',
              color: 'rgba(30, 30, 30, 1)',
            }}
          >
            The Smart Choice for Gutters
          </h1>

          {/* Description */}
          <p 
            className="mx-auto mb-8 text-gray-700 max-w-4xl px-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              lineHeight: '150%',
              textAlign: 'center'
            }}
          >
            At Smarter Roof Inc., we take gutters as seriously as we take roofing. Our expert installers deliver unmatched 
            craftsmanship using only the highest-quality products. Combined with attentive customer service, every gutter 
            project is handled with care, precision, and a commitment to long-lasting protection for your home.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleEstimate}
            className="transition-all duration-200 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            style={{
              width: 'clamp(250px, 60vw, 300px)',
              height: 'clamp(50px, 10vw, 60px)',
              borderRadius: '6px',
              background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
              gap: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: 'rgba(255, 255, 255, 1)',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              border: 'none'
            }}
          >
            Get an Estimate
          </button>
        </div>

        {/* Image Section */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="max-w-5xl mx-auto">
            <img 
              src="/OfficesSection.png" // Replace with your actual image filename
              alt="Gutter installation showcase"
              className="w-full h-auto rounded-lg"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </div>
        </div>
        {/* Image Section */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="max-w-5xl mx-auto">
            <img 
              src="/FrameServices.png" // Replace with your actual image filename
              alt="Gutter installation showcase"
              className="w-full h-auto rounded-lg"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </div>
        </div>
        {/* Image Section */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="max-w-5xl mx-auto">
            <img 
              src="/6.png" // Replace with your actual image filename
              alt="Gutter installation showcase"
              className="w-full h-auto rounded-lg"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </div>
        </div>
        {/* Image Section */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="max-w-5xl mx-auto">
            <img 
              src="/ClientsLogoSection.png" // Replace with your actual image filename
              alt="Gutter installation showcase"
              className="w-full h-auto rounded-lg"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GutterReplacementServices;