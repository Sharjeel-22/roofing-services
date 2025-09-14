import { FeatureCard } from "./feature-card"

export function CareersFeatures() {
  const features = [
    {
      title: "Be Motivated to Work",
      description:
        "Step into a dynamic environment where your potential has no limits. At Smarter Roof Inc., every day is an opportunity to grow, thrive, and be inspired.",
      image: "/be-motivated.svg",
    },
    {
      title: "Be Financially Free",
      description:
        "Turn effort into abundance. We provide clear paths for financial growth, rewarding your dedication with real, lasting success.",
      image: "/be-financially-free.svg",
    },
    {
      title: "Redefine What's Possible",
      description:
        "Unlock new opportunities and shape a future you never thought possible. With Smarter Roof Inc., you have the tools to expand your success and achieve more.",
      image: "/redefine-whats-possible.svg",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Grow With Smarter Roof Inc.</h2>
          <p className="text-lg text-muted-foreground max-w-[52rem] mx-auto">
            At Smarter Roof Inc., we're more than a workplace — we're a launchpad for growth. From professional
            development to financial freedom, we empower our team to thrive and redefine what's possible.
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
