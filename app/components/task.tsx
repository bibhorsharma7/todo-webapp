import {
  EllipsisHorizontalIcon,
  XCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

export interface TaskProps {
  id: string;
  title: string;
  description: string;
  status: "pending" | "completed";
  onDelete: () => void;
  onToggle: () => void;
}

export default function Task({ title, description, status, onDelete, onToggle }: TaskProps) {
  return (
    <div className="flex flex-row rounded-md border-black border p-2 m-2 ">
      <div className="flex flex-col flex-1">
        <p className="text-bold text-md">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex flex-row align-text-bottom space-x-2">
        <div
          onClick={onToggle}
          className="flex flex-col text-xs text-center items-center">
          {status == "pending" ? (
            <>
              <EllipsisHorizontalIcon className="size-6 text-blue-500" />
              <label>Pending</label>
            </>
          ) : (
            <>
              <CheckCircleIcon className="size-6 text-green-600" />
              <label>Completed</label>
            </>
          )}
        </div>
        <div
          className="w-auto"
          onClick={onDelete}
        >
          <XCircleIcon className="size-6 text-red-500" />
        </div>
      </div>
    </div>
  );
}
