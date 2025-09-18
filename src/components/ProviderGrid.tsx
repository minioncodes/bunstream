import providers from '@/data/providers.json'

export function ProviderGrid() {
  return (
    <div className="grid w-full grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
      {providers.slice(0, 12).map(p => (
        <div key={p.id} className="card flex items-center justify-center p-4">
          <img src={p.logo} alt={p.name} className="h-8 w-auto object-contain" />
        </div>
      ))}
    </div>
  )
}
