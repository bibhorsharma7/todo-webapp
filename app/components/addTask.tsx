"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Button from "./button";
import { TaskList } from "../page";

interface AddTaskProps {
  setTasks: Dispatch<SetStateAction<TaskList[]>>;
}

export default function AddTask({ setTasks } : AddTaskProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    // input validation
    if (title.trim().length == 0) {
      alert("Error: Title cannot be empty");
      return;
    }

    // random id
    const num = Math.floor(Math.random() * 100)

    const stored = localStorage.getItem('tasks') || ''
    let tasks: TaskList[] = stored == '' ? [] : (JSON.parse(stored) || [])
    
    tasks.push({
      id: num.toString() + title,
      title: title,
      status: "pending",
      description: description,
    })

    setTasks(tasks)
  };

  return (
    <div className="border border-black rounded-lg w-full p-2 m-2">
      <p className="text-sm w-full border-b border-b-black">Create a New Task</p>
      <input
        className="p-2 w-full"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="p-2 w-full"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button name="Create" className="h-8" onClick={handleAddTask} />
    </div>
  );
}
