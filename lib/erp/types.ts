import { z } from "zod";

export const EntitySchema = z.object({ name:z.string(), plural:z.string(), fields:z.array(z.object({name:z.string(), type:z.enum(["text","number","currency","date","select","status"]), required:z.boolean().default(false)})), reason:z.string() });
export const ModuleSchema = z.object({ id:z.string(), name:z.string(), icon:z.string(), entities:z.array(EntitySchema), reason:z.string() });
export const BlueprintSchema = z.object({ business:z.object({name:z.string(), industry:z.string(), summary:z.string()}), modules:z.array(ModuleSchema), roles:z.array(z.object({name:z.string(), permissions:z.array(z.string())})), workflows:z.array(z.object({name:z.string(), steps:z.array(z.string())})), recommendations:z.array(z.object({name:z.string(), why:z.string(), impact:z.enum(["High","Medium","Low"]), dependency:z.string(), enabled:z.boolean()})) });
export type Blueprint = z.infer<typeof BlueprintSchema>;
