"use client";

import { createClient } from "@supabase/supabase-js";

export default function LoginPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY
  );

  async function loginWithDiscord() {
    await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: "https://subway-leaderboard.vercel.app/auth/callback"
      }
    });
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Connexion Discord</h1>

      <button
        onClick={loginWithDiscord}
        style={{
          padding: 15,
          background: "#5865F2",
          color: "white",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
        }}
      >
        Login via Discord
      </button>
    </div>
  );
}
