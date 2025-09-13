import { Button } from "@/components/ui/button"

export default function RoofingSolarSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <p className="text-sm text-gray-500 mb-2 tracking-wide">OUR PROMISE</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              ROOFING & SOLAR, DESIGNED FOR YOUR HOME
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-gray-600 text-lg leading-relaxed flex-1">
              From precision roofing to solar-powered solutions, Smarter Roof Inc. delivers durability, style, and peace
              of mind—backed by certified expertise.
            </p>
            <img src="/worker-small-image.jpg" alt="Roofing worker" className="w-16 h-16 rounded-full object-cover" />
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Card - Pricing */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <img
              src="/roofing-installation-work.jpg"
              alt="Roofing installation work"
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Roofing Solutions Starting at $12k</h3>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Contact for details</Button>
          </div>

          {/* Center Card - Large Image */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/worker-installing-materials.jpg"
              alt="Worker installing roofing materials"
              className="w-full h-full object-cover min-h-80"
            />
          </div>

          {/* Right Card - Promise */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Big Protection Starts With Smarter Roof Inc.</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Certified materials. Expert installation. Warranties built to last.
            </p>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Discover Our Promise</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
