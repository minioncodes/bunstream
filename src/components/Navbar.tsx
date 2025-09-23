'use client'
import Link from 'next/link'
import { Menu, PlaySquare, Phone } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="container-px mx-auto max-w-7xl py-4">
      <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 ring-1 ring-gray-200">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <PlaySquare className="h-6 w-6 text-brand" />
          BunStream
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/bundles" className="hover:text-brand">Bundles</Link>
          <a href="/#pricing" className="hover:text-brand">Pricing</a>
          <Link href="/contact" className="hover:text-brand">Contact</Link>
          <Link href="/privacy" className="hover:text-brand">Privacy</Link>
          <Link href="/terms" className="hover:text-brand">Terms</Link>
          {/* Phone number with call icon */}
          <a
            href="tel:8339215472"
            className="flex items-center gap-2 font-semibold text-gray-700 hover:text-brand"
          >
            <Phone className="h-5 w-5 text-brand" />
            (833) 921-5472
          </a>
          <Link href="/bundles" className="btn btn-primary">Start</Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="mt-2 rounded-2xl bg-white p-4 ring-1 ring-gray-200 md:hidden">
          <div className="flex flex-col gap-3">
            <Link href="/bundles">Bundles</Link>
            <a href="/#pricing">Pricing</a>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            {/* Phone number with call icon in mobile menu */}
            <a
              href="tel:8339215472"
              className="flex items-center gap-2 font-semibold text-gray-700 hover:text-brand"
            >
              <Phone className="h-5 w-5 text-brand" />
              (833) 921-5472
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
