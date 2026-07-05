"use client";

import { useState } from "react";
import { MapPinIcon } from "@/components/icons";
import {
  allPartners,
  partnerCategories,
  bucketMeta,
  categoryToBucket,
  type Bucket,
  type Partner,
} from "@/lib/partners";

/**
 * Regionale-partners browser — replica van de Lovable "samen-bouwen"-pagina in
 * MTB-stijl: tabs per bucket + een metro-grid van partnertegels die bij hover
 * de omschrijving tonen. Externe links = dofollow backlinks (nieuw tabblad).
 */
function ExternalIcon() {
  return (
    <svg
      className="h-3 w-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function hostnameOf(url?: string) {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function PartnerTile({ partner }: { partner: Partner }) {
  const host = hostnameOf(partner.url);
  const span = partner.featured
    ? "sm:col-span-2 sm:row-span-2"
    : partner.size === 2
      ? "sm:col-span-2"
      : "";

  const inner = (
    <>
      {/* Basisweergave */}
      <div className="absolute inset-0 flex flex-col justify-between p-5 transition-opacity duration-200 group-hover:opacity-0">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-lime-dark">
            {partnerCategories[partner.category]}
          </span>
          <p className="mt-2 font-display text-lg font-bold leading-tight text-ink md:text-xl">
            {partner.name}
          </p>
        </div>
        <div className="flex items-end justify-between gap-3 text-xs text-ink/60">
          {partner.region ? (
            <span className="inline-flex items-center gap-1">
              <MapPinIcon className="h-3 w-3" /> {partner.region}
            </span>
          ) : (
            <span />
          )}
          {host && (
            <span className="inline-flex items-center gap-1 font-medium text-ink/70">
              {host}
              <ExternalIcon />
            </span>
          )}
        </div>
      </div>

      {/* Hover-overlay met omschrijving */}
      <div className="absolute inset-0 flex flex-col justify-between bg-ink p-5 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-lime">
            {partnerCategories[partner.category]}
          </span>
          <p className="mt-2 font-display text-lg font-bold leading-tight md:text-xl">
            {partner.name}
          </p>
          <p className="mt-3 text-sm leading-snug text-white/70">
            {partner.description}
          </p>
        </div>
        <div className="flex items-end justify-between gap-3 text-xs text-white/70">
          {partner.region ? (
            <span className="inline-flex items-center gap-1">
              <MapPinIcon className="h-3 w-3 text-lime" /> {partner.region}
            </span>
          ) : (
            <span />
          )}
          {host && (
            <span className="inline-flex items-center gap-1 font-medium text-lime">
              {host}
              <ExternalIcon />
            </span>
          )}
        </div>
      </div>
    </>
  );

  const cls = `group relative block overflow-hidden border border-mist bg-white transition-colors hover:border-ink ${span}`;

  return partner.url ? (
    <a
      href={partner.url}
      target="_blank"
      rel={`noopener noreferrer ${partner.rel || ""}`.trim()}
      aria-label={`${partner.name} — website openen`}
      className={cls}
    >
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

const TABS: Bucket[] = ["onderaannemers", "toeleveranciers", "partners"];

export function RegionalePartnersBrowser() {
  const [active, setActive] = useState<Bucket>("onderaannemers");

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {TABS.map((t) => {
          const isActive = active === t;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              aria-pressed={isActive}
              className={`border px-5 py-2.5 font-display text-sm font-semibold transition-colors ${
                isActive
                  ? "border-ink bg-ink text-white"
                  : "border-mist bg-transparent text-ink hover:border-ink hover:bg-paper"
              }`}
            >
              {bucketMeta[t].title}
            </button>
          );
        })}
      </div>

      {/* Alle buckets staan server-gerenderd in de HTML (SEO/GEO: partnernamen,
          omschrijvingen én backlinks crawlbaar); tabs togglen alleen zichtbaarheid. */}
      {TABS.map((bucket) => {
        const items = allPartners.filter(
          (p) => categoryToBucket[p.category] === bucket
        );
        const meta = bucketMeta[bucket];
        return (
          <div key={bucket} className={active === bucket ? "" : "hidden"}>
            <div className="mt-10 flex items-end justify-between gap-6 border-b border-mist pb-4">
              <div>
                <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
                  {meta.title}
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-stone">{meta.intro}</p>
              </div>
              <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-stone">
                {items.length} {items.length === 1 ? "partner" : "partners"}
              </span>
            </div>

            <div className="mt-6 grid auto-rows-[170px] grid-cols-2 gap-3 md:auto-rows-[180px] md:grid-cols-4">
              {items.map((p) => (
                <PartnerTile key={p.name} partner={p} />
              ))}
            </div>
          </div>
        );
      })}

      <p className="mt-10 text-xs text-stone">
        Externe links openen in een nieuw tabblad. We linken alleen naar partijen
        waarmee we daadwerkelijk samenwerken.
      </p>
    </section>
  );
}
