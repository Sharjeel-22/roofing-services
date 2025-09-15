export default function ServicesSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* First Row: Image, Text, Image */}
        <div className="grid md:grid-cols-3 gap-8 items-center mb-16">
          {/* Card 1 - Image */}
          <div className="md:col-span-1">
            <img
              src="/HeroImage18.svg"
              alt="Workers installing solar panels on roof"
              style={{
                width: '451px',
                height: '286px'
              }}
              className="object-cover rounded-lg"
            />
          </div>
          
          {/* Card 2 - Text */}
          <div className="md:col-span-1 px-4">
            <h3 
              style={{
                fontFamily: 'Geologica, sans-serif',
                fontWeight: 600,
                fontSize: '26px',
                lineHeight: '110%',
                letterSpacing: '0%',
                color: 'rgba(30, 30, 30, 1)',
                opacity: 1
              }}
              className="mb-4"
            >
              Home Improvement, Improved
            </h3>
            <div 
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'justify',
                color: 'rgba(82, 82, 69, 1)',
                opacity: 1
              }}
            >
              <p className="mb-4">
                Smarter Roof Inc. exists to ensure your roofing project is the best experience you've ever had… ever.
              </p>
              <p>
                Other roofers leave their promises in the gutter, but we're taking the home renovation industry from a
                frustrating back-and-forth that leaves most customers dissatisfied, to a truly collaborative,
                service-focused experience. We lead with kindness, relatability, and a commitment to communication and
                care–because we care about your project as much as you do.
              </p>
            </div>
          </div>
          
          {/* Card 3 - Image */}
          <div className="md:col-span-1">
            <img
              src="/HeroImage19.svg"
              alt="Roofer working on steep roof"
              style={{
                width: '451px',
                height: '286px'
              }}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Second Row: Text, Image, Text */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Card 4 - Text */}
          <div className="md:col-span-1 px-4">
            <h3 
              style={{
                fontFamily: 'Geologica, sans-serif',
                fontWeight: 600,
                fontSize: '26px',
                lineHeight: '110%',
                letterSpacing: '0%',
                color: 'rgba(30, 30, 30, 1)',
                opacity: 1
              }}
              className="mb-4"
            >
              Raising the Roof
            </h3>
            <div 
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'justify',
                color: 'rgba(82, 82, 69, 1)',
                opacity: 1
              }}
            >
              <p className="mb-4">
                At Smarter Roof Inc. we transform homes, starting from the top down, with our industry-leading, innovative
                approach to roofing.
              </p>
              <p>
                We help homeowners take back ownership of their power and achieve a greater sense of stability and
                comfort. We're not just transforming homes–we're transforming lives, one shingle and solar panel at a
                time, with the smartest way to get roofing and solar under the sun.
              </p>
            </div>
          </div>
          
          {/* Card 5 - Image */}
          <div className="md:col-span-1">
            <img
              src="/HeroImage20.png"
              alt="Workers installing roofing on commercial building"
              style={{
                width: '451px',
                height: '286px'
              }}
              className="object-cover rounded-lg"
            />
          </div>
          
          {/* Card 6 - Text */}
          <div className="md:col-span-1 px-4">
            <h3 
              style={{
                fontFamily: 'Geologica, sans-serif',
                fontWeight: 600,
                fontSize: '26px',
                lineHeight: '110%',
                letterSpacing: '0%',
                color: 'rgba(30, 30, 30, 1)',
                opacity: 1
              }}
              className="mb-4"
            >
              We've Got You Covered
            </h3>
            <div 
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'justify',
                color: 'rgba(82, 82, 69, 1)',
                opacity: 1
              }}
            >
              <p className="mb-4">
                Where other companies might take you on an emotional solar coaster, we help give our customers a sense
                of security and peace of mind knowing that they are making a smart investment in their futures.
              </p>
              <p>
                We're backed by the best manufacturers in the US, and we use the latest in solar and roofing technologies.
                Our team of roofing visionaries do it the right way–always–so you can rest easy knowing that we've got
                your roof covered.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}