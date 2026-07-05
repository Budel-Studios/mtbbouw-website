import { NextResponse } from "next/server";

/**
 * Formulier-inzendingen (offerte-drawer, contactformulier, brochure-aanvraag) —
 * zelfde flow als de live site: bouwt een HTML-mail en post die naar het
 * bestaande WordPress mail-endpoint (custom/v1/contact), dat relayt naar de
 * MTB-inbox.
 *
 * Lokaal testen zonder echte mails: zet MAIL_RELAY_URL naar een echo-endpoint.
 *
 * TODO: when the WordPress site is retired, replace WP_ENDPOINT with our own
 * mailer (e.g. nodemailer + SMTP env vars) — the payload shape stays the same.
 */
const WP_ENDPOINT =
  process.env.MAIL_RELAY_URL ?? "https://mtbbouw.com/wp-json/custom/v1/contact";

type FormType = "offerte" | "contact" | "brochure";

type QuotePayload = {
  name: string;
  phone: string;
  email: string;
  projectTypes: string[];
  description: string;
  situation: string;
  dimensions: string;
  workParts: string[];
  postcode: string;
  propertyType: string;
  startTime: string;
  deadline: string;
  budgetRange: string;
  fileLink: string;
  vergunning: string;
  bewoond: string;
  remarks: string;
  agreement: boolean;
};

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

type BrochurePayload = {
  name: string;
  email: string;
};

type Body = { type?: FormType; website?: string } & QuotePayload &
  ContactPayload &
  BrochurePayload;

/* ------------------------------- e-mail helpers ------------------------------- */

function esc(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function row(label: string, value: string) {
  if (!value) return "";
  return `<tr>
    <td style="padding:6px 12px 6px 0;color:#718096;white-space:nowrap;vertical-align:top;">${label}</td>
    <td style="padding:6px 0;color:#1a202c;">${esc(value)}</td>
  </tr>`;
}

function section(title: string, rows: string) {
  if (!rows.trim()) return "";
  return `<div style="border-bottom:2px solid #edf2f7;padding-bottom:8px;margin-top:25px;font-weight:bold;">${title}</div>
  <table style="font-size:15px;margin-top:10px;border-collapse:collapse;">${rows}</table>`;
}

/** Gedeelde mail-chrome; de kop maakt inbox-filtering per type mogelijk. */
function wrapEmail(title: string, inner: string) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;background:#f7fafc;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;">
    <div style="background:#1a1a18;color:#abe000;padding:24px;font-size:20px;font-weight:bold;">
      ${title}
    </div>
    <div style="padding:24px;">
      ${inner}
    </div>
    <div style="background:#f7fafc;text-align:center;padding:20px;font-size:12px;color:#a0aec0;border-top:1px solid #e1e4e8;">
      This is an automated message from your website's contact form.
    </div>
  </div>
</body>
</html>`;
}

function buildQuoteEmail(f: QuotePayload) {
  const inner = `
      ${section(
        "Contact",
        row("Naam", f.name) +
          row("Telefoon", f.phone) +
          row("E-mail", f.email) +
          row("Projecttype", f.projectTypes.join(", "))
      )}
      ${section(
        "Projectdetails",
        row("Omschrijving", f.description) +
          row("Huidige situatie", f.situation) +
          row("Afmetingen / aantallen", f.dimensions) +
          row("Werkonderdelen", f.workParts.join(", "))
      )}
      ${section(
        "Locatie & planning",
        row("Postcode + plaats", f.postcode) +
          row("Type woning / pand", f.propertyType) +
          row("Gewenst startmoment", f.startTime) +
          row("Deadline", f.deadline) +
          row("Budgetrange", f.budgetRange) +
          row("Link naar bestanden", f.fileLink) +
          row("Vergunning", f.vergunning) +
          row("Bewoond tijdens werkzaamheden", f.bewoond)
      )}
      ${section("Remarks", row("Opmerkingen", f.remarks))}
      <p style="font-size:12px;margin-top:30px;color:#718096;">
        <strong>Consent:</strong> ${f.agreement ? "User has agreed to the terms." : "User has not agreed."}
      </p>`;
  return wrapEmail("Nieuwe offerteaanvraag via mtbbouw.com", inner);
}

function buildContactEmail(f: ContactPayload) {
  const inner = `
      ${section(
        "Contact",
        row("Naam", f.name) + row("E-mail", f.email) + row("Telefoon", f.phone ?? "")
      )}
      ${section("Bericht", row("Bericht", f.message))}`;
  return wrapEmail("Nieuw contactbericht via mtbbouw.com", inner);
}

function buildBrochureEmail(f: BrochurePayload) {
  const inner = `
      ${section("Aanvraag", row("Naam", f.name) + row("E-mail", f.email))}
      <p style="font-size:14px;margin-top:20px;color:#1a202c;">
        Deze bezoeker wil de gratis brochure ontvangen. Stuur de brochure naar
        bovenstaand e-mailadres.
      </p>`;
  return wrapEmail("Brochure-aanvraag via mtbbouw.com", inner);
}

/* ---------------------------------- validatie --------------------------------- */

const EMAIL_RE = /^\S+@\S+\.\S+$/;

function validate(type: FormType, body: Body): string | null {
  if (!body.name || !body.email || !EMAIL_RE.test(body.email)) {
    return "Missing or invalid name/email";
  }
  if (type === "offerte") {
    if (
      !body.phone ||
      !body.projectTypes?.length ||
      !body.description ||
      !body.postcode ||
      !body.startTime ||
      body.agreement !== true
    ) {
      return "Missing required quote fields";
    }
  }
  if (type === "contact" && !body.message) {
    return "Missing message";
  }
  return null;
}

/* ------------------------------------ route ----------------------------------- */

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: bots vullen het verborgen 'website'-veld — doe alsof het lukte.
  if (body.website) {
    return NextResponse.json({ success: true });
  }

  const type: FormType = body.type ?? "offerte";
  const error = validate(type, body);
  if (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }

  const message =
    type === "contact"
      ? buildContactEmail(body)
      : type === "brochure"
        ? buildBrochureEmail(body)
        : buildQuoteEmail(body);

  try {
    const res = await fetch(WP_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Mtbbouw",
        email: "info@mtbbouw.com",
        message,
      }),
    });
    const data = await res.json().catch(() => null);
    const success = res.ok && data?.success !== false;
    return NextResponse.json({ success });
  } catch {
    return NextResponse.json({ success: false, error: "Mail relay failed" }, { status: 502 });
  }
}
