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
  const { viewBox, outline, roadsMajor, roadsMinor, municipalities } = twenteMap;
  const hrefFor = (slug: string) => mapPlaces.find((p) => p.slug === slug)?.href ?? "/aannemer-twente";

  return (
    <svg
      viewBox={viewBox}
      className="twente-map block h-auto w-full"
      data-has-active={activeSlug !== null}
      role="group"
      aria-label="Kaart van Twente met alle gemeenten"
    >
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
            <path
              d={m.d}
              className="map-region"
              data-slug={m.slug}
              data-active={m.slug === activeSlug}
            />
          </a>
        ))}
        {municipalities.map((m) => (
          <path key={`b-${m.slug}`} d={m.d} className="map-border" />
        ))}
      </g>

      <path d={roadsMinor} pathLength={1} className="map-road map-road--minor" />
      <path d={roadsMajor} pathLength={1} className="map-road map-road--major" />

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
