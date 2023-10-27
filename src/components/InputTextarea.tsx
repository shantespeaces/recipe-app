interface InputTextareaProps {
  name: string;
}

const InputTextarea: React.FC<InputTextareaProps> = ({ name }) => {
  return (
    <>
      <label htmlFor="formGroupExampleInput" className="form-label">
        <h3>{name}</h3>
      </label>
      <textarea
        className="form-control"
        id="formGroupExampleInput2"
        placeholder=" Describe your dish!"
      ></textarea>
    </>
  );
};

export default InputTextarea;
