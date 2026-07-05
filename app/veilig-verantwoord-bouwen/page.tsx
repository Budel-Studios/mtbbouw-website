import type { Metadata } from "next";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { SplitSection } from "@/components/sections/split-section";
import { TeamGrid } from "@/components/sections/team-grid";
import { IconServicesGrid } from "@/components/sections/icon-services-grid";
import { PerkGrid } from "@/components/sections/perk-grid";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import {
  ShieldIcon,
  WrenchIcon,
  HouseIcon,
  ClockIcon,
  BroomIcon,
  UsersIcon,
  RulerIcon,
  LayersIcon,
  BoltIcon,
  CheckIcon,
  HammerIcon,
  GraduationIcon,
  TrendingUpIcon,
  ChatIcon,
  PaintIcon,
  TruckIcon,
  CompassIcon,
  BulbIcon,
  MapPinIcon,
  RecycleIcon,
} from "@/components/icons";
import { faqVeiligBouwen } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Veilig & verantwoord bouwen — hoe MTB Bouw werkt" },
  description:
    "Hoe MTB Bouw omgaat met veiligheid, kwaliteit en verantwoordelijkheid op de bouwplaats. Erkend leerbedrijf, vaste partners en heldere afspraken — een kijkje achter de schermen bij aannemer in Twente.",
  keywords: [
    "veilig bouwen",
    "verantwoord bouwen",
    "bouwbedrijf Enschede",
    "aannemer Twente",
    "erkend leerbedrijf bouw",
    "veilig werken bouw",
    "kwaliteit in de bouw",
    "vakmanschap bouw",
  ],
  alternates: { canonical: "/veilig-verantwoord-bouwen" },
  openGraph: {
    type: "website",
    title: "Veilig & verantwoord bouwen — MTB Bouw",
    description:
      "Een kijkje achter de schermen: hoe MTB Bouw veiligheid, kwaliteit en verantwoordelijkheid iedere dag in de praktijk brengt.",
    url: "/veilig-verantwoord-bouwen",
  },
};

export default function VeiligVerantwoordBouwenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Veilig & verantwoord bouwen", url: "/veilig-verantwoord-bouwen" },
        ]}
      />
      <FaqJsonLd items={faqVeiligBouwen} />

      {/* HERO — bewust zonder grote CTA */}
      <PageHero
        variant="image"
        image={{
          src: "/images/projects/bedrijfshal-borne.webp",
          alt: "Bouwplaats van MTB Bouw",
        }}
        eyebrow="Hoe wij werken"
        title="Veilig bouwen begint met verantwoordelijkheid."
        intro="Bij MTB Bouw geloven we dat goed bouwen verder gaat dan alleen het eindresultaat. Veilig werken, duidelijke communicatie, respect voor de omgeving en vakmanschap vormen de basis van ieder project."
      />

      {/* 1. ONZE VISIE */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
          Onze visie
        </p>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
          Bouwen is mensenwerk
        </h2>
        <div className="mt-6 space-y-4 leading-relaxed text-stone">
          <p>
            Een pand staat er, maar hoe het tot stand komt, zie je niet altijd
            terug in het eindresultaat. Wij vinden dat minstens zo belangrijk.
            Veiligheid, kwaliteit en communicatie zijn geen woorden voor op
            een poster — het zijn dingen waar we elke dag opnieuw mee bezig
            zijn, op elke bouwplaats.
          </p>
          <p>
            Dat begint bij onszelf: hoe we werken, hoe we met elkaar omgaan
            en hoe we omgaan met de woning of het pand van een ander. Deze
            pagina laat zien hoe dat er in de praktijk uitziet.
          </p>
        </div>
      </section>

      {/* 2. VEILIG WERKEN */}
      <section className="bg-paper">
        <SplitSection
          eyebrow="Veilig werken"
          title="Veiligheid is geen bijzaak"
          image={{
            src: "/images/projects/project-1.jpg",
            alt: "Vakman van MTB Bouw met persoonlijke beschermingsmiddelen",
          }}
        >
          <p>
            Een veilige bouwplaats ontstaat niet vanzelf. Dat vraagt om
            discipline: elke dag opnieuw, van de eerste tot de laatste
            werkdag van een project.
          </p>
        </SplitSection>
        <FeatureGrid
          headingLevel="h3"
          columns={3}
          items={[
            { icon: ShieldIcon, title: "Persoonlijke beschermingsmiddelen", text: "Helm, veiligheidsschoenen en de juiste bescherming zijn geen uitzondering, maar standaard." },
            { icon: WrenchIcon, title: "Veilig gereedschap", text: "Gekeurd en goed onderhouden gereedschap — elke dag gecontroleerd voor gebruik." },
            { icon: HouseIcon, title: "Veilige werkplek", text: "Steigers, afzettingen en looproutes die kloppen bij de situatie op locatie." },
            { icon: ClockIcon, title: "Dagelijkse controle", text: "Voor de start van het werk checken we de bouwplaats — geen losse eindjes." },
            { icon: BroomIcon, title: "Opruimen van de bouwplaats", text: "Een opgeruimde bouwplaats is een veilige bouwplaats. Dat is geen gunst, maar gewoonte." },
            { icon: UsersIcon, title: "Aandacht voor collega's", text: "Als iets niet veilig aanvoelt, spreken we elkaar erop aan — zonder gedoe." },
          ]}
        />
      </section>

      {/* 3. VERANTWOORD BOUWEN */}
      <section>
        <SplitSection
          eyebrow="Verantwoord bouwen"
          title="Respect voor wat er al staat"
          imageSide="left"
          image={{
            src: "/images/projects/project-2.jpg",
            alt: "Zorgvuldige afwerking tijdens een verbouwing van MTB Bouw",
          }}
        >
          <p>
            Of het nu gaat om een bewoonde woning of een draaiend
            bedrijfspand: we werken in de leefomgeving van een ander. Dat
            vraagt om zorgvuldigheid, niet alleen vakmanschap.
          </p>
        </SplitSection>
        <FeatureGrid
          headingLevel="h3"
          columns={3}
          items={[
            { icon: HouseIcon, title: "Respect voor eigendommen", text: "We behandelen iemands huis of pand zoals we ons eigen werk behandelen: met zorg." },
            { icon: ShieldIcon, title: "Bescherming van bestaande situaties", text: "Vloeren, meubels en afwerking die blijven staan, worden afgedekt en beschermd." },
            { icon: RecycleIcon, title: "Stofbeperking", text: "Waar mogelijk werken we stofarm, zeker bij bewoonde of in gebruik zijnde ruimtes." },
            { icon: LayersIcon, title: "Afvalscheiding", text: "Bouwafval scheiden we op locatie — geen alles-in-één-container." },
            { icon: BroomIcon, title: "Nette bouwplaats", text: "Aan het eind van de dag ruimen we op. Niet omdat het moet, maar omdat het hoort." },
            { icon: CheckIcon, title: "Zorgvuldige oplevering", text: "Bij oplevering lopen we samen door het project — geen verrassingen achteraf." },
          ]}
        />
      </section>

      {/* 4. VAKMANSCHAP */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 pt-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Vakmanschap
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold sm:text-4xl">
            Waar kwaliteit vandaan komt
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Kwaliteit ontstaat niet toevallig. Het is het resultaat van goede
            voorbereiding, ervaren mensen en het lef om iets recht te zetten
            als het niet klopt. Bouwen blijft mensenwerk — soms loopt iets
            anders dan gepland. Dan is open communicatie belangrijker dan een
            gladde uitleg.
          </p>
        </div>
        <FeatureGrid
          headingLevel="h3"
          columns={3}
          items={[
            { icon: RulerIcon, title: "Goede voorbereiding", text: "Een project dat vooraf goed is uitgedacht, verloopt achteraf een stuk soepeler." },
            { icon: HammerIcon, title: "Ervaren vakmensen", text: "Onze mensen kennen het vak — van ruwbouw tot laatste afwerking." },
            { icon: UsersIcon, title: "Betrouwbare partners", text: "Voor specialistisch werk schakelen we vaste partners in, geen wisselende onderaannemers." },
            { icon: CheckIcon, title: "Eigen kwaliteitscontroles", text: "We checken ons werk tijdens de uitvoering, niet pas bij de oplevering." },
            { icon: RulerIcon, title: "Oog voor detail", text: "De laatste centimeter maakt vaak het verschil — daar nemen we de tijd voor." },
            { icon: GraduationIcon, title: "Continu verbeteren", text: "Elk project leert ons iets. Dat nemen we mee naar het volgende." },
          ]}
        />
      </section>

      {/* 5. OPLEIDEN EN ONTWIKKELEN */}
      <section>
        <SplitSection
          eyebrow="Opleiden en ontwikkelen"
          title="Erkend leerbedrijf"
          image={{
            src: "/images/team/rick.jpg",
            alt: "Vakman van MTB Bouw begeleidt een collega op de bouwplaats",
          }}
        >
          <p>
            MTB Bouw is een <strong className="text-ink">SBB-erkend leerbedrijf</strong>.
            We geloven dat je het vak leert op de bouwplaats, niet alleen in
            de schoolbanken. Meer over hoe dat eruitziet lees je op onze
            pagina over <ArrowLink href="/werkgenoeg">werken bij MTB Bouw</ArrowLink>.
          </p>
        </SplitSection>
        <FeatureGrid
          headingLevel="h3"
          columns={3}
          items={[
            { icon: GraduationIcon, title: "BBL-opleidingen", text: "Leerlingen combineren werken bij ons met hun opleiding — vanaf niveau 2." },
            { icon: UsersIcon, title: "Praktijkbegeleiding", text: "Je loopt mee met ervaren vakmensen en krijgt stap voor stap meer verantwoordelijkheid." },
            { icon: TrendingUpIcon, title: "Doorgroeimogelijkheden", text: "Van leerling tot timmerman, voorman of projectleider — inzet bepaalt je groei." },
            { icon: HammerIcon, title: "Specialistische opleidingen", text: "We investeren in cursussen en trainingen, ook voor collega's die al vakman zijn." },
            { icon: ChatIcon, title: "Kennis delen", text: "Ervaring van oudere collega's geven we actief door aan jonge vakmensen." },
            { icon: BulbIcon, title: "Investeren in jonge vakmensen", text: "We geven leerlingen verantwoordelijkheid vroeg — dat is waar groei vandaan komt." },
          ]}
        />
      </section>

      <TeamGrid
        eyebrow="Onze mensen"
        title="De vakmensen achter MTB Bouw"
        showBio={false}
      />

      {/* 6. SAMENWERKING */}
      <IconServicesGrid
        eyebrow="Samenwerking"
        title="Vaste partners, constante kwaliteit"
        items={[
          { icon: WrenchIcon, label: "Installateurs" },
          { icon: RulerIcon, label: "Stukadoors" },
          { icon: PaintIcon, label: "Schilders" },
          { icon: BoltIcon, label: "Elektriciens" },
          { icon: TruckIcon, label: "Leveranciers" },
          { icon: CompassIcon, label: "Constructeurs" },
          { icon: CompassIcon, label: "Architecten" },
        ]}
      />
      <div className="mx-auto -mt-8 max-w-3xl px-6 pb-16">
        <p className="leading-relaxed text-stone">
          We werken met een vaste schil van partners waar we al jaren mee
          samenwerken. Dat betekent dat iedereen elkaars manier van werken
          kent — geen ruis, geen verrassingen, en werk dat op elkaar aansluit
          in plaats van los naast elkaar staat.
        </p>
      </div>

      {/* 7. ONZE BOUWBELOFTE — visueel hoogtepunt */}
      <PerkGrid
        eyebrow="Onze bouwbelofte"
        title="Waar je op kunt rekenen"
        items={[
          { icon: ChatIcon, text: "Wij communiceren eerlijk." },
          { icon: ClockIcon, text: "Wij houden afspraken." },
          { icon: ShieldIcon, text: "Wij werken veilig." },
          { icon: GraduationIcon, text: "Wij leren continu." },
          { icon: BroomIcon, text: "Wij houden de bouwplaats netjes." },
          { icon: HouseIcon, text: "Wij behandelen iedere woning met respect." },
          { icon: HammerIcon, text: "Wij investeren in vakmanschap." },
          { icon: UsersIcon, text: "Wij werken met vaste partners." },
          { icon: BulbIcon, text: "Wij denken mee." },
          { icon: CheckIcon, text: "Wij leveren zorgvuldig op." },
        ]}
      />

      {/* 8. DUURZAAM WERKEN */}
      <IconServicesGrid
        eyebrow="Duurzaam werken"
        title="Praktisch, niet overdreven"
        items={[
          { icon: RecycleIcon, label: "Afval scheiden" },
          { icon: RecycleIcon, label: "Hergebruik van materialen" },
          { icon: LayersIcon, label: "Duurzame keuzes" },
          { icon: ClockIcon, label: "Efficiënte planning" },
          { icon: MapPinIcon, label: "Lokale leveranciers" },
        ]}
      />
      <div className="mx-auto -mt-8 max-w-3xl px-6 pb-16">
        <p className="leading-relaxed text-stone">
          We roepen niet dat we het duurzaamste bouwbedrijf van Nederland
          zijn — dat zou niet eerlijk zijn. Wel scheiden we afval standaard,
          hergebruiken we materiaal waar dat kan, en werken we met lokale
          leveranciers zodat transport en doorlooptijd beperkt blijven.
        </p>
      </div>

      {/* 9. FAQ */}
      <FaqAccordion
        items={faqVeiligBouwen}
        eyebrow="Veelgestelde vragen"
        title="Vragen over hoe wij werken"
      />

      {/* Rustige interne links — bewust geen grote CTA */}
      <section className="border-t border-mist py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Meer lezen
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <ArrowLink href="/over-ons">Over ons</ArrowLink>
            <ArrowLink href="/werkgenoeg">Werken bij</ArrowLink>
            <ArrowLink href="/projecten">Projecten</ArrowLink>
            <ArrowLink href="/verbouwing">Verbouw &amp; renovatie</ArrowLink>
            <ArrowLink href="/aanbouw-uitbouw">Aanbouw &amp; uitbouw</ArrowLink>
            <ArrowLink href="/contact">Contact</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
