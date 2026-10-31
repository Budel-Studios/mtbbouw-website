import type { ProjectCardData } from "@/components/project/project-cards";
import { categoryLabel } from "@/lib/kennisbank-taxonomy";

type ArticleLike = {
  slug: string;
  permalink: string;
  title: string;
  description: string;
  category: string;
  readingTime: number;
  date?: string;
  cover?: string;
  coverAlt?: string;
};

/**
 * Een kennisbank-artikel als kaart in precies hetzelfde ontwerp als een
 * project: onderwerp links in de meta-regel, leestijd rechts. Zo zien werk en
 * artikelen er overal op de site hetzelfde uit. Client-veilig (geen content-
 * import), dus ook bruikbaar in de kennisbank-browser.
 */
export function articleToCard(a: ArticleLike): ProjectCardData {
  return {
    slug: a.slug,
    permalink: a.permalink,
    title: a.title,
    description: a.description,
    category: categoryLabel(a.category),
    location: `${a.readingTime} min lezen`,
    clientType: a.date
      ? new Intl.DateTimeFormat("nl-NL", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(a.date))
      : undefined,
    images: a.cover ? [{ src: a.cover, alt: a.coverAlt || a.title }] : [],
  };
}
