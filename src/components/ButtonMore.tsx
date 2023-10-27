interface ButtonMoreProps {
  name: string;
}

const ButtonMore: React.FC<ButtonMoreProps> = ({ name }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => console.log("clicked")}
      >
        {name}
        <span className="material-symbols-outlined">add_circle</span>
      </button>
    </>
  );
};

export default ButtonMore;
