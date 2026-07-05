"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { site } from "@/lib/site";

/**
 * Contact-drawer — 1:1 replica of the live site's custom quote window
 * (janki-header plugin): right-hand slide-over with a 3-step form
 * (Contact → Projectdetails → Locatie & planning) and a success screen.
 * Opens via <ContactDrawerButton>; state lives in <ContactDrawerProvider>.
 */

/* ---------------------------------- icons (lucide) --------------------------------- */

function Icon({
  children,
  size = 18,
  strokeWidth = 2,
  className,
}: {
  children: ReactNode;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const XIcon = () => (
  <Icon size={24}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Icon>
);
const ArrowLeft = () => (
  <Icon>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </Icon>
);
const ArrowRight = () => (
  <Icon>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Icon>
);
const Send = () => (
  <Icon>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </Icon>
);
const Check = () => (
  <Icon size={32} strokeWidth={3}>
    <path d="M20 6 9 17l-5-5" />
  </Icon>
);
const PhoneIcon = () => (
  <Icon size={14}>
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
  </Icon>
);
const MessageCircle = () => (
  <Icon size={14}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </Icon>
);
const Mail = () => (
  <Icon size={14}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Icon>
);
const Instagram = () => (
  <Icon size={14}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </Icon>
);
const ChevronDown = ({ open }: { open: boolean }) => (
  <Icon size={18} className={`transition-transform ${open ? "rotate-180" : ""}`}>
    <path d="m6 9 6 6 6-6" />
  </Icon>
);

/* ------------------------------- form field components ----------------------------- */

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string;
  error?: string;
};

function InputField({ label, name, value, onChange, placeholder, error }: FieldProps) {
  return (
    <div className="mb-3">
      <label className="field-label">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`field-control ${error ? "field-control-error" : ""}`}
      />
      {error && (
        <p className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function TextareaField({ label, name, value, onChange, placeholder, error }: FieldProps) {
  return (
    <div>
      <label className="field-label">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`field-control h-24 resize-y ${error ? "field-control-error" : ""}`}
      />
      {error && (
        <p className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function CheckboxField({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="group flex cursor-pointer items-center gap-3">
      <div
        className={`flex h-5 w-5 items-center justify-center border transition-colors ${
          checked ? "border-lime bg-lime" : "border-ink/40 bg-white group-hover:border-lime-dark"
        }`}
      >
        {checked && (
          <svg
            className="h-3.5 w-3.5 text-ink"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        )}
      </div>
      <span className="text-sm text-ink">{label}</span>
      <input type="checkbox" className="hidden" checked={checked} onChange={onChange} />
    </label>
  );
}

function RadioField({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label onClick={onChange} className="group flex cursor-pointer items-center gap-3">
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
          checked ? "border-lime-dark" : "border-ink/40 group-hover:border-lime-dark"
        }`}
      >
        {checked && <div className="h-2.5 w-2.5 rounded-full bg-lime-dark" />}
      </div>
      <span className="text-sm text-ink">{label}</span>
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: Omit<FieldProps, "placeholder" | "error"> & {
  options: { label: string; value: string }[];
}) {
  return (
    <div>
      <label className="field-label">{label}</label>
      <select name={name} value={value} onChange={onChange} className="field-control">
        <option value="">Selecteer...</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Collapsible({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-mist">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-3 font-display text-sm font-semibold text-ink"
      >
        {title}
        <ChevronDown open={open} />
      </button>
      {open && <div className="space-y-5 p-3 pt-0">{children}</div>}
    </div>
  );
}

function ContactChip({ icon, text, href }: { icon: ReactNode; text: string; href?: string }) {
  const inner = (
    <>
      {icon} <span>{text}</span>
    </>
  );
  return href ? (
    <a href={href} className="flex items-center gap-2 text-xs text-stone hover:text-ink">
      {inner}
    </a>
  ) : (
    <div className="flex items-center gap-2 text-xs text-stone">{inner}</div>
  );
}

/* -------------------------------------- options ------------------------------------ */

const PROJECT_TYPES = [
  "Renovatie / verbouwing",
  "Uitbouw / aanbouw",
  "Schuur / garage / overkapping",
  "Badkamer / toilet",
  "Keuken (bouwkundig)",
  "Kozijnen / deuren / puien",
  "Dak / dakkapel / dakopbouw",
  "Isolatie / verduurzaming",
  "Afbouw (wanden/plafonds/vloeren)",
];

const SITUATIONS = ["Nieuwbouw", "Bestaande woning", "Bedrijfspand", "Anders"];

const WORK_PARTS = [
  "Sloopwerk",
  "Constructie (draagmuur/draagbalk)",
  "Metselwerk/gevel",
  "Timmerwerk",
  "Elektra",
  "Loodgieterswerk",
  "Stucwerk",
  "Tegelwerk",
  "Schilderwerk",
  "Vloeren",
  "Keuken montage",
  "Badkamer montage",
];

const PROPERTY_TYPES = [
  { label: "Rijtjeshuis", value: "rijtjeshuis" },
  { label: "2-onder-1-kap", value: "2-onder-1-kap" },
  { label: "Vrijstaand", value: "vrijstaand" },
  { label: "Appartement", value: "appartement" },
  { label: "Bedrijfspand", value: "bedrijfspand" },
];

const START_TIMES = ["Zo snel mogelijk", "Binnen 1-3 maanden", "3-6 maanden", "Later"];

const BUDGET_RANGES = [
  { label: "Nog geen idee", value: "no-idea" },
  { label: "< €5.000", value: "under-5k" },
  { label: "€5.000 – €15.000", value: "5k-15k" },
  { label: "€15.000 – €35.000", value: "15k-35k" },
  { label: "€35.000 – €75.000", value: "35k-75k" },
  { label: "€75.000+", value: "over-75k" },
];

const VERGUNNING_OPTIONS = ["Weet ik niet", "Nee", "Ja of in aanvraag"];

/* --------------------------------------- state ------------------------------------- */

type ContactFormData = {
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

const INITIAL_FORM: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  projectTypes: [],
  description: "",
  situation: "",
  dimensions: "",
  workParts: [],
  postcode: "",
  propertyType: "",
  startTime: "",
  deadline: "",
  budgetRange: "",
  fileLink: "",
  vergunning: "",
  bewoond: "",
  remarks: "",
  agreement: false,
};

type Errors = Partial<Record<keyof ContactFormData, string>>;

/* ------------------------------------ context/API ---------------------------------- */

const ContactDrawerContext = createContext<{ open: () => void } | null>(null);

function useContactDrawer() {
  const ctx = useContext(ContactDrawerContext);
  if (!ctx) throw new Error("useContactDrawer must be used within ContactDrawerProvider");
  return ctx;
}

export function ContactDrawerButton({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  /** Runs before the drawer opens (e.g. to close a menu first) */
  onClick?: () => void;
}) {
  const { open } = useContactDrawer();
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        open();
      }}
      className={className}
    >
      {children}
    </button>
  );
}

/* -------------------------------------- drawer ------------------------------------- */

const STEP_LABELS = ["Contact", "Projectdetails", "Locatie & planning"];

export function ContactDrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Errors>({});

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const toggleInList = (key: "projectTypes" | "workParts", value: string) =>
    setForm((f) => ({
      ...f,
      [key]: f[key].includes(value)
        ? f[key].filter((v) => v !== value)
        : [...f[key], value],
    }));

  // Validation — same rules as the live window
  const validate = () => {
    const errs: Errors = {};
    if (step === 1) {
      if (!form.name) errs.name = "Naam is verplicht";
      if (!form.phone) errs.phone = "Telefoonnummer is verplicht";
      if (!form.email) errs.email = "E-mailadres is verplicht";
      else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Ongeldig e-mailadres";
      if (form.projectTypes.length === 0)
        errs.projectTypes = "Kies minimaal één projecttype";
    }
    if (step === 2 && !form.description) errs.description = "Omschrijving is verplicht";
    if (step === 3) {
      if (!form.postcode) errs.postcode = "Postcode is verplicht";
      if (!form.startTime) errs.startTime = "Selecteer een startmoment";
      if (!form.agreement) errs.agreement = "Akkoord gaan is verplicht";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => validate() && setStep((s) => Math.min(s + 1, 3));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || sending) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "offerte", ...form }),
      });
      const data = await res.json();
      if (data.success) setSuccess(true);
      else alert("Versturen mislukt. Probeer het later opnieuw of bel ons.");
    } catch {
      alert("Versturen mislukt. Probeer het later opnieuw of bel ons.");
    } finally {
      setSending(false);
    }
  };

  const closeSuccess = () => {
    close();
    setSuccess(false);
    setForm(INITIAL_FORM);
    setStep(1);
  };

  return (
    <ContactDrawerContext.Provider value={{ open }}>
      {children}

      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex animate-overlay-in bg-black/40 backdrop-blur-sm ${
            success ? "items-center justify-center" : "justify-end"
          }`}
          onClick={(e) => e.target === e.currentTarget && (success ? closeSuccess() : close())}
        >
          {success ? (
            /* --------------------------- success screen --------------------------- */
            <div className="m-auto w-full max-w-md animate-pop-in bg-white p-8 text-center shadow-2xl">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-lime/15 text-lime-dark">
                <Check />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-ink">
                Dankjewel voor je aanvraag
              </h3>
              <p className="mb-8 text-stone">
                Je wordt zo snel mogelijk door een collega gebeld.
              </p>
              <p className="mb-6 text-lg font-bold text-ink">Groet MTB Bouw</p>
              <button
                type="button"
                onClick={closeSuccess}
                className="w-full bg-lime py-4 font-display font-bold text-ink transition-all hover:bg-lime-dark"
              >
                Sluiten
              </button>
            </div>
          ) : (
            /* ------------------------------- drawer ------------------------------- */
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Aanvraag doen"
              className="flex h-full w-full max-w-lg animate-drawer-in flex-col bg-white shadow-2xl"
            >
              {/* Header + progress */}
              <div className="relative p-6 pb-2">
                <button
                  type="button"
                  onClick={close}
                  aria-label="Sluiten"
                  className="absolute right-6 top-6 text-stone/60 transition-colors hover:text-black"
                >
                  <XIcon />
                </button>
                <h2 className="text-2xl font-bold text-ink">Aanvraag doen</h2>
                <p className="mt-1 text-sm text-stone">Binnen 2 minuten ingevuld</p>
                <div className="mt-6 flex gap-2">
                  {STEP_LABELS.map((label, i) => (
                    <div key={label} className="flex-1">
                      <div
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          step >= i + 1 ? "bg-lime" : "bg-mist"
                        }`}
                      />
                      <span
                        className={`mt-1 block text-[11px] font-medium ${
                          step === i + 1 ? "text-ink" : "text-stone/60"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="mt-4 border-mist" />

              {/* Step body */}
              <form onSubmit={submit} className="flex min-h-0 flex-1 flex-col">
                <div className="flex-1 overflow-y-auto p-6">
                  {step === 1 && (
                    <div key="step1" className="animate-step-in space-y-5">
                      <InputField
                        label="Naam *"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        error={errors.name}
                        placeholder="Volledige naam"
                      />
                      <InputField
                        label="Telefoonnummer *"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        placeholder="06-12345678"
                      />
                      <InputField
                        label="E-mailadres *"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="naam@voorbeeld.nl"
                      />
                      <div className="mt-3">
                        <label className="field-label mb-3">
                          Projecttype * (meerdere mogelijk)
                        </label>
                        <div className="space-y-2">
                          {PROJECT_TYPES.map((t) => (
                            <CheckboxField
                              key={t}
                              label={t}
                              checked={form.projectTypes.includes(t)}
                              onChange={() => toggleInList("projectTypes", t)}
                            />
                          ))}
                        </div>
                        {errors.projectTypes && (
                          <p className="field-error">{errors.projectTypes}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div key="step2" className="animate-step-in space-y-5">
                      <TextareaField
                        label="Korte omschrijving van het project *"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        error={errors.description}
                        placeholder="Beschrijf kort wat je wilt laten doen..."
                      />
                      <div>
                        <label className="field-label mb-3">
                          Huidige situatie
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {SITUATIONS.map((s) => (
                            <RadioField
                              key={s}
                              label={s}
                              checked={form.situation === s}
                              onChange={() => setForm((f) => ({ ...f, situation: s }))}
                            />
                          ))}
                        </div>
                      </div>
                      <Collapsible title="Extra details (optioneel)">
                        <InputField
                          label="Afmetingen / aantallen"
                          name="dimensions"
                          value={form.dimensions}
                          onChange={handleChange}
                          placeholder="Bijv. 4x6 meter, 2 ramen"
                        />
                        <div>
                          <label className="field-label mb-3">
                            Werkonderdelen
                          </label>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                            {WORK_PARTS.map((w) => (
                              <CheckboxField
                                key={w}
                                label={w}
                                checked={form.workParts.includes(w)}
                                onChange={() => toggleInList("workParts", w)}
                              />
                            ))}
                          </div>
                        </div>
                      </Collapsible>
                    </div>
                  )}

                  {step === 3 && (
                    <div key="step3" className="animate-step-in space-y-6">
                      <InputField
                        label="Postcode + plaats *"
                        name="postcode"
                        value={form.postcode}
                        onChange={handleChange}
                        error={errors.postcode}
                        placeholder="1234 AB Amsterdam"
                      />
                      <SelectField
                        label="Type woning / pand"
                        name="propertyType"
                        value={form.propertyType}
                        onChange={handleChange}
                        options={PROPERTY_TYPES}
                      />
                      <div>
                        <label className="field-label mb-3">
                          Gewenst startmoment *
                        </label>
                        <div className="space-y-3">
                          {START_TIMES.map((t) => (
                            <RadioField
                              key={t}
                              label={t}
                              checked={form.startTime === t}
                              onChange={() => setForm((f) => ({ ...f, startTime: t }))}
                            />
                          ))}
                        </div>
                        {errors.startTime && (
                          <p className="field-error">{errors.startTime}</p>
                        )}
                      </div>
                      <div>
                        <label className="field-label mb-3">
                          Is er een deadline?
                        </label>
                        <div className="flex items-center space-x-4">
                          {["Nee", "Ja"].map((d) => (
                            <RadioField
                              key={d}
                              label={d}
                              checked={form.deadline === d}
                              onChange={() => setForm((f) => ({ ...f, deadline: d }))}
                            />
                          ))}
                        </div>
                      </div>
                      <Collapsible title="Extra details (optioneel)">
                        <SelectField
                          label="Budgetrange"
                          name="budgetRange"
                          value={form.budgetRange}
                          onChange={handleChange}
                          options={BUDGET_RANGES}
                        />
                        <InputField
                          label="Link naar bestanden"
                          name="fileLink"
                          value={form.fileLink}
                          onChange={handleChange}
                          placeholder="https://drive.google.com/..."
                        />
                        <div>
                          <label className="field-label mb-3">
                            Vergunning
                          </label>
                          <div className="space-y-3">
                            {VERGUNNING_OPTIONS.map((v) => (
                              <RadioField
                                key={v}
                                label={v}
                                checked={form.vergunning === v}
                                onChange={() => setForm((f) => ({ ...f, vergunning: v }))}
                              />
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="field-label mb-3">
                            Bewoond tijdens werkzaamheden?
                          </label>
                          <div className="flex items-center space-x-4">
                            {["Nee", "Ja"].map((b) => (
                              <RadioField
                                key={b}
                                label={b}
                                checked={form.bewoond === b}
                                onChange={() => setForm((f) => ({ ...f, bewoond: b }))}
                              />
                            ))}
                          </div>
                        </div>
                        <TextareaField
                          label="Opmerkingen"
                          name="remarks"
                          value={form.remarks}
                          onChange={handleChange}
                          placeholder="Overige opmerkingen..."
                        />
                      </Collapsible>
                      <CheckboxField
                        label="Ik ga akkoord met de algemene voorwaarden *"
                        checked={form.agreement}
                        onChange={() => setForm((f) => ({ ...f, agreement: !f.agreement }))}
                      />
                      {errors.agreement && (
                        <p className="field-error">{errors.agreement}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Footer: nav buttons + contact chips */}
                <div className="border-t border-mist bg-paper p-6">
                  <div className="mb-6 flex gap-3">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={prev}
                        className="flex flex-1 items-center justify-center gap-2 border border-mist bg-white py-3 font-display font-medium transition-colors hover:bg-paper"
                      >
                        <ArrowLeft /> Vorige
                      </button>
                    )}
                    <button
                      type={step === 3 ? "submit" : "button"}
                      onClick={step === 3 ? undefined : next}
                      disabled={sending}
                      className="flex flex-2 items-center justify-center gap-2 bg-lime py-2 font-medium text-ink shadow-lg transition-all hover:bg-lime-dark disabled:opacity-60"
                    >
                      {step === 3 ? (sending ? "Versturen..." : "Versturen") : "Volgende"}{" "}
                      {step === 3 ? <Send /> : <ArrowRight />}
                    </button>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    <ContactChip
                      icon={<PhoneIcon />}
                      text={site.telephone}
                      href={`tel:${site.telephoneHref}`}
                    />
                    <ContactChip
                      icon={<MessageCircle />}
                      text="WhatsApp"
                      href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
                    />
                    <ContactChip
                      icon={<Mail />}
                      text={site.email}
                      href={`mailto:${site.email}`}
                    />
                    <ContactChip
                      icon={<Instagram />}
                      text="@mtbbouw"
                      href={site.social.instagram}
                    />
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </ContactDrawerContext.Provider>
  );
}
