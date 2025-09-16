'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPolicyPage(): JSX.Element {
  // Shared styles as CSS-in-JS objects for consistency
  const headingStyles = {
    fontFamily: 'Geologica, sans-serif',
    fontWeight: 400,
    fontSize: 'clamp(28px, 4vw, 48px)',
    lineHeight: '100%',
    letterSpacing: '0px',
    color: 'rgba(30, 30, 30, 1)',
    opacity: 1,
  };

  const bodyTextStyles = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '0px',
    color: 'rgba(82, 82, 69, 1)',
    opacity: 1,
    verticalAlign: 'middle',
  };

  const subheadingStyles = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '1.0',
    letterSpacing: '0px',
    color: 'rgba(30, 30, 30, 1)',
  };

  const listItemStyles = {
    ...bodyTextStyles,
    listStyleType: 'disc',
    marginLeft: '1rem',
  };

  // Section data for better maintainability
  const personalDataItems = [
    'Name and contact data',
    'Email address', 
    'Phone number'
  ];

  const usageDataItems = [
    'IP address, browser type/version',
    'Pages visited, date/time of visit',
    'Device identifiers, diagnostic data'
  ];

  const dataUseItems = [
    'Process your requests and inquiries',
    'Notify you about changes or updates',
    'Provide customer support',
    'Monitor and analyze features',
    'Manage performance and improve functionality',
    'Detect, prevent, and address technical issues'
  ];

  const sharingItems = [
    'Comply with legal obligations',
    'Protect Smart Roof LLC\'s rights or property',
    'Prevent wrongdoing or ensure safety',
    'Ensure the safety of our users or the public',
    'Defend against legal liability'
  ];

  const smsTermsItems = [
    'Charges: Standard message/data rates may apply',
    'Opt-Out: Reply STOP at any time to unsubscribe',
    'Help: Reply HELP for assistance'
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 
          className="mb-8 text-center"
          style={{
            fontFamily: 'Main Text, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(35px, 4vw, 55px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: 'rgba(30, 30, 30, 1)',
            opacity: 1,
          }}
        >
          Privacy Policy
        </h1>

        {/* Introduction Card */}
        <Card className="mb-8 border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <h2 className="mb-6" style={headingStyles}>
              Introduction
            </h2>
            
            <div className="space-y-4">
              <p style={bodyTextStyles}>
                Effective Date: April 1, 2025
              </p>

              <p style={bodyTextStyles}>
                Smart Roof LLC (Company, "we," "our," or "us") operates the website https://smartroofinc.com/ (the "Service").
              </p>

              <p style={bodyTextStyles}>
                This Privacy Policy explains how we collect, use, and protect your personal data when you interact with our website and services. 
                By using our Service, you agree to the practices outlined here.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Information We Collect Card */}
        <Card className="mb-8 border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <h2 className="mb-6" style={headingStyles}>
              Information We Collect
            </h2>
            
            <p className="mb-6" style={{ ...bodyTextStyles, fontWeight: 400 }}>
              We collect different types of information to provide and improve our Service:
            </p>

            <div className="space-y-6">
              {/* Personal Data */}
              <div>
                <h3 className="mb-3" style={subheadingStyles}>
                  Personal Data
                </h3>
                <ul className="space-y-2">
                  {personalDataItems.map((item, index) => (
                    <li key={index} style={listItemStyles}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Usage Data */}
              <div>
                <h3 className="mb-3" style={subheadingStyles}>
                  Usage Data
                </h3>
                <ul className="space-y-2">
                  {usageDataItems.map((item, index) => (
                    <li key={index} style={listItemStyles}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cookies & Tracking */}
              <div>
                <h3 className="mb-3" style={subheadingStyles}>
                  Cookies & Tracking
                </h3>
                <p style={bodyTextStyles}>
                  We use cookies and similar technologies to remember preferences, enhance security, and analyze performance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Your Data Card */}
        <Card className="mb-8 border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <h2 className="mb-6" style={headingStyles}>
              How We Use Your Data
            </h2>
            
            <p className="mb-4" style={{ ...bodyTextStyles, fontWeight: 400 }}>
              Your information may be used to:
            </p>

            <ul className="space-y-2">
              {dataUseItems.map((item, index) => (
                <li key={index} style={listItemStyles}>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Data Transfers Card */}
        <Card className="mb-8 border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <h2 className="mb-6" style={headingStyles}>
              Data Transfers
            </h2>
            
            <p style={bodyTextStyles}>
              Your data may be transferred to and stored in the United States, where privacy laws may differ from your region. By submitting 
              data, you consent to this transfer. We take all reasonable steps to ensure your data is handled securely.
            </p>
          </CardContent>
        </Card>

        {/* Sharing of Data Card */}
        <Card className="mb-8 border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <h2 className="mb-6" style={headingStyles}>
              Sharing of Data
            </h2>
            
            <p className="mb-4" style={{ ...bodyTextStyles, fontWeight: 400 }}>
              We may disclose data only when necessary to:
            </p>

            <ul className="space-y-2">
              {sharingItems.map((item, index) => (
                <li key={index} style={listItemStyles}>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Data Security Card */}
        <Card className="mb-8 border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <h2 className="mb-6" style={headingStyles}>
              Data Security
            </h2>
            
            <p style={bodyTextStyles}>
              We use commercially acceptable methods to protect your personal information. However, no method of online storage or 
              transmission is 100% secure.
            </p>
          </CardContent>
        </Card>

        {/* Service Providers Card */}
        <Card className="mb-8 border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <h2 className="mb-6" style={headingStyles}>
              Service Providers
            </h2>
            
            <p style={bodyTextStyles}>
              We may employ trusted third parties to support our operations (e.g., analytics, customer communication). These providers have 
              access to personal data solely for tasks on our behalf and are bound not to disclose or use it otherwise.
            </p>
          </CardContent>
        </Card>

        {/* SMS Terms & Conditions Card */}
        <Card className="mb-8 border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <h2 className="mb-6" style={headingStyles}>
              SMS Terms & Conditions
            </h2>
            
            <div className="space-y-4">
              <p style={bodyTextStyles}>
                By opting in, you consent to receive SMS updates about scheduling, appointments, service updates, billing, and account 
                information.
              </p>

              <div>
                <h3 className="mb-3" style={subheadingStyles}>
                  Terms of Service
                </h3>
                <ul className="space-y-2">
                  {smsTermsItems.map((item, index) => (
                    <li key={index} style={listItemStyles}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p style={bodyTextStyles}>
                Consent is not required as a condition of purchase.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Card */}
        <Card className="mb-8 border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <h2 className="mb-6" style={headingStyles}>
              Analytics
            </h2>
            
            <p style={bodyTextStyles}>
              We use Google Analytics to track and monitor site usage. You can opt out via the Google Analytics Opt-Out Add-on. For details, 
              see Google's Privacy Policy.
            </p>
          </CardContent>
        </Card>

        {/* External Links Card */}
        <Card className="mb-8 border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <h2 className="mb-6" style={headingStyles}>
              External Links
            </h2>
            
            <p style={bodyTextStyles}>
              We do not knowingly collect personal data from children under 18. If you believe your child has provided information, please 
              contact us immediately.
            </p>
          </CardContent>
        </Card>

        {/* Policy Updates Card */}
        <Card className="mb-8 border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <h2 className="mb-6" style={headingStyles}>
              Policy Updates
            </h2>
            
            <p style={bodyTextStyles}>
              We may update this Privacy Policy from time to time. Any changes will be posted here, with the effective date updated above. 
              Significant changes will be communicated by email or website notice.
            </p>
          </CardContent>
        </Card>

        {/* Contact Us Card */}
        <Card className="mb-12 border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <h2 className="mb-6" style={headingStyles}>
              Contact Us
            </h2>
            
            <div className="space-y-4">
              <p style={{ ...bodyTextStyles, fontWeight: 400 }}>
                For questions about this Privacy Policy:
              </p>

              <p style={bodyTextStyles}>
                • Email: info@smartroofinc.com
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="default"
            size="default"
            className="font-medium text-white transition-all duration-300 hover:opacity-90 transform hover:scale-105 rounded-[20px] px-[30px] py-2 h-10 w-[116px]"
            style={{
              background: 'rgba(30, 30, 30, 1)',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px'
            }}
          >
            Signup
          </Button>
          
          <Button
            variant="default"
            size="default"
            className="font-medium text-white transition-all duration-300 hover:opacity-90 transform hover:scale-105 rounded-[20px] px-[30px] py-2 h-10 w-[149px]"
            style={{
              background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px'
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}