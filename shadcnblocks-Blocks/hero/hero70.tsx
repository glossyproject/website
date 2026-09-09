"use client";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero70 = () => {
  return (
    <section className="bg-background relative pb-14 pt-2 lg:pt-4">
      <div className="container relative z-10 mx-auto">
         

        <div className="flex flex-col gap-8 py-4 lg:py-8">
          <div className="hidden items-center gap-6 lg:flex">
            <div className="text-foreground flex items-center gap-1.5">
              <CheckCircle className="size-6" />
              <span>Design Subscription Monthly</span>
            </div>
            <div className="text-foreground flex items-center gap-1.5">
              <CheckCircle className="size-6" />
              <span>Rapid Delivery</span>
            </div>
            <div className="text-foreground flex items-center gap-1.5">
              <CheckCircle className="size-6" />
              <span>Flexible Subscription</span>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-1 flex-col gap-4">
              <h1 className="text-foreground max-w-6xl text-4xl tracking-tighter lg:text-7xl xl:text-9xl">
                Pusat Perawatan & Perbaikan Mobil Anda
              </h1>
              <p className="text-foreground text-lg lg:text-2xl">
                Dari perbaikan mesin hingga tampilan makin berkilau —{" "}
                <span className="font-semibold">
                  Glossy Auto siap merawat mobil Anda dalam satu tempat.
                </span>
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="flex h-fit items-center gap-[10px] self-start rounded-full border-2 border-black px-2 py-1.5 text-sm font-semibold lg:px-4 lg:py-3.5 lg:text-base"
          >
            <img
              src="/whatsapp.svg"
              alt="WhatsApp icon"
              className="size-9 rounded-full object-cover lg:size-11"
            />
            <span>Konsultasikan Mobil Anda ↗</span>
          </Button>
        </div>
      </div>
      <div className="relative flex flex-col">
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          plugins={[
            AutoScroll({
              speed: 1,
            }),
            Autoplay({
              playOnInit: true,
              delay: 1000,
            }),
          ]}
          className="before:bg-linear-to-r after:bg-linear-to-l relative mx-auto w-full max-w-full overflow-hidden from-white to-transparent before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[20%] before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[20%] after:from-white after:to-transparent after:content-['']"
        >

        </Carousel>
      </div>
 
    </section>
  );
};

export { Hero70 };
