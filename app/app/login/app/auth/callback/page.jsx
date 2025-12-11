"use client";

import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

export default function CallbackPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY
  );

  useEffect(() => {
    async function handleAuth() {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        window.location.href = "/submit";
      }
    }
    handleAuth();
  }, []);

  return <p>Connexion…</p>;
}
