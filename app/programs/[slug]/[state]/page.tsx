
import { notFound } from "next/navigation";
import { programs } from "@/content/programs";
import { states } from "@/content/states";
import { Container, Card, Button, Badge } from "@/components/ui";

export async function generateStaticParams() {
  const params:any[] = [];
  programs.forEach(p => {
    states.forEach(s => {
      params.push({ slug: p.slug, state: s.slug });
    });
  });
  return params;
}

export default function StateProgramPage({ params }: { params: { slug: string; state: string } }) {
  const program = programs.find(p => p.slug === params.slug);
  const state = states.find(s => s.slug === params.state);
  if (!program || !state) return notFound();

  return (
    <main>
      <Container>
        <div className="py-12">
          <Badge>{program.level}</Badge>
          <h1 className="mt-4 text-4xl font-extrabold">
            {program.title} in {state.name}
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Earning a {program.level} degree in {state.name} can prepare you for licensure and careers in social services, mental health, and healthcare settings. Students in {state.name} can choose between online, hybrid, and campus-based programs depending on their schedule and goals.
          </p>

          <Card className="mt-8 p-6">
            <h2 className="text-xl font-extrabold">Why choose a {program.level} program in {state.name}?</h2>
            <ul className="mt-3 list-disc pl-6 text-slate-600">
              <li>Programs accredited by CSWE</li>
              <li>Field placements available in {state.name}</li>
              <li>Prepares you for licensure pathways</li>
            </ul>
          </Card>

          <Card className="mt-8 p-6">
            <h2 className="text-xl font-extrabold">Get matched with programs in {state.name}</h2>
            <p className="mt-2 text-sm text-slate-600">
              Answer a few questions and we’ll connect you with social work degree programs that fit your goals.
            </p>
            <Button href={`/apply/form?level=${program.level}&modality=${program.modality}`} variant="primary" className="mt-4">
              Get matched
            </Button>
          </Card>
        </div>
      </Container>
    </main>
  );
}
