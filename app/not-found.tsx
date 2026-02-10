import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px" }}>
      <h1 style={{ fontSize: 34, margin: "0 0 10px 0" }}>Page not found</h1>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(0,0,0,.75)", maxWidth: 720 }}>
        The page you’re looking for isn’t available. You can use the links below to continue exploring.
      </p>
      <ul style={{ marginTop: 18, lineHeight: 1.9 }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/programs">Programs</Link></li>
        <li><Link href="/degrees">Degrees</Link></li>
        <li><Link href="/careers">Careers</Link></li>
        <li><Link href="/states">By State</Link></li>
      </ul>
    </main>
  );
}
