import {
  ArrowRight,
  Braces,
  Cpu,
  Keyboard,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

type HeroFeatureImage = Image & {
  label?: string;
};
interface Feature {
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

interface HeroFeatureIconsProps {
  badge?: string;
  heading: string;
  description?: string;
  buttonPrimary?: {
    text: string;
    href: string;
  };
  buttonSecondary?: {
    text: string;
    href: string;
  };
  features?: Feature[];
  images?: [HeroFeatureImage, ...HeroFeatureImage[]];
  className?: string;
}

interface Hero286Props extends HeroFeatureIconsProps {}
type Props = Partial<Hero286Props>;

const defaultProps: Hero286Props = {
  badge: "Platform",
  heading: "Shadcn UI Components built for the modern stack.",
  description:
    "Components built with a modern, performant, and accessible foundation.",
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
};

/** Horizontal marquee of compact feature tiles with gradient fades at both viewport edges. */
const MAX_FEATURES = 6;

function LeadImage({
  image,
  className,
}: {
  image: HeroFeatureImage;
  className?: string;
}) {
  const imgClass = cn("size-full object-cover", className);
  if (image.srcDark) {
    return (
      <>
        <img
          src={image.src}
          alt={image.alt}
          className={cn(imgClass, "dark:hidden")}
        />
        <img
          src={image.srcDark}
          alt={image.alt}
          className={cn(imgClass, "hidden dark:block")}
        />
      </>
    );
  }
  return <img src={image.src} alt={image.alt} className={imgClass} />;
}

const Hero286 = (props: Props) => {
  const {
    badge,
    heading,
    description,
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
  const leadImage = images?.[0];

  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl space-y-4">
              {badge && (
                <p className="text-sm font-medium text-muted-foreground">
                  {badge}
                </p>
              )}
              <h1 className="text-4xl font-semibold tracking-tight text-pretty lg:text-5xl">
                {heading}
              </h1>
              {description && (
                <p className="text-balance text-muted-foreground lg:text-lg">
                  {description}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:pb-1">
              {buttonPrimary && (
                <Button size="lg" className="gap-2" asChild>
                  <a href={buttonPrimary.href}>
                    {buttonPrimary.text}
                    <ArrowRight className="size-4" aria-hidden />
                  </a>
                </Button>
              )}
              {buttonSecondary && (
                <Button variant="outline" size="lg" asChild>
                  <a href={buttonSecondary.href}>{buttonSecondary.text}</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-12 border-y border-border bg-muted/30 py-10 md:mt-14 md:py-12">
        <Marquee className="relative">
          <MarqueeContent
            pauseOnHover
            speed={38}
            className="flex items-stretch"
          >
            {visibleFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <MarqueeItem key={feature.title} className="mx-3 md:mx-6">
                  <div className="flex h-full w-[min(85vw,320px)] shrink-0 gap-4 px-5 py-4 md:w-[340px] md:px-6 md:py-5">
                    <Icon
                      className="size-6 shrink-0 text-primary"
                      aria-hidden
                    />
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground">
                        {feature.title}
                      </p>
                      <p className="mt-1 line-clamp-2 text-sm text-balance text-muted-foreground md:line-clamp-3">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </MarqueeItem>
              );
            })}
          </MarqueeContent>
          <MarqueeFade
            side="left"
            className="pointer-events-none w-16 md:w-24 lg:w-28"
          />
          <MarqueeFade
            side="right"
            className="pointer-events-none w-16 md:w-24 lg:w-28"
          />
        </Marquee>
      </div>

      {leadImage && (
        <div className="container mx-auto mt-12">
          <div className="relative isolate mx-auto max-w-4xl">
            <div className="aspect-video overflow-hidden rounded-xl border border-border shadow-lg ring-1 ring-border/60">
              <LeadImage image={leadImage} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { Hero286 };
