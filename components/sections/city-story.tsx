import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Verhaal-blok voor een stadspagina: tekst links, een echte projectfoto
 * rechts. Bezoekers kijken eerst naar beeld, dus geen lange tekstmuur.
 */
export function CityStory({
  eyebrow,
  title,
  children,
  image,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  image: { src: string; alt: string; caption?: string };
}) {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow text-stone">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
            {title}
          </h2>
          <div className="mt-5 space-y-5 leading-relaxed text-stone">{children}</div>
        </div>
        <figure>
          <div className="relative aspect-[4/3] overflow-hidden border border-mist bg-white">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {image.caption ? (
            <figcaption className="mt-3 text-sm text-stone">{image.caption}</figcaption>
          ) : null}
        </figure>
      </div>
    </section>
  );
}
