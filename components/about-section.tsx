export default function AboutSection() {
  const images = [
    "/solar-panels-on-red-tile-roof.jpg",
    "/metal-roofing-installation.png",
    "/roof-repair.png",
    "/solar-panel-installation-on-house.jpg",
    "/slate-roof-tiles.png",
    "/modern-house-solar-panels.png",
    "/roofing-materials-and-tools.jpg",
    "/residential-roof-with-shingles.jpg",
    "/clay-tile-roofing.jpg",
    "/metal-roof-installation.png",
    "/solar-panel-array.png",
    "/roof-inspection-with-ladder.jpg",
    "/asphalt-shingle-roof.jpg",
    "/green-roof-with-solar-panels.jpg",
    "/commercial-flat-roof.jpg",
    "/roof-maintenance-worker.jpg",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-blue-500 text-sm font-medium mb-4 uppercase tracking-wide">WHO WE ARE</div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              YOUR PARTNER IN PROTECTION & POWER
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              At Smarter Roof Inc., we're more than roofers — we're your trusted partner for smarter living.
              Specializing in roofing and solar solutions tailored to your home and budget, we deliver security,
              comfort, and long-term value. Our white-glove service, seamless installations, and forward-thinking
              approach ensure every project is built to last — and built for you.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3 transform rotate-6">
            {images.map((src, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Roofing work ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
