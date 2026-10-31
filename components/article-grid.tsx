"use client";

import { useCallback, useMemo, useState, useSyncExternalStore } from "react";
import { FilterDropdown } from "@/components/filter-dropdown";
import { ProjectCards, ProjectRows } from "@/components/project/project-cards";
import { ViewToggle, type View } from "@/components/project-grid";
import { articleToCard } from "@/lib/article-slide";
import {
  AUDIENCES,
  CATEGORIES,
  FILTER_PARAMS,
  SUBCATEGORIES,
  type TaxonomyItem,
} from "@/lib/kennisbank-taxonomy";

/**
 * Kennisbank-browser met exact dezelfde kaarten en hetzelfde raster als
 * /projecten (ProjectCards): cover met hover-zoom, displaykop en mono-meta
 * met leestijd en onderwerp. Het nieuwste artikel krijgt een brede kaart.
 *
 * Zichtbaar filter: onderwerp (dropdown), plus een wissel tussen raster en
 * lijst. Bouwdeel en doelgroep werken nog via de URL
 * (?onderwerp=verduurzamen&bouwdeel=daken&voor=thuis), zodat links vanuit de
 * kluswijzer of een artikel blijven werken.
 */
type Article = {
  slug: string;
  permalink: string;
  title: string;
  description: string;
  category: string;
  subcategories: string[];
  audience: string[];
  date: string;
  readingTime: number;
  cover?: string;
  coverAlt?: string;
};

type Filters = { category: string; subcategory: string; audience: string };

const ALL_CATEGORIES = "Alle onderwerpen";

/* ---------- Filters in de URL ----------------------------------------- */

// De querystring is de bron van waarheid. useSyncExternalStore leest hem
// zonder hydration-mismatch (server ziet "geen filters") en reageert op
// terug/vooruit in de browser.
const URL_EVENT = "kennisbank-filters";

function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener(URL_EVENT, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(URL_EVENT, onChange);
  };
}

const getSearch = () => window.location.search;
const getServerSearch = () => "";

function pick(list: readonly TaxonomyItem[], value: string | null) {
  return value && list.some((i) => i.slug === value) ? value : "";
}

function parseFilters(search: string): Filters {
  const params = new URLSearchParams(search);
  return {
    category: pick(CATEGORIES, params.get(FILTER_PARAMS.category)),
    subcategory: pick(SUBCATEGORIES, params.get(FILTER_PARAMS.subcategory)),
    audience: pick(AUDIENCES, params.get(FILTER_PARAMS.audience)),
  };
}

function writeFilters(next: Filters) {
  const params = new URLSearchParams(window.location.search);
  (Object.keys(FILTER_PARAMS) as (keyof Filters)[]).forEach((key) => {
    if (next[key]) params.set(FILTER_PARAMS[key], next[key]);
    else params.delete(FILTER_PARAMS[key]);
  });
  const query = params.toString();
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}${query ? `?${query}` : ""}`
  );
  window.dispatchEvent(new Event(URL_EVENT));
}

function useFilters() {
  const search = useSyncExternalStore(subscribe, getSearch, getServerSearch);
  const filters = useMemo(() => parseFilters(search), [search]);
  const setFilter = useCallback(
    (key: keyof Filters, value: string) =>
      writeFilters({ ...parseFilters(window.location.search), [key]: value }),
    []
  );
  const reset = useCallback(
    () => writeFilters({ category: "", subcategory: "", audience: "" }),
    []
  );
  return { filters, setFilter, reset };
}

/* ---------- UI --------------------------------------------------------- */

export function ArticleGrid({
  articles,
  intro,
  filterable = true,
}: {
  articles: Article[];
  intro?: string;
  /** false op hubpagina's: daar is de selectie al gemaakt, dus geen filter. */
  filterable?: boolean;
}) {
  const { filters: urlFilters, setFilter, reset } = useFilters();
  const filters = filterable
    ? urlFilters
    : { category: "", subcategory: "", audience: "" };
  const [view, setView] = useState<View>("grid");

  // Alleen onderwerpen waar ook echt artikelen onder staan, in de vaste
  // volgorde van de taxonomie (niet alfabetisch).
  const categoryOptions = useMemo(
    () => CATEGORIES.filter((c) => articles.some((a) => a.category === c.slug)),
    [articles]
  );

  const visible = articles.filter(
    (a) =>
      (!filters.category || a.category === filters.category) &&
      (!filters.subcategory || a.subcategories.includes(filters.subcategory)) &&
      (!filters.audience || a.audience.includes(filters.audience))
  );

  // Bouwdeel en doelgroep kunnen nog via een link meekomen (bijv. vanuit de
  // kluswijzer); die tonen we als regel met "Wis filters".
  const hiddenFilters = [
    filters.subcategory && SUBCATEGORIES.find((s) => s.slug === filters.subcategory)?.label,
    filters.audience && AUDIENCES.find((s) => s.slug === filters.audience)?.label,
  ].filter(Boolean);

  const labelFor = (slug: string) =>
    CATEGORIES.find((c) => c.slug === slug)?.label ?? ALL_CATEGORIES;
  const slugFor = (label: string) =>
    CATEGORIES.find((c) => c.label === label)?.slug ?? "";

  const cards = visible.map(articleToCard);

  return (
    <div>
      {intro && (
        <p className="max-w-3xl text-base leading-relaxed text-stone">
          {intro}
        </p>
      )}

      <div className="flex flex-col gap-3 border-y border-mist py-4 md:flex-row md:items-center md:justify-between">
        <p className="label-mono flex flex-wrap items-center gap-3 text-stone" aria-live="polite">
          <span>
            {visible.length} {visible.length === 1 ? "artikel" : "artikelen"}
          </span>
          {hiddenFilters.length > 0 && <span>· {hiddenFilters.join(" · ")}</span>}
          {filterable && (filters.category || hiddenFilters.length > 0) && (
            <button
              type="button"
              onClick={reset}
              className="text-navy underline decoration-lime underline-offset-4 hover:text-navy-dark"
            >
              Wis filters
            </button>
          )}
        </p>
        <div className="flex gap-3">
          {filterable && categoryOptions.length > 1 && (
            <FilterDropdown
              label="Filter op onderwerp"
              options={[ALL_CATEGORIES, ...categoryOptions.map((c) => c.label)]}
              active={labelFor(filters.category)}
              onChange={(label) => setFilter("category", slugFor(label))}
            />
          )}
          <ViewToggle view={view} onChange={setView} />
        </div>
      </div>

      {visible.length > 0 ? (
        <div className="mt-12 md:mt-16">
          {view === "grid" ? (
            <ProjectCards items={cards} />
          ) : (
            <ProjectRows
              items={cards}
              itemLabel="Artikel"
              columns={{ location: "Leestijd", category: "Onderwerp", extra: "Datum" }}
            />
          )}
        </div>
      ) : (
        <div className="mt-12 text-center text-stone">
          <p>Nog geen artikelen met deze combinatie.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-3 font-medium text-ink underline decoration-lime decoration-2 underline-offset-4 hover:text-navy"
          >
            Bekijk alle artikelen
          </button>
        </div>
      )}
    </div>
  );
}
