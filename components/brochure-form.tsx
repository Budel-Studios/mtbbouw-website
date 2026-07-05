"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Brochure-aanvraagformulier op /gratis-brochure — POST naar /api/contact met
 * type "brochure". Styling via de centrale .field-* componentklassen, identiek
 * aan het contactformulier en de rest van de MTB Bouw-huisstijl.
 */
export function BrochureForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

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
          type: "brochure",
          name: data.get("name"),
          email: data.get("email"),
          website: data.get("website"),
        }),
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-mist bg-white p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lime/20 text-lime-dark">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-xl font-extrabold">Aanvraag ontvangen</h3>
        <p className="mt-2 text-stone">
          We mailen je de brochure zo snel mogelijk. Check ook je spamfolder.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-mist bg-white p-8"
      aria-label="Brochure aanvragen"
      noValidate
    >
      <h2 className="font-display text-xl font-extrabold">Vraag de brochure aan</h2>
      <p className="mt-1 text-sm text-stone">
        Gratis en vrijblijvend — je zit nergens aan vast.
      </p>
      <div className="mt-6 space-y-5">
        {/* Honeypot — verborgen voor mensen, bots vullen hem in */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <div>
          <label htmlFor="brochure-naam" className="field-label">
            Naam <span className="text-lime-dark">*</span>
          </label>
          <input
            id="brochure-naam"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="field-control"
          />
        </div>
        <div>
          <label htmlFor="brochure-email" className="field-label">
            E-mail <span className="text-lime-dark">*</span>
          </label>
          <input
            id="brochure-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="field-control"
          />
        </div>
        {status === "error" && (
          <p className="field-error" role="alert">
            Versturen mislukt. Probeer het later opnieuw, of mail ons direct.
          </p>
        )}
        <Button type="submit" disabled={status === "sending"} className="w-full" arrow>
          {status === "sending" ? "Versturen..." : "Ontvang de brochure"}
        </Button>
      </div>
    </form>
  );
}
