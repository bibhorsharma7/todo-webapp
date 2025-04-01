import { z } from "zod";
import { Task } from "../page";
import { addTask, fetchTasks } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";
import { TextInput, Textarea, Button } from "@tremor/react";

export const formSchema = z.object({
  task: z.string().min(1, { message: "Task title is required." }),
  description: z.string(),
});

export type FormValueType = z.infer<typeof formSchema>;

export default function TaskForm({
  setTodos,
}: {
  setTodos: Dispatch<SetStateAction<Task[]>>;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueType>({
    resolver: zodResolver(formSchema),
  });

  const handleAddTask = async () => {
    // Do not add task if form has errors
    if (errors.task || errors.description) return;

    await addTask(title, description);
    const tasks = await fetchTasks();
    setTodos(tasks);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(handleAddTask)}
        className="w-full space-y-4 p-2"
      >
        <TextInput
          {...register("task")}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-md"
        />
        {errors.task && (
          <span className="text-sm text-red-600">
            {errors.task.message as string}
          </span>
        )}
        <Textarea
          {...register("description")}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description... (optional)"
          className="rounded-md"
        />
        <div className="flex flex-row-reverse">
          <Button
            type="submit"
            className="w-full bg-blue-500 px-1 text-white hover:bg-blue-700"
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
