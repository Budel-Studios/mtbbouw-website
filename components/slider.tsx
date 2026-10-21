"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Horizontale swipe-slider met scroll-snap, een dunne lime voortgangsbalk en
 * vorige/volgende-knoppen. Kinderen zijn <li>-elementen met een eigen breedte
 * (bijv. "w-[82%] sm:w-[48%]"). Met `until` wordt hij vanaf dat breekpunt een
 * gewoon raster (geef de kolommen mee via className).
 */
export function Slider({
  children,
  label,
  className = "",
  until,
  tone = "default",
}: {
  children: ReactNode;
  label: string;
  className?: string;
  until?: "md" | "lg";
  tone?: "default" | "inverse";
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [state, setState] = useState({ thumb: 1, offset: 0, atStart: true, atEnd: false });

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const max = scrollWidth - clientWidth;
    setState({
      thumb: scrollWidth > 0 ? Math.min(1, clientWidth / scrollWidth) : 1,
      offset: scrollWidth > 0 ? scrollLeft / scrollWidth : 0,
      atStart: scrollLeft <= 4,
      atEnd: scrollLeft >= max - 4,
    });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  const go = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    const first = el.querySelector("li");
    const step = first ? first.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const scrollable = state.thumb < 0.999;
  const inverse = tone === "inverse";
  const layout =
    until === "md"
      ? "-mx-5 scroll-px-5 px-5 md:mx-0 md:grid md:snap-none md:overflow-visible md:px-0"
      : until === "lg"
        ? "-mx-5 scroll-px-5 px-5 md:-mx-10 md:scroll-px-10 md:px-10 lg:mx-0 lg:grid lg:snap-none lg:overflow-visible lg:px-0"
        : "-mx-5 scroll-px-5 px-5 md:-mx-10 md:scroll-px-10 md:px-10 xl:-mx-14 xl:scroll-px-14 xl:px-14";

  return (
    <div>
      <ul
        ref={ref}
        aria-label={label}
        onScroll={measure}
        className={`no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain md:gap-6 ${layout} ${className}`}
      >
        {children}
      </ul>

      <div
        className={`mt-8 flex items-center gap-6 transition-opacity ${
          scrollable ? "" : "pointer-events-none opacity-0"
        } ${until === "md" ? "md:hidden" : until === "lg" ? "lg:hidden" : ""}`}
        aria-hidden={!scrollable}
      >
        <div className={`relative h-px flex-1 ${inverse ? "bg-inverse-border" : "bg-ink/15"}`}>
          <span
            className="absolute top-1/2 h-[3px] -translate-y-1/2 bg-lime transition-[left] duration-150"
            style={{ width: `${state.thumb * 100}%`, left: `${state.offset * 100}%` }}
          />
        </div>
        <div className="flex gap-2">
          {([-1, 1] as const).map((dir) => {
            const disabled = dir === -1 ? state.atStart : state.atEnd;
            return (
              <button
                key={dir}
                type="button"
                onClick={() => go(dir)}
                disabled={disabled}
                aria-label={dir === -1 ? "Vorige" : "Volgende"}
                className={`grid size-11 cursor-pointer place-items-center border transition-colors disabled:cursor-default disabled:opacity-30 ${
                  inverse
                    ? "border-inverse-border hover:border-white enabled:hover:bg-white enabled:hover:text-ink"
                    : "border-navy/25 hover:border-navy enabled:hover:bg-navy enabled:hover:text-white"
                }`}
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {dir === -1 ? <path d="M19 12H5M12 19l-7-7 7-7" /> : <path d="M5 12h14M12 5l7 7-7 7" />}
                </svg>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
