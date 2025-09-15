"use client";
import { HeadingDetails } from "@/components/HeadingDetails";
import { ProvenCertified } from "../ProvenCertified";

export function DoorReplacement() {
  return (
    <main className="min-h-screen">
      <HeadingDetails
        subtitle="Door Replacement and Installation"
        title="The Smart Choice for Doors"
        description="At Smarter Roof Inc., we don't just replace doors — we upgrade your home's security, style, and efficiency. By combining top-quality products with expert craftsmanship and attentive service, we ensure every door installation is built to last and designed to impress."
        buttonText="Get an Estimate"
        onButtonClick={() => alert("Estimate button clicked!")}
        align="center"
      />
      <ProvenCertified/>
    </main>
  );
}
