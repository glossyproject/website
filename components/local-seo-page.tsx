import Image from "next/image"
import Link from "next/link"

import type { Branch, Service } from "@/lib/seo-data"
import { branches, contactEmail, contactPhone, services, siteName, siteUrl } from "@/lib/seo-data"

type LocalSeoPageProps = {
  branch?: Branch
  service?: Service
  title: string
  intro: string
  breadcrumb: string[]
}

const faqs = [
  {
    question: "Bagaimana cara konsultasi layanan Glossy Auto?",
    answer: `Hubungi Glossy Auto melalui ${contactPhone} atau email ${contactEmail} untuk menjelaskan kebutuhan kendaraan dan mendapatkan arahan layanan.`,
  },
  {
    question: "Layanan apa saja yang tersedia di Glossy Auto?",
    answer: "Glossy Auto melayani repaint mobil, body repair, detailing mobil, coating mobil, dan variasi mobil.",
  },
  {
    question: "Apakah Glossy Auto melayani area sekitar cabang?",
    answer: "Ya. Tim Glossy Auto melayani pelanggan di kota cabang dan area sekitarnya. Konfirmasi ketersediaan layanan saat konsultasi.",
  },
]

function JsonLd({ branch, service, breadcrumb }: Pick<LocalSeoPageProps, "branch" | "service" | "breadcrumb">) {
  const routePath = branch && service
    ? `${branch.slug}/${service.slug}`
    : branch
      ? `cabang/${branch.slug}`
      : service
        ? `layanan/${service.slug}`
        : ""
  const pageUrl = `${siteUrl}/${routePath}`
  const breadcrumbUrls = [
    siteUrl,
    ...(branch && service
      ? [`${siteUrl}/cabang/${branch.slug}`, pageUrl]
      : branch
        ? [`${siteUrl}/cabang`, pageUrl]
        : service
          ? [`${siteUrl}/layanan`, pageUrl]
          : [pageUrl]),
  ]
  const breadcrumbSchema = breadcrumb.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item,
    item: breadcrumbUrls[index],
  }))

  const businessSchema = branch
    ? {
        "@type": "AutoRepair",
        "@id": `${siteUrl}/cabang/${branch.slug}#business`,
        name: `${siteName} ${branch.name}`,
        url: `${siteUrl}/cabang/${branch.slug}`,
        telephone: contactPhone,
        email: contactEmail,
        areaServed: branch.areas,
        image: `${siteUrl}${branch.image}`,
      }
    : null

  const serviceSchema = service
    ? {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "AutoRepair",
          name: siteName,
          url: siteUrl,
        },
        areaServed: branch?.name ?? branches.map((item) => item.name),
        url: pageUrl,
      }
    : null

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbSchema,
            },
            businessSchema,
            serviceSchema,
            faqSchema,
          ].filter(Boolean),
        }),
      }}
    />
  )
}

export function LocalSeoPage({ branch, service, title, intro, breadcrumb }: LocalSeoPageProps) {
  const pageImage = service?.image ?? branch?.image ?? "/hero-banner/hero1.png"
  const relatedServices = service ? services.filter((item) => item.slug !== service.slug) : services

  return (
    <main className="bg-background">
      <JsonLd branch={branch} service={service} breadcrumb={breadcrumb} />
      <section className="border-b bg-zinc-950 px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/60">
            <Link href="/" className="hover:text-white">Home</Link>
            {breadcrumb.slice(1).map((item) => (
              <span key={item}> / {item}</span>
            ))}
          </nav>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Glossy Auto</p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{intro}</p>
          <Link href="#konsultasi" className="mt-8 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300">
            Konsultasikan Mobil Anda
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-24">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">{service ? `Layanan ${service.name}${branch ? ` di ${branch.name}` : ""}` : `Layanan Glossy Auto ${branch?.name ?? ""}`}</h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">{service?.description ?? `Temukan layanan perawatan, perbaikan, dan peningkatan tampilan kendaraan di Glossy Auto ${branch?.name ?? ""}. Setiap pekerjaan dimulai dari konsultasi kebutuhan kendaraan dan rekomendasi pengerjaan yang sesuai.`}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {relatedServices.map((item) => (
              <Link key={item.slug} href={branch ? `/${branch.slug}/${item.slug}` : `/layanan/${item.slug}`} className="rounded-lg border p-4 transition hover:border-amber-400 hover:bg-amber-50/50">
                <span className="font-semibold">{item.name}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{item.description}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="relative min-h-72 overflow-hidden rounded-xl bg-zinc-100">
          <Image src={pageImage} alt={`${title} Glossy Auto`} fill sizes="(max-width: 1023px) 100vw, 40vw" className="object-cover" />
        </div>
      </section>

      {service && !branch && (
        <section className="bg-amber-50/60 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold tracking-tight">Tersedia di Cabang Glossy Auto</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {branches.map((item) => (
                <Link key={item.slug} href={`/${item.slug}/${service.slug}`} className="rounded-xl border border-amber-200 bg-white p-6 transition hover:border-amber-400">
                  <h3 className="text-xl font-semibold">{service.name} {item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Konsultasikan {service.name.toLowerCase()} di Glossy Auto {item.name}.</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-zinc-50 px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight">{service ? `Proses ${service.name}` : `Kenapa Memilih Glossy Auto ${branch?.name ?? ""}?`}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Konsultasi", "Kebutuhan kendaraan dipahami sebelum rekomendasi pengerjaan diberikan."],
              ["Pengerjaan Rapi", "Tim mengutamakan detail, kebersihan area kerja, dan hasil yang konsisten."],
              ["Kontrol Hasil", "Hasil pekerjaan diperiksa sebelum kendaraan diserahkan kembali."],
            ].map(([heading, text]) => (
              <article key={heading} className="rounded-xl border bg-white p-6">
                <h3 className="text-lg font-semibold">{heading}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {branch && (
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Lokasi Glossy Auto {branch.name}</h2>
            <p className="mt-5 leading-8 text-muted-foreground">Melayani kendaraan pelanggan di {branch.areas}. Untuk alamat operasional dan ketersediaan jadwal terbaru, silakan konfirmasi melalui admin Glossy Auto.</p>
            <div className="mt-6 space-y-2 text-sm">
              <p><strong>WhatsApp:</strong> {contactPhone}</p>
              <p><strong>Email:</strong> {contactEmail}</p>
            </div>
            <a href={branch.mapsUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-md border px-4 py-2 text-sm font-semibold transition hover:bg-zinc-100">Buka Google Maps</a>
          </div>
          <div className="rounded-xl border bg-white p-6">
            <h2 className="text-2xl font-semibold">Pertanyaan Seputar {branch.name}</h2>
            <div className="mt-5 divide-y">
              {faqs.map((faq) => (
                <details key={faq.question} className="py-4">
                  <summary className="cursor-pointer font-semibold">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="konsultasi" className="bg-zinc-950 px-6 py-16 text-white sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Konsultasikan Mobil Anda</h2>
            <p className="mt-3 text-white/70">Hubungi admin Glossy Auto untuk mendapatkan rekomendasi layanan.</p>
          </div>
          <Link href="/kontak" className="inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300">Hubungi Kami</Link>
        </div>
      </section>
    </main>
  )
}
