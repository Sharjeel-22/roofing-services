export default function ServicesSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Home Improvement Section */}
        <div className="grid md:grid-cols-3 gap-8 items-center mb-16">
          <div className="md:col-span-1">
            <img
              src="/solar-panel-installation-workers.jpg"
              alt="Workers installing solar panels on roof"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="md:col-span-1 px-4">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Home Improvement, Improved</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Smarter Roof Inc. exists to ensure your roofing project is the best experience you've ever had... ever.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm mt-4">
              Other roofers leave their promises in the gutter, but we're taking the home renovation industry from a
              frustrating back-and-forth that leaves most customers dissatisfied, to a truly collaborative,
              service-focused experience. We lead with kindness, relatability, and a commitment to communication and
              care—because we care about your project as much as you do.
            </p>
          </div>
          <div className="md:col-span-1">
            <img
              src="/roofer-on-steep-roof.jpg"
              alt="Roofer working on steep roof"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Bottom Two Column Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Raising the Roof */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Raising the Roof</h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              At Smarter Roof Inc. we transform homes, starting from the top down, with our industry-leading, innovative
              approach to roofing.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              We help homeowners take back ownership of their power and achieve a greater sense of stability and
              comfort. We're not just transforming homes—we're transforming lives, one shingle and solar panel at a
              time, with the smartest way to get roofing and solar under the sun.
            </p>
            <img
              src="/workers-on-commercial-roof.jpg"
              alt="Workers installing roofing on commercial building"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Right Column - We've Got You Covered */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">We've Got You Covered</h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              Where other companies might leave you with an emotional solar coaster, we help give our customers a sense
              of security and peace of mind knowing that they are making a smart investment in their futures.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We're backed by the best manufacturers in the US, and we use the latest in solar and roofing technologies.
              Our team of roofing visionaries do it the right way—always—so you can rest easy knowing that we've got
              your roof covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
