# Kennisbank-planning

Bron van waarheid voor wat er wanneer op /kennisbank verschijnt. De scheduled task leest dit bestand elke dinsdagochtend. Zoekwoorden, doelpagina's en SEO-regels per artikel: [kennisbank-seo-aanpak.md](kennisbank-seo-aanpak.md).

## Zo werkt het

1. Claude schrijft een artikel als concept: `content/kennisbank/<slug>.md` met `draft: true` en de geplande datum. Status hieronder: **concept**.
2. Robbert leest het en keurt het goed (in de chat, of door de status hieronder op **goedgekeurd** te zetten).
3. Elke dinsdag om 06:54 zet de scheduled task elk **goedgekeurd** artikel waarvan de datum vandaag of eerder is live: `draft: false`, commit op `main`, Vercel publiceert. Status wordt **live**.
4. Staat het artikel van deze week nog op **concept** of **idee**, dan publiceert de task niets en stuurt een herinnering.

Statussen: `idee` (nog te schrijven) · `concept` (geschreven, wacht op review) · `goedgekeurd` (gaat op de datum live) · `live`

Ritme: **elke dinsdag één artikel**, wisselend tussen de series zodat elke serie in een paar maanden compleet is.

## Indeling

Elk artikel heeft één onderwerp (`category`), 0–3 bouwdelen (`subcategories`) en een doelgroep (`audience`). Toegestane waarden: `lib/kennisbank-taxonomy.ts`.

## Planning

| Datum | Serie | Titel (werktitel) | Onderwerp | Bouwdeel | Zoekwoord | Slug | Status |
|---|---|---|---|---|---|---|---|
| 2026-10-06 | Kozijnen 1 (pijler) | Kozijnen kiezen: hout, kunststof of aluminium? Alles over duurzame kozijnen | technische-keuzes | kozijnen-glas | kozijnen kiezen | kozijnen-kiezen-hout-kunststof-aluminium | live |
| 2026-10-20 | Uitbouw 1 (pijler) | Uitbouw in houtskeletbouw of traditioneel: wat is het verschil? | technische-keuzes | fundering-constructie, gevels | houtskeletbouw of traditioneel bouwen | uitbouw-houtskeletbouw-of-traditioneel | idee |
| 2026-10-27 | Offertes 1 (pijler) | Offertes van aannemers vergelijken: zo vergelijk je appels met appels | kosten-offertes | — | offertes vergelijken aannemer | offertes-aannemer-vergelijken | idee |
| 2026-11-03 | Los | Huis isoleren: dak, vloer of spouw — waar begin je? | verduurzamen | daken, vloeren, gevels | woning isoleren waar beginnen | huis-isoleren-waar-begin-je | idee |
| 2026-11-10 | Kozijnen 2 | Houten kozijnen: meranti, accoya of eiken? Houtsoorten, onderhoud en levensduur | technische-keuzes | kozijnen-glas | houten kozijnen | houten-kozijnen-houtsoorten-onderhoud | idee |
| 2026-11-17 | Uitbouw 2 | Zo is een houtskeletbouwwand opgebouwd, laag voor laag | technische-keuzes | fundering-constructie | houtskeletbouw opbouw | houtskeletbouw-wand-opbouw | idee |
| 2026-11-24 | Plannen 1 (pijler) | Je verbouwing plannen in 7 stappen: van idee tot oplevering | plannen-aanpak | — | verbouwing plannen | verbouwing-plannen-stappenplan | idee |
| 2026-12-01 | Offertes 2 | Stelposten in je offerte: wat zijn het en waar let je op? | kosten-offertes | — | stelpost offerte | stelposten-offerte | idee |
| 2026-12-08 | Kozijnen 3 | Kunststof kozijnen: verdiept of vlak, kleuren en het eerlijke verhaal over duurzaamheid | technische-keuzes | kozijnen-glas | kunststof kozijnen | kunststof-kozijnen | idee |
| 2026-12-15 | Uitbouw 3 | Zo is een traditionele spouwmuur opgebouwd: kalkzandsteen, isolatie en baksteen | technische-keuzes | gevels, fundering-constructie | spouwmuur opbouw | traditionele-spouwmuur-opbouw | idee |
| 2026-12-22 | Los | Plafonds vervangen in 80 bewoonde appartementen: zo pakten we het aan | uit-de-praktijk | wanden-plafonds | plafonds vervangen appartementen | plafonds-vervangen-80-appartementen | idee |
| 2026-12-29 | Plannen 2 | Hoe lang duurt een aanbouw, verbouwing of kozijnvervanging? Doorlooptijden op een rij | plannen-aanpak | — | hoe lang duurt een aanbouw | doorlooptijden-verbouwing-aanbouw | idee |
| 2027-01-05 | Los | Vloer isoleren via de kruipruimte: wat levert het op? | verduurzamen | vloeren | vloerisolatie kruipruimte | vloer-isoleren-kruipruimte | idee |
| 2027-01-12 | Offertes 3 | Meerwerk en minderwerk: zo voorkom je verrassingen | kosten-offertes | — | meerwerk aannemer | meerwerk-minderwerk-verbouwing | idee |
| 2027-01-19 | Kozijnen 4 | Aluminium kozijnen: slank, sterk en thermisch onderbroken | technische-keuzes | kozijnen-glas | aluminium kozijnen | aluminium-kozijnen | idee |
| 2027-01-26 | Uitbouw 4 | Isolatiewaarden uitgelegd: welke Rc-waarde haalt houtskeletbouw en welke traditioneel? | verduurzamen | gevels, daken, vloeren | rc-waarde uitbouw | rc-waarde-houtskeletbouw-traditioneel | idee |
| 2027-02-02 | Plannen 3 | Vergunningsvrij aanbouwen onder de Omgevingswet: wat mag wel en niet? | regels-vergunningen | — | vergunningsvrij aanbouwen | vergunningsvrij-aanbouwen-omgevingswet | idee |
| 2027-02-09 | Offertes 4 | Vaste prijs of regie: welke afspraak past bij jouw klus? | kosten-offertes | — | aanneemsom of regie | vaste-prijs-of-regie | idee |
| 2027-02-16 | Kozijnen 5 | HR++, triple of vacuümglas? En waarom je afstandhouder zwart moet zijn | verduurzamen | kozijnen-glas | hr++ of triple glas | hr-glas-triple-vacuum-afstandhouder | idee |
| 2027-02-23 | Uitbouw 5 (pijler gevels) | Gevelbekleding voor je uitbouw: kunststof, composiet, hout, steenstrips of baksteen | technische-keuzes | gevels | gevelbekleding uitbouw | gevelbekleding-uitbouw | idee |
| 2027-03-02 | Plannen 4 | Het beste moment om te verbouwen: seizoenen, levertijden en de bouwvak | plannen-aanpak | — | beste tijd om te verbouwen | beste-moment-om-te-verbouwen | idee |
| 2027-03-09 | Offertes 5 | 9% btw bij verbouwen: wanneer geldt het lage tarief? | kosten-offertes | — | 9 procent btw verbouwing | btw-9-procent-verbouwen | idee |
| 2027-03-16 | Uitbouw 6 | Houtcomposiet gevelbekleding: wat is het, welke merken (zoals Finiplus) en hoeveel onderhoud? | technische-keuzes | gevels | houtcomposiet gevelbekleding | houtcomposiet-gevelbekleding | idee |
| 2027-03-23 | Kozijnen 6 | Kozijnen vervangen: zo gaat het in de praktijk, van inmeten tot afkitten | plannen-aanpak | kozijnen-glas | kozijnen vervangen | kozijnen-vervangen-zo-gaat-het | idee |
| 2027-03-30 | Los (zakelijk) | Casco bedrijfspand huren: wat zit erin en wat kost de afbouw? | plannen-aanpak | wanden-plafonds, installaties-ventilatie | casco bedrijfspand afbouw | casco-bedrijfspand-afbouw | idee |
| 2027-04-06 | Uitbouw 7 | Steenstrips of echte baksteen: wanneer kies je wat? | technische-keuzes | gevels | steenstrips of baksteen | steenstrips-of-baksteen | idee |
| 2027-04-13 | Offertes 6 | Betalingstermijnen bij een verbouwing: wat is normaal? | kosten-offertes | — | termijnschema aannemer | betalingstermijnen-verbouwing | idee |
| 2027-04-20 | Plannen 5 | Wonen tijdens een verbouwing: zo houd je het leefbaar | plannen-aanpak | — | wonen tijdens verbouwing | wonen-tijdens-verbouwing | idee |
| 2027-04-27 | Uitbouw 8 | Plat dak of schuin dak op je uitbouw? | technische-keuzes | daken | aanbouw plat dak of schuin dak | uitbouw-plat-of-schuin-dak | idee |

Doelgroep: alles `thuis`, behalve "Plafonds 80 appartementen" en "Casco bedrijfspand" (`bedrijven`) en de offerte- en plannen-artikelen (`thuis, bedrijven`).

## Schrijfrichtlijnen (voor elk artikel)

- **Opbouw:** aanleiding → meteen wat wij ervan vinden → wat het artikel je brengt ("In dit artikel") → kort persoonlijk stuk → de keuzes/stappen → veelgemaakte fouten → `## Veelgestelde vragen` met `###`-vragen (wordt automatisch FAQ-schema) → `## Samenvatting` → afsluiter met link naar dienst of contact.
- **Toon:** persoonlijk, nuchter, "we" en "je", geen poeha. Geschreven door het team dat het werk uitvoert.
- **SEO:** zoekwoord in titel, eerste alinea en minstens één H2. Titel max 120 tekens, description max 200. Pijlerartikelen 2.000+ woorden, overige 1.000–1.500.
- **Interne links:** elk artikel linkt naar de pijler van z'n serie, naar de bijbehorende dienstpagina en waar mogelijk naar een project.
- **Feiten:** regels, subsidies en U-/Rc-waarden altijd checken bij de bron (rvo.nl, iplo.nl) en de bron linken. Geen bedragen noemen die snel verouderen.
- **Persoonlijke verhalen:** alleen wat het team zelf heeft verteld. Niets verzinnen.
- **Frontmatter van een nieuw artikel:**

  ```yaml
  title: "Volledige titel (H1)"
  seoTitle: "Korte titel voor Google"   # alleen als titel + " | MTB Bouw" boven 60 tekens komt
  description: "140–160 tekens"
  date: 2026-10-20                      # geplande publicatiedatum
  category: technische-keuzes
  subcategories: [gevels]
  audience: [thuis]
  series: uitbouw                       # als het bij een serie hoort
  author: robbert                       # of mathijs; weglaten = MTB Bouw
  cover: /images/...
  coverAlt: "..."
  draft: true                           # de scheduled task zet dit op false
  ```
- **Links naar concepten:** link vanuit een live artikel niet naar een concept; die pagina bestaat nog niet. Serienavigatie en "Lees ook" nemen nieuwe artikelen automatisch mee zodra ze live staan.

## Onderhoud bestaande artikelen

- ✅ De twee ISDE-artikelen zijn samengevoegd in `isde-subsidie-uitgelegd`; de oude URL verwijst door (301).
- `wat-kost-een-aanbouw-2026` en `kantoor-verbouwen-kosten-2026` in januari bijwerken naar 2027 en uitbreiden met rekenvoorbeelden.
- `kozijnen-vervangen-wanneer` gebruikt nog een placeholderfoto.
