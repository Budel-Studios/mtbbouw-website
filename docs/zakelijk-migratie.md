# Van Afbouwstudio naar MTB Bouw Zakelijk

> Uitgevoerd 1 november 2026, op basis van de opdracht "zakelijke website terugbrengen naar drie sterke pagina's". Bouwt voort op de feitenlijst (`docs/feitenlijst.md`) en de vaste formuleringen in `lib/facts.ts`.

## 1. Wat er veranderd is

- Drie zakelijke pagina's: `/zakelijk` (overzicht en keuzehulp), `/zakelijk/horeca-verbouwen` en `/zakelijk/bedrijfspand-verbouwen`.
- De dertien `/afbouwstudio`-pagina's zijn weg. Elke oude URL stuurt permanent door (308) naar de passende nieuwe pagina.
- Het label Afbouwstudio is uit navigatie, knoppen, schema en dienstteksten gehaald. Nieuw label: MTB Bouw Zakelijk, menulabel Zakelijk.
- Menu "Wat we bouwen": Zakelijk met twee subitems (Horeca afbouw & verbouwen, Bedrijfspanden verbouwen), op desktop en mobiel.
- Footer, home, diensten, regiopagina's, projecten en artikelen linken direct naar de nieuwe URL's, zonder tussenstap via een redirect.
- De intake opent vanaf de zakelijke pagina's met "Zakelijk: horeca, kantoor of bedrijfspand" aangevinkt en situatie "Bedrijfspand" ingevuld. Geen apart formulier.

## 2. Redirectoverzicht

Alle redirects staan expliciet in `next.config.ts`. Geen wildcard: een onbekende `/afbouwstudio/...`-URL geeft een 404. Laat ze minimaal een jaar staan, liefst blijvend.

| Oude URL | Nieuwe bestemming |
|---|---|
| /afbouwstudio | /zakelijk |
| /afbouwstudio/horeca-verbouwen | /zakelijk/horeca-verbouwen |
| /afbouwstudio/bedrijfspand-verbouwen | /zakelijk/bedrijfspand-verbouwen |
| /afbouwstudio/kantoor-verbouwen | /zakelijk/bedrijfspand-verbouwen |
| /afbouwstudio/winkel-verbouwen | /zakelijk/bedrijfspand-verbouwen |
| /afbouwstudio/metal-stud-wanden | /zakelijk/bedrijfspand-verbouwen |
| /afbouwstudio/systeemplafonds | /zakelijk/bedrijfspand-verbouwen |
| /afbouwstudio/kantoor-verbouwen-enschede | /zakelijk/bedrijfspand-verbouwen |
| /afbouwstudio/kantoor-verbouwen-hengelo | /zakelijk/bedrijfspand-verbouwen |
| /afbouwstudio/kantoor-verbouwen-almelo | /zakelijk/bedrijfspand-verbouwen |
| /afbouwstudio/kantoor-verbouwen-deventer | /zakelijk/bedrijfspand-verbouwen |
| /afbouwstudio/kantoor-verbouwen-apeldoorn | /zakelijk/bedrijfspand-verbouwen |
| /afbouwstudio/kantoor-verbouwen-zwolle | /zakelijk/bedrijfspand-verbouwen |

Aanvullend gevonden en aangepast, zodat er geen ketens ontstaan:

| Oude URL | Was | Nu |
|---|---|---|
| /voor-bedrijven | /afbouwstudio | /zakelijk |
| /voor-bedrijven-twente | /afbouwstudio | /zakelijk |
| /kennisbank/kantoor-verbouwen-kosten-2026 | /afbouwstudio/kantoor-verbouwen | /zakelijk/bedrijfspand-verbouwen |

Inventaris: in de code bestonden precies deze dertien afbouwroutes; er waren geen andere. Search Console-data was niet beschikbaar, dus belangrijke zoekvragen per oude URL zijn niet meegewogen. De oude pagina's buiten Twente (Deventer, Apeldoorn, Zwolle) gaan naar de bedrijfspandenpagina, die vermeldt dat opdrachten buiten Twente bespreekbaar zijn. Dat moet wel kloppen: zie hoofdstuk 5.

## 3. Overgenomen inhoud

- `/zakelijk`: de twee routes, wat we organiseren (opname, uitvoering, partners, oplevering en nazorg), de twee Broodbode-projecten met plaats, soort werk en duur, het projectverloop in vier stappen, het werkgebied en de vragen van ondernemers.
- Horeca: casco versus bestaande zaak, zes onderdelen van gastgedeelte tot achterkeuken, beide Broodbode-cases (beginsituatie, vraag, ons werk, partners, uitdaging, resultaat) uit de projectpagina's, een tijdens/na-reeks uit Zwolle, plannen naar een opening met een illustratief faseringsoverzicht, kostenfactoren zonder bedragen en zes vragen.
- Bedrijfspanden: kantoor (inclusief de casco-afbouw van de oude kantoorpagina), winkel en showroom, bedrijfsruimte en kantoor in een hal, wanden (metal stud, met illustratie) en plafonds (systeemplafond en akoestiek), aanpak en fasering met "jij beslist" per fase, een verzonnen voorbeeld van een opname (zo gelabeld), kostenfactoren, het Apeldoorn-project als bewijs en zes vragen.

## 4. Bewust weggelaten

Onbevestigde claims van de oude pagina's zijn niet overgenomen:

- Nacht- en weekendwerk als standaard ("we werken regelmatig 's nachts").
- Meerdere vestigingen tegelijk uitvoeren.
- "We reageren binnen één werkdag" en "wekelijkse voortgangsupdate".
- Samenwerking met retail-architecten en formulebeheerders.
- Onderhoud in contractvorm voor vastgoedbeheerders.
- "Klaar vóór je openingsdatum", "open op de datum die jij belooft", "een planning die staat".
- "Een complete kantoorindeling staat vaak binnen enkele dagen".
- Deventer, Apeldoorn en Zwolle als vast werkgebied. Nu: bespreekbaar.
- De lijst "Partners & opdrachtgevers" (Dukato Hypotheken, BMN, Gevelaar, VvE Beheer Twente, Kuality) en de sectorenlijst (kapsalons, sportscholen, praktijken).
- De eigen inmeet-app als klantomgeving ("direct deelbaar met jou als opdrachtgever").
- Prijzen per m², garantietermijnen, offerte- en intaketermijnen (al eerder besloten).

Afwijking van de opdracht: de bedrijfspandenpagina zou naar het kostenartikel `/kennisbank/kantoor-verbouwen-kosten-2026` linken. Dat artikel is op 1 november 2026 offline gehaald (geen m²-prijzen voor panden). De pagina legt nu zelf de kostenfactoren en de opbouw van de offerte uit.

Een voor/na-slider is niet gebouwd: er zijn geen voor-foto's van dezelfde plek. In plaats daarvan staat er een tijdens/na-reeks van de wandkast in Zwolle, met een eerlijk bijschrift.

## 5. Nog te bevestigen

1. Zakelijke opdrachten buiten Twente: blijven die bespreekbaar? De redirects van Deventer, Apeldoorn en Zwolle rekenen erop.
2. Nacht- en weekendwerk: is dat op aanvraag mogelijk? Dan kan het terug in de tekst.
3. Meerdere locaties tegelijk: mogelijk of niet?
4. De Broodbode: wie ontwierp de interieurs en wie leverde de keukenapparatuur? Dat maakt de cases sterker.
5. Zwolle: welke foto toont het zwarte akoestische plafond? Die kan dan bij het onderdeel plafonds.
6. Zwolle-galerij: de alt-teksten van foto 02 (tijdens, vakman bij de wandkast) en 04 (gastruimte in gebruik) waren verwisseld en zijn gecorrigeerd. Klopt dat?
7. Project plafonds 80 appartementen: opdrachtgever, locatie en looptijd ontbreken nog, en de coverfoto toont het logo van De Broodbode. Daarom staat dit project niet als bewijs op de nieuwe pagina's.
8. Een kantoor-, winkel- of showroomproject: zodra er een is, toevoegen aan de bedrijfspandenpagina.
9. Vergunningbronnen (Ondernemersplein, Omgevingsloket) jaarlijks nalopen. Gecontroleerd op 1 november 2026.
10. AV art. 9.1 gelijktrekken met de garantietekst (staat ook in de feitenlijst).

## 6. Testverslag

- `velite`, `tsc` en `eslint` zonder fouten. Een lokale `next build` faalt alleen op het ophalen van Google Fonts (geen netwerk hier); de Vercel-preview bouwt volledig.
- De drie pagina's geven 200, met een unieke title en description, één H1, een canonical naar zichzelf en `index, follow`.
- Structured data: de bestaande GeneralContractor met vaste `@id`, BreadcrumbList (Home → Zakelijk → dienst), CollectionPage met een ItemList van de twee diensten op `/zakelijk`, WebPage en Service met dezelfde provider-`@id` op de dienstpagina's, en FAQPage die overeenkomt met de zichtbare vragen. Geen reviews, ratings, prijzen of aanbiedingen.
- Redirects: alle dertien plus de drie aanvullende gaan in één stap (308) naar een pagina die 200 geeft. Geen ketens of lussen; een onbekende afbouw-URL geeft 404.
- Sitemap: de drie nieuwe URL's staan erin, geen afbouwroutes meer. Alle 63 URL's uit de sitemap gescand: geen links meer naar `/afbouwstudio` en het label Afbouwstudio komt niet meer voor.
- De 39 interne links op de drie pagina's geven allemaal 200.
- Claims-scan op de drie pagina's: geen vaste prijs, m²-prijzen voor panden, garantietermijnen, offertetermijnen of nacht- en weekendwerk.
- Mobiel (390 px): geen horizontale scroll, inhoud in logische volgorde. De intake opent met Zakelijk aangevinkt. Het faseringsoverzicht werkt met pijltjestoetsen, Home en End. Met "reduced motion" staan de lijnen stil. Het menu toont de twee subitems.
- Niet getest: Core Web Vitals (alleen in de ontwikkelomgeving gekeken; meet na livegang met PageSpeed Insights en Search Console) en het daadwerkelijk versturen van een intake (geen afgesproken testprocedure).

## 7. Meetnotitie

- De intake meldt twee gebeurtenissen aan Vercel Web Analytics: `intake_gestart` en `aanvraag_ontvangen`, met alleen het paginapad. Geen namen, contactgegevens of berichttekst. Let op: custom events werken volgens Vercel alleen op het Pro- en Enterprise-plan. Op een ander plan blijft de regel "Aangevraagd via" in de interne mail de bron voor aanvragen per pagina.
- Telefoon-, WhatsApp- en caseklikken worden nog niet gemeten.
- Nulmeting vóór livegang: exporteer in Search Console de prestaties van de `/afbouwstudio`-URL's over de laatste drie maanden, en tel de zakelijke aanvragen van de afgelopen maanden.
- Na livegang: dien de sitemap opnieuw in en vraag indexering aan voor de drie nieuwe URL's.
- Controle na 2, 4 en 8 weken: indexering van de nieuwe URL's, fouten en 404's, redirects in het rapport Pagina's, organische landingspagina's en het aantal passende zakelijke aanvragen.
- Verschuivingen in zoekposities zijn de eerste weken normaal. Correcte redirects verkleinen het risico, maar garanderen geen behoud van posities.
