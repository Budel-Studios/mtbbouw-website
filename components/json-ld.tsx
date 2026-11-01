import { site } from "@/lib/site";

/**
 * Rendert een JSON-LD <script>. Hergebruikt voor alle schema-typen.
 * Server Component → komt statisch in de HTML, geen client-JS.
 */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Vaste identiteit van het bedrijf. Andere schema's verwijzen hiernaar met
 * `@id` in plaats van de gegevens te herhalen — zo ziet Google één entiteit
 * in plaats van losse vermeldingen.
 */
export const ORG_ID = `${site.url}/#organization`;

/** Een plaats in Overijssel als schema.org City. */
export function cityNode(name: string) {
  const known = site.serviceCities.find((c) => c.name === name);
  return {
    "@type": "City",
    name,
    containedInPlace: { "@type": "AdministrativeArea", name: "Overijssel" },
    ...(known?.sameAs && { sameAs: known.sameAs }),
  };
}

type PersonInput = { name: string; jobTitle: string; image?: string };

/** Vaste identiteit van een teamlid, zodat auteur, reviewer en Over ons één persoon zijn. */
export function personId(name: string) {
  return `${site.url}/over-ons#${name.toLowerCase()}`;
}

function personNode(p: PersonInput) {
  return {
    "@type": "Person",
    "@id": personId(p.name),
    name: p.name,
    jobTitle: p.jobTitle,
    url: `${site.url}/over-ons`,
    ...(p.image && { image: `${site.url}${p.image}` }),
    worksFor: { "@id": ORG_ID },
  };
}

/** Person-schema voor de teamleden op Over ons; artikelen verwijzen hiernaar. */
export function TeamJsonLd({ members }: { members: PersonInput[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": members.map((m) => ({
          ...personNode(m),
          knowsAbout: ["verbouwing", "aanbouw en uitbouw", "kozijnen", "houtskeletbouw", "zakelijke afbouw"],
          workLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Enschede", addressRegion: "Overijssel", addressCountry: "NL" } },
        })),
      }}
    />
  );
}

/** Volledig werkgebied: de steden plus de regio's eromheen. */
function areaServedNodes() {
  return [
    ...site.serviceCities.map((c) => cityNode(c.name)),
    ...site.areaServed.map((name) => ({ "@type": "Place", name })),
  ];
}

/**
 * Provincie bij een projectlocatie. Stond eerder hardgecodeerd op Overijssel,
 * wat onjuist was voor Hilversum (Noord-Holland) en Apeldoorn (Gelderland).
 * Onbekende plaats → geen regio meegeven, liever niets dan fout.
 */
const REGIONS: Record<string, string> = {
  enschede: "Overijssel",
  hengelo: "Overijssel",
  almelo: "Overijssel",
  oldenzaal: "Overijssel",
  borne: "Overijssel",
  haaksbergen: "Overijssel",
  losser: "Overijssel",
  twente: "Overijssel",
  zwolle: "Overijssel",
  deventer: "Overijssel",
  apeldoorn: "Gelderland",
  hilversum: "Noord-Holland",
};

function regionFor(locality: string): string | undefined {
  const key = locality.toLowerCase();
  const match = Object.keys(REGIONS).find((k) => key.includes(k));
  return match ? REGIONS[match] : undefined;
}

/** LocalBusiness — in de root layout, op elke pagina aanwezig. */
export function OrganizationJsonLd() {
  const sameAs = Object.values(site.social).filter(Boolean);
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        "@id": ORG_ID,
        name: site.legalName,
        alternateName: site.name,
        slogan: site.tagline,
        url: site.url,
        description: site.description,
        telephone: site.telephoneHref,
        email: site.email,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/images/brand/logo-full.png`,
          width: 1600,
          height: 394,
        },
        image: `${site.url}/images/brand/hero.png`,
        // Werkgebied als Place, zodat Google er een regio in herkent in
        // plaats van losse woorden.
        areaServed: areaServedNodes(),
        identifier: {
          "@type": "PropertyValue",
          propertyID: "KVK",
          value: site.kvk,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.streetAddress,
          postalCode: site.address.postalCode,
          addressLocality: site.address.addressLocality,
          addressRegion: site.address.addressRegion,
          addressCountry: site.address.addressCountry,
        },
        // De stringvorm is verouderd; deze vorm leest Google betrouwbaar.
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "08:00",
            closes: "17:00",
          },
        ],
        ...(sameAs.length > 0 && { sameAs }),
      }}
    />
  );
}

/**
 * WebSite-knoop. Geeft de site een eigen identiteit naast het bedrijf en is
 * de plek waar een eventuele sitebrede zoekactie aan hangt.
 */
export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "nl-NL",
        publisher: { "@id": ORG_ID },
      }}
    />
  );
}

/** Article — voor kennisbank-detailpagina's. */
export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
  section,
  author,
  reviewer,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  /** Pad onder /public of absolute URL — Google vereist een afbeelding. */
  image?: string;
  section?: string;
  /** Teamlid als auteur (Person); zonder auteur is het bedrijf de auteur. */
  author?: PersonInput;
  /** Teamlid dat het artikel inhoudelijk heeft gecontroleerd. */
  reviewer?: PersonInput;
}) {
  const absolute = image
    ? image.startsWith("http")
      ? image
      : `${site.url}${image}`
    : undefined;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        datePublished,
        dateModified: dateModified ?? datePublished,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        inLanguage: "nl-NL",
        ...(absolute && { image: [absolute] }),
        ...(section && { articleSection: section }),
        author: author ? personNode(author) : { "@id": ORG_ID },
        ...(reviewer && { reviewedBy: personNode(reviewer) }),
        publisher: { "@id": ORG_ID },
      }}
    />
  );
}

/** FAQPage — gebruiken op elke pagina waar de FAQ zichtbaar in de HTML staat. */
export function FaqJsonLd({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}

/** Service — voor dienstpagina's, met MTB Bouw als provider. */
export function ServiceJsonLd({
  name,
  description,
  url,
  serviceType,
  city,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  /** Stadspagina: alleen deze plaats als werkgebied. */
  city?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        serviceType,
        url: `${site.url}${url}`,
        areaServed: city ? cityNode(city) : areaServedNodes(),
        provider: {
          "@type": "GeneralContractor",
          "@id": ORG_ID,
          name: site.legalName,
          url: site.url,
        },
      }}
    />
  );
}

/**
 * CreativeWork — voor project-/portfoliopagina's. Beschrijft het opgeleverde
 * project met beeld, locatie en MTB Bouw als uitvoerder (creator). Geen aparte
 * schema.org-type voor bouwprojecten, dus CreativeWork met bouwkundige context.
 */
export function ProjectJsonLd({
  title,
  description,
  url,
  image,
  locality,
  dateCreated,
  keywords,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  locality?: string;
  dateCreated?: string;
  keywords?: string[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: title,
        description,
        url: `${site.url}${url}`,
        ...(image && {
          image: {
            "@type": "ImageObject",
            url: image.startsWith("http") ? image : `${site.url}${image}`,
          },
        }),
        ...(dateCreated && { dateCreated }),
        ...(locality && {
          locationCreated: {
            "@type": "Place",
            name: locality,
            address: {
              "@type": "PostalAddress",
              addressLocality: locality,
              ...(regionFor(locality) && { addressRegion: regionFor(locality) }),
              addressCountry: "NL",
            },
          },
        }),
        ...(keywords && keywords.length > 0 && { keywords: keywords.join(", ") }),
        creator: {
          "@type": "GeneralContractor",
          name: site.legalName,
          url: site.url,
          areaServed: site.areaServed,
        },
      }}
    />
  );
}

/**
 * JobPosting — alleen op de pagina van één vacature (/werkgenoeg/[slug]),
 * nooit op het overzicht. Zie lib/jobs.ts voor wanneer een vacature open is.
 */
export function JobPostingJsonLd({
  title,
  description,
  url,
  datePosted,
  validThrough,
  employmentType,
  salaryMin,
  salaryMax,
}: {
  title: string;
  /** Volledige vacaturetekst (HTML toegestaan). */
  description: string;
  url: string;
  datePosted: string;
  /** Alleen een echte sluitingsdatum; weglaten als die er niet is. */
  validThrough?: string;
  employmentType: string;
  salaryMin?: number;
  salaryMax?: number;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title,
        description,
        url,
        datePosted,
        ...(validThrough && { validThrough }),
        employmentType,
        hiringOrganization: {
          "@type": "Organization",
          name: site.legalName,
          sameAs: site.url,
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.streetAddress,
            postalCode: site.address.postalCode,
            addressLocality: site.address.addressLocality,
            addressRegion: site.address.addressRegion,
            addressCountry: site.address.addressCountry,
          },
        },
        ...(salaryMin &&
          salaryMax && {
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "EUR",
              value: {
                "@type": "QuantitativeValue",
                minValue: salaryMin,
                maxValue: salaryMax,
                unitText: "MONTH",
              },
            },
          }),
      }}
    />
  );
}

/**
 * WebPage of CollectionPage — beschrijft de pagina zelf en koppelt die aan de
 * website en aan MTB Bouw (vaste @id's). Met `parts` komt er een ItemList bij
 * van de onderliggende pagina's, bijvoorbeeld de twee zakelijke diensten.
 */
export function WebPageJsonLd({
  type = "WebPage",
  name,
  description,
  url,
  parts,
}: {
  type?: "WebPage" | "CollectionPage";
  name: string;
  description: string;
  url: string;
  parts?: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": type,
        "@id": `${site.url}${url}#webpage`,
        name,
        description,
        url: `${site.url}${url}`,
        inLanguage: "nl-NL",
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": ORG_ID },
        ...(parts && {
          mainEntity: {
            "@type": "ItemList",
            itemListElement: parts.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: `${site.url}${p.url}`,
            })),
          },
        }),
      }}
    />
  );
}

/** BreadcrumbList — helpt Google de sitestructuur begrijpen. */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${site.url}${item.url}`,
        })),
      }}
    />
  );
}
