/**
 * Centrale bedrijfsfeiten en vaste formuleringen voor terugkerende afspraken.
 *
 * Contactgegevens (adres, telefoon, KvK) staan in lib/site.ts. Dit bestand
 * gaat over wat we beloven: garantie, offerte, meerwerk en planning. Gebruik
 * deze teksten in plaats van eigen varianten, zodat de site overal hetzelfde
 * zegt. Status, vindplaatsen en open vragen: docs/feitenlijst.md.
 *
 * Bron van de bevestigde teksten: de algemene voorwaarden van MTB Bouw
 * (versie juli 2025), artikel 2, 4, 5 en 9. Pas niets aan zonder akkoord van
 * Robbert of Mathijs; een webtekst is geen bewijs van een bedrijfsafspraak.
 */
export const facts = {
  garantie: {
    /** Algemene voorwaarden, art. 9.1 */
    uitvoering:
      "Op de uitvoering geven we 1 jaar garantie, tenzij we in de overeenkomst iets anders afspreken.",
    /** Algemene voorwaarden, art. 9.2 */
    materialen: "Op materialen geldt de garantie van de fabrikant of leverancier.",
    /** Een commerciële garantie verkort de wettelijke rechten niet. */
    wettelijk: "Je wettelijke rechten blijven daarnaast gewoon gelden.",
    /** Korte vorm voor kaarten en opsommingen. */
    kort: "Garantie volgens de overeenkomst",
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
