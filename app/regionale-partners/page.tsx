import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { PartnerWall, type WallItem } from "@/components/home/partner-wall";
import { CardSlider } from "@/components/sections/card-slider";
import {
  allPartners,
  bucketMeta,
  categoryToBucket,
  partnerCategories,
  type Bucket,
} from "@/lib/partners";
import { projectsByPartner, projectsWithPartners } from "@/lib/partner-projects";

const title = "Regionale bouwpartners in Twente | MTB Bouw";
const description =
  "Met deze vaste vakmensen en leveranciers uit Twente bouwt MTB Bouw. Geen wisselende onderaannemers, maar partners uit de buurt die we kennen.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/regionale-partners" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/regionale-partners",
  },
};

const BUCKETS: Bucket[] = ["onderaannemers", "toeleveranciers", "partners"];

/** "Bedrijfshal — Borne" → "Bedrijfshal Borne"; lange titels tot aan de streep. */
function shortTitle(p: { title: string; location?: string }) {
  const head = p.title.split(" — ")[0];
  const place = p.location?.split(" ")[0];
  return place && !head.includes(place) ? `${head} ${place}` : head;
}

export default function RegionalePartnersPage() {
  const byPartner = projectsByPartner();
  const samenGebouwd = projectsWithPartners();

  const wallFor = (bucket: Bucket): WallItem[] =>
    allPartners
      .filter((p) => categoryToBucket[p.category] === bucket)
      .map((p) => {
        const projects = byPartner[p.name] ?? [];
        return {
          name: p.name,
          role: partnerCategories[p.category],
          description: p.description,
          region: p.region,
          url: p.url,
          rel: p.rel,
          note: projects.length > 0 ? `Bouwde mee aan: ${projects.map(shortTitle).join(", ")}` : undefined,
        };
      });

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Regionale partners", url: "/regionale-partners" },
        ]}
      />

      <PageHero
        eyebrow="Ons netwerk in Twente"
        title="Samen bouwen met partners uit de regio"
        intro="We zijn een klein bouwbedrijf en dat willen we graag zo houden. Voor wat we niet zelf doen, werken we met vaste mensen en bedrijven uit de buurt. Geen wisselende onderaannemers, maar partners die we kennen en die elkaar kennen."
      />

      {/* Drie muren: onderaannemers, toeleveranciers en partners */}
      <section className="border-y border-mist bg-white">
        <div className="container-page space-y-20 py-20 md:space-y-28 md:py-28">
          {BUCKETS.map((bucket) => {
            const items = wallFor(bucket);
            if (items.length === 0) return null;
            const meta = bucketMeta[bucket];
            return (
              <div key={bucket}>
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div className="max-w-2xl">
                    <p className="eyebrow text-stone">
                      {items.length} {items.length === 1 ? "partner" : "partners"}
                    </p>
                    <h2 className="display mt-4 text-3xl md:text-5xl">{meta.title}</h2>
                    <p className="mt-4 leading-relaxed text-stone">{meta.intro}</p>
                  </div>
                </div>
                <div className="mt-10">
                  <PartnerWall partners={items} rows={2} label={meta.title} />
                </div>
              </div>
            );
          })}
          <p className="max-w-2xl text-sm leading-relaxed text-stone">
            Ga met je muis over een blok voor wat ze doen, waar ze zitten en
            waar ze meebouwden. Benieuwd hoe zo&apos;n samenwerking op de bouw
            loopt? Lees{" "}
            <Link href="/hoe-wij-werken" className="font-semibold text-ink underline hover:text-navy">
              hoe wij werken
            </Link>{" "}
            of bekijk ons{" "}
            <Link href="/aannemer-twente" className="font-semibold text-ink underline hover:text-navy">
              werkgebied in Twente
            </Link>
            . Externe links openen in een nieuw tabblad; we linken alleen naar
            partijen waarmee we echt samenwerken.
          </p>
        </div>
      </section>

      {/* Samen gebouwd — partners gekoppeld aan echte projecten */}
      <CardSlider
        items={samenGebouwd}
        label="Projecten met onze partners"
        eyebrow="Samen gebouwd"
        title="Waar onze partners meebouwden"
        link={{ href: "/projecten", label: "Alle projecten" }}
      />
    </>
  );
}
