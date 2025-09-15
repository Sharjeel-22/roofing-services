import { CareersHero } from "./components/careers-hero"
import { Features } from "../features"
import { CareersStory } from "./components/careers-story"
import { CareersProcess } from "./components/careers-process"
import { CareersForm } from "./components/careers-form"
import { careersHeading, careersParagraph, features } from "./constants"
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
      <CareersProcess />
      <CareersForm />
    </main>
  )
}
