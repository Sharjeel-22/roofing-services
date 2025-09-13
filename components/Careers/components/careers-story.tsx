export function CareersStory() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/team-meeting-in-modern-office-space.jpg" alt="Team meeting" className="w-full h-96 object-cover rounded-lg" />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Change Your Life With Roofing and Solar</h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Josh Jerge's journey wasn't always easy. Growing up with financial challenges, he was shaped by the
                resilience and hard work of his family. Those lessons inspired him to build Smarter Roof Inc. — now
                recognized as a Top 25 roofing company.
              </p>

              <blockquote className="border-l-4 border-accent pl-4 italic">
                "My mission is simple: to impact lives and invest in people. Roofing and solar changed my life, and I
                want to share that same opportunity so others can change theirs."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
