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

interface Hero302Props extends HeroFeatureIconsProps {}
type Props = Partial<Hero302Props>;

const defaultProps: Hero302Props = {
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

/** Optional lead media, then intro column + right rail of icon proof stacked with a vertical rule. */
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

const Hero302 = (props: Props) => {
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
        <div className="mx-auto max-w-6xl space-y-12">
          {leadImage && (
            <div className="relative isolate overflow-hidden rounded-xl border border-border shadow-sm ring-1 ring-border/60">
              <div className="aspect-video max-h-[420px]">
                <LeadImage image={leadImage} />
              </div>
            </div>
          )}

          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="space-y-6 lg:col-span-7">
              {badge && (
                <p className="text-sm font-medium text-muted-foreground">
                  {badge}
                </p>
              )}
              <h1 className="text-4xl font-semibold tracking-tight text-pretty lg:text-5xl">
                {heading}
              </h1>
              {description && (
                <p className="max-w-xl text-balance text-muted-foreground lg:text-lg">
                  {description}
                </p>
              )}
              <div className="flex flex-col gap-3 sm:flex-row">
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

            <div className="border-border lg:col-span-5 lg:border-l lg:pl-10 xl:pl-12">
              <ul className="space-y-10">
                {visibleFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <li key={feature.title}>
                      <div className="flex gap-4">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-muted">
                          <Icon className="size-5 text-primary" aria-hidden />
                        </span>
                        <div className="min-w-0 space-y-2">
                          <p className="leading-snug font-semibold text-foreground">
                            {feature.title}
                          </p>
                          <p className="text-sm leading-relaxed text-balance text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero302 };
