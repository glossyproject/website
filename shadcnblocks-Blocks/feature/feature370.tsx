"use client";

import { Bolt, Cloud, MessagesSquare, Star } from "lucide-react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "feature-1",
    title: "Cloud Storage",
    description:
      "Securely store and access your files from anywhere. Our distributed cloud architecture ensures 99.99% uptime with automatic backups.",
    icon: Cloud,
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    id: "feature-2",
    title: "Premium Support",
    description:
      "Get priority access to our expert support team. Resolve issues faster with dedicated assistance available around the clock.",
    icon: Star,
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    id: "feature-3",
    title: "Fast Performance",
    description:
      "Experience lightning-fast load times powered by our global CDN. Every request is optimized for speed and reliability.",
    icon: Bolt,
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
  {
    id: "feature-4",
    title: "Messaging Platform",
    description:
      "Real-time messaging with rich media support. Keep your team connected with threaded conversations and smart notifications.",
    icon: MessagesSquare,
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  },
];

interface Feature370Props {
  className?: string;
}

const Feature370 = ({ className }: Feature370Props) => {
  const [selection, setSelection] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const handleSelection = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setSelection(carouselApi.selectedScrollSnap());
    };
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className={cn("py-12 md:py-24 lg:py-32", className)}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="text-center">
            <Badge variant="outline" className="mb-3">
              Powerful Features
            </Badge>
            <h2 className="mx-auto max-w-3xl text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
              Discover What Makes Us Different
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:mt-4 md:text-base">
              Our platform combines powerful features with elegant design to
              help you accomplish more and achieve your goals.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <Carousel
              setApi={setCarouselApi}
              className="w-full [&>div]:h-full"
              opts={{ loop: true }}
            >
              <CarouselContent className="mx-0 h-full w-full">
                {features.map((feature) => (
                  <CarouselItem key={feature.id} className="px-0">
                    <div className="relative w-full">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="aspect-video w-full object-cover object-center"
                      />
                      <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-background/80 via-background/40 to-transparent p-6 md:p-8">
                        <div className="flex items-start gap-3">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <feature.icon className="size-5" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground md:text-xl">
                              {feature.title}
                            </h3>
                            <p className="mt-1 line-clamp-2 max-w-lg text-sm font-medium text-foreground/80">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {features.map((feature, i) => {
              const isSelected = selection === i;
              return (
                <button
                  key={feature.id}
                  type="button"
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200 md:px-5 md:py-4",
                    isSelected
                      ? "border-border bg-accent shadow-sm"
                      : "border-transparent hover:border-border hover:bg-accent/30",
                  )}
                  onClick={() => handleSelection(i)}
                >
                  <div
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors md:size-10",
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    <feature.icon className="size-4 md:size-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3
                      className={cn(
                        "text-sm font-semibold transition-colors md:text-base",
                        isSelected
                          ? "text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground md:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature370 };
