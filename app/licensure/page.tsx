import Link from "next/link";
import { states } from "@/content/states";
import { Container, Card, Badge, Button } from "@/components/ui";

export const metadata = {
  title: "State Licensure Guides | MySocialworkDegree.com",
  description: "Browse social work licensure overviews by state and get matched with MSW programs that fit your goals.",
};

export default function LicensureIndexPage() {
  return (
    <main className="bg-white">
      <Container>
        <div className="py-12">
          <Badge>State guides</Badge>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight">Social Work Licensure by State</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Select your state to view a licensure overview and a checklist of what to verify with your licensing board.
          </p>

          <Card className="mt-8 p-6">
            <div className="grid gap-2 md:grid-cols-3">
              {states.map((s) => (
                <Link
                  key={s.slug}
                  href={`/licensure/${s.slug}`}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  {s.name}
                </Link>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/apply/form?level=MSW&modality=Online" variant="primary">Get matched</Button>
              <Button href="/programs" variant="secondary">Browse programs</Button>
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}
