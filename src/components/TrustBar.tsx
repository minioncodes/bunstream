import { Lock, ShieldCheck, Star } from 'lucide-react'

export function TrustBar() {
  const items = [
    { icon: <ShieldCheck className="h-5 w-5" />, label: 'Authorized resale compliant' },
    { icon: <Lock className="h-5 w-5" />, label: 'Secure payments' },
    { icon: <Star className="h-5 w-5" />, label: '4.9/5 customer rating' },
  ]
  return (
    <div className="mt-6 border-t bg-white/70 px-6 py-4 ring-1 ring-black/5">
      <div className="container-px mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 text-sm text-gray-700">
        {items.map((i, idx) => (
          <div key={idx} className="inline-flex items-center gap-2">{i.icon}{i.label}</div>
        ))}
      </div>
    </div>
  )
}
