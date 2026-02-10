export type StateItem = { code: string; name: string; slug: string };

export const STATES: StateItem[] = [
  { code: "WA", name: "Washington", slug: "washington" },
  { code: "OR", name: "Oregon", slug: "oregon" },
  { code: "CA", name: "California", slug: "california" },
  { code: "NY", name: "New York", slug: "new-york" },
  { code: "TX", name: "Texas", slug: "texas" },
];

export const states = STATES;
export default states;
