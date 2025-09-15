import { Button } from "@/components/ui/button";

export function RoofingStory() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-[62rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/Roof-story.svg" alt="Team meeting" className="w-full h-96 object-cover rounded-lg" />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-4xl font-bold text-foreground">More Than Just Roofs.</h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                At Smarter Roof Inc., our expertise goes beyond roofing and solar. We also provide a variety of complementary services that naturally align with the projects we take on. From gutters to doors and other essential upgrades, we make sure your home is fully protected, efficient, and built for long-term comfort.
              </p>

             <Button
              className="bg-[#4981C2] hover:bg-[#63CDF6] hover:cursor-pointer"
            >
              Other Services
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
