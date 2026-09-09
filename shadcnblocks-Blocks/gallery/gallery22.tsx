"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

const Gallery22 = () => {
  const images = [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
      alt: "Portrait of Joanna Doe in urban setting",
      name: "Joanna Doe",
      role: "Designer Chief",
      icon: <FaXTwitter className="text-background size-5" />,
      url: "#",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person1.jpeg",
      alt: "Portrait of Joan Doe in natural lighting",
      name: "Joan Doe",
      role: "Creative Director",
      icon: <FaXTwitter className="text-background size-5" />,
      url: "#",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
      alt: "Portrait of Sarah Chen in studio setting",
      name: "Sarah Chen",
      role: "Art Director",
      icon: <FaXTwitter className="text-background size-5" />,
      url: "#",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person3.jpeg",
      alt: "Portrait of Joanna Doe in urban setting",
      name: "Joanna Doe",
      role: "Designer Chief",
      icon: <FaXTwitter className="text-background size-5" />,
      url: "#",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person1.jpeg",
      alt: "Portrait of Joan Doe in natural lighting",
      name: "Joan Doe",
      role: "Creative Director",
      icon: <FaXTwitter className="text-background size-5" />,
      url: "#",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg",
      alt: "Portrait of Sarah Chen in studio setting",
      name: "Sarah Chen",
      role: "Art Director",
      icon: <FaXTwitter className="text-background size-5" />,
      url: "#",
    },
  ];

  const css = `
  .mySwiper22 {
    width: 100%;
    height: 350px;
  }
  
  .mySwiper22 .swiper-slide {
    border-radius: 0px;
    width: 200px;
    height: 300px;
    opacity: 0.2;
    transition: all 0.3s ease-in-out;
  }

  .mySwiper22 .swiper-slide-active {
    opacity: 1;
  }
  
  .mySwiper22 .swiper-slide img {
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

  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType>();

  return (
    <section className="py-32">
      <style>{css}</style>
      <div className="container relative max-w-3xl">
        {/* Left and right mask */}
        <div className="w-42 from-background pointer-events-none absolute left-0 z-20 h-full bg-gradient-to-r to-transparent" />
        <div className="w-42 from-background pointer-events-none absolute right-0 z-20 h-full bg-gradient-to-l to-transparent" />

        <div className="relative mx-auto flex max-w-3xl justify-center">
          <Swiper
            onSwiper={setSwiper}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            spaceBetween={100}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 80,
              modifier: 2.5,
            }}
            className="mySwiper22"
            modules={[EffectCoverflow, Autoplay]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  className="mt-4 h-full w-full overflow-hidden object-cover shadow-lg"
                  src={image.src}
                  alt={image.alt}
                />
                <a
                  href={image.url}
                  className="bg-foreground absolute -left-2.5 top-1 flex size-10 items-center justify-center transition-all duration-300 hover:rotate-12 hover:scale-90"
                >
                  {image.icon}
                  <span className="sr-only">{image.name}</span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute flex h-[450px] w-[230px] flex-col justify-end border p-4">
            <h3 className="mb-2 text-2xl font-semibold leading-7 tracking-tighter">
              {images[activeIndex].name}
            </h3>
            <p className="text-sm">{images[activeIndex].role}</p>
            <div className="absolute -bottom-12 right-0 flex gap-2 md:-right-20 md:bottom-0">
              <button
                className="bg-muted p-2 active:scale-95"
                onClick={(e) => {
                  e.preventDefault();
                  swiper?.slidePrev();
                }}
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                className="bg-muted p-2 active:scale-95"
                onClick={(e) => {
                  e.preventDefault();
                  swiper?.slideNext();
                }}
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery22 };
