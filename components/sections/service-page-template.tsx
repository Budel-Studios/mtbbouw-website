import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceSketch } from "@/components/sections/service-sketch";
import { CheckIcon, MapPinIcon, ClockIcon } from "@/components/icons";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/json-ld";
import type { ServiceData } from "@/lib/services/types";

/**
 * Gedeelde dienstpagina-template — overgenomen uit het Lovable-project en
 * omgezet naar de MTB-huisstijl: hoekige kaders, ink/paper/mist/stone/lime,
 * Archivo-koppen. Server component; FAQ via native <details> (geen client-JS).
 */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-dark">
      {children}
    </p>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function ServicePageTemplate({
  data,
  caseImage,
}: {
  data: ServiceData;
  caseImage?: string;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Diensten", url: "/diensten" },
          { name: data.hero.h1, url: data.slug },
        ]}
      />
      <ServiceJsonLd
        name={data.seo.focusKeyword}
        description={data.seo.description}
        url={data.slug}
        serviceType={data.seo.focusKeyword}
      />
      <FaqJsonLd items={data.faq.items.map((it) => ({ question: it.q, answer: it.a }))} />

      {/* HERO */}
      <section className="border-b border-mist">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <Eyebrow>{data.hero.eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            {data.hero.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone">
            {data.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={data.hero.primaryCta.href} arrow>
              {data.hero.primaryCta.label}
            </Button>
            <a
              href={data.hero.secondaryCta.href}
              className="inline-flex items-center gap-2 border border-ink/25 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
            >
              {data.hero.secondaryCta.label}
            </a>
          </div>
          {data.hero.stats.length > 0 && (
            <dl className="mt-14 grid grid-cols-1 gap-px border-l border-t border-mist sm:grid-cols-3">
              {data.hero.stats.map((stat) => (
                <div key={stat.label} className="border-b border-r border-mist p-6">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-3xl font-extrabold text-ink">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-sm text-stone">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {/* SUB-SERVICES */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Eyebrow>{data.subServices.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            {data.subServices.h2}
          </h2>
          <div className="mt-12 grid gap-px border-l border-t border-mist md:grid-cols-2">
            {data.subServices.cards.map((c) => (
              <div key={c.title} className="border-b border-r border-mist bg-white p-8">
                <ServiceSketch name={c.sketchIcon} className="mb-5 h-14 w-14" />
                <h3 className="text-xl font-extrabold">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-stone">{c.desc}</p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 border-b-2 border-lime pb-0.5 text-sm font-bold text-ink transition-colors hover:text-lime-dark"
                >
                  Lees meer <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WERKWIJZE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{data.werkwijze.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {data.werkwijze.h2}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone">
              {data.werkwijze.introText}
            </p>
            <ol className="mt-10 space-y-5">
              {[
                { n: "01", t: "Intake op locatie", d: "Wij komen langs en leggen alles vast in onze app." },
                { n: "02", t: "Voorstel + offerte", d: "Binnen 5 werkdagen een vaste prijs en planning." },
                { n: "03", t: "Uitvoering", d: "Eén team, wekelijkse updates, geen verrassingen." },
                { n: "04", t: "Oplevering + nazorg", d: "Wij leveren op én komen na 1 jaar gratis langs." },
              ].map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="w-10 shrink-0 font-display text-2xl font-extrabold text-lime-dark">
                    {s.n}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{s.t}</span>
                    <span className="text-sm text-stone">{s.d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          {/* Statische "app"-visual — inventarisatie op locatie */}
          <div className="mx-auto w-full max-w-sm border border-mist bg-white">
            <div className="border-b border-mist px-5 py-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone">
                MTB-app · inventarisatie
              </p>
              <p className="mt-1 font-display text-base font-bold">
                Woonkamer · Wand A
              </p>
            </div>
            <div className="relative aspect-[4/3] bg-paper">
              <svg viewBox="0 0 200 150" className="h-full w-full" aria-hidden="true">
                <rect x="20" y="20" width="160" height="110" fill="none" stroke="var(--color-ink)" strokeWidth="1.5" />
                <rect x="40" y="55" width="34" height="55" fill="none" stroke="var(--color-ink)" strokeWidth="1.2" />
                <rect x="126" y="55" width="34" height="55" fill="none" stroke="var(--color-ink)" strokeWidth="1.2" />
                <path d="M20 20h160" stroke="var(--color-lime)" strokeWidth="3" fill="none" />
              </svg>
            </div>
            <div className="space-y-2 p-4">
              {["Wand opgemeten · 4.20 × 2.60 m", "Stucwerk: vlak, geverfd", "Notitie: kabelgoot links"].map((t) => (
                <div key={t} className="flex items-center gap-2 border border-mist px-3 py-2 text-xs text-ink">
                  <span className="h-1.5 w-1.5 shrink-0 bg-lime" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section id="case" className="scroll-mt-24 border-y border-mist bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Eyebrow>{data.caseStudy.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            {data.caseStudy.h2}
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden border border-mist bg-white">
              {caseImage ? (
                <Image
                  src={caseImage}
                  alt={data.hero.heroImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center px-6 text-center text-stone">
                  {data.caseStudy.location}
                </div>
              )}
            </div>
            <div>
              <div className="mb-5 flex flex-wrap gap-4 text-sm text-stone">
                <span className="inline-flex items-center gap-1.5">
                  <MapPinIcon className="h-4 w-4 text-lime-dark" />
                  {data.caseStudy.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ClockIcon className="h-4 w-4 text-lime-dark" />
                  {data.caseStudy.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckIcon className="h-4 w-4 text-lime-dark" />
                  {data.caseStudy.delivered}
                </span>
              </div>
              <p className="leading-relaxed text-stone">{data.caseStudy.story}</p>
              <p className="mt-6 text-sm font-semibold text-ink">Wat we deden:</p>
              <ul className="mt-3 space-y-2">
                {data.caseStudy.didList.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-stone">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-lime-dark" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <blockquote className="mt-12 border-l-4 border-lime bg-lime/10 p-8 md:p-12">
            <p className="font-display text-xl leading-snug text-ink md:text-2xl">
              &ldquo;{data.caseStudy.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm font-semibold text-stone">
              — {data.caseStudy.quoteAuthor}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* SKETCH BREAK */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            &ldquo;{data.sketchBreak.bigQuote}&rdquo;
          </p>
        </div>
      </section>

      {/* TYPE WONINGEN */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Eyebrow>{data.typeWoningen.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          {data.typeWoningen.h2}
        </h2>
        <ul className="mt-8 flex flex-wrap gap-2">
          {data.typeWoningen.pills.map((pill) => (
            <li
              key={pill}
              className="border border-mist bg-paper px-4 py-2 text-sm font-medium text-ink"
            >
              {pill}
            </li>
          ))}
        </ul>
      </section>

      {/* WAAROM */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Eyebrow>{data.waarom.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            {data.waarom.h2}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {data.waarom.pillars.map((p) => (
              <div key={p.title} className="border-t-2 border-lime bg-white p-8">
                <ServiceSketch name={p.sketchIcon} className="h-12 w-12" />
                <h3 className="mt-5 text-xl font-extrabold">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-stone">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Eyebrow>{data.faq.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          {data.faq.h2}
        </h2>
        <div className="mt-10 max-w-3xl divide-y divide-mist border-y border-mist">
          {data.faq.items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg
                  className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="pb-6 leading-relaxed text-stone">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href={data.faq.fullFaqLink}
            className="inline-flex items-center gap-1.5 border-b-2 border-lime pb-0.5 text-sm font-bold text-ink transition-colors hover:text-lime-dark"
          >
            Alle veelgestelde vragen <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">{data.cta.h2}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">{data.cta.subtitle}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href={data.cta.primaryCta.href} arrow>
              {data.cta.primaryCta.label}
            </Button>
            <Button href={data.cta.secondaryCta.href} variant="outline-light">
              {data.cta.secondaryCta.label}
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/60">{data.cta.note}</p>
        </div>
      </section>

      {/* RELATED */}
      {data.related.length > 0 && (
        <section className="border-t border-mist py-12">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
              Gerelateerd
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {data.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="inline-flex items-center gap-1.5 border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-lime hover:bg-paper"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
