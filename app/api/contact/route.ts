import { NextResponse } from "next/server";
import {
  BROCHURE_READY,
  CUSTOMER_SUBJECTS,
  buildBrochureCustomer,
  buildContactCustomer,
  buildQuoteCustomer,
} from "@/lib/email/customer";
import {
  INTERNAL_SUBJECTS,
  buildBrochureInternal,
  buildContactInternal,
  buildQuoteInternal,
} from "@/lib/email/internal";
import { sendFormEmails } from "@/lib/email/send";
import type { Body, FormType } from "@/lib/email/types";

/**
 * Formulier-inzendingen (offerte-drawer, contactformulier, brochure-aanvraag).
 *
 * Elke inzending levert twee mails op: de lead naar info@ en een bevestiging
 * naar de aanvrager. De opmaak staat in lib/email/.
 */
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

  const type: FormType = body.type ?? "offerte";
  const error = validate(type, body);
  if (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }

  const mails =
    type === "contact"
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
