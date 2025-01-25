import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskEditSchemaType } from "@/types/task.type";
import { TaskEditSchema } from "@/lib/task.lib";
import { Task } from "@prisma/client";
import { updateTask } from "@/actions/task.action";
import ErrorMessage from "@/components/ErrorMessage";

const TaskEditForm = ({ task, setEditId }: {
    task: Task;
    setEditId: (id: number | null) => void
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError
    } = useForm<TaskEditSchemaType>({
        resolver: zodResolver(TaskEditSchema),
        defaultValues: task
    });

    const onSubmit = async(data: TaskEditSchemaType) => {
        const response = await updateTask(data);
        if(!response?.errors) setEditId(null);
        else {
            response.errors.forEach(error => {
                setError(error.name, { type: "server", message: error.message })
            });
        }
    };

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="w-full flex justify-between items-start"
        >
            <div>
                <textarea 
                    rows={4}
                    {...register("title")}
                    placeholder="New task..."
                    className="border border-gray-300 text-sm rounded w-full whitespace-normal break-words p-2.5" 
                />
                { (errors.title?.message || errors.id?.message) && (
                    <ErrorMessage 
                        message={errors.title?.message}
                        secondMessage={errors.id?.message}
                    />
                )}
            </div>

            <div className="flex justify-end items-center gap-2">
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-2 disabled:bg-blue-200 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5"
                >
                    { isSubmitting ? 'Updating...' : 'Update' }
                </button>

                <button 
                    type="button" 
                    onClick={() => setEditId(null)}
                    disabled={isSubmitting}
                    className="text-black hover:bg-gray-200 border border-gray-300 font-medium rounded text-sm px-5 py-2.5"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default TaskEditForm;