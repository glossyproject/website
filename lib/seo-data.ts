export const siteUrl = "https://glossyautogroup.com"
export const siteName = "Glossy Auto"
export const contactPhone = "+62 852-1520-2324"
export const contactEmail = "admin@glossyautogroup.com"

export const services = [
  {
    slug: "repaint-mobil",
    name: "Repaint Mobil",
    shortName: "Repaint & Cat Mobil",
    description: "Pengecatan ulang dan restorasi warna kendaraan dengan hasil rapi dan berkilau.",
    keywords: "repaint mobil, cat mobil",
    image: "/features-img/repaint.png",
  },
  {
    slug: "body-repair",
    name: "Body Repair",
    shortName: "Body Repair Mobil",
    description: "Perbaikan body kendaraan dan kerusakan panel agar kembali rapi dan proporsional.",
    keywords: "body repair, bengkel body repair",
    image: "/features-img/repair.png",
  },
  {
    slug: "detailing-mobil",
    name: "Detailing Mobil",
    shortName: "Detailing Mobil",
    description: "Perawatan detail interior dan eksterior untuk mengembalikan kebersihan serta tampilan kendaraan.",
    keywords: "detailing mobil, salon mobil",
    image: "/features-img/exterior-detailing.png",
  },
  {
    slug: "coating-mobil",
    name: "Coating Mobil",
    shortName: "Coating Mobil",
    description: "Perlindungan cat dan peningkatan kilap kendaraan untuk perawatan jangka panjang.",
    keywords: "coating mobil, nano coating mobil",
    image: "/features-img/nano-coating.png",
  },
  {
    slug: "variasi-mobil",
    name: "Variasi Mobil",
    shortName: "Variasi Mobil",
    description: "Upgrade tampilan dan aksesoris kendaraan dengan pilihan yang sesuai kebutuhan Anda.",
    keywords: "variasi mobil, aksesoris mobil",
    image: "/features-img/exterior-detailing.png",
  },
] as const

export const branches = [
  {
    slug: "pangkalan-bun",
    name: "Pangkalan Bun",
    title: "Bengkel Mobil Pangkalan Bun",
    description: "Glossy Auto Pangkalan Bun melayani repaint mobil, body repair, detailing, coating dan variasi mobil.",
    areas: "Pangkalan Bun dan sekitarnya",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Glossy+Auto+Pangkalan+Bun",
    image: "/features-img/exterior-detailing.png",
  },
  {
    slug: "sampit",
    name: "Sampit",
    title: "Bengkel Mobil Sampit",
    description: "Glossy Auto Sampit melayani repaint mobil, body repair, detailing, coating dan variasi mobil.",
    areas: "Sampit dan sekitarnya",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Glossy+Auto+Sampit",
    image: "/features-img/interior-detailing.png",
  },
] as const

export type Service = (typeof services)[number]
export type Branch = (typeof branches)[number]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export function getBranch(slug: string) {
  return branches.find((branch) => branch.slug === slug)
}
