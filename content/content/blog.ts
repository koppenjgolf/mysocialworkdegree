/**
 * Blog index data used by blog routes and sitemap.
 *
 * This module supports multiple import styles used across the codebase:
 *   import { blogPosts } from "@/content/blog"
 *   import blogPosts from "@/content/blog"
 *   import { BLOG_POSTS } from "@/content/blog"
 *
 * Keep content student-facing and informational.
 */

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt?: string;  // ISO date string
  updatedAt?: string;    // ISO date string
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

// Alias used by your app/blog/[slug]/page.tsx
export const blogPosts = BLOG_POSTS;

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

// Default export for code that expects it.
export default blogPosts;
