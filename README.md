# Amplify Digital — Website

Astro + Tailwind site. Content (voor home + sectorpagina's) wordt beheerd via Decap CMS.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open http://localhost:4321/

## Naar productie (Netlify)

### Eerste keer — setup

1. **Push deze repo naar GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create amplify-website --private --source=. --push
   ```

2. **Connect met Netlify**
   - Ga naar https://app.netlify.com → "Add new site" → "Import from GitHub"
   - Kies je `amplify-website` repo
   - Build command: `npm run build` (al gezet via `netlify.toml`)
   - Publish directory: `dist`
   - Deploy

3. **Activeer Netlify Identity** (voor CMS login)
   - In Netlify dashboard → **Site settings → Identity → Enable Identity**
   - **Registration preferences** → "Invite only" (zo kunnen alleen jij en je collega in)
   - **External providers** → optioneel: Google/GitHub login
   - **Services → Git Gateway → Enable Git Gateway** (laat Decap committen naar GitHub)

4. **Nodig jezelf en je collega uit**
   - In Netlify → **Identity tab → "Invite users"**
   - Voer email-adressen in → ze krijgen een uitnodigingsmail
   - Ze klikken op de link → kiezen wachtwoord → kunnen in

5. **Verbind je domein**
   - Netlify → **Domain settings → Add custom domain** → `amplify-digital.eu`
   - Volg de DNS-instructies (CNAME of A-records bij je registrar)

### Daarna — content bewerken

- Ga naar `https://amplify-digital.eu/admin/` (of je tijdelijke `*.netlify.app` URL)
- Log in met je Netlify Identity-account
- Klik op **Homepage** of **Sectorpagina's** → bewerk → **Save**
- Elke save = een commit op GitHub = automatische re-deploy in ~1 min

## Wat is editable via CMS?

| Pagina | Status |
|---|---|
| Homepage | ✅ Volledig editable |
| Voor Vastgoed | ✅ Volledig editable |
| Voor E-commerce | ✅ Volledig editable |
| Voor Musea | ✅ Volledig editable |
| Productpagina's (7×) | ⚠️ Nog hardcoded in `.astro` — kan in volgende fase gemigreerd worden |
| Aanpak, Prijzen, Over, Contact, Voor bureaus, Productenoverzicht | ⚠️ Nog hardcoded in `.astro` |

Voor de hardcoded pagina's: tekst wijzigen via Git of via deze codebase. Migratie naar CMS volgt later.

## Structuur

```
src/
  content/
    config.ts             — Astro Content Collections schema's
    home/
      home.md             — Homepage content
    sectors/
      voor-vastgoed.md
      voor-ecommerce.md
      voor-musea.md
  layouts/Layout.astro    — Nav + footer + meta
  components/
    SectorTemplate.astro  — Gedeeld sjabloon voor sectorpagina's
  pages/                  — Astro pagina-routes
public/
  admin/
    index.html            — Decap CMS loader
    config.yml            — Decap CMS configuratie (welke velden editable zijn)
  logo.svg, logo-white.svg
  uploads/                — Door CMS geüploade afbeeldingen
```

## Tekst-highlighting in headlines

In het `hero.title` veld op de homepage werkt `*woord*` als turquoise markering:

```yaml
title: 'Uw bestaande website *slimmer*, *overtuigender* en *sneller*.'
```

Render-output: `Uw bestaande website <span class="text-spray">slimmer</span>, ...`

## Tech stack

- **Astro 4** — static site generator
- **Tailwind CSS** — styling
- **Content Collections** — type-safe content
- **Decap CMS 3** — editor UI (Netlify Identity + Git Gateway)
- **Netlify** — hosting + auth + auto-deploy
