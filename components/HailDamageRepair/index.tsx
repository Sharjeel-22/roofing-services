"use client";
import { HeadingDetails } from "@/components/HeadingDetails";

export function HailDamageRepair() {
  return (
    <main className="min-h-screen">
      <HeadingDetails
        subtitle="Hail Damage Roof Repair"
        title="Free Hail Damage Inspections"
        description="Protect your home. Reinvent your peace of mind.Has your home or business been hit by hail? Whether the damage is functional or cosmetic, the skilled professionals at Smarter Roof Inc. are here to help. We provide FREE post-storm roof inspections and tailored repair solutions to keep your property safe, secure, and weather-ready year-round."
        buttonText="Get an Estimate"
        onButtonClick={() => alert("Estimate button clicked!")}
        align="center"
      />
    </main>
  );
}
