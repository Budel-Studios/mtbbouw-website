import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Hoe MTB Bouw omgaat met je persoonsgegevens: wat we verzamelen, waarvoor we het gebruiken en welke rechten je hebt.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Privacy policy", url: "/privacy-policy" },
        ]}
      />

      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        intro="Kort en eerlijk: we gebruiken je gegevens alleen om ons werk te doen. Geen ongewenste marketing, geen verkoop aan derden."
      />

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <article className="prose prose-stone max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-lime-dark">
          <h2>Welke gegevens we verzamelen</h2>
          <p>
            Wanneer je contact met ons opneemt — via het formulier, telefoon,
            WhatsApp of e-mail — bewaren we de gegevens die je zelf met ons
            deelt:
          </p>
          <ul>
            <li>je naam en contactgegevens;</li>
            <li>het adres van de woning of het bouwproject;</li>
            <li>informatie over je (ver)bouwplannen.</li>
          </ul>

          <h2>Waarvoor we ze gebruiken</h2>
          <p>
            Uitsluitend om contact met je op te nemen, een offerte te maken,
            het project uit te voeren en persoonlijk met je te communiceren. Je
            gegevens worden <strong>niet</strong> gebruikt voor ongewenste
            marketing en <strong>niet</strong> verkocht aan derden.
          </p>

          <h2>Delen met anderen</h2>
          <p>
            We delen gegevens alleen met onderaannemers en leveranciers wanneer
            dat nodig is voor de uitvoering van jouw project — bijvoorbeeld het
            adres voor een levering.
          </p>

          <h2>Hoe lang we ze bewaren</h2>
          <p>
            Niet langer dan noodzakelijk. Voor administratie en garantie gelden
            de wettelijke bewaartermijnen voor aannemers.
          </p>

          <h2>Cookies</h2>
          <p>
            We gebruiken alleen functionele en analytische cookies — geen
            tracking en geen profielvorming.
          </p>

          <h2>Jouw rechten</h2>
          <p>
            Je kunt je gegevens inzien, laten aanpassen of laten verwijderen,
            en je kunt altijd vragen stellen over hoe we met je gegevens
            omgaan. Neem daarvoor contact op via onderstaande gegevens.
          </p>

          <h2>Verwerkingsverantwoordelijke</h2>
          <p>
            {site.legalName}
            <br />
            KVK {site.kvk}
            <br />
            {site.address.streetAddress}, {site.address.postalCode}{" "}
            {site.address.addressLocality}
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a> ·{" "}
            <a href={`tel:${site.telephoneHref}`}>{site.telephone}</a>
          </p>
        </article>
      </section>
    </>
  );
}
