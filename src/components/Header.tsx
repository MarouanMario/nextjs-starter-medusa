// src/components/Header.tsx
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-20 flex items-center justify-between p-6 bg-transparent">
      {/* Left: Brand icon (clickable menu) */}
      <Link href={`/[countryCode]`} replace>
        <img
          src="/images/brand-icon.svg"
          alt="MAR & B Logo"
          className="h-8 w-8 cursor-pointer"
        />
      </Link>

      {/* Right: Quote */}
      <div className="text-white italic text-sm">Vivere Arte</div>
    </header>
  );
}
