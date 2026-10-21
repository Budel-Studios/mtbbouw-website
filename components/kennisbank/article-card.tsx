import Image from "next/image";
import Link from "next/link";
import { categoryLabel } from "@/lib/kennisbank-taxonomy";
import type { ArticleCardData } from "@/lib/kennisbank";

/**
 * Lichte artikelkaart voor "Lees ook" en het kennisbank-blok op dienst- en
 * stadspagina's. Foto-eerst, mono-meta en een displaykop; navy bij hover.
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
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        {article.cover ? (
          <Image
            src={article.cover}
            alt={article.coverAlt || article.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="img-zoom object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-ink" />
        )}
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <p className="label-mono flex flex-wrap gap-x-3">
          <span className="text-navy">{categoryLabel(article.category)}</span>
          <span className="text-stone">{article.readingTime} min lezen</span>
        </p>
        <Heading className="display mt-3 text-2xl transition-colors group-hover:text-navy">
          {article.title}
        </Heading>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-stone">
          {article.description}
        </p>
        <span className="label-mono mt-5 text-navy">Lees artikel →</span>
      </div>
    </Link>
  );
}
