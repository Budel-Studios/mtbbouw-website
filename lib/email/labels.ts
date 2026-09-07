/**
 * Vertaling van formulierwaarden naar leesbare labels.
 *
 * De offerte-drawer stuurt bij deze twee velden de option-`value` mee, niet het
 * label ("5k-15k" in plaats van "€5.000 – €15.000"). In een mail aan de klant
 * kan dat niet. We vertalen server-side, zodat het ook klopt als de payload
 * ergens onderweg is aangepast.
 */
export const PROPERTY_TYPE_LABELS: Record<string, string> = {
  rijtjeshuis: "Rijtjeshuis",
  "2-onder-1-kap": "2-onder-1-kap",
  vrijstaand: "Vrijstaand",
  appartement: "Appartement",
  bedrijfspand: "Bedrijfspand",
};

export const BUDGET_LABELS: Record<string, string> = {
  "no-idea": "Nog geen idee",
  "under-5k": "< €5.000",
  "5k-15k": "€5.000 – €15.000",
  "15k-35k": "€15.000 – €35.000",
  "35k-75k": "€35.000 – €75.000",
  "over-75k": "€75.000+",
};

/** Onbekende waarde? Toon 'm ongewijzigd — nooit een lege regel. */
export function label(map: Record<string, string>, value?: string): string {
  if (!value) return "";
  return map[value] ?? value;
}
