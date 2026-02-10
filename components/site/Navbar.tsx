import Link from "next/link";

export function Navbar() {
  return (
    <header style={{ borderBottom: "1px solid rgba(0,0,0,.08)", background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontWeight: 800, textDecoration: "none", color: "black" }}>
          My Social Work Degree
        </Link>

        <nav style={{ display: "flex", gap: 18, fontSize: 14 }}>
          <Link href="/programs" style={{ textDecoration: "none", color: "black" }}>Programs</Link>
          <Link href="/degrees" style={{ textDecoration: "none", color: "black" }}>Degrees</Link>
          <Link href="/careers" style={{ textDecoration: "none", color: "black" }}>Careers</Link>
          <Link href="/states" style={{ textDecoration: "none", color: "black" }}>By State</Link>
        </nav>
      </div>
    </header>
  );
}
