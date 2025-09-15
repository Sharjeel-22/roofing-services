import HeroSection from "@/components/hero-section";
import { ImageOnTop } from "@/components/image-on-top";
import { Features } from "@/components/features";
import { features, roofingHeading, roofingParagraph } from "./constants";
import TestimonialsSection from "@/components/testimonials-section";

export default function Careers() {
  return (
    <main>
      <HeroSection
        backgroundImage="/solar-hero-image.svg"
        badgeText="STRONG. SUSTAINABLE. SMART."
        title="Take Control of Your Power"
        description="Partnering with the nation’s leading manufacturers, Smarter Roof Inc. combines advanced solar and roofing technology to deliver energy solutions that are reliable, efficient, and built to last."
        buttonText="Get a Free Solar Estimate"
      />
      <ImageOnTop
        title="Solar That Pays Off"
        description="While other companies may overpromise and underdeliver, Smarter Roof Inc. gives you confidence and peace of mind. Choosing solar with us means making a smart, lasting investment in your future. Backed by advanced technology and expert installation, our team does it right the first time—so you can rest easy knowing your home is protected and powered for decades to come."
        buttonText="Get a quote"
        primaryImage="/be-financially-free.svg"
        secondaryImage="/redefine-whats-possible.svg"
      />
      <Features
        features={features}
        heading={roofingHeading}
        paragraph={roofingParagraph}
      />
      <TestimonialsSection/>
    </main>
  );
}
