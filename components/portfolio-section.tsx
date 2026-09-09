"use client"

import Image from "next/image"
import { Oswald } from "next/font/google"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const heading = Oswald({
  subsets: ["latin"],
  weight: "600",
})

const photos = [
  {
    src: "/images/portfolio-1.jpg",
    alt: "Detail tampilan eksterior mobil",
  },
  {
    src: "/images/portfolio-2.jpg",
    alt: "Detail ruang mesin mobil",
  },
  {
    src: "/images/portfolio-3.jpg",
    alt: "Kilau permukaan cat mobil",
  },
]

export default function PortfolioSection() {
  return (
    <section
      aria-labelledby="portfolio-title"
      className="bg-white px-8 py-14 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="portfolio-title"
          className={`${heading.className} mb-8 text-center text-3xl uppercase not-italic leading-tight tracking-tight text-zinc-950 md:mb-10 md:text-4xl`}
        >
          Our Portfolio
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {photos.map((photo) => (
              <CarouselItem
                key={photo.src}
                className="basis-full pl-3 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-zinc-100">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            aria-label="Foto sebelumnya"
            className="-left-4 z-10 size-8 border-zinc-200 bg-white text-zinc-800 shadow-sm hover:bg-zinc-100 disabled:opacity-40"
          />

          <CarouselNext
            aria-label="Foto berikutnya"
            className="-right-4 z-10 size-8 border-zinc-200 bg-white text-zinc-800 shadow-sm hover:bg-zinc-100 disabled:opacity-40"
          />
        </Carousel>
      </div>
    </section>
  )
}