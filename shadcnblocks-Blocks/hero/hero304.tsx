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

interface Hero304Props extends HeroFeatureIconsProps {}
type Props = Partial<Hero304Props>;

const defaultProps: Hero304Props = {
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

/** Sticky headline column paired with a scrolling stack of distinct feature surfaces. */
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

const Hero304 = (props: Props) => {
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
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="space-y-8 lg:sticky lg:top-28 lg:self-start">
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
            {leadImage && (
              <div className="hidden overflow-hidden rounded-xl border border-border shadow-sm lg:block">
                <div className="aspect-5/4">
                  <LeadImage image={leadImage} />
                </div>
              </div>
            )}
          </div>

          <div className="mt-14 space-y-5 lg:mt-0">
            {leadImage && (
              <div className="overflow-hidden rounded-xl border border-border shadow-sm lg:hidden">
                <div className="aspect-video">
                  <LeadImage image={leadImage} />
                </div>
              </div>
            )}
            {visibleFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={cn(
                    "rounded-xl border border-border bg-card p-6 shadow-sm md:p-8",
                    index === 1 && "lg:-translate-x-2",
                    index === 3 && "lg:translate-x-2",
                  )}
                >
                  <div className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <Icon className="size-5 text-primary" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground">
                        {feature.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-balance text-muted-foreground md:text-base">
                        {feature.description}
                      </p>
                    </div>
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

export { Hero304 };
