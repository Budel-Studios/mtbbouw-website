import type { Metadata } from "next";
import { ArticleGrid } from "@/components/article-grid";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { HubLinks } from "@/components/kennisbank/hub-links";
import { publishedArticles, toCard } from "@/lib/kennisbank";

const INTRO =
  "Praktische uitleg en advies over bouwen, verbouwen, renoveren en kozijnen. Van veelgestelde vragen tot achtergrondartikelen: hier vind je antwoorden zonder poeha, geschreven door het team dat het werk ook echt uitvoert.";

export const metadata: Metadata = {
  title: "Bouwgids: uitleg over bouwen en verbouwen",
  description:
    "De bouwgids van MTB Bouw: praktische uitleg over bouwen, verbouwen, renovatie, kosten en kozijnen, geschreven door het team dat het werk uitvoert.",
  alternates: { canonical: "/kennisbank" },
  openGraph: {
    type: "website",
    title: "Bouwgids | MTB Bouw",
    description: "De bouwgids van MTB Bouw: praktische uitleg over bouwen, verbouwen, renovatie, kosten en kozijnen, geschreven door het team dat het werk uitvoert.",
    url: "/kennisbank",
  },
};

export default function KennisbankPage() {
  const articles = publishedArticles().map(toCard);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Bouwgids", url: "/kennisbank" },
        ]}
      />
      {/* Kop en browser: zelfde opbouw als /projecten */}
      <section className="container-page pb-10 pt-16 md:pb-14 md:pt-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="animate-fade-up md:col-span-8">
            <p className="eyebrow text-stone">Inspiratie &amp; kennis</p>
            <h1 className="display mt-6 text-[2.5rem] sm:text-6xl lg:text-7xl xl:text-[6.5rem]">
              Bouwgids
            </h1>
          </div>
          <p
            className="animate-fade-up max-w-md text-base leading-relaxed text-stone md:col-span-4"
            style={{ animationDelay: "120ms" }}
          >
            {INTRO}
          </p>
        </div>
      </section>

      <section aria-label="Artikelen" className="container-page pb-20 md:pb-28">
        <ArticleGrid articles={articles} />
      </section>

      {/* Vaste links naar de hubpagina's: crawlbaar, in tegenstelling tot de filter. */}
      <div className="container-page py-14">
        <HubLinks />
      </div>
    </>
  );
}
