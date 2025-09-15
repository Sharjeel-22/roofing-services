import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
    <section className="relative mt-5 mx-auto w-full max-w-[1440px] h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[666px] px-2 sm:px-4">
      {/* Background Image */}
      <img 
        src="/home-banner.svg" 
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover rounded-lg sm:rounded-xl md:rounded-[16px] lg:rounded-[18px] xl:rounded-[19px]"
      />
      
      {/* Content Container using shadcn Card */}
      <Card className="absolute bottom-3 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6 lg:w-[90%] lg:left-[5%] lg:bottom-8 xl:w-[1187px] xl:h-[265px] xl:top-[377px] xl:left-[149px] xl:bottom-auto shadow-xl sm:shadow-2xl border-0 rounded-[16px] sm:rounded-[18px] md:rounded-[20px]">
        <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 xl:px-[30px] xl:py-[23px] h-full overflow-hidden">
          <div className="flex flex-col h-full gap-2 sm:gap-3 md:gap-4 lg:gap-[10px]">
            {/* Badge using shadcn Badge */}
            <Badge 
              variant="secondary"
              className="text-white px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-1.5 lg:px-4 lg:py-1 rounded-full text-[10px] sm:text-xs md:text-sm lg:text-sm font-medium tracking-wide self-start border-0 shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(73, 129, 194, 1) 0%, rgba(99, 205, 246, 1) 100%)'
              }}
            >
              STRONG. SUSTAINABLE. SMART.
            </Badge>

            {/* Main content area */}
            <div className="flex flex-col lg:flex-row flex-1 lg:items-center lg:justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-6 min-h-0">
              {/* Left side - Heading */}
              <div className="flex-1 min-w-0">
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 leading-tight sm:leading-tight md:leading-snug lg:leading-[1.2] xl:leading-[1.1]">
                  ROOFING THAT PROTECTS AND POWERS YOUR FUTURE
                </h1>
              </div>

              {/* Right side - Description and button */}
              <div className="flex-1 flex flex-col justify-center gap-2 sm:gap-3 md:gap-3 lg:gap-4 min-w-0">
                <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed sm:leading-relaxed md:leading-[1.5] lg:leading-[1.4]">
                  From durable roofing repairs to cutting-edge solar integration, we combine craftsmanship with innovation to
                  keep your home secure and energy-efficient.
                </p>

                <Button 
                  size="default"
                  variant="default"
                  className="text-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02] self-start w-full sm:w-full md:w-full lg:w-auto border-0 shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(73, 129, 194, 1) 0%, rgba(99, 205, 246, 1) 100%)'
                  }}
                >
                  <span className="truncate">Schedule My Roof Inspection</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}