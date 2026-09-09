"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Project2bProps {
  title: string;
  title2?: string;
  year: string;
  category: string;
  client: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption?: string;
  overviewHeading: string;
  mainDescription: string;
  detailDescription: string;
  buttonText: string;
}

const Project2b = ({
  title = "DIGITAL",
  title2 = "ARTISANS",
  year = "[2024]",
  category = "[BRAND IDENTITY]",
  client = "[CREATIVE STUDIO]",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/artistic-portrait-glitch-yqp6z.png",
  imageAlt = "Creative workspace with coffee and design elements",
  imageCaption = "Artistic portrait with glitch-inspired overlays and ethereal lighting",
  overviewHeading = "PROJECT OVERVIEW",
  mainDescription = "A VIBRANT PHOTOGRAPHY SHOOT CAPTURES THE ESSENCE OF MODERN BRAND IDENTITY, BLENDING ARTISTIC EXPRESSION WITH BOLD VISUAL STORYTELLING.",
  detailDescription = "This project centers on a creative portrait session designed to reflect the innovative and dynamic spirit of the brand. The shoot features ethereal lighting and glitch-inspired color overlays, evoking a sense of movement and digital artistry. The subject's confident gaze and contemporary styling embody the brand's forward-thinking identity, while the interplay of cyan and magenta tones creates a memorable, immersive visual experience. This imagery will be used across brand touchpoints to communicate a unique blend of creativity, technology, and authenticity.",
  buttonText = "Contact Us",
}: Project2bProps) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <h1 className="text-foreground font-mono text-4xl font-normal leading-tight tracking-wider md:text-6xl lg:text-7xl">
                {title}
                {title2 && (
                  <>
                    <br />
                    {title2}
                  </>
                )}
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="border-border space-y-6 border-l pl-8">
                <div className="space-y-2">
                  <div className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                    Year
                  </div>
                  <div className="text-foreground text-sm font-medium">
                    {year}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                    Category
                  </div>
                  <div className="text-foreground text-sm font-medium">
                    {category}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                    Client
                  </div>
                  <div className="text-foreground text-sm font-medium">
                    {client}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <div className="bg-muted aspect-[3/2] overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
            {imageCaption && (
              <div className="text-muted-foreground mt-4 text-xs font-medium uppercase tracking-wider">
                {imageCaption}
              </div>
            )}
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <h2 className="text-foreground text-xs font-medium uppercase tracking-wider">
                {overviewHeading}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="space-y-8">
                <h3 className="text-foreground text-xl font-light leading-relaxed md:text-2xl">
                  {mainDescription}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {detailDescription}
                </p>
                <div className="pt-4">
                  <Button variant="outline">
                    {buttonText}
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Project2b };
