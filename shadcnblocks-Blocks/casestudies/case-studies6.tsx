"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";

interface CaseStudiesCarouselItem {
  id: string;
  logo: string;
  logoAlt?: string;
  title: string;
  description: string;
  href: string;
  video: string;
}

interface CaseStudiesCarouselProps {
  title: string;
  description: string;
  items: CaseStudiesCarouselItem[];
  className?: string;
}

interface CaseStudies6Props extends CaseStudiesCarouselProps {}

type Props = Partial<CaseStudies6Props>;

const defaultProps: CaseStudies6Props = {
  title: "GALERI HASIL PEKERJAAN KAMI",
  description:
    "Lihat langsung kualitas pengerjaan Glossy Auto melalui berbagai hasil perawatan, detailing, coating, hingga repaint kendaraan.",

  items: [
    {
      id: "nano-coating",
      logo: "https://res.cloudinary.com/hnomzl4p/image/upload/v1788149523/PNG_LOGO_GLOSSY_TAMENG.png",
      logoAlt: "Glossy Auto",
      title: "Ceramic Coating",
      description: "Proses ceramic coating dengan hasil glossy dan bergaransi sampai 5 tahun.",
      href: "#",
      video:
        "https://res.cloudinary.com/hnomzl4p/video/upload/v1789026169/snaptik_7645541765335780626_v3.mp4",
    },
    {
     id: "biled",
      logo: "https://res.cloudinary.com/hnomzl4p/image/upload/v1788149523/PNG_LOGO_GLOSSY_TAMENG.png",
      logoAlt: "Glossy Auto",
      title: "Pasang Biled",
      description: "Pemasangan biled untuk pencahayaan yang lebih terang.",
      href: "#",
      video:
        "https://res.cloudinary.com/hnomzl4p/video/upload/v1789026262/snaptik_7632740852971916552_v3.mp4",
    },
    {
      id: "customer-success",
      logo: "https://res.cloudinary.com/hnomzl4p/image/upload/v1788149523/PNG_LOGO_GLOSSY_TAMENG.png",
      logoAlt: "Glossy Auto",
      title: "Interior Detailing",
      description: "Perawatan interior kendaraan secara menyeluruh dengan hasil yang bersih dan nyaman.",
      href: "#",
      video:
        "https://res.cloudinary.com/hnomzl4p/video/upload/v1789026414/snaptik_7641863114178235666_v3.mp4",
    },
    {
      id: "security-review",
      logo: "https://res.cloudinary.com/hnomzl4p/image/upload/v1788149523/PNG_LOGO_GLOSSY_TAMENG.png",
      logoAlt: "Glossy Auto",
      title: "Rush Protection",
      description: "Finishing repaint dengan hasil presisi.",
      href: "#",
      video:
        "https://res.cloudinary.com/hnomzl4p/video/upload/v1789026538/snaptik_7656303579967327495_v3.mp4",
    },
    {
      id: "design-system",
      logo: "https://res.cloudinary.com/hnomzl4p/image/upload/v1788149523/PNG_LOGO_GLOSSY_TAMENG.png",
      logoAlt: "Glossy Auto",
      title: "Exterior Detailing",
      description: "Perawatan exterior kendaraan secara menyeluruh.",
      href: "#",
      video:
        "https://res.cloudinary.com/hnomzl4p/video/upload/v1789026631/snaptik_7671872276832210184_v3.mp4",
    },
    {
      id: "revenue-ops",
      logo: "https://res.cloudinary.com/hnomzl4p/image/upload/v1788149523/PNG_LOGO_GLOSSY_TAMENG.png",
      logoAlt: "Glossy Auto",
      title: "Engine Detailing",
      description: "Detailing area mesin dengan proses yang aman.",
      href: "#",
      video:
        "https://res.cloudinary.com/hnomzl4p/video/upload/v1789026765/snaptik_7680162081164807431_v3.mp4",
    },
  ],
};

const CaseStudies = (props: Props) => {
  const { title, description, items, className } = {
    ...defaultProps,
    ...props,
  };

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    updateSelection();

    carouselApi.on("select", updateSelection);

    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className={cn("py-8", className)}>
      <div className="container flex flex-col items-center gap-16 lg:px-16">
        <div className="relative w-full text-center">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
            <h1 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
              {title}
            </h1>

            <p className="mx-auto max-w-3xl text-balance text-xl font-medium">
              {description}
            </p>
          </div>

          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
              aria-label="Previous slide"
            >
              <ArrowLeft className="size-5" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
              aria-label="Next slide"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mt-12 md:mt-16">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_52%,transparent)_34%,color-mix(in_oklab,var(--background)_14%,transparent)_68%,transparent_100%)] transition-opacity duration-300 sm:w-28 md:w-36",
              !canScrollPrev && "opacity-0",
            )}
          />

          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-[linear-gradient(270deg,var(--background)_0%,color-mix(in_oklab,var(--background)_52%,transparent)_34%,color-mix(in_oklab,var(--background)_14%,transparent)_68%,transparent_100%)] transition-opacity duration-300 sm:w-28 md:w-36",
              !canScrollNext && "opacity-0",
            )}
          />

          <CarouselContent className="-ml-5">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-5 lg:max-w-[360px]"
              >
                <a
                  href={item.href}
                  className="group block rounded-xl"
                >
                  <div className="relative h-full min-h-108 max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-video">

                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/28 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-3 flex h-9 items-center md:mb-4">
                        <img
                          src={item.logo}
                          alt={item.logoAlt ?? ""}
                          className="max-h-8 w-auto max-w-[160px] object-contain object-left"
                        />
                      </div>

                      <div className="text-xl font-semibold">
                        {item.title}
                      </div>

                      <p className="mt-3 line-clamp-2 text-sm text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index
                  ? "bg-primary"
                  : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { CaseStudies };