"use client"

import { Oswald } from "next/font/google"
import { Star } from "lucide-react"

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

// 
const testimonials = [
  {
    name: "Kinan Efran Harahap",
    service: "",
    rating: 5,
    review: "Rekomendasi dari orang ke orang, pelayanan bagus dan selalu di update setiap hari.",
  },
  {
    name: "Betta Cilincing",
    service: "",
    rating: 5,
    review: "Bagus banget hasil pengerjaannya, memang harga gak menghiyanati hasil. The best glossy auto. Next akan aku bawa kawanku dan keluargaku ke sini👍👍👍",
  },
  {
    name: "Ayu Wulan",
    service: "",
    rating: 5,
    review: "Tambah racing mobilku variasi di bro Fariz, thank you bro Fariz 🙏🙏",
  },
  {
    name: "Tata Delvili Yanti",
    service: "",
    rating: 5,
    review: "pengerjaan sangat baik dan mobil aku jadi seperti baru",
  },
]

export default function TestimonialSection() {
  return (
    <section
      aria-labelledby="testimonial-title"
      className="bg-white px-8 py-16 md:px-12 md:py-24"
    >
      <div className="container flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h1 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Our Trusted Products
          </h1>
           <p className="mx-auto max-w-3xl text-balance text-xl font-medium">
            Apa kata mereka tentang layanan kami
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 items-stretch">
            {testimonials.map((item) => (
              <CarouselItem
                key={item.name}
                className="flex basis-full pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <article className="min-h-[290px] w-full rounded-xl border border-zinc-200 bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div
                      aria-hidden="true"
                      className="flex size-11 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-bold text-zinc-700"
                    >
                      {item.name
                        .split(" ")
                        .slice(0, 2)
                        .map((word) => word[0])
                        .join("")}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        {item.name}
                      </p>

                      <div
                        aria-label={`${item.rating} dari 5 bintang`}
                        className="mt-1 flex gap-1"
                      >
                        {Array.from({ length: 5 }, (_, index) => (
                          <Star
                            key={index}
                            aria-hidden="true"
                            className={`size-3.5 ${
                              index < item.rating
                                ? "fill-yellow-500 text-yellow-500"
                                : "text-zinc-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <blockquote className="mt-5 text-sm italic leading-7 text-zinc-600">
                    “{item.review}”
                  </blockquote>

                  <p className="mt-5 text-xs font-medium text-zinc-500">
                    {item.service}
                  </p>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            aria-label="Testimoni sebelumnya"
            className="-left-4 z-10 size-9 border-zinc-200 bg-white text-black shadow-sm hover:bg-zinc-100"
          />

          <CarouselNext
            aria-label="Testimoni berikutnya"
            className="-right-4 z-10 size-9 border-zinc-200 bg-white text-black shadow-sm hover:bg-zinc-100"
          />
        </Carousel>
      </div>
    </section>
  )
}