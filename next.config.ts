import type { NextConfig } from "next";

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
      // Oude "Werken bij"-URL → nieuwe recruitmentpagina.
      { source: "/werken-bij", destination: "/werkgenoeg", permanent: true },
      // Merkstructuur-herpositionering: /voor-bedrijven is opgegaan in het
      // nieuwe Afbouwstudio-label.
      { source: "/voor-bedrijven", destination: "/afbouwstudio", permanent: true },

      // Oude WordPress-pagina's (volledige Yoast page-sitemap, juli 2026).
      { source: "/aanbouw-uitbouw-enschede", destination: "/aanbouw-uitbouw", permanent: true },
      { source: "/verbouwing-enschede", destination: "/verbouwing", permanent: true },
      { source: "/nieuwbouw-enschede", destination: "/nieuwbouw", permanent: true },
      { source: "/prefab-twente", destination: "/prefab", permanent: true },
      { source: "/kozijnen-enschede", destination: "/kozijnen", permanent: true },
      { source: "/voor-bedrijven-twente", destination: "/afbouwstudio", permanent: true },
      { source: "/vveilig-bouwen-enschede", destination: "/veilig-verantwoord-bouwen", permanent: true },
      { source: "/kennisbank-bouwen-twente", destination: "/kennisbank", permanent: true },
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

      // Oude WordPress-archieven (wildcards).
      { source: "/portfolio-item/:slug", destination: "/projecten", permanent: true },
      { source: "/category/:slug", destination: "/kennisbank", permanent: true },
      { source: "/author/:slug", destination: "/over-ons", permanent: true },
    ];
  },
};

export default nextConfig;
