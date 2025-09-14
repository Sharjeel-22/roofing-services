import { Features } from "../features";
import { RoofingStory } from "./components/roofing-story";
import { features, roofingHeading, roofingParagraph } from "./constants";

export default function Careers() {
  return (
    <main>
      <Features
        features={features}
        heading={roofingHeading}
        paragraph={roofingParagraph}
      />
      <RoofingStory />
    </main>
  )
}
