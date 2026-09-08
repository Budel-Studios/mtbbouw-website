/**
 * Plaatsen waarvoor een eigen aannemer-landingspagina bestaat.
 *
 * Eén bron voor de onderlinge verwijzingen: zo zijn de stadspagina's geen
 * doodlopende eindpunten meer en kan Google (en een bezoeker die net over
 * de gemeentegrens woont) doorklikken naar de juiste pagina.
 */
export type Place = {
  slug: string;
  /** Plaatsnaam zoals in lopende tekst. */
  name: string;
  /** Kernen die onder deze pagina vallen. */
  nearby: string;
};

export const places: Place[] = [
  { slug: "aannemer-enschede", name: "Enschede", nearby: "Glanerbrug, Boekelo en Lonneker" },
  { slug: "aannemer-oldenzaal", name: "Oldenzaal", nearby: "De Lutte en Rossum" },
  { slug: "aannemer-borne", name: "Borne", nearby: "Zenderen en Hertme" },
  { slug: "aannemer-haaksbergen", name: "Haaksbergen", nearby: "Buurse en Sint Isidorushoeve" },
  { slug: "aannemer-losser", name: "Losser", nearby: "Overdinkel, De Lutte en Beuningen" },
];

/** Alle plaatsen behalve de huidige — voor de "ook actief in"-sectie. */
export function otherPlaces(currentSlug: string): Place[] {
  return places.filter((p) => p.slug !== currentSlug);
}
