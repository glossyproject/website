"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
const images = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-uR__S5GX8Io-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-fyEcdETa5mc-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9jsQcDsxyqA-unsplash.jpg",
];

const Feature209 = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className="border-border py-32">
      <div className="border-y">
        <div className="container relative overflow-hidden">
          <div className="border-border border-x">
            <div className="flex h-full flex-col-reverse xl:flex-row">
              <div className="bg-background flex items-center p-8 xl:w-1/2">
                <div className="flex h-fit flex-col gap-6 py-16 pr-16">
                  <h2 className="text-balance text-4xl font-medium tracking-tight">
                    Explore our Featured Collection
                  </h2>
                  <div className="flex gap-4">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        className={cn(
                          "max-h-24 max-w-32 rounded-md border border-transparent p-1 shadow-sm transition-all duration-150",
                          selectedImage === image &&
                            "border-foreground/10 border shadow-md",
                        )}
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt="placeholder"
                          className="size-full rounded-md object-cover"
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    The featured collection provides a sleek gallery-focused
                    experience with customizable album layouts, client
                    testimonials section, and intuitive image organization for
                    professionals.
                  </p>
                  <div className="flex gap-4 font-medium">
                    <Button variant="outline" asChild>
                      <a href="#" className="group flex items-center gap-1">
                        View Collection
                        <ChevronRight className="mt-0.5 size-4 transition-all duration-150 group-hover:translate-x-0.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <Separator
                orientation="vertical"
                className="hidden self-stretch data-[orientation=vertical]:h-auto xl:block"
              />
              <div className="relative size-full p-8 md:p-16">
                <div className="relative h-[300px] sm:h-[540px]">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="placeholder"
                      className={cn(
                        "absolute inset-0 h-[300px] w-full origin-center scale-[1.05] rounded-lg object-cover opacity-0 shadow-lg transition-none sm:h-[540px]",
                        selectedImage === image &&
                          "scale-100 opacity-100 transition-all duration-500 ease-out",
                      )}
                    />
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/tiny-checkers.svg')] bg-repeat opacity-10 [background-size:4px_4px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature209 };
