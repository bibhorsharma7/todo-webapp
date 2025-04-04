"use client";

import { fetchTasks } from "@/lib/utils";
import { useState, useEffect } from "react";
import FormContainer from "./containers/formContainer";
import TasksContainer from "./containers/tasksContainer";
import { signOut, useSession } from "next-auth/react";
import { FiLogOut, FiUser } from "react-icons/fi";

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export default function Home() {
  const { data: session } = useSession();
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
        <div className="flex items-center space-x-4">
          {session?.user && (
            <div className="flex items-center space-x-2 text-sm">
              <FiUser size={20} className="text-white" />
              <span>{session.user.name}</span>
            </div>
          )}
          <button
            className="rounded-lg bg-blue-600 p-2 text-sm font-medium text-white shadow hover:bg-blue-700"
            onClick={() => signOut()}
            title="Sign Out"
          >
            <FiLogOut size={20} />
          </button>
        </div>
      </div>
      <div className="container flex flex-1 flex-col items-center pt-10 sm:pt-20">
        <FormContainer setTodos={setTodos} />
        <TasksContainer todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
