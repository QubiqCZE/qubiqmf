import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, CalendarDays, Shapes } from 'lucide-react'

export const Route = createFileRoute('/meshcore/')({
  component: MeshCorePage,
})

function MeshCorePage() {
  return (
    <div className="qubiq-bg px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium mb-10 no-underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Zpět na rozcestník
        </Link>

        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.3em] text-blue-400 uppercase mb-3">
            Projekt #3
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
            <Shapes className="w-10 h-10 text-blue-400" strokeWidth={1.5} />
            MeshCore
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Technologický projekt se zaměřením na síťové experimenty a vývoj.
            Stránka je připravena pro rozšíření o detaily a dokumentaci.
          </p>
        </div>

        <section className="glass-card rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-3">Akce projektu</h2>
          <p className="text-slate-300 mb-4">
            Kalendář akcí pro MeshCore je dostupný v přehledu kalendářů.
          </p>
          <Link
            to="/events/"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 no-underline"
          >
            <CalendarDays className="w-4 h-4" />
            Otevřít kalendář akcí
          </Link>
        </section>
      </div>
    </div>
  )
}
