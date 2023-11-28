import { ChangeEvent } from "react";
interface InputTextProps {
  name: string;
  placeholder: string;
  value?: string; // Make the value prop optional
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputText({ name, placeholder, value, onChange }: InputTextProps) {
  return (
    <>
      <label htmlFor="formGroupExampleInput" className="form-label">
        <h3>{name}</h3>
      </label>
      <input
        type="text"
        className="form-control rounded-5 p-3"
        id="formGroupExampleInput"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          height: "50px",
          fontSize: "18px",
        }}
      />
    </>
  );
}

export default InputText;
