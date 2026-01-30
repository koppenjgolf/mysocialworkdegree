import { notFound } from "next/navigation";
import Link from "next/link";
import { states } from "@/content/states";
import { licensureByState } from "@/content/licensure";
import { Container, Card, Button, Badge } from "@/components/ui";

export async function generateMetadata({ params }: { params: { state: string } }) {
  const state = states.find((s) => s.slug === params.state);
  if (!state) return {};
  const title = `Social Work Licensure in ${state.name} (LCSW/LMSW Guide) | MySocialworkDegree.com`;
  const description = `A state-specific overview of common licensure steps in ${state.name}, including supervision/CE snapshots and what to verify with the licensing board.`;
  return { title, description };
}

export async function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

function fmtNum(n?: number | null) {
  if (n === null || n === undefined) return "—";
  return n.toLocaleString("en-US");
}

export default function LicensureStatePage({ params }: { params: { state: string } }) {
  const state = states.find((s) => s.slug === params.state);
  if (!state) return notFound();

  const stats = licensureByState[state.slug]?.aswb;

  return (
    <main className="bg-white">
      <Container>
        <div className="py-12">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Licensure</Badge>
            <Badge>{state.abbr}</Badge>
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight">
            Social Work Licensure in {state.name}
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600">
            This page targets licensure-intent searches (like “LCSW requirements {state.name}”). Licensure rules change—always verify details with {state.name}’s official licensing authority.
            The snapshot below is compiled from ASWB’s <span className="font-semibold">Spotlight on Regulation (2024)</span>.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="p-6">
              <div className="text-sm font-semibold text-slate-700">Licensees in {state.name}</div>
              <div className="mt-2 text-3xl font-extrabold">{fmtNum(stats?.total_licensees)}</div>
              <div className="mt-1 text-xs text-slate-500">Total # of licensees (ASWB snapshot)</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm font-semibold text-slate-700">Per 100k population</div>
              <div className="mt-2 text-3xl font-extrabold">{fmtNum(stats?.per100k)}</div>
              <div className="mt-1 text-xs text-slate-500"># of social workers per 100k</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm font-semibold text-slate-700">Renewal + CE</div>
              <div className="mt-2 text-slate-700">
                <div><span className="font-semibold">Renewal:</span> {stats?.renewal_period || "—"}</div>
                <div className="mt-1"><span className="font-semibold">CE hours:</span> {stats?.ce_hours ? `${stats.ce_hours} hours` : "—"}</div>
              </div>
              <div className="mt-1 text-xs text-slate-500">Continuing education requirements vary by license level</div>
            </Card>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <div className="text-lg font-extrabold">Supervision snapshot</div>
              <p className="mt-2 text-sm text-slate-600">
                These are <span className="font-semibold">initial licensure</span> supervision snapshots from ASWB. Always confirm the exact hour types, settings, and documentation rules with the state board.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li><span className="font-semibold">Clinical:</span> {stats?.supervision?.Clinical || "—"}</li>
                <li><span className="font-semibold">Masters:</span> {stats?.supervision?.Masters || "—"}</li>
                <li><span className="font-semibold">Bachelors:</span> {stats?.supervision?.Bachelors || "—"}</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="text-lg font-extrabold">Practice permissions snapshot</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li><span className="font-semibold">Independent practice:</span> {stats?.independent_practice || "—"}</li>
                <li><span className="font-semibold">Private practice:</span> {stats?.private_practice || "—"}</li>
                <li className="pt-2">
                  <span className="font-semibold">Exams used:</span>{" "}
                  {stats?.exams_used?.length ? stats.exams_used.join(", ") : "—"}
                </li>
              </ul>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-semibold">Fees (snapshot)</div>
                <div className="mt-1">Initial: {stats?.initial_fee || "—"} <span className="text-slate-500">(doesn’t include exam fees)</span></div>
                <div className="mt-1">Renewal: {stats?.renewal_fee || "—"}</div>
              </div>
            </Card>
          </div>

          <Card className="mt-8 p-6">
            <h2 className="text-2xl font-extrabold tracking-tight">Step-by-step licensure overview</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-700">
              <li><span className="font-semibold">Choose your degree:</span> MSW is typically required for clinical licensure.</li>
              <li><span className="font-semibold">Verify CSWE accreditation:</span> confirm the program meets educational requirements.</li>
              <li><span className="font-semibold">Plan field placement:</span> ask how placements are coordinated in {state.name} (especially online).</li>
              <li><span className="font-semibold">Apply for initial credential (if applicable):</span> some states have associate/non‑clinical tiers.</li>
              <li><span className="font-semibold">Complete supervised experience:</span> track hours, supervisor credentials, and documentation.</li>
              <li><span className="font-semibold">Pass the required exam:</span> exam level and timing vary by jurisdiction.</li>
              <li><span className="font-semibold">Apply for clinical licensure:</span> submit hours verification, exam results, background check, and fees.</li>
              <li><span className="font-semibold">Maintain your license:</span> renewal cycles + CE requirements vary by state and license type.</li>
            </ol>
          </Card>

          <Card className="mt-8 p-6">
            <h2 className="text-2xl font-extrabold tracking-tight">Quick checklist for {state.name}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
              <li>What is the clinical license title in {state.name} (LCSW, LICSW, CSW, etc.)?</li>
              <li>Which supervised hours count, and what documentation is required?</li>
              <li>Which exam level is required and when can you sit for it?</li>
              <li>Are there jurisprudence/ethics exams or special CE rules?</li>
              <li>What are renewal intervals, CE totals, and audit policies?</li>
            </ul>
          </Card>

          <Card className="mt-8 p-6">
            <h2 className="text-2xl font-extrabold tracking-tight">Get matched with MSW programs</h2>
            <p className="mt-2 text-sm text-slate-600">
              If your goal is clinical licensure, we can match you with MSW options (online, hybrid, or campus) that fit your timeline in {state.name}.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href={`/apply/form?level=MSW&modality=Online`} variant="primary">Get matched</Button>
              <Button href="/programs" variant="secondary">Browse program paths</Button>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Informational only. Always verify with the official state board.
            </p>
          </Card>

          <div className="mt-10 text-sm text-slate-600">
            <div className="font-semibold">Internal links</div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              <Link className="underline" href={`/programs/msw/${state.slug}`}>MSW programs in {state.name}</Link>
              <Link className="underline" href="/apply/form">Request matches</Link>
              <Link className="underline" href="/blog">Career guides</Link>
              <a className="underline" href="https://www.aswb.org/regulation/spotlight-on-regulation/" target="_blank" rel="noreferrer">
                ASWB Spotlight on Regulation
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
