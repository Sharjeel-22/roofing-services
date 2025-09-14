import { Features } from "../features";
import { features, roofingHeading, roofingParagraph } from "./constants";

export default function Careers() {
  return (
    <main>
      <Features
        features={features}
        heading={roofingHeading}
        paragraph={roofingParagraph}
      />

    </main>
  )
}
