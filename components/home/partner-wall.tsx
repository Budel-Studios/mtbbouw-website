"use client";

import { RailControls, useScrollRail } from "@/components/slider";

/**
 * Partnermuur: blokken in rijen, om en om ingesprongen als metselwerk en
 * opgebouwd van onder naar boven. Past het niet, dan groeit de muur naar
 * rechts en scroll je horizontaal.
 *
 * Met een omschrijving, regio of website laat een blok die bij hover zien
 * (de partnerpagina); zonder blijft het een rustig blok (de homepage).
 */
export type WallItem = {
  name: string;
  role: string;
  description?: string;
  region?: string;
  url?: string;
  rel?: string;
  /** Extra regel in de hover, bijv. "Bouwde mee aan: …". */
  note?: string;
};

function hostnameOf(url?: string) {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function Tile({ item }: { item: WallItem }) {
  const host = hostnameOf(item.url);
  const rich = Boolean(item.description);

  const base = (
    <div
      className={`flex h-full flex-col justify-between p-4 sm:p-5 md:p-6 ${
        rich ? "transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0" : ""
      }`}
    >
      <span className="label-mono text-stone">{item.role}</span>
      <span className="mt-5 text-base leading-tight tracking-[-0.02em] sm:text-lg md:text-xl">
        {item.name}
      </span>
      {rich && (item.region || host) && (
        <span className="label-mono mt-3 flex justify-between gap-3 text-stone">
          <span>{item.region}</span>
          {host && <span className="truncate text-navy">{host} ↗</span>}
        </span>
      )}
    </div>
  );

  const overlay = rich && (
    <div className="absolute inset-0 flex flex-col justify-between bg-navy p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-5 md:p-6">
      <div>
        <span className="label-mono text-lime">{item.role}</span>
        <p className="mt-2 font-display text-lg font-semibold leading-tight">{item.name}</p>
        <p className="mt-2 line-clamp-3 text-sm leading-snug text-white/80">{item.description}</p>
        {item.note && <p className="mt-2 line-clamp-2 text-xs leading-snug text-lime">{item.note}</p>}
      </div>
      <span className="label-mono flex justify-between gap-3 text-white/80">
        <span>{item.region}</span>
        {host && <span className="truncate text-lime">{host} ↗</span>}
      </span>
    </div>
  );

  const cls = `group relative block h-full overflow-hidden border border-mist bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:border-ink ${
    rich ? "min-h-40 sm:min-h-44" : "min-h-24 sm:min-h-28"
  }`;

  return item.url ? (
    <a
      href={item.url}
      target="_blank"
      rel={`noopener noreferrer ${item.rel ?? ""}`.trim()}
      aria-label={`${item.name}, website openen`}
      className={cls}
    >
      {base}
      {overlay}
    </a>
  ) : (
    <div className={cls} tabIndex={rich ? 0 : undefined}>
      {base}
      {overlay}
    </div>
  );
}

export function PartnerWall({
  partners,
  rows = 3,
  label = "Onze vaste partners",
}: {
  partners: WallItem[];
  rows?: number;
  label?: string;
}) {
  const { ref, state, measure, go } = useScrollRail<HTMLDivElement>();
  const perRow = Math.ceil(partners.length / rows);
  const wall = Array.from({ length: rows }, (_, r) =>
    partners.slice(r * perRow, r * perRow + perRow)
  ).filter((row) => row.length > 0);

  return (
    <div>
      <div
        ref={ref}
        onScroll={measure}
        className="no-scrollbar -mx-5 overflow-x-auto overscroll-x-contain px-5 md:-mx-10 md:px-10 xl:-mx-14 xl:px-14"
      >
        <div className="flex w-max flex-col-reverse gap-2 py-2 pr-5 md:gap-3 md:pr-10 xl:pr-14">
          {wall.map((row, r) => (
            <ul
              key={r}
              aria-label={r === 0 ? label : undefined}
              className={`flex gap-2 md:gap-3 ${r % 2 === 1 ? "pl-[21vw] sm:pl-[14.5vw] xl:pl-[13rem]" : ""}`}
            >
              {row.map((p, i) => (
                <li
                  key={p.name}
                  className="w-[42vw] shrink-0 animate-fade-up sm:w-[29vw] xl:w-[26rem]"
                  style={{ animationDelay: `${(r * perRow + i) * 70}ms` }}
                >
                  <Tile item={p} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <RailControls state={state} onGo={(dir) => go(dir)} />
    </div>
  );
}
