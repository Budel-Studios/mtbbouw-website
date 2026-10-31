export type FormType = "offerte" | "contact" | "brochure" | "sollicitatie";

export type QuotePayload = {
  name: string;
  phone: string;
  email: string;
  projectTypes: string[];
  description: string;
  situation: string;
  dimensions: string;
  workParts: string[];
  postcode: string;
  houseNumber: string;
  propertyType: string;
  startTime: string;
  deadline: string;
  budgetRange: string;
  fileLink: string;
  vergunning: string;
  bewoond: string;
  remarks: string;
  agreement: boolean;
  /** Pagina waarop de drawer werd geopend, voor meten per stadspagina. */
  sourcePage?: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export type BrochurePayload = {
  name: string;
  email: string;
};

export type ApplicationPayload = {
  name: string;
  email: string;
  phone?: string;
  /** Vacature waarop gesolliciteerd wordt; leeg = open sollicitatie. */
  job?: string;
  message: string;
  /** Optionele link naar cv/portfolio (bijv. LinkedIn of een gedeelde map). */
  cvLink?: string;
};

/**
 * Honeypot-veld `website`: ingevuld = bot. `elapsed`: ms tussen openen en
 * versturen van het formulier (te snel = bot).
 */
export type Body = { type?: FormType; website?: string; elapsed?: number } & QuotePayload &
  ContactPayload &
  BrochurePayload &
  ApplicationPayload;

/** Voornaam voor de aanhef; valt terug op de hele naam. */
export function firstName(name: string): string {
  return name.trim().split(/\s+/)[0] || name.trim();
}
