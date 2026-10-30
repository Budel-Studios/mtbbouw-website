import Link from "next/link";

/**
 * Werkgebied-blok voor een dienstpagina: links naar de stadspagina's met de
 * dienst in de linktekst ("Uitbouw in Hengelo"). Dat helpt Google om de
 * stadspagina's aan de dienst te koppelen.
 */
const steden = [
  { name: "Hengelo", href: "/aannemer-hengelo" },
  { name: "Almelo", href: "/aannemer-almelo" },
  { name: "Oldenzaal", href: "/aannemer-oldenzaal" },
  { name: "Enschede", href: "/aannemer-enschede" },
];

export function ServiceAreaLinks({ label, intro }: { label: string; intro: string }) {
  return (
    <section className="border-t border-mist bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="eyebrow text-stone">Werkgebied</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
          {label} in jouw plaats
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-stone">{intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {steden.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="border border-mist bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-ink/30 hover:text-navy"
            >
              {label} in {s.name}
            </Link>
          ))}
          <Link
            href="/aannemer-twente"
            className="border border-mist bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-ink/30 hover:text-navy"
          >
            Heel Twente
          </Link>
        </div>
      </div>
    </section>
  );
}
