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
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        width: '100%',
        maxWidth: '1442px',
        height: '740px',
        margin: '0 auto',
        paddingTop: '99px',
        paddingRight: '156px',
        paddingBottom: '99px',
        paddingLeft: '156px',
        opacity: 1,
        // Add a placeholder background image - replace with your actual image URL
        backgroundImage: `url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header - Positioned at top */}
        <h2 
          className="text-white text-center mb-16 flex-shrink-0"
          style={{
            fontFamily: 'Genoa, serif',
            fontWeight: 400,
            fontSize: 'clamp(32px, 4.5vw, 55px)',
            lineHeight: '110%',
            letterSpacing: '0%'
          }}
        >
          TRUSTED BY<br />HOMEOWNERS LIKE YOU
        </h2>

        {/* Testimonial Card - Centered in remaining space */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-[900px] mx-auto">
            <div 
              className="bg-white/95 backdrop-blur-sm relative shadow-2xl"
              style={{
                borderRadius: '20px',
                padding: '48px 80px',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:shadow-xl z-20"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:shadow-xl z-20"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>

              {/* Content */}
              <div className="text-center">
                <h3 
                  className="text-gray-900 mb-6"
                  style={{
                    fontFamily: 'Geologica, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(20px, 2.8vw, 32px)',
                    lineHeight: '120%',
                    letterSpacing: '0%'
                  }}
                >
                  {currentTestimonial.title}
                </h3>

                <blockquote 
                  className="text-gray-700 mb-8"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(16px, 2.2vw, 24px)',
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    fontStyle: 'italic',
                    maxWidth: '700px',
                    margin: '0 auto 32px auto'
                  }}
                >
                  "{currentTestimonial.quote}"
                </blockquote>

                <div className="flex flex-col items-center gap-4">
                  <p 
                    className="text-gray-900"
                    style={{
                      fontFamily: 'Geologica, sans-serif',
                      fontWeight: 600,
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      lineHeight: '120%',
                      letterSpacing: '0%'
                    }}
                  >
                    {currentTestimonial.author}
                  </p>

                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-6 h-6 transition-colors duration-200 ${
                          star <= currentTestimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators - Positioned at bottom */}
        <div className="flex justify-center gap-3 mt-12 flex-shrink-0">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 ${
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