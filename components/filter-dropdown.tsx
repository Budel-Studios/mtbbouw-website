"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Dropdown-filter — gedeeld tussen /projecten en /kennisbank, replica van de
 * custom "Filter op projecten"-component van de live WordPress-site (wit,
 * w-80, lijst-icoon, sluit bij klik buiten of Escape).
 */
function FilterIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-black"
    >
      <path d="M2 5h20" />
      <path d="M6 12h12" />
      <path d="M9 19h6" />
    </svg>
  );
}

export function FilterDropdown({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: string[];
  active: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="relative w-full md:w-80">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between border border-mist bg-white px-6 py-4 text-sm text-ink shadow-sm transition-colors hover:bg-paper"
      >
        <span className="font-display font-medium">{active === options[0] ? label : active}</span>
        <FilterIcon />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-20 mt-1 w-full border border-mist bg-white py-1 shadow-lg"
        >
          {options.map((opt) => {
            const isActive = opt === active;
            return (
              <li key={opt} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-6 py-2.5 text-left text-sm transition-colors hover:bg-paper ${
                    isActive ? "font-semibold text-ink" : "text-stone"
                  }`}
                >
                  {opt}
                  {isActive && <span className="h-1.5 w-1.5 shrink-0 bg-lime" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
