import { ChangeEvent } from "react";
interface InputTextProps {
  name?: string;
  placeholder: string;
  value?: string; // Make the value prop optional
  type?: string; // Make the value prop optional
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  labelClassName: string;
  id: string;
  htmlFor: string;
}

function InputText({
  name,
  placeholder,
  value,
  type,
  onChange,
  error,
  labelClassName,
  id,
  htmlFor,
}: InputTextProps) {
  return (
    <>
      {name && (
        <label htmlFor={htmlFor} className={labelClassName}>
          <h3>{name}</h3>
        </label>
      )}
      <input
        type={type}
        className={`form-control form-control-lg rounded-5 ${
          error ? "is-invalid" : ""
        }`}
        id={id}
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
