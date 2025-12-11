"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function SubmitRun() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY
  );

  const [time, setTime] = useState("");
  const [video, setVideo] = useState("");

  async function sendRun() {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData?.user) {
      return alert("Pas connecté, bg.");
    }

    await supabase.from("runs").insert({
      user_id: userData.user.id,
      time,
      video_link: video,
      status: "waiting",
    });

    alert("Run envoyée ! En attente de validation.");
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Envoyer une run</h1>

      <input
        placeholder="Temps (ex: 32.14s)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Lien vidéo"
        value={video}
        onChange={(e) => setVideo(e.target.value)}
      />

      <br /><br />

      <button onClick={sendRun}>Envoyer</button>
    </div>
  );
}
