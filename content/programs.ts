/**
 * Program-format and pathway reference data.
 * This is intentionally student-friendly, general, and easy to expand over time.
 *
 * Your sitemap and program pages can import from:
 *   import programs from "@/content/programs";
 * or:
 *   import { PROGRAMS } from "@/content/programs";
 */

export type ProgramItem = {
  slug: string;        // URL-friendly id, e.g. "online-msw-programs"
  title: string;       // Display title
  description: string; // Short description
  category: "BSW" | "MSW" | "Format" | "General";
  updatedAt?: string;  // ISO date string (optional)
};

export const PROGRAMS: ProgramItem[] = [
  {
    slug: "bsw-programs",
    title: "BSW Programs",
    description: "Undergraduate preparation for entry-level practice and potential advanced standing in some MSW programs.",
    category: "BSW",
    updatedAt: "2026-02-09",
  },
  {
    slug: "msw-programs",
    title: "MSW Programs",
    description: "Graduate pathway for advanced practice and leadership roles. Many students pursue an MSW for common clinical licensure pathways.",
    category: "MSW",
    updatedAt: "2026-02-09",
  },
  {
    slug: "online-msw-programs",
    title: "Online MSW Programs",
    description: "Flexible learning formats while completing required field education.",
    category: "Format",
    updatedAt: "2026-02-09",
  },
  {
    slug: "hybrid-msw-programs",
    title: "Hybrid MSW Programs",
    description: "Blended formats combining online coursework with in-person learning experiences.",
    category: "Format",
    updatedAt: "2026-02-09",
  },
  {
    slug: "on-campus-msw-programs",
    title: "On-Campus MSW Programs",
    description: "In-person instruction and local placement networks in many regions.",
    category: "Format",
    updatedAt: "2026-02-09",
  },
];

export function getProgramBySlug(slug: string): ProgramItem | undefined {
  return PROGRAMS.find((p) => p.slug === slug);
}

// Some code may expect a default export.
export default PROGRAMS;
