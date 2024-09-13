import { Dispatch, SetStateAction, useState } from "react";
import Button from "./button";
import { TaskList } from "../page";
import { v4 as uuid } from "uuid";

interface AddTaskProps {
  setTasks: Dispatch<SetStateAction<TaskList[]>>;
}

export default function AddTask({ setTasks }: AddTaskProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    // trim unnecessary whitespaces
    if (title.trim().length == 0) {
      alert("Error: Title cannot be empty");
      return;
    }

    const randomId = uuid();
    const stored = localStorage.getItem("tasks") || "";
    let taskList: TaskList[] = [];
    if (stored) taskList = JSON.parse(stored) || [];

    const newTask: TaskList = {
      id: randomId,
      title,
      description,
      status: "pending",
    };

    taskList.push(newTask);
    setTasks(taskList);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="border border-black rounded-lg w-full p-2 space-y-2">
      <input
        className="p-2 w-full focus:outline-none border-b rounded-sm border-b-slate-500"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="p-2 w-full rounded-md text-sm focus:outline-none focus:outline-1 focus:outline-slate-500"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button name="Add" className="h-8" onClick={handleAddTask} />
    </div>
  );
}
