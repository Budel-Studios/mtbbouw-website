/**
 * E-mailopmaak voor MTB Bouw.
 *
 * E-mailclients kunnen veel minder dan browsers — Outlook rendert HTML met de
 * Word-engine. Vandaar de regels waar dit bestand zich aan houdt:
 *   - opmaak met tabellen, nooit met flex/grid
 *   - alle stijlen inline; een <style>-blok wordt door Gmail gestript
 *   - elke gekleurde cel krijgt zowel bgcolor= als background-color (Word
 *     negeert de `background`-shorthand)
 *   - afbeeldingen met width/height als attribuut, en altijd bruikbaar alt
 *   - vaste breedte 600px; max-width alleen als aanvulling
 *
 * Bewust GEEN straatadres in de footer: de site presenteert geen bezoeklocatie.
 * Niet alsnog `site.address` hier inhaken.
 */
import { site } from "@/lib/site";

const C = {
  ink: "#1a1a18",
  paper: "#f6f6f4",
  mist: "#e5e3de",
  stone: "#6b6b6b",
  lime: "#abe000",
  white: "#ffffff",
} as const;

const DISPLAY = "'Montserrat',Arial,Helvetica,sans-serif";
const BODY = "Arial,Helvetica,sans-serif";
/**
 * Absolute URL: mailclients hebben niets aan een relatief pad. Lokaal wijst
 * hij naar de dev-server, zodat de previewroute het logo ook echt toont.
 */
const LOGO =
  process.env.NODE_ENV === "production"
    ? `${site.url}/images/brand/logo-full.png`
    : "http://localhost:3000/images/brand/logo-full.png";

/** Escaped ook quotes: waarden belanden soms in een href-attribuut. */
export function esc(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/** Eén label/waarde-regel. Lege waarde = geen regel. */
export function row(label: string, value?: string): string {
  if (!value || !value.trim()) return "";
  return `<tr>
    <td style="padding:8px 12px 8px 0;width:38%;vertical-align:top;font-family:${BODY};font-size:13px;line-height:1.5;color:${C.stone};border-bottom:1px solid ${C.mist};">${esc(label)}</td>
    <td style="padding:8px 0;vertical-align:top;font-family:${BODY};font-size:15px;line-height:1.5;color:${C.ink};border-bottom:1px solid ${C.mist};word-break:break-word;">${esc(value)}</td>
  </tr>`;
}

/** Regel met een klikbare link als waarde. */
export function linkRow(label: string, url?: string): string {
  if (!url || !url.trim()) return "";
  if (!/^https?:\/\//i.test(url)) return row(label, url);
  const safe = esc(url);
  return `<tr>
    <td style="padding:8px 12px 8px 0;width:38%;vertical-align:top;font-family:${BODY};font-size:13px;line-height:1.5;color:${C.stone};border-bottom:1px solid ${C.mist};">${esc(label)}</td>
    <td style="padding:8px 0;vertical-align:top;font-family:${BODY};font-size:15px;line-height:1.5;border-bottom:1px solid ${C.mist};word-break:break-word;"><a href="${safe}" style="color:${C.ink};text-decoration:underline;">${safe}</a></td>
  </tr>`;
}

/** Kopje met lime onderlijn + tabel. Zonder regels: niets (geen verweesde kop). */
export function section(title: string, rows: string): string {
  if (!rows.trim()) return "";
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;margin-top:28px;">
    <tr><td style="padding:0 0 8px 0;border-bottom:2px solid ${C.lime};font-family:${DISPLAY};font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${C.ink};">${esc(title)}</td></tr>
    <tr><td style="padding:0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">${rows}</table>
    </td></tr>
  </table>`;
}

export function paragraph(text: string): string {
  return `<p style="margin:16px 0 0 0;font-family:${BODY};font-size:15px;line-height:1.6;color:${C.ink};">${text}</p>`;
}

/** Accentblok met lime kantlijn — voor "wat er nu gebeurt" en citaten. */
export function note(title: string, text: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;margin-top:24px;">
    <tr>
      <td bgcolor="${C.paper}" style="background-color:${C.paper};border-left:3px solid ${C.lime};padding:16px 20px;">
        ${title ? `<p style="margin:0 0 6px 0;font-family:${DISPLAY};font-size:14px;font-weight:700;color:${C.ink};">${esc(title)}</p>` : ""}
        <p style="margin:0;font-family:${BODY};font-size:14px;line-height:1.6;color:${C.stone};">${text}</p>
      </td>
    </tr>
  </table>`;
}

/** Knop met VML-variant, anders valt hij in Outlook uit elkaar. */
export function button(href: string, text: string): string {
  const safe = esc(href);
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
    <tr><td bgcolor="${C.lime}" style="background-color:${C.lime};">
      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${safe}" style="height:48px;v-text-anchor:middle;width:220px;" arcsize="0%" stroke="f" fillcolor="${C.lime}"><w:anchorlock/><center style="color:${C.ink};font-family:${DISPLAY};font-size:15px;font-weight:700;"><![endif]-->
      <a href="${safe}" style="display:inline-block;padding:14px 28px;font-family:${DISPLAY};font-size:15px;font-weight:700;color:${C.ink};text-decoration:none;">${esc(text)}</a>
      <!--[if mso]></center></v:roundrect><![endif]-->
    </td></tr>
  </table>`;
}

/** Twee knoppen naast elkaar (valt op smal scherm onder elkaar). */
export function buttonRow(buttons: { href: string; text: string }[]): string {
  const cells = buttons
    .map(
      (b) =>
        `<td style="padding:0 12px 12px 0;">${button(b.href, b.text)}</td>`
    )
    .join("");
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-top:24px;"><tr>${cells}</tr></table>`;
}

export type Shell = {
  /** Regel in de inbox-preview. Niet zichtbaar in de mail zelf. */
  preheader: string;
  heading: string;
  intro?: string;
  body: string;
  footerNote?: string;
};

export function wrapEmail(s: Shell): string {
  // Onzichtbare vulling: zonder dit trekt Gmail de eerste bodytekst mee in de
  // inbox-preview, direct achter de preheader.
  const spacer = "&#847;&zwnj;&nbsp;&#8199;&shy;".repeat(40);

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="nl">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="x-apple-disable-message-reformatting" />
<meta name="color-scheme" content="light only" />
<meta name="supported-color-schemes" content="light only" />
<title>${esc(s.heading)}</title>
<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
</head>
<body style="margin:0;padding:0;background-color:${C.paper};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:${C.paper};">${esc(s.preheader)}${spacer}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.paper}" style="background-color:${C.paper};border-collapse:collapse;">
<tr><td align="center" style="padding:24px 12px;">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.white}" style="width:600px;max-width:600px;background-color:${C.white};border:1px solid ${C.mist};border-collapse:collapse;">
    <tr><td align="left" bgcolor="${C.white}" style="background-color:${C.white};padding:36px 40px 28px 40px;">
      <img src="${LOGO}" width="220" height="54" alt="MTB Bouw" style="display:block;border:0;outline:none;text-decoration:none;width:220px;height:54px;max-width:220px;" />
    </td></tr>
    <tr><td bgcolor="${C.lime}" style="background-color:${C.lime};line-height:3px;font-size:3px;height:3px;">&nbsp;</td></tr>
    <tr><td style="padding:36px 40px 0 40px;">
      <h1 style="margin:0;font-family:${DISPLAY};font-size:26px;line-height:1.2;font-weight:800;color:${C.ink};letter-spacing:-0.02em;">${esc(s.heading)}</h1>
      ${s.intro ? `<p style="margin:16px 0 0 0;font-family:${BODY};font-size:16px;line-height:1.65;color:${C.stone};">${s.intro}</p>` : ""}
    </td></tr>
    <tr><td style="padding:8px 40px 36px 40px;">${s.body}</td></tr>
    <tr><td bgcolor="${C.paper}" style="background-color:${C.paper};border-top:1px solid ${C.mist};padding:28px 40px;font-family:${BODY};font-size:12px;line-height:1.8;color:${C.stone};">
      <strong style="color:${C.ink};">${site.name}</strong> &middot; ${site.tagline}<br />
      <a href="tel:${site.telephoneHref}" style="color:${C.stone};text-decoration:underline;">${site.telephone}</a> &middot;
      <a href="https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}" style="color:${C.stone};text-decoration:underline;">WhatsApp</a> &middot;
      <a href="mailto:${site.email}" style="color:${C.stone};text-decoration:underline;">${site.email}</a><br />
      ${site.openingHours} &middot; Werkgebied ${site.areaServed.join(" en ")}<br />
      KvK ${site.kvk} &middot; <a href="${site.url}" style="color:${C.stone};text-decoration:underline;">mtbbouw.com</a>
      ${s.footerNote ? `<div style="margin-top:10px;">${esc(s.footerNote)}</div>` : ""}
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;
}

export { C as EMAIL_COLORS, DISPLAY as EMAIL_DISPLAY_FONT, BODY as EMAIL_BODY_FONT };
