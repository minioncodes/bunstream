'use client'
import { useState } from 'react'
import providers from '@/data/providers.json'
import { currency } from '@/lib/utils'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function Bundles() {
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((i) => i !== id) : [...s, id]))

  const total = selected.reduce(
    (sum, id) => sum + (providers.find((p) => p.id === id)?.price || 0),
    0
  )

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">Build your bundle</h1>
      <p className="mt-2 text-gray-600">
        Pick the services you want. We’ll apply bundle savings at checkout.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {providers.map((p) => {
          const isSelected = selected.includes(p.id)
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => toggle(p.id)}
              aria-pressed={isSelected ? true : false}
              className={`card group relative flex items-center gap-4 p-4 text-left transition
                ${isSelected ? 'ring-2 ring-brand bg-blue-50/40' : 'hover:ring-1 hover:ring-gray-300'}`}
            >
              {/* Check badge (visible when selected) */}
              <span
                className={`absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-full
                  ${isSelected ? 'bg-brand text-white ring-1 ring-brand-dark' : 'bg-gray-100 text-gray-300 ring-1 ring-gray-200'}`}
                aria-hidden
              >
                <Check className="h-4 w-4" />
              </span>

              <img
                src={p.logo}
                alt={p.name}
                className="h-10 w-10 rounded-md object-contain ring-1 ring-gray-200 bg-white"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.name}</h3>
                  <span className="badge">${p.price.toFixed(2)}/mo</span>
                </div>
                {/* If you don’t use the line-clamp plugin, remove the class below */}
                <p className="mt-1 text-sm text-gray-600">{p.tagline}</p>
              </div>
            </button>
          )
        })}
      </div>

      <div className="sticky bottom-4 mt-10 flex items-center justify-between rounded-2xl bg-white p-4 ring-1 ring-gray-200">
        <div className="text-sm text-gray-700">
          {selected.length} selected · Subtotal <b>{currency(total)}</b>
        </div>
        <Link
          href={
            selected.length
              ? `/checkout?services=${encodeURIComponent(selected.join(','))}`
              : '#'
          }
          aria-disabled={!selected.length}
          className={`btn btn-primary ${!selected.length ? 'pointer-events-none opacity-60' : ''}`}
        >
          Continue
        </Link>
      </div>
    </div>
  )
}
