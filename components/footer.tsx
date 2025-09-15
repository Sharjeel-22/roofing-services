"use client"

import { useState } from "react"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: ""
  })

  const handleInputChange = (e:any) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <footer className="bg-white" style={{marginTop:'7rem'}}>
      {/* Contact Form Section - Updated with exact dimensions */}
      <div className="flex justify-center py-16 px-4">
        <div 
          className="relative bg-gradient-to-r from-blue-400 to-blue-600 overflow-hidden rounded-2xl shadow-2xl"
          style={{
            width: '1166px',
            height: '318px',
            maxWidth: '90vw'
          }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-1/2"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
            <div className="text-center max-w-4xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Stop exploring, and<br />
                speak with an expert!
              </h2>
              
              <div className="flex flex-col lg:flex-row gap-4 max-w-3xl mx-auto">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="flex-1 px-6 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/25"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="flex-1 px-6 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/25"
                />
                <button
                  onClick={handleSubmit}
                  className="px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-xl transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content - Updated with exact dimensions */}
      <div className="flex justify-center py-8 bg-gray-50">
        <div 
          className="bg-white rounded-2xl shadow-lg p-8"
          style={{
            width: '1166px',
            height: '250px',
            maxWidth: '90vw'
          }}
        >
          <div className="h-full flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
              
              {/* Company Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="/images/logo.png" 
                      alt="Smarter Roof Inc Logo" 
                      className="w-10 h-10 object-contain"
                    />
                    <div>
                      <div className="font-bold text-base text-gray-900">SMARTER</div>
                      <div className="text-xs text-gray-600">ROOF INC</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Smarter Roof Inc. — Protecting homes with smarter roofing and solar solutions.
                  </p>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gray-200 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                    style={{
                      background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)'
                    }}
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gray-200 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Pages */}
              <div>
                <h3 
                  className="font-semibold mb-4 uppercase tracking-wide"
                  style={{
                    background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '13px',
                    lineHeight: '18px',
                    letterSpacing: '1px',
                    display: 'inline-block'
                  }}
                >
                  PAGES
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="#about" 
                      className="text-gray-600 hover:text-white transition-all duration-200 text-sm px-3 py-1 rounded-md hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-300"
                      style={{
                        fontFamily: 'Poppins, sans-serif'
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#roofing" 
                      className="text-gray-600 hover:text-white transition-all duration-200 text-sm px-3 py-1 rounded-md hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-300"
                      style={{
                        fontFamily: 'Poppins, sans-serif'
                      }}
                    >
                      Roofing
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#solar" 
                      className="text-gray-600 hover:text-white transition-all duration-200 text-sm px-3 py-1 rounded-md hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-300"
                      style={{
                        fontFamily: 'Poppins, sans-serif'
                      }}
                    >
                      Solar
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#career" 
                      className="text-gray-600 hover:text-white transition-all duration-200 text-sm px-3 py-1 rounded-md hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-300"
                      style={{
                        fontFamily: 'Poppins, sans-serif'
                      }}
                    >
                      Career
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#payment" 
                      className="text-gray-600 hover:text-white transition-all duration-200 text-sm px-3 py-1 rounded-md hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-300"
                      style={{
                        fontFamily: 'Poppins, sans-serif'
                      }}
                    >
                      Payment
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 
                  className="font-semibold mb-4 uppercase tracking-wide"
                  style={{
                    background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '13px',
                    lineHeight: '18px',
                    letterSpacing: '1px'
                  }}
                >
                  OUR LOCATION
                </h3>
                <div className="text-gray-600 mb-4 text-sm">
                  <p>11311 Shaker Blvd, Ste 204 PMB</p>
                  <p>1015 Cleveland, OH 44120</p>
                </div>

                <h3 
                  className="font-semibold mb-2 uppercase tracking-wide"
                  style={{
                    background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '13px',
                    lineHeight: '18px',
                    letterSpacing: '1px'
                  }}
                >
                  CONTACT NUMBER
                </h3>
                <a 
                  href="tel:+18446762783" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm font-semibold"
                >
                  +1 844-676-2783
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-full mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-500 text-sm">
              © Copyright 2025, All Rights Reserved.
            </p>
            <a href="#privacy" className="text-gray-500 hover:text-blue-600 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}