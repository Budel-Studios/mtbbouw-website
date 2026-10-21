"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Projectkaarten in de minimalistische, foto-eerst stijl. Gedeeld door de
 * homepage ("Recent werk uit Twente") en /projecten.
 *
 * - ProjectCards: editoriaal raster, 2 kolommen; de eerste kaart (uitgelicht)
 *   loopt over de volle breedte.
 * - ProjectRows: compacte lijstweergave met miniatuur.
 *
 * Bij hover bladert een kaart automatisch door max. 3 projectfoto's (cover +
 * galerij), zodat je een project kunt "previewen" zonder het te openen.
 */
export type ProjectCardData = {
  slug: string;
  permalink: string;
  title: string;
  description: string;
  category?: string;
  location?: string;
  clientType?: string;
  featured?: boolean;
  images: { src: string; alt: string; position?: string }[]; // cover eerst, dan galerij (max 3)
};

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

/** Fotovlak met hover-diashow (crossfade) en een dun voortgangsbalkje. */
function PhotoStack({
  images,
  sizes,
  priority,
  className,
}: {
  images: { src: string; alt: string; position?: string }[];
  sizes: string;
  priority: boolean;
  className: string;
}) {
  const list = images.slice(0, 3);
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  const stop = () => {
    if (timer.current !== null) window.clearInterval(timer.current);
    timer.current = null;
  };
  const start = () => {
    stop();
    if (list.length < 2) return;
    setIndex(1);
    timer.current = window.setInterval(
      () => setIndex((i) => (i + 1) % list.length),
      1400
    );
  };
  useEffect(() => stop, []);

  return (
    <div
      className={`relative overflow-hidden bg-mist ${className}`}
      onMouseEnter={start}
      onMouseLeave={() => {
        stop();
        setIndex(0);
      }}
    >
      {list.map((img, i) => (
        <Image
          key={img.src + i}
          src={img.src}
          alt={i === 0 ? img.alt : ""}
          fill
          sizes={sizes}
          priority={priority && i === 0}
          style={img.position ? { objectPosition: img.position } : undefined}
          className={`img-zoom object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {list.length > 1 && (
        <div
          aria-hidden="true"
          className="absolute bottom-4 right-4 flex gap-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          {list.map((_, i) => (
            <span
              key={i}
              className={`block h-0.5 w-5 transition-colors duration-500 ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectCards({
  items,
  headingLevel = "h2",
  featureFirst = true,
  priorityCount = 2,
}: {
  items: ProjectCardData[];
  headingLevel?: "h2" | "h3";
  /** Eerste kaart over de volle breedte (bij meer dan één project). */
  featureFirst?: boolean;
  priorityCount?: number;
}) {
  const Heading = headingLevel;
  return (
    <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24">
      {items.map((p, i) => {
        // Eerste kaart breed; bij een oneven rest ook de laatste, zodat het
        // raster nooit eindigt met één losse halve kaart.
        const lastOdd = i === items.length - 1 && i > 0 && (items.length - 1) % 2 === 1;
        const wide = featureFirst && items.length > 1 && (i === 0 || lastOdd);
        return (
          <Link
            key={p.slug}
            href={p.permalink}
            className={`group block animate-fade-up ${wide ? "md:col-span-2" : ""}`}
            style={{ animationDelay: `${Math.min(i, 4) * 80}ms` }}
          >
            <PhotoStack
              images={p.images}
              sizes={wide ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
              priority={i < priorityCount}
              className={wide ? "aspect-[4/3] md:aspect-[21/9]" : "aspect-[4/3]"}
            />
            <div className="mt-5 grid grid-cols-12 items-start gap-x-4 gap-y-3">
              <div className="col-span-12 flex flex-wrap gap-x-3 pt-1.5 md:order-3 md:col-span-3 md:flex-col md:items-end md:gap-1 md:text-right">
                {p.location && <span className="label-mono text-ink">{p.location}</span>}
                {p.category && <span className="label-mono text-stone">{p.category}</span>}
              </div>
              <div className="col-span-12 md:order-2 md:col-span-9">
                <Heading
                  className={`display ${
                    wide ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
                  }`}
                >
                  {p.title}
                </Heading>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-stone">
                  {p.description}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function ProjectRows({ items }: { items: ProjectCardData[] }) {
  return (
    <div className="border-t border-ink">
      <div className="label-mono hidden grid-cols-12 gap-4 border-b border-mist py-3 text-stone md:grid">
        <span className="col-span-6">Project</span>
        <span className="col-span-2">Locatie</span>
        <span className="col-span-2">Werkzaamheden</span>
        <span className="col-span-1">Klant</span>
        <span className="col-span-1" />
      </div>
      {items.map((p) => (
        <Link
          key={p.slug}
          href={p.permalink}
          className="group grid grid-cols-12 items-center gap-4 border-b border-mist py-5 transition-colors hover:bg-white"
        >
          <div className="col-span-12 flex items-center gap-5 md:col-span-6">
            <div className="relative hidden h-14 w-20 shrink-0 overflow-hidden bg-mist sm:block">
              {p.images[0] && (
                <Image
                  src={p.images[0].src}
                  alt=""
                  fill
                  sizes="80px"
                  className="img-zoom object-cover"
                />
              )}
            </div>
            <span className="display text-xl md:text-2xl">{p.title}</span>
          </div>
          <span className="label-mono col-span-6 md:col-span-2">
            {p.location}
          </span>
          <span className="label-mono col-span-4 text-stone md:col-span-2">{p.category}</span>
          <span className="label-mono hidden text-stone md:col-span-1 md:block">
            {p.clientType}
          </span>
          <span className="hidden justify-end md:col-span-1 md:flex">
            <ArrowUpRight className="size-5 text-stone transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy" />
          </span>
        </Link>
      ))}
    </div>
  );
}

/** Compacte projectkaart voor horizontale sliders (homepage). */
export function ProjectCard({
  project: p,
  headingLevel = "h3",
}: {
  project: ProjectCardData;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const img = p.images[0];
  return (
    <Link href={p.permalink} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-mist sm:aspect-[4/3]">
        {img && (
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 82vw, (max-width: 1024px) 55vw, 38vw"
            style={img.position ? { objectPosition: img.position } : undefined}
            className="img-zoom object-cover"
          />
        )}
        <span
          className="absolute bottom-0 left-0 h-1 w-0 bg-lime transition-[width] duration-700 ease-[var(--ease-architectural)] group-hover:w-full"
          aria-hidden="true"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <span className="label-mono text-stone">{p.category}</span>
        {p.location && <span className="label-mono shrink-0">{p.location}</span>}
      </div>
      <Heading className="display mt-3 flex items-start justify-between gap-3 text-2xl md:text-3xl">
        {p.title}
        <ArrowUpRight className="mt-1 size-5 shrink-0 text-stone transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
      </Heading>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-stone">{p.description}</p>
    </Link>
  );
}
