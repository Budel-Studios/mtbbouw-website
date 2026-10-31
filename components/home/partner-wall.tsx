"use client";

import { RailControls, useScrollRail } from "@/components/slider";

/**
 * Partnermuur op de homepage: altijd drie rijen blokken, om en om
 * ingesprongen als metselwerk, en opgebouwd van onder naar boven. Komen er
 * partners bij, dan groeit de muur naar rechts en scroll je horizontaal.
 */
export function PartnerWall({
  partners,
  rows = 3,
}: {
  partners: { name: string; role: string }[];
  rows?: number;
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
              aria-label={r === 0 ? "Onze vaste partners" : undefined}
              className={`flex gap-2 md:gap-3 ${r % 2 === 1 ? "pl-[21vw] sm:pl-[14.5vw] xl:pl-[13rem]" : ""}`}
            >
              {row.map((p, i) => (
                <li
                  key={p.name}
                  className="w-[42vw] shrink-0 animate-fade-up sm:w-[29vw] xl:w-[26rem]"
                  style={{ animationDelay: `${(r * perRow + i) * 70}ms` }}
                >
                  <div className="flex h-full min-h-24 flex-col justify-between border border-mist bg-paper p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink sm:min-h-28 sm:p-5 md:p-7">
                    <span className="label-mono text-stone">{p.role}</span>
                    <span className="mt-5 text-base leading-tight tracking-[-0.02em] sm:text-lg md:text-xl">
                      {p.name}
                    </span>
                  </div>
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
