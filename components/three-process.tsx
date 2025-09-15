"use client"

import { ProcessStep } from "./process-step"

type Step = {
  title: string
  description: string
}

interface ThreeProcessProps {
  title: string
  description?: string
  steps: Step[]
}

export function ThreeProcess({ title, description, steps }: ThreeProcessProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
        { description && <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            {description}
          </p>}
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}
