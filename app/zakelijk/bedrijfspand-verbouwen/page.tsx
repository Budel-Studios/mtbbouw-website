import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd, WebPageJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { ProcessLine } from "@/components/zakelijk/process-line";
import { WallIllustration } from "@/components/zakelijk/wall-illustration";
import { ZakelijkContact } from "@/components/zakelijk/contact-section";
import { BuildingIcon, CheckIcon, ShedIcon, WallIcon } from "@/components/icons";
import { facts } from "@/lib/facts";
import { faqBedrijfspand } from "@/lib/faq";

const URL = "/zakelijk/bedrijfspand-verbouwen";
const TITLE = "Bedrijfspand verbouwen in Enschede & Twente | MTB Bouw";
const DESCRIPTION =
  "Kantoor, winkel of bedrijfspand verbouwen in Enschede en Twente? MTB Bouw verzorgt indeling, afbouw en afstemming met vaste installatiepartners.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    images: [{ url: "/images/projects/broodbode-apeldoorn/12.jpg" }],
  },
};

const TOEPASSINGEN = [
  {
    href: "#kantoor",
    icon: BuildingIcon,
    title: "Kantoor",
    text: "Kantoor verbouwen of een casco kantoorruimte afbouwen.",
  },
  {
    href: "#winkel-showroom",
    icon: WallIcon,
    title: "Winkel of showroom",
    text: "Publieksruimte, presentatie, licht en magazijn aanpassen.",
  },
  {
    href: "#bedrijfsruimte",
    icon: ShedIcon,
    title: "Bedrijfsruimte",
    text: "Een kantine of inpandig kantoor in je bedrijfshal.",
  },
];

const AANPAK = [
  {
    title: "Pandopname",
    text: "We lopen het pand met je door en leggen per ruimte vast wat er staat: wanden, vloeren, plafonds en de techniek die we zien.",
    besluit: "Welke ruimtes en onderdelen meedoen.",
  },
  {
    title: "Gebruik en scope",
    text: "Hoeveel werkplekken, overlegruimtes of opslag? Wat moet er straks in de ruimte gebeuren? Daaruit volgt wat we gaan doen.",
    besluit: "Het gewenste gebruik en wat in de scope zit.",
  },
  {
    title: "Offerte en keuzes",
    text: "Je ontvangt een gespecificeerde offerte. Stelposten en uitsluitingen staan er duidelijk in, en we lopen de keuzes in afwerking samen door.",
    besluit: "Materialen, afwerking en planning.",
  },
  {
    title: "Uitvoering en afstemming",
    text: "We plannen de bouw met de installatiepartners en met hoe jouw bedrijf draait. Wijzigingen in werk, prijs of planning bespreken we vooraf.",
    besluit: "Eventuele wijzigingen, altijd vooraf.",
  },
  {
    title: "Oplevering",
    text: "We lopen het werk samen na en lossen openstaande punten op. Na de oplevering bellen we je na om te horen of alles naar wens is.",
    besluit: "Akkoord op de oplevering.",
  },
];

const OPNAME_VOORBEELD = [
  ["Kantoortuin", "Wand", "Geen scheiding", "Metal stud-wand met glasstrook"],
  ["Kantoortuin", "Plafond", "Verouderd, galmt", "Akoestisch systeemplafond"],
  ["Overlegruimte", "Deur", "Ontbreekt", "Deur met kozijn in de nieuwe wand"],
  ["Pantry", "Vloer", "Tapijt", "Vloer die tegen water kan"],
];

const KOSTEN = [
  "De oppervlakte en het aantal ruimtes",
  "Hoeveel wanden, deuren en glas er nieuw komen",
  "Of er een nieuw plafond in moet",
  "Wat er aan installaties verandert",
  "Pantry, sanitair en vloeren",
  "Het afwerkingsniveau",
  "Gefaseerd werken terwijl het bedrijf doordraait",
];

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 space-y-2.5">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-[15px] text-ink">
          <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function BedrijfspandVerbouwenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Zakelijk", url: "/zakelijk" },
          { name: "Bedrijfspanden verbouwen", url: URL },
        ]}
      />
      <WebPageJsonLd name="Bedrijfspand verbouwen in Enschede en Twente" description={DESCRIPTION} url={URL} />
      <ServiceJsonLd
        name="Bedrijfspand verbouwen"
        description="Verbouwing en afbouw van kantoren, winkels, showrooms en bedrijfsruimten door MTB Bouw uit Enschede: indeling, metal stud-wanden, systeemplafonds en afwerking, met afstemming van installaties."
        url={URL}
        serviceType="Verbouwing bedrijfspand"
      />
      <FaqJsonLd items={faqBedrijfspand} />

      {/* 1 — HERO */}
      <PageHero
        variant="image"
        image={{
          src: "/images/projects/broodbode-apeldoorn/12.jpg",
          alt: "Nieuwe wanden met witte metrotegels en een doorgang in de spoelkeuken van De Broodbode in Apeldoorn, gebouwd door MTB Bouw",
          position: "50% 50%",
          caption: "Nieuwe wanden en tegelwerk in de spoelkeuken van De Broodbode, Apeldoorn",
        }}
        eyebrow="Zakelijk · Bedrijfspanden"
        title="Bedrijfspand verbouwen in Enschede en Twente"
        tagline="Meer uit je ruimte. Minder gedoe onderweg."
        intro="Een bedrijfspand moet passen bij het werk dat je erin doet. MTB Bouw verbouwt kantoren, winkels en bedrijfsruimten in Enschede en Twente. We helpen met de indeling, bouwkundige aanpassingen en afwerking, en stemmen specialistische installatiewerkzaamheden af met vaste partners."
        cta={
          <>
            <ArrowLink drawer preset="zakelijk" onDark>
              Bespreek je bedrijfsruimte
            </ArrowLink>
            <ArrowLink href="#toepassingen" onDark>
              Kantoor, winkel of bedrijfsruimte
            </ArrowLink>
          </>
        }
      />

      {/* 2 — TOEPASSINGEN */}
      <section id="toepassingen" className="scroll-mt-24 bg-paper">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow text-stone">Drie toepassingen</p>
          <ul className="mt-6 grid gap-px border-l border-t border-mist md:grid-cols-3">
            {TOEPASSINGEN.map(({ href, icon: Icon, title, text }) => (
              <li key={href} className="border-b border-r border-mist bg-white">
                <a
                  href={href}
                  className="group flex h-full items-start gap-5 p-6 transition-colors hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-navy md:p-8"
                >
                  <Icon className="h-8 w-8 shrink-0 text-navy" />
                  <span>
                    <span className="block text-xl font-semibold">{title}</span>
                    <span className="mt-1 block text-[15px] leading-relaxed text-stone">{text}</span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-ink">
                      Naar {title.toLowerCase()}
                      <span aria-hidden="true" className="transition-transform group-hover:translate-y-0.5 motion-reduce:transition-none">↓</span>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-stone">
            Ook{" "}
            <a href="#wanden" className="font-semibold text-ink underline hover:text-navy">
              wanden
            </a>{" "}
            en{" "}
            <a href="#plafonds" className="font-semibold text-ink underline hover:text-navy">
              plafonds
            </a>{" "}
            hebben verderop een eigen uitleg.
          </p>
        </div>
      </section>

      {/* 3 — KANTOOR */}
      <section id="kantoor" className="scroll-mt-24 border-y border-mist bg-white">
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow text-stone">01 — Kantoor</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">Kantoor verbouwen in Enschede en Twente</h2>
            <p className="mt-5 leading-relaxed text-stone">
              Een kantoor werkt pas als de indeling klopt bij hoe je team
              werkt. Waar zitten de vaste werkplekken, waar wordt gebeld en
              overlegd, en waar moet het stil zijn? Daar beginnen we mee.
              Daarna volgen de wanden, het plafond, licht en techniek.
            </p>
            <p className="mt-4 leading-relaxed text-stone">
              Veel kantoorruimte wordt casco opgeleverd: kale vloeren, geen
              wanden, geen plafond. Dan bouwen we de ruimte af, van indeling en
              installaties tot pantry en sanitair. Is het kantoor al in
              gebruik, dan kijken we wat kan blijven en wat anders moet.
            </p>
            <Bullets
              items={[
                "Indeling met werkplekken, vergaderplekken en belplekken",
                "Scheidingswanden en glaswanden",
                "Akoestiek: plafond, wandpanelen en de juiste afscheiding",
                "Licht en een verlichtingsplan per zone",
                "Elektra en data, met onze installatiepartners",
                "Pantry en sanitair",
              ]}
            />
          </div>
          <div className="space-y-8 lg:col-span-5 lg:col-start-8">
            <div className="border border-mist bg-paper p-7">
              <h3 className="text-xl font-semibold">Wat we nodig hebben voor een scope</h3>
              <ul className="mt-4 space-y-2 text-[15px] text-ink">
                {[
                  "Een plattegrond, als die er is",
                  "Het aantal werkplekken en overlegruimtes",
                  "Wat er nu staat en wat weg mag",
                  "Wensen voor licht, akoestiek en afwerking",
                  "Het huurcontract, als je huurt",
                  "Je planning en vaste momenten in het jaar",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span aria-hidden="true" className="text-navy">·</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l-4 border-lime bg-white pl-5">
              <h3 className="text-lg font-semibold">Doorwerken tijdens de verbouwing?</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone">
                Dat hangt af van de ingreep. Een nieuwe indeling of plafond kan
                soms per zone, met het werkgebied afgeschermd. Bij werk aan
                installaties, vloeren of een hele verdieping is tijdelijk
                uitwijken vaak verstandiger. Dat bespreken we vooraf en nemen we
                op in de planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — WINKEL EN SHOWROOM */}
      <section id="winkel-showroom" className="scroll-mt-24 bg-paper">
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow text-stone">02 — Winkel en showroom</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">Winkel of showroom verbouwen</h2>
            <p className="mt-5 leading-relaxed text-stone">
              In een winkel of showroom draait alles om de klant: hoe die
              binnenkomt, wat die ziet en waar die naartoe loopt. Achter de
              schermen moet het magazijn werken. We kijken naar beide en
              plannen het werk rond de momenten dat je open bent.
            </p>
            <Bullets
              items={[
                "Publieksruimte en looproute",
                "Presentatie, balies en maatwerk",
                "Verlichting die je product laat zien",
                "Magazijn en personeelsruimte",
                "Vloeren, wanden en afwerking",
                "Planning rond je openingstijden en drukke periodes",
              ]}
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink">
              <Image
                src="/images/projects/broodbode-apeldoorn/10.jpg"
                alt="Maatwerk houten zitbanken met plantenbak en houten lattenwand bij De Broodbode Apeldoorn"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-stone">
              Een winkelreferentie hebben we nog niet online. Wat we bij de
              lunchrooms van De Broodbode deden, komt wel terug in winkels en
              showrooms: balies en maatwerk, tegelwerk, verlichting in het
              maatwerk en een indeling die voor klant en personeel werkt.
            </p>
          </div>
        </div>
      </section>

      {/* 5 — BEDRIJFSRUIMTE EN KANTOOR IN DE HAL */}
      <section id="bedrijfsruimte" className="scroll-mt-24 border-y border-mist bg-white">
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow text-stone">03 — Bedrijfsruimte</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">Bedrijfsruimte en kantoor in een hal</h2>
            <p className="mt-5 leading-relaxed text-stone">
              Steeds meer ondernemers maken een deel van hun hal geschikt als
              kantoor of kantine. Dan wil je een ruimte die warm, stil en
              comfortabel is, midden in een hal die dat niet is. Dat vraagt om
              goede afscheiding, isolatie en afstemming over klimaat en
              brandveiligheid.
            </p>
            <Bullets
              items={[
                "Ruimtegebruik: wat komt waar in de hal",
                "Afscheiding met geïsoleerde wanden",
                "Akoestiek tegen het geluid uit de hal",
                "Comfort: licht, verwarming en ventilatie",
                "Brandveiligheid afstemmen met de juiste partijen",
                "Techniek bereikbaar houden boven het plafond",
              ]}
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="border border-mist bg-paper p-7">
              <h3 className="text-xl font-semibold">Wie we erbij halen</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone">
                Gaat het om een wijziging aan de constructie, dan rekent een
                constructeur het door. Voor verwarming, ventilatie en elektra
                werken we met installateurs. Eisen aan brandveiligheid en
                vluchtwegen stemmen we af voordat we gaan bouwen.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-stone">
                Een geïsoleerde houtskeletbouwwand kan in een hal een goede
                keuze zijn. Die kunnen we via ons{" "}
                <Link href="/prefab" className="font-semibold text-ink underline hover:text-navy">
                  Prefab-label
                </Link>{" "}
                laten maken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — WANDEN EN PLAFONDS */}
      <section className="bg-paper">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">04 — Wanden, plafonds en afwerking</p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">Wanden en plafonds horen bij elkaar</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Bij bijna elke zakelijke verbouwing komen nieuwe wanden en een
            nieuw plafond kijken. Ze hangen samen met licht, installaties en
            akoestiek. Daarom nemen we ze mee in één scope en één planning.
          </p>

          <div id="wanden" className="mt-14 grid scroll-mt-24 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h3 className="text-3xl font-semibold">Wanden: metal stud</h3>
              <p className="mt-4 leading-relaxed text-stone">
                Een metal stud-wand is een droog gebouwde wand van stalen
                profielen met isolatie ertussen en gipsplaat ertegen. Hij staat
                snel, weegt weinig en is later aan te passen. Deuren,
                kozijnen en glasstroken nemen we mee in de wand.
              </p>
              <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-ink">
                <li>
                  <span className="label-mono mb-1 block text-stone">Isolatie en beplating</span>
                  Minerale wol in de wand, enkele of dubbele gipsplaat aan
                  beide kanten. Meer lagen betekent meer massa en meestal een
                  betere geluidsisolatie.
                </li>
                <li>
                  <span className="label-mono mb-1 block text-stone">Aansluitingen</span>
                  Deuren en
                  glas sluiten we strak aan. Geluid zoekt de zwakste plek: een
                  kier bij de deur of een wand die stopt bij het systeemplafond
                  laat veel door.
                </li>
                <li>
                  <span className="label-mono mb-1 block text-stone">Afwerking</span>
                  Naden
                  vullen en schuren, daarna sauswerk of behang.
                </li>
                <li>
                  <span className="label-mono mb-1 block text-stone">Beperkingen</span>
                  Een metal
                  stud-wand is niet dragend. Voor zware dingen aan de wand, zoals
                  een keuken of tv, komt er vooraf versteviging in. In natte
                  ruimtes kiezen we een plaat die daartegen kan.
                </li>
              </ul>
              <p className="mt-5 border-l-2 border-lime pl-4 text-[15px] leading-relaxed text-stone">
                Geluidsisolatie en geluidsabsorptie zijn twee verschillende
                dingen. Isolatie houdt geluid tegen tussen twee ruimtes; dat
                doet de wand. Absorptie dempt de galm binnen een ruimte; dat
                doen het plafond en zachte materialen. Een wand die nergens
                geluid doorlaat, bestaat niet. Wat haalbaar is, hangt af van
                de opbouw en de aansluitingen.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <WallIllustration />
            </div>
          </div>

          <div id="plafonds" className="mt-20 grid scroll-mt-24 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h3 className="text-3xl font-semibold">Plafonds: systeemplafond en akoestiek</h3>
              <p className="mt-4 leading-relaxed text-stone">
                Een systeemplafond hangt onder het bestaande plafond, met
                losse panelen in een raster. Erboven blijft ruimte voor
                leidingen, kabels en ventilatie, en via een uitneembaar paneel
                kun je er later weer bij.
              </p>
              <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-ink">
                <li>
                  <span className="label-mono mb-1 block text-stone">Paneelkeuze</span>
                  Er zijn
                  panelen van minerale vezel, metaal en gips, in verschillende
                  afwerkingen. Welke past, hangt af van de ruimte en wat het
                  plafond moet doen.
                </li>
                <li>
                  <span className="label-mono mb-1 block text-stone">Akoestiek</span>
                  Akoestische
                  panelen nemen geluid op en dempen de galm. Als we een
                  akoestische waarde noemen, komt die uit de productgegevens van
                  de fabrikant.
                </li>
                <li>
                  <span className="label-mono mb-1 block text-stone">Verlichting</span>
                  Lichtpanelen
                  en spots nemen we op in het plafondplan, samen met de
                  installateur.
                </li>
                <li>
                  <span className="label-mono mb-1 block text-stone">Vrije hoogte</span>
                  Een
                  verlaagd plafond kost hoogte. Hoeveel ruimte erboven nodig is,
                  hangt af van de installaties die er komen.
                </li>
              </ul>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="border border-mist bg-white p-7">
                <h4 className="text-xl font-semibold">Vooraf vastleggen</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-stone">
                  Een plafond is lastig te veranderen als het eenmaal hangt.
                  Daarom leggen we dit vooraf samen vast.
                </p>
                <ul className="mt-4 space-y-2 text-[15px] text-ink">
                  {[
                    "De hoogte nu en de hoogte straks",
                    "Wat er boven het plafond loopt of komt",
                    "Waar lampen, roosters en sensoren komen",
                    "Welke ruimtes stil moeten zijn",
                    "Waar je later bij de installaties moet kunnen",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — AANPAK */}
      <section className="border-y border-mist bg-paper">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">05 — Aanpak en fasering</p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">Van pandopname tot oplevering</h2>
          <ProcessLine steps={AANPAK} />

          <div className="mt-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="text-xl font-semibold">Zo ziet een opname eruit</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone">
                Tijdens de opname leggen we per ruimte en per onderdeel vast
                wat er staat en wat het moet worden. Een verzonnen voorbeeld,
                om te laten zien hoe dat werkt.
              </p>
            </div>
            <div className="overflow-x-auto lg:col-span-8">
              <table className="w-full min-w-[34rem] border-collapse border border-mist bg-white text-left text-[15px]">
                <caption className="sr-only">Voorbeeld van een pandopname, niet van een echt project</caption>
                <thead>
                  <tr className="bg-paper">
                    {["Ruimte", "Onderdeel", "Nu", "Wordt"].map((h) => (
                      <th key={h} scope="col" className="label-mono border-b border-mist px-4 py-3 font-normal text-stone">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {OPNAME_VOORBEELD.map((r) => (
                    <tr key={r.join("|")} className="border-b border-mist last:border-0">
                      {r.map((c, i) => (
                        <td key={i} className={`px-4 py-3 ${i === 3 ? "text-ink" : "text-stone"}`}>
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-2 text-xs text-stone">Voorbeeld, niet van een echt project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — KOSTEN */}
      <section className="bg-white">
        <div className="container-page grid gap-10 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-stone">06 — Kosten en budget</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">Wat kost een bedrijfspand verbouwen?</h2>
            <p className="mt-5 leading-relaxed text-stone">
              Dat hangt af van het pand, de installaties en de afwerking. Een
              prijs per vierkante meter zegt daarom weinig, zeker als je een
              kantoor naast een winkel of een hal legt. Dit zijn de factoren
              die het meest bepalen.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-px border-l border-t border-mist sm:grid-cols-2">
              {KOSTEN.map((k) => (
                <li key={k} className="border-b border-r border-mist bg-paper px-5 py-4 text-[15px] text-ink">
                  {k}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-stone">
              Na de opname op locatie maken we de offerte op. {facts.offerte.standaard}{" "}
              Meerwerk voeren we alleen uit na jouw akkoord.
            </p>
          </div>
        </div>
      </section>

      {/* 9 — BEWIJS */}
      <section className="border-y border-mist bg-paper">
        <div className="container-page grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-ink">
            <Image
              src="/images/projects/broodbode-apeldoorn/02.jpg"
              alt="Heringedeelde gastruimte van De Broodbode in Apeldoorn, met open plafond en nieuwe indeling"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow text-stone">07 — Uit de praktijk</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">Een oud winkelpand, opnieuw ingedeeld</h2>
            <p className="mt-5 leading-relaxed text-stone">
              In het centrum van Apeldoorn bouwden we voor De Broodbode een
              winkelpand uit de jaren &apos;40–&apos;50 om tot lunchroom. Het
              is horeca, maar de onderdelen zijn dezelfde als bij veel
              bedrijfspanden: gedeeltelijke sloop, een nieuwe indeling met
              Ytong- en metal stud-wanden, volledig nieuwe elektra met
              krachtstroom en een nieuwe meterkast door HIBO, en tegelwerk en
              maatwerk in de afwerking. Uitgevoerd in circa zeven weken.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ArrowLink href="/projecten/broodbode-apeldoorn-lunchroom">Bekijk het project</ArrowLink>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-stone">
              Lees ook:{" "}
              <Link href="/kennisbank/kantoor-inrichten-waar-mensen-graag-werken" className="font-semibold text-ink underline hover:text-navy">
                een kantoor inrichten waar mensen graag werken
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion items={faqBedrijfspand} eyebrow="08 — Veelgesteld" title="Vragen over bedrijfspanden" />

      {/* WERKGEBIED */}
      <section className="border-t border-mist bg-white">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow text-stone">Werkgebied</p>
          <p className="mt-4 max-w-3xl leading-relaxed text-stone">
            We werken vanuit Enschede voor bedrijven in heel Twente, zoals in{" "}
            <Link href="/aannemer-enschede" className="font-semibold text-ink underline hover:text-navy">
              Enschede
            </Link>
            ,{" "}
            <Link href="/aannemer-hengelo" className="font-semibold text-ink underline hover:text-navy">
              Hengelo
            </Link>{" "}
            en{" "}
            <Link href="/aannemer-almelo" className="font-semibold text-ink underline hover:text-navy">
              Almelo
            </Link>
            . Een zakelijke opdracht buiten Twente, bijvoorbeeld in Deventer,
            Apeldoorn of Zwolle? Dat is bespreekbaar; neem gerust contact op.
          </p>
        </div>
      </section>

      <ZakelijkContact
        title="Plannen met je bedrijfsruimte?"
        intro="Vertel waar het pand staat, hoe je het nu gebruikt en wat er anders moet. We komen kijken en maken daarna een gespecificeerde offerte."
        cta="Bespreek je bedrijfsruimte"
      />
    </>
  );
}
