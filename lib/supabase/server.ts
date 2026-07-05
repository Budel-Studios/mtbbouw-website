import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase-client — gebruikt de service-role key en mag NOOIT
 * naar de browser lekken (vandaar de `server-only`-import, die een build-
 * fout geeft als dit bestand per ongeluk in client-code terechtkomt).
 *
 * Gebruik dit voor bevoorrechte Storage-operaties (uploaden, verwijderen)
 * vanuit Server Actions of Route Handlers — nooit vanuit een "use client"
 * component.
 */
let serverClient: SupabaseClient | null = null;

export function getSupabaseServerClient(): SupabaseClient {
  if (serverClient) return serverClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Supabase-omgevingsvariabelen ontbreken: NEXT_PUBLIC_SUPABASE_URL en SUPABASE_SERVICE_ROLE_KEY zijn verplicht."
    );
  }

  serverClient = createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
  return serverClient;
}
