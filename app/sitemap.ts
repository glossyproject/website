import type { MetadataRoute } from "next"

import { branches, services, siteUrl } from "@/lib/seo-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/layanan", "/cabang", "/galeri", "/blog", "/kontak"]
  const serviceRoutes = services.map((service) => `/layanan/${service.slug}`)
  const branchRoutes = branches.flatMap((branch) => [
    `/cabang/${branch.slug}`,
    ...services.map((service) => `/${branch.slug}/${service.slug}`),
  ])

  return [...staticRoutes, ...serviceRoutes, ...branchRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length > 2 ? 0.7 : 0.8,
  }))
}
