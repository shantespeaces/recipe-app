interface InputTextProps {
  name: string;
  placeholder: string;
}

const InputText: React.FC<InputTextProps> = ({ name, placeholder }) => {
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
};

export default InputText;
