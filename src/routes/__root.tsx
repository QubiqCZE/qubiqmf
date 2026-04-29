import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    links: [
      {
        rel: 'canonical',
        href: 'https://qubiq.cz/',
      },
    ],
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Jakub Krejci | Osobni webova prezentace',
      },
      {
        name: 'description',
        content:
          'Osobni web Jakuba Krejciho. Projekty CZLAN, MeshCore a Zahradni zeleznice, akce a kontakty.',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: 'Jakub Krejci | Osobni webova prezentace',
      },
      {
        property: 'og:description',
        content:
          'Projekty, akce a kontakt: CZLAN, MeshCore a Zahradni zeleznice.',
      },
      {
        property: 'og:url',
        content: 'https://qubiq.cz/',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Jakub Krejci',
          url: 'https://qubiq.cz/',
          sameAs: ['https://instagram.com/jakub_krejci12'],
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear()

  return (
    <html lang="cs">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <footer className="border-t border-blue-900/40 bg-[#040b1a]/80 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 py-6 text-center">
            <p className="text-slate-400 text-sm">
              Copyright {year} Jakub Krejci. Osobní webová prezentace.
            </p>
            <p className="mt-2 text-slate-500 text-xs">
              Veškeré fotografie a vizuální materiály jsou chráněny autorským
              právem. Jakékoliv použití bez předchozího souhlasu autora je
              zakázáno.
            </p>
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
