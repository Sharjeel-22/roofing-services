import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/roofer-working-on-roof-with-palm-tree-and-blue-sky.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="bg-white bg-opacity-95 rounded-lg p-8 max-w-2xl">
          <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            STRONG. SUSTAINABLE. SMART.
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            ROOFING THAT PROTECTS AND POWERS YOUR FUTURE
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            From durable roofing repairs to cutting-edge solar integration, we combine craftsmanship with innovation to
            keep your home secure and energy-efficient.
          </p>

          <Button className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-8 py-3 text-lg">
            Schedule My Roof Inspection
          </Button>
        </div>
      </div>
    </section>
  )
}
