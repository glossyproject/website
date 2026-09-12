import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LocalSeoPage } from "@/components/local-seo-page"
import { branches, getBranch, siteName, siteUrl } from "@/lib/seo-data"

type Props = { params: Promise<{ location: string }> }

export function generateStaticParams() {
  return branches.map((branch) => ({ location: branch.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: slug } = await params
  const branch = getBranch(slug)
  if (!branch) return {}

  return {
    title: `${branch.title} | ${siteName}`,
    description: branch.description,
    keywords: [`bengkel mobil ${branch.name}`, `repaint mobil ${branch.name}`, `body repair ${branch.name}`],
    alternates: { canonical: `${siteUrl}/cabang/${branch.slug}` },
    openGraph: {
      title: `${branch.title} | ${siteName}`,
      description: branch.description,
      url: `${siteUrl}/cabang/${branch.slug}`,
      images: [{ url: branch.image, alt: branch.title }],
    },
  }
}

export default async function BranchPage({ params }: Props) {
  const { location: slug } = await params
  const branch = getBranch(slug)
  if (!branch) notFound()

  return (
    <LocalSeoPage
      branch={branch}
      title={branch.title}
      intro={`${branch.description} Perawatan, perbaikan, dan peningkatan tampilan kendaraan dengan standar pengerjaan Glossy Auto.`}
      breadcrumb={["Home", "Cabang", branch.name]}
    />
  )
}
