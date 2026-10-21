import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "@/components/logo";
import { ContactDrawerButton } from "@/components/contact-drawer";

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1a14 14 0 0 1-1.5-.5c-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.1-.3.3-.1.6.2.3.7 1.2 1.5 1.9 1.1 1 1.9 1.3 2.2 1.4.3.1.5.1.6-.1l.7-.9c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3 0 .2 0 .7-.2 1.2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

/**
 * Footer — navy vlak met lime merklijn bovenaan. Grote "Klaar om te bouwen?"
 * als afsluiter op elke pagina, daaronder de crawlbare vangnet-navigatie
 * (lib/site.ts → footerColumns), contactgegevens en de onderbalk.
 */
export function SiteFooter() {
  const year = 2026; // jaarlijks bijwerken of via build-var

  return (
    <footer id="contact-footer" className="bg-navy text-white">
      <div className="container-page py-20 md:py-28">
        {/* Afsluiter */}
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="label-mono text-white/65">Bouwen doen we samen</p>
            <ContactDrawerButton className="display group mt-6 block cursor-pointer text-left text-5xl md:text-7xl lg:text-8xl">
              Klaar om te bouwen?{" "}
              <ArrowUpRight className="inline-block size-10 align-baseline transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 md:size-14" />
            </ContactDrawerButton>
          </div>
          <div className="md:col-span-4">
            <p className="max-w-sm text-base leading-relaxed text-white/80">
              Vraag vrijblijvend een kennismaking aan. We komen graag bij je
              langs voor een intake op locatie — in Enschede, Twente en heel
              Oost-Nederland.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${site.telephoneHref}`}
                className="label-mono inline-flex items-center bg-white px-5 py-3.5 text-navy transition-colors hover:bg-paper"
              >
                {site.telephone}
              </a>
              <ContactDrawerButton className="label-mono inline-flex cursor-pointer items-center border border-white/40 px-5 py-3.5 text-white transition-colors hover:bg-white hover:text-navy">
                Plan een intake
              </ContactDrawerButton>
            </div>
          </div>
        </div>

        {/* Kolommen — vangnet-navigatie + contact */}
        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/20 pt-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo uid="ftr" tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              {site.tagline}{" "}
              Overkoepelend bouwmerk uit Enschede: Wonen &amp;
              Verbouwen · Afbouwstudio · Kozijnstudio · Prefab Bouwen.
            </p>
            <p className="mt-3 text-sm text-white/70">
              Zie ook ons interieurmerk{" "}
              <a
                href="https://zebranostudio.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="link-line text-white"
              >
                Zebrano Studio
              </a>
            </p>
          </div>
          {site.footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="label-mono text-white/65">{col.title}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="link-line whitespace-nowrap">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="label-mono text-white/65">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <address className="not-italic leading-relaxed">
                  {site.legalName}
                  <br />
                  {site.address.streetAddress}
                  <br />
                  {site.address.postalCode} {site.address.addressLocality}
                  <br />
                  <span className="text-white/65">{site.openingHours}</span>
                </address>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="link-line whitespace-nowrap">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.telephoneHref}`} className="link-line whitespace-nowrap">
                  {site.telephone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Onderbalk: social links + copyright */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/20 pt-8 sm:flex-row sm:items-center">
          <div className="flex gap-2">
            <a
              href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center border border-white/25 text-white/80 transition-colors hover:bg-white hover:text-navy"
            >
              <WhatsAppIcon />
            </a>
            {site.social.instagram && (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/25 text-white/80 transition-colors hover:bg-white hover:text-navy"
              >
                <InstagramIcon />
              </a>
            )}
          </div>
          <div className="label-mono flex flex-col items-start gap-x-4 gap-y-2 text-white/65 sm:items-end lg:flex-row lg:items-center">
            <p>
              © {year} {site.legalName} · KVK {site.kvk} · {site.sbb}
            </p>
            <a
              href="https://tien98.nl"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-white"
            >
              <span className="hidden text-white/30 lg:inline" aria-hidden="true">
                |
              </span>
              Branding door
              <Image
                src="/images/partners/tien98-mark.png"
                alt=""
                width={711}
                height={446}
                className="h-2.5 w-auto opacity-80 brightness-0 invert transition-opacity group-hover:opacity-100"
              />
              <span className="text-white">tien98</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
