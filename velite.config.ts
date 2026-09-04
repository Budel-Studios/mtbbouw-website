import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";

// Shared computed fields. `s.path()` gives the file path relative to `root`
// (e.g. "kennisbank/kozijnen-vervangen"); we take the last segment as the slug.
const slugFrom = (path: string) => path.split("/").slice(1).join("/");

const kennisbank = defineCollection({
  name: "Article", // type name used in generated .d.ts
  pattern: "kennisbank/**/*.md",
  schema: s
    .object({
      title: s.string().max(120),
      description: s.string().max(200),
      date: s.isodate(),
      updated: s.isodate().optional(),
      category: s.string().optional(), // bijv. "Kozijnen", "Renovatie" (ook filter op /kennisbank)
      // Optional optimized cover image. When present, Velite copies it to
      // /public/static and returns { src, width, height, blurDataURL } for next/image.
      cover: s.string().optional(), // publiek pad onder /public
      coverAlt: s.string().optional(), // alt-tekst cover (valt terug op titel)
      tags: s.array(s.string()).default([]),
      draft: s.boolean().default(false),
      path: s.path(),
      body: s.markdown(), // -> rendered HTML string
      metadata: s.metadata(), // -> { readingTime, wordCount }
    })
    .transform((data) => {
      const slug = slugFrom(data.path);
      return { ...data, slug, permalink: `/kennisbank/${slug}` };
    }),
});

const portfolio = defineCollection({
  name: "Project",
  pattern: "portfolio/**/*.md",
  schema: s
    .object({
      // ---- Kern & SEO ----
      title: s.string().max(120), // Projecttitel — wordt de H1
      description: s.string().max(200), // Meta description
      date: s.isodate(), // Voor sortering (nieuwste eerst)

      // ---- Projectfeiten (kaarten "Project in het kort") ----
      location: s.string().optional(), // Projectlocatie, bijv. "Enschede"
      category: s.string().optional(), // Type project, bijv. "Renovatie" (ook filter)
      duration: s.string().optional(), // Projectduur, bijv. "12 weken"
      executionPeriod: s.string().optional(), // Uitvoeringsperiode, bijv. "april–juni 2025"
      year: s.number().optional(), // Jaar van uitvoering, bijv. 2025
      clientType: s.string().optional(), // Klanttype, bijv. "Particulier", "Zakelijk"
      status: s.string().default("Opgeleverd"), // Status

      // ---- Beeld ----
      cover: s.string().optional(), // Sfeerfoto hero (pad onder /public)
      coverAlt: s.string().optional(), // Alt-tekst hero (val terug op titel)
      coverVideo: s.string().optional(), // Hero-video (mp4, muted autoplay-loop; cover = poster/fallback)

      // ---- Verhaallijn (elk veld = eigen markdown-blok, optioneel) ----
      intro: s.string().max(400).optional(), // Korte introductie (lead)
      situation: s.markdown().optional(), // De situatie
      clientRequest: s.markdown().optional(), // De vraag van de klant
      challenges: s.markdown().optional(), // Uitdagingen (optioneel getoond binnen "Onze aanpak")
      approach: s.markdown().optional(), // Onze aanpak / oplossing
      highlights: s.markdown().optional(), // Bijzonderheden tijdens de uitvoering
      execution: s.markdown().optional(), // Uitvoering & planning
      result: s.markdown().optional(), // Het eindresultaat
      learnings: s.markdown().optional(), // Wat hebben we geleerd

      // ---- Lijsten ----
      materials: s.array(s.string()).default([]), // Gebruikte materialen
      contractors: s.array(s.string()).default([]), // Onderaannemers
      suppliers: s.array(s.string()).default([]), // Leveranciers

      // ---- Partners met backlink (dofollow, opent in nieuw tabblad) ----
      partners: s
        .array(
          s.object({
            name: s.string(),
            role: s.string().optional(), // Rol in het project
            description: s.string().optional(), // Korte omschrijving
            url: s.string().url().optional(), // Website
            anchor: s.string().optional(), // Anchor text (val terug op naam)
          })
        )
        .default([]),

      // ---- Fotogalerij met alt-teksten + captions ----
      gallery: s
        .array(
          s.object({
            src: s.string(),
            alt: s.string(), // Verplicht: toegankelijkheid + SEO
            caption: s.string().optional(),
            phase: s.enum(["voor", "tijdens", "eind"]).optional(),
          })
        )
        .default([]),

      // ---- Interne links naar diensten (configureerbaar per project) ----
      relatedServices: s
        .array(s.object({ href: s.string(), label: s.string() }))
        .default([]),

      // ---- FAQ (rendert FAQPage structured data) ----
      faq: s
        .array(s.object({ question: s.string(), answer: s.string() }))
        .default([]),

      // ---- Persoonlijke boodschap / klant-quote ----
      testimonial: s
        .object({
          text: s.string().max(300),
          attribution: s.string().max(100),
        })
        .optional(),

      tags: s.array(s.string()).default([]),
      draft: s.boolean().default(false),
      path: s.path(),
      // Uitgebreide projectomschrijving (document-body, valt terug op de tekst
      // na de frontmatter). Optioneel te laten door alleen frontmatter te vullen.
      body: s.markdown(),
      metadata: s.metadata(),
    })
    .transform((data) => {
      const slug = slugFrom(data.path);
      return { ...data, slug, permalink: `/projecten/${slug}` };
    }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { kennisbank, portfolio },
  markdown: {
    rehypePlugins: [rehypeSlug], // voegt id's toe aan koppen voor anchor-links
  },
});
