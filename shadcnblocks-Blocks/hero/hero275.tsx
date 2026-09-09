"use client";

import { Braces, Cpu, Keyboard } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

type HeroFeatureSliderImage = Image & {
  label?: string;
};
interface HeroFeatureSliderFeature {
  title: string;
  description: string;
  icon: ElementType<{ className?: string }>;
  color?: string;
  href?: string;
}
interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}

interface HeroFeatureSliderProps {
  heading: string;
  description?: string;
  features?: HeroFeatureSliderFeature[];
  images: [HeroFeatureSliderImage, ...HeroFeatureSliderImage[]];
  className?: string;
}

interface Hero275Props extends HeroFeatureSliderProps {}
type Props = Partial<Hero275Props>;

const defaultProps: Hero275Props = {
  heading: "Shadcn UI Components built for the modern stack.",
  description:
    "Components built with a modern, performant, and accessible foundation.",
  features: [
    {
      title: "Composable patterns",
      description:
        "Ship faster with structured sections and consistent spacing.",
      icon: Braces,
    },
    {
      title: "Design tokens",
      description:
        "Theme and scale colors, type, and radii from a single coherent system.",
      icon: Cpu,
    },
    {
      title: "Accessible defaults",
      description:
        "Keyboard and screen-reader friendly building blocks out of the box.",
      icon: Keyboard,
    },
  ],
  images: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-2-16x9.png",
      srcDark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-2-16x9-dark.png",
      alt: "Product preview",
      label: "Overview",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-3-16x9.png",
      srcDark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-3-16x9-dark.png",
      alt: "Product detail",
      label: "Workflow",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-4-16x9.png",
      srcDark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-4-16x9-dark.png",
      alt: "Product context",
      label: "Insights",
    },
  ],
};

/** Matches carousel image count from pack. */
const MAX_FEATURES = 3;

const Hero275 = (props: Props) => {
  const { heading, description, features, images, className } = {
    ...defaultProps,
    ...props,
  };

  const visibleFeatures = (features ?? []).slice(0, MAX_FEATURES);
  const featureCount = visibleFeatures.length;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto overflow-hidden">
        <div className="mb-14 text-left lg:mb-16">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-pretty md:text-5xl">
            {heading}
          </h1>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          <div className="relative w-full min-w-0 lg:w-1/2">
            <div className="relative aspect-video max-h-[480px] w-full">
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                {Array.from({ length: Math.max(featureCount, 1) }, (_, i) => {
                  const heroImage = images[Math.min(i, images.length - 1)];
                  const isActive = activeImageIndex === i;
                  return (
                    <div
                      key={`${heroImage.src}-${i}`}
                      className={cn(
                        "absolute inset-0 transition-opacity duration-500 ease-out",
                        isActive
                          ? "z-10 opacity-100"
                          : "pointer-events-none z-0 opacity-0",
                      )}
                      aria-hidden={!isActive}
                    >
                      {heroImage.srcDark ? (
                        <>
                          <img
                            src={heroImage.src}
                            alt={heroImage.alt}
                            className="absolute inset-0 size-full rounded-xl border border-border object-cover object-top dark:hidden"
                          />
                          <img
                            src={heroImage.srcDark}
                            alt={heroImage.alt}
                            className="absolute inset-0 hidden size-full rounded-xl border border-border object-cover object-top dark:block"
                          />
                        </>
                      ) : (
                        <img
                          src={heroImage.src}
                          alt={heroImage.alt}
                          className="absolute inset-0 size-full rounded-xl border border-border object-cover object-top"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="pointer-events-none absolute inset-0 z-20 rounded-xl bg-linear-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>

          <div
            className="flex w-full flex-col justify-start gap-1 lg:w-1/2"
            onMouseLeave={() => setActiveImageIndex(0)}
          >
            {description && (
              <p className="mb-6 max-w-xl text-lg text-balance text-muted-foreground md:mb-8 md:text-xl">
                {description}
              </p>
            )}
            {visibleFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex cursor-default items-start gap-3 rounded-xl px-4 py-4 transition-colors hover:bg-muted/40 lg:gap-4"
                  onMouseEnter={() => setActiveImageIndex(index)}
                >
                  <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-muted/50">
                    <Icon className="h-auto w-5 text-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold tracking-tight text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-balance text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero275 };
