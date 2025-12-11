export default async function Leaderboard() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/runs?status=eq.approved&order=time.asc`,
    {
      headers: { apikey: process.env.NEXT_PUBLIC_SUPABASE_KEY },
      cache: "no-store",
    }
  );

  const runs = await res.json();

  return (
    <div style={{ padding: 40 }}>
      <h1>Leaderboard</h1>

      {runs.map((r) => (
        <div key={r.id} style={{ marginBottom: 20 }}>
          <strong>{r.time}</strong>
          <br />
          <a href={r.video_link} target="_blank">
            Voir la vidéo
          </a>
        </div>
      ))}
    </div>
  );
}
