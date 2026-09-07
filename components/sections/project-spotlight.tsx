import Image from "next/image";
import { Button } from "@/components/ui/button";

/**
 * Paginaheader van /projecten: de sfeervideo (of coverfoto) van het uitgelichte
 * project vult de hele sectie als achtergrond, met daaroverheen de paginatitel
 * en het uitgelichte project zelf.
 *
 * Zonder uitgelicht project blijft de header gewoon staan — dan zonder beeld,
 * zodat de pagina nooit zijn kop verliest.
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

export function ProjectSpotlight({
  project,
  eyebrow,
  pageTitle,
}: {
  project?: SpotlightProject;
  eyebrow: string;
  pageTitle: React.ReactNode;
}) {
  const facts = project
    ? [
        { label: "Locatie", value: project.location },
        { label: "Doorlooptijd", value: project.duration },
        { label: "Opdrachtgever", value: project.clientType },
        { label: "Status", value: project.status },
      ].filter((f) => f.value && f.value.trim().length > 0)
    : [];

  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      {/* Achtergrondbeeld — donker genoeg gedimd om tekst leesbaar te houden */}
      {project?.coverVideo ? (
        <video
          src={project.coverVideo}
          poster={project.cover}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
      ) : (
        project?.cover && (
          <Image
            src={project.cover}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover opacity-40"
          />
        )
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/55"
      />

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-12 md:px-16 md:pb-20 md:pt-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
          {eyebrow}
        </p>
        <h1
          style={{ fontWeight: 600 }}
          className="mt-4 font-display text-4xl leading-[0.95] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]"
        >
          {pageTitle}
        </h1>

        {project && (
          <div className="mt-12 max-w-2xl border-t border-white/20 pt-8 md:mt-16">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center bg-lime px-3 py-1.5 text-xs font-bold text-ink">
                Uitgelicht project
              </span>
              {project.category && (
                <span className="inline-flex items-center bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  {project.category}
                </span>
              )}
            </div>

            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl">
              {project.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/80">
              {project.intro}
            </p>

            {facts.length > 0 && (
              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
                {facts.map((fact) => (
                  <div key={fact.label}>
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
        )}
      </div>
    </section>
  );
}
