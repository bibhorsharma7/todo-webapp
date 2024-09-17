import { Task } from "../page";
import { useForm } from "react-hook-form";
import { Button, Textarea } from "@tremor/react";
import { fetchTasks, updateTask } from "@/lib/utils";
import { RiCloseCircleFill } from "@remixicon/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormValueType } from "./taskForm";
import { Dispatch, SetStateAction, useState } from "react";

interface EditTaskProps {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  setTodos: Dispatch<SetStateAction<Task[]>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function EditTask({
  id,
  title,
  description,
  completed,
  setTodos,
  setShowModal,
}: EditTaskProps) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSave = async () => {
    // no action if there is no changes
    if (newTitle == title && newDescription == description) return;

    await updateTask({
      id: id,
      title: newTitle,
      description: newDescription,
      completed: completed,
    });

    setShowModal(false);
    const tasks = await fetchTasks();
    setTodos(tasks);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueType>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="text-black">
      <div className="flex w-full flex-row space-betweeen mb-8">
        <h1 className="text-lg font-bold flex-auto">Edit Task</h1>
        <RiCloseCircleFill
          color="red"
          className="size-7 flex-none"
          onClick={() => setShowModal(false)}
        />
      </div>
      <div className="mt-4">
        <form onSubmit={handleSubmit(handleSave)}>
          <p>Title</p>
          <input
            {...register("task")}
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="focus:outline-none w-full border rounded-md px-2 border-slate-500"
          />
          {errors.task && (
            <span className="text-red-600 text-sm">
              {errors.task.message as string}
            </span>
          )}
          <div>
            <p>Description</p>
            <Textarea
              {...register("description")}
              className="rounded-md"
              value={newDescription}
              placeholder="Description... (optional)"
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="mt-10 px-1 w-full bg-blue-500 text-white hover:bg-blue-700"
          >
            Update Task
          </Button>
        </form>
      </div>
    </div>
  );
}
