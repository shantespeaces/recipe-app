interface CounterProps {
  heading: string;
  value: number;
  onChange: (value: number) => void;
}

function Counter({ heading, value, onChange }: CounterProps) {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <div className="input-group align-items-center">
      <label htmlFor="formGroupExampleInput" className="form-label">
        <h3 className="mb-0 me-2"> {heading}</h3>
      </label>
      <div className="d-flex align-items-center">
        <span className="input-group-btn">
          <button
            className="btn btn-secondary me-2"
            type="button"
            onClick={handleDecrement}
          >
            -
          </button>
        </span>
        <input
          type="text"
          className="form-control rounded-start rounded-end text-center me-2"
          value={value}
          readOnly
        />
        <span className="input-group-btn">
          <button
            className="btn btn-secondary me-2"
            type="button"
            onClick={handleIncrement}
          >
            +
          </button>
        </span>
      </div>
    </div>
  );
}

export default Counter;
