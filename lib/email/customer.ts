/**
 * Bevestigingsmails naar de klant.
 *
 * Opbouw per type: bevestigen → wat er nu gebeurt → recap van wat ze stuurden →
 * hoe ze ons bereiken. Je-vorm, nuchter, en bewust géén reactietermijn: de site
 * belooft "zo snel mogelijk" en dat moet de mail niet overtreffen.
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
import {
  firstName,
  type BrochurePayload,
  type ContactPayload,
  type QuotePayload,
} from "./types";

/**
 * De brochure gaat pas mee als er écht een bestand is. Bewust een aparte vlag:
 * met alleen een default-URL zou de "met brochure"-tak altijd actief lijken en
 * mailen we een dode link.
 */
export const BROCHURE_READY = process.env.BROCHURE_READY === "true";
export const BROCHURE_URL =
  process.env.BROCHURE_URL ?? `${site.url}/brochure/mtb-bouw-brochure.pdf`;

const WHATSAPP = `https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`;

function contactButtons() {
  return buttonRow([
    { href: `tel:${site.telephoneHref}`, text: `Bel ${site.telephone}` },
    { href: WHATSAPP, text: "Stuur een WhatsApp" },
  ]);
}

export function buildQuoteCustomer(f: QuotePayload) {
  const recap =
    section(
      "Dit heb je doorgegeven",
      row("Naam", f.name) +
        row("Telefoon", f.phone) +
        row("E-mail", f.email) +
        row("Projecttype", (f.projectTypes ?? []).join(", ")) +
        row("Omschrijving", f.description) +
        row("Huidige situatie", f.situation) +
        row("Afmetingen / aantallen", f.dimensions) +
        row("Werkonderdelen", (f.workParts ?? []).join(", ")) +
        row("Postcode + plaats", f.postcode) +
        row("Type woning / pand", label(PROPERTY_TYPE_LABELS, f.propertyType)) +
        row("Gewenst startmoment", f.startTime) +
        row("Deadline", f.deadline) +
        row("Budgetrange", label(BUDGET_LABELS, f.budgetRange)) +
        linkRow("Link naar bestanden", f.fileLink) +
        row("Vergunning", f.vergunning) +
        row("Bewoond tijdens werkzaamheden", f.bewoond) +
        row("Opmerkingen", f.remarks)
    ) +
    paragraph(
      "Klopt er iets niet, of wil je nog iets toevoegen? Antwoord gewoon op deze mail, dan passen we het aan."
    ) +
    contactButtons();

  return wrapEmail({
    preheader: "We hebben je aanvraag ontvangen. Een collega belt je zo snel mogelijk.",
    heading: `Bedankt voor je aanvraag, ${firstName(f.name)}`,
    intro: `Je aanvraag is bij ons binnengekomen. Een collega kijkt ernaar en belt je zo snel mogelijk${f.phone ? ` op ${esc(f.phone)}` : ""} om je plannen door te nemen.`,
    body:
      note(
        "Wat er nu gebeurt",
        "We bekijken je aanvraag en bellen je voor een korte kennismaking. Daarin bespreken we wat je precies wilt, wat het ongeveer kost en wanneer we kunnen. Past het van twee kanten, dan plannen we een afspraak op locatie."
      ) + recap,
    footerNote:
      "Je ontvangt deze mail omdat je het aanvraagformulier op mtbbouw.com hebt ingevuld.",
  });
}

export function buildContactCustomer(f: ContactPayload) {
  const body =
    section(
      "Dit heb je gestuurd",
      row("Naam", f.name) + row("E-mail", f.email) + row("Telefoon", f.phone)
    ) +
    note("Je bericht", esc(f.message).replaceAll("\n", "<br />")) +
    paragraph(
      "Antwoorden kan gewoon op deze mail — die komt bij ons binnen."
    ) +
    contactButtons();

  return wrapEmail({
    preheader: "Je bericht is binnen. We nemen zo snel mogelijk contact met je op.",
    heading: `Bedankt voor je bericht, ${firstName(f.name)}`,
    intro:
      "Je bericht is bij ons binnengekomen. We nemen zo snel mogelijk contact met je op.",
    body,
    footerNote:
      "Je ontvangt deze mail omdat je het contactformulier op mtbbouw.com hebt ingevuld.",
  });
}

export function buildBrochureCustomer(
  f: BrochurePayload,
  ready: boolean = BROCHURE_READY
) {
  if (ready) {
    return wrapEmail({
      preheader: "Download de brochure via de knop in deze mail.",
      heading: `Hier is je brochure, ${firstName(f.name)}`,
      intro:
        "In de brochure lees je hoe wij werken, wat we doen en wat je van ons kunt verwachten.",
      body:
        buttonRow([{ href: BROCHURE_URL, text: "Bekijk de brochure (PDF)" }]) +
        paragraph(
          `Lukt de knop niet? Gebruik dan deze link: <a href="${esc(BROCHURE_URL)}" style="color:#1a1a18;">${esc(BROCHURE_URL)}</a>`
        ) +
        paragraph(
          "Vragen na het lezen, of wil je je plannen voorleggen? Bel of app ons gerust, of antwoord op deze mail."
        ) +
        contactButtons(),
      footerNote:
        "Je ontvangt deze mail omdat je de brochure hebt aangevraagd op mtbbouw.com.",
    });
  }

  return wrapEmail({
    preheader: "We sturen je de brochure zo snel mogelijk toe.",
    heading: `Bedankt voor je aanvraag, ${firstName(f.name)}`,
    intro:
      "Je aanvraag is binnen. We sturen je de brochure zo snel mogelijk toe — hij komt in een aparte mail van dit adres. Check ook je spamfolder.",
    body:
      paragraph(
        "Kun je niet wachten? Bel of app ons gerust, dan vertellen we je meteen wat je wilt weten."
      ) + contactButtons(),
    footerNote:
      "Je ontvangt deze mail omdat je de brochure hebt aangevraagd op mtbbouw.com.",
  });
}

export const CUSTOMER_SUBJECTS = {
  offerte: "Je aanvraag bij MTB Bouw is binnen",
  contact: "We hebben je bericht ontvangen",
  brochure: BROCHURE_READY
    ? "Je brochure van MTB Bouw"
    : "Je brochure-aanvraag is binnen",
};
