interface ButtonProps {
  name: string;
  className?: string;
  onClick: () => void;
}

export default function Button({ name, onClick, className }: ButtonProps) {
  return (
    <div
      className={`${className ?? ""} text-center rounded-md cursor-pointer border-black bg-green-800 text-white hover:bg-green-700`}
      onClick={onClick}
    >
      {name}
    </div>
  );
}
