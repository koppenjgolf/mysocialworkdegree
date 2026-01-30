import { notFound } from "next/navigation";
import { programs } from "@/content/programs";
import { Container, Card, Badge, Button } from "@/components/ui";

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = programs.find((p) => p.slug === params.slug);
  if (!program) return notFound();

  return (
    <main>
      <Container>
        <div className="py-12">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{program.level}</Badge>
            <Badge>{program.modality}</Badge>
            <span className="text-sm text-slate-500">Typical length: {program.typicalLength}</span>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight">{program.title}</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Use this page as a dedicated SEO landing page. Expand with accreditation info (CSWE),
            licensing pathways, field placement notes, and admissions requirements by state.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {program.highlights.map((h) => (
              <Card key={h} className="p-6">
                <div className="text-sm font-semibold text-slate-700">Highlight</div>
                <div className="mt-2 text-slate-600">{h}</div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6">
            <h2 className="text-xl font-extrabold">Request matched programs</h2>
            <p className="mt-2 text-sm text-slate-600">
              Answer a few questions and we’ll route your information to the best-fit program partners.
            </p>
            <div className="mt-4 flex gap-3">
              <Button href={`/apply/form?level=${program.level}&modality=${program.modality}`} variant="primary">
                Start the 45-second form
              </Button>
              <Button href="/programs" variant="secondary">Back to programs</Button>
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}
