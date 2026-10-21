"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Lightbox, type LightboxImage } from "@/components/project/lightbox";
import { Slider } from "@/components/slider";

/**
 * Foto-eerst projectbeeld: grote hero (foto of video), daaronder de
 * projectfeiten (children), een voor/na-vergelijking zodra er zowel een
 * "voor"- als een "eind"-foto is, en de galerij — gegroepeerd in
 * Voor · Tijdens · Eindresultaat als foto's een `phase` hebben.
 * Elke foto opent in de schermvullende lightbox.
 */
type Photo = {
  src: string;
  alt: string;
  caption?: string;
  phase?: "voor" | "tijdens" | "eind";
};

const PHASE_LABELS: Record<NonNullable<Photo["phase"]>, string> = {
  voor: "Voor",
  tijdens: "Tijdens de uitvoering",
  eind: "Eindresultaat",
};

/** Rijpatroon: 8+4, 4+8, 6+6 … — een losse laatste foto gaat volle breedte. */
function layout(count: number): { span: string; aspect: string }[] {
  const cells: { span: string; aspect: string }[] = [];
  const rows = [
    [
      { span: "md:col-span-8", aspect: "md:aspect-[16/10]" },
      { span: "md:col-span-4", aspect: "md:aspect-[4/5]" },
    ],
    [
      { span: "md:col-span-4", aspect: "md:aspect-[4/5]" },
      { span: "md:col-span-8", aspect: "md:aspect-[16/10]" },
    ],
    [
      { span: "md:col-span-6", aspect: "md:aspect-[4/3]" },
      { span: "md:col-span-6", aspect: "md:aspect-[4/3]" },
    ],
  ];
  let r = 0;
  while (cells.length < count) {
    if (count - cells.length === 1) {
      cells.push({ span: "md:col-span-12", aspect: "md:aspect-[21/9]" });
    } else {
      cells.push(...rows[r % rows.length]);
      r++;
    }
  }
  return cells.slice(0, count);
}

function PhotoGrid({
  photos,
  offset,
  onOpen,
}: {
  photos: Photo[];
  offset: number;
  onOpen: (index: number) => void;
}) {
  const cells = layout(photos.length);
  return (
    <Slider label="Projectfoto's" until="md" className="md:grid-cols-12">
      {photos.map((photo, i) => (
        <li key={photo.src + i} className={`w-[85%] shrink-0 snap-start sm:w-[60%] md:w-auto ${cells[i].span}`}>
          <figure>
            <button
              type="button"
              onClick={() => onOpen(offset + i)}
              aria-label={`Vergroot: ${photo.alt}`}
              className={`group relative block w-full cursor-zoom-in overflow-hidden bg-mist aspect-[4/5] ${cells[i].aspect}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={cells[i].span.includes("12") ? "100vw" : "(max-width: 768px) 85vw, 66vw"}
                className="img-zoom object-cover"
              />
            </button>
            {photo.caption && (
              <figcaption className="label-mono mt-3 text-stone">{photo.caption}</figcaption>
            )}
          </figure>
        </li>
      ))}
    </Slider>
  );
}

/** Schuifbare voor/na-vergelijking (toetsenbord: pijltjes via de range). */
function BeforeAfter({ before, after }: { before: Photo; after: Photo }) {
  const [pos, setPos] = useState(50);
  return (
    <figure>
      <div className="relative aspect-[4/3] w-full select-none overflow-hidden bg-mist md:aspect-[16/8]">
        <Image src={after.src} alt={after.alt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={before.src} alt={before.alt} fill sizes="100vw" className="object-cover" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-px bg-white"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime px-2 py-1.5 text-ink">
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
            </svg>
          </span>
        </div>
        <span className="label-mono absolute left-4 top-4 bg-ink/70 px-2 py-1 text-white">Voor</span>
        <span className="label-mono absolute right-4 top-4 bg-lime px-2 py-1 text-ink">Na</span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Schuif tussen voor en na"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="label-mono mt-3 text-stone">
        Schuif om voor en na te vergelijken
      </figcaption>
    </figure>
  );
}

export function ProjectVisuals({
  hero,
  video,
  photos,
  children,
}: {
  hero?: { src: string; alt: string };
  video?: string;
  photos: Photo[];
  children?: ReactNode;
}) {
  const [open, setOpen] = useState<number | null>(null);

  // Lightbox-volgorde: hero eerst, dan de galerij in weergavevolgorde.
  const hasPhases = photos.some((p) => p.phase);
  const order: NonNullable<Photo["phase"]>[] = ["voor", "tijdens", "eind"];
  const groups = hasPhases
    ? [
        ...order
          .map((phase) => ({
            phase: phase as Photo["phase"],
            photos: photos.filter((p) => p.phase === phase),
          }))
          .filter((g) => g.photos.length > 0),
        ...(photos.some((p) => !p.phase)
          ? [{ phase: undefined as Photo["phase"], photos: photos.filter((p) => !p.phase) }]
          : []),
      ]
    : [{ phase: undefined as Photo["phase"], photos }];
  const galleryOrdered = groups.flatMap((g) => g.photos).filter((p) => p.src !== hero?.src);
  const all: LightboxImage[] = [...(hero ? [hero] : []), ...galleryOrdered];
  const base = hero ? 1 : 0;

  const before = photos.find((p) => p.phase === "voor");
  const after = [...photos].reverse().find((p) => p.phase === "eind");

  let offset = base;

  return (
    <>
      {/* HERO */}
      {video ? (
        <div className="relative w-full overflow-hidden bg-ink">
          <video
            src={video}
            poster={hero?.src}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="aspect-[4/3] w-full object-cover md:aspect-[16/8] md:max-h-[88vh]"
          />
        </div>
      ) : hero ? (
        <button
          type="button"
          onClick={() => setOpen(0)}
          aria-label="Vergroot hoofdfoto"
          className="group relative block aspect-[4/3] w-full overflow-hidden bg-mist md:aspect-[16/8] md:max-h-[88vh]"
        >
          <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="img-zoom object-cover" />
          <span className="label-mono glass-dark absolute bottom-5 right-5 px-3 py-2 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            + Vergroten
          </span>
        </button>
      ) : null}

      {children}

      {/* VOOR / NA */}
      {before && after && (
        <section aria-label="Voor en na" className="container-page pt-16 md:pt-24">
          <p className="eyebrow mb-6 text-stone">Voor &amp; na</p>
          <BeforeAfter before={before} after={after} />
        </section>
      )}

      {/* GALERIJ */}
      {galleryOrdered.length > 0 && (
        <section className="container-page space-y-10 pt-16 md:pt-24">
          <h2 className="eyebrow text-stone">Foto&apos;s van het project</h2>
          {groups.map((group) => {
            const list = group.photos.filter((p) => p.src !== hero?.src);
            if (list.length === 0) return null;
            const start = offset;
            offset += list.length;
            return (
              <div key={group.phase ?? "rest"}>
                {group.phase && (
                  <p className="label-mono mb-6 flex items-center justify-between border-b border-mist pb-3 text-stone">
                    <span className="text-ink">{PHASE_LABELS[group.phase]}</span>
                    <span>{String(list.length).padStart(2, "0")} foto&apos;s</span>
                  </p>
                )}
                <PhotoGrid photos={list} offset={start} onOpen={setOpen} />
              </div>
            );
          })}
          <p className="eyebrow text-stone">
            {String(all.length).padStart(2, "0")} beelden — tik of klik om te vergroten
          </p>
        </section>
      )}

      <Lightbox images={all} index={open} onChange={setOpen} />
    </>
  );
}
