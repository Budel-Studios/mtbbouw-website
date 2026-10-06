import Image from "next/image";
import Link from "next/link";
import type { Author } from "@/lib/authors";

/** Auteursregel onder de titel: wie schreef dit en wat doet die bij MTB Bouw. */
export function AuthorByline({ author }: { author: Author }) {
  return (
    <div className="mt-6 flex items-center gap-3">
      {author.image && (
        <Image
          src={author.image}
          alt={`${author.name}, ${author.role.toLowerCase()} bij MTB Bouw`}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover"
        />
      )}
      <p className="text-sm leading-snug text-stone">
        Geschreven door{" "}
        <Link href="/over-ons" className="font-semibold text-ink hover:text-lime-dark">
          {author.name}
        </Link>
        <br />
        {author.role} bij MTB Bouw
      </p>
    </div>
  );
}
