import { Task } from "../page";
import { Dispatch, SetStateAction } from "react";
import TaskForm from "@/app/components/taskForm";

export default function FormContainer({
  setTodos,
}: {
  setTodos: Dispatch<SetStateAction<Task[]>>;
}) {
  return (
    <div className="responsive-padding shadow-card flex w-full flex-col space-y-4 rounded-lg bg-white sm:w-3/5 dark:bg-gray-800">
      <h1 className="responsive-text text-lg font-bold text-gray-800 dark:text-gray-100">
        Add New Task
      </h1>
      <TaskForm setTodos={setTodos} />
    </div>
  );
}
