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
  featured?: boolean;
  images: { src: string; alt: string }[]; // cover eerst, dan gallery (max 3)
};

const ALL = "Alle projecten";

/**
 * Tegelgroottes. Deze volgen het bélang van een project, niet zijn positie:
 * uitgelichte projecten krijgen de grote tegel, de rest houdt een rustig
 * ritme. Op mobiel (2 kolommen) worden GROOT en BREED volle-breedte rijen.
 */
const GROOT = "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
const BREED = "col-span-2 row-span-1 md:col-span-2 md:row-span-1";
const UNIT = "md:col-span-1 md:row-span-1";

/**
 * Wijst per zichtbaar project een tegelgrootte toe.
 * - uitgelicht → groot (max 2, anders domineert één categorie het raster)
 * - extra uitgelicht → breed
 * - overige → elke 5e breed, rest 1×1
 * - géén uitgelicht in beeld (bv. na filteren) → eerste tegel groot, zonder
 *   chip, zodat het raster nooit een vlak veld van gelijke blokjes wordt.
 */
function sizeClasses(items: Project[]): string[] {
  let bigs = 0;
  let plain = 0;
  const spans = items.map((p) => {
    if (p.featured) {
      if (bigs < 2) {
        bigs++;
        return GROOT;
      }
      return BREED;
    }
    plain++;
    return plain % 5 === 0 ? BREED : UNIT;
  });
  if (bigs === 0 && spans.length > 2) spans[0] = GROOT;
  return spans;
}

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

      {project.featured && (
        <span className="absolute left-3 top-3 z-10 inline-flex items-center bg-lime px-2.5 py-1 text-[11px] font-bold text-ink md:px-3 md:py-1.5 md:text-xs">
          Uitgelicht
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-white/70">
          {[project.category, project.location].filter(Boolean).join(" · ")}
        </p>
        <h3 className="mt-0.5 font-semibold leading-snug text-white">
          {project.title}
        </h3>
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
  spotlightSlug,
}: {
  projects: Project[];
  intro?: string;
  /** Project dat al als spotlight boven het raster staat — dubbelt niet. */
  spotlightSlug?: string;
}) {
  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(projects.map((p) => p.category).filter((c): c is string => !!c))
    ).sort((a, b) => a.localeCompare(b, "nl"));
    return [ALL, ...unique];
  }, [projects]);

  const [active, setActive] = useState(ALL);

  // In het volledige overzicht laten we het spotlight-project weg (het staat er
  // al groot boven). Zodra er gefilterd wordt tonen we het wél: anders zou juist
  // in "Horeca-afbouw" het beste horecaproject ontbreken.
  const visible = useMemo(() => {
    const base =
      active === ALL
        ? projects.filter((p) => p.slug !== spotlightSlug)
        : projects.filter((p) => p.category === active);
    // Uitgelicht werk vooraan (zoals in de homepage-carrousel), daarbinnen
    // blijft de datumvolgorde staan — anders belandt een grote tegel
    // halverwege het raster en valt de uitlichting juist niet op.
    return [...base.filter((p) => p.featured), ...base.filter((p) => !p.featured)];
  }, [projects, active, spotlightSlug]);

  const spans = useMemo(() => sizeClasses(visible), [visible]);

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
        // grid-flow-row-dense vult de gaten die de gemengde spans achterlaten.
        <div className="mt-10 grid auto-rows-[170px] grid-flow-row-dense grid-cols-2 gap-1.5 md:auto-rows-[220px] md:grid-cols-4">
          {visible.map((project, i) => (
            <Tile
              key={project.slug}
              project={project}
              sizeClass={spans[i]}
              priority={!spotlightSlug && i < 2}
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
