"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero183 = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section className="overflow-hidden py-32">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <Badge variant="outline">Premium</Badge>
          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Your Ultimate Business Solution.
          </h1>
          <p className="text-muted-foreground mt-5 text-lg md:text-xl lg:px-32">
            Transform your business operations with our cutting-edge solutions
            designed to streamline workflows and boost team efficiency.
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <Button size="lg">Get started</Button>
            <Button variant="outline" size="lg">
              Learn more
            </Button>
          </div>
        </div>
        <div className="relative mx-10 mt-16 hidden md:block">
          <div className="absolute -left-20 -right-20 top-0 z-10 h-px bg-[linear-gradient(to_right,transparent,hsl(var(--border))_4%,hsl(var(--border))_96%,transparent)]"></div>
          <div className="absolute -left-20 -right-20 bottom-0 z-10 h-px bg-[linear-gradient(to_right,transparent,hsl(var(--border))_4%,hsl(var(--border))_96%,transparent)]"></div>
          <div className="relative grid grid-cols-7 grid-rows-11 gap-4 lg:gap-6">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="placeholder"
              className="border-border col-span-2 row-span-4 row-start-2 aspect-video h-full rounded-lg border object-cover"
            />
            <div className="bg-muted col-span-3 col-start-3 row-span-full m-px rounded-lg p-2.5">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                alt="placeholder"
                className="border-border aspect-video h-full rounded-lg border object-cover"
              />
            </div>
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
              alt="placeholder"
              className="border-border col-span-2 row-span-5 row-start-2 aspect-video h-full rounded-lg border object-cover"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
              alt="placeholder"
              className="border-border col-span-2 row-span-5 aspect-video h-full rounded-lg border object-cover"
            />
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
              alt="placeholder"
              className="border-border col-span-2 row-span-4 aspect-video h-full rounded-lg border object-cover"
            />
            <div className="absolute -bottom-[10%] -top-[10%] col-start-3 row-span-full row-start-1 w-px bg-[linear-gradient(to_bottom,transparent,hsl(var(--border))_5%,hsl(var(--border))_95%,transparent)]"></div>
            <div className="absolute -bottom-[10%] -left-[17px] -top-[10%] col-start-6 row-span-full row-start-1 w-px bg-[linear-gradient(to_bottom,transparent,hsl(var(--border))_5%,hsl(var(--border))_95%,transparent)] lg:-left-[25px]"></div>
          </div>
          <div className="bg-linear-to-b via-border absolute -bottom-1/2 -left-6 -top-full w-px from-transparent via-60% to-transparent"></div>
          <div className="bg-linear-to-b via-border absolute -bottom-1/2 -right-6 -top-full w-px from-transparent via-60% to-transparent"></div>
        </div>
        <div className="mt-16 md:hidden">
          <Carousel setApi={setApi} className="mx-auto max-w-md">
            <CarouselContent className="max-h-full">
              <CarouselItem>
                <div className="flex flex-col gap-3">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                    alt="placeholder"
                    className="border-border aspect-video rounded-lg border object-cover"
                  />
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                    alt="placeholder"
                    className="aspect-4/3 border-border rounded-lg border object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="placeholder"
                  className="border-border h-full rounded-lg border object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col gap-3">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                    alt="placeholder"
                    className="aspect-4/3 border-border rounded-lg border object-cover"
                  />
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg"
                    alt="placeholder"
                    className="border-border aspect-video rounded-lg border object-cover"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="mt-6 flex justify-center">
              {Array.from({ length: 3 }).map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "bg-muted-foreground/20 mx-1.5 inline-block size-2 cursor-pointer rounded-full transition-colors duration-300",
                    index + 1 === current && "bg-muted-foreground/60",
                  )}
                  onClick={() => api && api.scrollTo(index)}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Hero183 };
