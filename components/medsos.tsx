"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const socialPosts = [
  {
    platform: "Instagram",
    image: "/features-img/exterior-detailing.png",
    caption: "Hasil pengerjaan terbaru Glossy Auto",
    url: "https://www.instagram.com/reel/Dczv1CsTdo-/?utm_source=ig_embed&utm_campaign=loading",
  },
  {
    platform: "TikTok",
    image: "/features-img/engine-detailing.png",
    caption: "Behind the scenes proses pengerjaan",
    url: "#",
  },
  {
    platform: "Instagram",
    image: "/features-img/nano-coating.png",
    caption: "Detail yang membuat hasil berbeda",
    url: "#",
  },
]

export default function PortfolioSection() {
  return (
    <section className="py-8" aria-labelledby="social-media-title">
      <div className="container flex flex-col items-center gap-12 lg:px-16">
        <div className="text-center">
          <h2
            id="social-media-title"
            className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl"
          >
            IKUTI GLOSSY AUTO
          </h2>
          <p className="mx-auto max-w-3xl text-balance text-xl font-medium">
            Lihat lebih dekat proses pengerjaan, hasil terbaru, dan aktivitas Glossy Auto setiap harinya.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {socialPosts.map((post) => (
              <CarouselItem
                key={`${post.platform}-${post.image}`}
                className="basis-full pl-3 sm:basis-1/2 lg:basis-1/3"
              >
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[4/5] overflow-hidden rounded-md bg-zinc-100"
                  aria-label={`${post.platform}: ${post.caption}`}
                >
                  <Image
                    src={post.image}
                    alt={post.caption}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                        {post.platform}
                      </p>
                      <p className="text-base font-semibold leading-snug md:text-lg">
                        {post.caption}
                      </p>
                    </div>
                    <ArrowUpRight aria-hidden="true" className="size-6 shrink-0" />
                  </div>
                </a>
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

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-900 underline decoration-zinc-300 underline-offset-8 transition-colors hover:text-zinc-500"
        >
          Lihat Selengkapnya di Media Sosial
        </a>
      </div>
    </section>
  )
}