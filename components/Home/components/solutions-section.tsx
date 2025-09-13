import { Button } from "@/components/ui/button"

export default function SolutionsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <p className="text-sm text-gray-500 mb-2 tracking-wide">OUR SERVICES</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              SMART SOLUTIONS FOR EVERY ROOF
            </h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-gray-600 text-lg leading-relaxed">
              From premium roofing installations to solar innovations and exterior upgrades, Smarter Roof Inc. delivers
              industry-leading craftsmanship, certified expertise, and lasting protection for your home.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Roofing Card */}
          <div className="relative h-96 rounded-2xl overflow-hidden group">
            <img
              src="/metal-roof-with-sunlight.jpg"
              alt="Modern metal roofing with sunlight"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-sm font-medium mb-2 tracking-wide">DURABLE, STYLISH</p>
              <h3 className="text-white text-4xl font-bold mb-4">Roofing</h3>
              <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                Discover your Dream House
              </Button>
            </div>
          </div>

          {/* Solar Card */}
          <div className="relative h-96 rounded-2xl overflow-hidden group">
            <img
              src="/solar-panels-city-skyline.jpg"
              alt="Solar panels with city skyline"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-sm font-medium mb-2 tracking-wide">CLEAN, ROOF-INTEGRATED</p>
              <h3 className="text-white text-4xl font-bold mb-4">Solar</h3>
              <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                Learn more about Solar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
