import { ProcessStep } from "./process-step"

export function CareersProcess() {
  const steps = [
    {
      title: "Schedule a 15-Minute Call",
      description:
        "Every transformation begins with a conversation. Use the form below to book a quick 15-minute call and take the first step toward a new career path.",
    },
    {
      title: "Get Your Roadmap",
      description:
        "On the call, we'll walk you through a clear roadmap for joining Smarter Roof Inc. — showing you how to unlock new opportunities and accelerate your growth.",
    },
    {
      title: "Transform Your Future",
      description:
        "With your roadmap in hand, make the decision to join the Smarter Roof Inc. family — and start building a life of purpose, success, and freedom.",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Book a Call. Change Your Life.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}
