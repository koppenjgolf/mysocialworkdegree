export type Program = {
  slug: string;
  title: string;
  level: "BSW" | "MSW" | "DSW" | "PhD";
  modality: "Online" | "Campus" | "Hybrid";
  typicalLength: string;
  highlights: string[];
};

export const programs: Program[] = [
  {
    slug: "msw-online",
    title: "Online MSW Programs",
    level: "MSW",
    modality: "Online",
    typicalLength: "12–24 months",
    highlights: [
      "Flexible schedules for working adults",
      "Field placements coordinated locally",
      "Advanced standing options (for BSW grads)",
    ],
  },
  {
    slug: "bsw",
    title: "Bachelor’s in Social Work (BSW)",
    level: "BSW",
    modality: "Campus",
    typicalLength: "3–4 years",
    highlights: [
      "Foundation for entry-level social services roles",
      "Preparation for MSW advanced standing",
      "Hands-on practicum experience",
    ],
  },
  {
    slug: "dsw",
    title: "Doctor of Social Work (DSW)",
    level: "DSW",
    modality: "Hybrid",
    typicalLength: "2–3 years",
    highlights: [
      "Practice-focused doctoral pathway",
      "Leadership and applied research emphasis",
      "Ideal for senior clinical/administrative roles",
    ],
  },
  {
    slug: "phd",
    title: "PhD in Social Work",
    level: "PhD",
    modality: "Campus",
    typicalLength: "3–6 years",
    highlights: [
      "Research-intensive training",
      "Academic and policy career pathways",
      "Dissertation + publication focus",
    ],
  },
];
