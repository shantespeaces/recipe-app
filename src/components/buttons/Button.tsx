interface ButtonProps {
  name: string;
  onClick?: () => void;
}
function Button({ name, onClick }: ButtonProps) {
  return (
    <>
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
    </>
  );
}

export default Button;
