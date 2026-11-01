import { ArrowLink } from "@/components/ui/button";
import { site } from "@/lib/site";

/**
 * Afsluitend contactblok voor de drie zakelijke pagina's. De hoofdknop opent
 * de bestaande intake (offerte-drawer) met "Zakelijk" alvast aangevinkt; er is
 * bewust geen apart formulier of uploadveld.
 */
export function ZakelijkContact({
  eyebrow = "Contact",
  title,
  intro,
  cta,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  cta: string;
}) {
  const whatsapp = `https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`;
  return (
    <section id="contact" className="scroll-mt-24 bg-ink text-white">
      <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="eyebrow text-white/65">{eyebrow}</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-white/75">{intro}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ArrowLink drawer preset="zakelijk" onDark>
              {cta}
            </ArrowLink>
            <ArrowLink href={`tel:${site.telephoneHref}`} onDark>
              Bel {site.telephone}
            </ArrowLink>
            <ArrowLink href={whatsapp} onDark>
              WhatsApp
            </ArrowLink>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="label-mono text-white/65">Handig om te vertellen</p>
          <ul className="mt-5 divide-y divide-white/15 border-y border-white/15">
            {[
              ["Locatie", "Waar staat het pand?"],
              ["Huidige situatie", "Casco, leeg of nog in gebruik?"],
              ["Gewenst gebruik", "Wat moet er straks in kunnen?"],
              ["Planning", "Wanneer wil je starten of open?"],
            ].map(([k, v]) => (
              <li key={k} className="flex items-baseline justify-between gap-6 py-4">
                <span className="font-semibold">{k}</span>
                <span className="text-right text-white/70">{v}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Heb je foto&apos;s, een plattegrond of een ontwerp? Zet een link
            naar de bestanden in het formulier, of deel ze na het eerste contact
            met ons.
          </p>
        </div>
      </div>
    </section>
  );
}
