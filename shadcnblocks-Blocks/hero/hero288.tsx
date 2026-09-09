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

interface Hero288Props extends HeroFeatureIconsProps {}
type Props = Partial<Hero288Props>;

const defaultProps: Hero288Props = {
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

/** Compact hero highlights three proof chips above the preview. */
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

const Hero288 = (props: Props) => {
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
    <section className={cn("py-24 lg:py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            {badge && (
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
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
            <div className="flex flex-wrap justify-center gap-3">
              {visibleFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <span
                    key={feature.title}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm font-medium text-foreground"
                  >
                    <Icon className="size-4 text-primary" />
                    {feature.title}
                  </span>
                );
              })}
            </div>
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

export { Hero288 };
