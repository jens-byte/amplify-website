# Amplify Digital — Website

Astro + Tailwind. Content wordt direct in de `.astro` bestanden bewerkt.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open http://localhost:4321/

## Productie-build maken

```bash
npm run build
```

Output komt in `dist/` — een statische site die je op elke webhost kan zetten (Netlify, Cloudflare Pages, Vercel, GitHub Pages, een eigen VPS, …).

## Tekst aanpassen

Elke pagina is een zelfstandig `.astro` bestand onder `src/pages/`. Open het bestand → wijzig de tekst → save → de dev server herlaadt automatisch.

| Pagina | Bestand |
|---|---|
| Home | `src/pages/index.astro` |
| Voor Vastgoed | `src/pages/voor-vastgoed.astro` |
| Voor E-commerce | `src/pages/voor-ecommerce.astro` |
| Voor Musea | `src/pages/voor-musea.astro` |
| Aanpak | `src/pages/aanpak.astro` |
| Prijzen | `src/pages/prijzen.astro` |
| Over | `src/pages/over.astro` |
| Contact | `src/pages/contact.astro` |
| Voor bureaus | `src/pages/voor-bureaus.astro` |
| Productenoverzicht | `src/pages/producten/index.astro` |
| Productpagina's (7×) | `src/pages/producten/*.astro` |

**Nav, footer, logo:** `src/layouts/Layout.astro`
**Kleuren & fonts:** `tailwind.config.mjs`

## Structuur

```
src/
  layouts/Layout.astro    — Nav, footer, kleuren, fonts
  pages/                  — Eén bestand per pagina-route
public/
  logo.svg, logo-white.svg, favicon.svg
tailwind.config.mjs       — Brand kleuren (ink, spray, cloud)
```

## Tech stack

- **Astro 4** — static site generator
- **Tailwind CSS** — styling
- **Sora** (headings) + **Inter** (body) — Google Fonts
