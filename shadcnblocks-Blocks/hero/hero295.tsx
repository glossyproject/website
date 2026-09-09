import React from "react";

import {
  ArrowRight,
  Braces,
  Cpu,
  Keyboard,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

import { ContainerTextFlip } from "@/components/aceternity/container-text-flip";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: ElementType<{ className?: string }>;
  color?: string;
  href?: string;
}

interface HeroFeatureIconsProps {
  badge?: string;
  description?: string;
  buttonPrimary?: {
    text: string;
    href: string;
  };
  features?: Feature[];
  className?: string;
}

interface Hero295Props extends HeroFeatureIconsProps {
  flipWords?: string[];
  headingBeforeFlip: string;
  headingAfterFlip: string;
}
type Props = Partial<Hero295Props>;

const defaultProps: Hero295Props = {
  badge: "Platform",
  description: "Components built with a modern, performant, and accessible foundation.",
  buttonPrimary: {
    text: "Browse blocks",
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
    {
      title: "Lightning fast",
      description:
        "Optimized bundles and lazy loading for instant page transitions.",
      icon: Zap,
    },
    {
      title: "Developer experience",
      description:
        "Predictable APIs and live examples that mirror production layouts.",
      icon: Sparkles,
    },
    {
      title: "Layered architecture",
      description:
        "Primitives, components, and blocks stack into full pages without lock-in.",
      icon: Layers,
    },
  ],
  heading: "",
  headingBeforeFlip: "Shadcn UI",
  headingAfterFlip: "built for the modern stack.",
  flipWords: flipWordsDefault,
};

/** Strip layout is tuned for exactly three cells (`lg:grid-cols-3`). */
const MAX_FEATURES = 3;

const flipWordsDefault = ["Components", "Blocks", "Templates"];

const flipRowClassName =
  "relative pt-1 pb-2 text-4xl font-semibold tracking-tighter md:text-5xl lg:text-6xl";

const Hero295 = (props: Props) => {
  const {
    badge,
    description,
    buttonPrimary,
    features,
    flipWords,
    headingBeforeFlip,
    headingAfterFlip,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const visibleFeatures = (features ?? []).slice(0, MAX_FEATURES);

  return (
    <section
      className={cn(
        "min-h-0 w-full max-w-full overflow-hidden py-24 md:py-28",
        className,
      )}
    >
      <div className="w-full">
        <div className="container mx-auto px-4 pt-10 pb-2 md:px-6 md:pt-12">
          <p className="flex w-full items-center justify-center gap-3 text-center text-sm text-muted-foreground">
            <span className="inline-block size-2 shrink-0 rounded-full bg-primary" />
            {badge}
          </p>
          <div className="mt-4 mb-8 w-full text-center text-4xl font-semibold tracking-tighter md:mb-10 md:text-5xl lg:text-6xl">
            <h1 className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-y-2 text-center text-balance md:gap-y-3">
              <div className="flex w-full flex-col items-center justify-center gap-y-2 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-3 md:gap-y-0">
                <span className="inline shrink-0">{headingBeforeFlip}</span>
                <div className="inline-flex min-h-[1.15em] shrink-0 items-center justify-center">
                  <ContainerTextFlip
                    className={cn(flipRowClassName)}
                    words={flipWords ?? flipWordsDefault}
                  />
                </div>
              </div>
              <span className="block w-full">{headingAfterFlip}</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-border/80">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            {description && (
              <p className="text-balance text-muted-foreground lg:text-lg">
                {description}
              </p>
            )}
            {buttonPrimary && (
              <Button className="gap-2 rounded-lg" size="lg" asChild>
                <a href={buttonPrimary.href}>
                  {buttonPrimary.text}
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="w-full border-t border-border/80">
        <div className="container mx-auto px-4 md:px-6">
          <ul className="grid w-full grid-cols-1 divide-y divide-border/80 md:grid-cols-3 md:divide-x md:divide-y-0">
            {visibleFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <li
                  key={feature.title}
                  className="flex min-h-0 w-full flex-col items-center justify-center gap-4 px-4 py-10 text-center md:min-h-42 md:px-6"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-muted">
                    <Icon className="size-6 text-muted-foreground" />
                  </div>
                  <p className="max-w-56 text-base text-muted-foreground md:text-lg">
                    {feature.title}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Hero295 };
