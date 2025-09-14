import Image from "next/image";
import { StatsCard } from "./stats-card";

export function CareersHero() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Join Our Team and Shape the Future
          </h1>
          <p className="text-lg text-muted-foreground max-w-[60rem] mx-auto leading-relaxed">
            We're looking for hard-working, motivated individuals ready to
            change their life and make a difference. Our mission is to set the
            standard in roofing and deliver the best home improvement experience
            homeowners will ever have. If you're looking for something boring,
            easy and traditional you're not for us. Late nights, weekends, and
            going the extra mile is a part of what we do. We obsess over
            impacting and improving the lives of our team members and our
            customers. We never settle for less.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/Header-Image-Section.svg"
            alt="Team member working"
            height={750}
            width={750}
          />
        </div>
      </div>
    </section>
  );
}
