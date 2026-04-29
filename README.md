# QUBIQ Projects

Personal project hub for [qubiq.cz](https://qubiq.cz). A dark-mode, glassmorphism-styled landing page and subpage showcase built with TanStack Start and deployed on Netlify.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19 + TanStack Router v1) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Language | TypeScript 5.7 (strict) |
| Deployment | Netlify |

## Project Structure

```
src/
  routes/
    index.tsx       — Main hub (project cards)
    zz/index.tsx    — Zahradní Železnice subpage
    __root.tsx      — Root layout / HTML shell
  styles.css        — Global dark-mode styles + glassmorphism utilities
```

## Running Locally

```bash
npm install
npm run dev        # Dev server on http://localhost:3000
```

Or with the Netlify CLI for full platform emulation:

```bash
netlify dev        # http://localhost:8888
```

## Design Notes

- **Dark mode only** — background is a deep navy/black radial gradient (`#040b1a`)
- **Glassmorphism** — `.glass-card` uses `backdrop-filter: blur`, translucent borders, and subtle inner highlights
- **Fully responsive** — single-column on mobile, multi-column grid on desktop
