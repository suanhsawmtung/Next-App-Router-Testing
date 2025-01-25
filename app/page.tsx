import TaskCreateForm from "@/components/TaskCreateForm";
import { getTasks } from "@/actions/task.action";
import dynamic from "next/dynamic";
const TaskList = dynamic(() => import ("../components/TaskList"), {
  loading: () => <p>Loading client component...</p>,
});

export default async function Home() {

  const tasks = await getTasks();

  return (
    <div className="w-full min-h-screen bg-gray-400 flex justify-center pt-40">
      <main className="w-full px-4 flex flex-col justify-start items-center gap-2">
        <h1 className="text-black text-xl md:text-3xl font-bold">Next 14 ToDo App</h1>
        <div className="w-full sm:w-2/3 lg:w-1/3 p-6 flex flex-col justify-start gap-4 bg-white rounded-lg shadow">

          <TaskCreateForm />

          {tasks?.length > 0 ? (
            <TaskList tasks={tasks} />
          ) : (
            <p>Woohooo, nothing left todos!</p>
          )}

        </div>
      </main>
    </div>
  );
}
