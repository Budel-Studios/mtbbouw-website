import Image from "next/image";
import Link from "next/link";
import { kennisbank, portfolio } from "#site/content";
import { getAsset } from "@/lib/assets";
import { ProjectCarousel } from "@/components/project-carousel";
import {
  CheckIcon,
  ChatIcon,
  HammerIcon,
  HouseIcon,
  BuildingIcon,
  WindowIcon,
  LayersIcon,
  UsersIcon,
  MapPinIcon,
  EuroIcon,
  PaintIcon,
} from "@/components/icons";

/**
 * Homepage — port van het Lovable-ontwerp "MTB Bouw FAQ Hub" (index-route):
 * hero met foto + trust-strip, 4 expertise-kaarten in tonen, intro,
 * waarom-grid, horizontale projecten-rail, partners-metro-grid, kennisbank
 * en afsluitende CTA. Site-header/-footer komen uit de globale layout.
 */

const PHONE_DISPLAY = "053 206 50 71";
const PHONE_TEL = "tel:+31532065071";
// WhatsApp Business-nummer uit lib/site.ts (+31642997018) — níet het vaste nummer.
const WHATSAPP = "https://wa.me/31642997018";

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowUpRight({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

/* ------------------------------- Expertises ------------------------------ */

type Tone = "lime" | "ink" | "paper" | "stone";

const EXPERTISES: {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  href: string;
  Icon: typeof HouseIcon;
  tone: Tone;
}[] = [
  {
    eyebrow: "Voor thuis",
    title: "Wonen & Verbouwen",
    desc: "Renovatie, verbouw, aanbouw, uitbouw en onderhoud — met oog voor hoe jullie echt wonen.",
    bullets: ["Renovatie", "Aanbouw & Uitbouw", "Onderhoud"],
    href: "/wonen-en-verbouwen",
    Icon: HouseIcon,
    tone: "lime",
  },
  {
    eyebrow: "Voor bedrijven",
    title: "Afbouwstudio",
    desc: "Complete zakelijke afbouw van kantoren, winkels en horeca — van casco tot turn-key.",
    bullets: ["Metal stud & plafonds", "Projectafbouw", "Turn-key oplevering"],
    href: "/afbouwstudio",
    Icon: BuildingIcon,
    tone: "ink",
  },
  {
    eyebrow: "Specialistisch merk",
    title: "Kozijnstudio",
    desc: "Ons eigen specialistische label voor kozijnvervanging — all-in en volledig transparant.",
    bullets: ["Hout, kunststof & aluminium", "ISDE-subsidie advies", "Eigen website"],
    href: "/kozijnen",
    Icon: WindowIcon,
    tone: "paper",
  },
  {
    eyebrow: "Slim & snel",
    title: "Prefab Bouwen",
    desc: "Houtskeletbouw, prefab daken en wanden — snel op de bouw, weinig overlast.",
    bullets: ["Houtskeletbouw", "Prefab daken & wanden", "Korte doorlooptijd"],
    href: "/prefab",
    Icon: LayersIcon,
    tone: "stone",
  },
];

function ExpertiseCard({ exp }: { exp: (typeof EXPERTISES)[number] }) {
  const toneClass = {
    lime: "bg-lime text-ink",
    ink: "bg-ink text-white",
    paper: "bg-paper text-ink border border-mist",
    stone: "bg-canvas text-ink border border-mist",
  }[exp.tone];
  const isDark = exp.tone === "ink";
  const isLime = exp.tone === "lime";
  const subTone = isDark ? "text-white/70" : "text-ink/70";
  const bulletTone = isDark
    ? "text-white/60 border-white/15"
    : "text-ink/60 border-ink/10";

  return (
    <Link
      href={exp.href}
      className={`group relative block h-full overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-20px_rgba(0,0,0,0.18)] md:p-10 ${toneClass}`}
    >
      {/* Decoratieve cirkelvorm — zonder rounded-full werd dit een hard
          vierkant kleurvlak precies achter het pijltje rechtsboven. */}
      <div
        aria-hidden="true"
        className={`absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-30 blur-2xl transition-transform duration-500 group-hover:scale-110 ${
          isLime ? "bg-white/50" : isDark ? "bg-lime/25" : "bg-lime/30"
        }`}
      />
      <div className="relative flex h-full min-h-[280px] flex-col">
        <div className="flex items-start justify-between">
          <div
            className={`inline-flex h-12 w-12 items-center justify-center ${
              isDark
                ? "bg-lime text-ink"
                : isLime
                  ? "bg-ink text-lime"
                  : "border border-lime/40 bg-lime/10 text-ink"
            }`}
          >
            <exp.Icon className="h-6 w-6" />
          </div>
          <ArrowUpRight
            className={`h-6 w-6 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 ${
              isDark ? "text-lime" : "text-ink"
            }`}
          />
        </div>

        <p
          className={`mt-8 text-xs font-bold uppercase tracking-[0.22em] ${
            isDark ? "text-lime" : "text-lime-dark"
          }`}
        >
          {exp.eyebrow}
        </p>
        <h3
          className="mt-3 font-display font-extrabold leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", letterSpacing: "-0.02em" }}
        >
          {exp.title}
        </h3>
        <p className={`mt-4 max-w-md text-base leading-relaxed ${subTone}`}>
          {exp.desc}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-8">
          {exp.bullets.map((b) => (
            <span
              key={b}
              className={`inline-flex items-center border px-3 py-1.5 text-xs font-medium ${bulletTone}`}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

/* --------------------------------- Waarom -------------------------------- */

const WHY_ITEMS = [
  { Icon: UsersIcon, title: "Eén aanspreekpunt", desc: "Mathijs of Robbert — je vaste contact van eerste bezoek tot nazorg." },
  { Icon: HammerIcon, title: "Eigen vakmensen", desc: "Een vast kernteam dat elkaar en het werk door en door kent." },
  { Icon: MapPinIcon, title: "Sterk regionaal netwerk", desc: "We werken met vaste, lokale partners uit heel Twente." },
  { Icon: ChatIcon, title: "Heldere communicatie", desc: "Korte lijnen, snelle antwoorden — bel, app of mail." },
  { Icon: EuroIcon, title: "Transparante offertes", desc: "Vaste prijs vooraf. Geen meerwerk-verrassingen achteraf." },
  { Icon: PaintIcon, title: "Hoogwaardige afwerking", desc: "We leveren pas op als het klopt tot in de laatste hoek." },
];

/* -------------------------------- Partners ------------------------------- */

type PartnerTile =
  | { kind: "partner"; name: string; span: string; tone: Tone }
  | { kind: "cta"; span: string };

const PARTNER_TILES: PartnerTile[] = [
  { kind: "partner", name: "BMN Bouwmaterialen", span: "col-span-2 row-span-2", tone: "ink" },
  { kind: "partner", name: "De Kozijnstudio", span: "col-span-1 row-span-1", tone: "lime" },
  { kind: "partner", name: "RN Afbouw", span: "col-span-1 row-span-1", tone: "paper" },
  { kind: "partner", name: "Gevelaar", span: "col-span-1 row-span-1", tone: "paper" },
  { kind: "partner", name: "Zebrano Studio", span: "col-span-1 row-span-1", tone: "stone" },
  { kind: "partner", name: "Meuleman Hoveniers", span: "col-span-1 row-span-1", tone: "paper" },
  { kind: "partner", name: "Jongeneel Hengelo", span: "col-span-1 row-span-1", tone: "stone" },
  { kind: "partner", name: "Voskamp Bouw & Industrie", span: "col-span-1 row-span-1", tone: "paper" },
  { kind: "partner", name: "Rouwmaat Beton", span: "col-span-1 row-span-1", tone: "lime" },
  { kind: "partner", name: "KUality Schilders", span: "col-span-1 row-span-1", tone: "paper" },
  { kind: "partner", name: "Het Vloerenhof", span: "col-span-1 row-span-1", tone: "stone" },
  { kind: "partner", name: "Kamphuis Dakbedekking", span: "col-span-1 row-span-1", tone: "paper" },
  { kind: "partner", name: "Brouwer Containers", span: "col-span-1 row-span-1", tone: "paper" },
  { kind: "partner", name: "Dukato", span: "col-span-1 row-span-1", tone: "stone" },
  { kind: "cta", span: "col-span-1 row-span-1" },
];

const PARTNER_TONE: Record<Tone, string> = {
  paper: "bg-paper border border-mist text-ink hover:bg-lime/10 hover:border-lime",
  ink: "bg-ink text-white hover:bg-lime hover:text-ink",
  lime: "bg-lime text-ink hover:bg-ink hover:text-lime",
  stone: "bg-mist text-ink hover:bg-lime hover:text-ink",
};

/* ---------------------------------- Page --------------------------------- */

export default async function HomePage() {
  const hero = await getAsset(
    "team-mathijs",
    "https://mtbbouw.com/wp-content/uploads/2025/12/Mathijs-scaled.webp"
  );
  const latestArticles = kennisbank
    .filter((a) => !a.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);
  // Uitgelichte projecten staan altijd vooraan in de carrousel; daarachter de
  // rest op datum. Zo blijft ons beste werk zichtbaar, ook als het ouder wordt.
  const published = portfolio
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
  const carouselProjects = [
    ...published.filter((p) => p.featured),
    ...published.filter((p) => !p.featured),
  ].slice(0, 8);

  return (
    <>
      {/* HERO — full-bleed foto, lime accent-glow en trust-strip */}
      <section className="relative w-full overflow-hidden bg-ink text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(19,22,20,0.55) 0%, rgba(19,22,20,0.75) 100%), url('${hero.url}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 900px 500px at 85% 15%, rgba(171,224,0,0.25), transparent 65%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 pb-24 pt-24 md:pb-40 md:pt-40 lg:px-10">
          <span className="inline-flex w-fit items-center gap-2 border border-white/25 bg-ink/40 px-3.5 py-1.5 text-xs font-semibold text-white/85 backdrop-blur">
            <span className="h-1.5 w-1.5 bg-lime" />
            Bouwbedrijf in Enschede &amp; Twente
          </span>

          <h1
            className="mt-8 max-w-5xl font-display font-extrabold leading-[1] tracking-tight"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)", letterSpacing: "-0.04em" }}
          >
            Bouwen doen we <span className="text-lime">samen.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Van een verbouwing thuis tot de complete afbouw van een
            bedrijfspand. MTB Bouw brengt vakmanschap, betrouwbare partners en
            heldere communicatie samen — onder één dak.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#expertises"
              className="group inline-flex items-center gap-2 bg-lime px-7 py-4 font-bold text-ink transition-colors hover:bg-paper"
            >
              Bekijk onze expertises
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/projecten"
              className="inline-flex items-center gap-2 border border-white/40 px-7 py-4 font-semibold text-white backdrop-blur transition-colors hover:bg-paper hover:text-ink"
            >
              Project bekijken
            </Link>
          </div>

          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-8 text-sm text-white/70 md:mt-20">
            {[
              "SBB-erkend leerbedrijf",
              "Vaste prijs, geen verrassingen",
              "Werkzaam in heel Twente",
              "Eigen kernteam + lokale partners",
            ].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-lime" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EXPERTISES — 4 grote kaarten */}
      <section id="expertises" className="scroll-mt-20 border-y border-mist bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-dark">
              Wat we bouwen
            </p>
            <h2
              className="mt-4 font-display font-extrabold leading-[1.05] tracking-tight text-ink"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
            >
              Vier expertises, één aanspreekpunt.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Elk label heeft z&apos;n eigen specialisme — maar de manier van
              werken is overal hetzelfde: vakmanschap, transparantie en korte
              lijnen.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {EXPERTISES.map((e) => (
              <ExpertiseCard key={e.title} exp={e} />
            ))}
          </div>
        </div>
      </section>

      {/* INTRO — over MTB Bouw */}
      <section id="over" className="scroll-mt-20 py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-dark">
                Over MTB Bouw
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Persoonlijk", "Lokaal", "Betrouwbaar", "Nuchter"].map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center border border-lime/40 bg-lime/10 px-3.5 py-1.5 text-xs font-semibold text-ink"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-8">
              <h2
                className="font-display font-extrabold leading-[1.05] tracking-tight text-ink"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
              >
                Eén bouwbedrijf, <span className="text-ink/40">vier expertises,</span>{" "}
                honderden vertrouwde handen.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70">
                MTB Bouw begon als klassieke aannemer in Enschede en groeide uit
                tot het overkoepelende merk voor alles wat we bouwen. Onder ons
                dak werken vier specialistische labels samen — met korte lijnen,
                één vast aanspreekpunt en heldere afspraken vooraf.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
                Of je nu je woning wil verbouwen, een bedrijfspand casco op wil
                laten leveren of prefab wil bouwen: bij MTB kom je binnen op één
                plek en werk je met mensen die luisteren, meedenken en doen wat
                ze beloven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAAROM — 6 kaarten */}
      <section className="pb-24 md:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-dark">
              Waarom MTB Bouw
            </p>
            <h2
              className="mt-4 font-display font-extrabold leading-[1.05] tracking-tight text-ink"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
            >
              Bouwen zoals het hoort.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_ITEMS.map((it) => (
              <div
                key={it.title}
                className="group border border-mist bg-paper p-7 transition-all hover:border-lime hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.12)]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center border border-lime/40 bg-lime/10 text-ink transition-colors group-hover:bg-lime">
                  <it.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTEN — horizontale snap-rail */}
      <section id="projecten" className="scroll-mt-20 border-y border-mist bg-canvas py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-dark">
                Projecten
              </p>
              <h2
                className="mt-4 font-display font-extrabold leading-[1.05] tracking-tight text-ink"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
              >
                Recent werk uit Twente.
              </h2>
            </div>
            <Link
              href="/projecten"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-lime-dark"
            >
              Bekijk alle projecten <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 md:mt-14">
          <ProjectCarousel
            projects={carouselProjects.map((p) => ({
              slug: p.slug,
              permalink: p.permalink,
              title: p.title,
              description: p.description,
              cover: p.cover,
              coverAlt: p.coverAlt,
              category: p.category,
              location: p.location,
              featured: p.featured,
            }))}
          />
        </div>
      </section>

      {/* PARTNERS — tekst + metro-grid */}
      <section className="border-b border-mist bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-dark">
                Onze partners
              </p>
              <h2
                className="mt-4 font-display font-extrabold leading-[1.05] tracking-tight text-ink"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.03em" }}
              >
                Sterk door lokale samenwerking.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70 md:text-lg">
                Kwaliteit komt niet uit één set handen — het komt uit een goed
                netwerk. Wij bouwen met vaste, regionale partners die net zo
                scherp op hun vak zijn als wij.
              </p>
              <div className="mt-8">
                <Link
                  href="/regionale-partners"
                  className="inline-flex items-center gap-2 border-b-2 border-lime pb-1 text-sm font-semibold text-ink transition-colors hover:text-lime-dark"
                >
                  Ontmoet al onze partners <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid auto-rows-[90px] grid-cols-3 gap-2 md:auto-rows-[110px] md:gap-3">
              {PARTNER_TILES.map((t, i) =>
                t.kind === "partner" ? (
                  <div
                    key={t.name}
                    className={`group ${t.span} ${PARTNER_TONE[t.tone]} flex flex-col justify-between p-3 transition-colors duration-300 md:p-4`}
                  >
                    <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">
                      Partner
                    </span>
                    <span className="font-display text-sm font-extrabold leading-tight tracking-tight md:text-base">
                      {t.name}
                    </span>
                  </div>
                ) : (
                  <Link
                    key={`cta-${i}`}
                    href="/regionale-partners"
                    className={`group ${t.span} flex flex-col justify-between bg-ink p-3 text-white transition-colors duration-300 hover:bg-lime hover:text-ink md:p-4`}
                  >
                    <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">
                      Meer
                    </span>
                    <span className="inline-flex items-center gap-1 font-display text-sm font-extrabold leading-tight tracking-tight md:text-base">
                      Zie alle samenwerkingen <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* KENNISBANK */}
      {latestArticles.length > 0 && (
        <section id="kennisbank" className="scroll-mt-20 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-dark">
                  Inspiratie &amp; Kennis
                </p>
                <h2
                  className="mt-4 font-display font-extrabold leading-[1.05] tracking-tight text-ink"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
                >
                  Kennisbank.
                </h2>
              </div>
              <Link
                href="/kennisbank"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-lime-dark"
              >
                Alle artikelen <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {latestArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={a.permalink}
                  className="group flex flex-col border border-mist bg-paper p-7 transition-all hover:-translate-y-1 hover:border-lime hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
                >
                  <div className="flex items-center gap-3 text-xs">
                    {a.category && (
                      <span className="inline-flex items-center border border-lime/40 bg-lime/10 px-2.5 py-1 font-semibold text-ink">
                        {a.category}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-lime-dark">
                    {a.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                    {a.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink">
                    Lees meer{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AFSLUITENDE CTA */}
      <section id="contact" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden bg-ink p-10 text-white md:p-20">
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 800px 400px at 100% 0%, rgba(171,224,0,0.28), transparent 60%), radial-gradient(ellipse 600px 300px at 0% 100%, rgba(171,224,0,0.14), transparent 65%)",
              }}
            />
            <div className="relative grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime">
                  Bouwen doen we samen
                </p>
                <h2
                  className="mt-4 font-display font-extrabold leading-[1] tracking-tight"
                  style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)", letterSpacing: "-0.035em" }}
                >
                  Klaar om te bouwen?
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                  Vraag vrijblijvend een kennismaking aan. We denken graag mee —
                  of je nu net een idee hebt of al een concreet plan.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="mailto:info@mtbbouw.com?subject=Kennismaking"
                    className="inline-flex items-center gap-2 bg-lime px-6 py-3.5 font-bold text-ink transition-colors hover:bg-paper"
                  >
                    Vraag kennismaking aan <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-paper hover:text-ink"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-paper hover:text-ink"
                  >
                    <ChatIcon className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
              <div className="md:col-span-4">
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                        Intake op locatie
                      </p>
                      <p className="mt-1">
                        We komen graag bij je langs — in Enschede, Twente en
                        heel Oost-Nederland.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChatIcon className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                        Mail
                      </p>
                      <a href="mailto:info@mtbbouw.com" className="mt-1 block hover:text-white">
                        info@mtbbouw.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <UsersIcon className="mt-0.5 h-5 w-5 shrink-0 text-lime" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                        Volg
                      </p>
                      <a
                        href="https://www.instagram.com/mtbbouw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block hover:text-white"
                      >
                        @mtbbouw
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
