export default function Programs() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 16px" }}>
      <h1 style={{ fontSize: 36, margin: "0 0 10px 0" }}>Programs</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(0,0,0,.75)", maxWidth: 820 }}>
        Explore social work degree pathways, program formats, and career preparation options to help you make an informed education decision.
      </p>

      <div style={{ display: "grid", gap: 14, marginTop: 18 }}>
        <div style={{ border: "1px solid rgba(0,0,0,.10)", borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 800 }}>BSW programs</div>
          <div style={{ marginTop: 6, color: "rgba(0,0,0,.72)" }}>Undergraduate preparation for entry-level practice and potential advanced standing.</div>
        </div>
        <div style={{ border: "1px solid rgba(0,0,0,.10)", borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 800 }}>MSW programs</div>
          <div style={{ marginTop: 6, color: "rgba(0,0,0,.72)" }}>Graduate training for advanced practice, leadership, and common licensure pathways.</div>
        </div>
        <div style={{ border: "1px solid rgba(0,0,0,.10)", borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 800 }}>Online and hybrid formats</div>
          <div style={{ marginTop: 6, color: "rgba(0,0,0,.72)" }}>Flexible learning while completing required field education.</div>
        </div>
      </div>
    </main>
  );
}
