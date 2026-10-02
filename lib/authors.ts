/**
 * Auteurs van kennisbankartikelen. Gebaseerd op het team in lib/data.ts, zodat
 * naam, rol en foto op de artikelpagina gelijk lopen met de Over ons-pagina.
 *
 * In de frontmatter: `author: mathijs` of `author: robbert`. Zonder auteur
 * staat MTB Bouw zelf als auteur (Organization) in de structured data.
 *
 * Pure data (geen content-imports): ook velite.config.ts gebruikt dit bestand.
 */
import { team } from "./data";

type TeamName = (typeof team)[number]["name"];

function fromTeam(name: TeamName) {
  const member = team.find((m) => m.name === name);
  if (!member) throw new Error(`Teamlid ${name} ontbreekt in lib/data.ts`);
  return member;
}

const mathijs = fromTeam("Mathijs");
const robbert = fromTeam("Robbert");

export const AUTHORS = [
  {
    slug: "mathijs",
    name: mathijs.name,
    role: mathijs.role,
    image: mathijs.image,
    bio: mathijs.text,
  },
  {
    slug: "robbert",
    name: robbert.name,
    role: robbert.role,
    image: robbert.image,
    bio: robbert.text,
  },
] as const;

export type Author = (typeof AUTHORS)[number];
export type AuthorSlug = Author["slug"];

export const AUTHOR_SLUGS = AUTHORS.map((a) => a.slug) as [
  AuthorSlug,
  ...AuthorSlug[],
];

export function getAuthor(slug: string | undefined): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}
