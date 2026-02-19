import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";
import { Container, Card, Button, Badge } from "@/components/ui";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main>
      <Container>
        <div className="py-12">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</Badge>
            <Badge>{post.readTime}</Badge>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight">{post.title}</h1>
          <p className="mt-3 max-w-3xl text-slate-600">{post.excerpt}</p>

          <Card className="mt-8 p-8">
            <article className="prose max-w-none">
              {post.content.map((para, idx) => (
                <p key={idx} className="mb-4 text-slate-700">{para}</p>
              ))}
            </article>
          </Card>

          <Card className="mt-8 p-6">
            <h2 className="text-xl font-extrabold">Ready to compare programs?</h2>
            <p className="mt-2 text-sm text-slate-600">
              Tell us your preferences and we’ll connect you to programs that fit your goals.
            </p>
            <div className="mt-4 flex gap-3">
              <Button href="/apply/form" variant="primary">Get matches</Button>
              <Button href="/blog" variant="secondary">Back to guides</Button>
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}
