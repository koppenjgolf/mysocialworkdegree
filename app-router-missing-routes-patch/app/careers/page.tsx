export default function Careers() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 16px" }}>
      <h1 style={{ fontSize: 36, margin: "0 0 10px 0" }}>Careers</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(0,0,0,.75)", maxWidth: 860 }}>
        Explore common social work career paths, typical work settings, and how degree level and specialization can influence responsibilities.
      </p>

      <div style={{ display: "grid", gap: 14, marginTop: 18 }}>
        <div style={{ border: "1px solid rgba(0,0,0,.10)", borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 800 }}>Clinical social work</div>
          <div style={{ marginTop: 6, color: "rgba(0,0,0,.72)" }}>
            Work may include assessment, counseling, and care coordination. Licensure requirements vary by state.
          </div>
        </div>
        <div style={{ border: "1px solid rgba(0,0,0,.10)", borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 800 }}>School social work</div>
          <div style={{ marginTop: 6, color: "rgba(0,0,0,.72)" }}>
            Support students and families in educational settings. Credentialing requirements vary by state and district.
          </div>
        </div>
        <div style={{ border: "1px solid rgba(0,0,0,.10)", borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 800 }}>Healthcare social work</div>
          <div style={{ marginTop: 6, color: "rgba(0,0,0,.72)" }}>
            Roles often focus on patient support, discharge planning, and connecting people with community resources.
          </div>
        </div>
        <div style={{ border: "1px solid rgba(0,0,0,.10)", borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 800 }}>Community practice and policy</div>
          <div style={{ marginTop: 6, color: "rgba(0,0,0,.72)" }}>
            Work may include program development, advocacy, and policy analysis to improve community outcomes.
          </div>
        </div>
      </div>
    </main>
  );
}
