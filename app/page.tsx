"use client";

import { useEffect, useState } from "react";
import AddTask from "./components/addTask";
import Task from "./components/task";

export interface TaskList {
  id: string;
  title: string;
  description: string;
  status: "pending" | "completed";
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskList[]>([]);

  useEffect(() => {
    // save tasks to local storage if its not empty
    console.log("setting local storage");
    if (tasks.length > 0) localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const stored = localStorage.getItem("tasks") || "";
    if (stored) {
      setTasks(JSON.parse(stored) || []);
    }
  }, []);

  const onDeleteTask = (task: TaskList) => {
    const filteredTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(filteredTasks);
  };

  const onToggleTask = (id: string, status: "pending" | "completed") => {
    const updatedTasks = tasks.map((t) => {
      if (t.id == id && status == "completed") {
        t.status = "pending";
      } else if (t.id == id && status == "pending") {
        t.status = "completed";
      }
      return t;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-1 flex-col items-center pt-20">
      <div className="flex flex-col w-2/5">
        <h1 className="text-md font-bold">Add New Task</h1>
        <AddTask setTasks={setTasks} />
      </div>
      <div className="m-8 p-10 w-2/5 space-y-2">
        {tasks.length > 0 && <h1 className="text-md font-bold">To Dos:</h1>}
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              status={task.status}
              description={task.description}
              tasks={tasks}
              setTasks={setTasks}
              onDelete={() => onDeleteTask(task)}
              onToggle={() => onToggleTask(task.id, task.status)}
            />
          );
        })}
      </div>
    </div>
  );
}
