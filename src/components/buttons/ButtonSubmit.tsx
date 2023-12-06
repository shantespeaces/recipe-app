interface ButtonSubmitProps {
  name: string;

  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

function ButtonSubmit({ name, type, onClick }: ButtonSubmitProps) {
  return (
    <div className="d-grid">
      <button
        className="btn btn-lg custom-button"
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
