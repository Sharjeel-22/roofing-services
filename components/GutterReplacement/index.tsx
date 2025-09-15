"use client";
import { HeadingDetails } from "@/components/HeadingDetails";
import { ProvenCertified } from "../ProvenCertified";

export function GutterReplacement() {
  return (
    <main className="min-h-screen">
      <HeadingDetails
        subtitle="Trusted Gutter Installers"
        title="The Smart Choice for Gutters"
        description="At Smarter Roof Inc., we take gutters as seriously as we take roofing. Our expert installers deliver unmatched craftsmanship using only the highest-quality products. Combined with attentive customer service, every gutter project is handled with care, precision, and a commitment to long-lasting protection for your home."
        buttonText="Get an Estimate"
        onButtonClick={() => alert("Estimate button clicked!")}
        align="center"
      />
      <ProvenCertified/>
    </main>
  );
}
