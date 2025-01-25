"use client";

import { Task } from "@prisma/client";
import TaskItem from "@/components/TaskItem";
import { useState } from "react";
import { deleteTask } from "@/actions/task.action";

const TaskList = ({ tasks }: {
    tasks: Task[]
}) => {
    const [editId, setEditId] = useState<number | null>(null);

    const removeTask = async (id: number) => {
        await deleteTask(id);
    }

    return (
        <ul className="flex flex-col justify-start gap-4">
            {tasks.map(task => (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    editId={editId}
                    setEditId={setEditId}
                    removeTask={removeTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;

