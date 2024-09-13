import { Dispatch, SetStateAction, useState } from "react";
import { TaskList } from "../page";
import { XCircleIcon } from "@heroicons/react/24/outline";
import Button from "./button";

interface EditTaskProps extends TaskList {
  tasks: TaskList[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setTasks: Dispatch<SetStateAction<TaskList[]>>;
}

export default function EditTask({
  id,
  title,
  description,
  status,
  tasks,
  setTasks,
  setShowModal,
}: EditTaskProps) {
  const [eTitle, setETitle] = useState(title);
  const [eDescription, setEDescription] = useState(description);

  function handleSave() {
    // input validation
    if (eTitle.trim().length == 0) {
      alert("Error: Title cannot be empty");
      return;
    }

    const ntasks = tasks.map((task) => {
      if (task.id == id) {
        return { ...task, title: eTitle, description: eDescription };
      }
      return task;
    });
    setTasks(ntasks);
    setShowModal(false);
  }

  return (
    <div className="absolute top-0 left-0 flex items-center justify-center bg-slate-800/40 w-screen h-screen backdrop-blur-sm">
      <div className="w-1/2 h-1/2 border border-black bg-white rounded-lg p-4 items-center flex flex-col">
        <div className="flex w-full flex-row space-betweeen mb-4">
          <h1 className="text-lg font-bold flex-auto">Edit Task</h1>
          <XCircleIcon
            className="size-8 flex-none"
            onClick={() => setShowModal(false)}
          />
        </div>
        <div className="mt-4">
          <div className="flex flex-row space-x-2">
            <p>Title</p>
            <input
              className="focus:outline-none border rounded-md px-2 border-slate-500"
              type="text"
              value={eTitle}
              onChange={(e) => setETitle(e.target.value)}
            />
          </div>
          <div>
            <p>Description</p>
            <textarea
              className="p-1 w-full rounded-md focus:outline-none border border-slate-500"
              value={eDescription}
              onChange={(e) => setEDescription(e.target.value)}
            />
          </div>
          <div>
            <Button name="Save" onClick={handleSave} />
          </div>
        </div>
      </div>
    </div>
  );
}
