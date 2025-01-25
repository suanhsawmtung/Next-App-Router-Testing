"use server";

import { TaskCreateSchemaType, TaskEditSchemaType } from "@/types/task.type";
import { prisma } from "@/lib/prisma.lib";
import { revalidatePath, unstable_cache } from "next/cache";
import { findTaskById, TaskCreateSchema, TaskEditSchema, validateCreateFormRequest, validateEditFormRequest } from "@/lib/task.lib";

export const getTasks = unstable_cache(
    async () => {
      return await prisma.task.findMany();
    },
    ['tasks'],
    { revalidate: 60, tags: ['tasks'] }
)

export const createTask = async ({ title }: TaskCreateSchemaType) => {
    const result = await validateCreateFormRequest({ title });
    
    if(!result.ok) return { errors: result.errors }

    await prisma.task.create({
        data: { title }
    });

    revalidatePath('/');
}

export const updateTask = async ({ id, title }: TaskEditSchemaType) => {
    const result = await validateEditFormRequest({ id, title });
    
    if(!result.ok) return { errors: result.errors }

    await prisma.task.update({
        where: { id },
        data: { title }
    });

    revalidatePath('/');
}

export const deleteTask = async (id: number) => {
    const task = await findTaskById(id);

    if(task) {
        await prisma.task.delete({
            where: { id }
        });

        revalidatePath('/');
    }
}