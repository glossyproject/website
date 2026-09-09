import {
  ArrowRight,
  Braces,
  Cpu,
  Keyboard,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

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

interface Hero291Props extends HeroFeatureIconsProps {}
type Props = Partial<Hero291Props>;

const defaultProps: Hero291Props = {
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

/** Three-column comparison treats each feature as its own pillar. */
const MAX_FEATURES = 3;

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

const Hero291 = (props: Props) => {
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
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl space-y-14">
          <div className="space-y-5 text-center">
            {badge && (
              <p className="text-sm font-medium text-muted-foreground">
                {badge}
              </p>
            )}
            <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-pretty lg:text-5xl">
              {heading}
            </h1>
            {description && (
              <p className="mx-auto max-w-2xl text-balance text-muted-foreground lg:text-lg">
                {description}
              </p>
            )}
            <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
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
          <div className="grid gap-8 border-y border-border py-10 md:grid-cols-3 md:gap-0 md:py-12">
            {visibleFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={cn(
                    "flex flex-col gap-4 px-2 text-center md:px-6",
                    index < visibleFeatures.length - 1 &&
                      "border-b border-border pb-8 md:border-r md:border-b-0 md:pb-0",
                  )}
                >
                  <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-muted">
                    <Icon className="size-6 text-primary" />
                  </span>
                  <h2 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h2>
                  <p className="text-sm text-balance text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
          {leadImage && (
            <div className="overflow-hidden rounded-xl border border-border">
              <div className="aspect-video">
                <LeadImage image={leadImage} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Hero291 };
