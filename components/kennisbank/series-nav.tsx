import Link from "next/link";
import { seriesLabel } from "@/lib/kennisbank-taxonomy";
import type { Article } from "@/lib/kennisbank";

/**
 * Serienavigatie: alle gepubliceerde delen van de serie, huidig artikel
 * gemarkeerd. Pas zichtbaar vanaf twee delen ("deel 1 van 1" zegt niets).
 */
export function SeriesNav({
  series,
  parts,
  currentSlug,
}: {
  series: string;
  parts: Article[];
  currentSlug: string;
}) {
  if (parts.length < 2) return null;
  const index = parts.findIndex((p) => p.slug === currentSlug);

  return (
    <nav
      aria-label={`Serie: ${seriesLabel(series)}`}
      className="mt-12 border border-mist bg-paper p-6"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
        Serie · deel {index + 1} van {parts.length}
      </p>
      <p className="mt-2 font-display text-lg font-bold">{seriesLabel(series)}</p>
      <ol className="mt-4 space-y-2 text-sm">
        {parts.map((part, i) => {
          const isCurrent = part.slug === currentSlug;
          return (
            <li key={part.slug} className="flex gap-3">
              <span
                className={`w-5 shrink-0 font-semibold ${isCurrent ? "text-lime-dark" : "text-stone"}`}
              >
                {i + 1}.
              </span>
              {isCurrent ? (
                <span aria-current="page" className="font-semibold text-ink">
                  {part.title}
                </span>
              ) : (
                <Link href={part.permalink} className="text-ink underline decoration-mist underline-offset-4 hover:text-lime-dark hover:decoration-lime">
                  {part.title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
