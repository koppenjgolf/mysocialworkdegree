export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readTime: string;
  content: string[]; // paragraphs
};

export const blogPosts: BlogPost[] = [
  {
    slug: "msw-vs-bsw",
    title: "MSW vs BSW: Which Social Work Degree Should You Choose?",
    excerpt: "A practical comparison of career outcomes, timelines, and common admissions paths.",
    date: "2026-01-01",
    readTime: "6 min",
    content: [
      "If you're deciding between a BSW and MSW, start with your career goal and timeline.",
      "A BSW is typically the entry point for many social services roles and can set you up for advanced standing in an MSW.",
      "An MSW opens more clinical and leadership roles, depending on your state’s licensing requirements.",
      "When comparing programs, ask about field placements, tuition, and whether the curriculum aligns with licensure pathways.",
    ],
  },
  {
    slug: "how-to-choose-online-msw",
    title: "How to Choose an Online MSW Program",
    excerpt: "What to look for in accreditation, field placements, schedule flexibility, and student support.",
    date: "2026-01-10",
    readTime: "7 min",
    content: [
      "Online MSW programs can be a great fit for working adults, but not all are created equal.",
      "Prioritize CSWE accreditation, field placement support in your area, and transparent tuition/fees.",
      "Ask whether the program offers synchronous vs asynchronous options and what the weekly workload looks like.",
      "Finally, confirm licensure alignment for your state and intended practice area.",
    ],
  },
];
