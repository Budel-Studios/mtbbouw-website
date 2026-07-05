import { Button } from "@/components/ui/button";
import { QuoteButton } from "@/components/ui/quote-button";

/**
 * Donkere CTA-band — samenvoeging van de twee homepage-patronen:
 * - "row": banner met tekst links en knop rechts (voor-bedrijven-banner)
 * - "center": gecentreerde pre-footer-CTA
 * Met `cta.drawer` opent de knop de offerte-drawer i.p.v. te navigeren.
 */
type Cta = { label: string } & ({ href: string; drawer?: never } | { drawer: true; href?: never });

export function CtaBanner({
  eyebrow,
  title,
  text,
  cta,
  secondary,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  cta: Cta;
  secondary?: { label: string; href: string };
  align?: "row" | "center";
}) {
  const button = cta.drawer ? (
    <QuoteButton>{cta.label}</QuoteButton>
  ) : (
    <Button href={cta.href} arrow>
      {cta.label}
    </Button>
  );

  if (align === "row") {
    return (
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-6 bg-ink px-8 py-9 md:flex-row md:items-center">
          <div>
            {eyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
                {eyebrow}
              </p>
            )}
            <p className="mt-2 font-display text-lg font-bold text-white">{title}</p>
            {text && <p className="mt-1 text-sm text-white/75">{text}</p>}
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-4">
            {button}
            {secondary && (
              <Button href={secondary.href} variant="outline-light">
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{title}</h2>
        {text && <p className="mx-auto mt-4 max-w-xl text-white/75">{text}</p>}
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          {button}
          {secondary && (
            <Button href={secondary.href} variant="outline-light">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
