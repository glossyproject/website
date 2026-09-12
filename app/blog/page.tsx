import type { Metadata } from "next"

import { siteName, siteUrl } from "@/lib/seo-data"

export const metadata: Metadata = {
  title: `Blog Otomotif | ${siteName}`,
  description: "Artikel dan informasi Glossy Auto tentang perawatan, perbaikan, serta peningkatan tampilan mobil.",
  alternates: { canonical: `${siteUrl}/blog` },
}

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      <h1 className="text-4xl font-semibold tracking-tight">Blog Glossy Auto</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Informasi perawatan dan perbaikan mobil dari tim Glossy Auto.</p>
      <section className="mt-10 rounded-xl border p-8">
        <h2 className="text-2xl font-semibold">Artikel segera hadir</h2>
        <p className="mt-3 leading-7 text-muted-foreground">Kami sedang menyiapkan artikel panduan untuk membantu Anda merawat kendaraan dengan lebih baik.</p>
      </section>
    </main>
  )
}
