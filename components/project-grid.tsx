"use client";

import { useMemo, useState } from "react";
import {
  ProjectCards,
  ProjectRows,
  type ProjectCardData,
} from "@/components/project/project-cards";

/**
 * Projecten-browser voor /projecten: sticky balk met categoriefilter (met
 * aantallen) en een wissel tussen raster- en lijstweergave. Het raster is
 * foto-eerst; de eerste kaart loopt over de volle breedte.
 */
const ALL = "Alle";
type View = "grid" | "list";

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

function ViewButton({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`grid size-9 cursor-pointer place-items-center transition-colors ${
        active ? "bg-ink text-paper" : "text-stone hover:text-ink"
      }`}
    >
      {children}
    </button>
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
    <>
      <div className="sticky top-16 z-30 border-y border-mist bg-paper/90 backdrop-blur-md">
        <div className="container-page flex items-center justify-between gap-6 py-4">
          <div
            role="group"
            aria-label="Filter op type project"
            className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto"
          >
            {categories.map((c) => {
              const count =
                c === ALL ? projects.length : projects.filter((p) => p.category === c).length;
              const isActive = active === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={isActive}
                  className={`label-mono shrink-0 cursor-pointer border-b-2 px-3 py-2 transition-colors ${
                    isActive ? "border-lime text-ink" : "border-transparent text-stone hover:text-ink"
                  }`}
                >
                  {c}
                  <sup className="ml-1 opacity-60">{count}</sup>
                </button>
              );
            })}
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <ViewButton active={view === "grid"} onClick={() => setView("grid")} label="Rasterweergave">
              <GridIcon />
            </ViewButton>
            <ViewButton active={view === "list"} onClick={() => setView("list")} label="Lijstweergave">
              <ListIcon />
            </ViewButton>
          </div>
        </div>
      </div>

      <section aria-label="Projecten">
        <div className="container-page py-14 md:py-20">
        {visible.length === 0 ? (
          <p className="text-stone">Geen projecten in deze categorie.</p>
        ) : view === "grid" ? (
          <ProjectCards items={visible} />
        ) : (
          <ProjectRows items={visible} />
        )}
        </div>
      </section>
    </>
  );
}
