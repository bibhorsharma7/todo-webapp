interface TaskProps {
  id: number;
  title: string;
  description: string;
  status: "pending" | "completed";
}

export default function Task({ title, description }: TaskProps) {
  return (
    <div className="flex flex-row rounded-md border-black border p-2 m-2 ">
      <div className="flex flex-col flex-1">
        <p className="text-bold text-md">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
      <div className="w-auto flex flex-row" onClick={() => console.log("Delete task clicked")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#eb3434"
          className="w-6 h-6 hover:cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
