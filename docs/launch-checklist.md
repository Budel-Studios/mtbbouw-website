# Launch-checklist MTB Bouw — de complete afwerklijst

> Opgesteld 5 juli 2026 na een vier-dimensie-audit (security, meten/AVG, content, livegang-techniek). **Als deze lijst is afgevinkt, is de site klaar voor livegang én voor groei daarna.** Per punt staat wie aan zet is: **[Robbe]** = vereist jouw input/accounts/beslissing · **[Claude]** = puur codewerk, kan ik direct doen · **[samen]** = jouw input, mijn uitvoering.

**Al gefixt tijdens de audit (5 juli):** template-project met example.com-links op draft gezet · "voorbeeldartikel"-disclaimer uit het kozijnen-artikel verwijderd · homepage-WhatsApp-knop gecorrigeerd naar het echte WhatsApp-nummer (+31 6 42997018).

---

## 🔴 BLOK 1 — Livegang-blockers (zonder deze punten géén DNS-omzetting)

- [ ] **Formulier-mailer vervangen** [samen] — Alle drie formulieren (offerte, contact, brochure) POSTen nu naar het oude WordPress-endpoint `mtbbouw.com/wp-json/...`. Op het moment dat het domein naar Vercel wijst, wordt dat een 404 en **vallen alle leads stilletjes weg**. Oplossing: eigen mailverzending inbouwen (advies: Resend — gratis tot 3.000 mails/maand, of SMTP). *Robbe: account + API-key aanmaken; Claude: route ombouwen (TODO staat al in de code) + reply-to fixen zodat je direct op de klant kunt antwoorden.*
- [ ] **Git-repo + Vercel-project** [samen] — C:\dev\mtbbouw staat niet onder versiebeheer; zonder repo geen deploy en geen rollback. *Claude: git init + .gitignore-fix (`.env.example` wordt nu per ongeluk genegeerd) + initial commit als data@num-hub.com; Robbe: GitHub-repo onder Num-hub + Vercel-koppeling (zelfde werkwijze als dekozijnstudio).*
- [ ] **KvK-nummer en btw-id op de site** [samen] — Ontbreken nu volledig; wettelijk verplicht voor een NL-bedrijfssite. *Robbe: nummers aanleveren; Claude: in footer, contactpagina, privacyverklaring en Organization-schema zetten (5 min werk).*
- [ ] **dekozijnstudio.nl aan Vercel koppelen** [Robbe] — De hoofd-CTA van /kozijnen linkt naar dekozijnstudio.nl, maar dat domein is onbereikbaar (site draait alleen op dekozijnstudio.vercel.app). Vóór livegang het domein koppelen, anders is de belangrijkste kozijnen-link dood.
- [ ] **Hero-foto homepage lokaal zetten** [samen] — De grote foto op de homepage laadt nog van de oude WordPress-site en breekt exact op het cutover-moment. *Robbe: akkoord (of lever een verse foto); Claude: downloaden naar public/images + ombouwen naar next/image met priority.*
- [ ] **Algemene voorwaarden regelen** [Robbe beslist] — Het offerteformulier eist akkoord met "algemene voorwaarden" die nergens bestaan. Heb je voorwaarden (bv. Bouwend Nederland-consumentenvoorwaarden)? Dan publiceren + linken. Zo niet: checkbox-tekst wijzigen naar privacy-akkoord. *(Claude voert uit.)*

## 🟠 BLOK 2 — Security (vóór of direct na livegang)

- [ ] **Security-headers toevoegen** [Claude] — nosniff, frame-ancestors, Referrer-Policy, Permissions-Policy + CSP (goed haalbaar: site heeft nul third-party scripts).
- [ ] **Spam-bescherming formulieren** [samen] — Honeypot ontbreekt uitgerekend in het hoofd-offerteformulier (drawer); rate-limiting ontbreekt volledig. *Claude: honeypot + validatie-aanscherping (lengte-limieten, type-checks — voorkomt ook een crash-scenario); Robbe: keuze rate-limiting (Vercel WAF in dashboard = geen code, óf gratis Upstash-account).*
- [ ] **JSON-LD-escaping hardenen** [Claude] — éénregel-fix in json-ld.tsx.
- [ ] ~~Secrets-check~~ ✅ In orde bevonden: geen hardcoded keys, externe links veilig (noopener/noreferrer).
- [ ] **npm-update-momentje** [Claude] — 2 lage kwetsbaarheden in een Next-bundel (postcss); echte fix komt met Next 16.3 — monitoren, geen blocker.

## 🟡 BLOK 3 — Meten: Google Analytics & Search Console

- [ ] **Beslissing meettool** [Robbe] — Twee routes:
  1. **Cookieloos starten** (advies voor livegang): Vercel Web Analytics + Speed Insights — géén cookiebanner nodig, 10 minuten werk, direct inzicht in bezoekers en conversiepaden.
  2. **Volwaardig GA4**: rijkere data + koppeling met Google Ads later, maar vereist een cookiebanner (opt-in, AVG) + uitgebreidere cookieverklaring.
  Kan ook gefaseerd: nu cookieloos live, GA4 + banner er later bij. *(Claude bouwt wat je kiest, inclusief events op offerteformulier, telefoon-kliks, WhatsApp-kliks en brochure-aanvragen — het meetplan uit de SEO-strategie.)*
- [ ] **Google Search Console koppelen** [Robbe] — Bij livegang: domein mtbbouw.com toevoegen (DNS-verificatie via Vercel), sitemap indienen. Dit is je dashboard om de rankings uit de SEO-strategie te volgen.
- [ ] **Privacyverklaring bijwerken op gekozen meettool** [Claude] — cookie-paragraaf klopt nu al niet (claimt analytische cookies die er niet zijn); tegelijk Vercel als hostingpartij + AP-klachtrecht toevoegen en privacy-link onder de formulieren zetten (AVG-informatieplicht).

## 🟢 BLOK 4 — Content: dit maakt de site áf (jouw genoemde punten)

### 4a. Persoonlijk maken van teksten
- [ ] **Quotes van Mathijs en Robbert** [Robbe → Claude] — Jullie worden op 14+ plekken genoemd als "vast aanspreekpunt", maar er staat nog geen énkele persoonlijke quote op de site. Nodig: per persoon 2–3 korte verhalen (waarom transparantie, mooiste project, hoe een werkdag eruitziet). **Een voicememo van 15 minuten is genoeg** — ik schrijf het uit en verwerk het tot quote-blokken op de homepage, over-ons, hoe-wij-werken en werkgenoeg.
- [ ] **Teamfoto's Niels & Leroy** [Robbe] — missen nog (initiaal-placeholder op /over-ons).

### 4b. SEO-teksten (feitencheck & prijscheck)
- [ ] **Prijzen in de kostengidsen checken** [Robbe] — Aanbouw €2.200–3.200/m², kantoor €150–1.500/m², metal stud €70–120/m², systeemplafond €40–80/m² — allemaal marktindicaties die ik heb gezet; jij kent je échte prijzen. Eén rondje door de 3 kostengidsen + FAQ's.
- [ ] **Testimonials en claims in portfolio verifiëren** [Robbe] — "Familie van de Berg", "Gertjan en Els", genoemde onderaannemers en cijfers als "-45% energieverbruik" in 2 projectverhalen: echt of aanname? Echte quotes (met toestemming) ervoor in de plaats, rest schrappen. *(Claude past aan.)*

### 4c. Portfolio
- [ ] **3–5 echte projecten aanleveren** [Robbe → Claude] — Per project: 5–10 foto's (voor/tijdens/na), periode, klanttype, materialen, echte partners, klantquote. Het rijke template staat klaar (uitbouw-woning-enschede.md, nu op draft); ik werk elk project uit tot een volwaardige SEO-projectpagina met stad in de titel.
- [ ] **Echte projectfoto's site-breed** [Robbe → Claude] — Er zijn nu maar 4 unieke projectfoto's voor 55 pagina's (dezelfde foto staat op 15 plekken). Nodig per categorie 3–5 foto's: renovatie, aanbouw, kantoorafbouw, horeca (Broodbode!), prefab, kozijnen, team-aan-het-werk. Ik verdeel ze daarna over alle pagina's.
- [ ] **High-res versies nav-/preloader-afbeeldingen** [Robbe] — bekende placeholder-kwaliteit.

### 4d. Blogs (kennisbank)
- [ ] **Kozijnen-artikel afronden** [samen] — demo-disclaimer is al weg; nog nodig: eigen artikelfoto + feitencheck.
- [ ] **Contentkalender starten: 2 artikelen per maand** [samen] — De eerste 6 onderwerpen liggen al klaar in de SEO-strategie (o.a. "Casco kantoorruimte gehuurd?", "Bedrijfshal ombouwen tot kantoor", "Dakopbouw kosten", verduurzamings-vervolgartikelen). *Robbe: onderwerp prioriteren + praktijkcijfers/foto; Claude: schrijven.*
- [ ] **Eigen foto's bij de 3 kostengidsen** [Robbe] — gebruiken nu hergebruikte projectfoto's.

### 4e. Partners uit Enschede en omstreken
- [ ] **Partnerlogo's + akkoord ophalen** [Robbe] — /regionale-partners toont nu alleen tekst-tegels; logo's maken het geloofwaardig. Vraag per partner ook of ze terug willen linken (linkbuilding uit de strategie!).
- [ ] **Beschrijvingen Dukato & Kuality aanvullen** [Robbe → Claude] — nu nietszeggend; één zin per bedrijf over wat ze echt doen volstaat.
- [ ] **Dode partnerlinks oplossen** [Robbe] — dukato.nl is onbereikbaar en zebranostudio.nl geeft een serverfout (502): klopt de URL nog / is hun site stuk? *(Tot die tijd kan Claude de links tijdelijk weghalen zodat er geen dode uitgaande links live staan.)*
- [ ] **Partnernetwerk uitbreiden** [Robbe] — meer vaste partners uit Enschede e.o. toevoegen = meer lokale relevantie + wederzijdse links.

### 4f. Overig content
- [ ] **Brochure-PDF maken of pauzeren** [Robbe beslist] — /gratis-brochure belooft een document dat nog niet bestaat. Optie: ik maak de brochure op (de inhoud staat al beschreven op de pagina) zodra jij de teksten accordeert.
- [ ] **Bouwmethodes-cluster uitbouwen** [Claude] — stond al op de lijst (taak #41).
- [ ] **/hoe-wij-werken verrijken met Samen Bouwen-content** [Claude] — taak #42.

## 🔵 BLOK 5 — Kleine technische fixes (Claude, batch van ~1 sessie)

- [ ] Og:image fixen: gedeclareerd 1200×630, werkelijk 874×909 portrait/895 kB — WhatsApp/LinkedIn-previews croppen nu fout. (Vierkant beeldmerk/projectfoto nodig van Robbe, of ik genereer er een met next/og.)
- [ ] Apple-touch-icon + PNG-favicon-fallback (Safari/iOS tonen nu niets; Google SERP-favicon wil PNG/ICO).
- [ ] Dode "MijnMTB"-knop uit mobiel menu (doet niets, suggereert een portaal dat niet bestaat).
- [ ] Hardcoded mailto/tel op ~35 plekken centraliseren via lib/site.ts (nu consistent, maar één nummerwijziging = 35 plekken).
- [ ] Next.js patch-update meenemen bij eerstvolgende build.

## ⚪ BLOK 6 — Livegang-draaiboek (volgorde op de dag zelf)

1. Blok 1 volledig afgevinkt (vooral: mailer getest met echte inzending van álle 3 formulieren)
2. DNS: A-record apex → Vercel, CNAME www → Vercel; beide domeinen in Vercel met apex als primary (www redirect automatisch)
3. Curl-check: oude WP-URL's → 308 naar nieuwe pagina's; sitemap.xml bereikbaar
4. Search Console: sitemap indienen; Google Business Profile: website-URL omzetten
5. Testronde: formulieren, telefoonlinks, WhatsApp, 404-pagina, belangrijkste 10 pagina's mobiel
6. Analytics live checken (eerste events binnen?)

## 🟣 BLOK 7 — Doorlopend na livegang (het groeiritme uit de SEO-strategie)

- [ ] Local-SEO-actieplan uitvoeren (ligt klaar: `docs/local-seo-actieplan.md` — GBP-categorieën, adrescorrectie directories, Bing/Apple/LinkedIn)
- [ ] Reviewmotor: 2–3 Google-reviews per maand vragen + binnen 48 u beantwoorden
- [ ] 2 kennisbankartikelen per maand (afwisselend particulier/zakelijk)
- [ ] 1 nieuw projectverhaal per maand met stad in de titel
- [ ] Wekelijkse Google Business-post/foto
- [ ] Kwartaal-refresh van de kostengidsen (datum bijwerken — AI-zoekmachines citeren verse content vaker)
- [ ] Maandelijkse Search Console-check: welke zoektermen groeien → daar content verdiepen

---

### De kortste route naar "klaar"

| Stap | Wie | Wat |
|---|---|---|
| 1 | Robbe | Resend-account, KvK/btw-nummers, dekozijnstudio.nl-domein, GitHub/Vercel-toegang, akkoord hero-foto |
| 2 | Claude | Mailer + security + KvK/btw + hero + kleine fixes + analytics inbouwen (1–2 sessies) |
| 3 | Samen | Livegang-draaiboek (blok 6) |
| 4 | Robbe (gespreid) | Content: voicememo's, foto's, prijscheck, partners — Claude verwerkt per aanlevering |
| 5 | Doorlopend | Blok 7-ritme |
