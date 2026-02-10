/**
 * Blog index data.
 * This file exists primarily so build-time modules (like app/sitemap.ts) can compile.
 * You can expand this over time or wire it to MD/MDX content later.
 *
 * Supports:
 *   import blog from "@/content/blog"
 *   import { BLOG_POSTS } from "@/content/blog"
 */

export type BlogPost = {
  slug: string;          // e.g. "how-to-choose-an-online-msw-program"
  title: string;
  description: string;
  publishedAt?: string;  // ISO date string (optional)
  updatedAt?: string;    // ISO date string (optional)
  tags?: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-an-online-msw-program",
    title: "How to Choose an Online MSW Program",
    description:
      "A student-friendly checklist for comparing programs, including accreditation, field education, cost, and support services.",
    publishedAt: "2026-02-09",
    updatedAt: "2026-02-09",
    tags: ["MSW", "Online programs", "Choosing a program"],
  },
  {
    slug: "what-is-field-education-in-social-work",
    title: "What Is Field Education in Social Work?",
    description:
      "Learn how field education works, what to expect, and questions to ask when evaluating program placement support.",
    publishedAt: "2026-02-09",
    updatedAt: "2026-02-09",
    tags: ["Field education", "Social work"],
  },
  {
    slug: "bsw-vs-msw-whats-the-difference",
    title: "BSW vs. MSW: What’s the Difference?",
    description:
      "A clear overview of typical outcomes, timelines, and common reasons students choose each pathway.",
    publishedAt: "2026-02-09",
    updatedAt: "2026-02-09",
    tags: ["BSW", "MSW", "Degree pathways"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

// Default export for projects that expect it.
export default BLOG_POSTS;
