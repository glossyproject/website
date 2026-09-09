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

interface Hero305Props extends HeroFeatureIconsProps {}
type Props = Partial<Hero305Props>;

const defaultProps: Hero305Props = {
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

/** Two-column editorial headline split plus asymmetric six-column feature mosaic (four tiles). */
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

const mosaicSpans = [
  "md:col-span-4 md:min-h-[180px]",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",
];

const Hero305 = (props: Props) => {
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
        <div className="mx-auto max-w-6xl space-y-14 lg:space-y-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-x-16 lg:gap-y-12">
            <div className="space-y-6">
              {badge && (
                <p className="text-sm font-medium text-muted-foreground">
                  {badge}
                </p>
              )}
              <h1 className="text-4xl font-semibold tracking-tight text-pretty lg:text-5xl xl:text-[3rem] xl:leading-tight">
                {heading}
              </h1>
            </div>
            <div className="flex flex-col gap-8 lg:pb-2">
              {description && (
                <p className="text-xl leading-snug text-muted-foreground md:text-2xl md:leading-snug">
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
          </div>

          <div className="grid gap-4 md:grid-cols-6 md:gap-5">
            {visibleFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={cn(
                    "flex flex-col gap-4 rounded-xl border border-border bg-muted/30 p-6 md:p-7",
                    mosaicSpans[index % mosaicSpans.length],
                  )}
                >
                  <Icon className="size-6 text-primary" aria-hidden />
                  <div className="mt-auto">
                    <p className="font-semibold text-foreground">
                      {feature.title}
                    </p>
                    <p className="mt-2 text-sm text-balance text-muted-foreground md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {leadImage && (
            <div className="relative isolate mx-auto max-w-5xl overflow-hidden rounded-xl border border-border shadow-md ring-1 ring-border/60">
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

export { Hero305 };
