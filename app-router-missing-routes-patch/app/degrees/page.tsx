export default function Degrees() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 16px" }}>
      <h1 style={{ fontSize: 36, margin: "0 0 10px 0" }}>Degrees</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(0,0,0,.75)", maxWidth: 860 }}>
        Learn about common social work degree pathways, what each level prepares you for, and how programs typically differ by format and focus area.
      </p>

      <div style={{ display: "grid", gap: 14, marginTop: 18 }}>
        <section style={{ border: "1px solid rgba(0,0,0,.10)", borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 800 }}>Bachelor of Social Work (BSW)</div>
          <div style={{ marginTop: 6, color: "rgba(0,0,0,.72)" }}>
            Often the standard undergraduate path into the profession. A BSW may prepare students for entry-level roles and can qualify graduates for advanced standing in some MSW programs.
          </div>
        </section>

        <section style={{ border: "1px solid rgba(0,0,0,.10)", borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 800 }}>Master of Social Work (MSW)</div>
          <div style={{ marginTop: 6, color: "rgba(0,0,0,.72)" }}>
            Common graduate pathway for advanced practice and leadership roles. Many students pursue an MSW to support clinical licensure pathways and deepen skills in assessment and intervention.
          </div>
        </section>

        <section style={{ border: "1px solid rgba(0,0,0,.10)", borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 800 }}>Doctoral options (PhD / DSW)</div>
          <div style={{ marginTop: 6, color: "rgba(0,0,0,.72)" }}>
            Doctoral programs can support research, teaching, and advanced leadership. Requirements and outcomes vary by institution and program type.
          </div>
        </section>
      </div>
    </main>
  );
}
