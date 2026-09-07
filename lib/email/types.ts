export type FormType = "offerte" | "contact" | "brochure";

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

/** Honeypot-veld `website`: ingevuld = bot. */
export type Body = { type?: FormType; website?: string } & QuotePayload &
  ContactPayload &
  BrochurePayload;

/** Voornaam voor de aanhef; valt terug op de hele naam. */
export function firstName(name: string): string {
  return name.trim().split(/\s+/)[0] || name.trim();
}
