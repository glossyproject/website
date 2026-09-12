import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LocalSeoPage } from "@/components/local-seo-page"
import { branches, getBranch, getService, services, siteName, siteUrl } from "@/lib/seo-data"

type Props = { params: Promise<{ location: string; service: string }> }

export function generateStaticParams() {
  return branches.flatMap((branch) => services.map((service) => ({ location: branch.slug, service: service.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location, service: serviceSlug } = await params
  const branch = getBranch(location)
  const service = getService(serviceSlug)
  if (!branch || !service) return {}

  return {
    title: `${service.shortName} ${branch.name} | ${siteName}`,
    description: `${service.name} ${branch.name} di ${siteName}. ${service.description}`,
    keywords: [`${service.keywords} ${branch.name}`, `${service.name} ${branch.name}`, `Glossy Auto ${branch.name}`],
    alternates: { canonical: `${siteUrl}/${branch.slug}/${service.slug}` },
    openGraph: {
      title: `${service.shortName} ${branch.name} | ${siteName}`,
      description: `${service.description} Tersedia di ${branch.name}.`,
      url: `${siteUrl}/${branch.slug}/${service.slug}`,
      images: [{ url: service.image, alt: `${service.name} ${branch.name}` }],
    },
  }
}

export default async function LocalServicePage({ params }: Props) {
  const { location, service: serviceSlug } = await params
  const branch = getBranch(location)
  const service = getService(serviceSlug)
  if (!branch || !service) notFound()

  return (
    <LocalSeoPage
      branch={branch}
      service={service}
      title={`${service.shortName} ${branch.name}`}
      intro={`${service.description} Dapatkan konsultasi ${service.name.toLowerCase()} untuk kendaraan Anda di Glossy Auto ${branch.name}.`}
      breadcrumb={["Home", branch.name, service.name]}
    />
  )
}
