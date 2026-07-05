import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/ui/button";

/**
 * Interne-link-sectie: gerelateerde projecten en/of artikelen in het
 * kaart-patroon van de homepage. Rendert niets bij lege input.
 */
type ProjectCard = {
  slug: string;
  permalink: string;
  title: string;
  cover?: string;
};

type ArticleCard = {
  slug: string;
  permalink: string;
  title: string;
  cover?: string;
};

export function RelatedContent({
  projects = [],
  articles = [],
  eyebrow = "Gerelateerd",
  title = "Bekijk ons werk",
}: {
  projects?: ProjectCard[];
  articles?: ArticleCard[];
  eyebrow?: string;
  title?: string;
}) {
  if (projects.length === 0 && articles.length === 0) return null;

  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{title}</h2>
          </div>
          <ArrowLink href={projects.length > 0 ? "/projecten" : "/kennisbank"} onDark>
            {projects.length > 0 ? "Alle projecten" : "Alle artikelen"}
          </ArrowLink>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.permalink}
              className="group relative block aspect-[4/3] overflow-hidden"
            >
              {project.cover && (
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <h3 className="absolute bottom-5 left-5 right-5 text-lg font-extrabold text-white">
                {project.title}
              </h3>
            </Link>
          ))}
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={article.permalink}
              className="group border border-white/15 bg-white/5"
            >
              {article.cover && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.cover}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-extrabold leading-snug group-hover:underline">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm font-semibold text-white/70">Lees meer</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
