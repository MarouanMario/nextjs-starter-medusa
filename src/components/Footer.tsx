// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-6 flex justify-between items-center bg-white dark:bg-black">
      {/* Left: Logo */}
      <img src="/images/brand-icon.svg" alt="MAR & B" className="h-8 w-8" />

      {/* Right: Social Links */}
      <div className="space-x-6">
        {[
          { href: "https://twitter.com/your", icon: "/icons/twitter.svg" },
          { href: "https://instagram.com/your", icon: "/icons/instagram.svg" },
          { href: "https://linkedin.com/your", icon: "/icons/linkedin.svg" },
        ].map((s) => (
          <Link key={s.href} href={s.href} target="_blank" rel="noopener">
            <img src={s.icon} alt="" className="h-6 w-6 inline-block" />
          </Link>
        ))}
      </div>
    </footer>
  );
}
