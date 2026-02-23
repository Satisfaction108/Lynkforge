"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User, Session } from "@supabase/supabase-js";

interface UseUserReturn {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  error: Error | null;
  refresh: () => Promise<void>;
}

/**
 * Hook for accessing auth state in client components
 * Automatically subscribes to auth state changes
 */
export function useUser(): UseUserReturn {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const supabase = createClient();

  const refresh = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        setError(error);
        setUser(null);
        setSession(null);
      } else {
        setSession(session);
        setUser(session?.user ?? null);
        setError(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to get session"));
    } finally {
      setIsLoading(false);
    }
  }, [supabase.auth]);

  useEffect(() => {
    // Get initial session
    refresh();

    // Subscribe to auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase.auth, refresh]);

  return { user, session, isLoading, error, refresh };
}

