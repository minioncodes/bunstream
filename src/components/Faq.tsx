'use client'
import { useState } from 'react'

const faqs = [
  { q: 'Is this available in the U.S. only?', a: 'Yes. Pricing and platform availability are optimized for U.S. customers. Replace this text with your specific coverage.' },
  { q: 'How does billing work?', a: 'We consolidate all your selected platforms into one transparent monthly bill. Taxes and platform fees may vary.' },
  { q: 'Can I cancel anytime?', a: 'Yes, you can cancel or modify your bundle before your next renewal.' },
  { q: 'Do you share or resell accounts?', a: 'No. We comply with each platform’s terms. Bundles reflect aggregated, authorized subscriptions only.' },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200">
      <h3 className="text-2xl font-semibold">FAQs</h3>
      <div className="mt-4 divide-y">
        {faqs.map((f, i) => (
          <details key={i} open={open === i} onToggle={(e) => setOpen(e.currentTarget.open ? i : null)} className="py-3">
            <summary className="cursor-pointer list-none font-medium">{f.q}</summary>
            <p className="mt-2 text-sm text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
