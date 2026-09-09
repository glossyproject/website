import { Anton, Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Navbar5 } from "@/shadcnblocks-Blocks/navbar/navbar5";
import { Navbar17 } from "@/shadcnblocks-Blocks/navbar/navbar17";

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
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable, anton.variable)}
    >
      <body>
        <Navbar17 />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
