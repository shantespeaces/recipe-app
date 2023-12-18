import { ChangeEvent } from "react";
interface InputTextareaProps {
  heading: string;
  placeholder: string;
  id: string;
  value?: string; // Make the value prop optional
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  labelClassName: string;
  htmlFor: string;
}

function InputTextarea({
  heading,
  value,
  onChange,
  placeholder,
  id,
  labelClassName,
  htmlFor,
}: InputTextareaProps) {
  return (
    <>
      <label htmlFor={htmlFor} className={labelClassName}>
        <h3>{heading}</h3>
      </label>
      <textarea
        className="form-control rounded-5 p-3"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ fontSize: "18px" }}
      ></textarea>
    </>
  );
}

export default InputTextarea;
