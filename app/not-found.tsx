import Link from "next/link";
import { expertises } from "@/lib/expertises";

/**
 * Nederlandstalige 404 — vervangt de Engelse Next.js-default. Biedt de
 * bezoeker (en crawlers die op een dode URL landen) directe routes naar de
 * vier expertises en de belangrijkste pagina's.
 */
export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-4xl flex-col justify-center px-6 py-24 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-dark">
        404 — pagina niet gevonden
      </p>
      <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        Deze pagina bestaat niet (meer).
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-lg text-stone">
        De pagina die je zoekt is verplaatst of bestaat niet. Misschien vind je
        wat je zoekt bij één van onze expertises:
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {expertises.map((e) => (
          <Link
            key={e.id}
            href={e.href}
            className="border border-mist bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-lime-dark hover:bg-lime"
          >
            {e.title}
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/" className="text-sm font-bold text-ink underline hover:text-lime-dark">
          Terug naar de homepage
        </Link>
      </div>
    </section>
  );
}
