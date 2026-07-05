import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline-light" | "outline-dark";
type Size = "md" | "sm";

/*
 * Eén uniforme knopstijl voor de hele site, afgestemd op de live site:
 * vierkante hoeken, lime-vlak met donkere tekst en pijl, of omlijnd (wit op
 * foto's/donkere secties, donker op licht).
 */
const base =
  "inline-flex items-center justify-center gap-2 font-display font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-dark disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-lime text-ink hover:bg-lime-dark",
  "outline-light": "border border-white/80 text-white hover:bg-white/10",
  "outline-dark": "border border-ink/25 text-ink hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3.5 text-sm",
  sm: "px-5 py-2.5 text-sm",
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
 * Tekstlink met pijl en lime onderstreping — het "Meer info →" /
 * "Bekijk alle projecten →"-patroon van de live site.
 */
export function ArrowLink({
  href,
  children,
  className = "",
  onDark = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  const cls = `inline-flex items-center gap-1.5 border-b-2 border-lime pb-1 text-sm font-bold ${
    onDark ? "text-white" : "text-ink"
  } transition-colors hover:text-lime-dark ${className}`.trim();
  const content = (
    <>
      {children}
      <Arrow />
    </>
  );

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
