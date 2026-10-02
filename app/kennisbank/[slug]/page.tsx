import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site } from "@/lib/site";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { extractFaq } from "@/lib/article-faq";
import { getAuthor } from "@/lib/authors";
import { categoryLabel, subcategoryLabel } from "@/lib/kennisbank-taxonomy";
import {
  getPublishedArticle,
  hubExists,
  hubHref,
  hubPath,
  publishedArticles,
  relatedArticles,
  seriesParts,
  toCard,
} from "@/lib/kennisbank";
import { AuthorByline } from "@/components/kennisbank/author-byline";
import { SeriesNav } from "@/components/kennisbank/series-nav";
import { ArticleCard } from "@/components/kennisbank/article-card";

type Params = { slug: string };

// Statische generatie: één pagina per artikel, vooraf gebouwd. Concepten
// (draft: true) krijgen geen pagina; de scheduled task zet ze live.
export function generateStaticParams(): Params[] {
  return publishedArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getPublishedArticle(slug);
  if (!article) return {};
  return {
    // seoTitle = korte titel voor Google; de H1 mag langer zijn.
    title: article.seoTitle ?? article.title,
    description: article.description,
    alternates: { canonical: article.permalink },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: article.permalink,
      publishedTime: article.date,
      modifiedTime: article.updated ?? article.date,
      ...(article.cover && { images: [article.cover] }),
    },
  };
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getPublishedArticle(slug);
  if (!article) notFound();

  // De FAQ staat als gewone tekst in het artikel; hieruit halen we het
  // FAQPage-schema, zodat er maar één bron van waarheid is.
  const faq = extractFaq(article.body);
  const author = getAuthor(article.author);
  const category = {
    label: categoryLabel(article.category),
    hasHub: hubExists("category", article.category),
    href: hubHref("category", article.category),
  };
  const parts = article.series ? seriesParts(article.series) : [];
  const related = relatedArticles(article).map(toCard);

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <ArticleJsonLd
          title={article.title}
          description={article.description}
          url={`${site.url}${article.permalink}`}
          datePublished={article.date}
          dateModified={article.updated}
          image={article.cover}
          section={category.label}
          author={
            author && { name: author.name, jobTitle: author.role, image: author.image }
          }
        />
        {faq.length > 0 && <FaqJsonLd items={faq} />}
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "/" },
            { name: "Kennisbank", url: "/kennisbank" },
            ...(category.hasHub
              ? [{ name: category.label, url: hubPath("category", article.category) }]
              : []),
            { name: article.title, url: article.permalink },
          ]}
        />

        <nav aria-label="Kruimelpad" className="mb-8 text-sm text-stone">
          <Link href="/kennisbank" className="hover:text-ink">
            Kennisbank
          </Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <Link href={category.href} className="hover:text-ink">
            {category.label}
          </Link>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-stone">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            {article.updated && article.updated !== article.date && (
              <>
                {" · bijgewerkt "}
                <time dateTime={article.updated}>{formatDate(article.updated)}</time>
              </>
            )}
            {" · "}
            {article.metadata.readingTime} min lezen
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 text-lg text-stone">{article.description}</p>

          {/* Indeling — naar de hubpagina als die bestaat, anders de gefilterde kennisbank. */}
          <ul className="mt-5 flex flex-wrap gap-2 text-xs" aria-label="Onderwerp en bouwdelen">
            <li>
              <Link
                href={category.href}
                className="inline-flex items-center border border-lime/40 bg-lime/10 px-2.5 py-1 font-semibold text-ink transition-colors hover:border-lime"
              >
                {category.label}
              </Link>
            </li>
            {article.subcategories.map((sub) => (
              <li key={sub}>
                <Link
                  href={hubHref("subcategory", sub)}
                  className="inline-flex items-center border border-mist bg-white px-2.5 py-1 font-medium text-stone transition-colors hover:border-ink hover:text-ink"
                >
                  {subcategoryLabel(sub)}
                </Link>
              </li>
            ))}
          </ul>

          {author && <AuthorByline author={author} />}
        </header>

        <div
          className="prose prose-stone max-w-none prose-headings:tracking-tight prose-headings:font-display prose-a:text-lime-dark"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />

        {article.series && (
          <SeriesNav series={article.series} parts={parts} currentSlug={article.slug} />
        )}
      </article>

      {related.length > 0 && (
        <section aria-labelledby="lees-ook" className="border-t border-mist bg-paper">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
              Verder lezen
            </p>
            <h2 id="lees-ook" className="mt-4 text-3xl font-extrabold tracking-tight">
              Lees ook
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ArticleCard key={r.slug} article={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
