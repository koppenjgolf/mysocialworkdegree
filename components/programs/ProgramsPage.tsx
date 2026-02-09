import Image from "next/image";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

type ProgramCard = {
  title: string;
  description: string;
  tags: string[];
};

const cards: ProgramCard[] = [
  { title: "Online MSW programs", description: "Flexible formats with required field education and student support services.", tags: ["Graduate", "Online", "Field education"] },
  { title: "On-campus MSW programs", description: "In-person instruction and local placement networks in many regions.", tags: ["Graduate", "On-campus"] },
  { title: "BSW programs", description: "Undergraduate preparation for entry-level practice and potential advanced standing.", tags: ["Undergraduate", "BSW"] },
  { title: "Hybrid options", description: "Blended schedules that combine online coursework with in-person learning experiences.", tags: ["Hybrid", "Flexible"] },
];

export function ProgramsPage() {
  return (
    <main>
      <section className="container-page py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Programs</h1>
            <p className="mt-4 max-w-prose text-base text-muted">
              Explore social work degree pathways, program formats, and career preparation options to help you make an informed education decision.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Browse pathways</Button>
              <Button variant="secondary">Compare formats</Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Badge>Online</Badge><Badge>On-campus</Badge><Badge>Hybrid</Badge><Badge>BSW</Badge><Badge>MSW</Badge>
            </div>
          </div>

          <Card className="overflow-hidden">
            <div className="relative aspect-[16/10]">
              <Image src="/images/students/students-2.jpg" alt="Students on campus" fill className="object-cover" />
            </div>
            <div className="p-5">
              <div className="text-sm font-bold">What you’ll find here</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                <li>Degree pathways and typical timelines</li>
                <li>Online, on-campus, and hybrid formats</li>
                <li>Common specialization areas (varies by school)</li>
                <li>Key questions to compare programs</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-surface/40 py-10">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">Browse by format</h2>
              <p className="mt-2 text-sm text-muted">Start with the program type that best matches your schedule and goals.</p>
            </div>
            <div className="hidden gap-2 md:flex">
              <Button variant="ghost">Online</Button>
              <Button variant="ghost">On-campus</Button>
              <Button variant="ghost">Hybrid</Button>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <Card key={c.title} className="p-5">
                <div className="text-lg font-extrabold">{c.title}</div>
                <p className="mt-2 text-sm text-muted">{c.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (<span key={t} className="chip">{t}</span>))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-10 md:py-14">
        <Card className="p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight">Questions to ask when comparing programs</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                <li>Is the program accredited?</li>
                <li>How does field education work and who helps coordinate placements?</li>
                <li>What are the available specializations or focus areas?</li>
                <li>What is the total estimated cost and what financial aid is available?</li>
                <li>What student support services are offered (advising, tutoring, career services)?</li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-border">
              <div className="relative aspect-[4/3]">
                <Image src="/images/students/students-3.jpg" alt="Students collaborating" fill className="object-cover" />
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
