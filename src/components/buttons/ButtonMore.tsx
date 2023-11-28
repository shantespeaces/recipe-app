interface ButtonMoreProps {
  name: string;
  onClick?: () => void;
}

function ButtonMore({ name, onClick }: ButtonMoreProps) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary custom-more d-flex align-items-center"
        onClick={onClick}
      >
        <span className="material-symbols-outlined me-2">add_circle</span>
        {name}
      </button>
    </>
  );
}

export default ButtonMore;
