# SEO-strategie MTB Bouw 2026–2027

> Opgesteld 4 juli 2026 op basis van live SERP-onderzoek (Google, juli 2026): 30+ zoekopdrachten geanalyseerd, 8 Twentse concurrenten doorgelicht, local-SEO- en AI-vindbaarheidsonderzoek. **Kanttekening:** er is geen zoekvolumedata gebruikt (vergt tools als Ahrefs/Semrush); prioriteiten zijn gebaseerd op waargenomen concurrentiedruk in de zoekresultaten — dat is voor een lokale strategie betrouwbaarder dan landelijke volumeschattingen.

---

## 1. Managementsamenvatting

**De kern van de strategie in één zin:** win eerst de vrijwel onbezette zoekmarkten (zakelijke kantoorafbouw in heel Oost-Nederland + regio-query's "Twente"), bouw tegelijk het bewezen stadspagina-model uit voor particuliere verbouw in Twente, en gebruik kostengidsen in de kennisbank als motor voor zowel Google-verkeer als AI-citaties.

De drie belangrijkste onderzoeksconclusies:

1. **Zakelijk is het grootste gat.** Voor "kantoor verbouwen Enschede/Twente/Deventer/Apeldoorn" heeft **geen enkele lokale aannemer** een gerichte pagina. De enige lokale concurrent (MMT Bouw, ook Enschede) rankt via één kostenblog. Afbouwstudio kan dit segment met een handvol pagina's claimen — inclusief de grote steden, waar De Broodbode-cases (Zwolle, Apeldoorn) al lokaal bewijs leveren.
2. **Particulier wint je met stadspagina's, niet met de homepage.** Winnaars als Holtkamp Bouw (±15 stadspagina's), Novostructo (2 keyword-varianten per stad die béíde ranken) en Haafkes (rankt in steden waar ze niet gevestigd zijn) bewijzen het model. MTB heeft er nu nul. De regio-query "aannemer/verbouwen Twente" is vrijwel portal-vrij — de snelste winst.
3. **Kostencontent is het dubbele wapen.** Landelijke kosten-SERP's worden gedomineerd door gidsen (Homedeal, Funda), maar regionale bouwbedrijven mét eigen kostenpagina's ranken aantoonbaar mee (Heidstra, Keesbouw, Aannemer-Gigant, De Prefabriek) — én dit is precies het format dat Google AI Overviews en ChatGPT citeren. Geen enkele Twentse aannemer heeft kostenpagina's. Dit past bovendien exact bij MTB's transparantie-positionering.

**Randvoorwaarde nummer 1:** de nieuwe site moet live. De huidige live site is nog de oude WordPress-versie; alle onderstaande aanbevelingen bouwen op de nieuwe Next.js-site (technisch SEO-fundament is daar al op orde: metadata, JSON-LD, sitemap, redirects van alle oude URL's, crawlsnelheid 55–130 ms).

**Randvoorwaarde nummer 2 (urgent, gratis):** de NAP-inconsistentie fixen. Directories (aannemer-nu.nl, bedrijvenregister.nl, telefoonboek.nl) tonen nog het oude adres **Herikebrink 37** in plaats van **Heersenkampweg 5**. Inconsistente adresgegevens zijn schadepunt nr. 1 voor lokale rankings.

---

## 2. Uitgangspositie

| Aspect | Status |
|---|---|
| Technische SEO (nieuwe site) | ✅ Op orde: metadata, canonicals, JSON-LD, sitemap, robots, redirect-map oude WP-URL's, 1 h1/pagina, server-gerenderde content, 55–130 ms |
| Huidige rankings | ⚠️ mtbbouw.com werd op **geen van de 30+ onderzochte generieke query's** in de top-10 waargenomen — alleen op merknaam |
| Content-diepte | ⚠️ 4 label-hubs + 5 dienstpagina's + 1 blogartikel + 4 projecten — te dun om te ranken |
| Stads-/kostenpagina's | ❌ Nul (winnaars hebben er 10–15) |
| Reviews/vertrouwen | ❌ Niet gevonden in Trustoo top-10 Enschede; geen reviewscore op de site; concurrenten tonen BouwGarant/Trustoo prominent |
| NAP-consistentie | ❌ Oud adres in directories |
| Google Business Profile | ⚠️ Optimalisatie onbekend — zie §6 |

---

## 3. Doelgroepen en zoekintentie-lagen

**Pijler A — Particulier: verbouwing/aanbouw in Twente** (commerciële focus 1)
**Pijler B — Zakelijk: kantoren/bedrijfspanden, Twente + grote steden Oost-NL** (commerciële focus 2)

Per pijler bedienen we drie intentie-lagen, elk met een eigen paginatype:

1. **Lokaal-transactioneel** ("aannemer enschede", "kantoor verbouwen deventer") → stads-/dienst+stad-pagina's. Dit is waar de offerte-aanvragen vandaan komen.
2. **Commercieel-oriënterend** ("kantoorafbouw", "prefab aanbouw", "turnkey afbouw") → label-hubs en dienstpagina's.
3. **Informationeel/topfunnel** ("wat kost een aanbouw per m2", "casco kantoor afbouwen") → kennisbank-kostengidsen en -gidsen. Voedt Google-rankings, AI-citaties én retargeting-publiek.

---

## 4. Keyword-strategie en pagina-mapping

### Pijler A — Particulier (Twente)

| Prio | Zoekterm(cluster) | Doelpagina | Onderbouwing uit SERP-onderzoek |
|---|---|---|---|
| 1 | aannemer twente / huis verbouwen twente | **NIEUW** `/aannemer-twente` (of /wonen-en-verbouwen verrijken) | Top-10 vrijwel portal-vrij — zwakste concurrentie van alle onderzochte query's |
| 1 | aannemer enschede / bouwbedrijf enschede | **NIEUW** `/aannemer-enschede` én `/bouwbedrijf-enschede` | Novostructo bewijst: 2 keyword-variant-pagina's ranken allebei (dubbele SERP-aanwezigheid). MTB is er fysiek gevestigd (proximity-voordeel) |
| 1 | verbouwing/huis verbouwen enschede | **NIEUW** `/verbouwen-enschede` | Winnend paginatype = dienst+stad (Renova-template, zie §5) |
| 1 | aanbouw/uitbouw enschede | **NIEUW** `/aanbouw-enschede` + projectpagina's met stad in de titel | Ook losse projectreferentie-pagina's ranken hier (Mulder, De Jong) |
| 2 | aannemer hengelo / almelo | **NIEUW** `/aannemer-hengelo`, `/aannemer-almelo` | Haafkes (uit Goor!) rankt in beide steden puur op stadspagina's |
| 2 | wat kost een aanbouw per m2 (2026) | **NIEUW** kennisbank-kostengids | Geen enkele Twentse aannemer heeft er een; regionale bedrijven ranken er landelijk mee; hét AI-citatie-format |
| 2 | wat kost een verbouwing / dakopbouw kosten | **NIEUW** kennisbank-kostengidsen | Zelfde mechanisme |
| 2 | prefab aanbouw (kosten) | `/prefab` uitbreiden + kostengids | Prefast/De Prefabriek ranken lokaal én landelijk met deze brug — uniek combineerbaar met MTB's Prefab-label |
| 3 | oldenzaal / borne / haaksbergen / losser | Lichte stadspagina's, pas ná succes in de grote drie | Holtkamp-model (±15 pagina's), eerst valideren |
| 3 | woning verduurzamen enschede | **NIEUW** `/verduurzamen-enschede` + ISDE-kennisbankartikel | Lokale verduurzamings-SERP is open; subsidiebedragen CMS-driven met datum + RVO-link (huisregel) |

### Pijler B — Zakelijk (Afbouwstudio)

| Prio | Zoekterm(cluster) | Doelpagina | Onderbouwing |
|---|---|---|---|
| 1 | kantoorafbouw / kantoor afbouw | `/afbouwstudio` (H1/title aanscherpen op deze term) | Kernterm zonder dominante speler; stadsgenoot MMT bewijst rankbaarheid |
| 1 | kantoor verbouwen enschede/twente | **NIEUW** `/afbouwstudio/kantoor-verbouwen` | Lokale SERP is **leeg** — geen enkele aannemer heeft een gerichte pagina |
| 1 | kantoor verbouwen kosten per m2 | **NIEUW** kennisbank-artikel met m²-tabel | MMT rankt met exact dit format; Twente-prijsvoordeel t.o.v. Randstad als invalshoek |
| 1 | kantoor verbouwen deventer / apeldoorn | **NIEUW** stadspagina's onder /afbouwstudio | SERP's bevatten **nul** fit-out-spelers; De Broodbode-cases geven lokaal bewijs. Dit is de juiste "grote steden"-strategie |
| 2 | bedrijfspand verbouwen twente | **NIEUW** `/afbouwstudio/bedrijfspand-verbouwen` | Alleen generieke bouwers zonder themapagina |
| 2 | turnkey afbouw kantoor | Sectie op /afbouwstudio of eigen spoke | Gefragmenteerde SERP, exact MTB's casco→turn-key-verhaal |
| 2 | casco kantoor afbouwen (huurder) | **NIEUW** kennisbank-gids "Casco kantoorruimte gehuurd? Zo pak je de afbouw aan" | Grootste content-gap: SERP bestaat nu uit huurrecht-advocaten, niemand bedient de huurder met een bouwvraag |
| 2 | horeca / winkel verbouwen | **NIEUW** `/afbouwstudio/horeca-verbouwen` (Broodbode-case), `/winkel-verbouwen` | Regionaal nul concurrentie; landelijk ranken regionale bedrijven met één gerichte pagina |
| 2 | kantoor verbouwen zwolle | **NIEUW** stadspagina | ECG Projecten rankt daar #1 met exact dit model — kopieerbaar |
| 3 | metal stud wanden / systeemplafond kantoor | **NIEUW** productpagina's onder /afbouwstudio | MMT rankt met losse productpagina's; systeemplafond.site (Kampen) bewijst regionaal→landelijk |
| 3 | bedrijfshal verbouwen tot kantoor | **NIEUW** kennisbank-artikel | Zwakke SERP; unieke kruising Afbouwstudio × Prefab |
| — | merkterm "afbouwstudio" | — | Vrijwel onbezet; **afbouwstudio.nl is geparkeerd → overwegen te registreren/kopen** (merkbescherming + directe merk-SEO) |

### Grote steden — expliciete scope-keuze

- **Zakelijk: JA.** Deventer, Apeldoorn, Zwolle krijgen Afbouwstudio-stadspagina's (SERP's leeg, referenties aanwezig).
- **Particulier: NEE (voorlopig).** Elke grote stad heeft al 5–6 lokale aannemers mét stadspagina's + portals; MTB zou achteraan aansluiten. Enige verdedigbare instap later: prefab-projectreferentiepagina's per stad zodra daar projecten liggen.

---

## 5. De winnende paginatemplate (stads- en dienst+stad-pagina's)

Gebaseerd op de best presterende concurrent-pagina's (Renova, Holtkamp — 9 secties, 11 FAQ-vragen, reviewwidget):

1. **H1 met term + stad** ("Aannemer in Enschede — verbouw, aanbouw en renovatie")
2. Intro-alinea die de vraag feitelijk beantwoordt (citeerbaar voor AI — zie §7)
3. Waardepropositie / redenen (lime-pijlers, bestaand patroon)
4. **Diensten in deze stad** met interne links naar de label-hubs
5. **Projectgalerij met projecten uit die stad/regio** (foto's + plaatsnaam in alt-tekst)
6. Praktische lokale info (vergunningen/omgevingsvergunning gemeente X — onderscheidend, Renova doet dit)
7. Kostenindicatie-blok met link naar de kennisbank-kostengids
8. **Reviews/vertrouwenssignalen** (Google-score, later BouwGarant — zie §6/§8)
9. **FAQ-sectie (6–10 vragen) met FAQPage-schema**
10. Offerte-CTA + NAP-blok (adres/telefoon)

Elke pagina uniek geschreven (geen vervangen-stadsnaam-sjablonen — Google herkent dat), 800–1.500 woorden, `ServiceJsonLd` + `BreadcrumbJsonLd` + `FaqJsonLd` (allemaal al beschikbaar als componenten).

---

## 6. Local SEO (het local pack / Google Maps)

Wegingen 2025/2026 (Whitespark/BrightLocal): GBP-profiel 32 %, reviews 20 % (stijgend), on-page 15 %, citations 6 %.

1. **NAP-fix (week 1, gratis):** Heersenkampweg 5 overal identiek — aannemer-nu.nl, bedrijvenregister.nl, telefoonboek.nl aanschrijven/claimen; check ook KvK-doorvoer.
2. **Google Business Profile optimaliseren:** primaire categorie "Aannemer" (belangrijkste rankingfactor), 4–9 extra categorieën voor de labels (verbouwing, timmerbedrijf, kozijnenleverancier, prefab); beschrijving met Twente-plaatsnamen; openingstijden volledig; wekelijks een projectfoto/post.
3. **Reviewmotor (structureel):** ná elke oplevering actief om een Google-review vragen (streef: 2–3/maand, mét tekst) en **binnen 48 u reageren**. Consistente review-aanwas verslaat grote slapende profielen. Volgorde platformen: (1) Google, (2) Bouwnu.nl/Klantenvertellen (grootste geverifieerde bouwreviewplatform), (3) Trustoo als bijvangst.
4. **Citations kernset:** Apple Maps, **Bing Places (voedt Microsoft Copilot!)**, detelefoongids.nl, Cylex, Opendi, LinkedIn-bedrijfspagina, Facebook.
5. **Werkspot/Trustoo:** profiel wél aanmaken (ze ranken zelf op pagina 1 en zijn review-/citationbron), maar **geen budget in betaalde leads** (€10–40/lead zonder blijvende opbouw) — dat budget rendeert beter in eigen content.
6. **Reviews op de site tonen** (score + 2–3 quotes op stadspagina's) — de norm bij alle winnende concurrenten.

---

## 7. GEO — vindbaarheid in AI-zoekmachines

AI Overviews zijn sinds mei 2025 live in NL; kostenvragen zijn dé bouwcategorie met AI-antwoorden. 76 % van AI-citaties komt van pagina's die al top-10 staan → klassieke SEO blijft de basis, plus:

1. **Kostengidsen met jaartal** ("Wat kost een aanbouw in 2026?") met m²-tabellen en rekenvoorbeelden — het aantoonbaar geciteerde format (Heidstra, Keesbouw ranken er landelijk mee).
2. **FAQPage-schema overal** (al beschikbaar als component) — AI neemt vraag-antwoordblokken letterlijk over.
3. **Eén "citeerbare alinea" per dienstpagina:** een feitelijke, zelfstandige zin die de kernvraag beantwoordt ("Een aanbouw in Twente kost in 2026 gemiddeld €X–Y per m², afhankelijk van …").
4. **LocalBusiness-schema met areaServed** voor alle Twente-plaatsen (deels aanwezig, uitbreiden bij stadspagina's).
5. **Kwartaal-updates** van kostengidsen (datum tonen) — AI citeert aantoonbaar vaker vers bijgewerkte pagina's.
6. **LinkedIn-bedrijfspagina actief voor Afbouwstudio** — meest geciteerde bron bij professionele/B2B-query's in ChatGPT.
7. Technisch is de site al AI-klaar (alles server-gerenderd, schema's, NAP machine-leesbaar — uit de audit van juli 2026).

---

## 8. Autoriteit en linkbuilding

1. **BouwGarant-lidmaatschap overwegen** — consumenten zoeken er specifiek op; levert vermelding + vertrouwenssignaal (norm bij winnende concurrenten).
2. **Partnernetwerk activeren:** wederzijdse vermeldingen met de bestaande partners (BMN, Gevelaar, Dukato, Zebrano Studio, De Kozijnstudio, Meuleman) — echte zakelijke relaties, dus natuurlijke links.
3. **Cross-linking binnen het merk-ecosysteem:** mtbbouw.com ↔ dekozijnstudio.nl (bestaat al, uitbouwen met contextuele links vanuit content).
4. **Lokale PR:** projectverhalen aanbieden aan Tubantia/regiobladen en De Broodbode-achtige klanten om over de samenwerking te posten (merkvermeldingen wegen mee in AI-aanbevelingen).
5. **Leerbedrijf-hoek:** SBB-erkenning + samenwerking met ROC van Twente is linkwaardige content ("jong talent in de bouw").

---

## 9. Roadmap

### Fase 0 — Randvoorwaarden (nu)
- [ ] Nieuwe site live op mtbbouw.com (redirect-map staat klaar)
- [ ] NAP-fix in alle directories
- [ ] GBP optimaliseren + reviewmotor starten
- [ ] Bing Places + Apple Maps + LinkedIn-bedrijfspagina
- [ ] afbouwstudio.nl registreren/verwerven (geparkeerd)

### Fase 1 — Quick wins (maand 1–2)
- [ ] `/aannemer-twente` (zwakste concurrentie) + `/aannemer-enschede` + `/bouwbedrijf-enschede`
- [ ] `/afbouwstudio/kantoor-verbouwen` (+ Enschede/Twente-targeting) — het lege segment
- [ ] Kennisbank: "Wat kost een aanbouw in 2026?" + "Wat kost een kantoorverbouwing per m²?"
- [ ] /afbouwstudio H1/title op "kantoorafbouw"; /verbouwing her-targeten van "Overijssel" naar "Enschede & Twente"

### Fase 2 — Uitbouw (maand 3–5)
- [ ] `/verbouwen-enschede`, `/aanbouw-enschede`, `/aannemer-hengelo`, `/aannemer-almelo`
- [ ] Afbouwstudio-spokes: bedrijfspand, horeca (Broodbode-case), winkel, turnkey
- [ ] Kostengidsen: verbouwing, dakopbouw, prefab aanbouw
- [ ] Casco-huurder-gids + "bedrijfshal verbouwen tot kantoor"
- [ ] Elke projectpagina: stad in title/H1 (projectpagina's ranken zelfstandig)

### Fase 3 — Grote steden + verdieping (maand 6–9)
- [ ] `/afbouwstudio/kantoor-verbouwen-deventer`, `-apeldoorn`, `-zwolle`
- [ ] Metal stud- en systeemplafond-productpagina's
- [ ] Verduurzamingscluster: `/verduurzamen-enschede` + ISDE-artikel (bedragen CMS-driven + datum + RVO-link)
- [ ] Kleine kernen: Oldenzaal, Borne, Haaksbergen, Losser
- [ ] Kwartaal-refresh van alle kostengidsen

### Doorlopend
- 2 kennisbankartikelen per maand (afwisselend pijler A/B)
- 2–3 Google-reviews per maand vragen + beantwoorden
- 1 nieuw projectverhaal per maand met stad in de titel
- Wekelijkse GBP-post

## 10. Meetplan & KPI's

| KPI | Nu | 6 maanden | 12 maanden |
|---|---|---|---|
| Top-10 posities op doel-query's (GSC) | 0 waargenomen | 8–12 (vooral Twente-/zakelijke query's) | 20+ |
| Organische sessies/maand | nulmeting bij livegang | +100 % t.o.v. nulmeting | ×3–4 |
| Google-reviews (aantal / score) | — | 15+ / ≥4,7 | 30+ / ≥4,7 |
| Offerte-aanvragen uit organisch | nulmeting | meetbaar per pagina (GA4-events) | belangrijkste kanaal naast referral |
| AI-zichtbaarheid | — | steekproef: merk genoemd bij "aannemer Enschede"-vragen in ChatGPT/AIO | citaties uit kostengidsen |

Inrichten bij livegang: Google Search Console + GA4 met events op offerteformulier/telefoonkliks/WhatsApp; maandelijkse GSC-review (welke query's/pagina's groeien → daar content verdiepen).

---

## Bijlage — onderzochte bronnen
SERP-analyses juli 2026 op 30+ NL-query's; concurrentie-deep-dives: Renova Twente Bouw, Holtkamp, Novostructo, Kleinbouw Twente, Huiskes, Vakbouw, EXTRA Bouwen, MMT Bouw (zakelijk); modellen: Afbouwhuys (sectorpagina's), ECG Projecten (zakelijke stadspagina's), Haafkes (stadspagina's buiten vestigingsplaats), Prefabmaat/De Prefabriek (prefab-kostencontent); local SEO: Whitespark/BrightLocal Local Search Ranking Factors, NL-gidsen 2026; AI: AI Overviews NL-analyses, GEO-onderzoek naar ChatGPT-bronkeuze.
