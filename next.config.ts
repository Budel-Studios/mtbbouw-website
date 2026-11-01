import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";
import { LEGACY_HUB_REDIRECTS } from "./lib/kennisbank-taxonomy";

const nextConfig: NextConfig = {
  images: {
    // Velite-geoptimaliseerde beelden komen lokaal uit /public/static.
    // Site-assets (foto's/logo's die de redactie wisselt) komen uit
    // Supabase Storage — zie lib/assets.ts.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "*.supabase.co", pathname: "/storage/v1/object/public/**" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Eén canonieke domeinvariant: www -> apex, permanent. Zonder dit geven
      // beide varianten een 200 terug en verdeelt Google de signalen.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mtbbouw.com" }],
        destination: "https://mtbbouw.com/:path*",
        // Expliciet 301 i.p.v. Next's standaard 308: Google behandelt ze
        // gelijk, maar veel SEO-tools vlaggen een 308 onterecht.
        statusCode: 301,
      },

      // Verduurzamen is een algemene dienstpagina geworden (Enschede & Twente).
      {
        source: "/verduurzamen-enschede",
        destination: "/verduurzamen",
        statusCode: 301,
      },

      // Oude Yoast-sitemapnamen → de Next.js-sitemap. Zonder deze redirect
      // krijgt Google de 404-HTML-pagina en meldt hij "Your Sitemap appears
      // to be an HTML page".
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/post-sitemap.xml", destination: "/sitemap.xml", permanent: true },

      // Oude "Werken bij"-URL → nieuwe recruitmentpagina.
      { source: "/werken-bij", destination: "/werkgenoeg", permanent: true },
      // Merkstructuur: /voor-bedrijven ging op in Afbouwstudio, sinds nov 2026
      // MTB Bouw Zakelijk. Direct naar de eindbestemming, zonder keten.
      { source: "/voor-bedrijven", destination: "/zakelijk", permanent: true },

      // Oude WordPress-pagina's (volledige Yoast page-sitemap, juli 2026).
      { source: "/aanbouw-uitbouw-enschede", destination: "/aanbouw-uitbouw", permanent: true },
      { source: "/verbouwing-enschede", destination: "/verbouwing", permanent: true },
      { source: "/nieuwbouw-enschede", destination: "/nieuwbouw", permanent: true },
      { source: "/prefab-twente", destination: "/prefab", permanent: true },
      { source: "/kozijnen-enschede", destination: "/kozijnen", permanent: true },
      { source: "/voor-bedrijven-twente", destination: "/zakelijk", permanent: true },
      { source: "/vveilig-bouwen-enschede", destination: "/veilig-verantwoord-bouwen", permanent: true },
      { source: "/kennisbank-bouwen-twente", destination: "/kennisbank", permanent: true },
      // Kennisbank: twee ISDE-artikelen samengevoegd (okt 2026) om te
      // voorkomen dat ze met elkaar concurreren op hetzelfde zoekwoord.
      {
        source: "/kennisbank/verbouwen-en-verduurzamen-isde-2026",
        destination: "/kennisbank/isde-subsidie-uitgelegd",
        permanent: true,
      },
      { source: "/brochure_detail", destination: "/gratis-brochure", permanent: true },
      { source: "/gerealiseerde_projecten", destination: "/projecten", permanent: true },
      { source: "/eerder-werk-old", destination: "/projecten", permanent: true },
      { source: "/portfolio", destination: "/projecten", permanent: true },

      // Oude WordPress-blogposts → kennisbank (individuele artikelen bestaan
      // nog niet in de nieuwe kennisbank; categorie-redirect behoudt waarde).
      { source: "/5-belangrijke-zaken-uitbouw", destination: "/kennisbank", permanent: true },
      { source: "/de-kunst-van-woningrenovatie", destination: "/kennisbank", permanent: true },
      { source: "/h1-preventief-onderhoud-van-een-bedrijfspand", destination: "/kennisbank", permanent: true },
      { source: "/verbouwen-enschede-tips", destination: "/kennisbank", permanent: true },
      { source: "/jong-talent-bouw", destination: "/kennisbank", permanent: true },
      { source: "/woningcrisis-bouw-twente", destination: "/kennisbank", permanent: true },

      // Oude portfolio-items → hun nieuwe projectpagina (specifiek vóór de wildcard).
      { source: "/portfolio-item/dubbele-uitbouw-enschede-mtb-bouw-ruimte-creeren-voor-twee-families", destination: "/projecten/dubbele-uitbouw-enschede", permanent: true },
      { source: "/portfolio-item/bouw-broodbode-zwolle-mtb-bouw-van-casco-pand-tot-sfeervol-lunchcafe", destination: "/projecten/broodbode-zwolle-lunchroom", permanent: true },
      { source: "/portfolio-item/grote-overkapping-met-paardenstal-in-buitengebied-enschede", destination: "/projecten/overkapping-paardenstal-enschede", permanent: true },
      { source: "/portfolio-item/luxe-overkapping", destination: "/projecten/luxe-overkapping-twente", permanent: true },
      { source: "/portfolio-item/renovatie-van-een-bestaande-schuur-met-behoud-van-karakter", destination: "/projecten/renovatie-schuur-behoud-karakter", permanent: true },
      { source: "/portfolio-item/gevelbekleding-vve-hilversum", destination: "/projecten/gevelbekleding-vve-hilversum", permanent: true },
      { source: "/portfolio-item/carport-verlengen-enschede", destination: "/projecten/carport-verlengen-enschede", permanent: true },
      { source: "/portfolio-item/renovatie-van-zantinge-villa-enschede", destination: "/projecten/renovatie-villa-zantinge-enschede", permanent: true },
      { source: "/portfolio-item/vervanging-plafonds-in-80-appartementen", destination: "/projecten/plafonds-80-appartementen", permanent: true },
      { source: "/portfolio-item/bouwbedrijf-aannemer-twente-enschede-overijssel-zebrano-houten-schuifdeur-project", destination: "/projecten/houten-schuifdeur-zebrano", permanent: true },

      // Bouwgids (nov 2026): zes hoofdcategorieën, geen bouwdeelpagina's meer.
      // Oude onderwerp- en bouwdeelpagina's wijzen naar de nieuwe indeling.
      ...LEGACY_HUB_REDIRECTS.map((r) => ({
        source: r.from,
        destination: r.to,
        permanent: true,
      })),

      // Project bedrijfshal Borne bleek geen MTB-project en is verwijderd (nov 2026).
      { source: "/projecten/bedrijfshal-borne", destination: "/projecten", permanent: true },
      // Kostenartikel kantoorverbouwing draaide om m²-prijzen; offline gehaald (nov 2026).
      {
        source: "/kennisbank/kantoor-verbouwen-kosten-2026",
        destination: "/zakelijk/bedrijfspand-verbouwen",
        permanent: true,
      },

      // Afbouwstudio → MTB Bouw Zakelijk (nov 2026): dertien pagina's
      // teruggebracht naar drie. Elke bekende route expliciet, geen wildcard,
      // zodat onbekende /afbouwstudio/*-URL's gewoon een 404 geven. Minimaal
      // een jaar laten staan, liefst blijvend.
      { source: "/afbouwstudio", destination: "/zakelijk", permanent: true },
      { source: "/afbouwstudio/horeca-verbouwen", destination: "/zakelijk/horeca-verbouwen", permanent: true },
      ...[
        "bedrijfspand-verbouwen",
        "kantoor-verbouwen",
        "winkel-verbouwen",
        "metal-stud-wanden",
        "systeemplafonds",
        "kantoor-verbouwen-enschede",
        "kantoor-verbouwen-hengelo",
        "kantoor-verbouwen-almelo",
        "kantoor-verbouwen-deventer",
        "kantoor-verbouwen-apeldoorn",
        "kantoor-verbouwen-zwolle",
      ].map((slug) => ({
        source: `/afbouwstudio/${slug}`,
        destination: "/zakelijk/bedrijfspand-verbouwen",
        permanent: true,
      })),

      // Bouwbedrijf Enschede en aannemer Enschede zijn dezelfde zoekvraag;
      // samengevoegd (nov 2026).
      { source: "/bouwbedrijf-enschede", destination: "/aannemer-enschede", permanent: true },

      // Oude WordPress-archieven (wildcards).
      { source: "/portfolio-item/:slug", destination: "/projecten", permanent: true },
      { source: "/category/:slug", destination: "/kennisbank", permanent: true },
      { source: "/author/:slug", destination: "/over-ons", permanent: true },
    ];
  },
};

// withBotId voegt de proxy-routes toe die Vercel BotID nodig heeft.
export default withBotId(nextConfig);
