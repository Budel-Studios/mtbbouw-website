"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";

export type Phase = { title: string; text: string; tempo: readonly string[] };

/**
 * Illustratief faseringsoverzicht: vier selecteerbare stappen (tabs). Alle
 * panelen staan in de HTML; de statische uitleg op de pagina blijft leidend.
 * Bediening met muis, touch en pijltjestoetsen (WAI-ARIA tabs-patroon).
 */
export function PhaseExplorer({ phases }: { phases: readonly Phase[] }) {
  const [active, setActive] = useState(0);
  const base = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (i: number) => {
    const next = (i + phases.length) % phases.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusTab(i + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusTab(i - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(phases.length - 1);
    }
  };

  return (
    <div className="border border-mist bg-white">
      <div
        role="tablist"
        aria-label="Fasen naar een opening"
        className="grid grid-cols-2 border-b border-mist md:grid-cols-4"
      >
        {phases.map((p, i) => {
          const on = i === active;
          return (
            <button
              key={p.title}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`${base}-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls={`${base}-panel-${i}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`relative cursor-pointer border-mist px-4 py-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-navy md:px-6 md:py-5 [&:not(:last-child)]:border-r ${
                on ? "bg-paper text-ink" : "text-stone hover:bg-paper/60 hover:text-ink"
              }`}
            >
              <span className={`label-num block ${on ? "text-navy" : "text-stone"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 block font-semibold leading-snug">{p.title}</span>
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-0.5 transition-colors ${on ? "bg-navy" : "bg-transparent"}`}
              />
            </button>
          );
        })}
      </div>
      {phases.map((p, i) => (
        <div
          key={p.title}
          id={`${base}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${base}-tab-${i}`}
          hidden={i !== active}
          className="grid gap-8 p-6 md:grid-cols-12 md:p-10"
        >
          <p className="leading-relaxed text-ink md:col-span-7">{p.text}</p>
          <div className="md:col-span-5">
            <p className="label-mono text-stone">Wat het tempo bepaalt</p>
            <ul className="mt-3 space-y-2 text-[15px] text-ink">
              {p.tempo.map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden="true" className="text-navy">·</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
