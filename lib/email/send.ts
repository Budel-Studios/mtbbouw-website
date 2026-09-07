import { site } from "@/lib/site";

/**
 * Verzending via Resend.
 *
 * De WordPress-relay die hier stond is weg: sinds mtbbouw.com naar Vercel wijst
 * bestaat dat endpoint niet meer en leverde het een 404-pagina op, waardoor
 * inzendingen stilletjes verdwenen. Zonder RESEND_API_KEY falen we nu luid.
 */
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const MAIL_FROM = process.env.MAIL_FROM ?? "website@mtbbouw.com";
const MAIL_TO = process.env.MAIL_TO ?? site.email;

export type Mail = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
  /** Afzendernaam vóór het e-mailadres. */
  fromName?: string;
  attachments?: { filename: string; path: string }[];
};

async function deliver(mail: Mail): Promise<boolean> {
  if (!RESEND_API_KEY) {
    console.error("[mail] RESEND_API_KEY ontbreekt — mail niet verstuurd", {
      to: mail.to,
      subject: mail.subject,
    });
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${mail.fromName ?? site.name} <${MAIL_FROM}>`,
        to: [mail.to],
        subject: mail.subject,
        html: mail.html,
        ...(mail.replyTo ? { reply_to: mail.replyTo } : {}),
        ...(mail.attachments ? { attachments: mail.attachments } : {}),
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[mail] Resend afgewezen", res.status, body, {
        to: mail.to,
        subject: mail.subject,
      });
      return false;
    }

    const data = (await res.json().catch(() => null)) as { id?: string } | null;
    console.info("[mail] verstuurd", {
      to: mail.to,
      subject: mail.subject,
      id: data?.id,
    });
    return true;
  } catch (err) {
    console.error("[mail] netwerkfout", err, {
      to: mail.to,
      subject: mail.subject,
    });
    return false;
  }
}

/**
 * Verstuurt eerst de interne mail (dát is de lead — die mag niet verloren gaan
 * achter een klantmail die vastloopt), daarna pas de bevestiging. Bewust geen
 * Promise.all: één afwijzing zou de ander laten vallen.
 */
export async function sendFormEmails(args: {
  internal: { subject: string; html: string; replyTo: string };
  customer: { to: string; subject: string; html: string };
}): Promise<{ internalOk: boolean; customerOk: boolean }> {
  const internalOk = await deliver({
    to: MAIL_TO,
    subject: args.internal.subject,
    html: args.internal.html,
    replyTo: args.internal.replyTo,
    fromName: `${site.name} website`,
  });

  const customerOk = await deliver({
    to: args.customer.to,
    subject: args.customer.subject,
    html: args.customer.html,
    // Reply komt in de gedeelde inbox, niet op website@.
    replyTo: MAIL_TO,
    fromName: site.name,
  });

  return { internalOk, customerOk };
}
