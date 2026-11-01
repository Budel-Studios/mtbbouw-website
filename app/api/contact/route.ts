import { NextResponse } from "next/server";
import { checkBotId } from "botid/server";
import {
  BROCHURE_READY,
  CUSTOMER_SUBJECTS,
  buildApplicationCustomer,
  buildBrochureCustomer,
  buildContactCustomer,
  buildQuoteCustomer,
} from "@/lib/email/customer";
import {
  INTERNAL_SUBJECTS,
  buildApplicationInternal,
  buildBrochureInternal,
  buildContactInternal,
  buildQuoteInternal,
} from "@/lib/email/internal";
import { sendFormEmails } from "@/lib/email/send";
import type { Body, FormType } from "@/lib/email/types";
import { site } from "@/lib/site";
import {
  clientIp,
  filledTooFast,
  rateLimited,
  sameOrigin,
  tooLong,
  validPhone,
} from "@/lib/form-guard";

/**
 * Formulier-inzendingen (offerte-drawer, contactformulier, brochure-aanvraag).
 *
 * Elke inzending levert twee mails op: de lead naar info@ en een bevestiging
 * naar de aanvrager. De opmaak staat in lib/email/. De beveiliging tegen bots
 * en misbruik staat in lib/form-guard.ts.
 */
const EMAIL_RE = /^\S+@\S+\.\S+$/;

function validate(type: FormType, body: Body): string | null {
  if (!body.name || !body.email || !EMAIL_RE.test(body.email)) {
    return "Missing or invalid name/email";
  }
  const long = tooLong(body as unknown as Record<string, unknown>);
  if (long) return `Field too long: ${long}`;
  if (body.phone && !validPhone(body.phone)) return "Invalid phone";
  if (type === "offerte") {
    if (
      !body.phone ||
      !body.projectTypes?.length ||
      !body.description ||
      !body.postcode ||
      !body.houseNumber ||
      !body.startTime ||
      body.agreement !== true
    ) {
      return "Missing required quote fields";
    }
  }
  if ((type === "contact" || type === "sollicitatie") && !body.message) {
    return "Missing message";
  }
  return null;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — moet vóór elke verzending blijven staan, anders is dit een
  // open relay die op verzoek naar willekeurige adressen mailt.
  if (body.website) {
    return NextResponse.json({ success: true });
  }

  // Alleen vanaf onze eigen pagina's.
  if (!sameOrigin(request)) {
    return NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 });
  }

  // Onzichtbare botcheck van Vercel (lokaal altijd "mens").
  const verdict = await checkBotId();
  if (verdict.isBot) {
    return NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 });
  }

  if (rateLimited(clientIp(request))) {
    return NextResponse.json({ success: false, error: "Too many requests" }, { status: 429 });
  }

  // Binnen een paar seconden ingevuld: geen mens. Doe alsof het gelukt is.
  if (filledTooFast(body.elapsed)) {
    return NextResponse.json({ success: true });
  }

  const type: FormType = body.type ?? "offerte";
  const error = validate(type, body);
  if (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }

  const mails =
    type === "sollicitatie"
      ? {
          internalSubject: INTERNAL_SUBJECTS.sollicitatie(body),
          internalHtml: buildApplicationInternal(body),
          customerHtml: buildApplicationCustomer(body),
        }
      : type === "contact"
      ? {
          internalSubject: INTERNAL_SUBJECTS.contact(body),
          internalHtml: buildContactInternal(body),
          customerHtml: buildContactCustomer(body),
        }
      : type === "brochure"
        ? {
            internalSubject: INTERNAL_SUBJECTS.brochure(body),
            internalHtml: buildBrochureInternal(body, BROCHURE_READY),
            customerHtml: buildBrochureCustomer(body),
          }
        : {
            internalSubject: INTERNAL_SUBJECTS.offerte(body),
            internalHtml: buildQuoteInternal(body),
            customerHtml: buildQuoteCustomer(body),
          };

  try {
    const { internalOk, customerOk } = await sendFormEmails({
      internal: {
        subject: mails.internalSubject,
        html: mails.internalHtml,
        replyTo: body.email,
        // Sollicitaties altijd naar de algemene inbox info@mtbbouw.com.
        ...(type === "sollicitatie" ? { to: site.email } : {}),
      },
      customer: {
        to: body.email,
        subject: CUSTOMER_SUBJECTS[type],
        html: mails.customerHtml,
      },
    });

    // De lead is wat telt. Komt de bevestiging niet aan, dan wordt er alsnog
    // gebeld — dus melden we succes en loggen we het probleem.
    if (internalOk && !customerOk) {
      console.error("[mail] bevestigingsmail naar klant mislukt", {
        type,
        to: body.email,
      });
    }

    if (!internalOk) {
      return NextResponse.json(
        { success: false, error: "Mail relay failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Mail relay failed" },
      { status: 502 }
    );
  }
}
