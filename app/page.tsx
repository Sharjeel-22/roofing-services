import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SolutionsSection from "@/components/solutions-section"
import RoofingSolarSection from "@/components/roofing-solar-section"
import CareersSection from "@/components/careers-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <CareersSection />
      <ServicesSection />
      <SolutionsSection />
      <RoofingSolarSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
