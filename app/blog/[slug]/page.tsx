import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";
import { Container, Card, Badge } from "@/components/ui";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="bg-white">
      <Container className="py-12">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Badge>
          <Badge>{post.readTime}</Badge>
          {post.tags?.slice(0, 4).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">{post.title}</h1>
        <p className="mt-3 max-w-3xl text-slate-600">{post.excerpt}</p>

        <Card className="mt-8 p-8">
          <article className="prose max-w-none">
            {(post.content ?? []).map((para, idx) => (
              <p key={idx} className="mb-4 text-slate-700">
                {para}
              </p>
            ))}
          </article>
        </Card>
      </Container>
    </main>
  );
}
