"use client";
import { ReactNode } from "react";

interface ServiceCard {
  image: string;
  title: string;
  description: ReactNode;
}

export const doorServices: ServiceCard[] = [
  {
    image: "/images/why-doors.jpg",
    title: "Why Smarter Roof Inc. for Doors?",
    description: (
      <>
        <p>
          Your home deserves a great door — and you deserve a great experience
          getting one. At Smarter Roof Inc., we’re committed to delivering both.
        </p>
        <p>
          From your first conversation to final installation, our team provides
          professional, courteous service and workmanship you can trust.
        </p>
        <p className="font-semibold">What You Can Expect:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Friendly, professional team members who respect your time and home
          </li>
          <li>Meticulous installation with attention to every detail</li>
          <li>Thorough clean-up so your home looks as good as new</li>
        </ul>
      </>
    ),
  },
  {
    image: "/images/entry-door.jpg",
    title: "Entry Doors",
    description: (
      <>
        <p>
          We proudly install ProVia entry doors, offering options to fit every
          priority without compromise:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Embarq Series →</strong> The most energy-efficient entry
            doors in the U.S.
          </li>
          <li>
            <strong>Signet Series →</strong> A wide selection of colors and
            styles to match any home
          </li>
          <li>
            <strong>Legacy Steel Series →</strong> 20-gauge steel for unmatched
            strength and security
          </li>
        </ul>
      </>
    ),
  },
  {
    image: "/images/entry-door.jpg",
    title: "Entry Doors",
    description: (
      <>
        <p>
          We proudly install ProVia entry doors, offering options to fit every
          priority without compromise:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Embarq Series →</strong> The most energy-efficient entry
            doors in the U.S.
          </li>
          <li>
            <strong>Signet Series →</strong> A wide selection of colors and
            styles to match any home
          </li>
          <li>
            <strong>Legacy Steel Series →</strong> 20-gauge steel for unmatched
            strength and security
          </li>
        </ul>
      </>
    ),
  },
];
