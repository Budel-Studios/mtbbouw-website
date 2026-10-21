"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactDrawerButton } from "@/components/contact-drawer";

/**
 * Grote ingekaderde hero (Lovable-ontwerp): foto of geluidloze video-loop als
 * achtergrond, kop linksboven, intro linksonder en knoppen rechtsonder.
 * Met een video verschijnt rechtsonder een pauzeknop; bij "verminder
 * beweging" blijft het eerste beeld staan.
 */
export function HomeHero({
  image,
  video,
  project,
  badge,
}: {
  image: { src: string; alt: string };
  video?: { mp4: string; webm?: string };
  project?: { href: string; title: string; city?: string };
  /** Optioneel extra element (bijv. de draaiende badge op de testpagina). */
  badge?: ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.pause();
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  };

  return (
    <section className="px-2 pt-2 md:px-3 md:pt-3">
      <div className="relative isolate flex min-h-[max(38rem,calc(100svh-4.75rem))] flex-col overflow-hidden bg-inverse text-white">
        {video ? (
          <video
            ref={videoRef}
            poster={image.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={image.alt}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="absolute inset-0 -z-20 size-full object-cover motion-safe:animate-hero-zoom"
          >
            {video.webm && <source src={video.webm} type="video/webm" />}
            <source src={video.mp4} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover motion-safe:animate-hero-zoom"
          />
        )}
        <div className="hero-scrim absolute inset-0 -z-10" aria-hidden="true" />

        {/* Boven: kop */}
        <div className="flex items-start justify-between gap-6 px-5 pt-10 md:px-10 md:pt-14 xl:px-14">
          <div className="animate-fade-up">
            <p className="label-mono flex items-center gap-3 text-white/85">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping bg-lime opacity-70" />
                <span className="relative inline-flex size-2 bg-lime" />
              </span>
              Bouwbedrijf in Enschede &amp; Twente
            </p>
            <h1 className="display mt-6 block max-w-[14ch] text-[3.4rem] sm:text-7xl md:text-8xl lg:text-[8.5rem]">
              Bouwen doen we <span className="mark-lime motion-safe:animate-mark-draw">samen.</span>
            </h1>
          </div>

          {project && (
            <Link
              href={project.href}
              className="glass-dark group hidden shrink-0 animate-fade-up items-center gap-4 border border-white/15 py-2.5 pl-4 pr-2.5 transition-colors hover:border-white/40 lg:flex"
              style={{ animationDelay: "300ms" }}
            >
              <span>
                <span className="label-mono block text-white/60">In beeld</span>
                <span className="mt-1 block text-sm">
                  {project.title}
                  {project.city ? `, ${project.city}` : ""}
                </span>
              </span>
              <svg className="size-4 text-lime transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M7 7h10v10M7 17 17 7" />
              </svg>
            </Link>
          )}
        </div>

        {badge}

        {/* Onder: intro + acties */}
        <div className="mt-auto grid gap-8 px-5 pb-6 pt-16 md:grid-cols-12 md:items-end md:px-10 md:pb-10 xl:px-14">
          <p
            className="max-w-xl animate-fade-up text-lg leading-snug tracking-[-0.01em] md:col-span-7 md:text-2xl"
            style={{ animationDelay: "150ms" }}
          >
            Van een verbouwing thuis tot de complete afbouw van een
            bedrijfspand. MTB Bouw brengt vakmanschap, betrouwbare partners en
            heldere communicatie samen — onder één dak.
          </p>

          <div
            className="flex animate-fade-up flex-wrap items-center gap-3 md:col-span-5 md:justify-end"
            style={{ animationDelay: "300ms" }}
          >
            <ContactDrawerButton className="label-mono link-line cursor-pointer py-2 text-white/85 hover:text-white">
              Plan een intake
            </ContactDrawerButton>
            <Link href="/projecten" className="group inline-flex items-stretch md:ml-2">
              <span className="label-mono glass-dark flex items-center border border-r-0 border-white/30 px-6 py-4 transition-colors group-hover:border-white group-hover:bg-white group-hover:text-ink">
                Bekijk projecten
              </span>
              <span className="flex w-12 items-center justify-center bg-lime text-ink">
                <svg className="size-4 transition-transform duration-500 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            {video && (
              <button
                type="button"
                onClick={toggle}
                aria-label={playing ? "Video pauzeren" : "Video afspelen"}
                className="glass-dark flex size-[3.25rem] cursor-pointer items-center justify-center border border-white/20 text-white/85 transition-colors hover:border-white/50 hover:text-white"
              >
                {playing ? (
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M8 5v14M16 5v14" />
                  </svg>
                ) : (
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M7 5l12 7-12 7z" />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
