import React from "react";
import Link from "next/link";
import { Container, Card, Button, Badge } from "@/components/ui";

export const metadata = {
  title: "MySocialworkDegree.com | Find Accredited Social Work Degree Programs",
  description:
    "Compare CSWE-accredited social work programs by state, degree level, and learning format. Discover online and campus-based options aligned with your career path.",
};

function TrustPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <div className="text-sm font-semibold tracking-wide text-slate-600">{eyebrow}</div>
      ) : null}
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">{title}</h2>
      {desc ? <p className="mt-3 text-slate-600">{desc}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="py-14 md:py-20">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>CSWE-focused</Badge>
              <Badge>Nationwide</Badge>
              <Badge>Online + Campus</Badge>
            </div>

            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Find accredited social work degree programs that fit your goals
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Compare CSWE-accredited pathways by state, degree level, and learning format. Discover online and
              campus-based options aligned with your career path.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/apply" variant="primary">
                Get program matches
              </Button>
              <Button href="/programs" variant="secondary">
                Browse programs
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <TrustPill>✔ CSWE accreditation explained</TrustPill>
              <TrustPill>✔ State-specific guidance</TrustPill>
              <TrustPill>✔ Online & campus options</TrustPill>
              <TrustPill>✔ Career-focused outcomes</TrustPill>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Informational resource. Always verify accreditation and licensure requirements with schools and your
              state board.
            </p>
          </div>
        </Container>
      </div>

      {/* DEGREE PATHS */}
      <Container>
        <div className="py-14">
          <SectionTitle
            eyebrow="Degree paths"
            title="Explore social work degree options"
            desc="Start with the degree level that matches where you are today—and where you want to go next."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="p-6">
              <div className="text-sm font-semibold text-slate-600">Bachelor’s</div>
              <div className="mt-2 text-xl font-extrabold text-slate-900">Bachelor of Social Work (BSW)</div>
              <p className="mt-2 text-sm text-slate-600">
                Entry-level degree for students beginning a career in social work. Often leads to case management and
                human services roles, and can shorten MSW timelines via advanced standing.
              </p>
              <div className="mt-4">
                <Button href="/programs/bsw" variant="secondary">
                  View BSW options
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <div className="text-sm font-semibold text-slate-600">Master’s</div>
              <div className="mt-2 text-xl font-extrabold text-slate-900">Master of Social Work (MSW)</div>
              <p className="mt-2 text-sm text-slate-600">
                Advanced degree required for many clinical and leadership roles. Available online, hybrid, and on-campus
                formats with local field placements.
              </p>
              <div className="mt-4">
                <Button href="/programs/msw" variant="secondary">
                  View MSW options
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <div className="text-sm font-semibold text-slate-600">Licensure</div>
              <div className="mt-2 text-xl font-extrabold text-slate-900">Clinical Social Work (LCSW path)</div>
              <p className="mt-2 text-sm text-slate-600">
                Typically requires an MSW plus supervised experience and an exam. Requirements vary by state—use our
                state pages to understand what to verify.
              </p>
              <div className="mt-4">
                <Button href="/licensure" variant="secondary">
                  Explore licensure by state
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Container>

      {/* ONLINE VS CAMPUS */}
      <div className="bg-slate-50">
        <Container>
          <div className="py-14">
            <SectionTitle
              eyebrow="Learning formats"
              title="Online and on-campus social work programs"
              desc="Online programs typically deliver coursework remotely while keeping field placements in-person in your local community."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="text-xl font-extrabold text-slate-900">Online programs</div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Flexible schedules for working adults</li>
                  <li>Local field placements coordinated near you</li>
                  <li>May offer part-time and advanced standing tracks</li>
                </ul>
                <div className="mt-4">
                  <Button href="/programs?modality=online" variant="secondary">
                    See online options
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-xl font-extrabold text-slate-900">Campus programs</div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>In-person learning and cohort structure</li>
                  <li>On-campus student services and advising</li>
                  <li>Often strong local placement networks</li>
                </ul>
                <div className="mt-4">
                  <Button href="/programs?modality=campus" variant="secondary">
                    See campus options
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>

      {/* ACCREDITATION */}
      <Container>
        <div className="py-14">
          <SectionTitle
            eyebrow="Accreditation"
            title="Why CSWE accreditation matters"
            desc="CSWE accreditation is a common requirement for licensure eligibility and signals that a program meets national standards."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="p-6">
              <div className="text-lg font-extrabold text-slate-900">Licensure eligibility</div>
              <p className="mt-2 text-sm text-slate-600">
                Many states require a CSWE-accredited degree for clinical licensure. Always confirm requirements with
                your state board.
              </p>
            </Card>
            <Card className="p-6">
              <div className="text-lg font-extrabold text-slate-900">Field education standards</div>
              <p className="mt-2 text-sm text-slate-600">
                Accredited programs follow defined expectations for curriculum and field placement structure.
              </p>
            </Card>
            <Card className="p-6">
              <div className="text-lg font-extrabold text-slate-900">Employer recognition</div>
              <p className="mt-2 text-sm text-slate-600">
                Accreditation helps ensure your education is portable and recognized across employers and jurisdictions.
              </p>
            </Card>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/programs?accreditation=cswe" variant="primary">
              View accredited options
            </Button>
            <Button href="/about" variant="secondary">
              Learn how we evaluate programs
            </Button>
          </div>
        </div>
      </Container>

      {/* STATE CTA */}
      <div className="bg-slate-50">
        <Container>
          <div className="py-14">
            <SectionTitle
              eyebrow="By location"
              title="Find social work programs by state"
              desc="Licensing requirements and program availability vary by state. Explore state pages to understand program options and what to verify."
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {[
                ["California", "california"],
                ["Texas", "texas"],
                ["Florida", "florida"],
                ["New York", "new-york"],
                ["Pennsylvania", "pennsylvania"],
                ["Illinois", "illinois"],
                ["Ohio", "ohio"],
                ["Georgia", "georgia"],
              ].map(([label, slug]) => (
                <Link
                  key={slug}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm hover:border-slate-300"
                  href={`/programs/msw/${slug}`}
                >
                  {label} →
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <Button href="/programs" variant="secondary">
                Browse all states
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* CAREERS */}
      <Container>
        <div className="py-14">
          <SectionTitle
            eyebrow="Careers"
            title="Social work careers and outcomes"
            desc="Social work graduates work in healthcare, schools, mental health, child welfare, and community agencies. Outcomes vary by education level, setting, and location."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="p-6">
              <div className="text-lg font-extrabold text-slate-900">Clinical social worker</div>
              <p className="mt-2 text-sm text-slate-600">
                Often requires an MSW + supervised experience and licensure. Work in therapy settings, clinics, and
                hospitals.
              </p>
              <div className="mt-4">
                <Button href="/careers" variant="secondary">
                  Explore roles
                </Button>
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-lg font-extrabold text-slate-900">School social worker</div>
              <p className="mt-2 text-sm text-slate-600">
                Support student wellbeing, family engagement, and access to services. Requirements vary by state and
                district.
              </p>
              <div className="mt-4">
                <Button href="/careers" variant="secondary">
                  Explore roles
                </Button>
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-lg font-extrabold text-slate-900">Healthcare social worker</div>
              <p className="mt-2 text-sm text-slate-600">
                Help patients navigate treatment, resources, and discharge planning across hospitals and care settings.
              </p>
              <div className="mt-4">
                <Button href="/careers" variant="secondary">
                  Explore roles
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Container>

      {/* HOW IT WORKS + FINAL CTA */}
      <div className="bg-slate-50">
        <Container>
          <div className="py-14">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <SectionTitle
                  eyebrow="How it works"
                  title="Get matched in minutes"
                  desc="Answer a few questions and we’ll point you toward accredited programs that fit your location and goals."
                />
                <ol className="mt-6 list-decimal space-y-3 pl-5 text-slate-700">
                  <li>
                    <span className="font-semibold">Tell us what you need:</span> degree level, state, and online/campus
                    preference.
                  </li>
                  <li>
                    <span className="font-semibold">Review options:</span> compare programs and learn what to verify for
                    licensure.
                  </li>
                  <li>
                    <span className="font-semibold">Request program info:</span> connect with schools for admissions,
                    tuition, and timelines.
                  </li>
                </ol>
              </div>

              <Card className="p-8">
                <div className="text-2xl font-extrabold tracking-tight text-slate-900">
                  Ready to compare social work programs?
                </div>
                <p className="mt-3 text-slate-600">
                  Get matched by state, degree level, and schedule. It takes about 45 seconds.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/apply" variant="primary">
                    Get matched now
                  </Button>
                  <Button href="/programs" variant="secondary">
                    Browse first
                  </Button>
                </div>
                <p className="mt-4 text-xs text-slate-500">Privacy protected. No obligation to enroll.</p>
              </Card>
            </div>
          </div>
        </Container>
      </div>

      {/* FOOTNOTE */}
      <Container>
        <div className="py-10">
          <p className="text-xs text-slate-500">
            MySocialworkDegree.com provides educational resources and program discovery tools for students interested in
            social work careers. Information is intended for general guidance and should not replace official state
            licensing board requirements. Always verify accreditation and licensure requirements directly with schools
            and regulatory agencies.
          </p>
        </div>
      </Container>
    </main>
  );
}
