import { CareersHero } from "./components/careers-hero";
import { Features } from "../features";
import { CareersStory } from "./components/careers-story";
import { ThreeProcess } from "../three-process";
import { CareersForm } from "./components/careers-form";
import {
  careersHeading,
  careersParagraph,
  features,
  ProcessSteps,
} from "./constants";
export default function Careers() {
  return (
    <main>
      <CareersHero />
      <Features
        features={features}
        heading={careersHeading}
        paragraph={careersParagraph}
      />
      <CareersStory />
      <ThreeProcess
        title="Book a Call. Change Your Life."
        steps={ProcessSteps}
      />
      <CareersForm />
    </main>
  );
}
