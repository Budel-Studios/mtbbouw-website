import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { kennisbank } from "#site/content";
import { site } from "@/lib/site";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";

type Params = { slug: string };

// Statische generatie: één pagina per artikel, vooraf gebouwd.
export function generateStaticParams(): Params[] {
  return kennisbank.filter((a) => !a.draft).map((a) => ({ slug: a.slug }));
}

function getArticle(slug: string) {
  return kennisbank.find((a) => a.slug === slug && !a.draft);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
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

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <ArticleJsonLd
        title={article.title}
        description={article.description}
        url={`${site.url}${article.permalink}`}
        datePublished={article.date}
        dateModified={article.updated}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Kennisbank", url: "/kennisbank" },
          { name: article.title, url: article.permalink },
        ]}
      />

      <nav className="mb-8 text-sm text-stone">
        <Link href="/kennisbank" className="hover:text-ink">
          ← Kennisbank
        </Link>
      </nav>

      <header className="mb-8">
        <time
          dateTime={article.date}
          className="text-xs uppercase tracking-wide text-stone"
        >
          {new Intl.DateTimeFormat("nl-NL", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(new Date(article.date))}
          {" · "}
          {article.metadata.readingTime} min lezen
        </time>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-3 text-lg text-stone">{article.description}</p>
      </header>

      <div
        className="prose prose-stone max-w-none prose-headings:tracking-tight prose-headings:font-display prose-a:text-lime-dark"
        dangerouslySetInnerHTML={{ __html: article.body }}
      />
    </article>
  );
}
