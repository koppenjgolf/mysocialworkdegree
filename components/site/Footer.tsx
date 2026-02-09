export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface/40">
      <div className="container-page grid gap-8 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-lg font-extrabold">My Social Work Degree</div>
          <p className="mt-2 max-w-prose text-sm text-muted">
            Student-focused guides to help you understand degree pathways, program formats, and career preparation.
          </p>
        </div>

        <div>
          <div className="text-sm font-bold">Explore</div>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><a className="hover:text-fg" href="/programs">Programs</a></li>
            <li><a className="hover:text-fg" href="/degrees">Degrees</a></li>
            <li><a className="hover:text-fg" href="/careers">Careers</a></li>
            <li><a className="hover:text-fg" href="/states">By State</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-bold">Support</div>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><a className="hover:text-fg" href="/about">About</a></li>
            <li><a className="hover:text-fg" href="/privacy">Privacy</a></li>
            <li><a className="hover:text-fg" href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="md:col-span-4 text-xs text-muted">
          © {new Date().getFullYear()} My Social Work Degree. Information is provided for educational purposes.
        </div>
      </div>
    </footer>
  );
}
