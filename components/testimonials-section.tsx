"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    title: "A Partner You Can Trust And be Proud Of",
    quote:
      "The crew worked hard and was diligent about their work. Professional, courteous, and careful. Can't recommend this team enough! If you are considering a solar energy solution, please consider Smart Roof to take care of you.",
    author: "Kende Attila",
    rating: 4,
  },
  {
    title: "Outstanding Service and Quality",
    quote:
      "Smarter Roof Inc. exceeded our expectations with their professional installation and attention to detail. The team was punctual, clean, and delivered exactly what they promised. Our new roof looks amazing!",
    author: "Sarah Johnson",
    rating: 5,
  },
  {
    title: "Reliable and Professional Team",
    quote:
      "From the initial consultation to the final installation, the entire process was smooth and professional. The quality of work is exceptional and we couldn't be happier with our new solar roof system.",
    author: "Michael Chen",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/aerial-houses-with-solar-panels.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 text-balance">
          TRUSTED BY
          <br />
          HOMEOWNERS LIKE YOU
        </h2>

        {/* Testimonial Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Content */}
          <div className="px-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{currentTestimonial.title}</h3>

            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
              "{currentTestimonial.quote}"
            </blockquote>

            <div className="flex flex-col items-center gap-4">
              <p className="text-xl font-semibold text-gray-900">{currentTestimonial.author}</p>

              {/* Star Rating */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 ${
                      star <= currentTestimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
