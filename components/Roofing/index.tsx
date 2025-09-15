import { Features } from "../features";
import { RoofingStory } from "./components/roofing-story";
import { RoofingFuture } from "./components/roofing-future";
import { features, roofingHeading, roofingParagraph } from "./constants";

export default function Careers() {
  return (
    <main>
      <RoofingFuture 
       title="Invest in Your Future"
        description="Most roofers make promises they can’t keep. At Smarter Roof Inc., we’re raising the standard with a collaborative, service-first approach..."
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
  )
}
