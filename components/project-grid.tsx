"use client";

import { useMemo, useState } from "react";
import { FilterDropdown } from "@/components/filter-dropdown";
import {
  ProjectCards,
  ProjectRows,
  type ProjectCardData,
} from "@/components/project/project-cards";

/**
 * Projecten-browser voor /projecten: een rustige balk met het aantal, een
 * dropdown-filter op soort werk en een wissel tussen raster en lijst.
 * Het raster verspringt in rijen van 3, 1 en 2 kaarten.
 */
const ALL = "Alle projecten";
export type View = "grid" | "list";

function GridIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
    </svg>
  );
}

/** Wissel tussen raster- en lijstweergave; gedeeld met de kennisbank. */
export function ViewToggle({ view, onChange }: { view: View; onChange: (v: View) => void }) {
  const options: { value: View; label: string; icon: React.ReactNode }[] = [
    { value: "grid", label: "Rasterweergave", icon: <GridIcon /> },
    { value: "list", label: "Lijstweergave", icon: <ListIcon /> },
  ];
  return (
    <div className="flex shrink-0 items-center border border-mist bg-white">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          aria-label={o.label}
          aria-pressed={view === o.value}
          className={`grid size-11 cursor-pointer place-items-center transition-colors ${
            view === o.value ? "bg-navy text-white" : "text-stone hover:text-ink"
          }`}
        >
          {o.icon}
        </button>
      ))}
    </div>
  );
}

export function ProjectGrid({ projects }: { projects: ProjectCardData[] }) {
  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(projects.map((p) => p.category).filter((c): c is string => !!c))
    ).sort((a, b) => a.localeCompare(b, "nl"));
    return [ALL, ...unique];
  }, [projects]);

  const [active, setActive] = useState(ALL);
  const [view, setView] = useState<View>("grid");

  const visible = useMemo(
    () => (active === ALL ? projects : projects.filter((p) => p.category === active)),
    [projects, active]
  );

  return (
    <section aria-label="Projecten" className="container-page pb-20 md:pb-28">
      <div className="flex flex-col gap-3 border-y border-mist py-4 md:flex-row md:items-center md:justify-between">
        <p className="label-mono text-stone" aria-live="polite">
          {visible.length} {visible.length === 1 ? "project" : "projecten"}
        </p>
        <div className="flex gap-3">
          <FilterDropdown
            label="Filter op soort werk"
            options={categories}
            active={active}
            onChange={setActive}
          />
          <ViewToggle view={view} onChange={setView} />
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        {visible.length === 0 ? (
          <p className="text-stone">Geen projecten in deze categorie.</p>
        ) : view === "grid" ? (
          <ProjectCards items={visible} />
        ) : (
          <ProjectRows items={visible} />
        )}
      </div>
    </section>
  );
}
