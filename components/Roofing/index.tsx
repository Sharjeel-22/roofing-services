import { Features } from "../features";
import { RoofingStory } from "./components/roofing-story";
import { ImageOnTop } from "@/components/image-on-top";
import { features, roofingHeading, roofingParagraph } from "./constants";
import HeroSection from "@/components/hero-section";

export default function Careers() {
  return (
    <main>
      <HeroSection
        backgroundImage="/roofing-hero-image.svg"
        badgeText="STRONG. SUSTAINABLE. SMART."
        title="Home Improvement, Reinvented With Smarter Roofing"
        description="Your roof is more than protection — it’s peace of mind. At Smarter Roof Inc., we deliver durable, stylish, and energy-smart roofing solutions backed by certified expertise and a customer-first experience you’ll never forget."
        buttonText="Get a Free Roof Estimate"
      />
      <ImageOnTop
        title="Invest in Your Future"
        description="Most roofers make promises they can’t keep. At Smarter Roof Inc., we’re raising the standard with a collaborative, service-first approach that puts you at the center. We lead with kindness, transparency, and consistent communication — because your home deserves more than just a roof. It deserves a partner who cares as much as you do."
        buttonText="Get a quote"
        primaryImage="/be-financially-free.svg"
        secondaryImage="/redefine-whats-possible.svg"
      />
      <Features
        features={features}
        heading={roofingHeading}
        paragraph={roofingParagraph}
      />
      <RoofingStory />
    </main>
  );
}
