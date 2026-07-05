"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FilterDropdown } from "@/components/filter-dropdown";

/**
 * Projecten-browser — metro-stijl grid met wisselende tegelgroottes en een
 * dropdown-filter ("Filter op projecten", replica van de live WP-component).
 * Bij hover bladert een tegel automatisch door max. 3 projectfoto's (cover +
 * gallery), zodat je een project kunt "previewen" zonder het te openen.
 */
type Project = {
  slug: string;
  permalink: string;
  title: string;
  description: string;
  category?: string;
  location?: string;
  images: { src: string; alt: string }[]; // cover eerst, dan gallery (max 3)
};

const ALL = "Alle projecten";

/**
 * Metro-patroon: herhaalt per 6 tegels. Groottes in kolom/rij-spans op een
 * 4-koloms grid (mobiel valt alles terug naar 2 kolommen).
 *   [ groot 2x2 ][ 1x1 ][ 1x1 ]
 *   [           ][ breed 2x1  ]
 *   [ 1x1 ][ hoog 1x2 ][ groot 2x2 ... ]
 */
const METRO: string[] = [
  "md:col-span-2 md:row-span-2", // groot
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1", // breed
  "md:col-span-1 md:row-span-2", // hoog
  "md:col-span-1 md:row-span-1",
];

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

/**
 * Eén metro-tegel: foto-fill, overlay-tekst, en een hover-preview van max. 3
 * foto's. Blaadt vanzelf door bij hover, maar de bezoeker kan ook zelf sturen
 * via de pijltjes of de dots — dat pauzeert de auto-cyclus tijdelijk.
 */
function Tile({
  project,
  sizeClass,
  priority,
}: {
  project: Project;
  sizeClass: string;
  priority: boolean;
}) {
  const images = project.images.slice(0, 3);
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const timer = useRef<number | null>(null);
  const resumeTimer = useRef<number | null>(null);

  const clearTimer = () => {
    if (timer.current !== null) {
      window.clearInterval(timer.current);
      timer.current = null;
    }
  };

  const autoAdvance = () => {
    clearTimer();
    if (images.length < 2) return;
    timer.current = window.setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      1400
    );
  };

  const onEnter = () => {
    setHovering(true);
    if (images.length < 2) return;
    setIndex(1 % images.length);
    autoAdvance();
  };

  const onLeave = () => {
    setHovering(false);
    clearTimer();
    if (resumeTimer.current !== null) {
      window.clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
    setIndex(0);
  };

  /** Handmatige stap — pauzeert de auto-cyclus even, hervat na 3s inactiviteit. */
  const goTo = (
    e: React.MouseEvent<HTMLButtonElement>,
    next: number | ((i: number) => number)
  ) => {
    e.preventDefault();
    e.stopPropagation();
    clearTimer();
    setIndex((i) => (typeof next === "function" ? next(i) : next));
    if (resumeTimer.current !== null) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(autoAdvance, 3000);
  };

  // Ruim timers op bij unmount (bv. filterwissel).
  useEffect(
    () => () => {
      clearTimer();
      if (resumeTimer.current !== null) window.clearTimeout(resumeTimer.current);
    },
    []
  );

  const multi = images.length > 1;

  return (
    <Link
      href={project.permalink}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className={`group relative block min-h-44 overflow-hidden bg-ink ${sizeClass}`}
    >
      {/* Fotolagen — gestapeld, crossfade op index */}
      {images.map((img, i) => (
        <Image
          key={img.src + i}
          src={img.src}
          alt={i === 0 ? img.alt : ""}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          priority={priority && i === 0}
          className={`object-cover transition-all duration-500 group-hover:scale-[1.03] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Verloop + tekst-overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-white/70">
          {[project.category, project.location].filter(Boolean).join(" · ")}
        </p>
        <h2 className="mt-0.5 font-semibold leading-snug text-white">
          {project.title}
        </h2>
      </div>

      {multi && (
        <>
          {/* Pijltjes — alleen zichtbaar/klikbaar bij hover, stoppen navigatie */}
          <button
            type="button"
            aria-label="Vorige foto"
            tabIndex={hovering ? 0 : -1}
            onClick={(e) =>
              goTo(e, (i) => (i - 1 + images.length) % images.length)
            }
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-white/30 bg-ink/50 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-ink/80 group-hover:opacity-100"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            aria-label="Volgende foto"
            tabIndex={hovering ? 0 : -1}
            onClick={(e) => goTo(e, (i) => (i + 1) % images.length)}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-white/30 bg-ink/50 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-ink/80 group-hover:opacity-100"
          >
            <ChevronIcon direction="right" />
          </button>

          {/* Dots — ook klikbaar, springen direct naar die foto */}
          <div className="absolute right-3 top-3 flex gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Foto ${i + 1} van ${images.length}`}
                tabIndex={hovering ? 0 : -1}
                onClick={(e) => goTo(e, i)}
                className="p-0.5"
              >
                <span
                  className={`block h-1 w-4 transition-colors duration-300 ${
                    i === index ? "bg-lime" : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </Link>
  );
}

export function ProjectGrid({
  projects,
  intro,
}: {
  projects: Project[];
  intro?: string;
}) {
  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(projects.map((p) => p.category).filter((c): c is string => !!c))
    ).sort((a, b) => a.localeCompare(b, "nl"));
    return [ALL, ...unique];
  }, [projects]);

  const [active, setActive] = useState(ALL);

  const visible =
    active === ALL ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Intro links + dropdown-filter rechts */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        {intro && (
          <p className="max-w-3xl text-sm leading-relaxed text-ink/80 md:text-base">
            {intro}
          </p>
        )}

        <FilterDropdown
          label="Filter op projecten"
          options={categories}
          active={active}
          onChange={setActive}
        />
      </div>

      {/* Metro-grid: 4 kolommen, kleine gap, wisselende spans */}
      {visible.length > 0 ? (
        <div className="mt-10 grid auto-rows-[170px] grid-cols-2 gap-1.5 md:auto-rows-[220px] md:grid-cols-4">
          {visible.map((project, i) => (
            <Tile
              key={project.slug}
              project={project}
              sizeClass={METRO[i % METRO.length]}
              priority={i < 3}
            />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-center text-stone">
          Geen projecten in deze categorie.
        </p>
      )}
    </div>
  );
}
