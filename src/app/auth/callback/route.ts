import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { ROUTES } from "@/lib/constants";

/**
 * Auth callback route
 * Handles the redirect from Supabase after email confirmation or OAuth
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? ROUTES.DASHBOARD;

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!error) {
      // Redirect to the next URL or dashboard
      const forwardedHost = request.headers.get("x-forwarded-host");
      const isLocalEnv = process.env.NODE_ENV === "development";
      
      if (isLocalEnv) {
        // In development, use origin directly
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        // In production, use forwarded host for Vercel deployments
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  // If there's an error or no code, redirect to login with error
  return NextResponse.redirect(`${origin}${ROUTES.LOGIN}?error=auth_callback_error`);
}

