"use client";

import { useState } from "react";
import AddTask from "./components/addTask";
import Task from "./components/task";

interface TaskList {
  id: number;
  title: string;
  description: string;
  status: "pending" | "completed";
}


export default function Home() {
  const taskList: TaskList[] = [
    { id: 0, title: "shopping", status: "pending", description: "shopping on 5th Ave" },
    { id: 1, title: "homework", status: "pending", description: "science homework e=mc2" },
    { id: 2, title: "clean house", status: "completed", description: "deep clean kitchen" },
  ];

  const [tasks, setTasks] = useState(taskList);


  return (
    <div className="flex flex-1 flex-col items-center pt-20">
      <div className="flex flex-row p-2 m-2">
        <AddTask />
      </div>
      <div className="m-8 p-10 w-2/5">
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              status={task.status}
              description={task.description}
              onDelete={() => {
                const ntasks = tasks.filter(t => t.id !== task.id)
                setTasks(ntasks)
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
