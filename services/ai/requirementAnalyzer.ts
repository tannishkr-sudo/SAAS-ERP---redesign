import { z } from "zod";
/** Provider boundary: replace fallback with a structured OpenAI response in production. */
export const RequirementInput = z.object({ requirement: z.string().min(20).max(10_000) });
export type RequirementInput = z.infer<typeof RequirementInput>;
