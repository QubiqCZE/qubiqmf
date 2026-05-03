import { useEffect, useMemo, useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { CalendarDays, Globe, Instagram, Mail, Shapes, Train, Users } from 'lucide-react'
import {
  PROJECT_CALENDARS,
  getGoogleCalendarPublicUrl,
} from '@/data/project-calendars'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const PROJECTS = [
  {
    to: '/zz/' as const,
    title: {
      cs: 'Zahradní Železnice',
      en: 'Garden Railway',
    },
    description: {
      cs: 'Zahradní parní dráha v měřítku 1:22,5 (G). Dokumentace trati, fotogalerie a technické parametry.',
      en: 'Garden steam railway in 1:22.5 (G scale). Track documentation, gallery and technical details.',
    },
    icon: Train,
  },
  {
    to: '/czlan/' as const,
    title: {
      cs: 'CZLAN',
      en: 'CZLAN',
    },
    description: {
      cs: 'Spolek zaměřený na vzdělávání, komunitu a kutilství. Organizace akcí a tvorba obsahu.',
      en: 'Community organization focused on education and DIY culture. Events and content production.',
    },
    icon: Users,
  },
  {
    to: '/meshcore/' as const,
    title: {
      cs: 'MeshCore',
      en: 'MeshCore',
    },
    description: {
      cs: 'Technologický projekt zaměřený na síťovou infrastrukturu, experimenty a vývoj.',
      en: 'Technology project focused on networking infrastructure, experiments and development.',
    },
    icon: Shapes,
  },
]

type SiteLanguage = 'cs' | 'en'

const I18N = {
  cs: {
    subtitle: 'Osobní webová prezentace',
    sectionProjects: 'Projekty',
    projectLabel: 'Projekt',
    projectCta: 'Zobrazit projekt',
    sectionEvents: 'Akce a kalendáře',
    eventsText: 'Přehled akcí, kde je možné některý z projektů potkat.',
    eventsOpen: 'Otevřít veřejný kalendář akcí',
    eventsDetails: 'Detail kalendářů podle projektu',
    sectionBio: 'Bio',
    bio: 'Je mi 22 let. Jsem maker, modelář a vývojář, baví mě také audiovizuální tvorba. Moje koníčky jsou mou prací a zúročuji je mimo jiné i ve spolku CZLAN, kde se věnuji primárně správě sociálních sítí a realizaci akcí zaměřených na vzdělávání a kutilství.',
    sectionContact: 'Kontakt',
    contactText: 'Napiš mi, pokud chceš spolupráci nebo konzultaci.',
    tags: ['maker', 'modelář', 'vývojář', 'audiovizuální tvorba'],
  },
  en: {
    subtitle: 'Personal website portfolio',
    sectionProjects: 'Projects',
    projectLabel: 'Project',
    projectCta: 'Open project',
    sectionEvents: 'Events and calendar',
    eventsText: 'Overview of events where you can meet one of my projects.',
    eventsOpen: 'Open public events calendar',
    eventsDetails: 'Project calendar details',
    sectionBio: 'Bio',
    bio: 'I am 22 years old. I am a maker, model builder and developer, and I also enjoy audiovisual production. My hobbies are my profession, and I apply them in the CZLAN association where I focus on social media management and events dedicated to education and DIY culture.',
    sectionContact: 'Contact',
    contactText: 'Feel free to reach out for collaboration or consultation.',
    tags: ['maker', 'model builder', 'developer', 'audiovisual'],
  },
} as const

function HomePage() {
  const [language, setLanguage] = useState<SiteLanguage>('cs')

  useEffect(() => {
    const stored = window.localStorage.getItem('site-language')
    if (stored === 'cs' || stored === 'en') {
      setLanguage(stored)
      return
    }
    const browserLanguage = navigator.language.toLowerCase().startsWith('cs') ? 'cs' : 'en'
    setLanguage(browserLanguage)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('site-language', language)
  }, [language])

  const text = I18N[language]
  const primaryCalendar = PROJECT_CALENDARS.find((c) => (c.calendarId ?? '').trim().length > 0)
  const primaryCalendarUrl = primaryCalendar?.calendarId
    ? getGoogleCalendarPublicUrl(primaryCalendar.calendarId)
    : ''
  const projectList = useMemo(() => PROJECTS, [])

  return (
    <>
      <div className="qubiq-bg px-4 py-16 md:py-24">
        <div className="qubiq-orb qubiq-orb-a" />
        <div className="qubiq-orb qubiq-orb-b" />
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center md:justify-end mb-6">
            <div className="glass-card rounded-xl px-3 py-2 inline-flex items-center gap-2">
              <Globe className="w-4 h-4 text-orange-300" />
              <button
                className={`text-xs px-2 py-1 rounded-md transition-colors ${language === 'cs' ? 'bg-orange-500/30 text-white' : 'text-slate-300 hover:text-white'}`}
                onClick={() => setLanguage('cs')}
                type="button"
              >
                CZ
              </button>
              <button
                className={`text-xs px-2 py-1 rounded-md transition-colors ${language === 'en' ? 'bg-orange-500/30 text-white' : 'text-slate-300 hover:text-white'}`}
                onClick={() => setLanguage('en')}
                type="button"
              >
                EN
              </button>
            </div>
          </div>

          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-xs font-semibold tracking-[0.3em] text-orange-300 uppercase mb-3">
              qubiq.cz
            </p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white">
              Jakub Krejčí
            </h1>
            <p className="mt-3 text-xl md:text-2xl font-semibold bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
              {text.subtitle}
            </p>
          </div>

          <section className="mb-16 animate-fade-in-up delay-100">
            <h2 className="text-xl font-semibold text-white mb-5 text-center">{text.sectionProjects}</h2>
            <div className="grid grid-cols-1 gap-5">
              {projectList.map(({ to, title, description, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className="glass-card cheerful-card rounded-2xl p-8 flex flex-col md:flex-row items-center text-center md:text-left gap-7 cursor-pointer no-underline group"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg animate-float-soft">
                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{title[language]}</h2>
                    <p className="text-slate-300 leading-relaxed text-sm">{description[language]}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-orange-300 text-sm font-medium group-hover:gap-2.5 transition-all">
                      {text.projectCta} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-8 animate-fade-in-up delay-200">
            <h2 className="text-xl font-semibold text-white mb-5 text-center">{text.sectionEvents}</h2>
            <div className="glass-card rounded-2xl p-6 md:p-8 text-center">
              <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                {text.eventsText}
              </p>
              {primaryCalendarUrl ? (
                <a
                  href={primaryCalendarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/20 border border-orange-400/40 text-orange-200 hover:bg-orange-500/30 transition-colors no-underline"
                >
                  <CalendarDays className="w-4 h-4" />
                  {text.eventsOpen}
                </a>
              ) : (
                <div className="mt-5 rounded-xl border border-dashed border-orange-400/30 p-5 text-slate-300 bg-orange-950/20">
                  Jakmile doplníš první Google kalendář, zobrazí se tu
                  automaticky celkový přehled akcí.
                </div>
              )}
              <Link
                to="/events/"
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/20 border border-orange-400/40 text-orange-200 hover:bg-orange-500/30 transition-colors no-underline"
              >
                <CalendarDays className="w-4 h-4" />
                {text.eventsDetails}
              </Link>
            </div>
          </section>

          <section className="mb-8 animate-fade-in-up delay-300">
            <h2 className="text-xl font-semibold text-white mb-5 text-center">{text.sectionBio}</h2>
            <div className="glass-card rounded-2xl p-6 md:p-8 text-center">
              <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">{text.bio}</p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {text.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full bg-orange-500/15 border border-orange-400/30 text-orange-200 text-xs font-medium animate-tag-pop ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index === 3 ? 'delay-300' : ''}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="animate-fade-in-up delay-300">
            <h2 className="text-xl font-semibold text-white mb-5 text-center">{text.sectionContact}</h2>
            <div className="glass-card rounded-2xl p-6 md:p-8 space-y-4 text-center">
              <p className="text-slate-300 max-w-2xl mx-auto">{text.contactText}</p>
              <div className="space-y-3 text-slate-200 inline-block text-left">
                <p className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange-300" />
                  <a
                    href="mailto:me@qubiq.cz"
                    className="hover:text-orange-200 transition-colors"
                  >
                    me@qubiq.cz
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-orange-300" />
                  <a
                    href="https://instagram.com/jakub_krejci12"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-orange-200 transition-colors"
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
