# Feitenlijst MTB Bouw

> Opgesteld 1 november 2026, na de SEO/GEO-analyse van die dag. Status: concept. Deze lijst heet pas "goedgekeurd" als Robbert of Mathijs de bedrijfsafspraken hieronder heeft bevestigd.
>
> Code: contactgegevens staan in `lib/site.ts`, vaste formuleringen voor garantie, offerte, meerwerk en planning in `lib/facts.ts`. Gebruik die in plaats van eigen varianten.
>
> Een tekst op de website bewijst wat er gepubliceerd staat, niet dat de afspraak klopt. Bron voor bevestigde afspraken: de algemene voorwaarden van MTB Bouw (versie juli 2025, hierna "AV").

## 1. Overzicht

| Onderwerp | Aangetroffen varianten (vindplaats) | Onderbouwing | Status | Verwerking | Verantwoordelijke |
|---|---|---|---|---|---|
| Garantie op de uitvoering | 1 jaar (hoe-wij-werken, nieuwbouw, FAQ nieuwbouw) · 5 jaar (afbouwstudio, kantoor-verbouwen) · 5 jaar plaatsing + 10 jaar fabriek (FAQ kozijnen) · 5/10/2 jaar per onderdeel (FAQ afbouw) · 6/20/10/2–10 jaar (FAQ bedrijfsbouw) | AV art. 9.1: 1 jaar op de uitvoering, tenzij anders overeengekomen | Tegenstrijdig | Overal de AV-tekst uit `lib/facts.ts`; de afwijkende termijnen zijn weggehaald. Terugzetten kan zodra bevestigd is dat ze echt gelden (en voor welke diensten) | Robbert en Mathijs |
| Garantie op materialen | "fabrieksgarantie", "10 jaar fabrieksgarantie op kozijn en glas" | AV art. 9.2: garantie van fabrikant of leverancier | Bevestigd (algemeen) · 10 jaar kozijnen: te bevestigen | Algemene AV-tekst; de termijn per merk hoort in de offerte | Robbert (De Kozijnstudio) |
| Wettelijke rechten | Ontbrak; garantie leek het einde van alle verantwoordelijkheid | Wettelijke rechten van de opdrachtgever blijven gelden naast een commerciële garantie | Bevestigd als principe | Zin "Je wettelijke rechten blijven daarnaast gewoon gelden." toegevoegd. Definitieve juridische formulering laten toetsen | Jurist of brancheorganisatie |
| Nazorg / controlebezoek | "komen na 1 jaar gratis langs" (dienstpagina-sjabloon) · "gratis nazorg in het eerste jaar" (FAQ kozijnen) · "jaarlijkse controle van installaties en gevel" (project bedrijfshal Borne) | Geen bron | Te bevestigen | Sjabloon en FAQ neutraal gemaakt ("daarna bereikbaar voor nazorg"). Projecttekst Borne ongewijzigd: is dat echt afgesproken? | Mathijs |
| Offertetermijn | "vaste offerte binnen 5 werkdagen" (13 afbouwpagina's, sjabloon, renovatie, uitbouw, FAQ) · "binnen enkele werkdagen" | Geen bron | Onbevestigd | Weggehaald; nu: "gespecificeerde offerte na de intake" | Robbert |
| Intaketermijn | "binnen 7 dagen", "binnen een week", "dezelfde week" (afbouwpagina's, FAQ) | Geen bron | Onbevestigd | Absolute termijnen weggehaald. Zachte formuleringen ("meestal dezelfde week", "doorgaans binnen een week") in de FAQ Enschede en Hengelo staan er nog | Robbert |
| Vaste prijs | "vaste prijs", "vaste aanneemsom" (homepage, diensten, stadspagina's, nieuwbouw) | AV art. 4.3: kostenstijgingen na het sluiten van de overeenkomst mogen worden doorberekend, mits vooraf gemotiveerd en afgestemd | Tegenstrijdig | Niet sitebreed aangepast (kernboodschap). "Geen (meerwerk-)verrassingen" vervangen door "Meerwerk alleen na jouw akkoord" (AV art. 4.4) | Robbert en Mathijs |
| Meerwerk | "geen meerwerk-verrassingen", "geen verrassingen" | AV art. 4.4: meerwerk alleen na voorafgaande goedkeuring | Bevestigd | "Meerwerk alleen na jouw akkoord" | – |
| Planning en opleverdatum | "vaste opleverdatum" (nieuwbouw), "Geen vertraging, wel resultaat" (winkel, retail, FAQ), "Afspraak is afspraak" (Almelo) | AV art. 5.1: termijnen zijn indicatief, tenzij schriftelijk als fatale termijn vastgelegd | Tegenstrijdig | "Geen vertraging" en "afspraak is afspraak" weggehaald; nieuwbouw nu "afgesproken opleverdatum" | Mathijs |
| Bedrijf blijft open | "terwijl jouw bedrijf gewoon doordraait", "je kantoor blijft in bedrijf", "zonder dat je bedrijf stilvalt" | Geen bron | Onbevestigd | Nu "zoveel mogelijk", met afspraken vooraf | Mathijs |
| Prijsvergelijking regio | "geen Randstad-tarieven", "gunstiger dan de Randstad", "scherpere tarieven dan Randstad-partijen" | Geen bron | Onbevestigd | Weggehaald | – |
| Offertegeldigheid en btw | Niet op de site | AV art. 2.2 (15 kalenderdagen) en 4.1 (prijzen excl. btw) | Bevestigd | Vastgelegd in `lib/facts.ts`, nog niet zichtbaar gebruikt | – |
| Prijsindicaties | Meestal "marktindicatie 2026, excl. btw"; "Wat kost een bedrijfspand?" zonder btw-vermelding; aanbouw "incl. btw" | Eigen indicaties | Deels te bevestigen | Ongewijzigd. Graag bevestigen of de bedrijfspandprijzen in- of exclusief btw zijn | Robbert |
| Adres | Heersenkampweg 5, 7546 PG Enschede (site, JSON-LD) · Herikebrink 37 (enkele externe vermeldingen) | KvK-uittreksel | Tegenstrijdig | Website ongewijzigd. Vaststellen welk adres publiek moet zijn; externe profielen vallen buiten deze opdracht | Robbert |
| Telefoon, WhatsApp, e-mail | 053 206 50 71 · WhatsApp +31 6 42997018 · info@mtbbouw.com | `lib/site.ts` | Consistent op de site | Geen wijziging | – |
| Openingstijden | Ma–vr 08:00–17:00 (footer, JSON-LD, mail) | `lib/site.ts` | Consistent | Geen wijziging | – |
| KvK en erkenning | KvK 42148321 (MTB Bouw B.V.) · SBB-erkend leerbedrijf, ID 100812726 | `lib/site.ts`, NAP-audit 2 okt 2026 | Bevestigd (KvK) · SBB te controleren in het SBB-register | Geen wijziging | Robbert |
| Labels | Afbouwstudio "het zakelijke label van MTB Bouw" · De Kozijnstudio · Prefab Bouwen | Site | Consistent | Bij de migratie naar /zakelijk de rol van het label Afbouwstudio bepalen | Robbert |
| Mijn Blauwdruk | "In Mijn Blauwdruk, onze eigen app, volg je je bouw" (hoe-wij-werken) · "een eigen online omgeving" (homepage) · "Online en altijd bereikbaar" (artikel offertes) · /mijn-blauwdruk: "binnenkort online" | Klantomgeving nog niet live | Bevestigd: nog niet live | Teksten nu: Blauwdruk is onze interne app; Mijn Blauwdruk voor klanten komt binnenkort | Robbert |
| PandScan / inventarisatie-app | "onze PandScan-app", "met onze app" (afbouwpagina's, FAQ) | Geen bron | Te bevestigen | Ongewijzigd. Bestaat de app zo, en heet hij zo? | Robbert |
| Algemene voorwaarden | Contactformulier vraagt akkoord; de voorwaarden staan niet op de site | AV juli 2025 | Te regelen | Advies: AV als pdf of pagina publiceren en vanuit het formulier linken | Robbert |
| Vacatures | Allround Timmerman en BBL Leerling, `validThrough` 1 oktober 2026 (verlopen) | Geen bevestiging dat ze openstaan | Te bevestigen | Status "te-bevestigen": wel zichtbaar, zonder vacaturepagina en zonder JobPosting | Mathijs |
| Salaris | Timmerman €2.700–€3.800 (vacature) · "circa €3.000 tot €4.500" (werken bij, voordelen) | Geen bron | Tegenstrijdig | Ongewijzigd. Welke bedragen kloppen, en voor welke functie? | Mathijs |

## 2. Vragen aan Robbert en Mathijs

1. Garantie: geldt overal 1 jaar op de uitvoering (AV art. 9.1), of bieden jullie voor afbouw, zakelijk werk of kozijnen bewust langer? Zo ja: welke termijn, voor welk werk, en staat dat in de offerte?
2. Nazorg: komen jullie na een jaar standaard terug voor een controle? En is de jaarlijkse controle bij de bedrijfshal in Borne echt afgesproken?
3. Vaste prijs: de site belooft een vaste prijs, de AV staan doorberekening van kostenstijgingen toe (art. 4.3). Welke formulering willen jullie?
4. Opleverdatum bij nieuwbouw: spreken jullie die als fatale termijn af, of is het een streefdatum?
5. Offerte- en intaketermijnen: willen jullie een termijn noemen, en welke kunnen jullie altijd waarmaken?
6. Adres: Heersenkampweg 5 of Herikebrink 37? Wat moet publiek zijn, ook in het Google-bedrijfsprofiel?
7. Vacatures: staan Allround Timmerman en BBL Leerling nu echt open? Is er een sluitingsdatum? Welke salarisbedragen kloppen?
8. PandScan: bestaat de inventarisatie-app zo, en mag die naam op de site?
9. Bedrijfspandprijzen in de FAQ: inclusief of exclusief btw?
10. Mogen de algemene voorwaarden op de site, zodat het akkoordvinkje in het formulier ergens naar verwijst?

## 3. Inhoudelijke claims: voor en na

| Onderwerp | Voor | Na | Bron |
|---|---|---|---|
| Vergunningvrij bouwen | "vergunningvrij tot ongeveer 30 m²", "niet dieper dan 4 meter vanaf de oorspronkelijke achtergevel" (artikelen, FAQ, dienst- en stadspagina's) | Geen vaste maat die overal geldt; het hangt af van onder meer de plek op het erf, diepte en hoogte, bestaande bebouwing, gebruik en het omgevingsplan van de gemeente. Verwijzing naar de Vergunningcheck. Vergunningvrij is niet regelvrij | IPLO, Omgevingsloket |
| Vergunningsoort | "afwijken van het bestemmingsplan" | Vergunning voor een omgevingsplanactiviteit, als het plan niet in het omgevingsplan past; beslistermijn 8 weken (regulier) of 26 weken (uitgebreid), verlenging mogelijk | IPLO, Omgevingswet |
| BENG | "energieneutraal (BENG)", "Nieuwbouw voldoet aan BENG: warmtepomp, triple glas, balansventilatie en Rc 6,3" | Bijna energieneutraal; niet hetzelfde als volledig energieneutraal. BENG stelt prestatie-eisen (energiebehoefte, fossiel energiegebruik, aandeel hernieuwbaar), geen vaste maatregelen. Sinds 1 januari 2021 | RVO |
| Waardestijging | "70–90% van de bouwkosten komt terug in de woningwaarde" (twee artikelen, samenvatting, FAQ) | "Een uitbouw kan de woningwaarde verhogen. Hoeveel dat is, hangt onder meer af van de woning, locatie, extra gebruiksruimte en kwaliteit van de uitvoering. Voor een inschatting is een taxatie nodig." Geen vervangend percentage | Geen betrouwbare bron gevonden voor het percentage |
| Garantie | 5 jaar, 6/20/10 jaar, 5 jaar plaatsing | AV-tekst: 1 jaar op de uitvoering tenzij anders afgesproken, materialen volgens fabrikant, wettelijke rechten blijven gelden | AV art. 9 |
| Offerte | "vaste prijs binnen 5 werkdagen", "intake binnen 7 dagen" | "Gespecificeerde offerte na de intake" | Redactionele standaard analyse |

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
- FAQ bedrijfsbouw: prijsindicaties hal en kantoor per m² (zie vraag 9).
- Project overkapping paardenstal: noemt "bestemmingsplan". Mogelijk terecht als het project onder de oude wet viel.
