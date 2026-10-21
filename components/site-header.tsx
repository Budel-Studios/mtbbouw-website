"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { mainNav, type MegaContent, type NavColumn, type NavItem, type NavLink } from "@/lib/nav";
import { ContactDrawerButton } from "@/components/contact-drawer";
import { Logo } from "@/components/logo";

/**
 * Site header — 1:1 replica of the live site's custom jalalabadi header:
 * fixed light bar, click-to-open mega menus (numbered links + intro card +
 * image panel) and a fullscreen mobile menu with slide-in submenus.
 */

/* ---------------------------------- icons (lucide) --------------------------------- */

function Icon({
  children,
  size = 16,
  className,
}: {
  children: ReactNode;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const ChevronDown = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="m6 9 6 6 6-6" />
  </Icon>
);
const Phone = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
  </Icon>
);
const Menu = () => (
  <Icon size={28}>
    <path d="M4 12h16M4 6h16M4 18h16" />
  </Icon>
);
const X = () => (
  <Icon size={28}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Icon>
);
const ArrowLeft = () => (
  <Icon size={20} className="mr-1">
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </Icon>
);
const ArrowRight = () => (
  <Icon size={18} className="ml-2">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Icon>
);
const ArrowUpRight = ({ className }: { className?: string }) => (
  <Icon size={15} className={className}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </Icon>
);
const User = () => (
  <Icon size={16}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </Icon>
);

/* ------------------------- mega menu building blocks (desktop) --------------------- */

/**
 * Outline button with the sliding arrow icon (live: jalalabadi_tom_btn).
 * Hover: de hele knop vult navy, tekst en pijl worden wit — vorm en
 * pijl-animatie blijven ongewijzigd, alleen een subtiele kleurovergang.
 */
function TomButton({ text, href, onClick }: { text: string; href: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex w-fit items-center gap-2 border border-ink px-5 py-2.5 transition-colors duration-300 hover:bg-ink"
    >
      <span className="label-mono text-navy transition-colors duration-300 group-hover:text-white">
        {text}
      </span>
      <span className="relative block h-[15px] w-[15px] overflow-hidden">
        <span className="relative block transition-transform duration-300 ease-in-out group-hover:-translate-y-3 group-hover:translate-x-3">
          <ArrowUpRight className="text-navy transition-colors duration-300 group-hover:text-white" />
          <ArrowUpRight className="absolute -left-3 top-3 text-navy transition-colors duration-300 group-hover:text-white" />
        </span>
      </span>
    </Link>
  );
}

function StepItem({ step, onClick }: { step: NavLink; onClick: () => void }) {
  return (
    <Link
      href={step.href}
      onClick={onClick}
      className="flex border-b border-mist pb-2 transition-all hover:pl-2"
    >
      <span className="label-mono mr-4 pt-1.5 text-navy">{step.id}</span>
      <span>
        <span className="block text-xl font-medium tracking-[-0.02em] text-ink">{step.title}</span>
        {step.subtitle && (
          <span className="mt-1 block text-sm leading-snug text-stone">
            {step.subtitle}
          </span>
        )}
      </span>
    </Link>
  );
}

function LinkColumn({ column, onClick }: { column: NavColumn; onClick: () => void }) {
  return (
    <div>
      <div className="mb-3">
        <StepItem step={column} onClick={onClick} />
      </div>
      {column.items.length > 0 && (
        <ul className="pl-8">
          {column.items.map((item) => (
            <li key={item.title} className="py-1">
              <Link
                href={item.href}
                onClick={onClick}
                className="text-stone transition-colors hover:text-navy"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MegaPanel({ content, onClose }: { content: MegaContent; onClose: () => void }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden overflow-hidden lg:block">
      <div className="flex w-full animate-mega-in">
        {/* Grid column — starts below de 64px-balk, altijd tot aan de afbeelding */}
        <div className="min-w-0 flex-1 pt-16">
          <div className="pointer-events-auto grid h-full w-full grid-cols-[0.75fr_1fr_1fr_1fr] gap-8 border-t border-mist bg-paper p-12 shadow-pop">
            {content.intro ? (
              <div className="col-span-1">
                {/* p, geen h2: nav-labels horen niet in de document-outline
                    (deze panelen staan op élke pagina in de DOM). */}
                <p className="display mb-6 text-3xl text-ink">
                  {content.intro.title}
                </p>
                <TomButton
                  text={content.intro.button}
                  href={content.intro.href}
                  onClick={onClose}
                />
              </div>
            ) : (
              /* Live layout: empty first column when there's no intro card */
              <div className="col-span-1" />
            )}
            {content.steps && (
              <div className="flex flex-col gap-6">
                {content.steps.map((s) => (
                  <StepItem key={s.id} step={s} onClick={onClose} />
                ))}
              </div>
            )}
            {content.stepsPro && (
              <div className="flex flex-col gap-6">
                {content.stepsPro.map((s) => (
                  <StepItem key={s.id} step={s} onClick={onClose} />
                ))}
              </div>
            )}
            {content.options && <LinkColumn column={content.options} onClick={onClose} />}
            {content.levels && <LinkColumn column={content.levels} onClick={onClose} />}
            {content.levelsExtra && (
              <LinkColumn column={content.levelsExtra} onClick={onClose} />
            )}
            {content.introPro && (
              <div className="col-span-1">
                <p className="display mb-6 mt-0 text-3xl text-ink">
                  {content.introPro.title}
                </p>
                <TomButton
                  text={content.introPro.button}
                  href={content.introPro.href}
                  onClick={onClose}
                />
              </div>
            )}
          </div>
        </div>
        {/* Beeldpaneel — transparante wrapper met pt-16 duwt de afbeelding zelf
            (een los kind-element, niet enkel een achtergrond-property) onder
            de 64px-menubalk, zodat hij nooit over het hoofdmenu heen valt. */}
        <div className="pointer-events-auto flex-[0_0_30%] pt-16">
          <div
            className="h-full w-full bg-cover bg-left"
            style={{ backgroundImage: `url(${content.image})` }}
          />
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------- mobile menu ----------------------------------- */

function MobileStepRow({ step, onClick }: { step: NavLink; onClick: () => void }) {
  return (
    <Link
      href={step.href}
      onClick={onClick}
      className="flex border-b border-mist pb-3"
    >
      <span className="label-mono mr-4 pt-1 text-navy">{step.id}</span>
      <span>
        <span className="block text-lg font-medium tracking-[-0.02em] text-ink">{step.title}</span>
        {step.subtitle && (
          <span className="mt-0.5 block text-sm leading-snug text-stone">
            {step.subtitle}
          </span>
        )}
      </span>
    </Link>
  );
}

function MobileSubmenu({
  item,
  onBack,
  onClose,
}: {
  item: NavItem;
  onBack: () => void;
  onClose: () => void;
}) {
  const c = item.content!;
  const intro = c.intro ?? c.introPro;
  const columns = [c.options, c.levels, c.levelsExtra].filter(Boolean) as NavColumn[];
  return (
    <div className="absolute inset-0 z-50 animate-drawer-in overflow-y-auto bg-paper">
      <div className="p-6 pb-24">
        <button
          type="button"
          onClick={onBack}
          className="label-mono mb-6 flex items-center text-stone transition-colors hover:text-navy"
        >
          <ArrowLeft /> Terug
        </button>
        {intro && (
          <>
            <p className="mb-6 text-2xl font-bold leading-snug text-ink">
              {intro.title}
            </p>
            <Link
              href={intro.href}
              onClick={onClose}
              className="label-mono mb-10 flex w-full items-center justify-center border border-ink py-3.5 text-ink transition-colors hover:bg-ink hover:text-white"
            >
              {intro.button} <ArrowRight />
            </Link>
          </>
        )}
        <div className="flex flex-col gap-8">
          {c.steps && (
            <div className="flex flex-col gap-4">
              {c.steps.map((s) => (
                <MobileStepRow key={s.id} step={s} onClick={onClose} />
              ))}
            </div>
          )}
          {c.stepsMobile && (
            <div className="flex flex-col gap-4">
              {c.stepsMobile.map((s) => (
                <MobileStepRow key={s.id} step={s} onClick={onClose} />
              ))}
            </div>
          )}
          {c.stepsPro && (
            <div className="flex flex-col gap-4">
              {c.stepsPro.map((s) => (
                <MobileStepRow key={s.id} step={s} onClick={onClose} />
              ))}
            </div>
          )}
          {columns.map((col) => (
            <div key={col.title}>
              <Link
                href={col.href}
                onClick={onClose}
                className="mb-4 flex items-center text-lg font-bold text-ink"
              >
                <span className="label-mono mr-4 text-navy">{col.id}</span>
                {col.title}
              </Link>
              {col.items.length > 0 && (
                <ul className="flex flex-col gap-3 pl-8">
                  {col.items.map((it) => (
                    <li key={it.title}>
                      <Link href={it.href} onClick={onClose} className="text-stone">
                        {it.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------- header ------------------------------------- */

export function SiteHeader() {
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<NavItem | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  // Korte vertraging bij sluiten zodat de muis van knop naar paneel kan
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }, []);
  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setActiveMega(null), 150);
  }, [cancelClose]);
  const openMega = useCallback(
    (id: string) => {
      cancelClose();
      setActiveMega(id);
    },
    [cancelClose]
  );

  const closeAll = useCallback(() => {
    cancelClose();
    setActiveMega(null);
    setMobileOpen(false);
    setMobileSub(null);
  }, [cancelClose]);

  useEffect(() => cancelClose, [cancelClose]);

  // Close mega menu on outside click or Escape
  useEffect(() => {
    if (!activeMega && !mobileOpen) return;
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) closeAll();
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAll();
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [activeMega, mobileOpen, closeAll]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full">
      <nav
        aria-label="Hoofdmenu"
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        className="relative border-b border-mist bg-paper/85 font-display backdrop-blur-md"
      >
        <div className="relative z-10 flex h-16 items-stretch">
          {/* Logo — beeldmerk + woordmerk */}
          <Link
            href="/"
            onClick={closeAll}
            className="flex shrink-0 items-center px-5 md:px-8"
            aria-label={site.name}
          >
            <Logo uid="hdr" />
          </Link>

          {/* Desktop-menu: links naast het logo, hover opent mega-menu */}
          <div className="ml-6 hidden items-stretch gap-8 lg:flex">
            {mainNav.map((item) => (
              <div
                key={item.id}
                className={`flex items-stretch border-b-2 transition-colors ${
                  activeMega === item.id ? "border-lime" : "border-transparent"
                }`}
              >
                {item.content ? (
                  <button
                    type="button"
                    onMouseEnter={() => openMega(item.id)}
                    onClick={() => openMega(item.id)}
                    className="label-mono flex cursor-pointer items-center text-stone transition-colors hover:text-navy"
                  >
                    {item.title}
                    <ChevronDown
                      className={`ml-1 h-3.5 w-3.5 transition-transform duration-300 ${
                        activeMega === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={closeAll}
                    onMouseEnter={() => {
                      cancelClose();
                      setActiveMega(null);
                    }}
                    className="label-mono flex items-center text-stone transition-colors hover:text-navy"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Rechts: brochure, Contact (offerte-drawer) en omlijnde telefoonknop */}
          <div
            className="ml-auto hidden items-stretch lg:flex"
            onMouseEnter={() => {
              cancelClose();
              setActiveMega(null);
            }}
          >
            <Link
              href="/gratis-brochure"
              onClick={closeAll}
              className="label-mono mr-6 hidden items-center whitespace-nowrap text-stone transition-colors hover:text-navy xl:flex"
            >
              Gratis brochure
            </Link>
            <ContactDrawerButton
              onClick={closeAll}
              className="label-mono link-line mr-6 flex cursor-pointer items-center self-center py-1 text-stone transition-colors hover:text-navy"
            >
              Contact
            </ContactDrawerButton>
            <a
              href={`tel:${site.telephoneHref}`}
              className="label-mono mr-5 flex items-center gap-2 self-center border border-ink px-4 py-2.5 text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              <Phone size={14} />
              {site.telephone}
            </a>
          </div>

          {/* Mobiel: telefoon + Menu-knop (zoals live: icoon + "Menu"-tekst) */}
          <div className="ml-auto flex items-stretch lg:hidden">
            <a
              href={`tel:${site.telephoneHref}`}
              className="label-mono flex items-center gap-2 self-center border border-ink px-3 py-2 text-ink"
              aria-label="Bel ons"
            >
              <Phone size={14} />
              Bel
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setMobileSub(null);
              }}
              className="flex cursor-pointer items-center gap-3 px-5 text-ink"
            >
              {mobileOpen ? <X /> : <Menu />}
              <span className="label-mono">Menu</span>
            </button>
          </div>
        </div>

        {/* Desktop mega-menu panelen — altijd in de DOM (server-gerenderd,
            crawlbare links voor SEO/GEO); zichtbaarheid via hidden-toggle.
            display none→block herstart de mega-in animatie bij openen. */}
        {mainNav.map(
          (item) =>
            item.content && (
              <div key={item.id} className={activeMega === item.id ? "" : "hidden"}>
                <MegaPanel content={item.content} onClose={closeAll} />
              </div>
            )
        )}
      </nav>

      {/* Mobiel fullscreen-menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 animate-menu-down overflow-hidden bg-paper font-display lg:hidden">
          <div className="relative h-full w-full">
            <div
              className="absolute inset-0 overflow-y-auto p-6 transition-opacity duration-300"
              style={{ opacity: mobileSub ? 0 : 1, pointerEvents: mobileSub ? "none" : "auto" }}
            >
              <div className="flex flex-col gap-4">
                {mainNav.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-mist last:border-b-0"
                  >
                    {item.content ? (
                      <button
                        type="button"
                        onClick={() => setMobileSub(item)}
                        className="flex w-full cursor-pointer items-center justify-between py-4 text-left text-2xl font-medium tracking-[-0.02em] text-ink"
                      >
                        {item.title}
                        <ChevronDown className="-rotate-90 text-stone" />
                      </button>
                    ) : (
                      <Link
                        href={item.href!}
                        onClick={closeAll}
                        className="flex w-full items-center justify-between py-4 text-2xl font-medium tracking-[-0.02em] text-ink"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4 pb-20">
                <ContactDrawerButton
                  onClick={closeAll}
                  className="label-mono flex w-full cursor-pointer items-center justify-center border border-ink bg-ink py-4 text-paper transition-transform active:scale-95"
                >
                  Contact
                </ContactDrawerButton>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="/gratis-brochure"
                    onClick={closeAll}
                    className="label-mono border border-mist bg-white py-4 text-center transition-transform active:scale-95"
                  >
                    Gratis brochure
                  </Link>
                  {/* MijnMTB — klantportaal, nog geen pagina (live knop is ook een placeholder) */}
                  <button
                    type="button"
                    className="label-mono flex items-center justify-center gap-2 border border-mist bg-white py-4 transition-transform active:scale-95"
                  >
                    <User /> MijnMTB
                  </button>
                </div>
              </div>
            </div>
            {mobileSub && (
              <MobileSubmenu
                item={mobileSub}
                onBack={() => setMobileSub(null)}
                onClose={closeAll}
              />
            )}
          </div>
        </div>
      )}
    </header>
  );
}
