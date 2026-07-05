"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Contactformulier op /contact — POST naar /api/contact met type "contact".
 * Honeypot-veld ("website") tegen bots; inline succes-/foutmelding.
 * Styling via de centrale .field-* componentklassen (globals.css) zodat het
 * formulier identiek is aan de rest van de MTB Bouw-huisstijl.
 */
export function ContactForm() {
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
          type: "contact",
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
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
      <div className="flex h-full flex-col items-center justify-center border border-mist bg-white p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lime/20 text-lime-dark">
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
        <h3 className="mt-5 font-display text-xl font-extrabold">Bericht verstuurd</h3>
        <p className="mt-2 text-stone">
          Bedankt! We nemen zo snel mogelijk contact met je op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contactformulier" noValidate>
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
        <label htmlFor="naam" className="field-label">
          Naam <span className="text-lime-dark">*</span>
        </label>
        <input
          id="naam"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="field-control"
        />
      </div>
      <div>
        <label htmlFor="email" className="field-label">
          E-mail <span className="text-lime-dark">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="field-control"
        />
      </div>
      <div>
        <label htmlFor="telefoon" className="field-label">
          Telefoon
        </label>
        <input
          id="telefoon"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="field-control"
        />
      </div>
      <div>
        <label htmlFor="bericht" className="field-label">
          Bericht <span className="text-lime-dark">*</span>
        </label>
        <textarea
          id="bericht"
          name="message"
          rows={5}
          required
          className="field-control resize-y"
        />
      </div>
      {status === "error" && (
        <p className="field-error" role="alert">
          Versturen mislukt. Probeer het later opnieuw, of bel ons op 053 206 50 71.
        </p>
      )}
      <Button type="submit" disabled={status === "sending"} className="w-full">
        {status === "sending" ? "Versturen..." : "Versturen"}
      </Button>
    </form>
  );
}
