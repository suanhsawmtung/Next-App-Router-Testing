"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTask } from "@/actions/task.action";
import { TaskCreateSchema } from "@/lib/task.lib";
import { TaskCreateSchemaType } from "@/types/task.type";
import ErrorMessage from "@/components/ErrorMessage";

const TaskCreateForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError
    } = useForm<TaskCreateSchemaType>({
        resolver: zodResolver(TaskCreateSchema)
    });

    const onSubmit = async(data: TaskCreateSchemaType) => {
        const response = await createTask(data);
        if(!response?.errors) reset();
        else {
            response.errors.forEach(error => {
                setError(error.name, { type: "server", message: error.message })
            });
        }
    };

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="w-full flex flex-col justify-start gap-4"
        >
            <div>
                <input 
                    type="text" 
                    {...register("title")}
                    placeholder="New task..."
                    className="border border-gray-300 text-sm rounded w-full p-2.5" 
                />
                {errors.title?.message && (
                    <ErrorMessage 
                        message={errors.title?.message}
                    />
                )}
            </div>

            <button 
                type="submit" 
                disabled={isSubmitting}
                className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-2 disabled:bg-blue-200 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5"
            >
                { isSubmitting ? 'Adding...' : 'Add task' }
            </button>
        </form>
    );
}

export default TaskCreateForm;