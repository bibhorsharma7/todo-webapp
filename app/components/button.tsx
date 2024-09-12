interface ButtonProps {
  name: string;
  onClick?: () => void;
}
export default function Button({ name, onClick }: ButtonProps) {
  return (
    <div
      className="p-2 rounded-md cursor-pointer border-black bg-blue-800 text-white hover:bg-blue-900"
      onClick={() => onClick}
    >
      <p className="capitalize">{name}</p>
    </div>
  );
}
