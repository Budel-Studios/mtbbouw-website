import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { HammerIcon, HouseIcon, WallIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Wonen & Verbouwen",
  description:
    "Wonen & Verbouwen is het label van MTB Bouw voor particulieren: renovatie & verbouw en aanbouw & uitbouw in Enschede, Twente en Oost-Nederland.",
  alternates: { canonical: "/wonen-en-verbouwen" },
  openGraph: {
    type: "website",
    title: "Wonen & Verbouwen | MTB Bouw",
    description: "Wonen & Verbouwen is het label van MTB Bouw voor particulieren: renovatie & verbouw en aanbouw & uitbouw in Enschede, Twente en Oost-Nederland.",
    url: "/wonen-en-verbouwen",
  },
};

const SUB_ITEMS = [
  {
    icon: HammerIcon,
    title: "Renovatie & verbouw",
    text: "Complete renovaties, verbouwingen van keuken en badkamer, isolatie en verduurzaming — voor woningen die weer aansluiten bij hoe je nu wilt wonen.",
    href: "/verbouwing",
    image: "/images/projects/project-1.jpg",
  },
  {
    icon: HouseIcon,
    title: "Aanbouw & uitbouw",
    text: "Meer ruimte zonder te verhuizen: aanbouwen, uitbouwen en dakopbouwen, traditioneel of prefab gebouwd.",
    href: "/aanbouw-uitbouw",
    image: "/images/projects/project-2.jpg",
  },
  {
    icon: WallIcon,
    title: "Nieuwbouw",
    text: "Bouwen vanaf nul: van vergunning tot oplevering begeleiden wij het hele traject, met één team en één aanspreekpunt.",
    href: "/nieuwbouw",
    image: "/images/projects/project-3.jpg",
  },
];

export default function WonenEnVerbouwenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Wonen & Verbouwen", url: "/wonen-en-verbouwen" },
        ]}
      />
      <ServiceJsonLd
        name="Wonen & Verbouwen"
        description="Renovatie, verbouw, aanbouw en uitbouw voor particulieren in Enschede, Twente en Oost-Nederland."
        url="/wonen-en-verbouwen"
        serviceType="Verbouw en aanbouw"
      />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/project-1.jpg",
          alt: "Verbouwde woning door MTB Bouw",
        }}
        eyebrow="Wonen & Verbouwen · Voor particulieren"
        title="Jouw huis, verbouwd zoals jij het voor ogen hebt."
        intro="Wonen & Verbouwen is het label van MTB Bouw voor particulieren. Van een complete renovatie tot een aanbouw of uitbouw — één team, één planning, één aanspreekpunt."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Onze specialismen
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Drie manieren om je woning te verbeteren
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SUB_ITEMS.map(({ icon: Icon, title, text, href, image }) => (
              <Link
                key={title}
                href={href}
                className="group block overflow-hidden border border-mist bg-white transition-colors hover:border-ink/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <Icon className="h-7 w-7 text-lime-dark" />
                  <h3 className="mt-5 text-2xl font-extrabold">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-stone">
                    {text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold">
                    Meer info
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
