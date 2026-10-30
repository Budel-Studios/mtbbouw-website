import Link from "next/link";

/**
 * "Wat we hier het meest doen" voor een stadspagina. Elke kaart linkt naar
 * de dienstpagina met de dienstnaam als linktekst, en zegt in één zin wat
 * het in deze stad betekent. Zo krijgt elke stad eigen tekst in plaats van
 * een kopie met een andere plaatsnaam.
 */
export type CityService = { href: string; label: string; text: string };

export function CityServices({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: CityService[];
}) {
  return (
    <section className="border-y border-mist bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <p className="eyebrow text-stone">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
          {title}
        </h2>
        {intro ? (
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">{intro}</p>
        ) : null}
        <ul className="mt-10 grid gap-px border border-mist bg-mist sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <li key={s.href} className="bg-white">
              <Link href={s.href} className="group block h-full p-6">
                <span className="font-display text-lg font-semibold text-ink group-hover:text-navy">
                  {s.label}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-stone">
                  {s.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
