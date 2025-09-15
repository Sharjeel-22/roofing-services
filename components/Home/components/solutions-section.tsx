import { Button } from "@/components/ui/button"

export default function SolutionsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="space-y-2 sm:space-y-3 md:space-y-4 relative">
            <div 
              style={{
                fontFamily: 'Geologica, sans-serif',
                fontWeight: 400,
                fontSize: '10px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: 1,
                transform: 'rotate(90deg)',
                transformOrigin: 'center',
                position: 'absolute',
                left: '-50px',
                top: '60px',
                width: 'max-content'
              }}
              className="tracking-wide font-medium"
            >
              OUR SERVICES
            </div>
            <h2 
              style={{
                fontFamily: 'Genoa, serif',
                fontWeight: 400,
                fontSize: '55px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: 'rgba(30, 30, 30, 1)',
                opacity: 1
              }}
              className="leading-tight"
            >
              Smart Solutions for<br />Every Roof
            </h2>
          </div>
          <div className="lg:pt-4 xl:pt-8">
            <p 
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 300,
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: 'rgba(82, 82, 69, 1)',
                opacity: 1
              }}
            >
              From premium roofing installations to solar innovations and exterior upgrades, Smarter Roof Inc. delivers
              industry-leading craftsmanship, certified expertise, and lasting protection for your home.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Roofing Card */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02]">
            <img
              src="/metal-roof-with-sunlight.jpg"
              alt="Modern metal roofing with sunlight"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <p className="text-white text-xs sm:text-sm font-medium tracking-wide opacity-90 mb-2 sm:mb-3">DURABLE, STYLISH</p>
              <div className="flex justify-between items-center">
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Roofing</h3>
                <Button 
                  variant="secondary" 
                  className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium"
                >
                  Discover your Dream House
                </Button>
              </div>
            </div>
          </div>

          {/* Solar Card */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02]">
            <img
              src="/solar-panels-city-skyline.jpg"
              alt="Solar panels with city skyline"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <p className="text-white text-xs sm:text-sm font-medium tracking-wide opacity-90 mb-2 sm:mb-3">CLEAN, ROOF-INTEGRATED</p>
              <div className="flex justify-between items-center">
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Solar</h3>
                <Button 
                  variant="secondary" 
                  className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium"
                >
                  Learn more about Solar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 