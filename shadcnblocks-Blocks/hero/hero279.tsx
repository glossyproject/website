"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  Braces,
  Cpu,
  Keyboard,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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

interface Hero279Props extends HeroFeatureSliderProps {}
type Props = Partial<Hero279Props>;

const defaultProps: Hero279Props = {
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

/** Centered grid supports up to three columns on large screens. */
const MAX_FEATURES = 3;
/** Top carousel uses three slides in this layout. */
const MAX_IMAGES = 3;

const Hero279 = (props: Props) => {
  const {
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

  const resolvedImages =
    images.length > 0 ? images : defaultProps.images;
  const activeImages = resolvedImages.slice(0, MAX_IMAGES);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className={cn("relative overflow-hidden py-32", className)}>
      <div className="container mx-auto">
        {/* Carousel Section */}
        <div className="relative mx-auto mb-16 w-full max-w-5xl">
          <Carousel
            className="w-full"
            setApi={setApi}
            opts={{
              loop: true,
            }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
          >
            <CarouselContent>
              {activeImages.map((image, index) => (
                <CarouselItem key={index}>
                  {image.srcDark ? (
                    <>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="aspect-video w-full rounded-2xl border border-border object-contain dark:hidden"
                      />
                      <img
                        src={image.srcDark}
                        alt={image.alt}
                        className="hidden aspect-video w-full rounded-2xl border border-border object-contain dark:block"
                      />
                    </>
                  ) : (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="aspect-video w-full rounded-2xl border border-border object-contain"
                    />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <SlideIndicator
            currentSlide={currentSlide}
            images={activeImages}
            className="mt-8"
            api={api}
          />
        </div>

        {/* Content Section */}
        <div className="space-y-12 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="mx-auto max-w-3xl text-2xl font-semibold tracking-tight text-pretty sm:text-3xl md:text-4xl lg:text-5xl">
              {heading}
            </h1>
          </div>

          {/* Features */}
          <div
            className={cn(
              "mx-auto grid max-w-6xl gap-8",
              featureCount === 1 && "max-w-xs grid-cols-1",
              featureCount === 2 && "max-w-2xl grid-cols-1 md:grid-cols-2",
              featureCount === 3 && "max-w-4xl grid-cols-1 md:grid-cols-3",
              featureCount === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
            )}
          >
            {visibleFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="space-y-4 text-center">
                  <div className="flex justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-balance text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {buttonPrimary && (
              <Button
                asChild
                size="lg"
                aria-label={buttonPrimary.text}
                className="gap-2"
              >
                <a href={buttonPrimary.href}>
                  {buttonPrimary.text}
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
            )}
            {buttonSecondary && (
              <Button
                asChild
                aria-label={buttonSecondary.text}
                variant="outline"
                size="lg"
              >
                <a href={buttonSecondary.href}>{buttonSecondary.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SlideIndicatorProps {
  currentSlide: number;
  images: HeroFeatureSliderImage[];
  className?: string;
  api: CarouselApi | null;
}

const SlideIndicator = ({
  currentSlide,
  images,
  className,
  api,
}: SlideIndicatorProps) => {
  return (
    <div
      className={cn("flex flex-col items-center gap-2 font-medium", className)}
    >
      <div className="">
        <span className="text-muted-foreground">
          {currentSlide + 1} of {images.length} —{" "}
        </span>
        <span className="text-primary">
          {images[currentSlide]?.label ?? ""}
        </span>
      </div>
      <div className="flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-0.5 w-6 rounded-full transition-colors",
              index === currentSlide
                ? "bg-primary"
                : "bg-primary/20 hover:bg-primary/40",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export { Hero279 };
