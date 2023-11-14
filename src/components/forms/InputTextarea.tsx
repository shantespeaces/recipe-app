import { ChangeEvent } from "react";
interface InputTextareaProps {
  heading: string;

  value?: string; // Make the value prop optional
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

function InputTextarea({ heading, value, onChange }: InputTextareaProps) {
  return (
    <>
      <label htmlFor="formGroupExampleInput" className="form-label">
        <h3>{heading}</h3>
      </label>
      <textarea
        className="form-control"
        id="formGroupExampleInput2"
        placeholder=" Describe your dish!"
        value={value}
        onChange={onChange}
      ></textarea>
    </>
  );
}

export default InputTextarea;
