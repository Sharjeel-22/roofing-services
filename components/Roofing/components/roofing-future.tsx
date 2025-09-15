import { Button } from "@/components/ui/button";
import Image from "next/image";

export function RoofingFuture(props: any) {
  const { title, description, buttonText, primaryImage, secondaryImage } =
    props;
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              {description}
            </p>

            <Button
              size="lg"
              className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-6 text-lg rounded-lg font-medium"
            >
              {buttonText}
            </Button>
          </div>

          {/* Right Image */}
          <div className="width-full flex justify-center lg:justify-end">
            <div className="relative">
              {/* Large background image with blue gradient border */}
              <div className="relative bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-4 shadow-lg">
                <Image
                  src={primaryImage}
                  alt="Modern house with contemporary roofing"
                  width={400}
                  height={350}
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>

              {/* Small front image with white border, positioned to overlap */}
              <div className="absolute -bottom-24 -left-32 bg-white rounded-2xl p-3">
                <Image
                  src={secondaryImage}
                  alt="Traditional house with terracotta tile roof"
                  width={280}
                  height={280}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
