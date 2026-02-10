/**
 * Minimal licensure guidance content.
 * Keep this student-facing and general (requirements vary by state).
 */

export type LicensureOverview = {
  slug: string;              // "washington"
  title: string;             // "Licensure in Washington"
  summary: string;           // short general summary
  notes: string[];           // bullets
};

export const LICENSURE_OVERVIEWS: LicensureOverview[] = [
  {
    slug: "washington",
    title: "Licensure in Washington",
    summary:
      "Licensing requirements can vary by role and credential. Many clinical licenses require an MSW, supervised experience, and an exam.",
    notes: [
      "Confirm requirements with the state licensing board.",
      "Programs and supervised hours may have specific documentation rules.",
      "If you plan to practice in a different state, review reciprocity and transfer rules early.",
    ],
  },
];

export function getLicensureOverviewBySlug(slug: string): LicensureOverview | undefined {
  return LICENSURE_OVERVIEWS.find((x) => x.slug === slug);
}

// Some pages may expect a map-like export; provide one.
export const LICENSURE_BY_STATE: Record<string, LicensureOverview> = Object.fromEntries(
  LICENSURE_OVERVIEWS.map((x) => [x.slug, x])
);

// Support both default + named imports.
export default LICENSURE_OVERVIEWS;
