import { CareersHero } from "./components/careers-hero"
import { CareersFeatures } from "./components/careers-features"
import { CareersStory } from "./components/careers-story"
import { CareersProcess } from "./components/careers-process"
import { CareersForm } from "./components/careers-form"

export default function Careers() {
  return (

      <main>
        <CareersHero />
        <CareersFeatures />
        <CareersStory />
        <CareersProcess />
        <CareersForm />
      </main>
  )
}
