import Image from "next/image";

/**
 * Strakke fotogalerij met alt-teksten en optionele captions. Wanneer foto's een
 * `phase` hebben, worden ze gegroepeerd in "Voor · Tijdens · Eindresultaat";
 * anders één doorlopende grid. Hoekige kaders, geen ronde hoeken.
 */
type Photo = {
  src: string;
  alt: string;
  caption?: string;
  phase?: "voor" | "tijdens" | "eind";
};

const PHASE_LABELS: Record<NonNullable<Photo["phase"]>, string> = {
  voor: "Voor",
  tijdens: "Tijdens de uitvoering",
  eind: "Eindresultaat",
};

function Grid({ photos }: { photos: Photo[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, i) => (
        <figure key={photo.src + i} className="border border-mist bg-white">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          {photo.caption && (
            <figcaption className="px-4 py-3 text-sm text-stone">
              {photo.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export function ProjectGallery({ photos }: { photos: Photo[] }) {
  if (photos.length === 0) return null;

  const hasPhases = photos.some((p) => p.phase);
  if (!hasPhases) return <Grid photos={photos} />;

  const order: NonNullable<Photo["phase"]>[] = ["voor", "tijdens", "eind"];
  const groups = order
    .map((phase) => ({
      phase,
      photos: photos.filter((p) => p.phase === phase),
    }))
    .filter((g) => g.photos.length > 0);

  // Foto's zonder phase komen onderaan zonder kopje.
  const unphased = photos.filter((p) => !p.phase);

  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <div key={group.phase}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-stone">
            {PHASE_LABELS[group.phase]}
          </p>
          <Grid photos={group.photos} />
        </div>
      ))}
      {unphased.length > 0 && <Grid photos={unphased} />}
    </div>
  );
}
