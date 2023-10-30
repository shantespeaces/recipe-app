interface InputTextareaProps {
  heading: string;
}

function InputTextarea({ heading }: InputTextareaProps) {
  return (
    <>
      <label htmlFor="formGroupExampleInput" className="form-label">
        <h3>{heading}</h3>
      </label>
      <textarea
        className="form-control"
        id="formGroupExampleInput2"
        placeholder=" Describe your dish!"
      ></textarea>
    </>
  );
}

export default InputTextarea;
