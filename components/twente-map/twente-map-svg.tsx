import type { CSSProperties } from "react";
import { twenteMap } from "@/lib/twente-map-data";
import { mapPlaces } from "@/lib/werkgebied";

/**
 * De Twente-kaart als statische SVG. Server component: de kaartlijnen komen
 * in de HTML en niet in de JavaScript-bundel. Het hover-gedrag zit in
 * TwenteMapFrame (client), die werkt via de data-slug-attributen.
 *
 * Bron: CBS/PDOK gemeentegrenzen 2024 en OpenStreetMap (ODbL).
 */
export function TwenteMapSvg({ activeSlug = null }: { activeSlug?: string | null }) {
  const { viewBox, width, height, outline, municipalities } = twenteMap;
  const hrefFor = (slug: string) => mapPlaces.find((p) => p.slug === slug)?.href ?? "/aannemer-twente";

  return (
    <svg
      viewBox={viewBox}
      className="twente-map block h-auto w-full"
      data-has-active={activeSlug !== null}
      role="group"
      aria-label="Kaart van Twente met alle gemeenten"
    >
      {/* Elke gemeentegrens één keer gedefinieerd; vlak en stippellijn
          verwijzen ernaar. Scheelt de helft van de kaartdata in de pagina. */}
      <defs>
        {municipalities.map((m) => (
          <path key={m.slug} id={`tm-${m.slug}`} d={m.d} />
        ))}
      </defs>
      <g className="map-land-in">
        <path d={outline} className="map-outline" />
        {municipalities.map((m) => (
          <a
            key={m.slug}
            href={hrefFor(m.slug)}
            aria-label={`Aannemer ${m.name}`}
            data-slug={m.slug}
            className="map-link"
          >
            <use
              href={`#tm-${m.slug}`}
              className="map-region"
              data-slug={m.slug}
              data-active={m.slug === activeSlug}
            />
          </a>
        ))}
        {municipalities.map((m) => (
          <use key={`b-${m.slug}`} href={`#tm-${m.slug}`} className="map-border" />
        ))}
      </g>

      {/* Wegen als los, gecachet bestand; TwenteMapFrame laadt het zodra de
          kaart in beeld komt, dan tekent het zichzelf. */}
      <image
        className="map-roads"
        x={0}
        y={0}
        width={width}
        height={height}
        data-src="/images/twente-wegen.svg"
        aria-hidden="true"
      />

      {municipalities.map((m, i) => (
        <g key={`t-${m.slug}`}>
          <circle
            cx={m.town[0]}
            cy={m.town[1]}
            r={7}
            className="map-ping"
            data-slug={m.slug}
            data-active={m.slug === activeSlug}
          />
          <circle
            cx={m.town[0]}
            cy={m.town[1]}
            r={5}
            className="map-dot"
            data-slug={m.slug}
            data-active={m.slug === activeSlug}
            style={{ "--i": i } as CSSProperties}
          />
        </g>
      ))}
    </svg>
  );
}
