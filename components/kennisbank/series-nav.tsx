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
      className="mt-14 border-t-4 border-navy bg-white p-6 md:p-8"
    >
      <p className="label-mono text-navy">
        Serie · deel {index + 1} van {parts.length}
      </p>
      <p className="display mt-3 text-2xl">{seriesLabel(series)}</p>
      <ol className="mt-4 space-y-2 text-sm">
        {parts.map((part, i) => {
          const isCurrent = part.slug === currentSlug;
          return (
            <li key={part.slug} className="flex gap-3">
              <span
                className={`w-5 shrink-0 font-semibold ${isCurrent ? "text-navy" : "text-stone"}`}
              >
                {i + 1}.
              </span>
              {isCurrent ? (
                <span aria-current="page" className="font-semibold text-ink">
                  {part.title}
                </span>
              ) : (
                <Link href={part.permalink} className="text-ink underline decoration-mist underline-offset-4 hover:text-navy hover:decoration-navy">
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
