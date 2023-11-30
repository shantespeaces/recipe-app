interface ButtonSubmitProps {
  name: string;

  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

function ButtonSubmit({ name, type, onClick }: ButtonSubmitProps) {
  return (
    <div className="d-grid gap-2 col-6 mx-auto p-3">
      <button
        className="btn btn-primary btn-lg custom-button d-flex justify-content-center align-items-center p-3"
        type={type}
        onClick={onClick}
      >
        {name}
        {/* <span className="material-symbols-outlined ms-2">add_circle</span> */}
      </button>
    </div>
  );
}

export default ButtonSubmit;
