import { z } from "zod";
import { TaskCreateSchema, TaskEditSchema } from "@/lib/task.lib";

export type TaskCreateSchemaType = z.infer<typeof TaskCreateSchema>;

export type TaskEditSchemaType = z.infer<typeof TaskEditSchema>;