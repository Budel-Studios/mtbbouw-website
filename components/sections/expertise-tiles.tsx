import Image from "next/image";
import Link from "next/link";
import type { Expertise } from "@/lib/expertises";

/**
 * 4-tegel-grid voor de expertises onder MTB Bouw — gebruikt op de homepage
 * (compact) en op /diensten ("Wat we bouwen"-portaal, met sub-item pills via
 * `showSubItems`). Grote foto, emoji-badge, hoekige kaders — geen ronde
 * hoeken, in lijn met het bestaande tegelpatroon (ProjectGrid/RelatedContent).
 */
export function ExpertiseTiles({
  items,
  showSubItems = false,
  id,
}: {
  items: Expertise[];
  showSubItems?: boolean;
  id?: string;
}) {
  return (
    <div id={id} className="grid gap-6 sm:grid-cols-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.id}
            href={item.href}
            className="group block overflow-hidden border border-mist bg-white transition-colors hover:border-ink/30"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-ink">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <span
                aria-hidden="true"
                className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center bg-white text-2xl shadow-sm"
              >
                {item.emoji}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6">
                {/* h2: op /diensten (enige gebruiker) volgen de tegels direct
                    op de h1 — h3 zou een niveau-sprong geven. */}
                <h2 className="font-display text-2xl font-extrabold text-white">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-white/80">{item.subtitle}</p>
              </div>
            </div>

            {showSubItems && item.subItems.length > 0 && (
              <div className="flex flex-wrap gap-2 p-5">
                {item.subItems.map((sub) => (
                  <span
                    key={sub.label}
                    className="border border-mist bg-paper px-3 py-1.5 text-xs font-semibold text-ink"
                  >
                    {sub.label}
                  </span>
                ))}
              </div>
            )}

            {showSubItems && item.subItems.length === 0 && (
              <div className="flex items-center gap-2 p-5 text-sm font-semibold text-ink">
                <Icon className="h-4 w-4 text-lime-dark" />
                Bekijk Kozijnstudio
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
