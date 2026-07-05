import type { Metadata } from "next";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { QuoteButton } from "@/components/ui/quote-button";
import { pillars } from "@/lib/data";
import { CheckIcon, ChatIcon, HammerIcon, ShieldIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Hoe wij werken — van kennismaking tot nazorg",
  description:
    "Bouwen begint bij communicatie. Onze werkwijze in acht heldere stappen: van gratis intake op locatie tot oplevering — met vaste afspraken en één aanspreekpunt.",
  alternates: { canonical: "/hoe-wij-werken" },
};

const pillarIcons = [CheckIcon, ChatIcon, HammerIcon];

/** De acht stappen van de live site, uitgeschreven. */
const steps = [
  {
    step: "01",
    title: "Intake op locatie",
    text: "We komen kosteloos en vrijblijvend bij je langs. Aan de keukentafel of in het pand bespreken we je wensen, ideeën en de mogelijkheden — en we vertellen eerlijk wat er kan.",
  },
  {
    step: "02",
    title: "Meten is weten",
    text: "We meten wanden, ruimtes, kozijnen of kavel nauwkeurig op. Die technische basis voorkomt verrassingen later in het traject.",
  },
  {
    step: "03",
    title: "Werksamenvatting",
    text: "Je ontvangt een schriftelijke samenvatting met alle details, werkzaamheden en uitgangspunten. Zo weten we zeker dat we hetzelfde voor ogen hebben.",
  },
  {
    step: "04",
    title: "Ontwerp & visualisatie",
    text: "Optioneel maken we vloertekeningen en 3D-beelden. Voor complexere projecten werken we samen met lokale architecten.",
  },
  {
    step: "05",
    title: "Offerte",
    text: "Een gedetailleerde offerte met persoonlijke toelichting — eerlijk en transparant, in 99% van de projecten met een vaste aanneemsom.",
  },
  {
    step: "06",
    title: "Projectplan",
    text: "Bij akkoord volgt een projectplan met termijnen, planning, veiligheidseisen en garanties. Alles zwart op wit.",
  },
  {
    step: "07",
    title: "De bouw",
    text: "Eén vast team voert het werk uit. Onverwachte zaken kunnen voorkomen — maar door heldere communicatie weet je altijd waar je aan toe bent.",
  },
  {
    step: "08",
    title: "Oplevering & nazorg",
    text: "We lopen samen alle punten na, leggen ze vast en tekenen af. En daarna blijven we gewoon bereikbaar.",
  },
];

const procesFaq = [
  {
    question: "Wat kost een intake?",
    answer:
      "Niets. De kennismaking en intake op locatie zijn kosteloos en vrijblijvend.",
  },
  {
    question: "Werken jullie met een vaste prijs?",
    answer:
      "In 99% van onze projecten werken we met een vaste aanneemsom. Eventuele stelposten benoemen we transparant in de offerte.",
  },
  {
    question: "Doen jullie ook totaalprojecten?",
    answer:
      "Ja. Met ons vaste netwerk van partners en onderaannemers regelen we het complete traject — van constructie tot installaties en afwerking.",
  },
  {
    question: "Kan ik thuis blijven wonen tijdens de bouw?",
    answer:
      "Meestal wel. We bespreken dit vooraf en plannen het werk zo dat de overlast beperkt blijft.",
  },
];

export default function HoeWijWerkenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Hoe wij werken", url: "/hoe-wij-werken" },
        ]}
      />
      <FaqJsonLd items={procesFaq} />

      <PageHero
        eyebrow="Samen bouwen"
        title="Bouwen begint bij communicatie"
        intro="Duidelijke afspraken en een goed plan vooraf voorkomen misverstanden achteraf. Dat levert jou rust, overzicht en vertrouwen op — en ons efficiënt werk en een tevreden klant."
        cta={<QuoteButton>Plan een gratis intake</QuoteButton>}
      />

      {/* De acht stappen — uitgeschreven, verticaal */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
          Stap voor stap
        </p>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
          Van kennismaking tot nazorg
        </h2>
        <ol className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {steps.map((s) => (
            <li key={s.step} className="border-t border-mist pt-6">
              <span className="text-2xl font-extrabold text-lime-dark">{s.step}</span>
              <h3 className="mt-3 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-stone">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Veilig en verantwoord — vangt ook de oude nav-link op */}
      <section id="veilig-en-verantwoord" className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
                Veilig en verantwoord
              </p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Veiligheid is geen bijzaak
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-stone">
                Op onze bouwplaatsen werken we volgens VCA-richtlijnen: van
                valbeveiliging en bouwhekken tot toolbox-meetings en persoonlijke
                beschermingsmiddelen. Veiligheidseisen leggen we vast in het
                projectplan, zodat iedereen weet waar hij aan toe is.
              </p>
            </div>
            <div className="border-t-2 border-lime pt-8">
              <ShieldIcon className="h-7 w-7" />
              <h3 className="mt-4 text-xl font-extrabold">
                SBB-erkend leerbedrijf
              </h3>
              <p className="mt-2 text-stone">
                MTB Bouw is door SBB erkend als leerbedrijf (ID 100812726). We
                leiden de vakmensen van morgen op — op onze eigen bouwplaatsen,
                onder begeleiding van ervaren collega&apos;s.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Waar we voor staan"
        title="Drie beloftes"
        items={pillars.map((pillar, i) => ({
          icon: pillarIcons[i],
          title: pillar.title,
          text: pillar.text,
        }))}
      />

      <FaqAccordion items={procesFaq} title="Veelgestelde vragen over het proces" />

      <CtaBanner
        eyebrow="Kennismaken?"
        title="Plan een gratis intake op locatie"
        text="Vrijblijvend in gesprek over jouw plan — wij vertellen eerlijk wat er kan."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
