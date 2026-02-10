export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(0,0,0,.08)", background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 16px", fontSize: 12, color: "rgba(0,0,0,.65)" }}>
        © {new Date().getFullYear()} My Social Work Degree. Information is provided for educational purposes.
      </div>
    </footer>
  );
}
