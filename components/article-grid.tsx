"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { FilterDropdown } from "@/components/filter-dropdown";
import {
  AUDIENCES,
  CATEGORIES,
  FILTER_PARAMS,
  SUBCATEGORIES,
  categoryLabel,
  type TaxonomyItem,
} from "@/lib/kennisbank-taxonomy";

/**
 * Kennisbank-browser — visueel identiek aan de projecten-metro-grid (zelfde
 * dropdown-filter, zelfde tegelstijl), maar afgestemd op artikelen: één
 * cover-foto met hover-zoom (geen 3-foto-diashow) en datum/leestijd i.p.v.
 * locatie/categorie-onderschrift.
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

/** Zelfde metro-patroon als de projectengrid, voor een consistente look. */
const METRO: string[] = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-1",
];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

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
      className="inline-flex w-full border border-mist bg-white p-1 shadow-sm md:w-auto"
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
            className={`flex-1 whitespace-nowrap px-5 py-3 font-display text-sm font-medium transition-colors md:flex-none ${
              isActive ? "bg-ink text-white" : "text-stone hover:bg-paper hover:text-ink"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function Tile({
  article,
  sizeClass,
  priority,
}: {
  article: Article;
  sizeClass: string;
  priority: boolean;
}) {
  return (
    <Link
      href={article.permalink}
      className={`group relative block min-h-44 overflow-hidden bg-ink ${sizeClass}`}
    >
      {article.cover ? (
        <Image
          src={article.cover}
          alt={article.coverAlt || article.title}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        // Geen cover: nette tekst-tegel i.p.v. kapotte afbeelding.
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(171,224,0,0.18),transparent_60%)]" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-white/70">
          {[categoryLabel(article.category), `${article.readingTime} min lezen`]
            .filter(Boolean)
            .join(" · ")}
        </p>
        <h2 className="mt-0.5 font-semibold leading-snug text-white">
          {article.title}
        </h2>
        <time
          dateTime={article.date}
          className="mt-1 block text-xs text-white/60"
        >
          {formatDate(article.date)}
        </time>
      </div>
    </Link>
  );
}

export function ArticleGrid({
  articles,
  intro,
}: {
  articles: Article[];
  intro?: string;
}) {
  const { filters, setFilter, reset } = useFilters();

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
        <p className="max-w-3xl text-sm leading-relaxed text-ink/80 md:text-base">
          {intro}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
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

      <p className="mt-4 flex items-center gap-3 text-sm text-stone" aria-live="polite">
        <span>
          {visible.length} {visible.length === 1 ? "artikel" : "artikelen"}
        </span>
        {anyActive && (
          <button
            type="button"
            onClick={reset}
            className="font-medium text-ink underline decoration-lime decoration-2 underline-offset-4 hover:text-lime-dark"
          >
            Wis filters
          </button>
        )}
      </p>

      {visible.length > 0 ? (
        <div className="mt-6 grid auto-rows-[170px] grid-cols-2 gap-1.5 md:auto-rows-[220px] md:grid-cols-4">
          {visible.map((article, i) => (
            <Tile
              key={article.slug}
              article={article}
              sizeClass={METRO[i % METRO.length]}
              priority={i < 3}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center text-stone">
          <p>Nog geen artikelen met deze combinatie.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-3 font-medium text-ink underline decoration-lime decoration-2 underline-offset-4 hover:text-lime-dark"
          >
            Bekijk alle artikelen
          </button>
        </div>
      )}
    </div>
  );
}
