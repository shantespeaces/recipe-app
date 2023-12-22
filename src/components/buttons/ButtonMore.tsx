interface ButtonMoreProps {
  name: string;
  onClick?: () => void;
  error?: string;
}

function ButtonMore({ name, onClick, error }: ButtonMoreProps) {
  return (
    <>
      <button
        type="button"
        className={`btn btn-primary custom-more d-flex align-items-center${
          error ? " is-invalid" : ""
        }`}
        onClick={onClick}
      >
        <span className="material-symbols-outlined me-2">add_circle</span>
        {name}
      </button>
      {error && <div className="invalid-feedback">{error}</div>}
    </>
  );
}

export default ButtonMore;
