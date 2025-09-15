"use client";

import Image from "next/image";

interface ServiceCard {
  image: string;
  title: string;
  description: React.ReactNode; // allows bold text, lists, etc.
}

interface ServicesSectionProps {
  heading: string;
  subheading?: string;
  services: ServiceCard[];
}

export function ServicesSection({
  heading,
  subheading,
  services,
}: ServicesSectionProps) {

  console.log("services:", services);
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading + description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          {subheading && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subheading}
            </p>
          )}
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services?.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border p-6 flex flex-col"
            >
              <div className="mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              <div className="text-gray-600 text-base leading-relaxed space-y-3">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
