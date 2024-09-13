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
  // get from local storage
  const stored = localStorage.getItem("tasks") || "";
  let taskList: TaskList[] = [];
  if (stored && stored !== "") {
    taskList = JSON.parse(stored) || [];
  }

  const [tasks, setTasks] = useState(taskList);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="flex flex-1 flex-col items-center pt-20">
      <div className="flex flex-col p-2 m-2">
        <h1 className="text-md font-bold">New To-Do</h1>
        <AddTask setTasks={setTasks} />
      </div>
      <div className="m-8 p-10 w-2/5">
        <h1 className="text-md font-bold">To Dos:</h1>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              status={task.status}
              description={task.description}
              onDelete={() => {
                const ntasks = tasks.filter((t) => t.id !== task.id);
                setTasks(ntasks);
              }}
              onToggle={() => {
                const ntasks = tasks.map((t) => {
                  if (t.id == task.id) {
                    if (task.status == "completed") {
                      t.status = "pending";
                    } else {
                      t.status = "completed";
                    }
                  }
                  return t;
                });
                setTasks(ntasks);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
