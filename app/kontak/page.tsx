import type { Metadata } from "next"
import Link from "next/link"

import { branches, contactEmail, contactPhone, siteName, siteUrl } from "@/lib/seo-data"

export const metadata: Metadata = {
  title: `Kontak ${siteName}`,
  description: "Hubungi Glossy Auto untuk konsultasi repaint mobil, body repair, detailing, coating, dan variasi mobil.",
  alternates: { canonical: `${siteUrl}/kontak` },
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      <h1 className="text-4xl font-semibold tracking-tight">Hubungi Glossy Auto</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Konsultasikan kebutuhan kendaraan Anda dengan tim Glossy Auto.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="rounded-xl border p-6"><h2 className="font-semibold">WhatsApp</h2><p className="mt-3 text-muted-foreground">{contactPhone}</p></div>
        <div className="rounded-xl border p-6"><h2 className="font-semibold">Email</h2><p className="mt-3 text-muted-foreground">{contactEmail}</p></div>
        <div className="rounded-xl border p-6"><h2 className="font-semibold">Cabang</h2><div className="mt-3 space-y-2">{branches.map((branch) => <Link key={branch.slug} href={`/cabang/${branch.slug}`} className="block text-muted-foreground hover:text-foreground">Glossy Auto {branch.name}</Link>)}</div></div>
      </div>
    </main>
  )
}
