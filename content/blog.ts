/**
 * Canonical blog data module.
 * Matches fields referenced in app/blog/[slug]/page.tsx:
 *   - date
 *   - readTime
 *   - excerpt
 */

export type BlogPost = {
  slug: string;
  title: string;
  /** Short summary for cards/listings */
  excerpt: string;
  /** Optional longer description */
  description?: string;
  /** ISO date string */
  date: string;
  /** e.g. "6 min read" */
  readTime: string;
  tags?: string[];
  /** Optional long-form content used in templates */
  content?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-an-online-msw-program",
    title: "How to Choose an Online MSW Program",
    excerpt:
      "Use this checklist to compare accreditation, field placements, total cost, timelines, and student support services.",
    description:
      "A student-friendly checklist for comparing programs, including accreditation, field education, cost, and support services.",
    date: "2026-02-09",
    readTime: "6 min read",
    tags: ["MSW", "Online programs", "Choosing a program"],
    content:
      "Start with accreditation and field placement support. Compare timelines and total cost, then ask each program how placements are coordinated in your area.",
  },
  {
    slug: "what-is-field-education-in-social-work",
    title: "What Is Field Education in Social Work?",
    excerpt:
      "Field education is supervised, hands-on training. Learn what to expect and what questions to ask about placement support.",
    description:
      "Learn how field education works, what to expect, and questions to ask when evaluating program placement support.",
    date: "2026-02-09",
    readTime: "5 min read",
    tags: ["Field education", "Social work"],
    content:
      "Field education is the supervised, hands-on training component of social work programs. Ask how placements are arranged and how hours are tracked.",
  },
  {
    slug: "bsw-vs-msw-whats-the-difference",
    title: "BSW vs. MSW: What’s the Difference?",
    excerpt:
      "Compare outcomes, timelines, and common reasons students choose a BSW, an MSW, or both pathways.",
    description:
      "A clear overview of typical outcomes, timelines, and common reasons students choose each pathway.",
    date: "2026-02-09",
    readTime: "4 min read",
    tags: ["BSW", "MSW", "Degree pathways"],
    content:
      "A BSW is often an undergraduate entry path and may qualify for advanced standing. An MSW is the common graduate pathway for advanced practice and many licensure routes.",
  },
];

export const blogPosts = BLOG_POSTS;
export default blogPosts;
