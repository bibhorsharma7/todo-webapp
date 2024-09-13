import { Dispatch, SetStateAction } from "react";
import { TaskList } from "../page";

interface EditTaskProps {
  id: string;
  title: string;
  description: string;
  tasks: TaskList[];
  setTasks: Dispatch<SetStateAction<TaskList[]>>;
}

export default function EditTask({
  id,
  title,
  description,
  setTasks,
}: EditTaskProps) {
  return (
    <div className="">
      <h1>Edit task view probably modal</h1>
    </div>
  );
}
