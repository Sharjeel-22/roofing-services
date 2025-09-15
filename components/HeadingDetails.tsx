"use client";

import { Button } from "@/components/ui/button";

interface HeadingDetailsProps {
  subtitle?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  align?: "left" | "center" | "right"; // extra flexibility
}

export function HeadingDetails({
  subtitle ,
  title,
  description,
  buttonText,
  onButtonClick,
  align,
}: HeadingDetailsProps) {
  return (
    <section className="bg-white py-16 px-4">
      <div
        className={`max-w-4xl mx-auto text-${align}`}
      >
        {/* Subtitle */}
        {subtitle && (
          <p className="text-blue-400 text-lg font-medium mb-6">
            {subtitle}
          </p>
        )}

        {/* Title */}
        {title && (
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance">
            {title}
          </h1>
        )}

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-3xl mx-auto text-pretty">
            {description}
          </p>
        )}

        {/* Button */}
        {buttonText && (
          <Button
            onClick={onButtonClick}
            className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 text-lg font-medium rounded-lg transition-colors"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  );
}
