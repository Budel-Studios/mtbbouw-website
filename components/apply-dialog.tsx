"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Solliciteerknop + formulier (Werken bij). Opent een paneel met een kort
 * sollicitatieformulier; de inzending gaat via /api/contact (type
 * "sollicitatie") als mail naar info@mtbbouw.com, met een bevestiging naar de
 * sollicitant. Werkt dus ook zonder mailprogramma op de computer van de
 * bezoeker (een mailto-link deed dat niet).
 */
type Tone = "primary" | "light";

const base =
  "label-mono inline-flex cursor-pointer items-center justify-center gap-2 border px-5 py-3.5 transition-colors";
const tones: Record<Tone, string> = {
  primary: "border-navy bg-navy text-white hover:border-navy-dark hover:bg-navy-dark",
  light: "border-white/80 text-white hover:bg-white hover:text-navy",
};

function Arrow() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function ApplyButton({
  job,
  label = "Solliciteer direct",
  tone = "primary",
  className = "",
}: {
  job?: string;
  label?: string;
  tone?: Tone;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={`${base} ${tones[tone]} ${className}`}>
        {label}
        <Arrow />
      </button>
      {open && <ApplyPanel job={job} onClose={() => setOpen(false)} />}
    </>
  );
}

function ApplyPanel({ job, onClose }: { job?: string; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  // Botbeveiliging: tijd tussen openen en versturen van het formulier.
  const openedAt = useRef(0);
  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "sollicitatie",
          job: job ?? "",
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          cvLink: data.get("cvLink"),
          website: data.get("website"),
          elapsed: openedAt.current ? Date.now() - openedAt.current : undefined,
        }),
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex justify-end" role="dialog" aria-modal="true" aria-labelledby="apply-title">
      <button type="button" aria-label="Sluiten" onClick={onClose} className="absolute inset-0 cursor-default bg-ink/50 animate-fade-in" />
      <div className="relative flex h-full w-full max-w-lg flex-col overflow-y-auto bg-paper p-6 shadow-pop animate-drawer-in md:p-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="eyebrow text-stone">Werken bij MTB Bouw</p>
            <h2 id="apply-title" className="display mt-3 text-3xl md:text-4xl">
              {job ? `Solliciteer als ${job}` : "Open sollicitatie"}
            </h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Sluiten" className="grid size-10 shrink-0 cursor-pointer place-items-center border border-mist text-ink transition-colors hover:border-navy hover:text-navy">
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {status === "success" ? (
          <div className="mt-10 border border-mist bg-white p-8 text-center">
            <h3 className="font-display text-xl font-semibold">Sollicitatie verstuurd</h3>
            <p className="mt-2 text-stone">
              Bedankt! Je sollicitatie is binnen bij info@mtbbouw.com. We nemen snel contact met je op — je krijgt ook een bevestiging per mail.
            </p>
            <button type="button" onClick={onClose} className={`${base} ${tones.primary} mt-6`}>
              Sluiten
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5" aria-label="Sollicitatieformulier">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div>
              <label htmlFor="apply-name" className="field-label">
                Naam <span className="text-navy">*</span>
              </label>
              <input id="apply-name" name="name" type="text" required autoComplete="name" className="field-control" />
            </div>
            <div>
              <label htmlFor="apply-email" className="field-label">
                E-mail <span className="text-navy">*</span>
              </label>
              <input id="apply-email" name="email" type="email" required autoComplete="email" className="field-control" />
            </div>
            <div>
              <label htmlFor="apply-phone" className="field-label">Telefoon</label>
              <input id="apply-phone" name="phone" type="tel" autoComplete="tel" className="field-control" />
            </div>
            <div>
              <label htmlFor="apply-message" className="field-label">
                Vertel kort over jezelf <span className="text-navy">*</span>
              </label>
              <textarea id="apply-message" name="message" rows={5} required className="field-control resize-y" placeholder="Wie ben je, wat kun je al en waarom MTB Bouw?" />
            </div>
            <div>
              <label htmlFor="apply-cv" className="field-label">Link naar cv of LinkedIn (optioneel)</label>
              <input id="apply-cv" name="cvLink" type="url" inputMode="url" className="field-control" placeholder="https://" />
            </div>
            {status === "error" && (
              <p className="field-error" role="alert">
                Versturen mislukt. Probeer het later opnieuw, mail naar info@mtbbouw.com of bel 053 206 50 71.
              </p>
            )}
            <button type="submit" disabled={status === "sending"} className={`${base} ${tones.primary} w-full disabled:opacity-60`}>
              {status === "sending" ? "Versturen..." : "Verstuur sollicitatie"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
