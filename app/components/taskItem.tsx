import { Task } from "../page";
import { cx } from "@/lib/utils";
import EditTask from "./editTask";
import { RiPencilFill, RiCloseCircleFill } from "@remixicon/react";
import { Button, Switch, Dialog, DialogPanel } from "@tremor/react";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";

export interface TaskItemProps extends Task {
  setTasks: Dispatch<SetStateAction<Task[]>>;
  onDelete: () => void;
  onToggle: () => void;
}

function TaskControl({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center text-slate-400 hover:cursor-pointer">
      {children}
    </div>
  );
}

export default function TaskItem({
  id,
  title,
  description,
  completed,
  setTasks,
  onDelete,
  onToggle,
}: TaskItemProps) {
  const [showModal, setShowModal] = useState(false);

  function DialogHero() {
    return (
      <Dialog
        open={showModal}
        onClose={() => setShowModal(false)}
        static={true}
        className="z-10"
      >
        <DialogPanel>
          <EditTask
            id={id}
            title={title}
            description={description}
            completed={completed}
            setTodos={setTasks}
            setShowModal={setShowModal}
          />
        </DialogPanel>
      </Dialog>
    );
  }

  return (
    <div
      className={cx(
        "flex flex-row rounded-md border border-black p-2",
        completed ? "text-slate-300 line-through" : "",
      )}
    >
      <div
        className="flex flex-1 flex-col hover:cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <p className="text-bold font-serif text-2xl">{title}</p>
        <p className="text-sm">{description}</p>
      </div>

      <DialogHero />

      <div className="flex flex-row space-x-2 align-text-bottom text-xs">
        <TaskControl>
          <Button
            icon={RiPencilFill}
            onClick={() => setShowModal(true)}
            tooltip="Edit task"
            className="size-7 border-0 bg-slate-100 text-slate-600 hover:bg-slate-300"
          />
        </TaskControl>
        <TaskControl>
          <Switch
            checked={completed}
            onChange={onToggle}
            tooltip="Toggle completed status"
          />
        </TaskControl>
        <TaskControl>
          <Button
            icon={RiCloseCircleFill}
            onClick={onDelete}
            className="size-7 border-0 bg-slate-100 text-red-600 hover:bg-slate-300"
            tooltip="Delete task"
          />
        </TaskControl>
      </div>
    </div>
  );
}
