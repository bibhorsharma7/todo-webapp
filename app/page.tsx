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
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800 antialiased dark:bg-gray-900 dark:text-gray-100">
      <div className="flex h-16 w-full items-center justify-between bg-gradient-to-r from-orange-400 to-orange-600 px-6 text-2xl font-extrabold text-white shadow-md">
        <span>ToDos App</span>
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
      <div className="container flex flex-1 flex-col items-center pt-10 sm:pt-20">
        <FormContainer setTodos={setTodos} />
        <TasksContainer todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
