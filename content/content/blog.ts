/**
 * Blog index data used by blog routes and sitemap.
 * This file matches fields referenced in app/blog/[slug]/page.tsx
 * (date + readTime), while staying student-friendly.
 */

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO date string used for display, e.g. "2026-02-09" */
  date: string;
  /** Short read-time label, e.g. "6 min read" */
  readTime: string;
  tags?: string[];
  /** Optional long-form content (if your template uses it later) */
  content?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-an-online-msw-program",
    title: "How to Choose an Online MSW Program",
    description:
      "A student-friendly checklist for comparing programs, including accreditation, field education, cost, and support services.",
    date: "2026-02-09",
    readTime: "6 min read",
    tags: ["MSW", "Online programs", "Choosing a program"],
    content:
      "Choosing a program starts with accreditation, field placement support, total cost, and student services. Make a short list, compare timelines, and ask each school how placements are coordinated in your area.",
  },
  {
    slug: "what-is-field-education-in-social-work",
    title: "What Is Field Education in Social Work?",
    description:
      "Learn how field education works, what to expect, and questions to ask when evaluating program placement support.",
    date: "2026-02-09",
    readTime: "5 min read",
    tags: ["Field education", "Social work"],
    content:
      "Field education is the supervised, hands-on training component of social work programs. Ask how placements are arranged, what support is available, and how hours are tracked.",
  },
  {
    slug: "bsw-vs-msw-whats-the-difference",
    title: "BSW vs. MSW: What’s the Difference?",
    description:
      "A clear overview of typical outcomes, timelines, and common reasons students choose each pathway.",
    date: "2026-02-09",
    readTime: "4 min read",
    tags: ["BSW", "MSW", "Degree pathways"],
    content:
      "A BSW is often the undergraduate entry path and may qualify for advanced standing. An MSW is the common graduate pathway for advanced practice and many clinical licensure routes, depending on your state.",
  },
];

export const blogPosts = BLOG_POSTS;
export default blogPosts;
