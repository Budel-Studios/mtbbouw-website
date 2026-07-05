import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Browser-Supabase-client — gebruikt de publieke (anon) key, dus alleen
 * geschikt voor operaties die door Storage-policies zijn toegestaan voor
 * anonieme gebruikers (bv. publieke bestanden lezen). Gebruik `lib/supabase/
 * server.ts` voor uploads/verwijderen vanuit Server Actions/Route Handlers.
 */
let browserClient: SupabaseClient | null = null;

export function getSupabaseBrowserClient(): SupabaseClient {
  if (browserClient) return browserClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Supabase-omgevingsvariabelen ontbreken: NEXT_PUBLIC_SUPABASE_URL en NEXT_PUBLIC_SUPABASE_ANON_KEY zijn verplicht."
    );
  }

  browserClient = createClient(url, anonKey);
  return browserClient;
}
