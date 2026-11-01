import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site } from "@/lib/site";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { extractFaq } from "@/lib/article-faq";
import { getAuthor } from "@/lib/authors";
import { categoryLabel } from "@/lib/kennisbank-taxonomy";
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
import { CardSlider } from "@/components/sections/card-slider";
import { articleToCard } from "@/lib/article-slide";
import { HsbAnimation } from "@/components/kennisbank/hsb-animation";
import { publishedProjects, toProjectCard } from "@/lib/projects";

/** Leesbare naam voor een doelpagina (frontmatter `services`). */
const PAGE_LABELS = new Map<string, string>([
  ...site.footerColumns.flatMap((col) => col.links.map((l) => [l.href, l.label] as [string, string])),
  ["/wonen-en-verbouwen", "Wonen & verbouwen"],
  ["/bouwmethodes", "Bouwmethodes"],
  ["/hoe-wij-werken", "Zo werken wij"],
  ["/aannemer-borne", "Aannemer Borne"],
  ["/aannemer-haaksbergen", "Aannemer Haaksbergen"],
  ["/aannemer-losser", "Aannemer Losser"],
]);

type Params = { slug: string };

/** Interactieve blokken die een artikel kan insluiten met "[[naam]]". */
const EMBEDS: Record<string, React.ReactNode> = {
  "hsb-animatie": <HsbAnimation />,
};

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
  const related = relatedArticles(article, 6).map((a) => articleToCard(toCard(a)));
  // Praktijkvoorbeelden: alleen gepubliceerde projecten die het artikel noemt.
  const practice = publishedProjects()
    .filter((p) => article.projects.includes(p.slug))
    .map(toProjectCard)
    .filter((p) => p.images.length > 0);
  const services = article.services.map((href) => ({
    href,
    label: PAGE_LABELS.get(href) ?? href,
  }));

  return (
    <>
      <article className="container-page pb-24 pt-10 md:pb-32 md:pt-14">
        <ArticleJsonLd
          title={article.title}
          description={article.description}
          url={`${site.url}${article.permalink}`}
          datePublished={article.date}
          dateModified={article.updated ?? article.reviewed}
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
            { name: "Bouwgids", url: "/kennisbank" },
            ...(category.hasHub
              ? [{ name: category.label, url: hubPath("category", article.category) }]
              : []),
            { name: article.title, url: article.permalink },
          ]}
        />

        <nav aria-label="Kruimelpad" className="label-mono text-stone">
          <Link href="/kennisbank" className="link-line hover:text-navy">
            Bouwgids
          </Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <Link href={category.href} className="link-line text-navy">
            {category.label}
          </Link>
        </nav>

        <header className="mx-auto mb-14 mt-14 max-w-3xl md:mt-20">
          <p className="eyebrow text-stone">
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
          <h1 className="display mt-6 animate-fade-up text-5xl md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-8 max-w-2xl border-t border-mist pt-6 text-xl leading-snug tracking-[-0.01em] text-stone md:text-2xl">
            {article.description}
          </p>

          {/* Categorie — naar de categoriepagina als die bestaat. */}
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Categorie">
            <li>
              <Link
                href={category.href}
                className="label-mono inline-flex items-center bg-navy px-3 py-2 text-white transition-colors hover:bg-navy-dark"
              >
                {category.label}
              </Link>
            </li>
          </ul>

          {author && <AuthorByline author={author} />}

          {article.reviewer && article.reviewed && (
            <p className="label-mono mt-6 text-stone">
              Inhoudelijk gecontroleerd door {article.reviewer} op{" "}
              <time dateTime={article.reviewed}>{formatDate(article.reviewed)}</time>
            </p>
          )}
        </header>

        {/* Embeds: een alinea "[[naam]]" in de markdown wordt vervangen door
            een interactief component (bijv. de HSB-animatie). */}
        {article.body.split(/<p>\[\[([a-z0-9-]+)\]\]<\/p>/).map((part, i) =>
          i % 2 === 1 ? (
            EMBEDS[part] ? (
              <div key={i} className="mx-auto max-w-4xl">
                {EMBEDS[part]}
              </div>
            ) : null
          ) : (
            <div
              key={i}
              className="prose prose-stone mx-auto max-w-3xl text-[1.0625rem] leading-[1.75] prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-[-0.02em] prose-h2:mt-14 prose-h2:text-3xl prose-a:text-navy prose-a:decoration-navy/40 prose-blockquote:border-navy prose-strong:text-ink"
              dangerouslySetInnerHTML={{ __html: part }}
            />
          )
        )}

        {article.sources.length > 0 && (
          <section aria-labelledby="bronnen" className="mx-auto mt-16 max-w-3xl border-t border-mist pt-8">
            <h2 id="bronnen" className="eyebrow text-stone">
              Bronnen
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-stone">
              {article.sources.map((src) => (
                <li key={src.title}>
                  {src.url ? (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy underline decoration-navy/40 underline-offset-4 hover:decoration-navy"
                    >
                      {src.title}
                    </a>
                  ) : (
                    src.title
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {services.length > 0 && (
          <nav aria-label="Verder bij MTB Bouw" className="mx-auto mt-12 max-w-3xl">
            <p className="eyebrow text-stone">Verder bij MTB Bouw</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {services.map((svc) => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    className="label-mono inline-flex items-center border border-navy px-4 py-2.5 text-navy transition-colors hover:bg-navy hover:text-white"
                  >
                    {svc.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {article.series && (
          <div className="mx-auto max-w-3xl">
            <SeriesNav series={article.series} parts={parts} currentSlug={article.slug} />
          </div>
        )}
      </article>

      {practice.length > 0 && (
        <CardSlider
          items={practice}
          label="Projecten bij dit artikel"
          eyebrow="Uit de praktijk"
          title={practice.length === 1 ? "Het project uit dit artikel" : "De projecten uit dit artikel"}
          headingId="uit-de-praktijk"
          link={{ href: "/projecten", label: "Alle projecten" }}
          tone="plain"
        />
      )}

      <CardSlider
        items={related}
        label="Meer artikelen"
        eyebrow="Verder lezen"
        title="Lees ook"
        headingId="lees-ook"
        link={{ href: "/kennisbank", label: "Alle artikelen" }}
      />
    </>
  );
}
