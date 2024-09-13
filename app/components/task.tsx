import {
  EllipsisHorizontalIcon,
  XCircleIcon,
  CheckCircleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { TaskList } from "../page";
import EditTask from "./editTask";

function TaskControl({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center text-slate-400 ">
      {children}
      <p className="capitalize">{label}</p>
    </div>
  );
}

export interface TaskProps {
  id: string;
  title: string;
  description: string;
  status: "pending" | "completed";
  tasks: TaskList[];
  setTasks: Dispatch<SetStateAction<TaskList[]>>;
  onDelete: () => void;
  onToggle: () => void;
}

export default function Task({
  id,
  title,
  description,
  status,
  tasks,
  setTasks,
  onDelete,
  onToggle,
}: TaskProps) {
  const [showModal, setShowModal] = useState(false);

  function onEdit() {
    setShowModal(true);
  }

  return (
    <div className="flex flex-row rounded-md border-black border p-2 m-2 ">
      <div className="flex flex-col flex-1">
        <p className="text-bold text-md">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
      {showModal && (
        <EditTask
          id={id}
          title={title}
          description={description}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          setShowModal={setShowModal}
        />
      )}
      <div className="flex flex-row align-text-bottom space-x-2 text-xs">
        <TaskControl label="Edit">
          <PencilSquareIcon
            onClick={onEdit}
            className="size-7 text-yellow-200"
          />
        </TaskControl>
        <TaskControl label={status}>
          {status == "pending" ? (
            <EllipsisHorizontalIcon
              onClick={onToggle}
              className="size-7 text-blue-500"
            />
          ) : (
            <CheckCircleIcon
              onClick={onToggle}
              className="size-7 text-green-600"
            />
          )}
        </TaskControl>
        <TaskControl label="Delete">
          <XCircleIcon onClick={onDelete} className="size-7 text-red-500" />
        </TaskControl>
      </div>
    </div>
  );
}
