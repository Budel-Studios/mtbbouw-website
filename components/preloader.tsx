"use client";

import { useEffect, useState } from "react";

/**
 * Fullscreen preloader — replica of the live site's "Preloader Plus" setup:
 * white overlay (z-index 999) with the centered animated logo GIF, fading
 * out (opacity 2s) once the page has fully loaded. Only shows on full page
 * loads; client-side navigations never remount it.
 *
 * Timers (not rAF) drive the fade so it also completes in background tabs,
 * and a hard removal timer backs up onTransitionEnd.
 */
const FADE_MS = 2000;
/** Minimum time the preloader stays fully visible, even on instant loads —
 *  gives the logo animation room to play before the fade starts. */
const MIN_DISPLAY_MS = 2000;

export function Preloader({
  src = "/images/brand/preloader.gif",
}: {
  /** GIF-URL — komt uit site_assets (Supabase) met lokaal bestand als fallback. */
  src?: string;
}) {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const timers: number[] = [];
    const mountedAt = Date.now();

    const start = () => {
      // Honor the minimum display time (and give the overlay one painted
      // frame at opacity 1 first, else the transition doesn't run)
      const remaining = Math.max(MIN_DISPLAY_MS - (Date.now() - mountedAt), 50);
      timers.push(
        window.setTimeout(() => {
          setFading(true);
          // Fallback removal in case transitionend never fires (hidden tab e.d.)
          timers.push(window.setTimeout(() => setGone(true), FADE_MS + 200));
        }, remaining)
      );
    };

    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
      // Never block the site if 'load' stalls (slow third-party asset e.d.)
      timers.push(window.setTimeout(start, 4000));
    }

    return () => {
      window.removeEventListener("load", start);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      onTransitionEnd={() => setGone(true)}
      className={`fixed inset-0 z-999 flex items-center justify-center bg-white transition-opacity duration-2000 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Animated GIF: plain <img>, next/image would freeze/re-encode it */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={550}
        height={310}
        className="w-[550px] max-w-[80vw] object-contain"
      />
    </div>
  );
}
