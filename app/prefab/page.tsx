import type { Metadata } from "next";
import { portfolio } from "#site/content";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { SplitSection } from "@/components/sections/split-section";
import { ProcessSteps } from "@/components/sections/process-steps";
import { RelatedContent } from "@/components/sections/related-content";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { QuoteButton } from "@/components/ui/quote-button";
import { ClockIcon, RulerIcon, CheckIcon, WallIcon, ShedIcon } from "@/components/icons";
import { faqPrefab } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Prefab bouwen in Twente",
  description:
    "Houtskeletbouw, prefab daken en wanden, overkappingen en buitengebouwen. Ruwbouw in dagen in plaats van weken, maatvast uit de fabriek.",
  alternates: { canonical: "/prefab" },
  openGraph: {
    type: "website",
    title: "Prefab bouwen in Twente | MTB Bouw",
    description: "Houtskeletbouw, prefab daken en wanden, overkappingen en buitengebouwen. Ruwbouw in dagen in plaats van weken, maatvast uit de fabriek.",
    url: "/prefab",
  },
};

const ONDERDELEN = [
  {
    id: "hsb",
    icon: WallIcon,
    title: "HSB — houtskeletbouw",
    body: "Wanden en vloeren opgebouwd uit een houten frame met isolatie, in de fabriek dichtgezet en op maat gemaakt. Licht, snel gemonteerd en uitstekend geïsoleerd.",
  },
  {
    id: "elementen",
    icon: RulerIcon,
    title: "Prefab daken & wanden",
    body: "Kant-en-klare dak- en wandelementen, inclusief isolatie en afwerking, die op de bouwplaats in dagen worden gemonteerd in plaats van weken opgebouwd.",
  },
  {
    id: "sneller-bouwen",
    icon: ClockIcon,
    title: "Sneller bouwen",
    body: "Doordat elementen parallel aan de funderingswerkzaamheden in de fabriek worden gemaakt, wint een prefab-traject al snel weken tot maanden bouwtijd.",
  },
  {
    id: "overkappingen",
    icon: ShedIcon,
    title: "Overkappingen & buitengebouwen",
    body: "Ook tuinkamers, carports, overkappingen en bijgebouwen bouwen wij prefab: maatvast uit de fabriek, in een paar dagen geplaatst en direct winddicht.",
  },
];

export default function PrefabPage() {
  const relatedProjects = portfolio
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Wat we bouwen", url: "/diensten" },
          { name: "Prefab", url: "/prefab" },
        ]}
      />
      <ServiceJsonLd
        name="Prefab bouwen"
        description="Prefab aanbouwen, woningen en bedrijfshallen in Twente — sneller gebouwd, maatvast en met minder overlast."
        url="/prefab"
        serviceType="Prefab bouw"
      />
      <FaqJsonLd items={faqPrefab} />

      <PageHero
        eyebrow="Prefab"
        title="Prefab bouwen in Twente"
        intro="Snel gebouwd, zonder overlast. Bouwdelen worden in de fabriek op maat gemaakt en op locatie gemonteerd — de ruwbouw van een aanbouw staat vaak binnen een week."
        cta={<QuoteButton />}
      />

      <FeatureGrid
        items={[
          {
            icon: ClockIcon,
            title: "Weken sneller",
            text: "Aanbouw-ruwbouw binnen een week, een woning in 6-9 maanden, een bedrijfshal in 4-6 maanden.",
          },
          {
            icon: RulerIcon,
            title: "Maatvast uit de fabriek",
            text: "Elementen worden onder geconditioneerde omstandigheden gemaakt — strakker dan op een natte bouwplaats kan.",
          },
          {
            icon: CheckIcon,
            title: "Minder overlast",
            text: "Korte bouwtijd op locatie betekent minder bouwverkeer, minder rommel en sneller weer rust in huis.",
          },
        ]}
      />

      {/* ONDERDELEN — HSB, elementen, sneller bouwen, overkappingen */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Wat wij prefab bouwen
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Van HSB tot overkapping — alles uit de fabriek
          </h2>
          <div className="mt-12 grid gap-px border-l border-t border-mist md:grid-cols-2">
            {ONDERDELEN.map(({ id, icon: Icon, title, body }) => (
              <div
                key={id}
                id={id}
                className="scroll-mt-24 border-b border-r border-mist bg-white p-8"
              >
                <Icon className="h-7 w-7 text-lime-dark" />
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SplitSection
        eyebrow="Hoe het werkt"
        title="Van fabriek naar fundering"
        image={{ src: "/images/projects/project-3.jpg", alt: "Prefab bouwproject" }}
        cta={{ href: "/bouwmethodes", label: "Vergelijk: traditioneel bouwen" }}
      >
        <p>
          Bij prefab bouwen we wanden, vloeren, daken of complete elementen in
          de fabriek, exact op maat. Op de bouwplaats monteren we ze in dagen in
          plaats van weken. Ondertussen is de fundering al gestort — de
          trajecten lopen parallel.
        </p>
        <p>
          Prefab is ideaal voor aanbouwen, dakopbouwen, bijgebouwen, complete
          woningen en bedrijfshallen. En omdat wij ook traditioneel bouwen,
          adviseren we eerlijk wat voor jouw project de beste keuze is.
        </p>
      </SplitSection>

      <ProcessSteps compact />

      <RelatedContent
        projects={relatedProjects}
        eyebrow="Gerealiseerd"
        title="Recente projecten"
      />

      <FaqAccordion items={faqPrefab} title="Veelgestelde vragen over prefab" />

      <CtaBanner
        eyebrow="Vrijblijvend advies"
        title="Benieuwd of prefab bij jouw project past?"
        text="We rekenen traditioneel en prefab eerlijk voor je door — inclusief bouwtijd."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
