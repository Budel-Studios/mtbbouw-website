import Link from "next/link";
import { ContactDrawerButton } from "@/components/contact-drawer";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline-light" | "outline-dark";
type Size = "md" | "sm";

/*
 * Eén uniforme knopstijl voor de hele site, afgestemd op de live site:
 * vierkante hoeken, navy vlak met witte tekst en pijl, of omlijnd (wit op
 * foto's/donkere secties, donker op licht).
 */
const base =
  "label-mono inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-dark",
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
 * Tekstlink met pijl en navy onderstreping — het "Meer info →" /
 * "Bekijk alle projecten →"-patroon van de live site.
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
  const cls = `inline-flex items-center gap-1.5 border-b border-navy pb-1 text-sm font-semibold ${
    onDark ? "text-white" : "text-ink"
  } transition-colors hover:text-navy ${className}`.trim();
  const content = (
    <>
      {children}
      <Arrow />
    </>
  );

  if (drawer || !href) {
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
