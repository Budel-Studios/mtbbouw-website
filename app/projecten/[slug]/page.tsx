import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "#site/content";
import {
  BreadcrumbJsonLd,
  ProjectJsonLd,
  FaqJsonLd,
} from "@/components/json-ld";
import { QuickFacts } from "@/components/project/quick-facts";
import { PartnerCards } from "@/components/project/partner-cards";
import { ProjectGallery } from "@/components/project/project-gallery";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqAccordion } from "@/components/sections/faq-accordion";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return portfolio.filter((p) => !p.draft).map((p) => ({ slug: p.slug }));
}

function getProject(slug: string) {
  return portfolio.find((p) => p.slug === slug && !p.draft);
}

/**
 * Bouwt lokale SEO-keywords op basis van het projecttype + de locatie —
 * alleen combinaties die logisch bij dit project passen, geen keyword
 * stuffing. Categorie wordt losjes gematcht (bv. "Uitbouw" of "Aanbouw &
 * Uitbouw" vinden allebei de term "uitbouw").
 */
function localSeoKeywords(category?: string, location?: string): string[] {
  const cat = (category || "").toLowerCase();
  const terms: string[] = [];

  if (location) {
    terms.push(`bouwbedrijf ${location}`, `aannemer ${location}`);
    if (cat.includes("renovatie")) terms.push(`renovatie ${location}`);
    if (cat.includes("uitbouw") || cat.includes("aanbouw"))
      terms.push(`uitbouw ${location}`);
    if (cat.includes("verbouw")) terms.push(`verbouwing ${location}`);
  }
  terms.push("aannemer Twente");
  if (cat.includes("verbouw")) terms.push("verbouwing Twente");
  if (cat.includes("prefab")) terms.push("prefab aanbouw Twente");

  return [...new Set(terms)];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const keywords = [
    project.category,
    project.location,
    project.category && project.location
      ? `${project.category} ${project.location}`
      : undefined,
    ...localSeoKeywords(project.category, project.location),
  ].filter((k): k is string => !!k);

  return {
    title: project.title,
    description: project.description,
    keywords,
    alternates: { canonical: project.permalink },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.description,
      url: project.permalink,
      ...(project.cover && { images: [project.cover] }),
    },
  };
}

/** Markdown-HTML in de huisstijl-prose. */
function Prose({ html }: { html: string }) {
  return (
    <div
      className="prose prose-stone max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:font-semibold prose-a:text-lime-dark prose-strong:text-ink"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/** Genummerd narratief blok met lime-accentlijn onder de titel. */
function Block({
  title,
  html,
  children,
}: {
  title: string;
  html?: string;
  children?: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-3 h-1 w-12 bg-lime" />
      <div className="mt-6">{html ? <Prose html={html} /> : children}</div>
    </section>
  );
}

/** Rij met labels (materialen, onderaannemers, leveranciers) als hoekige chips. */
function ChipList({ label, items }: { label: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-stone">
        {label}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="border border-mist bg-paper px-3 py-1.5 text-sm text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const uitgevoerdIn =
    project.executionPeriod ?? (project.year ? String(project.year) : undefined);

  const hasPartnerBlock =
    project.partners.length > 0 ||
    project.contractors.length > 0 ||
    project.suppliers.length > 0;

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Projecten", url: "/projecten" },
          { name: project.title, url: project.permalink },
        ]}
      />
      <ProjectJsonLd
        title={project.title}
        description={project.description}
        url={project.permalink}
        image={project.cover}
        locality={project.location}
        dateCreated={project.date}
        keywords={[project.category, project.location].filter(
          (k): k is string => !!k
        )}
      />
      {project.faq.length > 0 && <FaqJsonLd items={project.faq} />}

      {/* 1 — HERO */}
      <header className="relative bg-ink">
        {project.cover && (
          <>
            <Image
              src={project.cover}
              alt={project.coverAlt || project.title}
              fill
              sizes="100vw"
              className="object-cover opacity-55"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
          </>
        )}
        <div className="relative mx-auto flex min-h-[58vh] max-w-6xl flex-col justify-end px-6 pb-12 pt-28">
          <nav className="mb-auto text-sm text-white/70">
            <Link href="/projecten" className="hover:text-white">
              ← Alle projecten
            </Link>
          </nav>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-[0.2em] text-lime">
            {project.category && <span>{project.category}</span>}
            {project.category && project.location && (
              <span className="text-white/40">/</span>
            )}
            {project.location && <span>{project.location}</span>}
          </div>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          {project.status && (
            <span className="mt-6 inline-flex w-fit items-center gap-2 bg-lime px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ink">
              <span className="h-1.5 w-1.5 bg-ink" />
              {project.status}
            </span>
          )}
        </div>
      </header>

      {/* 2 — PROJECT IN HET KORT */}
      <div className="py-12 sm:py-16">
        <QuickFacts
          facts={[
            { label: "Locatie", value: project.location },
            { label: "Projectduur", value: project.duration },
            { label: "Uitgevoerd in", value: uitgevoerdIn },
            { label: "Type werkzaamheden", value: project.category },
            { label: "Klanttype", value: project.clientType },
            { label: "Status", value: project.status },
          ]}
        />
      </div>

      {/* 3–8 — VERHAALLIJN (narrow, leesbaar) */}
      <div className="mx-auto max-w-3xl space-y-14 px-6 pb-16">
        {project.intro && (
          <p className="text-xl leading-relaxed text-ink">{project.intro}</p>
        )}

        {/* Uitgebreide omschrijving (document-body) */}
        {project.body && project.body.trim().length > 0 && (
          <Prose html={project.body} />
        )}

        {project.situation && (
          <Block title="De situatie" html={project.situation} />
        )}
        {project.clientRequest && (
          <Block title="De vraag van de klant" html={project.clientRequest} />
        )}
        {(project.challenges || project.approach) && (
          <Block title="Onze aanpak">
            {project.challenges && (
              <div className="mb-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-stone">
                  Uitdagingen
                </h3>
                <div className="mt-2">
                  <Prose html={project.challenges} />
                </div>
              </div>
            )}
            {project.approach && <Prose html={project.approach} />}
          </Block>
        )}
        {project.highlights && (
          <Block
            title="Bijzonderheden tijdens de uitvoering"
            html={project.highlights}
          />
        )}
        {(project.execution || project.materials.length > 0) && (
          <Block title="Uitvoering & planning">
            {project.execution && <Prose html={project.execution} />}
            {project.materials.length > 0 && (
              <div className="mt-6">
                <ChipList
                  label="Gebruikte materialen"
                  items={project.materials}
                />
              </div>
            )}
          </Block>
        )}
      </div>

      {/* 9 — PARTNERS & LEVERANCIERS */}
      {hasPartnerBlock && (
        <section className="border-t border-mist bg-paper py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Partners &amp; leveranciers
            </h2>
            <div className="mt-3 h-1 w-12 bg-lime" />
            <p className="mt-6 max-w-2xl text-stone">
              Goed bouwen doe je samen. Deze ondernemers en leveranciers werkten
              met ons aan dit project.
            </p>
            <div className="mt-8">
              <PartnerCards partners={project.partners} />
            </div>
            {(project.contractors.length > 0 ||
              project.suppliers.length > 0) && (
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <ChipList
                  label="Onderaannemers"
                  items={project.contractors}
                />
                <ChipList label="Leveranciers" items={project.suppliers} />
              </div>
            )}
          </div>
        </section>
      )}

      {/* 10 — FOTOGALERIJ */}
      {project.gallery.length > 0 && (
        <section className="border-t border-mist py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Foto&apos;s van het project
            </h2>
            <div className="mt-3 h-1 w-12 bg-lime" />
            <div className="mt-8">
              <ProjectGallery photos={project.gallery} />
            </div>
          </div>
        </section>
      )}

      {/* 11–12 — RESULTAAT & GELEERD */}
      {(project.result || project.learnings || project.testimonial) && (
        <div className="mx-auto max-w-3xl space-y-14 px-6 py-16">
          {project.result && (
            <Block title="Het eindresultaat" html={project.result} />
          )}
          {project.learnings && (
            <Block title="Wat hebben we geleerd" html={project.learnings} />
          )}
          {project.testimonial && (
            <blockquote className="border-l-2 border-lime pl-6">
              <p className="text-lg italic leading-relaxed text-ink">
                “{project.testimonial.text}”
              </p>
              <footer className="mt-4 text-sm font-semibold text-lime-dark">
                — {project.testimonial.attribution}
              </footer>
            </blockquote>
          )}
        </div>
      )}

      {/* Interne links naar diensten + projectenoverzicht */}
      {project.relatedServices.length > 0 && (
        <section className="border-t border-mist bg-paper py-12">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
              Meer over onze diensten
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.relatedServices.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="inline-flex items-center gap-1.5 border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-lime hover:bg-white"
                >
                  {svc.label}
                </Link>
              ))}
              <Link
                href="/projecten"
                className="inline-flex items-center gap-1.5 border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-lime hover:bg-white"
              >
                Alle projecten
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {project.faq.length > 0 && (
        <div className="border-t border-mist">
          <FaqAccordion
            items={project.faq}
            eyebrow="Veelgestelde vragen"
            title="Vragen over dit project"
          />
        </div>
      )}

      {/* 13 — CTA */}
      <CtaBanner
        eyebrow="Ook een project starten?"
        title="Benieuwd wat wij voor jouw woning of bedrijfspand kunnen betekenen?"
        text="Vertel ons over je plannen — we denken graag mee en zijn duidelijk over prijs en planning."
        cta={{ label: "Neem contact op", href: "/contact" }}
        secondary={{ label: "Bekijk meer projecten", href: "/projecten" }}
      />
    </article>
  );
}
