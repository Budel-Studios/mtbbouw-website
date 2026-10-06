import Image from "next/image";
import Link from "next/link";
import { categoryLabel } from "@/lib/kennisbank-taxonomy";
import type { ArticleCardData } from "@/lib/kennisbank";

/**
 * Lichte artikelkaart voor "Lees ook" en het kennisbank-blok op dienst- en
 * stadspagina's. Zelfde beeldtaal als de homepage-kaarten: papier, haarlijn,
 * lime bij hover.
 */
export function ArticleCard({
  article,
  headingLevel = "h3",
}: {
  article: ArticleCardData;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <Link
      href={article.permalink}
      className="group flex flex-col border border-mist bg-white transition-all hover:-translate-y-0.5 hover:border-lime hover:shadow-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink">
        {article.cover ? (
          <Image
            src={article.cover}
            alt={article.coverAlt || article.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(171,224,0,0.18),transparent_60%)]" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-stone">
          {categoryLabel(article.category)} · {article.readingTime} min lezen
        </p>
        <Heading className="mt-2 font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-lime-dark">
          {article.title}
        </Heading>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink/65">
          {article.description}
        </p>
        <span className="mt-4 text-sm font-semibold text-ink">Lees meer →</span>
      </div>
    </Link>
  );
}
