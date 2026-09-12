import type { Metadata } from "next"
import Link from "next/link"

import { branches, siteName, siteUrl } from "@/lib/seo-data"

export const metadata: Metadata = {
  title: `Cabang Glossy Auto | ${siteName}`,
  description: "Temukan cabang Glossy Auto di Pangkalan Bun dan Sampit untuk kebutuhan perawatan serta perbaikan mobil.",
  alternates: { canonical: `${siteUrl}/cabang` },
}

export default function BranchesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      <h1 className="text-4xl font-semibold tracking-tight">Cabang Glossy Auto</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Pilih cabang terdekat untuk konsultasi layanan kendaraan Anda.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {branches.map((branch) => (
          <Link key={branch.slug} href={`/cabang/${branch.slug}`} className="rounded-xl border p-6 transition hover:border-amber-400 hover:bg-amber-50/50">
            <h2 className="text-xl font-semibold">{branch.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{branch.description}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
