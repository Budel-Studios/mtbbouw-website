import { partners } from "@/lib/data";

/**
 * Partner-namen als typografische rij (er zijn nog geen logobestanden).
 * PLACEHOLDER: vervang door echte logo's zodra aangeleverd.
 */
export function LogoRow({
  names = partners,
  title = "Wij werken samen met",
}: {
  names?: readonly string[];
  title?: string;
}) {
  return (
    <section className="border-y border-mist bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-stone">
          {title}
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {names.map((name) => (
            <li
              key={name}
              className="text-sm font-bold uppercase tracking-wider text-stone/80"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
