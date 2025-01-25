"use client";

import { Task } from "@prisma/client";
import Delete from "@/components/icons/Delete";
import Edit from "@/components/icons/Edit";
import TaskEditForm from "@/components/TaskEditForm";

const TaskItem = ({ task, editId, setEditId, removeTask }: {
    task: Task;
    editId: number | null;
    setEditId: (id: number | null) => void,
    removeTask: (id: number) => void
}) => {
    return (
        <li 
            className="w-full flex justify-between items-center border-l-4 border-blue-400 px-2 md:px-5 py-2.5 bg-white shadow-md rounded"
        >
            { editId === task.id ? (
                <TaskEditForm 
                    task={task} 
                    setEditId={setEditId}
                />
            ) : (
                <>
                    <p className="w-2/3 whitespace-normal break-words line-clamp-1">{task.title}</p>
                    <div className="flex justify-end items-center gap-4">
                        <Edit 
                            className="cursor-pointer"
                            onClick={() => setEditId(task.id)}
                        />
                        <Delete 
                            className="cursor-pointer"
                            onClick={() => removeTask(task.id)}
                        />
                    </div>
                </>
            )}
        </li>
    );
}

export default TaskItem;