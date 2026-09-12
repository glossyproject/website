import type { MetadataRoute } from "next"

import { branches, services, siteUrl } from "@/lib/seo-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", image: undefined, priority: 1, changeFrequency: "weekly" as const },
    { path: "/layanan", image: undefined, priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/cabang", image: undefined, priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/galeri", image: undefined, priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/blog", image: undefined, priority: 0.6, changeFrequency: "weekly" as const },
    { path: "/kontak", image: undefined, priority: 0.7, changeFrequency: "monthly" as const },
  ]

  const serviceRoutes = services.map((service) => ({
    path: `/layanan/${service.slug}`,
    image: service.image,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }))

  const branchRoutes = branches.flatMap((branch) => [
    {
      path: `/cabang/${branch.slug}`,
      image: branch.image,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    ...services.map((service) => ({
      path: `/${branch.slug}/${service.slug}`,
      image: service.image,
      priority: 0.95,
      changeFrequency: "weekly" as const,
    })),
  ])

  return [...staticRoutes, ...serviceRoutes, ...branchRoutes].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.image ? { images: [`${siteUrl}${route.image}`] } : {}),
  }))
}
