import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { publishedArticles, toCard } from "@/lib/kennisbank";
import { articleToCard } from "@/lib/article-slide";
import { getAsset } from "@/lib/assets";
import { WebSiteJsonLd } from "@/components/json-ld";
import { publishedProjects, toProjectCard } from "@/lib/projects";
import { CardSlides, SliderLink } from "@/components/sections/card-slider";
import { Slider } from "@/components/slider";
import { HomeHero } from "@/components/home/home-hero";
import { ContactDrawerButton } from "@/components/contact-drawer";
import { PartnerWall } from "@/components/home/partner-wall";
import { allPartners } from "@/lib/partners";
import { mapPlaces } from "@/lib/werkgebied";
import { TwenteMapSvg } from "@/components/twente-map/twente-map-svg";
import { TwenteMapSection } from "@/components/twente-map/twente-map-section";
import {
  HandNote,
  PlacesMarquee,
  SpinBadge,
  Sticker,
} from "@/components/home/playful";

/**
 * Inhoud van de homepage — 1:1 de opzet en styling van het Lovable-ontwerp
 * "Bouwprojecten Showcase": ingekaderde hero met foto/video, trustpunten,
 * expertises, recent werk (slider), over ons, een donkere "waarom"-sectie,
 * een partnermuur en de kennisbank. Teksten, links en SEO zijn die van
 * mtbbouw.com.
 *
 * Met `playful` (alleen op /test-speels) komen er speelse accenten bij.
 */

function ArrowRight({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowUpRight({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

/* ------------------------------- Inhoud ------------------------------- */

const TRUST_POINTS = [
  "SBB-erkend leerbedrijf",
  "Vaste prijs, geen verrassingen",
  "Werkzaam in heel Twente",
  "Eigen kernteam + lokale partners",
];

const EXPERTISES = [
  {
    sticker: "thuis",
    eyebrow: "Voor thuis",
    title: "Wonen & Verbouwen",
    desc: "Renovatie, verbouw, aanbouw, uitbouw en onderhoud — met oog voor hoe jullie echt wonen.",
    href: "/wonen-en-verbouwen",
    image: {
      src: "/images/projects/luxe-overkapping-twente/03.jpg",
      alt: "Luxe overkapping in een tuin in Twente, gebouwd door MTB Bouw",
    },
  },
  {
    sticker: "zakelijk",
    eyebrow: "Afbouwstudio",
    title: "Zakelijk",
    desc: "Complete zakelijke afbouw van kantoren, winkels en horeca — van casco tot turn-key.",
    href: "/afbouwstudio",
    image: {
      src: "/images/projects/broodbode-apeldoorn/04.jpg",
      alt: "Maatwerk zitbanken bij De Broodbode Apeldoorn",
    },
  },
  {
    sticker: "eigen merk",
    eyebrow: "Specialistisch merk",
    title: "Kozijnstudio",
    desc: "Ons eigen specialistische label voor kozijnvervanging — all-in en volledig transparant.",
    href: "/kozijnen",
    image: {
      src: "/images/projects/luxe-overkapping-twente/05.jpg",
      alt: "Vakman van MTB Bouw plaatst een glazen pui",
    },
  },
  {
    sticker: "snel!",
    eyebrow: "Slim & snel",
    title: "Prefab Bouwen",
    desc: "Houtskeletbouw, prefab daken en wanden — snel op de bouw, weinig overlast.",
    href: "/prefab",
    image: {
      src: "/images/projects/overkapping-paardenstal-enschede/04.jpg",
      alt: "Houten overkapping met paardenstal in het buitengebied van Enschede",
    },
  },
];

/** Directe links naar de verkooppagina's (interne links voor SEO én bezoekers). */
const SERVICE_LINKS = [
  { href: "/verbouwing", label: "Verbouwing & renovatie" },
  { href: "/aanbouw-uitbouw", label: "Aanbouw & uitbouw" },
  { href: "/nieuwbouw", label: "Nieuwbouw" },
  { href: "/verduurzamen", label: "Verduurzamen" },
  { href: "/afbouwstudio/kantoor-verbouwen", label: "Kantoor verbouwen" },
];


const WHY_ITEMS = [
  { title: "Eén aanspreekpunt", desc: "Mathijs of Robbert — je vaste contact van eerste bezoek tot nazorg." },
  { title: "Eigen vakmensen", desc: "Een vast kernteam dat elkaar en het werk door en door kent." },
  { title: "Sterk regionaal netwerk", desc: "We werken met vaste, lokale partners uit heel Twente." },
  { title: "Heldere communicatie", desc: "Korte lijnen, snelle antwoorden — bel, app of mail." },
  { title: "Transparante offertes", desc: "Vaste prijs vooraf. Geen meerwerk-verrassingen achteraf." },
  { title: "Hoogwaardige afwerking", desc: "We leveren pas op als het klopt tot in de laatste hoek." },
];

const PARTNERS = [
  { name: "BMN Bouwmaterialen", role: "Bouwmaterialen" },
  { name: "De Kozijnstudio", role: "Kozijnen" },
  { name: "RN Afbouw", role: "Afbouw" },
  { name: "Gevelaar", role: "Badkamers & keukens" },
  { name: "Zebrano Studio", role: "Interieur" },
  { name: "Meuleman Hoveniers", role: "Tuin & buitenruimte" },
  { name: "Jongeneel Hengelo", role: "Bouwmaterialen" },
  { name: "Voskamp Bouw & Industrie", role: "Bouwmaterialen" },
  { name: "Rouwmaat Beton", role: "Beton" },
  { name: "KUality Schilders", role: "Schilderwerk" },
  { name: "Het Vloerenhof", role: "Vloeren & coatings" },
  { name: "Kamphuis Dakbedekking", role: "Dakwerk" },
  { name: "Brouwer Containers", role: "Afvoer & containers" },
  { name: "Dukato Hypotheken", role: "Hypotheekadvies" },
];

/* ------------------------------ Bouwstenen ----------------------------- */

function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "default",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  tone?: "default" | "inverse";
}) {
  const heading = (
    <>
      <p className={`eyebrow ${tone === "inverse" ? "text-inverse-muted" : "text-stone"}`}>{eyebrow}</p>
      <h2 className="display mt-4 text-4xl md:text-6xl">{title}</h2>
    </>
  );
  if (!intro) return <div>{heading}</div>;
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">{heading}</div>
      <p
        className={`max-w-md text-base leading-relaxed md:col-span-4 md:col-start-9 ${
          tone === "inverse" ? "text-inverse-muted" : "text-stone"
        }`}
      >
        {intro}
      </p>
    </div>
  );
}

/* ---------------------------------- Page --------------------------------- */

export async function HomeContent({
  playful = false,
  hand = "",
}: {
  /** Speelse accenten tonen (alleen op de testpagina). */
  playful?: boolean;
  /** className van het handschriftfont, nodig als playful aan staat. */
  hand?: string;
}) {
  // Herobeeld is wisselbaar via Supabase (site_assets → "home-hero");
  // zonder die asset tonen we een vakman van MTB Bouw aan het werk op het dak.
  const hero = await getAsset(
    "home-hero",
    "/images/home/hero-dak.jpg",
    "Vakman van MTB Bouw legt dakpannen op een dak in Twente"
  );
  // Optionele video-loop: Supabase-asset "home-hero-video", anders
  // public/images/home/hero-loop.mp4 (alleen als dat bestand bestaat).
  const localVideo = "/images/home/hero-loop.mp4";
  const heroVideo = await getAsset(
    "home-hero-video",
    existsSync(path.join(process.cwd(), "public", localVideo)) ? localVideo : ""
  );
  const latestArticles = publishedArticles()
    .slice(0, 6)
    .map((a) => articleToCard(toCard(a)));
  const projects = publishedProjects().map(toProjectCard).filter((p) => p.images.length > 0);

  return (
    <>
      <WebSiteJsonLd />

      <HomeHero
        image={{ src: hero.url, alt: hero.alt }}
        video={heroVideo.url ? { mp4: heroVideo.url } : undefined}
        project={{ href: "/projecten", title: "Vakmanschap op het dak", city: "Twente" }}
        badge={
          playful ? (
            <SpinBadge className="absolute right-6 top-1/2 hidden -translate-y-1/2 md:block md:right-14" />
          ) : undefined
        }
      />

      {playful && <PlacesMarquee />}

      {/* TRUST-STRIP */}
      <section className="container-page">
        <ul className="grid grid-cols-2 border-b border-mist md:grid-cols-4">
          {TRUST_POINTS.map((t, i) => (
            <li
              key={t}
              className="border-mist py-6 pr-4 md:border-r md:py-8 md:last:border-r-0 md:[&:not(:first-child)]:pl-8"
            >
              <span className="label-num text-navy">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-base tracking-[-0.01em] md:text-lg">{t}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* EXPERTISES */}
      <section id="expertises" className="container-page scroll-mt-20 py-24 md:py-32">
        <SectionHeading
          eyebrow="Wat we bouwen"
          title="Vier expertises, één aanspreekpunt."
          intro="Elk label heeft z'n eigen specialisme — maar de manier van werken is overal hetzelfde: vakmanschap, transparantie en korte lijnen."
        />
        <div className="mt-14">
          <Slider label="Expertises" until="lg" className="lg:grid-cols-4">
            {EXPERTISES.map((e, i) => (
              <li key={e.title} className="w-[78%] shrink-0 snap-start sm:w-[45%] lg:w-auto">
                <Link href={e.href} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                    <Image
                      src={e.image.src}
                      alt={e.image.alt}
                      fill
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 25vw"
                      className="img-zoom object-cover"
                    />
                    <span
                      className="absolute bottom-0 left-0 h-1 w-0 bg-lime transition-[width] duration-700 group-hover:w-full"
                      aria-hidden="true"
                    />
                    {playful && (
                      <Sticker
                        tone={(["lime", "white", "sky", "lime"] as const)[i]}
                        rotate={i % 2 ? "rotate-3" : "-rotate-6"}
                        className="absolute left-4 top-4"
                      >
                        {e.sticker}
                      </Sticker>
                    )}
                  </div>
                  <p className="label-mono mt-5 text-stone">{e.eyebrow}</p>
                  <h3 className="display mt-3 flex items-center justify-between gap-3 text-2xl md:text-3xl">
                    {e.title}
                    <ArrowUpRight className="size-5 shrink-0 text-stone transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{e.desc}</p>
                </Link>
              </li>
            ))}
          </Slider>
        </div>
        <nav aria-label="Diensten" className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-3 border-t border-mist pt-8">
          <span className="label-mono mr-2 text-stone">Direct naar</span>
          {SERVICE_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="label-mono inline-flex items-center gap-2 border border-mist px-4 py-3 transition-colors hover:border-navy hover:bg-navy hover:text-white"
            >
              {l.label}
              <ArrowRight className="size-3" />
            </Link>
          ))}
        </nav>
      </section>

      {/* RECENT WERK — slider op warmgrijs */}
      <section id="projecten" className="scroll-mt-20 bg-tint">
        <div className="container-page py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="relative">
              <SectionHeading eyebrow="Projecten" title="Recent werk uit Twente." />
              {playful && (
                <HandNote hand={hand} arrow="down-left" className="absolute -bottom-12 left-6 rotate-2 md:left-40">
                  swipe door ons werk
                </HandNote>
              )}
            </div>
            <SliderLink href="/projecten">Bekijk alle {projects.length} projecten</SliderLink>
          </div>
          <div className={playful ? "mt-20" : "mt-14"}>
            <CardSlides items={projects} label="Recente projecten" />
          </div>
        </div>
      </section>

      {/* OVER MTB BOUW — waarom we begonnen */}
      <section id="over" className="scroll-mt-20">
        <div className="container-page grid gap-14 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <p className="eyebrow text-stone">Over MTB Bouw</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">
              Eerlijk en transparant. Bouwen <span className="mark-lime">makkelijk</span> gemaakt.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-[1.75] text-stone md:col-span-6 md:col-start-7 md:pt-10">
            <p className="text-2xl leading-snug tracking-[-0.02em] text-ink md:text-[1.9rem]">
              Verbouwen is spannend. Je haalt mensen in huis en moet erop
              kunnen vertrouwen dat het goed komt. Daarom zijn we MTB Bouw
              begonnen.
            </p>
            <p>
              Die vertrouwde partij willen we voor je zijn. Dat doen we door
              alles goed en duidelijk uit te leggen. Je krijgt een volledig
              gespecificeerde offerte en een{" "}
              <Link href="/mijn-blauwdruk" className="link-line text-ink">eigen online omgeving</Link>{" "}
              waarin staat wat we wel doen, en ook wat niet. Dat laatste is net
              zo belangrijk.
            </p>
            <p>
              Of je nu wilt{" "}
              <Link href="/verbouwing" className="link-line text-ink">verbouwen</Link>, een{" "}
              <Link href="/aanbouw-uitbouw" className="link-line text-ink">uitbouw</Link> of dakopbouw
              wilt, of een{" "}
              <Link href="/afbouwstudio" className="link-line text-ink">bedrijfspand</Link> laat
              afbouwen, en of je nu in een nieuwere woning woont of in een
              jaren-30 huis: we hebben de expertise in huis. Met eigen vakmensen
              en vaste partners uit de regio maken we het waar. Als{" "}
              <Link href="/aannemer-enschede" className="link-line text-ink">aannemer in Enschede</Link>{" "}
              werken we in{" "}
              <Link href="/aannemer-twente" className="link-line text-ink">heel Twente</Link>.
            </p>
            {playful && (
              <HandNote hand={hand} className="-rotate-2 pt-2">
                — Mathijs &amp; Robbert
              </HandNote>
            )}
          </div>
        </div>
      </section>

      {/* WERKGEBIED — kaart van Twente, elke plaats een eigen pagina */}
      <TwenteMapSection svg={<TwenteMapSvg />} places={mapPlaces} />

      {/* WAAROM MTB BOUW — donker */}
      <section className="bg-inverse text-white">
        <div className="container-page py-24 md:py-32">
          <SectionHeading eyebrow="Waarom MTB Bouw" title="Bouwen zoals het hoort." tone="inverse" />
          <div className="mt-14">
            <Slider
              label="Waarom MTB Bouw"
              until="lg"
              tone="inverse"
              className="lg:grid-cols-3 lg:gap-0 lg:border-l lg:border-t lg:border-inverse-border"
            >
              {WHY_ITEMS.map((r, i) => (
                <li
                  key={r.title}
                  className="group w-[80%] shrink-0 snap-start border border-inverse-border p-6 transition-colors duration-500 hover:bg-white/[0.04] sm:w-[45%] md:p-8 lg:w-auto lg:border-l-0 lg:border-t-0"
                >
                  <span className="label-num text-lime">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] md:text-2xl">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-inverse-muted">{r.desc}</p>
                </li>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* PARTNERS — muur van blokken */}
      <section className="bg-white">
        <div className="container-page py-24 md:py-32">
          <SectionHeading
            eyebrow="Onze partners"
            title="Sterk door lokale samenwerking."
            intro="Kwaliteit komt niet uit één set handen — het komt uit een goed netwerk. Wij bouwen met vaste, regionale partners die net zo scherp op hun vak zijn als wij."
          />
          <div className="mt-16 flex flex-wrap items-end justify-between gap-6">
            <ContactDrawerButton className="group flex cursor-pointer items-center gap-4 bg-lime px-5 py-4 text-ink transition-transform duration-500 hover:-translate-y-1.5">
              <span className="label-mono">+ Jouw project</span>
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </ContactDrawerButton>
            <span className="flex items-center gap-6">
              <span className="label-mono hidden text-stone sm:block">
                Blok voor blok gebouwd: {allPartners.length} vaste partners
              </span>
              <Link href="/regionale-partners" className="label-mono inline-flex items-center gap-2 border border-navy px-5 py-3.5 text-navy transition-colors hover:bg-navy hover:text-white">
                Ontmoet al onze partners <ArrowUpRight className="size-3.5" />
              </Link>
            </span>
          </div>
          <div className="mt-3">
            <PartnerWall partners={PARTNERS} />
          </div>
        </div>
      </section>

      {/* KENNISBANK — warmgrijs */}
      {latestArticles.length > 0 && (
        <section id="kennisbank" className="scroll-mt-20 bg-tint">
          <div className="container-page py-24 md:py-32">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading eyebrow="Inspiratie & kennis" title="Kennisbank." />
              <SliderLink href="/kennisbank">Alle artikelen</SliderLink>
            </div>
            <div className="mt-14">
              <CardSlides
                items={latestArticles}
                label="Kennisbank-artikelen"
                badge={(i) =>
                  playful && i === 0 ? (
                    <Sticker tone="navy" rotate="rotate-6" className="absolute right-4 top-4 z-10">
                      nieuw
                    </Sticker>
                  ) : null
                }
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
