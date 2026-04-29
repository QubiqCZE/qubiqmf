import { createFileRoute, Link } from '@tanstack/react-router'
import { CalendarClock, ExternalLink } from 'lucide-react'

import {
  PROJECT_CALENDARS,
  getGoogleCalendarEmbedUrl,
} from '@/data/project-calendars'

export const Route = createFileRoute('/events/')({
  component: EventsPage,
})

function EventsPage() {
  return (
    <div className="qubiq-bg px-4 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium mb-10 no-underline"
        >
          ← Zpět na rozcestník
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kalendáře akcí
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Přidáš událost do Google Kalendáře projektu a automaticky se objeví
            na webu.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {PROJECT_CALENDARS.map((calendar) => (
            <section key={calendar.slug} className="glass-card rounded-2xl p-5 md:p-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-white">{calendar.title}</h2>
                <p className="text-slate-400 text-sm mt-1">{calendar.description}</p>
              </div>

              {calendar.calendarId ? (
                <iframe
                  src={getGoogleCalendarEmbedUrl(calendar.calendarId)}
                  className="w-full h-[420px] rounded-xl border border-blue-400/20 bg-[#050d1f]"
                  title={`Kalendář akcí - ${calendar.title}`}
                  loading="lazy"
                />
              ) : (
                <div className="rounded-xl border border-dashed border-blue-400/30 p-5 text-slate-300 bg-blue-950/20">
                  <p className="font-medium">Kalendář zatím není propojen.</p>
                  <p className="text-sm text-slate-400 mt-2">
                    Doplň `calendarId` v `src/data/project-calendars.ts` a sekce
                    se začne synchronizovat s Google Kalendářem.
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-8 glass-card rounded-2xl p-5 text-sm text-slate-300">
          <p className="inline-flex items-center gap-2">
            <CalendarClock className="w-4 h-4 text-blue-400" />
            Tip: Kalendáře musí být v Google nastavené jako veřejné.
          </p>
          <a
            className="mt-2 inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
            href="https://support.google.com/calendar/answer/37083?hl=cs"
            target="_blank"
            rel="noreferrer"
          >
            Jak zveřejnit Google Kalendář
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
