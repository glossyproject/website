"use client";

import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type Product = {
  name: string;
  image: string;
  href: string;
};

interface HeroCarouselItem {
  image: string;
  title?: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
  product?: Product;
}

const HERO_CAROUSEL = [
  {
    title: "Effortless Hair Elegance",
    description:
      "Refined hair accessories designed to elevate everyday looks with a subtle golden touch.",
    cta: {
      label: "Shop Hair Accessories",
      href: "#",
    },
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Elegant-Blonde-Hairstyle-2.png",
    product: {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Golden-Hair-Clip-Close-Up-2.png",
      href: "#",
      name: "Golden Hair Clip",
    },
  },
  {
    title: "Timeless Street Style",
    description:
      "Classic silhouettes and neutral tones for confident, modern styling.",
    cta: {
      label: "Shop Hats",
      href: "#",
    },
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Fashionable-Pose-2.png",
    product: {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Stylish-Beige-Fedora-1.png",
      href: "#",
      name: "Beige Fedora Hat",
    },
  },
  {
    title: "Statement Details",
    description:
      "Elegant jewelry that adds character and confidence to every outfit.",
    cta: {
      label: "Explore Jewelry",
      href: "#",
    },
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Stylish-Seated-Portrait-2.png",
    product: {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Elegant-Hand-Jewelry-1.png",
      href: "#",
      name: "Hand Chain Jewelry",
    },
  },
  {
    title: "Bold & Polished",
    description:
      "Sleek sunglasses crafted for sharp looks and everyday protection.",
    cta: {
      label: "Shop Sunglasses",
      href: "#",
    },
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Stylish-Woman-Portrait-2.png",
    product: {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Stylish-Sunglasses-Close-Up-2.png",
      href: "#",
      name: "Modern Sunglasses",
    },
  },
  {
    title: "Modern Casual Wear",
    description:
      "Relaxed fits and clean lines for effortless everyday dressing.",
    cta: {
      label: "Shop Apparel",
      href: "#",
    },
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Modern-Casual-Style-m-2.png",
    product: {
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Modern-Casual-Style-2.png",
      href: "#",
      name: "Casual Style Outfit",
    },
  },
];

interface EcommerceHero8Props {
  className?: string;
  carouselItems: HeroCarouselItem[];
}

const EcommerceHero8 = ({
  className,
  carouselItems = HERO_CAROUSEL,
}: EcommerceHero8Props) => {
  const [mainCarouselApi, setMainCarouselApi] = useState<CarouselApi>();
  const [secondaryCarouselApi, setSecondaryCarouselApi] =
    useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!mainCarouselApi) return;

    const updateCurrent = (api: CarouselApi) => {
      if (!api) return;
      setCurrent(api?.selectedScrollSnap());
      secondaryCarouselApi?.scrollTo(api?.selectedScrollSnap());
    };
    mainCarouselApi.on("reInit", updateCurrent).on("select", updateCurrent);

    return () => {
      mainCarouselApi.off("reInit", updateCurrent).off("select", updateCurrent);
    };
  }, [mainCarouselApi, secondaryCarouselApi]);

  return (
    <section className={cn("", className)}>
      <div className="relative space-y-5">
        <Carousel
          setApi={setMainCarouselApi}
          opts={{
            loop: true,
          }}
          plugins={[Autoplay()]}
        >
          <CarouselContent className="m-0">
            {carouselItems.map(({ title, image, description, cta }, index) => (
              <CarouselItem
                key={index}
                className="h-dvh min-h-150 bg-muted p-0"
              >
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                  data-state={current === index ? "active" : "inactive"}
                  className="group relative size-full bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:bg-black/40"
                >
                  <div className="relative z-10 flex size-full flex-col justify-end px-5 pb-50 lg:py-15">
                    <div className="flex">
                      <div className="space-y-7.5 lg:basis-[calc(100%-620px)]">
                        <h2 className="max-w-100 font-serif text-6xl text-white delay-500 duration-600 group-data-[state=active]:animate-in group-data-[state=active]:slide-in-from-bottom-30 group-data-[state=active]:fade-in group-data-[state=inactive]:opacity-0">
                          {title}
                        </h2>
                        <p className="max-w-100 text-lg text-balance text-white duration-800 group-data-[state=active]:animate-in group-data-[state=active]:slide-in-from-bottom-60 group-data-[state=active]:fade-in">
                          {description}
                        </p>
                        {cta && (
                          <div className="duration-1000 group-data-[state=active]:animate-in group-data-[state=active]:slide-in-from-bottom-80 group-data-[state=active]:fade-in">
                            <Button asChild size="lg" variant="outline">
                              <a href={cta?.href}>{cta?.label}</a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="lg:absolute lg:right-0 lg:bottom-5">
          <div className="space-y-4.5 pl-5">
            <h3 className="font-light uppercase lg:text-white">
              Discover Our Collection
            </h3>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setSecondaryCarouselApi}
              className="lg:max-w-150"
            >
              <CarouselContent>
                {carouselItems.map(({ product }, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-[75%] lg:basis-[60%]"
                  >
                    <a
                      href={product?.href}
                      className="group relative block aspect-[1.4] overflow-hidden p-3 after:absolute after:inset-0 after:bg-black/30"
                    >
                      <div className="relative z-10 flex size-full flex-col justify-end">
                        <h3 className="font-serif text-xl font-semibold text-white sm:text-2xl">
                          {product?.name}
                        </h3>
                      </div>

                      <div className="absolute inset-0">
                        <img
                          src={product?.image}
                          alt={product?.name}
                          className="block size-full origin-center object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export { EcommerceHero8 };
