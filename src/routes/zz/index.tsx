import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Train, Ruler, Route as RouteIcon, Activity, Image, CalendarDays } from 'lucide-react'

export const Route = createFileRoute('/zz/')({
  component: ZahradniZeleznicePage,
})

const TECH_PARAMS = [
  { icon: RouteIcon, label: 'Rozchod', value: '45 mm' },
  { icon: Train, label: 'Délka tratě', value: 'Plán 150 m, aktuálně 50 m' },
  { icon: Activity, label: 'Provoz', value: 'Akumulátorový (12 V)' },
  { icon: Ruler, label: 'Měřítko', value: 'G' },
]

const GALLERY_PLACEHOLDERS = [
  { caption: 'Celek tratě', alt: 'Pohled na celou 3D tisknutou zahradní trať' },
  { caption: 'Kolejivo detail', alt: 'Detail kolejí rozchodu 45 mm' },
  { caption: 'Hnací vozidlo', alt: 'Hnací vozidlo projektu na trati' },
  { caption: 'Zázemí v zahradě', alt: 'Budované zázemí železnice v zahradě' },
  { caption: 'Stavební postup', alt: 'Průběžné práce na vývoji projektu' },
  { caption: 'Provozní testy', alt: 'Testování provozu akumulátorového pohonu' },
]

function ZahradniZeleznicePage() {
  return (
    <div className="qubiq-bg px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200 transition-colors text-sm font-medium mb-10 no-underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Zpět na rozcestník
        </Link>

        {/* Page header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
            <Train className="w-10 h-10 text-orange-300 flex-shrink-0" strokeWidth={1.5} />
            Zahradní Železnice
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Zahradní 3D tisknutá železnice o rozchodu 45 mm s cílem vybudování
            kompletního zázemí v zahradě. Tato stránka dokumentuje průběžný
            vývoj celého projektu.
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
                <div className="w-11 h-11 rounded-lg bg-orange-900/40 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-orange-300" strokeWidth={1.5} />
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
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-300 animate-pulse" />
                Aktivní vývoj
              </span>
            </div>
            <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                Hnací vozidla done
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                Funkční kolejivo hotové
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-300 mt-0.5">→</span>
                Další pokračování: automatizace trati sensorikou (poloha vlaku
                na trati, automatické stavění vlakových cest, ovládání vlaku
                pomocí PC, výroba většího množství kolejiva)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-600 mt-0.5">○</span>
                Do budoucna: ozubnicová trať, úzkokolejná drážka a tramvajová
                trať
              </li>
            </ul>
          </div>
        </section>

        {/* Photo gallery */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
            <Image className="w-5 h-5 text-orange-300" strokeWidth={1.5} />
            Fotogalerie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY_PLACEHOLDERS.map((item) => (
              <figure
                key={item.caption}
                className="glass-card rounded-xl aspect-[4/3] flex flex-col items-center justify-center gap-2 opacity-70 p-2"
              >
                <Image className="w-8 h-8 text-slate-500" strokeWidth={1} aria-hidden />
                <p className="text-slate-500 text-xs">Fotografie brzy</p>
                <figcaption className="text-slate-400 text-[11px] text-center">{item.caption}</figcaption>
                <span className="sr-only">{item.alt}</span>
              </figure>
            ))}
          </div>
          <p className="mt-3 text-slate-500 text-xs">
            Popisky galerie jsou připravené jako caption/alt texty pro budoucí fotografie.
          </p>
        </section>

        <section className="mt-12">
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-3">Akce projektu</h2>
            <p className="text-slate-300 mb-4">
              Přehled akcí, kde je možné projekt potkat, je dostupný v kalendáři
              akcí.
            </p>
            <Link
              to="/events/"
              className="inline-flex items-center gap-2 text-orange-200 hover:text-orange-100 no-underline"
            >
              <CalendarDays className="w-4 h-4" />
              Otevřít kalendář akcí
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
