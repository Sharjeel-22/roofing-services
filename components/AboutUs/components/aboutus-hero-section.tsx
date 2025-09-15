export default function AboutHeroSection() {
    return (
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <h1 
            className="mb-8 leading-tight"
            style={{
              fontFamily: 'Geologica, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(32px, 6vw, 48px)',
              lineHeight: '1.0',
              letterSpacing: '0px',
              color: 'rgba(30, 30, 30, 1)',
              textAlign: 'center',
              opacity: 1
            }}
          >
            Smarter Roof Inc. is your trusted,<br />
            forward-thinking partner in roofing and<br />
            solar.
          </h1>
  
          {/* Description Text */}
          <p 
            className="mb-12 max-w-4xl mx-auto"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.5',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle',
              color: 'rgba(82, 82, 69, 1)',
              opacity: 1
            }}
          >
            We bring security, comfort, and peace of mind to homeowners with solutions designed for your budget and goals.
            Backed by white-glove service and seamless professional installation, we make every project smarter — and built to
            last.
          </p>
  
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              className="font-medium text-white transition-all duration-300 hover:opacity-90 transform hover:scale-105"
              style={{
                width: '116px',
                height: '40px',
                gap: '5px',
                opacity: 1,
                borderRadius: '20px',
                paddingTop: '8px',
                paddingRight: '30px',
                paddingBottom: '8px',
                paddingLeft: '30px',
                background: 'rgba(30, 30, 30, 1)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px'
              }}
            >
              Signup
            </button>
            
            <button
              className="font-medium text-white transition-all duration-300 hover:opacity-90 transform hover:scale-105"
              style={{
                width: '149px',
                height: '40px',
                gap: '5px',
                opacity: 1,
                borderRadius: '20px',
                paddingTop: '8px',
                paddingRight: '30px',
                paddingBottom: '8px',
                paddingLeft: '30px',
                background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px'
              }}
            >
              Contact Us
            </button>
          </div>

          {/* Solar Panel Image */}
          <div className="w-full flex justify-center mb-16">
            <img 
              src="/HeroImageWrapper.png" 
              alt="Solar panels installed on residential roof with blue sky background"
              style={{
                width: '1058px',
                height: '701px',
                opacity: 1,
                borderRadius: '32px',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Features Section - 3 Rows, 2 Cards Each */}
          <div className="w-full max-w-6xl mx-auto space-y-8 mb-16">
            
            {/* First Row: Text Card + Image Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Text Card */}
              <div className="flex flex-col justify-center p-8 text-left">
                <h2 
                  className="mb-4"
                  style={{
                    width: '501px',
                    height: '33px',
                    opacity: 1,
                    fontFamily: 'Geologica, sans-serif',
                    fontWeight: 700,
                    fontSize: '26px',
                    lineHeight: '1.0',
                    letterSpacing: '0px',
                    color: 'rgba(30, 30, 30, 1)'
                  }}
                >
                  Customer Promise
                </h2>
                <p 
                  style={{
                    width: '501px',
                    height: '84px',
                    opacity: 1,
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 300,
                    fontSize: '14px',
                    lineHeight: '1.0',
                    letterSpacing: '0px',
                    color: 'rgba(82, 82, 69, 1)'
                  }}
                >
                  At Smarter Roof Inc, we don't want your experience to be just "good." We 
                  want it to be the best experience you've ever had with any company. 
                  With locations across the country, we're proud to serve a growing 
                  number of communities with care, consistency, and excellence.
                </p>
              </div>
              
              {/* Image Card */}
              <div className="rounded-3xl overflow-hidden">
                <img 
                  src="/AboutTopRightContentMainWrapper.png" 
                  alt="Construction workers reviewing plans on a rooftop"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Second Row: Image Card + Text Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Card */}
              <div className="rounded-3xl overflow-hidden">
                <img 
                  src="/BottomLeftContentMainWrapper.png" 
                  alt="Worker installing solar panels on roof"
                  className="w-full h-80 object-cover"
                />
              </div>
              
              {/* Text Card */}
              <div className="flex flex-col justify-center p-8 text-left">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Backed by the Best</h2>
                <p 
                  style={{
                    width: '501px',
                    height: '84px',
                    opacity: 1,
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 300,
                    fontSize: '14px',
                    lineHeight: '1.0',
                    letterSpacing: '0px',
                    color: 'rgba(82, 82, 69, 1)'
                  }}
                >
                  Every product we install is one we would use on our own homes. By 
                  choosing only the best materials and doing the job the right way—
                  always—we ensure your investment is secure for years to come.
                </p>
              </div>
            </div>

            {/* Third Row: Text Card + Image Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Text Card */}
              <div className="flex flex-col justify-center p-8 text-left">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Team, Our Culture</h2>
                <p 
                  style={{
                    width: '501px',
                    height: '84px',
                    opacity: 1,
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 300,
                    fontSize: '14px',
                    lineHeight: '1.0',
                    letterSpacing: '0px',
                    color: 'rgba(82, 82, 69, 1)'
                  }}
                >
                  We see our customers as discerning homeowners who deserve smarter 
                  ways to protect and improve their homes. Roofing and solar are major 
                  decisions, and our team approaches every project with positivity, 
                  humility, and a relentless drive to deliver above expectations.
                </p>
              </div>
              
              {/* Image Card */}
              <div className="rounded-3xl overflow-hidden">
                <img 
                  src="/AboutLastRightContentMainWrapper.png" 
                  alt="Professional team member in office setting"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* First Big Image Section */}
          <div className="w-full flex justify-center mb-16">
            <img 
              src="/AboutRoofingMainContent.png" 
              alt="Large showcase image 1"
              style={{
                width: '1058px',
                height: '701px',
                opacity: 1,
                borderRadius: '32px',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Second Big Image Section */}
          <div className="w-full flex justify-center">
            <img 
              src="/AboutPersonsRoofingContent.png" 
              alt="Large showcase image 2"
              style={{
                width: '1058px',
                height: '701px',
                opacity: 1,
                borderRadius: '32px',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </section>
    )
  }