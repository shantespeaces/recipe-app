interface InputTextProps {
  name: string;
  placeholder: string;
}

function InputText({ name, placeholder }: InputTextProps) {
  return (
    <>
      <label htmlFor="formGroupExampleInput" className="form-label">
        <h3>{name}</h3>
      </label>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder={placeholder}
      />
    </>
  );
}

export default InputText;
