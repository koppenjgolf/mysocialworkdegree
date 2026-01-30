import { Container, Card } from "@/components/ui";

export const metadata = { title: "About | SocialWorkDegreesNow" };

export default function AboutPage() {
  return (
    <main>
      <Container>
        <div className="py-12">
          <h1 className="text-3xl font-extrabold tracking-tight">About</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            This site is designed to generate qualified leads by providing helpful program comparisons and a fast match form.
            Replace this copy with your brand story, editorial standards, and how you work with partner schools.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <div className="text-lg font-extrabold">What we do</div>
              <p className="mt-2 text-sm text-slate-600">
                Create high-intent landing pages, answer common questions, and route prospective students to best-fit programs.
              </p>
            </Card>
            <Card className="p-6">
              <div className="text-lg font-extrabold">Transparency</div>
              <p className="mt-2 text-sm text-slate-600">
                Be clear about whether you receive compensation from schools, how you share information, and how users can opt out.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}
