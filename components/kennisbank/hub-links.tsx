import Link from "next/link";
import { existingHubs, hubPath } from "@/lib/kennisbank";

/**
 * Links naar alle bestaande onderwerp- en bouwdeelpagina's. Server-gerenderd,
 * zodat Google de hubpagina's via /kennisbank (en andere hubs) vindt — de
 * client-filter met ?onderwerp= is daarvoor niet genoeg.
 */
export function HubLinks({ current }: { current?: string }) {
  const groups = [
    { title: "Per onderwerp", type: "category" as const, items: existingHubs("category") },
    { title: "Per bouwdeel", type: "subcategory" as const, items: existingHubs("subcategory") },
  ].filter((g) => g.items.length > 0);

  if (groups.length === 0) return null;

  return (
    <nav aria-label="Kennisbank per onderwerp en bouwdeel" className="grid gap-8 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.type}>
          <p className="label-mono text-navy">
            {group.title}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => {
              const href = hubPath(group.type, item.slug);
              const isCurrent = href === current;
              return (
                <li key={item.slug}>
                  <Link
                    href={href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`label-mono inline-flex items-center border px-3 py-2 transition-colors ${
                      isCurrent
                        ? "border-navy bg-navy text-white"
                        : "border-mist bg-white text-ink hover:border-navy hover:text-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
