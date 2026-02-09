import Image from "next/image";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-28 top-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute left-1/2 top-72 h-72 w-72 -translate-x-1/2 rounded-full bg-primary2/20 blur-3xl" />
      </div>

      <div className="container-page grid gap-10 py-12 md:grid-cols-2 md:py-16">
        <div>
          <Badge>Student resource</Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Find the social work program format that fits your goals
          </h1>
          <p className="mt-4 max-w-prose text-base text-muted">
            Explore degree pathways, online and on-campus options, and common specializations—so you can make an informed education decision.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button>Browse programs</Button>
            <Button variant="secondary">Compare degree pathways</Button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="card-surface p-4">
              <div className="text-xs font-semibold text-muted">Accreditation</div>
              <div className="mt-1 text-sm font-bold">What it means</div>
            </div>
            <div className="card-surface p-4">
              <div className="text-xs font-semibold text-muted">Field education</div>
              <div className="mt-1 text-sm font-bold">How placements work</div>
            </div>
            <div className="card-surface p-4">
              <div className="text-xs font-semibold text-muted">Cost</div>
              <div className="mt-1 text-sm font-bold">Ways to plan</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="card-surface overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/students/students-1.jpg"
                alt="College students studying together"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid gap-3 p-5 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-bg/70 p-4">
                <div className="text-xs font-semibold text-muted">Popular paths</div>
                <div className="mt-1 text-sm font-bold">BSW → MSW</div>
              </div>
              <div className="rounded-xl border border-border bg-bg/70 p-4">
                <div className="text-xs font-semibold text-muted">Formats</div>
                <div className="mt-1 text-sm font-bold">Online & hybrid</div>
              </div>
              <div className="rounded-xl border border-border bg-bg/70 p-4 sm:col-span-2">
                <div className="text-xs font-semibold text-muted">Specializations</div>
                <div className="mt-1 text-sm font-bold">Clinical • Schools • Healthcare • Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
