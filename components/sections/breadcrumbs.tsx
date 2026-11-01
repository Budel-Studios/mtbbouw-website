import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";

/**
 * Kruimelpad: zichtbaar voor bezoekers én als BreadcrumbList in schema.
 * Het eerste item (Home) staat wel in het schema, maar niet in beeld; de
 * laatste stap is de huidige pagina en is geen link.
 */
export function Breadcrumbs({ items }: { items: { name: string; url: string }[] }) {
  const visible = items.filter((item) => item.url !== "/");
  return (
    <>
      <BreadcrumbJsonLd items={items} />
      {visible.length > 1 && (
        <nav aria-label="Kruimelpad" className="container-page py-3 label-mono text-stone">
          <ol className="flex flex-wrap items-center gap-x-2">
            {visible.map((item, i) => {
              const last = i === visible.length - 1;
              return (
                <li key={item.url} className="flex items-center gap-x-2">
                  {last ? (
                    <span aria-current="page" className="text-navy">{item.name}</span>
                  ) : (
                    <Link href={item.url} className="link-line hover:text-navy">{item.name}</Link>
                  )}
                  {!last && <span aria-hidden="true">/</span>}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </>
  );
}
