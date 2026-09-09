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
  logo?: Image;
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

interface Hero290Props extends HeroFeatureIconsProps {}
type Props = Partial<Hero290Props>;

const defaultProps: Hero290Props = {
  badge: "Platform",
  logo: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "Logo",
  },
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

/** Logo badge leads into four bordered tiles above the screenshot. */
const MAX_FEATURES = 4;

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

const Hero290 = (props: Props) => {
  const {
    badge,
    logo,
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
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="flex flex-col items-center gap-5 text-center">
            {logo && (
              <img
                src={logo.src}
                alt={logo.alt}
                className="size-12 lg:size-14"
              />
            )}
            {badge && (
              <p className="text-sm font-medium text-muted-foreground">
                {badge}
              </p>
            )}
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-pretty lg:text-5xl">
              {heading}
            </h1>
            {description && (
              <p className="max-w-2xl text-balance text-muted-foreground lg:text-lg">
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
          <div className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {visibleFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex flex-col gap-3 bg-background p-5 text-left"
                >
                  <Icon className="size-5 text-primary" />
                  <p className="font-semibold text-foreground">
                    {feature.title}
                  </p>
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

export { Hero290 };
