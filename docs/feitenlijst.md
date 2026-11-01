# Feitenlijst MTB Bouw

> Opgesteld 1 november 2026, na de SEO/GEO-analyse van die dag. Status: grotendeels bevestigd door Robbert op 1 november 2026; de open punten staan in hoofdstuk 2.
>
> Code: contactgegevens staan in `lib/site.ts`, vaste formuleringen voor garantie, offerte, meerwerk en planning in `lib/facts.ts`. Gebruik die in plaats van eigen varianten.
>
> Een tekst op de website bewijst wat er gepubliceerd staat, niet dat de afspraak klopt. Bron voor bevestigde afspraken: de algemene voorwaarden van MTB Bouw (versie juli 2025, hierna "AV").

## 1. Overzicht

Besluiten van Robbert op 1 november 2026 zijn verwerkt. Wat nog open staat, staat in hoofdstuk 2.

| Onderwerp | Aangetroffen varianten (vindplaats) | Onderbouwing | Status | Verwerking | Verantwoordelijke |
|---|---|---|---|---|---|
| Garantie op de uitvoering | 1 jaar (hoe-wij-werken, nieuwbouw, FAQ nieuwbouw) · 5 jaar (afbouwstudio, kantoor-verbouwen) · 5 jaar plaatsing (FAQ kozijnen) · 5/10/2 jaar (FAQ afbouw) · 6/20/10/2–10 jaar (FAQ bedrijfsbouw) | Besluit Robbert 1 nov 2026: "garantie volgens de richtlijnen in de bouw" | Bevestigd | Overal de tekst uit `lib/facts.ts`. Let op: AV art. 9.1 noemt nog 1 jaar; aanpassen voordat de AV online gaan | Robbert |
| Garantie op materialen | "fabrieksgarantie", "10 jaar fabrieksgarantie op kozijn en glas" | AV art. 9.2 | Bevestigd (algemeen) | Algemene tekst; de termijn per merk staat in de offerte | – |
| Wettelijke rechten | Ontbrak | Wettelijke rechten blijven gelden naast een commerciële garantie | Bevestigd als principe | Zin toegevoegd. Definitieve juridische formulering laten toetsen | Jurist of brancheorganisatie |
| Nazorg | "komen na 1 jaar gratis langs" · "gratis nazorg in het eerste jaar" | Besluit Robbert: na de oplevering bellen we altijd na | Bevestigd | Overal: "Na de oplevering bellen we je altijd na om te horen of alles naar wens is" | – |
| Project bedrijfshal Borne | Projectpagina, FAQ Borne, stadspagina Borne, nieuwbouw, afbeeldingen en alt-teksten | Besluit Robbert: geen project van MTB Bouw | Verwijderd | Projectpagina weg (301 naar /projecten), alle verwijzingen weg. De foto bleek de bedrijfsbus van MTB Bouw; die heet nu `/images/mtb-bouw-bus.webp` met een eerlijke alt-tekst | – |
| Offerte- en intaketermijnen | "binnen 5 werkdagen", "binnen 7 dagen", "binnen een week", "dezelfde week" | Besluit Robbert: geen termijnen | Bevestigd | Alle termijnen weg; nu "gespecificeerde offerte na de intake" | – |
| Opleverdatum | "vaste opleverdatum" (nieuwbouw), "Geen vertraging" | Besluit Robbert: niet te hard maken. AV art. 5.1: termijnen indicatief | Bevestigd | "Planning met de beoogde opleverdatum" | – |
| Vaste prijs | "vaste prijs", "vaste aanneemsom" (homepage, diensten, stadspagina's, nieuwbouw, artikelen) | AV art. 4.3: kostenstijgingen mogen worden doorberekend, mits vooraf afgestemd | Open | Niet sitebreed aangepast. "Geen (meerwerk-)verrassingen" is "Meerwerk alleen na jouw akkoord" (AV art. 4.4) | Robbert en Mathijs |
| Meerwerk | "geen meerwerk-verrassingen" | AV art. 4.4 | Bevestigd | "Meerwerk alleen na jouw akkoord" | – |
| Bedrijf blijft open | "terwijl jouw bedrijf gewoon doordraait" | Geen bron | Onbevestigd | "Zoveel mogelijk", met afspraken vooraf | – |
| Prijsvergelijking regio | "geen Randstad-tarieven" | Geen bron | Verwijderd | – | – |
| Prijzen per m² voor panden | Kantoor, bedrijfspand, horeca, winkel, hal (FAQ, afbouwpagina's, artikelen lunchroom en kantoor inrichten) | Besluit Robbert: geen m²-prijzen voor panden | Verwijderd, op één artikel na | Het artikel "Wat kost een kantoorverbouwing per m² in 2026?" draait helemaal om m²-prijzen: zie vraag 2. Onderdeelprijzen (metal stud per m² wand, systeemplafond per m²) staan er nog | Robbert |
| Prijzen woningen | Aanbouw, nieuwbouwwoning, renovatie per m² | Eigen indicaties | Ongewijzigd | – | – |
| Adres | Heersenkampweg 5 (site) · Herikebrink 37 (enkele externe vermeldingen) | Besluit Robbert: Heersenkampweg 5 | Bevestigd | Site klopt. Externe profielen nog aanpassen (buiten deze opdracht) | Robbert |
| Telefoon, WhatsApp, e-mail, openingstijden | 053 206 50 71 · +31 6 42997018 · info@mtbbouw.com · ma–vr 08:00–17:00 | `lib/site.ts` | Consistent | – | – |
| KvK en erkenning | KvK 42148321 · SBB ID 100812726 | `lib/site.ts` | Bevestigd (KvK) · SBB controleren in het SBB-register | – | Robbert |
| Mijn Blauwdruk | Gepresenteerd als beschikbare klantomgeving | Nog niet live | Bevestigd | Blauwdruk is onze interne app; Mijn Blauwdruk komt binnenkort | – |
| PandScan / inventarisatie-app | "onze PandScan-app", "inventarisatie-app" | Besluit Robbert: bestaat niet | Verwijderd | Nu "we leggen het pand op locatie nauwkeurig vast" | – |
| Algemene voorwaarden | Formulier vraagt akkoord, AV staan niet op de site | AV juli 2025 | Komt binnenkort (Robbert) | Na publicatie linken vanuit het contactformulier; garantieartikel eerst gelijktrekken | Robbert |
| Vacatures | Allround Timmerman en BBL Leerling | Nog niet bevestigd dat ze openstaan | Open | Status "te-bevestigen": zichtbaar, zonder vacaturepagina en markup | Mathijs |
| Salaris | €2.700–€3.800 (vacature) · €3.000–€4.500 (werken bij) | Besluit Robbert: €3.000–€4.500 | Bevestigd | Vacature en markup op €3.000–€4.500 bruto per maand | – |

## 2. Nog open

1. Vaste prijs: de site belooft een vaste prijs, AV art. 4.3 staat doorberekening van kostenstijgingen toe. Welke formulering?
2. Artikel "Wat kost een kantoorverbouwing per m² in 2026?": offline halen met een doorverwijzing, of herschrijven zonder bedragen?
3. Vacatures: staan Allround Timmerman en BBL Leerling nu echt open? Zo ja, dan krijgen ze een eigen pagina met Google-vacaturecode.
4. AV art. 9.1 (1 jaar garantie) gelijktrekken met "garantie volgens de richtlijnen in de bouw" voordat de AV online gaan.

## 3. Inhoudelijke claims: voor en na

| Onderwerp | Voor | Na | Bron |
|---|---|---|---|
| Vergunningvrij bouwen | "vergunningvrij tot ongeveer 30 m²", "niet dieper dan 4 meter vanaf de oorspronkelijke achtergevel" (artikelen, FAQ, dienst- en stadspagina's) | Geen vaste maat die overal geldt; het hangt af van onder meer de plek op het erf, diepte en hoogte, bestaande bebouwing, gebruik en het omgevingsplan van de gemeente. Verwijzing naar de Vergunningcheck. Vergunningvrij is niet regelvrij | IPLO, Omgevingsloket |
| Vergunningsoort | "afwijken van het bestemmingsplan" | Vergunning voor een omgevingsplanactiviteit, als het plan niet in het omgevingsplan past; beslistermijn 8 weken (regulier) of 26 weken (uitgebreid), verlenging mogelijk | IPLO, Omgevingswet |
| BENG | "energieneutraal (BENG)", "Nieuwbouw voldoet aan BENG: warmtepomp, triple glas, balansventilatie en Rc 6,3" | Bijna energieneutraal; niet hetzelfde als volledig energieneutraal. BENG stelt prestatie-eisen (energiebehoefte, fossiel energiegebruik, aandeel hernieuwbaar), geen vaste maatregelen. Sinds 1 januari 2021 | RVO |
| Waardestijging | "70–90% van de bouwkosten komt terug in de woningwaarde" (twee artikelen, samenvatting, FAQ) | "Een uitbouw kan de woningwaarde verhogen. Hoeveel dat is, hangt onder meer af van de woning, locatie, extra gebruiksruimte en kwaliteit van de uitvoering. Voor een inschatting is een taxatie nodig." Geen vervangend percentage | Geen betrouwbare bron gevonden voor het percentage |
| Garantie | 5 jaar, 6/20/10 jaar, 5 jaar plaatsing, 1 jaar | Garantie volgens de richtlijnen in de bouw, afspraken in offerte en overeenkomst; materialen volgens fabrikant; wettelijke rechten blijven gelden; na oplevering bellen we altijd na | Besluit Robbert, AV art. 9.2 |
| Offerte | "vaste prijs binnen 5 werkdagen", "intake binnen 7 dagen" | "Gespecificeerde offerte na de intake", geen termijnen | Besluit Robbert |
| Prijzen panden | "€150–400 / €300–600 / €600–1.500 per m²", "hal €600–€1.100 per m²" | Geen m²-prijzen; kosten hangen af van pand, installaties en afwerking | Besluit Robbert |

## 4. Gebruikte officiële bronnen (gecontroleerd op 1 november 2026)

- IPLO, Informatie voor particulieren over aanbouw, uitbouw of bijgebouw: https://iplo.nl/thema/bouw/bouwen-vergunning-melding/bijbehorende-bouwwerken/informatie-particulieren/
- IPLO, Stappenplan vergunningvrij bouwen bijbehorende bouwwerken: https://iplo.nl/thema/bouw/bouwen-vergunning-melding/bijbehorende-bouwwerken/stappenplan-bepaling-vergunningvrij-bouwen/
- Omgevingsloket, Vergunningcheck: https://omgevingswet.overheid.nl/checken
- RVO, De energieprestatie-eisen van BENG: https://www.rvo.nl/onderwerpen/wetten-en-regels-gebouwen/beng/indicatoren
- Google Search Central, Job posting structured data: https://developers.google.com/search/docs/appearance/structured-data/job-posting
- Algemene voorwaarden MTB Bouw, versie juli 2025 (intern document)

## 5. Nog te beoordelen (gesignaleerd, niet gewijzigd)

- FAQ kozijnen: ISDE "tot €130 per m² isolerend glas, bij minimaal 8 m²". Bedrag en voorwaarden jaarlijks controleren op rvo.nl.
- FAQ kozijnen: U-waarden HR++ (± 1,1) en triple (tot 0,5). Laten controleren door de leverancier.
- Project overkapping paardenstal: noemt "bestemmingsplan". Mogelijk terecht als het project onder de oude wet viel.
