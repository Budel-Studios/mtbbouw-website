import type { ServiceData } from "./types";
import { sharedPillars } from "./types";

export const renovatieData: ServiceData = {
  slug: "/verbouwing",
  seo: {
    title: "Verbouwing in Enschede & Twente | MTB Bouw — vaste prijs",
    description:
      "Verbouwen of renoveren in Enschede en Twente? MTB Bouw begeleidt je verbouwing van eerste idee tot oplevering. Eén team, eerlijke prijs, geen gedoe.",
    canonical: "/verbouwing",
    focusKeyword: "verbouwing Enschede",
  },
  hero: {
    eyebrow: "Voor particulieren",
    h1: "Renovatie in Enschede & Twente — van casco tot sleutelklaar.",
    subtitle:
      "Een net gekocht jaren-30 huis dat schreeuwt om aandacht? Een gedateerde keuken, badkamer of een hele woning? Wij verbouwen het — met één plan, één team en één prijs. Zo wordt jouw huis van wie het al is.",
    primaryCta: { label: "Plan een intake", href: "/contact" },
    secondaryCta: { label: "Bekijk onze case", href: "#case" },
    heroImageAlt:
      "Volledig gerenoveerd jaren-30 woonhuis in Enschede door MTB Bouw met behoud karakter",
    stats: [
      { value: "75+", label: "Renovaties uitgevoerd" },
      { value: "Jaren-30", label: "Karakter behouden" },
      { value: "Duurzaam", label: "BENG-renovatie mogelijk" },
    ],
  },
  subServices: {
    eyebrow: "01 — Wat we voor jou doen",
    h2: "Vier soorten renovaties die we het meest doen",
    cards: [
      { sketchIcon: "total-renovation", title: "Totaalrenovatie",
        desc: "Van casco tot sleutelklaar. Volledig huis op de schop — keuken, badkamer, vloeren, kozijnen, installaties. Eén team, één plan." },
      { sketchIcon: "bathroom", title: "Badkamer renovatie",
        desc: "Een nieuwe badkamer in 3–4 weken. Tegelwerk, sanitair, vloerverwarming, designradiator — wij regelen alles." },
      { sketchIcon: "kitchen", title: "Keuken renovatie",
        desc: "Een nieuwe keuken met aandacht voor leidingen, elektra, ventilatie en afwerking. Wij plaatsen ook keukens van IKEA, Bruynzeel en Mandemakers." },
      { sketchIcon: "sustainability", title: "Renoveren én verduurzamen",
        desc: "Combineer renovatie met isolatie, warmtepomp en zonnepanelen. Subsidies regelen we, je woont straks comfortabeler én goedkoper." },
    ],
  },
  werkwijze: {
    eyebrow: "02 — Werkwijze",
    h2: "Élke ruimte vastgelegd. Geen renovatie-verrassingen.",
    introText:
      "Een renovatie zit vol verborgen verrassingen — verkeerde fundering, asbest, slechte isolatie. Met onze app brengen we elke wand, vloer en plafond vooraf in kaart. Foto's, maten, materialen — vastgelegd en gedeeld. Zo zie jij wat we voorstellen en weten wij wat we aantreffen.",
  },
  caseStudy: {
    eyebrow: "03 — Case",
    h2: "Een jaren-30 woning gemoderniseerd zonder zijn karakter te verliezen",
    location: "Oldenzaal — Vrijstaande jaren-30 woning",
    duration: "16 weken",
    delivered: "Winter 2025",
    story:
      "Het echtpaar wilde de charme van hun jaren-30 woning behouden, maar dan zonder enkelglas, vochtige kruipruimte en gedateerd interieur. Wij isoleerden de vloer en het dak, plaatsten nieuwe houten kozijnen in originele stijl, vernieuwden de hele installatie inclusief warmtepomp, en bouwden een nieuwe badkamer en keuken. De woonkamer kreeg zijn originele schoorsteen terug — als statement.",
    didList: [
      "Sloop binnenmuren + nieuwe indeling",
      "Vloerisolatie + dakisolatie",
      "Houten kozijnen op maat (originele stijl)",
      "Nieuwe elektra en loodvrij sanitair",
      "Warmtepomp + vloerverwarming",
      "Compleet nieuwe badkamer en keuken",
      "Stuc, vloeren, schilderwerk",
      "Originele schoorsteen hersteld",
    ],
    quote:
      "Het voelt nog steeds als ons huis — maar dan beter geïsoleerd, mooier én warmer. MTB Bouw begreep wat we wilden behouden en wat moest weg.",
    quoteAuthor: "Familie V.D. — Oldenzaal",
  },
  sketchBreak: { bigQuote: "Eerst kijken wat er is. Dan pas slopen." },
  typeWoningen: {
    eyebrow: "04 — Voor welke woningen",
    h2: "Renovatie-ervaring met élk type woning in Twente",
    pills: ["Jaren-30 woning","Jaren-50/60","Jaren-70/80","Monument","Recente bouw","Boerderijwoning","Vrijstaand","Twee-onder-één-kap"],
  },
  waarom: {
    eyebrow: "05 — Waarom MTB Bouw",
    h2: "Geen bouwsoap. Een team dat doet wat het zegt.",
    pillars: sharedPillars,
  },
  faq: {
    eyebrow: "06 — Veelgesteld",
    h2: "De 5 vragen die we bij elke renovatie krijgen",
    items: [
      { q: "Wat kost een renovatie in Twente?",
        a: "Een totaalrenovatie kost gemiddeld €1.200–€2.000 per m². Voor een woning van 130 m² praat je dus over €160.000–€260.000. Een badkamer alleen: €15.000–€35.000. Wij maken altijd een transparante offerte." },
      { q: "Hoe lang duurt een renovatie?",
        a: "Een badkamer renoveren: 3–4 weken. Een keuken: 2–3 weken. Een totaalrenovatie: 12–20 weken. Wij plannen alles strak en delen wekelijks de voortgang." },
      { q: "Kan ik in mijn huis blijven wonen tijdens de renovatie?",
        a: "Bij een badkamer- of keukenrenovatie meestal wel. Bij een totaalrenovatie raden we aan om tijdelijk elders te verblijven (4–8 weken intensief werk). We bespreken de mogelijkheden vooraf." },
      { q: "Doen jullie ook monumentale renovaties?",
        a: "Ja — wij hebben ervaring met monumenten in Enschede, Oldenzaal en omgeving. We werken samen met de gemeente en monumentencommissie zodat je vergunning rond komt." },
      { q: "Krijg ik een vaste prijs of richtprijs?",
        a: "Wij werken met vaste aanneemsommen waar het kan. Bij oudere woningen reserveren we een transparante post voor onvoorzien (asbest, fundering) — vooraf besproken en onderbouwd." },
    ],
    fullFaqLink: "/veelgestelde-vragen",
  },
  cta: {
    h2: "Klaar om jouw huis te transformeren?",
    subtitle:
      "Plan een vrijblijvende intake. We komen langs, leggen alles vast met onze app en sturen binnen 5 werkdagen een vaste offerte.",
    primaryCta: { label: "Plan intake", href: "/contact" },
    secondaryCta: { label: "Bel direct: 053 206 50 71", href: "tel:+31532065071" },
    note: "Of mail naar info@mtbbouw.com — we reageren binnen één werkdag.",
  },
  related: [
    { label: "Aanbouw & uitbouw", href: "/aanbouw-uitbouw" },
    { label: "Kozijnen", href: "/kozijnen" },
    { label: "Alle veelgestelde vragen", href: "/veelgestelde-vragen" },
  ],
};
