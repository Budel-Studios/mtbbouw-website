/**
 * Voorbeeldweergave van de formuliermails — alleen lokaal.
 *
 * /api/contact/preview?type=offerte&audience=customer
 *   type      offerte | contact | brochure
 *   audience  customer | internal
 *   variant   full (standaard) | minimal   — minimal laat alle optionele velden leeg
 *   brochure  ready                        — forceert de "met PDF"-variant
 *
 * Afgeschermd op NODE_ENV, wat op Vercel een compile-time constante is: de
 * route bestaat daar simpelweg niet als bruikbaar eindpunt. Ook uitgesloten in
 * app/robots.ts.
 */
import {
  buildBrochureCustomer,
  buildContactCustomer,
  buildQuoteCustomer,
} from "@/lib/email/customer";
import {
  buildBrochureInternal,
  buildContactInternal,
  buildQuoteInternal,
} from "@/lib/email/internal";
import type { FormType } from "@/lib/email/types";

export const dynamic = "force-dynamic";

/** Randgevallen bewust ingebakken: tekens die escaping vereisen en een lange URL. */
const FULL = {
  name: "Jan & Marieke <de Vries>",
  phone: "06 12345678",
  email: "jan.devries@voorbeeld.nl",
  projectTypes: ["Aanbouw / uitbouw", "Kozijnen"],
  description:
    "We willen de achterkant van het huis uitbouwen, ongeveer vier meter diep, met veel glas naar de tuin. De keuken schuift dan mee naar achteren.",
  situation: "Bestaande woning uit 1968, achtergevel is nog origineel",
  dimensions: "4 x 6 meter, 2 ramen en een schuifpui",
  workParts: ["Fundering", "Metselwerk", "Dak", "Kozijnen"],
  postcode: "7546 PG Enschede",
  propertyType: "2-onder-1-kap",
  startTime: "Binnen 1-3 maanden",
  deadline: "Graag klaar voor de zomer",
  budgetRange: "35k-75k",
  fileLink:
    "https://drive.google.com/drive/folders/1AbCdEfGhIjKlMnOpQrStUvWxYz0123456789abcdefghijklmnop",
  vergunning: "Weet ik niet",
  bewoond: "Ja, we blijven er wonen",
  remarks:
    "We hebben al schetsen laten maken door een architect.\nDie kunnen we aanleveren.",
  agreement: true,
  message:
    "Goedemiddag,\n\nWe zijn benieuwd of jullie iets voor ons kunnen betekenen bij een uitbouw.\n\nMet vriendelijke groet,\nJan",
};

/** Alleen de verplichte velden — bewijst dat lege regels en kopjes verdwijnen. */
const MINIMAL = {
  name: "Piet Jansen",
  phone: "0612345678",
  email: "piet@voorbeeld.nl",
  projectTypes: ["Renovatie"],
  description: "Badkamer verbouwen.",
  situation: "",
  dimensions: "",
  workParts: [],
  postcode: "7511 AA Enschede",
  propertyType: "",
  startTime: "Zo snel mogelijk",
  deadline: "",
  budgetRange: "",
  fileLink: "",
  vergunning: "",
  bewoond: "",
  remarks: "",
  agreement: true,
  message: "Kort bericht.",
};

export function GET(request: Request) {
  if (process.env.NODE_ENV === "production") {
    return new Response("Not found", { status: 404 });
  }

  const p = new URL(request.url).searchParams;
  const type = (p.get("type") ?? "offerte") as FormType;
  const internal = p.get("audience") === "internal";
  const f = p.get("variant") === "minimal" ? MINIMAL : FULL;
  const brochureReady = p.get("brochure") === "ready";

  let html: string;
  if (type === "contact") {
    html = internal ? buildContactInternal(f) : buildContactCustomer(f);
  } else if (type === "brochure") {
    html = internal
      ? buildBrochureInternal(f, brochureReady)
      : buildBrochureCustomer(f, brochureReady);
  } else {
    html = internal ? buildQuoteInternal(f) : buildQuoteCustomer(f);
  }

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      // Handig bij het finetunen: Gmail knipt boven ~102 KB.
      "X-Email-Size-Bytes": String(new TextEncoder().encode(html).length),
    },
  });
}
