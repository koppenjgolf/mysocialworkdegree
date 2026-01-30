import { Container, Button, Card, Badge } from "@/components/ui";
import { programs } from "@/content/programs";

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="grid gap-10 py-16 md:grid-cols-2 md:items-center">
            <div>
              <Badge>Lead-gen starter • SEO-ready</Badge>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Find the social work degree path that fits your goals.
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Compare BSW, MSW, DSW, and PhD options—then request program matches based on your state, timeline, and modality.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/apply/form" variant="primary">Get Program Matches</Button>
                <Button href="/programs" variant="secondary">Browse Programs</Button>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                By submitting, you agree to our Terms and Privacy Policy.
              </p>
            </div>

            <Card className="p-6">
              <div className="grid gap-4">
                <div className="text-sm font-semibold text-slate-700">What you’ll get</div>
                <ul className="grid gap-3 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />Program recommendations based on level & modality</li>
                  <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />Clear next steps for admissions & field placement</li>
                  <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />A simple checklist for CSWE accreditation questions</li>
                </ul>

                <div className="mt-2 grid grid-cols-2 gap-3">
                  <Card className="p-4">
                    <div className="text-xs font-semibold text-slate-500">Avg. completion</div>
                    <div className="mt-1 text-2xl font-extrabold">45s</div>
                    <div className="text-xs text-slate-500">lead form</div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-xs font-semibold text-slate-500">Delivery</div>
                    <div className="mt-1 text-2xl font-extrabold">Fast</div>
                    <div className="text-xs text-slate-500">email + CRM</div>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-14">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">Popular program paths</h2>
                <p className="mt-2 text-slate-600">Use these pages as SEO landing pages and as entry points to your lead form.</p>
              </div>
              <Button href="/programs" variant="ghost" className="hidden md:inline-flex">See all →</Button>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {programs.map((p) => (
                <Card key={p.slug} className="p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge>{p.level}</Badge>
                    <Badge>{p.modality}</Badge>
                    <span className="text-xs text-slate-500">{p.typicalLength}</span>
                  </div>
                  <div className="mt-3 text-xl font-extrabold">{p.title}</div>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-600">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />{h}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-3">
                    <Button href={`/programs/${p.slug}`} variant="secondary">Learn more</Button>
                    <Button href={`/apply/form/form?level=${p.level}&modality=${p.modality}`} variant="primary">Request matches</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50">
        <Container>
          <div className="py-14">
            <h2 className="text-2xl font-extrabold tracking-tight">How it works</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { t: "Tell us your goals", d: "Level, modality, start timeframe, and state." },
                { t: "We match options", d: "Send you next-step guidance and connect you to programs." },
                { t: "You choose", d: "Compare costs, placements, and admissions requirements." },
              ].map((x) => (
                <Card key={x.t} className="p-6">
                  <div className="text-lg font-extrabold">{x.t}</div>
                  <p className="mt-2 text-sm text-slate-600">{x.d}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
