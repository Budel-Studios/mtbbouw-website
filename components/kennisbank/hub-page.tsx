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
    <div className="bg-canvas">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Kennisbank", url: "/kennisbank" },
          { name: item.label, url: path },
        ]}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">
        <nav aria-label="Kruimelpad" className="mb-8 text-sm text-stone">
          <Link href="/kennisbank" className="hover:text-ink">
            Kennisbank
          </Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span>{kind}</span>
        </nav>

        <h1
          style={{ fontWeight: 600 }}
          className="font-display text-4xl leading-[0.95] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.5rem]"
        >
          {item.label}
        </h1>

        <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-ink/80 md:text-base">
          {(item.intro ?? [item.description]).map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        {item.links && item.links.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {item.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 border-b-2 border-lime pb-0.5 text-sm font-bold text-ink transition-colors hover:text-lime-dark"
                >
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-10 text-sm text-stone">
          {articles.length} {articles.length === 1 ? "artikel" : "artikelen"}
        </p>
        <ArticleGrid articles={articles} filterable={false} />

        <div className="mt-16 border-t border-mist pt-10">
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
    </div>
  );
}
