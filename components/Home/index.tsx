import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/Home/components/about-section";
import SolutionsSection from "@/components/Home/components/solutions-section";
import RoofingSolarSection from "@/components/Home/components/roofing-solar-section";
import CareersSection from "@/components/Home/components/careers-section";
import ServicesSection from "@/components/Home/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <main>
      <HeroSection
        backgroundImage="/home-banner.svg"
        badgeText="STRONG. SUSTAINABLE. SMART."
        title="ROOFING THAT PROTECTS AND POWERS YOUR FUTURE"
        description="From durable roofing repairs to cutting-edge solar integration, we combine craftsmanship with innovation to keep your home secure and energy-efficient."
        buttonText="Schedule My Roof Inspection"
      />
      <AboutSection />
      <CareersSection />
      <ServicesSection />
      <SolutionsSection />
      <RoofingSolarSection />
      <TestimonialsSection />
    </main>
  );
}
