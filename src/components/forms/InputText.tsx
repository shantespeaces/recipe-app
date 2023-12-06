import { ChangeEvent } from "react";
interface InputTextProps {
  name?: string;
  placeholder: string;
  value?: string; // Make the value prop optional
  type?: string; // Make the value prop optional
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputText({
  name,
  placeholder,
  value,
  type,
  onChange,
}: InputTextProps) {
  return (
    <>
      {name && (
        <label htmlFor="TextInput" className="form-label">
          <h3>{name}</h3>
        </label>
      )}
      <input
        type={type}
        className="form-control form-control-lg rounded-5"
        id="TextInput"
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
