export type LicensureOverview = {
  slug: string;
  title: string;
  summary: string;
  notes: string[];
};

export const LICENSURE_OVERVIEWS: LicensureOverview[] = [
  {
    slug: "washington",
    title: "Licensure in Washington",
    summary:
      "Licensing requirements vary by credential and role. Many clinical licenses require an MSW, supervised experience, and an exam.",
    notes: [
      "Confirm current requirements with the state licensing board.",
      "Ask programs how they support field placement planning.",
      "If you may practice in another state, review transfer rules early.",
    ],
  },
];

export const licensure = LICENSURE_OVERVIEWS;
export default licensure;
