import Link from "next/link";
import { Container, Button } from "./ui";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">
              MS
            </span>
            <span>MySocialworkDegree</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
            <Link href="/programs" className="hover:text-slate-900">Programs</Link>
            <Link href="/blog" className="hover:text-slate-900">Career Guides</Link>
            <Link href="/licensure/california" className="hover:text-slate-900">Licensure</Link>
            <Link href="/about" className="hover:text-slate-900">About</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button href="/apply/form" variant="primary">Get Matches</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
