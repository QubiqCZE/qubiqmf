import { createFileRoute, Link } from '@tanstack/react-router'
import { Train, Plus } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="qubiq-bg px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-blue-400 uppercase mb-3">
            qubiq.cz
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
            QUBIQ{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="mt-5 text-slate-400 text-lg max-w-md mx-auto">
            Osobní projekty & experimenty
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Main project card — full width on first row */}
          <Link
            to="/zz"
            className="md:col-span-2 lg:col-span-2 glass-card rounded-2xl p-8 flex items-center gap-7 cursor-pointer no-underline group"
          >
            <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
              <Train className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-1">
                Projekt #1
              </p>
              <h2 className="text-2xl font-bold text-white mb-2">
                Zahradní Železnice
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm">
                Zahradní parní dráha v měřítku 1:22,5 (G). Dokumentace trati,
                fotogalerie a technické parametry.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-blue-400 text-sm font-medium group-hover:gap-2.5 transition-all">
                Zobrazit projekt →
              </span>
            </div>
          </Link>

          {/* Coming soon slot */}
          <ComingSoonCard />

          {/* More coming soon */}
          <ComingSoonCard />
          <ComingSoonCard />
        </div>
      </div>
    </div>
  )
}

function ComingSoonCard() {
  return (
    <div className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center gap-4 min-h-[180px] opacity-50 cursor-default">
      <div className="w-14 h-14 rounded-xl border border-dashed border-slate-600 flex items-center justify-center">
        <Plus className="w-6 h-6 text-slate-500" />
      </div>
      <p className="text-slate-500 text-sm font-medium tracking-wide">
        Coming Soon
      </p>
    </div>
  )
}
