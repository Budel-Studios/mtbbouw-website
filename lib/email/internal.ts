/**
 * Mails naar info@mtbbouw.com — de lead zelf.
 *
 * Doel is snel kunnen handelen: wie is het, hoe bereik je 'm, en wat wil hij.
 * De preheader bevat daarom de identiteit van de aanvrager, zodat je vanuit de
 * notificatiebalk al kunt trieëren.
 */
import { site } from "@/lib/site";
import { BUDGET_LABELS, PROPERTY_TYPE_LABELS, label } from "./labels";
import {
  buttonRow,
  esc,
  linkRow,
  note,
  paragraph,
  row,
  section,
  wrapEmail,
} from "./shell";
import type { BrochurePayload, ContactPayload, QuotePayload } from "./types";

/** Bel/mail-knoppen bovenaan: de site belooft de klant een telefoontje. */
function actions(name: string, email: string, phone?: string) {
  const buttons = [];
  if (phone) buttons.push({ href: `tel:${phone.replace(/\s/g, "")}`, text: `Bel ${phone}` });
  buttons.push({ href: `mailto:${email}`, text: `Mail ${name.split(/\s+/)[0]}` });
  return buttonRow(buttons);
}

export function buildQuoteInternal(f: QuotePayload) {
  const body =
    actions(f.name, f.email, f.phone) +
    section(
      "Contact",
      row("Naam", f.name) +
        row("Telefoon", f.phone) +
        row("E-mail", f.email) +
        row("Projecttype", (f.projectTypes ?? []).join(", "))
    ) +
    section(
      "Projectdetails",
      row("Omschrijving", f.description) +
        row("Huidige situatie", f.situation) +
        row("Afmetingen / aantallen", f.dimensions) +
        row("Werkonderdelen", (f.workParts ?? []).join(", "))
    ) +
    section(
      "Locatie & planning",
      row("Postcode + plaats", f.postcode) +
        row("Type woning / pand", label(PROPERTY_TYPE_LABELS, f.propertyType)) +
        row("Gewenst startmoment", f.startTime) +
        row("Deadline", f.deadline) +
        row("Budgetrange", label(BUDGET_LABELS, f.budgetRange)) +
        linkRow("Link naar bestanden", f.fileLink) +
        row("Vergunning", f.vergunning) +
        row("Bewoond tijdens werkzaamheden", f.bewoond)
    ) +
    (f.remarks?.trim()
      ? section("Opmerkingen", "") + paragraph(esc(f.remarks))
      : "");

  return wrapEmail({
    preheader: [f.name, f.postcode, (f.projectTypes ?? [])[0]]
      .filter(Boolean)
      .join(" · "),
    heading: "Nieuwe offerteaanvraag",
    intro: "Binnengekomen via het offerteformulier op mtbbouw.com.",
    body,
    footerNote: `Akkoord met de voorwaarden en het privacybeleid: ${f.agreement ? "ja" : "nee"}.`,
  });
}

export function buildContactInternal(f: ContactPayload) {
  const body =
    actions(f.name, f.email, f.phone) +
    section(
      "Contact",
      row("Naam", f.name) + row("E-mail", f.email) + row("Telefoon", f.phone)
    ) +
    section("Bericht", "") +
    paragraph(esc(f.message).replaceAll("\n", "<br />"));

  return wrapEmail({
    preheader: `${f.name} · ${f.email}`,
    heading: "Nieuw contactbericht",
    intro: "Binnengekomen via het contactformulier op mtbbouw.com.",
    body,
  });
}

export function buildBrochureInternal(f: BrochurePayload, brochureSent: boolean) {
  const body =
    actions(f.name, f.email) +
    section("Aanvraag", row("Naam", f.name) + row("E-mail", f.email)) +
    note(
      "Wat er al is gebeurd",
      brochureSent
        ? `${esc(f.name)} heeft de brochure automatisch toegestuurd gekregen. Je hoeft alleen nog na te bellen als je dat wilt.`
        : `Er staat nog geen brochure klaar, dus die is <strong>niet</strong> automatisch verstuurd. Stuur 'm handmatig naar <a href="mailto:${esc(f.email)}" style="color:#1a1a18;">${esc(f.email)}</a>.`
    );

  return wrapEmail({
    preheader: `${f.name} · ${f.email}`,
    heading: "Brochure-aanvraag",
    intro: "Binnengekomen via het brochureformulier op mtbbouw.com.",
    body,
  });
}

export const INTERNAL_SUBJECTS = {
  offerte: (f: QuotePayload) =>
    `Nieuwe offerteaanvraag — ${f.name}${f.postcode ? `, ${f.postcode}` : ""}`,
  contact: (f: ContactPayload) => `Nieuw contactbericht — ${f.name}`,
  brochure: (f: BrochurePayload) => `Brochure-aanvraag — ${f.name}`,
};

export { site };
