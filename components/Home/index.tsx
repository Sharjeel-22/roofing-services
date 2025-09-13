import HeroSection from "@/components/Home/components/hero-section"
import AboutSection from "@/components/Home/components/about-section"
import SolutionsSection from "@/components/Home/components/solutions-section"
import RoofingSolarSection from "@/components/Home/components/roofing-solar-section"
import CareersSection from "@/components/Home/components/careers-section"
import ServicesSection from "@/components/Home/components/services-section"
import TestimonialsSection from "@/components/Home/components/testimonials-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CareersSection />
      <ServicesSection />
      <SolutionsSection />
      <RoofingSolarSection />
      <TestimonialsSection />
    </main>
  )
}
