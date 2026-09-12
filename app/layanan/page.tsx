import type { Metadata } from "next"
import Link from "next/link"

import { services, siteName, siteUrl } from "@/lib/seo-data"

export const metadata: Metadata = {
  title: `Layanan Perawatan dan Perbaikan Mobil | ${siteName}`,
  description: "Layanan Glossy Auto meliputi repaint mobil, body repair, detailing, coating, dan variasi mobil.",
  alternates: { canonical: `${siteUrl}/layanan` },
}

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      <h1 className="text-4xl font-semibold tracking-tight">Layanan Glossy Auto</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Pilih layanan perawatan, perbaikan, dan peningkatan tampilan kendaraan sesuai kebutuhan Anda.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link key={service.slug} href={`/layanan/${service.slug}`} className="rounded-xl border p-6 transition hover:border-amber-400 hover:bg-amber-50/50">
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
