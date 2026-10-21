import { Button } from "@/components/ui/button";
import { QuoteButton } from "@/components/ui/quote-button";

/**
 * CTA-kaart — wit vlak met navy bovenlijn (de footer eronder is al navy):
 * - "row": compacte banner met tekst links en knop rechts
 * - "center": grote pre-footer-CTA met kop links en knoppen rechts
 * Met `cta.drawer` opent de knop de offerte-drawer i.p.v. te navigeren.
 */
type Cta =
  | ({ label: string } & ({ href: string; drawer?: never } | { drawer: true; href?: never }))
  | { node: React.ReactNode };

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
  const button = "node" in cta ? (
    cta.node
  ) : cta.drawer ? (
    <QuoteButton>{cta.label}</QuoteButton>
  ) : (
    <Button href={cta.href} arrow>
      {cta.label}
    </Button>
  );

  if (align === "row") {
    return (
      <section className="container-page py-16">
        <div className="flex flex-col items-start justify-between gap-6 border-t-2 border-lime bg-white px-8 py-9 md:flex-row md:items-center">
          <div>
            {eyebrow && <p className="eyebrow text-stone">{eyebrow}</p>}
            <p className="mt-3 font-display text-xl font-medium tracking-[-0.02em] text-ink">
              {title}
            </p>
            {text && <p className="mt-1 text-sm text-stone">{text}</p>}
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            {button}
            {secondary && (
              <Button href={secondary.href} variant="outline-dark">
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid gap-8 border-t-2 border-lime bg-white p-8 md:grid-cols-12 md:items-center md:p-12">
        <div className="md:col-span-8">
          {eyebrow && <p className="eyebrow text-stone">{eyebrow}</p>}
          <h2 className="display mt-4 text-3xl md:text-5xl">{title}</h2>
          {text && (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-stone">{text}</p>
          )}
        </div>
        <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
          {button}
          {secondary && (
            <Button href={secondary.href} variant="outline-dark">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
