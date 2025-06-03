"use client"

import Image from "next/image"
import { usePathname, useParams } from "next/navigation"
import SideMenu from "@modules/layout/components/side-menu"

export default function Header() {
  const pathname = usePathname()
  const { countryCode } = useParams() as { countryCode: string }
  const isHome = pathname === `/${countryCode}`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 
        transition-colors ${
          isHome
            ? "bg-white/50 backdrop-blur-md"
            : "bg-white shadow-md"
        }`}
    >
      {/* Left – Side menu trigger (text “Menu”) */}
      <SideMenu />

      {/* Center – brand logo (static for now) */}
      <div className="flex-shrink-0">
        <Image
        src="/images/marabblogo.png"
alt="MAR & B"
          width={40}
          height={40}
          priority
        />
      </div>

      {/* Right – quote */}
      <span className="italic text-sm text-gray-800">Vivere Arte</span>
    </header>
  )
}
