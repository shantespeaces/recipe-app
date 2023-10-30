interface ButtonMoreProps {
  name: string;
}

function ButtonMore({ name }: ButtonMoreProps) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary custom-more"
        onClick={() => console.log("clicked")}
      >
        {name}
        <span className="material-symbols-outlined">add_circle</span>
      </button>
    </>
  );
}

export default ButtonMore;
