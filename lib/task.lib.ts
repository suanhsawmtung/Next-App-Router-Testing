import { z } from "zod";
import { prisma } from "@/lib/prisma.lib";
import { TaskCreateSchemaType, TaskEditSchemaType } from "@/types/task.type";

export const TaskCreateSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long.")
});

export const TaskEditSchema = z.object({
    id: z.number({
        required_error: "Something went wrong",
        invalid_type_error: "Something went wrong",
    }),
    title: z.string().min(3, "Title must be at least 3 characters long.")
});

export const findTaskById = async (id: number) => {
    return await prisma.task.findUnique({
        where: { id }
    });
}

export const validateCreateFormRequest = async ({ title }: TaskCreateSchemaType) => {
    const result = TaskCreateSchema.safeParse({ title });

    let errors: {
        name: "title",
        message: string
    }[] = [];

    if(!result.success) {
        result.error.issues.forEach(error => {
            errors = [...errors, {
                name: error.path[0] as "title",
                message: error.message
            }];
        });
    }

    if(errors.length > 0){
        return {
            ok: false,
            errors
        }
    }

    return {
        ok: true,
    }
}

export const validateEditFormRequest = async ({ id, title }: TaskEditSchemaType) => {
    const result = TaskEditSchema.safeParse({ id, title });
    
    let errors: {
        name: "id" | "title",
        message: string
    }[] = [];

    if(!result.success) {
        result.error.issues.forEach(error => {
            errors = [...errors, {
                name: error.path[0] as "id" | "title",
                message: error.message
            }];
        });
    }else {
        const task = await findTaskById(id);

        if(!task){
            errors = [...errors, {
                name: "id",
                message: "Something went wrong"
            }]
        }
    }

    if(errors.length > 0){
        return {
            ok: false,
            errors
        }
    }

    return {
        ok: true,
    }
}