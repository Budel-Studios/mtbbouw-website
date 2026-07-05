import type { Metadata } from "next";
import { kennisbank } from "#site/content";
import { ArticleGrid } from "@/components/article-grid";
import { BreadcrumbJsonLd } from "@/components/json-ld";

const INTRO =
  "Praktische uitleg en advies over bouwen, verbouwen, renoveren en kozijnen. Van veelgestelde vragen tot achtergrondartikelen: hier vind je antwoorden zonder poeha, geschreven door het team dat het werk ook echt uitvoert.";

export const metadata: Metadata = {
  title: "Kennisbank",
  description:
    "Artikelen en praktische uitleg over bouwen, verbouwen, renovatie en kozijnen van MTB Bouw.",
  alternates: { canonical: "/kennisbank" },
};

export default function KennisbankPage() {
  const articles = kennisbank
    .filter((a) => !a.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((a) => ({
      slug: a.slug,
      permalink: a.permalink,
      title: a.title,
      description: a.description,
      category: a.category,
      date: a.date,
      readingTime: a.metadata.readingTime,
      cover: a.cover,
      coverAlt: a.coverAlt,
    }));

  return (
    <div className="bg-canvas">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Kennisbank", url: "/kennisbank" },
        ]}
      />
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">
        {/* Hero-titel — zelfde stijl als /projecten (Archivo, 2 regels, strak) */}
        <h1
          style={{ fontWeight: 600 }}
          className="mb-8 font-display text-4xl leading-[0.95] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.5rem]"
        >
          Kennisbank
          <br />
          &amp; artikelen
        </h1>

        <ArticleGrid articles={articles} intro={INTRO} />
      </div>
    </div>
  );
}
