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
    <footer className="bg-white">
      {/* Contact Form Section */}
      <div className="relative bg-gradient-to-r from-blue-400 to-blue-600 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
        
        <div className="relative z-10 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Stop exploring, and<br />
              speak with an expert!
            </h2>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="flex-1 px-6 py-4 rounded-lg bg-white/20 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                className="flex-1 px-6 py-4 rounded-lg bg-white/20 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
              />
              <button
                onClick={handleSubmit}
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-6 bg-white rounded-sm"></div>
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900">SMARTER</div>
                  <div className="text-sm text-gray-600">ROOF INC</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Smarter Roof Inc. — Protecting homes with smarter roofing and solar solutions.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-200 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-600 text-white hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-200 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Pages */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-blue-600">PAGES</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#roofing" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Roofing
                  </a>
                </li>
                <li>
                  <a href="#solar" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Solar
                  </a>
                </li>
                <li>
                  <a href="#career" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#payment" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Payment
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-blue-600">OUR LOCATION</h3>
              <div className="text-gray-600 mb-8">
                <p>11311 Shaker Blvd, Ste 204 PMB</p>
                <p>1015 Cleveland, OH 44120</p>
              </div>

              <h3 className="font-bold text-lg mb-4 text-blue-600">CONTACT NUMBER</h3>
              <a 
                href="tel:+18446762783" 
                className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
              >
                +1 844-676-2783
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © Copyright 2025, All Rights Reserved .
          </p>
          <a href="#privacy" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}