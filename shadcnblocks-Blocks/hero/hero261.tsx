import {
  ArrowRight,
  Braces,
  Cpu,
  Keyboard,
} from "lucide-react";

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
  features?: HeroFeatureSliderFeature[];
  images: [HeroFeatureSliderImage, ...HeroFeatureSliderImage[]];
  className?: string;
}

interface Hero261Props extends HeroFeatureSliderProps {}
type Props = Partial<Hero261Props>;

const defaultProps: Hero261Props = {
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

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-muted-foreground",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className,
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "mask-[linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "mask-[linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ],
        )}
      />
    </div>
  );
};

/** Right-column list; cap matches carousel image count from pack. */
const MAX_FEATURES = 3;

const Hero261 = (props: Props) => {
  const {
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
  const heroImage = images[0];

  return (
    <section
      className={cn("overflow-hidden py-28 lg:py-32 lg:pt-44", className)}
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
          {/* Left side - Main content */}
          <div className="flex-1">
            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-pretty text-foreground md:text-4xl lg:text-5xl">
              {heading}
            </h1>

            {description && (
              <p className="mt-5 text-xl text-balance text-muted-foreground md:text-3xl">
                {description}
              </p>
            )}

            <div className="mt-8 flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
              {buttonPrimary && (
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={buttonPrimary.href}>
                    {buttonPrimary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
              {buttonSecondary && (
                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <a href={buttonSecondary.href}>{buttonSecondary.text}</a>
                </Button>
              )}
            </div>
          </div>

          {/* Right side - Features */}
          <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
            <DashedLine
              orientation="vertical"
              className="absolute top-0 left-0 max-lg:hidden"
            />
            <DashedLine
              orientation="horizontal"
              className="absolute top-0 lg:hidden"
            />
            {visibleFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                  <Icon className="mt-0.5 size-3 shrink-0 text-primary lg:size-3.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="max-w-sm text-sm text-balance text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 md:mt-20 lg:container lg:mx-auto lg:mt-24">
        <div className="relative aspect-video w-full">
          {/* Light grid mask background */}
          <div className="absolute inset-x-0 -top-32 h-96 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_8px),repeating-linear-gradient(0deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] bg-size-[24px_1px,1px_24px] text-primary opacity-10" />
          {heroImage.srcDark ? (
            <>
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="absolute inset-0 size-full rounded-2xl border border-border object-cover object-top-left max-lg:rounded-tr-none dark:hidden"
              />
              <img
                src={heroImage.srcDark}
                alt={heroImage.alt}
                className="absolute inset-0 hidden size-full rounded-2xl border border-border object-cover object-top-left max-lg:rounded-tr-none dark:block"
              />
            </>
          ) : (
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="absolute inset-0 size-full rounded-2xl border border-border object-cover object-top-left max-lg:rounded-tr-none"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export { Hero261 };
