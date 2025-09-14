
import { Feature } from "@/types/Types"
import { FeatureCard } from "./feature-card"

export function Features(props: {
  features: Feature[]
  heading: string
  paragraph: string
}) {
  const { features, heading, paragraph } = props

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 max-w-xl justify-self-center">{heading}</h2>
          <p className="text-lg text-muted-foreground max-w-[52rem] mx-auto">
            {paragraph}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 rounded-2xl p-10 border-2 border-[#EFF0F6]">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
