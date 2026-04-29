export type ProjectCalendar = {
  slug: 'zz' | 'czlan' | 'meshcore'
  title: string
  description: string
  // Fill with public Google Calendar ID (Settings -> Integrate calendar -> Calendar ID)
  calendarId?: string
}

export const PROJECT_CALENDARS: ProjectCalendar[] = [
  {
    slug: 'zz',
    title: 'Zahradní Železnice',
    description: 'Akce související se zahradní železnicí.',
    calendarId:
      'd865267aa1a1a87fa9d4252780b0397c2d272e78052630face03ce413b0cd615@group.calendar.google.com',
  },
  {
    slug: 'czlan',
    title: 'CZLAN',
    description: 'Komunitní a vzdělávací akce spolku CZLAN.',
    calendarId: '',
  },
  {
    slug: 'meshcore',
    title: 'MeshCore',
    description: 'Setkání, testovací eventy a veřejné ukázky projektu MeshCore.',
    calendarId: '',
  },
]

export function getGoogleCalendarEmbedUrl(calendarId: string) {
  const base = 'https://calendar.google.com/calendar/embed'
  const src = encodeURIComponent(calendarId)
  return `${base}?src=${src}&ctz=Europe%2FPrague&mode=AGENDA&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0`
}

export function getCombinedGoogleCalendarEmbedUrl(calendarIds: string[]) {
  const base = 'https://calendar.google.com/calendar/embed'
  const validIds = calendarIds.filter((id) => id.trim().length > 0)
  const sources = validIds.map((id) => `src=${encodeURIComponent(id)}`).join('&')
  return `${base}?${sources}&ctz=Europe%2FPrague&mode=AGENDA&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0`
}
