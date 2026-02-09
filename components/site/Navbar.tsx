import Link from "next/link";
import { Button } from "../ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary2" />
          <span>My Social Work Degree</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
          <Link className="hover:text-fg" href="/programs">Programs</Link>
          <Link className="hover:text-fg" href="/degrees">Degrees</Link>
          <Link className="hover:text-fg" href="/careers">Careers</Link>
          <Link className="hover:text-fg" href="/states">By State</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="secondary" className="hidden sm:inline-flex">
            Compare options
          </Button>
          <Button>
            Get matched
          </Button>
        </div>
      </div>
    </header>
  );
}
