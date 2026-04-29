import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'QUBIQ Projects',
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
