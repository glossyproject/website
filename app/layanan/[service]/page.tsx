import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LocalSeoPage } from "@/components/local-seo-page"
import { getService, services, siteName, siteUrl } from "@/lib/seo-data"

type Props = { params: Promise<{ service: string }> }

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params
  const service = getService(slug)
  if (!service) return {}

  return {
    title: `${service.shortName} | ${siteName}`,
    description: `${service.description} Tersedia di cabang Glossy Auto Pangkalan Bun dan Sampit.`,
    keywords: [service.keywords, "Glossy Auto"],
    alternates: { canonical: `${siteUrl}/layanan/${service.slug}` },
    openGraph: {
      title: `${service.shortName} | ${siteName}`,
      description: service.description,
      url: `${siteUrl}/layanan/${service.slug}`,
      images: [{ url: service.image, alt: service.name }],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return (
    <LocalSeoPage
      service={service}
      title={service.shortName}
      intro={`${service.description} Konsultasikan kebutuhan kendaraan Anda dengan tim ${siteName}.`}
      breadcrumb={["Home", "Layanan", service.name]}
    />
  )
}
