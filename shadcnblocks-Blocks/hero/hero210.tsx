"use client";

import { motion } from "framer-motion";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { Button } from "@/components/ui/button";

const Hero210 = () => {
  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
      alt: "Portrait of Joanna Doe in urban setting",
      name: "Joanna Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
      alt: "Portrait of Joan Doe in natural lighting",
      name: "Joan Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random2.jpeg",
      alt: "Portrait of Sarah Chen in studio setting",
      name: "Sarah Chen",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
      alt: "Portrait of Joanna Doe in urban setting",
      name: "Joanna Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
      alt: "Portrait of Joan Doe in natural lighting",
      name: "Joan Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random2.jpeg",
      alt: "Portrait of Sarah Chen in studio setting",
      name: "Sarah Chen",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
      alt: "Portrait of Joanna Doe in urban setting",
      name: "Joanna Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg",
      alt: "Portrait of Joan Doe in natural lighting",
      name: "Joan Doe",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random2.jpeg",
      alt: "Portrait of Sarah Chen in studio setting",
      name: "Sarah Chen",
    },
  ];

  const css = `
  .mySwiperHero210 {
    width: 100%;
    height: 420px;
    padding-bottom: 50px;
  }
  
  .mySwiperHero210 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
  }
  
  .mySwiperHero210 .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
    
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `;
  return (
    <section className="py-32">
      <style>{css}</style>
      <div className="container px-0 sm:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 px-8 sm:px-0">
          <h1 className="font-calSans text-center text-5xl lg:text-7xl">
            Boost your Professional Career
          </h1>
          <p className="text-muted-foreground text-center lg:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus odit eius tenetur quaerat, aperiam, iste ea ex
          </p>
        </div>

        <div className="relative mt-12 h-[420px] w-full lg:px-20">
          <div className="from-background md:w-58 sm:via-background absolute left-0 z-10 h-full w-12 bg-gradient-to-r to-transparent lg:left-16" />
          <div className="from-background md:w-58 sm:via-background absolute right-0 z-10 h-full w-12 bg-gradient-to-l to-transparent lg:right-16" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Swiper
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              effect="coverflow"
              grabCursor={true}
              slidesPerView="auto"
              centeredSlides={true}
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              className="mySwiperHero210"
              modules={[EffectCoverflow, Autoplay]}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="h-full w-full overflow-hidden rounded-3xl object-cover shadow-lg"
                    src={image.src}
                    alt={image.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        <div className="relative mx-auto mt-4 flex w-fit justify-center">
          <Button className="rounded-full px-4 py-2 active:scale-105">
            Get Started
          </Button>
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="-right-30 absolute top-3 h-1"
          >
            <p className="font-caveat text-xl tracking-tight">
              Try free tier now
            </p>
            <svg
              width="82"
              className="-translate-x-1/2 pr-4 dark:invert"
              height="45"
              viewBox="0 0 82 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                d="M80.2759 1.95576C67.8687 20.6075 49.1102 55.0246 21.9767 39.1283C15.3299 35.2342 12.7124 29.0489 9.38472 22.4634C9.24096 22.1789 6.96955 15.0574 7.91833 15.4904C10.4589 16.65 25.535 23.253 15.8013 18.8782C14.7716 18.4154 8.31018 14.0924 7.25323 14.6265C4.37354 16.0816 2.6512 30.2469 1.58546 33.4898"
                stroke="#1C1C1C"
                strokeWidth="2.40332"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Hero210 };
