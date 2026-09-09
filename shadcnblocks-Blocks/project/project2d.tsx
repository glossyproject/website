"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Project2dProps {
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

const Project2d = ({
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
}: Project2dProps) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 py-20 lg:px-12">
        <div className="mb-40">
          <div className="grid grid-cols-12 gap-8 lg:gap-16">
            <div className="col-span-12 lg:col-span-7">
              <div className="mb-12">
                <div className="mb-6 inline-flex items-center space-x-4">
                  <div className="bg-foreground h-px w-16"></div>
                  <span className="text-muted-foreground text-sm font-medium uppercase tracking-widest">
                    Project
                  </span>
                </div>
                <h1 className="text-foreground font-serif text-5xl font-light leading-[0.95] tracking-tight md:text-7xl lg:text-8xl xl:text-9xl">
                  {title}
                  {title2 && (
                    <>
                      <br />
                      {title2}
                    </>
                  )}
                </h1>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <div className="h-full lg:pt-32">
                <div className="space-y-8">
                  <div className="bg-muted/50 rounded-lg p-8">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="border-border flex items-center justify-between border-b pb-4">
                        <span className="text-muted-foreground text-sm font-medium">
                          Year
                        </span>
                        <span className="text-foreground font-medium">
                          {year}
                        </span>
                      </div>
                      <div className="border-border flex items-center justify-between border-b pb-4">
                        <span className="text-muted-foreground text-sm font-medium">
                          Category
                        </span>
                        <span className="text-foreground font-medium">
                          {category}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground text-sm font-medium">
                          Client
                        </span>
                        <span className="text-foreground font-medium">
                          {client}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <div className="relative">
            <div className="aspect-[5/3] overflow-hidden rounded-2xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
            {imageCaption && (
              <div className="bg-background/95 absolute -right-4 bottom-8 max-w-xs rounded-lg p-4 lg:-right-8">
                <p className="text-muted-foreground text-sm font-medium">
                  {imageCaption}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-8">
              <h2 className="text-muted-foreground mb-6 text-sm font-medium uppercase tracking-widest">
                {overviewHeading}
              </h2>
              <div className="bg-foreground h-px w-12"></div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-12">
              <h3 className="text-foreground text-3xl font-light leading-relaxed md:text-4xl">
                {mainDescription}
              </h3>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {detailDescription}
                </p>
              </div>

              <div className="pt-8">
                <Button variant="outline" size="lg">
                  {buttonText}
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Project2d };
