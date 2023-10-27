import { useState } from "react";
interface NumberInputProps {
  heading: string;
}

function NumberInput({ heading }: NumberInputProps) {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="input-group">
      <label htmlFor="formGroupExampleInput" className="form-label">
        <h3> {heading}</h3>
      </label>
      <span className="input-group-btn">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleDecrement}
        >
          -
        </button>
      </span>
      <input
        type="text"
        className="form-control text-center"
        value={count}
        readOnly
      />
      <span className="input-group-btn">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleIncrement}
        >
          +
        </button>
      </span>
    </div>
  );
}

export default NumberInput;
