import { getBaseUrl } from "@/lib/utils";
import { programs } from "@/content/programs";
import { blogPosts } from "@/content/blog";
import { states } from "@/content/states";

export default function sitemap() {
  const base = getBaseUrl();
  const now = new Date().toISOString();

  const staticRoutes = ["", "/programs", "/blog", "/about", "/apply", "/licensure", "/privacy", "/terms", "/thank-you"].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
  }));

  const programRoutes = programs.map((p) => ({
    url: `${base}/programs/${p.slug}`,
    lastModified: now,
  }));

  const licensureRoutes = states.map((s) => ({
  url: `${base}/licensure/${s.slug}`,
  lastModified: now,
}));

const blogRoutes
 = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...programRoutes, ...licensureRoutes, ...blogRoutes];
}
