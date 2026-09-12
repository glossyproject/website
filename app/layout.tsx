import { Anton, Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteNavbar } from "@/components/site-navbar"

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
