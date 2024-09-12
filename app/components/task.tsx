import {
  EllipsisHorizontalIcon,
  XCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

interface TaskProps {
  id: number;
  title: string;
  description: string;
  status: "pending" | "completed";
}

export default function Task({ title, description, status }: TaskProps) {
  return (
    <div className="flex flex-row rounded-md border-black border p-2 m-2 ">
      <div className="flex flex-col flex-1">
        <p className="text-bold text-md">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <div className="flex flex-col text-xs">
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
          onClick={() => console.log("Delete task clicked")}
        >
          <XCircleIcon className="size-6 text-red-500" />
        </div>
      </div>
    </div>
  );
}
