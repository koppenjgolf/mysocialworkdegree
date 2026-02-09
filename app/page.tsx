import { Hero } from "../components/site/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="container-page py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card-surface p-6">
            <div className="text-sm font-bold">Degree pathways</div>
            <p className="mt-2 text-sm text-muted">Understand BSW and MSW options, typical timelines, and what each path prepares you to do.</p>
          </div>
          <div className="card-surface p-6">
            <div className="text-sm font-bold">Program formats</div>
            <p className="mt-2 text-sm text-muted">Compare online, on-campus, and hybrid programs and how field education is completed.</p>
          </div>
          <div className="card-surface p-6">
            <div className="text-sm font-bold">Career preparation</div>
            <p className="mt-2 text-sm text-muted">Explore common specialization areas and questions to ask when evaluating programs.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
