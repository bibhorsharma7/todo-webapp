"use client";

import Task from "./components/task";
import Button from "./components/button";
import QuickAdd from "./components/quickAdd";

const tasks = [
  { id: 0, title: "shopping", description: "shopping on 5th Ave" },
  { id: 1, title: "homework", description: "science homework e=mc2" },
  { id: 2, title: "clean house", description: "deep clean kitchen" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center pt-20">
      <div className="flex flex-row p-2 m-2">
        <QuickAdd />
        <Button name="Create New Task" />
      </div>
      <div className="m-8 p-10 w-2/5">
        {tasks.map((task, index) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
            />
          );
        })}
      </div>
    </div>
  );
}
