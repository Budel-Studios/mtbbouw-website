"use client";

import { useEffect } from "react";
import Image from "next/image";

export type LightboxImage = { src: string; alt: string; caption?: string };

/**
 * Schermvullende fotoviewer: pijltjestoetsen, Escape om te sluiten, en
 * klikbare vorige/volgende-knoppen. De pagina scrolt niet mee zolang hij
 * open staat.
 */
export function Lightbox({
  images,
  index,
  onChange,
}: {
  images: LightboxImage[];
  index: number | null;
  onChange: (index: number | null) => void;
}) {
  const open = index !== null;

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") onChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, images.length, onChange]);

  const img = open ? images[index] : undefined;
  if (index === null || !img) return null;

  const btn =
    "absolute top-1/2 grid size-12 -translate-y-1/2 place-items-center text-white transition-opacity hover:opacity-70";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Foto vergroot"
      className="fixed inset-0 z-[60] flex animate-fade-in flex-col bg-ink text-white"
    >
      <div className="flex items-center justify-between px-5 py-4 md:px-8">
        <span className="label-mono text-white/60">
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={() => onChange(null)}
          aria-label="Sluiten"
          className="grid size-10 place-items-center transition-opacity hover:opacity-70"
        >
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="relative flex-1 px-4 pb-6 md:px-20">
        <div className="relative h-full w-full">
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            sizes="100vw"
            className="animate-fade-in object-contain"
          />
        </div>
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => onChange((index - 1 + images.length) % images.length)}
              aria-label="Vorige foto"
              className={`${btn} left-2 md:left-6`}
            >
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => onChange((index + 1) % images.length)}
              aria-label="Volgende foto"
              className={`${btn} right-2 md:right-6`}
            >
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </div>
      <p className="px-5 pb-6 text-center text-sm text-white/60 md:px-8">
        {img.caption || img.alt}
      </p>
    </div>
  );
}
