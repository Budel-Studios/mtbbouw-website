import Link from "next/link";
import { ContactDrawerButton } from "@/components/contact-drawer";

/** Knoppen naar deze URL openen de offerte-drawer i.p.v. te navigeren. */
const CONTACT_HREF = "/contact";
import type { ComponentProps } from "react";

type Variant = "primary" | "lime" | "outline-light" | "outline-dark";
type Size = "md" | "sm";

/*
 * Eén uniforme knopstijl voor de hele site, afgestemd op de live site:
 * vierkante hoeken, inktzwart vlak met lichte tekst en pijl, of omlijnd (wit op
 * foto's/donkere secties, donker op licht).
 */
const base =
  "label-mono inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "border border-navy bg-navy text-white hover:border-navy-dark hover:bg-navy-dark",
  lime: "border border-lime bg-lime text-ink hover:border-white hover:bg-white",
  "outline-light": "border border-white/80 text-white hover:bg-white/10",
  "outline-dark": "border border-navy text-navy hover:bg-navy hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3.5",
  sm: "px-4 py-2.5",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  /** Pijl (→) tonen, zoals de CTA's op de live site. */
  arrow?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

type ButtonAsButton = BaseProps & {
  href?: undefined;
} & Omit<ComponentProps<"button">, "className" | "children">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

function Arrow() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  // Contactknoppen openen sitebreed de offerte-drawer (het contactformulier).
  if ("href" in props && props.href === CONTACT_HREF) {
    return (
      <ContactDrawerButton className={`cursor-pointer ${cls}`}>{content}</ContactDrawerButton>
    );
  }

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props;
    const isExternal = /^(https?:|tel:|mailto:)/.test(href);
    if (isExternal) {
      return (
        <a href={href} className={cls} {...(rest as ComponentProps<"a">)}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cls} {...(props as ComponentProps<"button">)}>
      {content}
    </button>
  );
}

/**
 * Actieknop met pijl. Sitebreed één knoppensysteem:
 * - contact/offerte (opent de drawer) = gevuld (inkt op licht, lime op donker)
 * - overige links = omlijnd (inkt op licht, wit op donker)
 * Onderstreping is alleen nog voor links ín lopende tekst.
 */
export function ArrowLink({
  href,
  drawer = false,
  children,
  className = "",
  onDark = false,
}: {
  href?: string;
  /** Opent de offerte-drawer i.p.v. te navigeren. */
  drawer?: boolean;
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  const opensDrawer = drawer || !href || href === CONTACT_HREF;
  const tone = opensDrawer
    ? onDark
      ? variants.lime
      : variants.primary
    : onDark
      ? "border border-white/80 text-white hover:bg-white hover:text-navy"
      : variants["outline-dark"];
  const cls = `${base} ${tone} ${sizes.md} ${className}`.trim();
  const content = (
    <>
      {children}
      <Arrow />
    </>
  );

  if (opensDrawer || !href) {
    return (
      <ContactDrawerButton className={`cursor-pointer ${cls}`}>{content}</ContactDrawerButton>
    );
  }

  // Anker- en externe links (#anker, tel:, mailto:, http(s):) als gewone <a>,
  // zodat de browser native hash-scroll/telefoon-app-gedrag afhandelt i.p.v.
  // Next.js' router (die same-page hash-navigatie niet altijd scrollt).
  const isNativeAnchor = /^(#|tel:|mailto:|https?:)/.test(href);
  if (isNativeAnchor) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
