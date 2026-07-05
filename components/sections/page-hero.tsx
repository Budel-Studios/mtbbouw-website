import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Pagina-hero in twee varianten:
 * - "plain": gecentreerde eyebrow + H1 + intro (patroon van /diensten)
 * - "image": full-bleed foto met witte H1 en lime accentlijn (patroon van de
 *   homepage-hero, maar lager)
 */
export function PageHero({
  variant = "plain",
  eyebrow,
  title,
  intro,
  image,
  cta,
}: {
  variant?: "image" | "plain";
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: { src: string; alt: string };
  cta?: ReactNode;
}) {
  if (variant === "image" && image) {
    return (
      <section className="relative min-h-[50vh] bg-ink">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute bottom-0 left-10 top-0 hidden w-1 md:block">
          <div className="absolute bottom-0 h-1/3 w-full bg-lime" />
        </div>
        <div className="relative mx-auto flex min-h-[50vh] max-w-6xl flex-col justify-center px-6 py-20">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              {intro}
            </p>
          )}
          {cta && <div className="mt-9 flex flex-wrap items-center gap-6">{cta}</div>}
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-6 pb-12 pt-16 text-center">
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h1>
      {intro && (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-stone">
          {intro}
        </p>
      )}
      {cta && <div className="mt-8 flex justify-center gap-6">{cta}</div>}
    </section>
  );
}
