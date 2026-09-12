"use client"

import { useState, type ReactElement } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const banners = [
  { src: "/hero-banner/hero1.png", alt: "Layanan Glossy Auto" },
  { src: "/hero-banner/hero2.png", alt: "Coating dan detailing Glossy Auto" },
  { src: "/hero-banner/hero3.png", alt: "Repair dan repaint Glossy Auto" },
]

export default function HeroCarousel() {
  const [paused, setPaused] = useState(false)

  const [autoplay] = useState(() =>
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  )

  function toggleAutoplay() {
    if (paused) {
      autoplay.play()
    } else {
      autoplay.stop()
    }

    setPaused(!paused)
  }

  return (
    <section id="hero" aria-label="Banner Glossy Auto" className="w-full overflow-hidden bg-black">
      <div className="mx-auto w-full max-w-[1280px] px-0 md:px-0 lg:px-0">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay]}
          className="relative w-full"
        >
          <CarouselContent className="ml-0">
            {banners.map((banner, index) => (
              <CarouselItem key={banner.src} className="basis-full pl-0">
                <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[16/9]">
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 1280px"
                    className="object-contain object-center"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            aria-label="Banner sebelumnya"
            className="left-3 z-10 border-white/20 bg-black/40 text-white hover:bg-black/70 hover:text-white"
          />

          <CarouselNext
            aria-label="Banner berikutnya"
            className="right-3 z-10 border-white/20 bg-black/40 text-white hover:bg-black/70 hover:text-white"
          />

          <button
            type="button"
            onClick={toggleAutoplay}
            aria-label={paused ? "Putar carousel" : "Jeda carousel"}
            className="absolute bottom-3 right-3 z-10 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white hover:bg-black/80"
          >
            {paused ? "▶ Putar" : "Ⅱ Jeda"}
          </button>
        </Carousel>
      </div>
    </section>
  )
}

export function HeroCarouselWithText(): ReactElement {
  return (
    <section className="w-full bg-white py-10">
      <div className="container mx-auto flex w-full flex-col items-center gap-6 lg:flex-row lg:justify-between">
        <div className="max-w-xl space-y-4 text-center lg:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">
            Glossy Auto
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Mobil Anda kembali kinclong, nyaman, dan siap dipakai.
          </h2>
          <p className="text-base text-slate-600 md:text-lg">
            Perawatan dan perbaikan lengkap untuk menjaga tampilan, performa, dan rasa aman saat berkendara.
          </p>
        </div>

        <div className="w-full max-w-3xl">
          <HeroCarousel />
        </div>
      </div>
    </section>
  )
}