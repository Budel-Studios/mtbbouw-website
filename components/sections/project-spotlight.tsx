import Image from "next/image";
import { Button } from "@/components/ui/button";

/**
 * Uitgelicht project — donkere volle-breedte sectie boven het projectenraster.
 * Toont één project groot met beeld (of sfeervideo), de kernfeiten en een
 * doorklik. Bedoeld om vertrouwen te wekken: laten zien wat we écht gebouwd
 * hebben, met harde gegevens erbij.
 *
 * Rendert null zonder project, zodat de pagina niet stukloopt als er (nog)
 * niets uitgelicht is.
 */
export type SpotlightProject = {
  permalink: string;
  title: string;
  intro: string;
  cover?: string;
  coverAlt?: string;
  coverVideo?: string;
  category?: string;
  location?: string;
  duration?: string;
  clientType?: string;
  status?: string;
  /** Optioneel — pas tonen zodra er een échte klantquote is. */
  testimonial?: { text: string; attribution: string };
};

export function ProjectSpotlight({ project }: { project?: SpotlightProject }) {
  if (!project) return null;

  const facts = [
    { label: "Locatie", value: project.location },
    { label: "Doorlooptijd", value: project.duration },
    { label: "Opdrachtgever", value: project.clientType },
    { label: "Status", value: project.status },
  ].filter((f) => f.value && f.value.trim().length > 0);

  return (
    <section aria-labelledby="uitgelicht-project" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
          Uitgelicht project
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
          {/* Beeld — hier is de foto het onderwerp, dus geen donkere overlay */}
          <div className="relative aspect-[4/3] overflow-hidden bg-ink md:aspect-[16/10]">
            {project.coverVideo ? (
              <video
                src={project.coverVideo}
                poster={project.cover}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              project.cover && (
                <Image
                  src={project.cover}
                  alt={project.coverAlt || project.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              )
            )}

            {/* Chips: zelfde behandeling als in de homepage-carrousel. De
                categorie krijgt wit i.p.v. ink — een ink-chip op een donkere
                sectie leest als een gat in het beeld. */}
            <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center bg-lime px-3 py-1.5 text-xs font-bold text-ink">
                Uitgelicht
              </span>
              {project.category && (
                <span className="inline-flex items-center bg-white px-3 py-1.5 text-xs font-semibold text-ink">
                  {project.category}
                </span>
              )}
            </div>
          </div>

          <div>
            <h2
              id="uitgelicht-project"
              className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl"
            >
              {project.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              {project.intro}
            </p>

            {facts.length > 0 && (
              <dl className="mt-8 grid grid-cols-1 border-l border-t border-white/15 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="border-b border-r border-white/15 p-4"
                  >
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-lime">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 font-semibold text-white">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            {project.testimonial && (
              <blockquote className="mt-8 border-l-2 border-lime pl-6">
                <p className="text-lg italic leading-relaxed text-white">
                  &ldquo;{project.testimonial.text}&rdquo;
                </p>
                <footer className="mt-3 text-sm font-semibold text-lime">
                  — {project.testimonial.attribution}
                </footer>
              </blockquote>
            )}

            <div className="mt-9">
              <Button href={project.permalink} arrow>
                Bekijk dit project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
