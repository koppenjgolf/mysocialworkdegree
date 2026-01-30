import { Container, Card, Badge, Button } from "@/components/ui";
import { blogPosts } from "@/content/blog";

export const metadata = { title: "Career Guides | SocialWorkDegreesNow" };

export default function BlogIndexPage() {
  return (
    <main>
      <Container>
        <div className="py-12">
          <h1 className="text-3xl font-extrabold tracking-tight">Career Guides</h1>
          <p className="mt-3 text-slate-600">Helpful explainers designed to rank for SEO and push high-intent readers into the match form.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {blogPosts.map((p) => (
              <Card key={p.slug} className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</Badge>
                  <Badge>{p.readTime}</Badge>
                </div>
                <div className="mt-3 text-xl font-extrabold">{p.title}</div>
                <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
                <div className="mt-5 flex gap-3">
                  <Button href={`/blog/${p.slug}`} variant="secondary">Read</Button>
                  <Button href="/apply/form" variant="primary">Get matches</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
