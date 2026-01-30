import Link from "next/link";
import { Container } from "./ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          <div>
            <div className="font-extrabold">MySocialworkDegree</div>
            <p className="mt-2 text-sm text-slate-600">
              We help prospective students compare accredited social work degree pathways and connect with programs that fit.
            </p>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Explore</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><Link href="/programs" className="hover:text-slate-900">Programs</Link></li>
              <li><Link href="/blog" className="hover:text-slate-900">Career Guides</Link></li>
              <li><Link href="/apply/form" className="hover:text-slate-900">Request Matches</Link></li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Legal</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-slate-900">Terms</Link></li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              © {new Date().getFullYear()} MySocialworkDegree. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
