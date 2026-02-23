import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { ROUTES } from '@/lib/constants';

export async function POST() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  return NextResponse.redirect(new URL(ROUTES.HOME, process.env.NEXT_PUBLIC_APP_URL), {
    status: 302,
  });
}

