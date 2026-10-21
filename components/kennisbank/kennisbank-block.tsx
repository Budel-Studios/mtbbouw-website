import { ArrowLink } from "@/components/ui/button";
import { ArticleCard } from "@/components/kennisbank/article-card";
import { articlesFor, toCard, type KennisbankMatch } from "@/lib/kennisbank";

/**
 * "Uit de kennisbank" op dienst- en stadspagina's. Kiest automatisch de best
 * passende gepubliceerde artikelen (zie articlesFor), dus nieuwe artikelen
 * verschijnen hier vanzelf zodra ze live gaan. Rendert niets zonder artikelen.
 */
export function KennisbankBlock({
  match,
  eyebrow = "Uit de kennisbank",
  title = "Lees je alvast in",
  intro,
  limit = 3,
}: {
  match: KennisbankMatch;
  eyebrow?: string;
  title?: string;
  intro?: string;
  limit?: number;
}) {
  const articles = articlesFor(match, limit).map(toCard);
  if (articles.length === 0) return null;

  return (
    <section className="border-y border-mist">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="label-mono text-navy">{eyebrow}</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              {title}
            </h2>
            {intro && <p className="mt-4 leading-relaxed text-stone">{intro}</p>}
          </div>
          <ArrowLink href="/kennisbank">Alle artikelen</ArrowLink>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
