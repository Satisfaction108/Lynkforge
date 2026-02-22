import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient();

    // Test the connection by checking auth status (always works)
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    // Try to query profiles table to verify database connection
    const { error: dbError } = await supabase
      .from('profiles')
      .select('id')
      .limit(1);

    // If profiles table doesn't exist yet, that's okay - connection still works
    const dbConnected = !dbError || dbError.code === 'PGRST116'; // No rows returned is fine

    return NextResponse.json({
      status: 'healthy',
      database: dbConnected ? 'connected' : 'table_missing',
      auth: 'connected',
      user: user ? 'authenticated' : 'anonymous',
      timestamp: new Date().toISOString(),
      message: 'Supabase connection successful!',
    });
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json(
      {
        status: 'unhealthy',
        database: 'disconnected',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

