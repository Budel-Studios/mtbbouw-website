import type { ReactNode } from "react";
import { QuoteButton } from "@/components/ui/quote-button";
import { MapPinIcon } from "@/components/icons";
import { TwenteMapSvg } from "@/components/twente-map/twente-map-svg";
import { TwenteMapFigure } from "@/components/twente-map/twente-map-figure";
import { mapPlaces } from "@/lib/werkgebied";
import { site } from "@/lib/site";

/**
 * Bovenkant van een stadspagina: de H1 en een tekst over de huizen en wijken
 * van die stad, met rechts de Twente-kaart waarop de stad oplicht. Zonder
 * `slug` (overzicht Twente) loopt de kaart een rondje langs de plaatsen.
 */
export function CityMapHero({
  slug,
  eyebrow,
  title,
  children,
  kernen,
}: {
  slug?: string;
  eyebrow: string;
  title: string;
  /** De stadstekst: twee of drie korte alinea's. */
  children: ReactNode;
  /** Kernen of wijken als chips onder de tekst. */
  kernen?: string[];
}) {
  const places = mapPlaces.map(({ slug, name, href, tagline, hasPage, town }) => ({
    slug,
    name,
    href,
    tagline,
    hasPage,
    town,
  }));

  return (
    <section className="border-b border-mist">
      <div className="container-page grid gap-12 py-14 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-20">
        <div className="lg:col-span-6">
          <p className="eyebrow text-stone">{eyebrow}</p>
          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="mt-8 max-w-xl space-y-4 text-lg leading-relaxed text-stone">{children}</div>
          <div className="mt-10 flex flex-wrap gap-3">
            <QuoteButton />
            <a
              href={`tel:${site.telephoneHref}`}
              className="label-mono inline-flex items-center justify-center border border-navy px-5 py-3.5 text-navy transition-colors hover:bg-navy hover:text-white"
            >
              {site.telephone}
            </a>
          </div>
          {kernen && kernen.length > 0 ? (
            <ul className="mt-10 flex flex-wrap gap-2 border-t border-mist pt-8" aria-label="Kernen en wijken">
              {kernen.map((k) => (
                <li
                  key={k}
                  className="inline-flex items-center gap-1.5 border border-mist bg-white px-3 py-1.5 text-sm text-ink"
                >
                  <MapPinIcon className="h-3.5 w-3.5 text-navy" />
                  {k}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="lg:col-span-6">
          <TwenteMapFigure
            svg={<TwenteMapSvg activeSlug={slug ?? null} />}
            places={places}
            defaultActive={slug ?? null}
            tour={!slug}
          />
        </div>
      </div>
    </section>
  );
}
