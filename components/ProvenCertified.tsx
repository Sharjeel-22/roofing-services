import { Card } from "@/components/ui/card"

interface ProvenCertifiedProps {
  title?: string
  description?: string
  stats?: Array<{
    title: string
    value: string
    description: string
  }>
}

export function ProvenCertified({
  title = "Proven. Certified. Guaranteed.",
  description = "Our reputation is built on customer trust, proven by hundreds of positive reviews, and reinforced by the nation's largest roofing manufacturer. With industry-leading warranties and top-tier service, Smarter Roof Inc. is recognized as one of the leading roofing contractors in Mt. Laurel, NJ, and Wilmington, DE.",
  stats = [
    {
      title: "WARRANTY",
      value: "",
      description: "Up to 50 years — the best protection in the industry",
    },
    {
      title: "1,000+",
      value: "",
      description: "Jobs completed each year",
    },
    {
      title: "1 GOAL",
      value: "",
      description: "100% customer satisfaction",
    },
    {
      title: "TOP 1%",
      value: "",
      description: "Roofing contractors nationwide (Google & HomeAdvisor reviews)",
    },
    {
      title: "500+",
      value: "",
      description: "Verified reviews from satisfied homeowners",
    },
  ],
}: ProvenCertifiedProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">{title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto text-pretty">{description}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 bg-white border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-sky-500 mb-4">{stat.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{stat.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
