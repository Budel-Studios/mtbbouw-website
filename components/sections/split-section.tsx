import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowLink } from "@/components/ui/button";

/**
 * Tekst + beeld in twee kolommen — het "missie"-patroon van de homepage.
 * Zonder beeld wordt het een breed tekstblok.
 */
export function SplitSection({
  eyebrow,
  title,
  children,
  image,
  imageSide = "right",
  cta,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  image?: { src: string; alt: string };
  imageSide?: "left" | "right";
  cta?: { href: string; label: string };
  dark?: boolean;
}) {
  const text = (
    <div>
      {eyebrow && (
        <p
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            dark ? "text-lime" : "text-stone"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      <div
        className={`mt-5 max-w-lg space-y-4 leading-relaxed ${
          dark ? "text-white/75" : "text-stone"
        }`}
      >
        {children}
      </div>
      {cta && (
        <div className="mt-8">
          <ArrowLink href={cta.href} onDark={dark}>
            {cta.label}
          </ArrowLink>
        </div>
      )}
    </div>
  );

  return (
    <section className={dark ? "bg-ink text-white" : undefined}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        {image ? (
          <div className="grid items-center gap-12 md:grid-cols-2">
            {imageSide === "left" && (
              <div className="relative aspect-[4/3] max-md:order-last">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            )}
            {text}
            {imageSide === "right" && (
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-3xl">{text}</div>
        )}
      </div>
    </section>
  );
}
