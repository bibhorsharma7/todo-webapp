import { Task } from "../page";
import { Dispatch, SetStateAction } from "react";
import TaskForm from "@/app/components/taskForm";

export default function FormContainer({
  setTodos,
}: {
  setTodos: Dispatch<SetStateAction<Task[]>>;
}) {
  return (
    <div className="flex w-3/5 flex-col">
      <h1 className="text-md font-bold">Add New Task</h1>
      <TaskForm setTodos={setTodos} />
    </div>
  );
}
