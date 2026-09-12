import { Anton, Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteNavbar } from "@/components/site-navbar"
import { siteName, siteUrl } from "@/lib/seo-data"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Bengkel Mobil dan Auto Care`,
    template: `%s | ${siteName}`,
  },
  description: "Glossy Auto melayani repaint mobil, body repair, detailing, coating, dan variasi mobil di Pangkalan Bun dan Sampit.",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} | Bengkel Mobil dan Auto Care`,
    description: "Perawatan, perbaikan, dan peningkatan tampilan kendaraan bersama Glossy Auto.",
    url: siteUrl,
  },
}

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontMono.variable} ${geist.variable} ${anton.variable} font-sans antialiased`}
    >
      <body>
        <ThemeProvider>
          <SiteNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
