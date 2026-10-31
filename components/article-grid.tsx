"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { FilterDropdown } from "@/components/filter-dropdown";
import { ProjectCards } from "@/components/project/project-cards";
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
 * Drie filters, gecombineerd (EN): voor wie, onderwerp en bouwdeel. De actieve
 * filters staan in de URL (?voor=thuis&onderwerp=verduurzamen&bouwdeel=daken),
 * zodat elke gefilterde weergave deelbaar is en de kluswijzer of een artikel
 * er direct naartoe kan linken.
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
const ALL_SUBCATEGORIES = "Alle bouwdelen";

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

function AudienceToggle({
  active,
  onChange,
}: {
  active: string;
  onChange: (value: string) => void;
}) {
  const options = [{ slug: "", label: "Alles" }, ...AUDIENCES];
  return (
    <div
      role="radiogroup"
      aria-label="Voor wie"
      className="inline-flex w-full gap-1 md:w-auto"
    >
      {options.map((opt) => {
        const isActive = opt.slug === active;
        return (
          <button
            key={opt.slug || "all"}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(opt.slug)}
            className={`label-mono flex-1 whitespace-nowrap px-3 py-2 transition-colors md:flex-none ${
              isActive ? "bg-navy text-white" : "text-stone hover:text-navy"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export function ArticleGrid({
  articles,
  intro,
  filterable = true,
}: {
  articles: Article[];
  intro?: string;
  /** false op hubpagina's: daar is de selectie al gemaakt, dus geen filters. */
  filterable?: boolean;
}) {
  const { filters: urlFilters, setFilter, reset } = useFilters();
  const filters = filterable
    ? urlFilters
    : { category: "", subcategory: "", audience: "" };

  // Alleen opties tonen waar ook echt artikelen onder staan, in de vaste
  // volgorde van de taxonomie (niet alfabetisch).
  const categoryOptions = useMemo(
    () => CATEGORIES.filter((c) => articles.some((a) => a.category === c.slug)),
    [articles]
  );
  const subcategoryOptions = useMemo(
    () =>
      SUBCATEGORIES.filter((s) =>
        articles.some((a) => a.subcategories.includes(s.slug))
      ),
    [articles]
  );

  const visible = articles.filter(
    (a) =>
      (!filters.category || a.category === filters.category) &&
      (!filters.subcategory || a.subcategories.includes(filters.subcategory)) &&
      (!filters.audience || a.audience.includes(filters.audience))
  );

  const anyActive = Boolean(
    filters.category || filters.subcategory || filters.audience
  );

  const labelFor = (list: readonly TaxonomyItem[], slug: string, all: string) =>
    list.find((i) => i.slug === slug)?.label ?? all;
  const slugFor = (list: readonly TaxonomyItem[], label: string) =>
    list.find((i) => i.label === label)?.slug ?? "";

  return (
    <div>
      {intro && (
        <p className="max-w-3xl text-base leading-relaxed text-stone">
          {intro}
        </p>
      )}

      {filterable && (
        <div className="mt-8 flex flex-col gap-3 border-y border-mist py-3 lg:flex-row lg:items-center lg:justify-between">
          <AudienceToggle
            active={filters.audience}
            onChange={(v) => setFilter("audience", v)}
          />

          <div className="flex flex-col gap-3 md:flex-row">
            {categoryOptions.length > 1 && (
              <FilterDropdown
                label="Filter op onderwerp"
                options={[ALL_CATEGORIES, ...categoryOptions.map((c) => c.label)]}
                active={labelFor(CATEGORIES, filters.category, ALL_CATEGORIES)}
                onChange={(label) =>
                  setFilter("category", slugFor(CATEGORIES, label))
                }
              />
            )}
            {subcategoryOptions.length > 1 && (
              <FilterDropdown
                label="Filter op bouwdeel"
                options={[
                  ALL_SUBCATEGORIES,
                  ...subcategoryOptions.map((s) => s.label),
                ]}
                active={labelFor(SUBCATEGORIES, filters.subcategory, ALL_SUBCATEGORIES)}
                onChange={(label) =>
                  setFilter("subcategory", slugFor(SUBCATEGORIES, label))
                }
              />
            )}
          </div>
        </div>
      )}

      {filterable && (
        <p className="label-mono mt-4 flex items-center gap-3 text-stone" aria-live="polite">
          <span>
            {visible.length} {visible.length === 1 ? "artikel" : "artikelen"}
          </span>
          {anyActive && (
            <button
              type="button"
              onClick={reset}
              className="text-navy underline decoration-lime underline-offset-4 hover:text-navy-dark"
            >
              Wis filters
            </button>
          )}
        </p>
      )}

      {visible.length > 0 ? (
        <div className="mt-10">
          <ProjectCards items={visible.map(articleToCard)} />
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
