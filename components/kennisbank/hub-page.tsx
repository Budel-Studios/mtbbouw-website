import Link from "next/link";
import { ArticleGrid } from "@/components/article-grid";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { HubLinks } from "@/components/kennisbank/hub-links";
import { CtaBanner } from "@/components/sections/cta-banner";
import { hubArticles, hubPath, toCard, type HubType } from "@/lib/kennisbank";
import type { TaxonomyItem } from "@/lib/kennisbank-taxonomy";
import { site } from "@/lib/site";

/**
 * Hubpagina voor één onderwerp of bouwdeel: eigen H1, intro, de artikelen en
 * links naar de andere hubs. Dit zijn de kennisbankpagina's die zelf kunnen
 * ranken op bredere zoekvragen ("kozijnen", "verduurzamen").
 */
export function HubPage({ type, item }: { type: HubType; item: TaxonomyItem }) {
  const path = hubPath(type, item.slug);
  const articles = hubArticles(type, item.slug).map(toCard);
  const kind = type === "category" ? "Onderwerp" : "Bouwdeel";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Kennisbank", url: "/kennisbank" },
          { name: item.label, url: path },
        ]}
      />

      <div className="container-page pb-24 pt-10 md:pb-32 md:pt-14">
        <nav aria-label="Kruimelpad" className="label-mono text-stone">
          <Link href="/kennisbank" className="link-line hover:text-navy">
            Kennisbank
          </Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-navy">{kind}</span>
        </nav>

        <h1 className="display mt-14 text-6xl md:mt-20 md:text-8xl">{item.label}</h1>

        <div className="mt-10 max-w-3xl space-y-4 text-base leading-relaxed text-stone">
          {(item.intro ?? [item.description]).map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        {item.links && item.links.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-3">
            {item.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="label-mono inline-flex items-center gap-2 border border-ink px-4 py-2.5 text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        )}

        <p className="label-mono mt-12 border-t border-mist pt-4 text-stone">
          {articles.length} {articles.length === 1 ? "artikel" : "artikelen"}
        </p>
        <ArticleGrid articles={articles} filterable={false} />

        <div className="mt-24 border-t border-ink pt-10">
          <HubLinks current={path} />
        </div>
      </div>

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Liever meteen advies voor jouw situatie?"
        text="We komen langs, kijken mee en je ontvangt een offerte met vaste prijs."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: `Bel ${site.telephone}`, href: `tel:${site.telephoneHref}` }}
      />
    </>
  );
}
