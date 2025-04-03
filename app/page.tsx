"use client";

import { fetchTasks } from "@/lib/utils";
import { useState, useEffect } from "react";
import FormContainer from "./containers/formContainer";
import TasksContainer from "./containers/tasksContainer";
import { signOut } from "next-auth/react";

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Task[]>([]);

  useEffect(() => {
    async function getData() {
      const tasks = await fetchTasks();
      setTodos(tasks);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center pt-20">
      <button
        className="rounded-lg border bg-blue-800 px-6 py-2 text-center text-white"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
      <FormContainer setTodos={setTodos} />
      <TasksContainer todos={todos} setTodos={setTodos} />
    </div>
  );
}
