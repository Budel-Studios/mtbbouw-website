"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { MapPlace } from "@/lib/werkgebied";

/**
 * Interactieve laag rond de server-gerenderde Twente-kaart. Houdt bij welke
 * gemeente actief is (hover, focus, rondleiding) en zet dat als data-active
 * op de SVG-elementen. De kaartlijnen zelf zitten niet in deze bundel.
 */
const MAP_W = 1000;
const MAP_H = 829.1;
const TOUR_START_MS = 3400;
const TOUR_STEP_MS = 2200;

export function ArrowUpRight({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function useMapTour(tourSlugs: string[], enabled: boolean) {
  const [index, setIndex] = useState<number | null>(null);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (!enabled || stopped || tourSlugs.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      setIndex(0);
      interval = setInterval(() => setIndex((i) => ((i ?? 0) + 1) % tourSlugs.length), TOUR_STEP_MS);
    }, TOUR_START_MS);
    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [enabled, stopped, tourSlugs.length]);

  const current = enabled && !stopped && index !== null ? (tourSlugs[index] ?? null) : null;
  return { current, stop: () => setStopped(true) };
}

export function TwenteMapFigure({
  svg,
  places,
  activeSlug: controlledActive,
  onActiveChange,
  defaultActive = null,
  tour = false,
  caption = "Twente",
  className = "",
}: {
  /** De server-gerenderde <TwenteMapSvg />. */
  svg: ReactNode;
  /** Alle gemeenten met naam, link en stip (klein, voor de tooltip). */
  places: MapPlace[];
  /** Gecontroleerd: actieve gemeente van buitenaf (bijv. vanuit de lijst). */
  activeSlug?: string | null;
  onActiveChange?: (slug: string | null) => void;
  /** Ongecontroleerd: gemeente die standaard oplicht (stadspagina). */
  defaultActive?: string | null;
  /** Rustige rondleiding langs de plaatsen tot de bezoeker zelf iets doet. */
  tour?: boolean;
  caption?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const controlled = controlledActive !== undefined;
  const tourSlugs = places.filter((p) => p.hasPage).map((p) => p.slug);
  const { current: tourSlug, stop } = useMapTour(tourSlugs, tour && !controlled);

  const active = controlled ? controlledActive : (hovered ?? tourSlug ?? defaultActive);
  const activePlace = places.find((p) => p.slug === active) ?? null;

  const setActive = (slug: string | null) => {
    if (slug) stop();
    if (controlled) onActiveChange?.(slug);
    else setHovered(slug);
  };

  // Actieve gemeente doorzetten naar de SVG-elementen.
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    root.querySelectorAll<SVGElement>(".map-region, .map-dot, .map-ping").forEach((el) => {
      el.dataset.active = String(el.dataset.slug === active);
    });
    const svgEl = root.querySelector<SVGSVGElement>("svg.twente-map");
    if (svgEl) svgEl.dataset.hasActive = String(active !== null);
  }, [active]);

  // Intro-animatie pas starten als de kaart in beeld komt.
  useEffect(() => {
    const root = ref.current;
    const svgEl = root?.querySelector<SVGSVGElement>("svg.twente-map");
    if (!root || !svgEl) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          svgEl.dataset.inview = "true";
          const roads = svgEl.querySelector<SVGImageElement>("image.map-roads");
          const src = roads?.dataset.src;
          if (roads && src) roads.setAttribute("href", src);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  const slugFrom = (target: EventTarget | null) =>
    target instanceof Element ? (target.closest("[data-slug]")?.getAttribute("data-slug") ?? null) : null;

  return (
    <figure
      className={`relative mx-auto w-full max-w-2xl border border-mist bg-paper px-6 pb-8 pt-8 text-ink sm:px-12 sm:pt-10 ${className}`}
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-stone">
        <span>52.3° N — 6.8° O</span>
        <span>14 gemeenten</span>
      </div>
      <div
        ref={ref}
        className="relative mt-6"
        onMouseOver={(e) => {
          const slug = slugFrom(e.target);
          if (slug) setActive(slug);
        }}
        onMouseLeave={() => setActive(null)}
        onFocus={(e) => {
          const slug = slugFrom(e.target);
          if (slug) setActive(slug);
        }}
        onBlur={() => setActive(null)}
      >
        {svg}
        <div
          aria-hidden="true"
          className={`map-tooltip pointer-events-none absolute z-10 ${activePlace ? "opacity-100" : "opacity-0"}`}
          style={{
            left: `${((activePlace?.town[0] ?? MAP_W / 2) / MAP_W) * 100}%`,
            top: `${((activePlace?.town[1] ?? MAP_H / 2) / MAP_H) * 100}%`,
            transform: `translate(-50%, calc(-100% - ${activePlace ? 18 : 10}px))`,
          }}
        >
          <div className="flex items-stretch whitespace-nowrap border border-mist bg-white text-ink shadow-sm">
            <div className="py-2 pl-3.5 pr-4 leading-tight">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone">
                {activePlace?.hasPage ? "Aannemer" : "Werkgebied"}
              </div>
              <div className="mt-0.5 font-display text-base font-semibold tracking-[-0.01em]">
                {activePlace?.name}
              </div>
            </div>
            <span className="grid w-10 place-items-center bg-lime text-ink">
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>
      </div>
      <figcaption className="mt-8 text-center font-display text-3xl font-semibold uppercase tracking-[0.3em] sm:text-5xl">
        {caption}
      </figcaption>
    </figure>
  );
}
