interface CounterProps {
  heading: string;
  value: number;
  onChange: (value: number) => void;
  icon: string;
  error?: string;
  labelClassName: string;
  htmlFor: string;
  labelId: string;
}

const Counter: React.FC<CounterProps> = ({
  heading,
  value,
  onChange,
  icon,
  error,
  labelClassName,
  htmlFor,
  labelId,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value);
    if (!isNaN(inputValue)) {
      onChange(inputValue);
    } else {
      onChange(0);
    }
  };

  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <div className="position-relative">
      <div className="row align-items-center">
        <div className="col-auto">
          <label htmlFor={htmlFor} className={labelClassName} id={labelId}>
            <h3 className="mb-0 me-2">{heading}</h3>
          </label>
        </div>
        <div className="col-auto">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "36px" }}
          >
            {icon}
          </span>
        </div>
      </div>
      <div className="input-group align-items-center">
        <div className="position-absolute end-0 top-0 bottom-0 d-flex align-items-center pe-4">
          <button
            className="btn btn-secondary rounded-circle me-4 d-flex justify-content-center align-items-center"
            type="button"
            onClick={handleDecrement}
            style={{ width: "34px", height: "34px" }}
          >
            <span style={{ fontSize: "34px", paddingBottom: "5px" }}>-</span>
          </button>
          <button
            className="btn btn-secondary rounded-circle d-flex justify-content-center align-items-center"
            type="button"
            onClick={handleIncrement}
            style={{ width: "34px", height: "34px" }}
          >
            <span style={{ fontSize: "34px", paddingBottom: "5px" }}>+</span>
          </button>
        </div>
        <input
          type="text"
          className={`form-control rounded-5 text-left px-4${
            error ? "is-invalid" : ""
          }`}
          value={value}
          style={{
            paddingLeft: "50px",
            paddingRight: "90px",
            height: "50px",
            fontSize: "24px",
          }}
          onChange={handleInputChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

export default Counter;
