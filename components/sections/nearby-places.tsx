import Link from "next/link";
import { otherPlaces } from "@/lib/places";
import { MapPinIcon } from "@/components/icons";

/**
 * Verwijzingen naar de omliggende plaatspagina's. Voorkomt dat elke
 * stadspagina een eindpunt is en helpt bezoekers net over de gemeentegrens.
 */
export function NearbyPlaces({ currentSlug }: { currentSlug: string }) {
  const others = otherPlaces(currentSlug);
  if (others.length === 0) return null;

  return (
    <section className="border-y border-mist bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
          Werkgebied
        </p>
        <h2 className="mt-4 max-w-3xl text-2xl font-extrabold tracking-tight sm:text-3xl">
          Ook actief in de rest van Twente
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-stone">
          Vanuit Enschede werken we door heel Twente. Woon je net over de
          gemeentegrens? Bekijk dan de pagina van jouw plaats.
        </p>
        <ul className="mt-8 grid gap-px border-l border-t border-mist sm:grid-cols-2 lg:grid-cols-4">
          {others.map((p) => (
            <li key={p.slug} className="border-b border-r border-mist">
              <Link
                href={`/${p.slug}`}
                className="group flex h-full flex-col gap-1 bg-white p-6 transition-colors hover:bg-paper"
              >
                <span className="flex items-center gap-2 font-extrabold">
                  <MapPinIcon className="h-4 w-4 text-lime-dark" />
                  {p.name}
                </span>
                <span className="text-sm leading-relaxed text-stone">
                  Ook {p.nearby}
                </span>
                <span className="mt-2 text-sm font-bold group-hover:text-lime-dark">
                  Bekijk →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-stone">
          Staat jouw plaats er niet bij? Bekijk{" "}
          <Link href="/aannemer-twente" className="font-semibold text-ink underline hover:text-lime-dark">
            ons werkgebied in Twente
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
