'use client';

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation'; // ✅ For Next.js 13+ App Router

const OtherRoofingServices: React.FC = () => {
    const router = useRouter();

    const handleServiceClick = (serviceName: string) => {
        console.log(`${serviceName} service selected`);
        // You can add navigation or other logic here
        // router.push(`/services/${serviceName.toLowerCase().replace(/ /g, '-')}`);
    };

    const handleGetStarted = () => {
        console.log('Get Started clicked');
        // Add navigation logic here
        // router.push('/contact');
    };

    return (
        <section className="w-full py-4 sm:py-8 lg:py-16 px-2 sm:px-4 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-8 lg:mb-12 px-4">
                    <div
                        className="mx-auto"
                        style={{
                            width: 'min(935px, 100%)',
                            height: 'auto',
                            minHeight: '99px',
                            opacity: 1,
                            gap: '15px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '10px'
                        }}
                    >
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
                            Other Roofing Services
                        </h1>
                        <p className="text-gray-600 text-base sm:text-lg text-center px-2">
                            If it's part of your roof, we know it best.
                        </p>
                    </div>
                </div>

                {/* Main Content Section */}
                <div
                    className="flex flex-col lg:flex-row items-center mb-8 sm:mb-12 lg:mb-16 px-4 lg:px-0"
                    style={{
                        width: 'min(1077px, 100%)',
                        height: 'auto',
                        minHeight: '406px',
                        maxWidth: '100%',
                        opacity: 1,
                        gap: 'clamp(16px, 4vw, 36px)',
                        margin: '0 auto'
                    }}
                >
                    {/* Left Image */}
                    <div
                        className="relative overflow-hidden w-full lg:w-auto flex-shrink-0"
                        style={{
                            width: 'min(561px, 100%)',
                            height: 'clamp(250px, 50vw, 406px)',
                            maxWidth: '100%',
                            borderRadius: 'clamp(12px, 3vw, 32px)',
                        }}
                    >
                        <img
                            src="/business-woman-office.png"
                            alt="Professional businesswoman in modern office"
                            className="w-full h-full object-cover"
                            style={{
                                borderRadius: 'clamp(12px, 3vw, 32px)',
                            }}
                        />
                    </div>

                    {/* Right Content */}
                    <div
                        className="w-full lg:w-auto mt-6 lg:mt-0"
                        style={{
                            width: 'min(480px, 100%)',
                            height: 'auto',
                            minHeight: '267px',
                            maxWidth: '100%',
                            opacity: 1,
                            gap: 'clamp(12px, 3vw, 20px)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            padding: '0 10px'
                        }}
                    >
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center lg:text-left">
                            Do It Right
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-center lg:text-left">
                            We never ask our clients to track down extra contractors for
                            specialized work. Instead, Smarter Roof Inc. connects you
                            directly with the right experts for your project — ensuring
                            every step is seamless, coordinated, and done the right
                            way.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <button
                                onClick={handleGetStarted}
                                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-lg"
                                style={{
                                    background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                                }}
                            >
                                Get an Estimate
                            </button>
                        </div>
                    </div>
                </div>

                {/* Other Services Section */}
                <div className="text-center mb-6 sm:mb-8 px-4">
                    <div
                        className="mx-auto flex items-center justify-center"
                        style={{
                            width: 'min(677px, 100%)',
                            height: 'auto',
                            minHeight: '69px',
                            maxWidth: '100%',
                            opacity: 1,
                            padding: '10px'
                        }}
                    >
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center">
                            Other Services
                        </h3>
                    </div>
                </div>

                {/* Services Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4 overflow-x-auto">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center">
                        {/* Gutter Replacement Services */}
                        <button
                            onClick={() => handleServiceClick('Gutter Replacement Services')}
                            className="text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-lg text-center flex-shrink-0"
                            style={{
                                width: 'min(375px, 100%)',
                                height: 'clamp(80px, 15vw, 128px)',
                                maxWidth: '375px',
                                opacity: 1,
                                gap: '10px',
                                borderRadius: '6px',
                                paddingTop: 'clamp(12px, 3vw, 16px)',
                                paddingRight: 'clamp(20px, 5vw, 36px)',
                                paddingBottom: 'clamp(12px, 3vw, 16px)',
                                paddingLeft: 'clamp(20px, 5vw, 36px)',
                                background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 'clamp(12px, 2.5vw, 16px)',
                                cursor: 'pointer'

                            }}
                        >
                            <div>Gutter Replacement</div>
                            <div>Services</div>
                        </button>

                        {/* Door Replacement and Installation */}
                        <button
                            onClick={() => handleServiceClick('Door Replacement and Installation')}
                            className="text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-lg text-center flex-shrink-0"
                            style={{
                                width: 'min(375px, 100%)',
                                height: 'clamp(80px, 15vw, 128px)',
                                maxWidth: '375px',
                                opacity: 1,
                                gap: '10px',
                                borderRadius: '6px',
                                paddingTop: 'clamp(12px, 3vw, 16px)',
                                paddingRight: 'clamp(20px, 5vw, 36px)',
                                paddingBottom: 'clamp(12px, 3vw, 16px)',
                                paddingLeft: 'clamp(20px, 5vw, 36px)',
                                background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 'clamp(12px, 2.5vw, 16px)',
                                cursor: 'pointer'

                            }}
                        >
                            <div>Door Replacement</div>
                            <div>and Installation</div>
                        </button>

                        {/* Hail Damage Roof Repair */}
                        <button
                            onClick={() => handleServiceClick('Hail Damage Roof Repair')}
                            className="text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-lg text-center flex-shrink-0"
                            style={{
                                width: 'min(375px, 100%)',
                                height: 'clamp(80px, 15vw, 128px)',
                                maxWidth: '375px',
                                opacity: 1,
                                gap: '10px',
                                borderRadius: '6px',
                                paddingTop: 'clamp(12px, 3vw, 16px)',
                                paddingRight: 'clamp(20px, 5vw, 36px)',
                                paddingBottom: 'clamp(12px, 3vw, 16px)',
                                paddingLeft: 'clamp(20px, 5vw, 36px)',
                                background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 'clamp(12px, 2.5vw, 16px)',
                                cursor: 'pointer'

                            }}
                        >
                            <div>Hail Damage Roof</div>
                            <div>Repair</div>
                        </button>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default OtherRoofingServices;