import { Link } from "react-router-dom";
interface ButtonProps {
  name: string;
  route: string;
}
function Button({ name, route }: ButtonProps) {
  return (
    <>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary custom-button" type="button">
          <Link className="" to={route}>
            {name}
          </Link>

          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </div>
    </>
  );
}

export default Button;
