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

/** LocalBusiness — in de root layout, op elke pagina aanwezig. */
export function OrganizationJsonLd() {
  const sameAs = Object.values(site.social).filter(Boolean);
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        name: site.legalName,
        url: site.url,
        description: site.description,
        telephone: site.telephoneHref,
        email: site.email,
        areaServed: site.areaServed,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.streetAddress,
          postalCode: site.address.postalCode,
          addressLocality: site.address.addressLocality,
          addressRegion: site.address.addressRegion,
          addressCountry: site.address.addressCountry,
        },
        openingHours: "Mo-Fr 08:00-17:00",
        ...(sameAs.length > 0 && { sameAs }),
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
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
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
        author: { "@type": "Organization", name: site.name },
        publisher: { "@type": "Organization", name: site.name },
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
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
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
        areaServed: site.areaServed,
        provider: {
          "@type": "GeneralContractor",
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
              addressRegion: "Overijssel",
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

/** JobPosting — voor vacaturekaarten op /werkgenoeg (rich results in Google Vacatures). */
export function JobPostingJsonLd({
  title,
  description,
  datePosted,
  validThrough,
  employmentType,
  salaryMin,
  salaryMax,
}: {
  title: string;
  description: string;
  datePosted: string;
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
