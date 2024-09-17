import { Task } from "@/app/page";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ClassName merger util
export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}

// Tremor Raw focusInput
export const focusInput = [
  // base
  "focus:ring-2",
  // ring color
  "focus:ring-blue-200 focus:dark:ring-blue-700/30",
  // border color
  "focus:border-blue-500 focus:dark:border-blue-700",
];

// Tremor Raw hasErrorInput
export const hasErrorInput = [
  // base
  "ring-2",
  // border color
  "border-red-500 dark:border-red-700",
  // ring color
  "ring-red-200 dark:ring-red-700/30",
];

// Data Fetching
export async function fetchTasks(): Promise<Task[]> {
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${url}/api/todos`, {
    method: "GET",
    next: {
      revalidate: 10,
    },
  });
  const data = await response.json();
  const tasks = data.tasks;
  return tasks;
}

export async function addTask(title: string, description: string) {
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${url}/api/todos`, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      description: description,
    }),
  });

  return response.ok;
}

export async function deleteTask(id: string) {
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${url}/api/todos/${id}`, {
    method: "DELETE",
  });

  return response.ok;
}

export async function updateTask(task: Task) {
  const { id, title, description, completed } = task;
  const data = { title: title, description: description, completed: completed };

  const url = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${url}/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  return response.ok;
}
