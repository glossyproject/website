"use client";

import {
  ArrowRight,
  Braces,
  Cpu,
  Keyboard,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

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
  badge?: string;
  heading: string;
  buttonPrimary?: {
    text: string;
    href: string;
  };
  buttonSecondary?: {
    text: string;
    href: string;
  };
  features?: HeroFeatureSliderFeature[];
  images: [HeroFeatureSliderImage, ...HeroFeatureSliderImage[]];
  className?: string;
}

interface Hero278Props extends HeroFeatureSliderProps {}
type Props = Partial<Hero278Props>;

const defaultProps: Hero278Props = {
  badge: "Platform",
  heading: "Shadcn UI Components built for the modern stack.",
  buttonPrimary: {
    text: "Browse blocks",
    href: "https://www.shadcnblocks.com",
  },
  buttonSecondary: {
    text: "View docs",
    href: "https://www.shadcnblocks.com",
  },
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

const MAX_FEATURES = 3;

const Hero278 = (props: Props) => {
  const {
    badge,
    heading,
    buttonPrimary,
    buttonSecondary,
    features,
    images,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const visibleFeatures = (features ?? []).slice(0, MAX_FEATURES);
  const featureCount = visibleFeatures.length;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <div className="container mx-auto">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 lg:gap-y-8 xl:gap-16">
          <div
            className="flex min-w-0 flex-col gap-8"
            onMouseLeave={() => setActiveImageIndex(0)}
          >
            <div className="flex w-fit items-center gap-2 border-b border-dashed">
              <div className="size-2 rounded-full bg-muted-foreground" />
              <p className="text-xs text-muted-foreground md:text-sm">
                {badge}
              </p>
            </div>

            <h1 className="max-w-xl text-4xl leading-[1.08] font-semibold tracking-tight text-pretty lg:text-5xl xl:text-6xl">
              {heading}
            </h1>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              {buttonPrimary && (
                <Button asChild size="lg" className="gap-2">
                  <a href={buttonPrimary.href}>
                    {buttonPrimary.text}
                    <ArrowRight className="size-4" aria-hidden />
                  </a>
                </Button>
              )}
              {buttonSecondary && (
                <Button asChild variant="outline" size="lg">
                  <a href={buttonSecondary.href}>{buttonSecondary.text}</a>
                </Button>
              )}
            </div>

            <div className="flex flex-col gap-1 pt-2">
              {visibleFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex cursor-default items-start gap-3 rounded-xl px-1 py-3 transition-colors hover:bg-muted/50 sm:gap-4 sm:px-3 sm:py-4"
                    onMouseEnter={() => setActiveImageIndex(index)}
                  >
                    <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted/80">
                      <Icon className="size-4 text-foreground" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="leading-snug font-semibold tracking-tight text-foreground">
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

          <div className="relative min-w-0 lg:sticky lg:top-8">
            <div className="relative aspect-square w-full">
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
                            className="absolute inset-0 size-full rounded-xl border border-border object-cover object-left-top dark:hidden"
                          />
                          <img
                            src={heroImage.srcDark}
                            alt={heroImage.alt}
                            className="absolute inset-0 hidden size-full rounded-xl border border-border object-cover object-left-top dark:block"
                          />
                        </>
                      ) : (
                        <img
                          src={heroImage.src}
                          alt={heroImage.alt}
                          className="absolute inset-0 size-full rounded-xl border border-border object-cover object-left-top"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero278 };
