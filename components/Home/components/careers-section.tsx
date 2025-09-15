import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CareersSection() {
  return (
    <section 
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 relative"
      style={{
        backgroundImage: "url('/Vector 2.svg')",
        backgroundSize: '70% sm:65% md:60% lg:55% xl:55%',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div 
          className="flex flex-col w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1069px]"
          style={{
            gap: '4px sm:5px md:6px',
            opacity: 1
          }}
        >
          <div
            className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm"
            style={{
              fontFamily: 'Geologica, sans-serif',
              fontWeight: 400,
              lineHeight: '100%',
              letterSpacing: '0%',
              background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: 1
            }}
          >
            JOIN OUR TEAM
          </div>
          
          <h2 
            className="font-normal leading-[100%] tracking-[0%] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[55px]"
            style={{
              color: 'rgba(30, 30, 30, 1)',
              fontFamily: 'Genoa, serif',
              fontWeight: 400,
              lineHeight: '100%',
              letterSpacing: '0%',
              opacity: 1
            }}
          >
            THE BEST AND THE BRIGHTEST
          </h2>
          
          <p 
            className="text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[20px]"
            style={{
              color: 'rgba(82, 82, 69, 1)',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 300,
              lineHeight: '140%',
              letterSpacing: '0%',
              textAlign: 'justify',
              opacity: 1
            }}
          >
            Smarter Roof Inc. believes everyone deserves to reach their potential and live out the AmericanDream. That's
            why we provide a training ground for salespeople and self-starters looking to advance their career and
            develop the skills that will help them get to the top of the ladder. And with the latest solar technology at
            their fingertips, our salespeople can feel good knowing they're helping homeowners everywhere weather any
            storm.
          </p>
          
          <Button 
            className="text-white font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02] border-0 w-fit text-xs sm:text-sm md:text-base"
            style={{
              width: 'auto',
              minWidth: '120px',
              maxWidth: '144px',
              height: '32px sm:36px md:40px',
              borderRadius: '8px sm:9px md:10px',
              padding: '8px 16px sm:10px 18px md:10px 21px',
              background: 'linear-gradient(180deg, #4981C2 0%, #63CDF6 100%)',
              opacity: 1
            }}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  )
}