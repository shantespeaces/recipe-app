import { Link } from "react-router-dom";
interface ButtonProps {
  name: string;
  route: string;
  onClick?: () => void;
}

function Button({ name, route, onClick }: ButtonProps) {
  if (route) {
    return (
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary custom-button" type="button">
          <Link className="" to={route}>
            {name}
          </Link>
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </div>
    );
  } else if (onClick) {
    return (
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-primary custom-button"
          type="button"
          onClick={onClick}
        >
          {name}
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default Button;
