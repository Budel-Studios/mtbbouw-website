# Local SEO-actieplan — Google Business Profile & adrescorrectie

> Opgesteld 4 juli 2026. Dit zijn de acties die **buiten de website** liggen en die alleen Robbe (of iemand met toegang tot de accounts) kan uitvoeren. De website-kant is al gereed: correcte NAP-gegevens in footer/contact/JSON-LD, LocalBusiness-schema, en de nieuwe stadspagina's.

## De juiste bedrijfsgegevens (overal exact zó gebruiken)

```
MTB Bouw B.V.
Heersenkampweg 5
7546 PG Enschede
053 206 50 71
info@mtbbouw.com
https://mtbbouw.com
```

**Let op:** overal identiek spellen — dus "MTB Bouw B.V." (niet "MTB Bouw BV" of "MTBbouw"), en altijd Heersenkampweg 5. Zoekmachines zien afwijkende vermeldingen als twijfel over je identiteit.

---

## 1. Google Business Profile (het bestaande profiel)

Inloggen op https://business.google.com met het account waarmee het profiel is aangemaakt, en dan:

1. **Adres controleren/wijzigen** → Heersenkampweg 5, 7546 PG Enschede. (Google stuurt bij een adreswijziging soms een verificatie-briefkaart — inplannen.)
2. **Website koppelen** → website-veld op `https://mtbbouw.com` zetten (na livegang van de nieuwe site). Tot die tijd blijft de oude URL werken, maar wissel direct bij livegang.
3. **Primaire categorie** → "Aannemer" (dit is de zwaarste rankingfactor in Google Maps). 
4. **Extra categorieën** (max. 9) → Bouwbedrijf, Verbouwingsbedrijf/Renovatiebedrijf, Timmerbedrijf, Kozijnenleverancier, (evt. Prefab-woningbouwer als beschikbaar).
5. **Openingstijden** → Ma–Vr 08:00–17:00 volledig invullen ("open op moment van zoeken" is rankingfactor 5).
6. **Beschrijving** → korte tekst met de vier labels + plaatsnamen (Enschede, Hengelo, Almelo, Twente). Voorbeeld: "MTB Bouw is een aannemersbedrijf uit Enschede met vier specialismen: Wonen & Verbouwen, Afbouwstudio (zakelijke afbouw), Kozijnen en Prefab Bouwen. Werkzaam in heel Twente."
7. **Diensten toevoegen** → per label de diensten aanmaken (verbouwing, aanbouw, renovatie, kantoorafbouw, kozijnen, prefab).
8. **Foto's** → wekelijks één projectfoto of post; profiel- en omslagfoto instellen (logo + teamfoto).
9. **Koppeling Search Console** → op https://search.google.com/search-console het domein mtbbouw.com toevoegen (DNS-verificatie via Vercel) — nodig voor het meetplan uit de strategie.
10. **Reviewlink genereren** (knop "Vraag om reviews") en die standaard na elke oplevering appen naar de klant. Doel: 2–3 reviews per maand, elk beantwoorden binnen 48 uur.

## 2. Adrescorrectie in directories (het Herikebrink-probleem)

Deze vermeldingen tonen het **oude adres Herikebrink 37** en moeten worden gecorrigeerd:

| Directory | Actie |
|---|---|
| **telefoonboek.nl** | Zoek "MTB Bouw Enschede" → op de vermelding staat een link "Gegevens wijzigen" (of via detelefoongids.nl-formulier). Claim de vermelding met info@mtbbouw.com en corrigeer het adres. |
| **bedrijvenregister.nl** | Vermelding opzoeken → "Wijziging doorgeven"-formulier invullen met de juiste NAP. |
| **aannemer-nu.nl** | Via "Bedrijf aanmelden"/Contact in de footer een correctie doorgeven (MTB staat mogelijk op een vervolgpagina van de Enschede-lijst). |
| **KvK** | Controleer of het KvK-adres al Heersenkampweg 5 is — veel directories nemen KvK-data automatisch over; een correcte KvK-registratie lost toekomstige kopieën aan de bron op. |

## 3. Nieuwe vermeldingen aanmaken (citations-kernset)

Met exact dezelfde NAP-gegevens, in deze volgorde:

1. **Bing Places** (bingplaces.com) — voedt óók Microsoft Copilot/ChatGPT-antwoorden. Je kunt het Google-profiel importeren.
2. **Apple Maps** (mapsconnect.apple.com / Apple Business Connect).
3. **LinkedIn-bedrijfspagina** — belangrijk voor de zakelijke tak (Afbouwstudio): AI-assistenten citeren LinkedIn vaak bij B2B-vragen.
4. **Facebook-bedrijfspagina** (al aanwezig? gegevens gelijktrekken).
5. **Trustoo + Werkspot**: gratis profiel aanmaken voor de vermelding en reviews — **geen betaalde leads afnemen** (zie strategie §6).
6. **Bouwnu.nl** (Klantenvertellen) — geverifieerde bouwreviews; na de eerste paar Google-reviews hier ook om reviews vragen.
7. Overwegen: **BouwGarant-lidmaatschap** (vermelding + keurmerk dat consumenten actief zoeken).

## 4. Wat de website al doet (geen actie nodig)

- Correct adres in footer, contactpagina en LocalBusiness/GeneralContractor-schema (machine-leesbaar voor Google én AI).
- Vier nieuwe landingspagina's live in de code: `/aannemer-enschede`, `/bouwbedrijf-enschede`, `/aannemer-twente`, `/afbouwstudio/kantoor-verbouwen` — inclusief FAQ-schema en interne links.
- Redirect-map van alle oude WordPress-URL's.

## 5. Volgorde van uitvoeren

1. KvK-adres checken (bron van veel kopieën)
2. GBP: adres + website + categorieën + openingstijden (30 min)
3. Reviewlink genereren en eerste 3–5 tevreden klanten appen
4. Directory-correcties (telefoonboek, bedrijvenregister, aannemer-nu)
5. Bing Places + Apple Maps + LinkedIn aanmaken
6. Search Console koppelen bij livegang nieuwe site
