import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

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

export function SiteFooter() {
  const year = 2026; // jaarlijks bijwerken of via build-var

  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Merk — volledig logo, tagline en de vier labels onder één dak */}
        <div className="max-w-3xl">
          <Image
            src="/images/brand/logo-full.png"
            alt={`${site.legalName} logo`}
            width={1600}
            height={394}
            className="h-14 w-auto md:h-16"
          />
          <p
            className="mt-6 font-display font-extrabold leading-none tracking-tight text-ink"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}
          >
            {site.tagline}
          </p>
          <p className="mt-5 text-base leading-relaxed text-stone">
            Overkoepelend bouwmerk uit Enschede. Wonen &amp; Verbouwen ·
            Afbouwstudio · Kozijnstudio · Prefab Bouwen.
          </p>
          <p className="mt-3 text-sm text-stone">
            Zie ook ons interieurmerk{" "}
            <a
              href="https://zebranostudio.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-lime-dark hover:underline"
            >
              Zebrano Studio
            </a>
          </p>
        </div>

        {/* Kolommen — op één regel per link, dus geen afbrekende labels */}
        <div className="mt-16 border-t border-mist pt-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {site.footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-sm font-extrabold uppercase tracking-wide">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3 font-display text-sm">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="whitespace-nowrap text-stone transition-colors hover:text-lime-dark"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="font-display text-sm font-extrabold uppercase tracking-wide">
                Contact
              </h3>
              <ul className="mt-5 space-y-3 font-display text-sm">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="whitespace-nowrap text-stone transition-colors hover:text-lime-dark"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.telephoneHref}`}
                    className="whitespace-nowrap font-bold text-ink transition-colors hover:text-lime-dark"
                  >
                    {site.telephone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Onderbalk: social links + copyright */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex gap-3">
            <a
              href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-mist text-ink/70 transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              <WhatsAppIcon />
            </a>
            {site.social.instagram && (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-mist text-ink/70 transition-colors hover:border-ink hover:bg-ink hover:text-white"
              >
                <InstagramIcon />
              </a>
            )}
          </div>
          <p className="text-xs text-stone">
            © {year} {site.legalName} · KVK {site.kvk} · {site.sbb}
          </p>
        </div>
      </div>
    </footer>
  );
}
