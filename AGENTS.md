# AGENTS.md

Project overview for AI agents and developers working on this codebase.

## What This Is

A personal project hub for qubiq.cz. Dark-mode, glassmorphism design. TanStack Start SPA deployed on Netlify. No AI assistant, no product catalog — those were removed during initial setup.

## Directory Structure

```
src/
  routes/
    __root.tsx          — HTML shell (lang="cs", HeadContent, Scripts)
    index.tsx           — Main hub page: project cards grid
    zz/
      index.tsx         — Zahradní Železnice detail page
  data/
    products.ts         — Unused scaffold file (can be deleted)
  styles.css            — Tailwind 4 import + global resets + .glass-card + .qubiq-bg utilities
  router.tsx            — TanStack Router setup
public/                 — Static assets (favicon, images)
netlify.toml            — Build config (vite build → dist/client)
```

## Key Conventions

- **Routing**: File-based via TanStack Router. Add new projects by creating `src/routes/<slug>/index.tsx` with `createFileRoute('/<slug>/')`.
- **Navigation**: Use `<Link to="...">` from `@tanstack/react-router` — never plain `<a>` for internal links.
- **Styling**: Tailwind CSS 4 utility classes. Shared design primitives are CSS classes in `styles.css`:
  - `.glass-card` — glassmorphism card (translucent dark blue, blur, border, hover lift)
  - `.qubiq-bg` — full-page dark navy gradient background
- **Icons**: Lucide React (`lucide-react` package already installed).
- **TypeScript**: Strict mode. Use `@/` alias for `src/*` imports.
- **No backend / no DB**: Purely static frontend. Do not add server functions or databases unless a project explicitly requires dynamic data.

## Adding a New Project

1. Replace a `<ComingSoonCard />` in `src/routes/index.tsx` with a real `<Link>` card (follow the Zahradní Železnice card as a pattern).
2. Create `src/routes/<slug>/index.tsx` — follow `src/routes/zz/index.tsx` as the template: back-button, description section, tech params grid, status section, gallery section.

## Design System

- Background: `.qubiq-bg` — deep navy/black radial gradient (`#040b1a` base)
- Cards: `.glass-card` — `backdrop-filter: blur(16px)`, translucent dark-blue fill, subtle blue border
- Accent: `blue-400` / `indigo-400` (Tailwind)
- Status badges: colored pill with animated dot (yellow = in progress, green = done, gray = planned)
- Fonts: system-ui stack, no external font loading
