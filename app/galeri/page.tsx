import type { Metadata } from "next"
import Image from "next/image"

import { siteName, siteUrl } from "@/lib/seo-data"

export const metadata: Metadata = {
  title: `Galeri Pengerjaan Mobil | ${siteName}`,
  description: "Lihat dokumentasi hasil pengerjaan Glossy Auto untuk repaint, detailing, coating, body repair, dan variasi mobil.",
  alternates: { canonical: `${siteUrl}/galeri` },
}

const gallery = [
  ["Repaint Mobil", "/features-img/repaint.png"],
  ["Nano Coating", "/features-img/nano-coating.png"],
  ["Body Repair", "/features-img/repair.png"],
  ["Detailing Interior", "/features-img/interior-detailing.png"],
  ["Detailing Exterior", "/features-img/exterior-detailing.png"],
  ["Detailing Mesin", "/features-img/engine-detailing.png"],
]

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      <h1 className="text-4xl font-semibold tracking-tight">Galeri Glossy Auto</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Dokumentasi layanan dan hasil pengerjaan Glossy Auto.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map(([title, image]) => (
          <figure key={title} className="overflow-hidden rounded-xl border bg-white">
            <div className="relative aspect-[4/3]"><Image src={image} alt={title} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover" /></div>
            <figcaption className="p-4 font-semibold">{title}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  )
}
