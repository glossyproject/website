"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface Project2aProps {
  title: string;
  title2?: string;
  year: string;
  category: string;
  client: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  mainDescription: string;
  detailDescription: string;
  buttonText: string;
}

const Project2a = ({
  title = "DIGITAL",
  title2 = "ARTISANS",
  year = "[2024]",
  category = "[BRAND IDENTITY]",
  client = "[CREATIVE STUDIO]",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/artistic-portrait-glitch-yqp6z.png",
  imageAlt = "Creative workspace with coffee and design elements",
  imageCaption = "Artistic portrait with glitch-inspired overlays and ethereal lighting",
  mainDescription = "A VIBRANT PHOTOGRAPHY SHOOT CAPTURES THE ESSENCE OF MODERN BRAND IDENTITY, BLENDING ARTISTIC EXPRESSION WITH BOLD VISUAL STORYTELLING.",
  detailDescription = "This project centers on a creative portrait session designed to reflect the innovative and dynamic spirit of the brand. The shoot features ethereal lighting and glitch-inspired color overlays, evoking a sense of movement and digital artistry. The subject's confident gaze and contemporary styling embody the brand's forward-thinking identity, while the interplay of cyan and magenta tones creates a memorable, immersive visual experience. This imagery will be used across brand touchpoints to communicate a unique blend of creativity, technology, and authenticity.",
  buttonText = "Contact Us",
}: Project2aProps) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 flex flex-col items-center justify-center gap-6">
            <Label className="text-foreground text-sm uppercase tracking-wider">
              Project
            </Label>
            <h1 className="text-foreground text-center font-serif text-7xl font-light leading-none tracking-tight md:text-8xl lg:text-9xl">
              {title}
              {title2 && (
                <>
                  <br />
                  {title2}
                </>
              )}
            </h1>
            <div className="bg-border mx-auto mt-12 h-px w-24"></div>
          </div>

          <div className="text-muted-foreground mb-24 grid grid-cols-3 justify-items-center text-sm uppercase tracking-wider">
            <div>
              <span className="block">YEAR</span>
              <span className="text-foreground">{year}</span>
            </div>
            <div>
              <span className="block">CATEGORY</span>
              <span className="text-foreground">{category}</span>
            </div>
            <div>
              <span className="block">CLIENT</span>
              <span className="text-foreground">{client}</span>
            </div>
          </div>

          <div className="mb-24">
            <div className="bg-muted aspect-[16/10] overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-muted-foreground mt-6 text-center text-xs tracking-widest">
              <em>{imageCaption}</em>
            </div>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="space-y-8">
              <h2 className="text-foreground mb-8 text-xl font-light leading-relaxed md:text-2xl">
                {mainDescription}
              </h2>

              <p className="text-muted-foreground mb-12 text-base leading-relaxed">
                {detailDescription}
              </p>

              <div>
                <Button variant="outline">
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

export { Project2a };
