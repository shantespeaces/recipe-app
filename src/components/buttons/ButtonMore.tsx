interface ButtonMoreProps {
  name: string;
  onClick?: () => void;
}

function ButtonMore({ name, onClick }: ButtonMoreProps) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary custom-more"
        onClick={onClick}
      >
        {name}
        <span className="material-symbols-outlined">add_circle</span>
      </button>
    </>
  );
}

export default ButtonMore;
