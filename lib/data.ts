/**
 * Structurele paginacontent (geen blog/CMS-content). Teksten overgenomen van
 * de huidige mtbbouw.com. Later eventueel naar een CMS te verplaatsen.
 */

export const pillars = [
  {
    title: "Duidelijkheid",
    text: "Heldere offertes, realistische planningen en updates van voortraject tot oplevering.",
  },
  {
    title: "Persoonlijk",
    text: "Geen anonieme aannemer, maar een vast team met korte lijnen en één aanspreekpunt.",
  },
  {
    title: "Professioneel",
    text: "Of het nu gaat om een renovatie, uitbouw of totaalproject: wij begeleiden het hele traject. Eén team, één planning, één verhaal.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Kennismaking & advies",
    text: "Vrijblijvend in gesprek over jullie plan en wensen.",
  },
  {
    step: "02",
    title: "Plan & heldere offerte",
    text: "Een duidelijk voorstel met een eerlijke, vaste prijs.",
  },
  {
    step: "03",
    title: "Realistische planning",
    text: "We plannen samen en houden je op de hoogte.",
  },
  {
    step: "04",
    title: "Uitvoering",
    text: "Eén vast team voert het werk uit, met korte lijnen.",
  },
  {
    step: "05",
    title: "Oplevering & nazorg",
    text: "Netjes opgeleverd. En daarna blijven we bereikbaar.",
  },
] as const;

export const team = [
  {
    name: "Mathijs",
    role: "Projectleider",
    image: "/images/team/mathijs.webp",
    text: "Na jaren als uitvoerder bij Koopmans Bouw begon Mathijs voor zichzelf. Inmiddels leidt hij met een vast team grote verbouwingen en bouwprojecten.",
  },
  {
    name: "Niels",
    role: "Timmerman (ZZP)",
    image: "", // PLACEHOLDER: foto ontbreekt op huidige site
    text: "Niels komt uit de installatietechniek en weet precies hoe alles achter de muren werkt. Zijn technische inzicht komt dagelijks van pas.",
  },
  {
    name: "Rick",
    role: "Afbouw (ZZP — RN Afbouw)",
    image: "/images/team/rick.jpg",
    text: "Gespecialiseerd in houtwerk en een vertrouwd gezicht op de bouw. Leert bij ons steeds meer van de ruwbouwfase.",
  },
  {
    name: "Leroy",
    role: "Timmerman i.o.",
    image: "", // PLACEHOLDER: foto ontbreekt op huidige site
    text: "Met zijn 16 jaar onze stagiair die razendsnel uitgroeit tot vakman. Komt uit een echte bouwfamilie.",
  },
  {
    name: "Robbert",
    role: "Werkvoorbereiding",
    image: "/images/team/robbert.jpg",
    text: "Zorgt dat alles vóór en tijdens de bouw klopt: planning, materiaal en voorbereiding — zodat het op de bouw soepel loopt.",
  },
] as const;

export const partners = [
  "Zebrano Studio",
  "Dukato",
  "Gevelaar",
  "VvE Beheer Twente",
  "BMN Bouwmaterialen",
  "Meuleman Hoveniers",
  "Kuality",
] as const;
