"use client";

import { createClient } from "@/lib/supabase/client";
import type { Provider } from "@supabase/supabase-js";

/**
 * Sign in with an OAuth provider (Google, GitHub, etc.)
 * This must be called from the client side as it uses browser redirects.
 */
export async function signInWithOAuth(provider: Provider) {
  const supabase = createClient();
  const redirectTo = `${window.location.origin}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo,
    },
  });

  if (error) {
    console.error(`OAuth error with ${provider}:`, error.message);
    return { error: error.message };
  }

  // The user will be redirected to the provider's login page
  return { data };
}

/**
 * Get the OAuth redirect URL for a provider
 * Useful for custom OAuth button implementations
 */
export function getOAuthRedirectUrl(provider: Provider) {
  return `${window.location.origin}/auth/callback?provider=${provider}`;
}

