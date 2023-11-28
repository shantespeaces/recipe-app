import { ChangeEvent } from "react";
interface InputTextareaProps {
  heading: string;
  placeholder: string;

  value?: string; // Make the value prop optional
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

function InputTextarea({
  heading,
  value,
  onChange,
  placeholder,
}: InputTextareaProps) {
  return (
    <>
      <label htmlFor="formGroupExampleInput" className="form-label">
        <h3>{heading}</h3>
      </label>
      <textarea
        className="form-control rounded-5 p-3"
        id="formGroupExampleInput2"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ fontSize: "18px" }}
      ></textarea>
    </>
  );
}

export default InputTextarea;
