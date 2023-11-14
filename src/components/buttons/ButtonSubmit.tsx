import { Link } from "react-router-dom";
interface ButtonProps {
  name: string;
  route?: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

function Button({ name, type, onClick }: ButtonProps) {
  return (
    <div className="d-grid gap-2 col-6 mx-auto">
      <button
        className="btn btn-primary custom-button"
        type={type}
        onClick={onClick}
      >
        {name}
        <span className="material-symbols-outlined">add_circle</span>
      </button>
    </div>
  );
}

export default Button;
