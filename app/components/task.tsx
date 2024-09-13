import {
  XCircleIcon,
  CheckBadgeIcon as CheckSolid,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { CheckBadgeIcon as CheckOutline } from "@heroicons/react/24/outline";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { TaskList } from "../page";
import EditTask from "./editTask";

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

function TaskControl({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center text-slate-400 hover:cursor-pointer">
      {children}
      <p className="capitalize">{label}</p>
    </div>
  );
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
    <div className="flex flex-row rounded-md border-black border p-2">
      <div className="flex flex-col flex-1">
        <p className="text-bold text-md font-serif">{title}</p>
        <p className="text-xs">{description}</p>
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
            className="size-7 text-slate-600"
          />
        </TaskControl>
        <TaskControl label={status}>
          {status == "pending" ? (
            <CheckOutline onClick={onToggle} className="size-7 text-black" />
          ) : (
            <CheckSolid onClick={onToggle} className="size-7 text-blue-500" />
          )}
        </TaskControl>
        <TaskControl label="Delete">
          <XCircleIcon onClick={onDelete} className="size-7 text-red-500" />
        </TaskControl>
      </div>
    </div>
  );
}
