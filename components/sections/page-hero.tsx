import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Pagina-hero in twee varianten:
 * - "plain": editoriale kop — mono-eyebrow + grote displaykop links, intro rechts
 * - "image": full-bleed foto met witte displaykop onderin
 */
export function PageHero({
  variant = "plain",
  eyebrow,
  title,
  tagline,
  intro,
  image,
  cta,
}: {
  variant?: "image" | "plain";
  eyebrow?: string;
  title: string;
  /** Korte merkzin onder de H1 (alleen bij de beeldvariant). */
  tagline?: string;
  intro?: string;
  /** position: object-position van de foto, bijv. "50% 30%". */
  image?: { src: string; alt: string; position?: string; caption?: string };
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
          style={image.position ? { objectPosition: image.position } : undefined}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/35 to-ink/10" />
        <div className="container-page relative flex min-h-[50vh] flex-col justify-end py-16 md:py-20">
          {eyebrow && <p className="eyebrow text-white/80">{eyebrow}</p>}
          <h1 className="display mt-5 max-w-4xl text-5xl text-white md:text-7xl">
            {title}
          </h1>
          {tagline && (
            <p className="mt-4 font-display text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">
              {tagline}
            </p>
          )}
          {intro && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              {intro}
            </p>
          )}
          {cta && <div className="mt-9 flex flex-wrap items-center gap-6">{cta}</div>}
        </div>
        {image.caption && (
          <p className="absolute bottom-3 right-4 max-w-[60%] text-right text-[11px] leading-snug text-white/70">
            {image.caption}
          </p>
        )}
      </section>
    );
  }

  return (
    <section className="container-page pb-12 pt-16 md:pb-16 md:pt-24">
      <div className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="animate-fade-up md:col-span-8">
          {eyebrow && <p className="eyebrow text-stone">{eyebrow}</p>}
          <h1 className="display mt-6 text-5xl md:text-7xl">{title}</h1>
        </div>
        {(intro || cta) && (
          <div className="animate-fade-up md:col-span-4" style={{ animationDelay: "120ms" }}>
            {intro && (
              <p className="max-w-md text-base leading-relaxed text-stone">{intro}</p>
            )}
            {cta && <div className="mt-8 flex flex-wrap items-center gap-4">{cta}</div>}
          </div>
        )}
      </div>
    </section>
  );
}
