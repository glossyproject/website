"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavBody,
} from "@/components/navbar"

type DropdownItem = {
  name: string
  description: string
  href: string
}

type MenuItem = {
  name: string
  href: string
  items?: DropdownItem[]
}

const serviceItems: DropdownItem[] = [
  { name: "Repaint Mobil", description: "Pengecatan ulang dan restorasi warna kendaraan.", href: "/layanan/repaint-mobil" },
  { name: "Body Repair", description: "Perbaikan body kendaraan dan kerusakan panel.", href: "/layanan/body-repair" },
  { name: "Detailing", description: "Perawatan detail interior dan eksterior.", href: "/layanan/detailing-mobil" },
  { name: "Coating", description: "Perlindungan cat dan peningkatan kilap kendaraan.", href: "/layanan/coating-mobil" },
  { name: "Variasi Mobil", description: "Upgrade tampilan dan aksesoris kendaraan.", href: "/layanan/variasi-mobil" },
]

const branchItems: DropdownItem[] = [
  { name: "Pangkalan Bun", description: "Glossy Auto Pangkalan Bun", href: "/cabang/pangkalan-bun" },
  { name: "Sampit", description: "Glossy Auto Sampit", href: "/cabang/sampit" },
]

const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "Layanan", href: "/layanan", items: serviceItems },
  { name: "Cabang", href: "/cabang", items: branchItems },
  { name: "Kontak", href: "/kontak" },
  { name: "Blog", href: "/blog" },
  { name: "Galeri", href: "/galeri" },
]

const logo = (
  <Link href="/" className="relative z-20 mr-4 flex items-center px-2 py-1">
    <img src="/logo.png" alt="Glossy Auto Group" className="h-7 w-auto object-contain" />
  </Link>
)

function DesktopMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpenMenu(null)
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null)
    }

    document.addEventListener("mousedown", handleOutsideClick)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.removeEventListener("keydown", handleKeyDown)
      cancelClose()
    }
  }, [])

  return (
    <div ref={menuRef} className="absolute inset-0 hidden items-center justify-center md:flex">
      <nav className="flex items-center gap-1" aria-label="Navigasi utama">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => {
              cancelClose()
              if (item.items) setOpenMenu(item.name)
            }}
            onMouseLeave={scheduleClose}
          >
            {item.items ? (
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={openMenu === item.name}
                onClick={() => {
                  cancelClose()
                  setOpenMenu(openMenu === item.name ? null : item.name)
                }}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-gray-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                {item.name}
                <ChevronDown aria-hidden="true" className={`size-4 transition-transform duration-200 ${openMenu === item.name ? "rotate-180" : ""}`} />
              </button>
            ) : (
              <Link href={item.href} className="block rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-gray-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800">
                {item.name}
              </Link>
            )}
            {item.items && (
              <div
                role="menu"
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                className={`absolute top-full left-1/2 z-[70] mt-2 w-72 -translate-x-1/2 rounded-xl border border-neutral-200 bg-white p-2 shadow-xl transition-all duration-200 dark:border-neutral-800 dark:bg-neutral-950 ${openMenu === item.name ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
              >
                {item.items.map((subItem) => (
                  <Link key={subItem.name} href={subItem.href} role="menuitem" onClick={() => setOpenMenu(null)} className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900">
                    <span className="block text-sm font-semibold text-neutral-900 dark:text-white">{subItem.name}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">{subItem.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}

function MobileMenu({ onCloseAction }: { onCloseAction: () => void }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <div className="flex w-full flex-col gap-1">
      {menuItems.map((item) => (
        <div key={item.name}>
          {item.items ? (
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openMenu === item.name}
              onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)}
              className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              {item.name}
              <ChevronDown aria-hidden="true" className={`size-5 transition-transform duration-200 ${openMenu === item.name ? "rotate-180" : ""}`} />
            </button>
          ) : (
            <Link href={item.href} onClick={onCloseAction} className="block rounded-md px-3 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800">
              {item.name}
            </Link>
          )}
          {item.items && (
            <div className={`grid overflow-hidden pl-4 transition-[grid-template-rows,opacity] duration-200 ${openMenu === item.name ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="min-h-0 border-l border-neutral-200 dark:border-neutral-700">
                {item.items.map((subItem) => (
                  <Link key={subItem.name} href={subItem.href} onClick={onCloseAction} className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800">
                    <span className="block font-semibold text-neutral-800 dark:text-neutral-100">{subItem.name}</span>
                    <span className="block text-xs text-neutral-500 dark:text-neutral-400">{subItem.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      <Link href="/kontak" onClick={onCloseAction} className="mt-2 flex h-10 items-center justify-center rounded-md bg-neutral-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
        Hubungi Kami
      </Link>
    </div>
  )
}

export function SiteNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <Navbar className="top-0">
      <NavBody>
        {logo}
        <DesktopMenu />
        <Link href="/kontak" className="relative z-20 hidden rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 md:block dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
          Hubungi Kami
        </Link>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          {logo}
          <button type="button" aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"} aria-expanded={isMobileMenuOpen} className="relative z-20 flex size-9 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-700" onClick={() => setIsMobileMenuOpen((open) => !open)}>
            <MobileNavToggle isOpen={isMobileMenuOpen} onClickAction={() => undefined} />
          </button>
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileMenuOpen}>
          <MobileMenu onCloseAction={() => setIsMobileMenuOpen(false)} />
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
