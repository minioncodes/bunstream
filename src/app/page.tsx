'use client'
import Link from 'next/link'
import { ArrowRight, Check, Headphones, Shield, Sparkles } from 'lucide-react'
import { ProviderGrid } from '@/components/ProviderGrid'
import { PricingTiers } from '@/components/PricingTiers'
import { Faq } from '@/components/Faq'
import { TrustBar } from '@/components/TrustBar'

export default function Home() {
  return (
    <div className="space-y-20 py-8 sm:py-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-blue-50 ring-1 ring-gray-200">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-10 py-16 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm ring-1 ring-black/5">
              <Sparkles className="h-4 w-4" /> Modern OTT bundles — one bill.
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl">Your favorite OTTs, one <span className="text-brand">simple</span> bundle</h1>
            <p className="mt-4 text-lg text-gray-600">
              Create a custom bundle of major U.S. platforms and get transparent pricing, easy management, and dedicated live support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/bundles" className="btn btn-primary">Build a Bundle <ArrowRight className="ml-2 h-4 w-4" /></Link>
              <Link href="#support" className="btn btn-ghost"><Headphones className="mr-2 h-4 w-4" /> Support</Link>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2">
              {[
                'Transparent pricing, no surprise fees',
                'Cancel or modify anytime',
                'Email & chat support 7 days a week',
                'Secure billing with Stripe',
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center p-4">
            <ProviderGrid />
          </div>
        </div>
        <TrustBar />
      </section>

      {/* Pricing */}
      <section id="pricing">
        <PricingTiers />
      </section>

      {/* FAQ */}
      <section>
        <Faq />
      </section>

      {/* Support CTA */}
      <section id="support" className="rounded-3xl bg-white p-8 ring-1 ring-gray-200 sm:p-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Need help choosing?</h3>
            <p className="mt-2 text-gray-600">Our team can recommend the right bundle for your household and budget.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="btn btn-primary">Chat with us</Link>
            <Link href="/contact" className="btn btn-ghost">Email support</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
