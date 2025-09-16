"use client"

import { useState } from "react"

const Estimate = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    primaryPhone: "",
    secondaryPhone: "",
    streetAddress: "",
    city: "",
    stateProvince: "",
    zipPostalCode: "",
    services: "",
    howDidYouHear: "",
    projectDetails: "",
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: any) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }))
  }

  const handleSubmit = () => {
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms of usage and privacy policy.")
      return
    }

    setIsSubmitting(true)
    console.log("Form submitted:", formData)

    setTimeout(() => {
      setIsSubmitting(false)
      alert("Thank you for your message! We'll get back to you soon.")
      setFormData({
        fullName: "",
        email: "",
        primaryPhone: "",
        secondaryPhone: "",
        streetAddress: "",
        city: "",
        stateProvince: "",
        zipPostalCode: "",
        services: "",
        howDidYouHear: "",
        projectDetails: "",
        agreeToTerms: false,
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get Your Free Roof & Solar Assessment Today</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Your home deserves the smartest protection. Our experts will provide a no-obligation roofing or solar assessment, so you can feel confident you’re making the right choice — with the right team.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name*</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Ali"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Osama"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Phone</label>
                    <input
                      type="tel"
                      name="primaryPhone"
                      value={formData.primaryPhone}
                      onChange={handleInputChange}
                      placeholder="osamal007@gmail.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Phone</label>
                    <input
                      type="tel"
                      name="secondaryPhone"
                      value={formData.secondaryPhone}
                      onChange={handleInputChange}
                      placeholder="Osama"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    placeholder="osamal007@gmail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="osamal007@gmail.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State/Province</label>
                    <input
                      type="text"
                      name="stateProvince"
                      value={formData.stateProvince}
                      onChange={handleInputChange}
                      placeholder="Osama"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">ZIP / Postal Code</label>
                  <input
                    type="text"
                    name="zipPostalCode"
                    value={formData.zipPostalCode}
                    onChange={handleInputChange}
                    placeholder="osamal007@gmail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Services/How Can We Help?*</label>
                    <input
                      type="text"
                      name="services"
                      value={formData.services}
                      onChange={handleInputChange}
                      placeholder="osamal007@gmail.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">How Did You Hear About Us?*</label>
                    <input
                      type="text"
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleInputChange}
                      placeholder="Osama"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tell Us About Your Project*</label>
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Add Text"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                  />
                </div>

                <div className="mb-6">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-600">
                      By submitting this form, you consent to receive promotional and account-related text messages
                      and/or calls from Smarter Roof Inc..
                      <br />
                      By checking the box, you:
                      <br />• Agree to receive automated promotional text messages and/or calls sent via an autodialer.
                      <br />• Confirm you have read and agree to our [Terms of Use] and [Privacy Policy].
                    </span>
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Envelope Visual */}
              <div className="bg-gradient-to-b to-white rounded-lg p-8 flex justify-center items-center min-h-[600px] sticky top-8">
                <img
                  src="/envelope-box.png"
                  alt="Contact envelope illustration"
                  className="w-80 h-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Estimate;
