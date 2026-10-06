import "server-only";
import { kennisbank } from "#site/content";
import {
  CATEGORIES,
  HUB_PATH,
  MIN_HUB_ARTICLES,
  SERIES,
  SUBCATEGORIES,
  kennisbankFilterHref,
  type AudienceSlug,
  type CategorySlug,
  type SubcategorySlug,
  type TaxonomyItem,
} from "@/lib/kennisbank-taxonomy";

/**
 * Leeslaag voor de kennisbank: welke artikelen staan live, welke hubpagina's
 * bestaan, wat hoort bij een serie, wat is gerelateerd. Alle pagina's halen
 * hun artikelen hier vandaan, zodat "gepubliceerd" overal hetzelfde betekent.
 */

export type Article = (typeof kennisbank)[number];
export type HubType = keyof typeof HUB_PATH;

/** Velden die een artikelkaart of -tegel nodig heeft (serialiseerbaar). */
export type ArticleCardData = {
  slug: string;
  permalink: string;
  title: string;
  description: string;
  category: string;
  subcategories: string[];
  audience: string[];
  date: string;
  readingTime: number;
  cover?: string;
  coverAlt?: string;
};

export function toCard(a: Article): ArticleCardData {
  return {
    slug: a.slug,
    permalink: a.permalink,
    title: a.title,
    description: a.description,
    category: a.category,
    subcategories: [...a.subcategories],
    audience: [...a.audience],
    date: a.date,
    readingTime: a.metadata.readingTime,
    cover: a.cover,
    coverAlt: a.coverAlt,
  };
}

/** Alle gepubliceerde artikelen, nieuwste eerst. */
export function publishedArticles(): Article[] {
  return kennisbank
    .filter((a) => !a.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPublishedArticle(slug: string): Article | undefined {
  return publishedArticles().find((a) => a.slug === slug);
}

/* ---------- Hubpagina's (onderwerp / bouwdeel) ----------------------- */

const HUB_ITEMS: Record<HubType, readonly TaxonomyItem[]> = {
  category: CATEGORIES,
  subcategory: SUBCATEGORIES,
};

export function hubArticles(type: HubType, slug: string): Article[] {
  return publishedArticles().filter((a) =>
    type === "category"
      ? a.category === slug
      : (a.subcategories as readonly string[]).includes(slug)
  );
}

export function hubExists(type: HubType, slug: string): boolean {
  return hubArticles(type, slug).length >= MIN_HUB_ARTICLES;
}

/** Hubs die genoeg artikelen hebben, in de vaste volgorde van de taxonomie. */
export function existingHubs(type: HubType): TaxonomyItem[] {
  return HUB_ITEMS[type].filter((item) => hubExists(type, item.slug));
}

export function getHub(type: HubType, slug: string): TaxonomyItem | undefined {
  return HUB_ITEMS[type].find((item) => item.slug === slug);
}

export function hubPath(type: HubType, slug: string): string {
  return `${HUB_PATH[type]}/${slug}`;
}

/** Link naar de hubpagina als die bestaat, anders naar de gefilterde kennisbank. */
export function hubHref(type: HubType, slug: string): string {
  return hubExists(type, slug)
    ? hubPath(type, slug)
    : kennisbankFilterHref(type, slug);
}

/* ---------- Series ---------------------------------------------------- */

/** Gepubliceerde delen van een serie: pijlerartikel eerst, daarna op datum. */
export function seriesParts(seriesSlug: string): Article[] {
  const series = SERIES.find((s) => s.slug === seriesSlug);
  if (!series) return [];
  return publishedArticles()
    .filter((a) => a.series === seriesSlug)
    .sort((a, b) => {
      if (a.slug === series.pillar) return -1;
      if (b.slug === series.pillar) return 1;
      return a.date.localeCompare(b.date);
    });
}

/* ---------- Gerelateerde artikelen ------------------------------------ */

const overlaps = (a: readonly string[], b: readonly string[]) =>
  a.some((x) => b.includes(x));

/**
 * "Lees ook": eerst dezelfde serie, dan gedeelde bouwdelen, dan hetzelfde
 * onderwerp. Alleen artikelen voor dezelfde doelgroep, zodat een particulier
 * geen kantoorartikel aangeraden krijgt. Te weinig matches → aanvullen met
 * de nieuwste artikelen voor die doelgroep.
 */
export function relatedArticles(article: Article, limit = 3): Article[] {
  const candidates = publishedArticles().filter(
    (a) => a.slug !== article.slug && overlaps(a.audience, article.audience)
  );

  const score = (a: Article) =>
    (article.series && a.series === article.series ? 4 : 0) +
    2 *
      a.subcategories.filter((s) =>
        (article.subcategories as readonly string[]).includes(s)
      ).length +
    (a.category === article.category ? 1 : 0);

  return fillUp(
    candidates
      .map((a) => ({ a, s: score(a) }))
      .filter((x) => x.s > 0)
      .sort((x, y) => y.s - x.s || y.a.date.localeCompare(x.a.date))
      .map((x) => x.a),
    candidates,
    limit
  );
}

/* ---------- Kennisbank-blok op dienst- en stadspagina's --------------- */

export type KennisbankMatch = {
  categories?: readonly CategorySlug[];
  subcategories?: readonly SubcategorySlug[];
  audience?: AudienceSlug;
};

/**
 * Artikelen voor een dienst- of stadspagina. Bouwdelen wegen zwaarder dan
 * onderwerpen (specifieker). Aangevuld met de nieuwste artikelen voor de
 * doelgroep, zodat het blok nooit half leeg is.
 */
export function articlesFor(match: KennisbankMatch, limit = 3): Article[] {
  const pool = publishedArticles().filter(
    (a) =>
      !match.audience ||
      (a.audience as readonly string[]).includes(match.audience)
  );

  const score = (a: Article) =>
    2 *
      a.subcategories.filter((s) =>
        (match.subcategories ?? []).includes(s as SubcategorySlug)
      ).length +
    ((match.categories ?? []).includes(a.category as CategorySlug) ? 1 : 0);

  return fillUp(
    pool
      .map((a) => ({ a, s: score(a) }))
      .filter((x) => x.s > 0)
      .sort((x, y) => y.s - x.s || y.a.date.localeCompare(x.a.date))
      .map((x) => x.a),
    pool,
    limit
  );
}

function fillUp(primary: Article[], pool: Article[], limit: number): Article[] {
  const picked = primary.slice(0, limit);
  for (const a of pool) {
    if (picked.length >= limit) break;
    if (!picked.some((p) => p.slug === a.slug)) picked.push(a);
  }
  return picked;
}
