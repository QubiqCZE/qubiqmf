import { createFileRoute, Link } from '@tanstack/react-router'
import { Instagram, Mail, Train } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <div className="qubiq-bg px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-xs font-semibold tracking-[0.3em] text-blue-400 uppercase mb-3">
              qubiq.cz
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
              Jakub Krejci
            </h1>
            <p className="mt-3 text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Osobní webová prezentace
            </p>
            <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
              Tvorba, vývoj, modelařina a audiovizuální projekty na jednom
              místě.
            </p>
            <p className="mt-2 text-slate-500 text-sm max-w-xl mx-auto">
              Projekty, na kterých pracuji, průběžná dokumentace a kontakt.
            </p>
            <p className="mt-4 text-sm font-medium text-blue-300 animate-soft-glow inline-block">
              Vítej na mém portfoliu
            </p>
          </div>

          <section className="mb-16 animate-fade-in-up delay-100">
            <h2 className="text-xl font-semibold text-white mb-5 text-center">
              Projekty
            </h2>
            <div className="grid grid-cols-1 gap-5">
              <Link
                to="/zz/"
                className="glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center text-center md:text-left gap-7 cursor-pointer no-underline group"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg animate-float-soft">
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
                    Zahradní parní dráha v měřítku 1:22,5 (G). Dokumentace
                    trati, fotogalerie a technické parametry.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-blue-400 text-sm font-medium group-hover:gap-2.5 transition-all">
                    Zobrazit projekt →
                  </span>
                </div>
              </Link>
            </div>
          </section>

          <section className="mb-8 animate-fade-in-up delay-200">
            <h2 className="text-xl font-semibold text-white mb-5 text-center">
              Bio
            </h2>
            <div className="glass-card rounded-2xl p-6 md:p-8 text-center">
              <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Je mi 22 let. Jsem maker, modelář a vývojář, baví mě také
                audiovizuální tvorba. Moje koníčky jsou mou prací a zúročuji je
                mimo jiné i ve spolku CZLAN, kde se věnuji primárně správě
                sociálních sítí a realizaci akcí zaměřených na vzdělávání a
                kutilství.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-medium animate-tag-pop">
                  maker
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-medium animate-tag-pop delay-100">
                  modelář
                </span>
                <span className="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-medium animate-tag-pop delay-200">
                  vývojář
                </span>
                <span className="px-3 py-1 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-xs font-medium animate-tag-pop delay-300">
                  audiovizuální tvorba
                </span>
              </div>
            </div>
          </section>

          <section className="animate-fade-in-up delay-300">
            <h2 className="text-xl font-semibold text-white mb-5 text-center">
              Kontakt
            </h2>
            <div className="glass-card rounded-2xl p-6 md:p-8 space-y-4 text-center">
              <p className="text-slate-300 max-w-2xl mx-auto">
                Napiš mi, pokud chceš spolupráci nebo konzultaci.
              </p>
              <div className="space-y-3 text-slate-200 inline-block text-left">
                <p className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a
                    href="mailto:me@qubiq.cz"
                    className="hover:text-blue-300 transition-colors"
                  >
                    me@qubiq.cz
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-blue-400" />
                  <a
                    href="https://instagram.com/jakub_krejci12"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-300 transition-colors"
                  >
                    @jakub_krejci12
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
