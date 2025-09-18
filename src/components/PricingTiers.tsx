import Link from 'next/link'

const tiers = [
  {
    name: 'Starter',
    price: 24.99,
    desc: 'Best for individuals. Pick any 2 platforms.',
    features: ['Any 2 services', 'Email support', '1 user profile'],
  },
  {
    name: 'Family',
    price: 44.99,
    desc: 'Great for families. Pick any 4 platforms.',
    features: ['Any 4 services', 'Priority support', 'Up to 4 profiles'],
    highlight: true,
  },
  {
    name: 'Max',
    price: 64.99,
    desc: 'For enthusiasts. Pick any 6 platforms.',
    features: ['Any 6 services', 'Priority support', 'Up to 6 profiles'],
  },
]

export function PricingTiers() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((t) => (
        <div key={t.name} className={`card p-6 ${t.highlight ? 'ring-2 ring-brand' : ''}`}>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">{t.name}</h3>
            {t.highlight && <span className="badge">Popular</span>}
          </div>
          <p className="mt-2 text-sm text-gray-600">{t.desc}</p>
          <div className="mt-4 text-3xl font-bold">${t.price.toFixed(2)} <span className="text-base font-medium text-gray-500">/mo</span></div>
          <ul className="mt-4 space-y-2 text-sm">
            {t.features.map(f => <li key={f} className="text-gray-700">• {f}</li>)}
          </ul>
          <Link href="/bundles" className="btn btn-primary mt-6 w-full">Choose {t.name}</Link>
        </div>
      ))}
    </div>
  )
}
