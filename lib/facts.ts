/**
 * Centrale bedrijfsfeiten en vaste formuleringen voor terugkerende afspraken.
 *
 * Contactgegevens (adres, telefoon, KvK) staan in lib/site.ts. Dit bestand
 * gaat over wat we beloven: garantie, offerte, meerwerk en planning. Gebruik
 * deze teksten in plaats van eigen varianten, zodat de site overal hetzelfde
 * zegt. Status, vindplaatsen en open vragen: docs/feitenlijst.md.
 *
 * Bron: de algemene voorwaarden van MTB Bouw (versie juli 2025), artikel 2,
 * 4 en 5, en de besluiten van Robbert van 1 november 2026 over garantie en
 * nazorg. Pas niets aan zonder akkoord van Robbert of Mathijs; een webtekst is
 * geen bewijs van een bedrijfsafspraak.
 */
export const facts = {
  garantie: {
    /** Besluit Robbert, 1 nov 2026. Let op: de algemene voorwaarden (art. 9.1) noemen nog 1 jaar. */
    uitvoering:
      "Op ons werk geven we garantie volgens de richtlijnen in de bouw. De afspraken voor jouw project leggen we vast in de offerte en de overeenkomst.",
    /** Algemene voorwaarden, art. 9.2 */
    materialen: "Op materialen geldt de garantie van de fabrikant of leverancier.",
    /** Een commerciële garantie verkort de wettelijke rechten niet. */
    wettelijk: "Je wettelijke rechten blijven daarnaast gewoon gelden.",
    /** Korte vorm voor kaarten en opsommingen. */
    kort: "Garantie volgens de richtlijnen in de bouw",
  },
  nazorg: {
    /** Besluit Robbert, 1 nov 2026 */
    nabellen:
      "Na de oplevering bellen we je altijd na om te horen of alles naar wens is, of dat je nog ergens tegenaan loopt.",
  },
  offerte: {
    /** Redactionele standaard uit de SEO/GEO-analyse van 1 november 2026. */
    standaard:
      "Je ontvangt een gespecificeerde offerte voor de afgesproken werkzaamheden. Stelposten, uitsluitingen en onzekerheden maken we inzichtelijk. Eventuele wijzigingen in werkzaamheden, prijs en planning bespreken we vooraf.",
    kort: "Gespecificeerde offerte na een intake op locatie",
    /** Algemene voorwaarden, art. 4.4 */
    meerwerk: "Meerwerk alleen na jouw akkoord",
    /** Algemene voorwaarden, art. 2.2 */
    geldigheid: "Een offerte is 15 kalenderdagen geldig, tenzij anders vermeld.",
    /** Algemene voorwaarden, art. 4.1 */
    btw: "Prijzen in offertes zijn exclusief btw, tenzij anders vermeld.",
  },
  planning: {
    /** Algemene voorwaarden, art. 5.1 */
    termijnen:
      "Termijnen in de planning zijn een inschatting, tenzij we schriftelijk een vaste einddatum afspreken.",
  },
} as const;

/** Volledige garantie-uitleg in één alinea. */
export const garantieTekst = `${facts.garantie.uitvoering} ${facts.garantie.materialen} ${facts.garantie.wettelijk}`;
