"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPinIcon } from "@/components/icons";

/**
 * Projectencarrousel voor de homepage — horizontale snap-rail met vorige/
 * volgende-knoppen. De rail blijft gewoon veegbaar op touch; de knoppen zijn
 * een extra voor muisgebruikers en verdwijnen zodra er niets meer te scrollen
 * valt in die richting.
 */
export type CarouselProject = {
  slug: string;
  permalink: string;
  title: string;
  description: string;
  cover?: string;
  coverAlt?: string;
  category?: string;
  location?: string;
  featured?: boolean;
};

export function ProjectCarousel({ projects }: { projects: CarouselProject[] }) {
  const railRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    // 4px speling: sub-pixel scrollposities mogen de knop niet laten flikkeren.
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    sync();
    const el = railRef.current;
    if (!el) return;
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, [sync]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <ul
        ref={railRef}
        onScroll={sync}
        // scroll-pl moet de px matchen: anders legt snap-mandatory de rustpositie
        // van de eerste kaart op scrollLeft = padding, en verdwijnt "vorige" nooit.
        className="no-scrollbar flex snap-x snap-mandatory scroll-smooth gap-4 overflow-x-auto px-6 pb-6 scroll-pl-6 md:gap-5 lg:px-10 lg:scroll-pl-10"
      >
        {projects.map((p) => (
          <li
            key={p.slug}
            className="w-[85vw] shrink-0 snap-start sm:w-[420px] md:w-[460px]"
          >
            <Link
              href={p.permalink}
              className="group flex h-full flex-col overflow-hidden border border-mist bg-white transition-shadow hover:shadow-[0_28px_60px_-24px_rgba(0,0,0,0.18)]"
            >
              <div className="relative aspect-square overflow-hidden bg-ink">
                {p.cover && (
                  <Image
                    src={p.cover}
                    alt={p.coverAlt || p.title}
                    fill
                    sizes="(max-width: 768px) 85vw, 460px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
                  {p.featured && (
                    <span className="inline-flex items-center bg-lime px-3 py-1.5 text-xs font-bold text-ink">
                      Uitgelicht
                    </span>
                  )}
                  {p.category && (
                    <span className="inline-flex items-center bg-ink px-3 py-1.5 text-xs font-semibold text-white">
                      {p.category}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                {p.location && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink/60">
                    <MapPinIcon className="h-3.5 w-3.5" /> {p.location}
                  </div>
                )}
                <h3 className="mt-3 font-display text-xl font-bold leading-tight tracking-tight text-ink md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                  {p.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
        <li aria-hidden="true" className="w-4 shrink-0" />
      </ul>

      {/* Knoppen zweven over de rail; op touch veeg je gewoon door. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between px-2 md:flex">
        <CarouselButton
          direction="prev"
          disabled={!canPrev}
          onClick={() => scrollByCard(-1)}
        />
        <CarouselButton
          direction="next"
          disabled={!canNext}
          onClick={() => scrollByCard(1)}
        />
      </div>
    </div>
  );
}

function CarouselButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Vorige projecten" : "Volgende projecten"}
      className={`pointer-events-auto flex h-12 w-12 items-center justify-center border border-mist bg-white/95 text-ink shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] backdrop-blur transition-all hover:border-lime hover:bg-lime ${
        disabled ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        {direction === "prev" ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 18 15 12 9 6" />
        )}
      </svg>
    </button>
  );
}
