import Link from "next/link";
import { allPartners } from "@/lib/partners";

/**
 * Partners uit (of rond) een stad, voor de stadspagina's. Haalt de gegevens
 * uit lib/partners.ts zodat naam, plaats en link overal gelijk blijven.
 * Onbekende namen worden overgeslagen in plaats van verzonnen.
 */
export function LocalPartners({
  title,
  intro,
  names,
}: {
  title: string;
  intro: string;
  names: string[];
}) {
  const items = names
    .map((n) => allPartners.find((p) => p.name === n))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <p className="eyebrow text-stone">Partners</p>
      <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl leading-relaxed text-stone">{intro}</p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {items.map((p) => (
          <li key={p.name} className="border border-mist bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-stone">
              {p.region}
            </p>
            {p.url ? (
              <a
                href={p.url}
                target="_blank"
                rel={p.rel ?? "noopener"}
                className="mt-2 inline-block font-display text-lg font-semibold text-ink underline hover:text-navy"
              >
                {p.name}
              </a>
            ) : (
              <p className="mt-2 font-display text-lg font-semibold text-ink">
                {p.name}
              </p>
            )}
            <p className="mt-2 text-sm leading-relaxed text-stone">
              {p.description}
            </p>
          </li>
        ))}
      </ul>
      <Link
        href="/regionale-partners"
        className="mt-8 inline-block text-sm font-semibold text-ink underline hover:text-navy"
      >
        Alle regionale partners
      </Link>
    </section>
  );
}
