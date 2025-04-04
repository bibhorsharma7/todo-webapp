import { Task } from "@/app/page";
import TaskItem from "../components/taskItem";
import { Dispatch, SetStateAction } from "react";
import { updateTask, deleteTask, fetchTasks } from "@/lib/utils";

export default function TasksContainer({
  todos,
  setTodos,
}: {
  todos: Task[];
  setTodos: Dispatch<SetStateAction<Task[]>>;
}) {
  const onDeleteTask = async (id: string) => {
    await deleteTask(id);
    const tasks = await fetchTasks();
    setTodos(tasks);
  };

  const onToggleStatus = async (todo: Task) => {
    const ntask = { ...todo, completed: !todo.completed };
    await updateTask(ntask);
    const tasks = await fetchTasks();
    setTodos(tasks);
  };

  return (
    <div className="shadow-card m-6 w-full space-y-4 rounded-lg bg-white p-6 sm:m-10 sm:w-4/5 sm:p-12 dark:bg-gray-800">
      {todos && todos.length > 0 && (
        <h1 className="responsive-text text-lg font-bold text-gray-800 dark:text-gray-100">
          To Dos:
        </h1>
      )}
      {todos &&
        todos.length > 0 &&
        todos.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              completed={task.completed}
              description={task.description}
              setTasks={setTodos}
              onDelete={() => onDeleteTask(task.id)}
              onToggle={() => onToggleStatus(task)}
            />
          );
        })}
    </div>
  );
}
