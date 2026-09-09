"use client"

import { useState } from "react"
import Image from "next/image"

export default function BeforeAfter() {
  const [position, setPosition] = useState(50)

  return (
    <section className="bg-white px-4 py-14 md:py-20">
      <div className="container mx-auto lg:px-16">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black uppercase text-zinc-950 md:text-5xl">
            Lihat Perbedaannya
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">
            Geser untuk melihat perbedaan tampilan mobil.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="group relative isolate aspect-[3/2] select-none">
            <Image
              src="/before-after/sesudah.png"
              alt="Ilustrasi mobil setelah detailing"
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="pointer-events-none object-contain"
              draggable={false}
            />

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                clipPath: `inset(0 ${100 - position}% 0 0)`,
              }}
            >
              <Image
                src="/before-after/sebelum.png"
                alt="Ilustrasi mobil sebelum detailing"
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-contain"
                draggable={false}
              />
            </div>



            <input
              type="range"
              min={0}
              max={100}
              value={position}
              onChange={(event) => {
                setPosition(Number(event.target.value))
              }}
              aria-label="Perbandingan sebelum dan sesudah detailing"
              aria-valuetext={`${position}% gambar sebelum terlihat`}
              className="peer absolute inset-0 z-20 m-0 h-full w-full cursor-ew-resize opacity-0"
            />

            <div
              aria-hidden="true"
              style={{ left: `${position}%` }}
              className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white peer-focus-visible:[&>span]:outline peer-focus-visible:[&>span]:outline-2 peer-focus-visible:[&>span]:outline-offset-4 peer-focus-visible:[&>span]:outline-zinc-900"
            >
              <span className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-yellow-400 text-black shadow-md md:size-12">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m8 8-4 4 4 4M16 8l4 4-4 4" />
                </svg>
              </span>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}