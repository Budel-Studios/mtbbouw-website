"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FilterDropdown } from "@/components/filter-dropdown";

/**
 * Kennisbank-browser — visueel identiek aan de projecten-metro-grid (zelfde
 * dropdown-filter, zelfde tegelstijl), maar afgestemd op artikelen: één
 * cover-foto met hover-zoom (geen 3-foto-diashow) en datum/leestijd i.p.v.
 * locatie/categorie-onderschrift.
 */
type Article = {
  slug: string;
  permalink: string;
  title: string;
  description: string;
  category?: string;
  date: string;
  readingTime: number;
  cover?: string;
  coverAlt?: string;
};

const ALL = "Alle artikelen";

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
          {[article.category, `${article.readingTime} min lezen`]
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
  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(articles.map((a) => a.category).filter((c): c is string => !!c))
    ).sort((a, b) => a.localeCompare(b, "nl"));
    return [ALL, ...unique];
  }, [articles]);

  const [active, setActive] = useState(ALL);

  const visible =
    active === ALL ? articles : articles.filter((a) => a.category === active);

  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        {intro && (
          <p className="max-w-3xl text-sm leading-relaxed text-ink/80 md:text-base">
            {intro}
          </p>
        )}

        {categories.length > 1 && (
          <FilterDropdown
            label="Filter op artikelen"
            options={categories}
            active={active}
            onChange={setActive}
          />
        )}
      </div>

      {visible.length > 0 ? (
        <div className="mt-10 grid auto-rows-[170px] grid-cols-2 gap-1.5 md:auto-rows-[220px] md:grid-cols-4">
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
        <p className="mt-12 text-center text-stone">
          Geen artikelen in deze categorie.
        </p>
      )}
    </div>
  );
}
