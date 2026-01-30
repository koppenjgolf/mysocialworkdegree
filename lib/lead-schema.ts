import { z } from "zod";

export const LeadSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone").max(25).optional().or(z.literal("")),
  state: z.string().min(2, "Select a state").max(2),
  level: z.enum(["BSW", "MSW", "DSW", "PhD"]),
  modality: z.enum(["Online", "Campus", "Hybrid"]),
  startTimeframe: z.enum(["ASAP", "0-3 months", "3-6 months", "6-12 months", "12+ months"]),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent is required" }) }),
  page: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
});

export type LeadInput = z.infer<typeof LeadSchema>;
