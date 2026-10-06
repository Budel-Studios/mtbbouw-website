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
    <section className="border-y border-mist bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {title}
            </h2>
            {intro && <p className="mt-4 leading-relaxed text-stone">{intro}</p>}
          </div>
          <ArrowLink href="/kennisbank">Alle artikelen</ArrowLink>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
