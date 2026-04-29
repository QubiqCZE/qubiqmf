import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Train, Ruler, Route as RouteIcon, Activity, Image } from 'lucide-react'

export const Route = createFileRoute('/zz/')({
  component: ZahradniZelezniceePage,
})

const TECH_PARAMS = [
  { icon: Ruler, label: 'Měřítko', value: '1:22,5 (G)' },
  { icon: RouteIcon, label: 'Rozchod kolejí', value: '45 mm' },
  { icon: Train, label: 'Délka tratě', value: '~40 m (plánováno)' },
  { icon: Activity, label: 'Pohon', value: 'Akumulátorový / DCC' },
]

const GALLERY_PLACEHOLDERS = Array.from({ length: 6 })

function ZahradniZelezniceePage() {
  return (
    <div className="qubiq-bg px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium mb-10 no-underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Zpět na rozcestník
        </Link>

        {/* Page header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.3em] text-blue-400 uppercase mb-3">
            Projekt #1
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
            <Train className="w-10 h-10 text-blue-400 flex-shrink-0" strokeWidth={1.5} />
            Zahradní Železnice
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Zahradní parní dráha v měřítku G (1:22,5) provozovaná v zahradě.
            Projekt dokumentuje výstavbu, provoz a technické řešení celé tratě.
          </p>
        </div>

        {/* Technical parameters */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-5">
            Technické parametry
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TECH_PARAMS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass-card rounded-xl p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">{label}</p>
                  <p className="text-white font-semibold">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Current status */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-5">
            Aktuální stav
          </h2>
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 text-xs font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                Ve výstavbě
              </span>
            </div>
            <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                Projektová dokumentace a trasování hotovo
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                Základní kolejový rám položen (~12 m)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-0.5">⟳</span>
                Zemní práce pro druhou část tratě probíhají
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-600 mt-0.5">○</span>
                Instalace napájení a DCC centrály — plánováno
              </li>
            </ul>
          </div>
        </section>

        {/* Photo gallery */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
            <Image className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
            Fotogalerie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY_PLACEHOLDERS.map((_, i) => (
              <div
                key={i}
                className="glass-card rounded-xl aspect-[4/3] flex flex-col items-center justify-center gap-2 opacity-40"
              >
                <Image className="w-8 h-8 text-slate-500" strokeWidth={1} />
                <p className="text-slate-600 text-xs">Fotografie brzy</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
