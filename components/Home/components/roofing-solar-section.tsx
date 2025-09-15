import { Button } from "@/components/ui/button"

export default function RoofingSolarSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] px-4 sm:px-6 lg:px-8">
        {/* Vertical "BUILD ON TRUST" text */}
        <div 
          className="absolute hidden lg:block"
          style={{
            top: '0px',
            left: '45px',
            width: '200px',
            height: '13px',
            transform: 'rotate(90deg)',
            transformOrigin: 'left top'
          }}
        >
          <span 
            className="text-[8px] sm:text-[9px] lg:text-[10px] whitespace-nowrap"
            style={{
              fontFamily: 'Geologica, sans-serif',
              fontWeight: 400,
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block'
            }}
          >
            BUILD ON TRUST
          </span>
        </div>

        {/* Main heading */}
        <h1 
          className="absolute top-0 left-4 sm:left-8 lg:left-[62px] w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[686px]"
          style={{
            fontFamily: 'Genoa, serif',
            fontWeight: 400,
            fontSize: 'clamp(28px, 5vw, 55px)',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: 'rgba(30, 30, 30, 1)'
          }}
        >
          Roofing & Solar,<br />Designed for Your Home
        </h1>

        {/* Description with small image */}
        <div 
          className="absolute top-6 right-4 sm:right-8 lg:right-[100px] flex flex-col sm:flex-row items-start gap-2 sm:gap-4 max-w-[90%] sm:max-w-[600px]"
        >
          <img 
            src="SmallHeroImage2.svg" 
            alt="Worker" 
            className="w-16 h-12 sm:w-20 sm:h-14 lg:w-26 lg:h-16 rounded-[8px] sm:rounded-[10px] object-cover flex-shrink-0"
          />
          <p 
            className="text-xs sm:text-sm lg:text-lg xl:text-[20px] max-w-[250px] sm:max-w-[400px] lg:max-w-[498px]"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 300,
              lineHeight: '120%',
              letterSpacing: '0%',
              color: 'rgba(82, 82, 69, 1)'
            }}
          >
            From precision roofing to solar-powered solutions, Smarter Roof Inc. delivers durability, style, and peace of mind—backed by certified expertise.
          </p>
        </div>

        {/* Content Cards */}
        <div className="absolute top-[120px] sm:top-[130px] lg:top-[136px] left-0 w-full">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 sm:px-6 lg:px-[45px]">
            
            {/* First Card - Small Pricing Card */}
            <div 
              className="bg-white shadow-sm rounded-[15px] sm:rounded-[18px] lg:rounded-[20px] w-full lg:w-[262px] lg:flex-shrink-0"
            >
              <div className="p-4 sm:p-5 lg:p-6 h-full flex flex-col min-h-[250px] sm:min-h-[270px] lg:min-h-[286px]">
                <img
                  src="FirstCardHeroImage3.png"
                  alt="Roofing installation work"
                  className="w-full h-24 sm:h-28 lg:h-32 object-cover rounded-[8px] sm:rounded-[10px] lg:rounded-xl mb-3 sm:mb-4"
                />
                <h3 
                  className="mb-3 sm:mb-4"
                  style={{
                    fontFamily: 'Geologica, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(12px, 2.5vw, 14px)',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: 'rgba(30, 30, 30, 1)',
                    opacity: 1
                  }}
                >
                  Roofing Solutions Starting at $12k
                </h3>
                <Button 
                  className="mt-auto w-full sm:w-auto"
                  style={{
                    height: '40px',
                    minHeight: '40px',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                    opacity: 1,
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: 'clamp(12px, 2.5vw, 14px)'
                  }}
                >
                  Contact for details
                </Button>
              </div>
            </div>

            {/* Second Card - Large Image Card */}
            <div 
              className="bg-white overflow-hidden shadow-sm rounded-[15px] sm:rounded-[17px] lg:rounded-[19px] w-full lg:flex-grow lg:max-w-[766px] h-[200px] sm:h-[240px] lg:h-[286px]"
            >
              <img
                src="CenterGigHeroImage4.svg"
                alt="Worker installing roofing materials"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Third Card - Small Promise Card */}
            <div 
              className="bg-white shadow-sm rounded-[15px] sm:rounded-[18px] lg:rounded-[20px] border border-gray-200 w-full lg:w-[262px] lg:flex-shrink-0"
            >
              <div className="p-4 sm:p-5 lg:p-6 h-full flex flex-col min-h-[250px] sm:min-h-[270px] lg:min-h-[286px]">
                <h3 
                  className="mb-3 sm:mb-4"
                  style={{
                    fontFamily: 'Geologica, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(16px, 4vw, 22px)',
                    lineHeight: '110%',
                    letterSpacing: '0%',
                    color: 'rgba(30, 30, 30, 1)',
                    opacity: 1
                  }}
                >
                  Big Protection Starts With Smarter Roof Inc.
                </h3>
                <p 
                  className="mb-4 sm:mb-6 flex-grow"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(12px, 2.5vw, 14px)',
                    lineHeight: '130%',
                    letterSpacing: '0%',
                    color: 'rgba(82, 82, 69, 1)',
                    opacity: 1
                  }}
                >
                  Certified materials. Expert installation. Warranties built to last.
                </p>
                <Button 
                  className="mt-auto w-full sm:w-auto"
                  style={{
                    height: '40px',
                    minHeight: '40px',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                    opacity: 1,
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: 'clamp(12px, 2.5vw, 14px)'
                  }}
                >
                  Discover Our Promise
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}