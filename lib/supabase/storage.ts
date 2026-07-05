import "server-only";
import { getSupabaseServerClient } from "@/lib/supabase/server";

/**
 * Herbruikbare Storage-helpers voor bestandsopslag (foto's, documenten) op
 * Supabase. Server-only — deze functies draaien in Server Actions of Route
 * Handlers, niet in "use client"-componenten.
 *
 * Bucketnaam is instelbaar per aanroep, met een default via env var zodat
 * losse features (bv. offerte-bijlagen vs. projectfoto's) hun eigen bucket
 * kunnen gebruiken zonder deze module aan te passen.
 */
const DEFAULT_BUCKET = process.env.SUPABASE_STORAGE_BUCKET || "mtbbouw-uploads";

export type UploadResult = {
  path: string;
  publicUrl: string;
};

/**
 * Upload een bestand naar Storage en geef het pad + de publieke URL terug.
 * `path` is het volledige objectpad binnen de bucket, bv.
 * `projecten/uitbouw-enschede/voor-1.jpg` of `offertes/${id}/plattegrond.pdf`.
 */
export async function uploadFile(
  path: string,
  file: File | Blob | Buffer,
  options?: { bucket?: string; contentType?: string; upsert?: boolean }
): Promise<UploadResult> {
  const bucket = options?.bucket || DEFAULT_BUCKET;
  const supabase = getSupabaseServerClient();

  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    contentType: options?.contentType,
    upsert: options?.upsert ?? false,
  });

  if (error) {
    throw new Error(`Supabase-upload mislukt voor "${path}": ${error.message}`);
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return { path, publicUrl: data.publicUrl };
}

/** Geef de publieke URL van een reeds geüpload bestand terug (geen netwerkcall). */
export function getPublicUrl(path: string, bucket: string = DEFAULT_BUCKET): string {
  const supabase = getSupabaseServerClient();
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}

/** Verwijder één of meerdere bestanden uit een bucket. */
export async function deleteFiles(
  paths: string[],
  bucket: string = DEFAULT_BUCKET
): Promise<void> {
  const supabase = getSupabaseServerClient();
  const { error } = await supabase.storage.from(bucket).remove(paths);
  if (error) {
    throw new Error(`Supabase-verwijderen mislukt: ${error.message}`);
  }
}

/** Lijst bestanden binnen een map (prefix) in een bucket. */
export async function listFiles(prefix: string, bucket: string = DEFAULT_BUCKET) {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase.storage.from(bucket).list(prefix);
  if (error) {
    throw new Error(`Supabase-lijst ophalen mislukt voor "${prefix}": ${error.message}`);
  }
  return data;
}
