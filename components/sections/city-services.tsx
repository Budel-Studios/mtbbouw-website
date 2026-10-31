import Link from "next/link";

/**
 * "Wat we hier doen" voor een stadspagina: een korte, genummerde lijst.
 * Elke regel linkt naar de dienstpagina met de dienstnaam als linktekst en
 * zegt in één zin wat het in deze stad betekent. Zo krijgt elke stad eigen
 * tekst, en ziet een klant in één oogopslag wat we doen.
 */
export type CityService = { href: string; label: string; text: string };

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

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
      <div className="container-page grid gap-10 py-20 md:grid-cols-12 md:gap-12 md:py-28">
        <div className="md:col-span-5">
          <p className="eyebrow text-stone">{eyebrow}</p>
          <h2 className="display mt-4 text-4xl md:text-5xl">{title}</h2>
          {intro ? (
            <p className="mt-5 max-w-md leading-relaxed text-stone">{intro}</p>
          ) : null}
        </div>
        <ul className="border-t border-ink md:col-span-7">
          {items.map((s, i) => (
            <li key={s.href} className="border-b border-mist">
              <Link
                href={s.href}
                className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-3 py-5 md:gap-x-5"
              >
                <span className="label-num text-navy">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-xl font-semibold tracking-[-0.02em] text-ink transition-colors group-hover:text-navy md:text-2xl">
                    {s.label}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-stone">
                    {s.text}
                  </span>
                </span>
                <ArrowUpRight className="size-5 self-center text-stone transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
