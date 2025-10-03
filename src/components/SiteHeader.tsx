"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-dark/40 bg-dark">
      <Container>
        <div className="flex h-14 items-center justify-between text-white">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-gold text-dark font-bold text-sm overflow-hidden">
              <img src="/VSB1.png" alt="Van Soolingen Bouw" className="h-full w-full object-contain" />
            </div>
            <span>Van Soolingen Bouw</span>
          </Link>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <Link href="/over-ons" className="text-white/90 hover:text-white hover:underline underline-offset-4">
              Over ons
            </Link>
            <Link href="/diensten" className="text-white/90 hover:text-white hover:underline underline-offset-4">
              Diensten
            </Link>
            <Link href="/projecten" className="text-white/90 hover:text-white hover:underline underline-offset-4">
              Projecten
            </Link>
            <Link href="/referenties" className="text-white/90 hover:text-white hover:underline underline-offset-4">
              Referenties
            </Link>
            <Link href="/contact" className="text-white/90 hover:text-white hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden sm:inline-block rounded-md bg-gold px-3 py-1.5 text-sm font-semibold text-dark shadow hover:brightness-95"
          >
            Vrijblijvend contact
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <svg className={`h-6 w-6 ${open ? "hidden" : "block"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg className={`h-6 w-6 ${open ? "block" : "hidden"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-white/10 bg-dark/98 backdrop-blur supports-[backdrop-filter]:bg-dark/80">
          <Container>
            <nav className="flex flex-col py-3 text-white">
              <Link onClick={() => setOpen(false)} href="/over-ons" className="px-1 py-2 text-white/90 hover:text-white">Over ons</Link>
              <Link onClick={() => setOpen(false)} href="/diensten" className="px-1 py-2 text-white/90 hover:text-white">Diensten</Link>
              <Link onClick={() => setOpen(false)} href="/projecten" className="px-1 py-2 text-white/90 hover:text-white">Projecten</Link>
              <Link onClick={() => setOpen(false)} href="/referenties" className="px-1 py-2 text-white/90 hover:text-white">Referenties</Link>
              <Link onClick={() => setOpen(false)} href="/contact" className="mt-2 inline-block rounded-md bg-gold px-3 py-2 text-sm font-semibold text-dark shadow hover:brightness-95">Vrijblijvend contact</Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
