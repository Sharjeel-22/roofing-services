import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center">
          
          {/* Left Content Section */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
            
            {/* Section Badge */}
            <div 
              className="text-justify"
              style={{
                width: '538px',
                height: '13px',
                fontFamily: 'Geologica, sans-serif',
                fontWeight: 400,
                fontSize: '10px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'justify',
                background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: 1
              }}
            >
              WHO WE ARE
            </div>

            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-4">
              <h2 
                className="font-normal leading-[100%] tracking-[0%]"
                style={{
                  width: '557px',
                  height: '159px',
                  color: 'rgba(30, 30, 30, 1)',
                  fontFamily: 'Genoa, serif',
                  fontWeight: 400,
                  fontSize: '55px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  opacity: 1
                }}
              >
                Your Partner in Protection & Power
              </h2>
            </div>

            {/* Description Text */}
            <div className="space-y-4 sm:space-y-6">
              <p 
                className="text-justify"
                style={{
                  width: '538px',
                  height: '210px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 300,
                  fontSize: '20px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'justify',
                  opacity: 1
                }}
              >
                At Smarter Roof Inc., we're more than roofers — we're your trusted partner for smarter living. Specializing in roofing and solar solutions tailored to your home and budget, we deliver security, comfort, and long-term value. Our white-glove service, seamless installations, and forward-thinking approach ensure every project is built to last — and built for you.
              </p>
            </div>
            
          </div>

          {/* Right Images Section */}
          <div className="relative">
            <div 
              className="rounded-[5px] opacity-100"
              style={{
                width: '750px',
                height: '620px',
                transform: 'rotate(0deg)',
                position: 'relative'
              }}
            >
              <img
                src="/Group 76.svg"
                alt="Roofing and solar panel projects showcase"
                className="w-full h-full object-contain rounded-[5px]"
                loading="lazy"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}