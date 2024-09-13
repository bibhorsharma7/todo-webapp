import { Dispatch, SetStateAction, useState } from "react";
import Button from "./button";
import { TaskList } from "../page";

interface AddTaskProps {
  setTasks: Dispatch<SetStateAction<TaskList[]>>;
}

export default function AddTask({ setTasks }: AddTaskProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    // input validation
    if (title.trim().length == 0) {
      alert("Error: Title cannot be empty");
      return;
    }

    // random id
    const num = Math.floor(Math.random() * 100);
    const stored = localStorage.getItem("tasks") || "";
    let tasks: TaskList[] = stored == "" ? [] : JSON.parse(stored) || [];

    tasks.push({
      id: num.toString() + title.substring(0, 3), // set random two digit number + first 3 characters of the title as id
      title: title,
      status: "pending",
      description: description,
    });

    setTasks(tasks);
  };

  return (
    <div className="border border-black rounded-lg w-full p-2 m-2 space-y-2">
      <input
        className="p-2 w-full focus:outline-none border-b rounded-sm border-b-slate-500"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="p-2 w-full rounded-md focus:outline-none focus:outline-1 focus:outline-slate-500"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button name="Add" className="h-8" onClick={handleAddTask} />
    </div>
  );
}
