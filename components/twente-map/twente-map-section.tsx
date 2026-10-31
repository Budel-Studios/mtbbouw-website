"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import type { MapPlace } from "@/lib/werkgebied";
import { ArrowUpRight, TwenteMapFigure, useMapTour } from "@/components/twente-map/twente-map-figure";

/**
 * Werkgebied-sectie met de Twente-kaart en de lijst van stadspagina's. Lijst
 * en kaart lichten samen op. Voor de homepage en de Twente-overzichtspagina.
 */
export function TwenteMapSection({
  svg,
  places,
  eyebrow = "Werkgebied",
  title = "Aannemer in heel Twente.",
  intro = "Vanuit Enschede werken we in de hele regio. Kies je plaats op de kaart voor projecten en de aanpak bij jou in de buurt.",
  showTwenteLink = true,
}: {
  svg: ReactNode;
  places: MapPlace[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  showTwenteLink?: boolean;
}) {
  const listed = places.filter((p) => p.hasPage);
  const [hovered, setHovered] = useState<string | null>(null);
  const { current: tourSlug, stop } = useMapTour(
    listed.map((p) => p.slug),
    true
  );
  const active = hovered ?? tourSlug;

  const setActive = (slug: string | null) => {
    if (slug) stop();
    setHovered(slug);
  };

  return (
    <section id="werkgebied" aria-labelledby="werkgebied-title" className="scroll-mt-20 overflow-hidden bg-inverse text-white">
      <div className="container-page pb-16 pt-24 md:pb-20 md:pt-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow text-inverse-muted">{eyebrow}</p>
            <h2
              id="werkgebied-title"
              className="mt-6 font-display text-5xl font-medium leading-[1.02] tracking-[-0.03em] sm:text-6xl"
            >
              {title}
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-inverse-muted lg:col-span-5 lg:justify-self-end">
            {intro}
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <nav aria-label="Aannemer per plaats in Twente" className="order-2 lg:order-1 lg:col-span-5">
            <ul className="grid grid-cols-1 border-t border-inverse-border sm:grid-cols-2">
              {listed.map((p, i) => {
                const isActive = p.slug === active;
                return (
                  <li
                    key={p.slug}
                    className="border-b border-inverse-border sm:odd:border-r sm:odd:pr-5 sm:even:pl-5"
                  >
                    <Link
                      href={p.href}
                      onMouseEnter={() => setActive(p.slug)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(p.slug)}
                      onBlur={() => setActive(null)}
                      className="group flex items-start gap-3 py-3.5 outline-none"
                    >
                      <span
                        className={`mt-1 w-5 font-mono text-[11px] tabular-nums transition-colors ${
                          isActive ? "text-lime" : "text-inverse-muted"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block font-display text-[15px] font-medium leading-snug transition-colors ${
                            isActive ? "text-lime" : "text-white"
                          }`}
                        >
                          Aannemer {p.name}
                        </span>
                        <span className="mt-0.5 block text-xs text-inverse-muted">{p.tagline}</span>
                      </span>
                      <ArrowUpRight
                        className={`mt-1 size-4 shrink-0 transition-all duration-300 ${
                          isActive ? "translate-x-0 text-lime opacity-100" : "-translate-x-1 opacity-40"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {showTwenteLink ? (
              <Link
                href="/aannemer-twente"
                className="group mt-8 inline-flex h-12 items-stretch border border-inverse-border transition-colors hover:border-white"
              >
                <span className="label-mono flex items-center px-5">Heel Twente — alle plaatsen</span>
                <span className="grid w-12 place-items-center bg-lime text-ink">
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ) : null}
          </nav>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <TwenteMapFigure svg={svg} places={places} activeSlug={active} onActiveChange={setActive} />
          </div>
        </div>
      </div>
    </section>
  );
}
