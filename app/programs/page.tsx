import { Container, Card, Badge, Button } from "@/components/ui";
import { programs } from "@/content/programs";

export const metadata = { title: "Social Work Programs: BSW, MSW, DSW, PhD" };

export default function ProgramsPage() {
  return (
    <main className="bg-white">
      <Container>
        <div className="py-12">
          <h1 className="text-3xl font-extrabold tracking-tight">Programs</h1>
          <p className="mt-3 text-slate-600">
            Browse common social work degree pathways. Each page is optimized as an SEO landing page and funnels into the match form.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {programs.map((p) => (
              <Card key={p.slug} className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{p.level}</Badge>
                  <Badge>{p.modality}</Badge>
                </div>
                <div className="mt-3 text-xl font-extrabold">{p.title}</div>
                <div className="mt-2 text-sm text-slate-600">Typical length: {p.typicalLength}</div>
                <div className="mt-5 flex gap-3">
                  <Button href={`/programs/${p.slug}`} variant="secondary">View</Button>
                  <Button href={`/apply/form/form?level=${p.level}&modality=${p.modality}`} variant="primary">Get matches</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
