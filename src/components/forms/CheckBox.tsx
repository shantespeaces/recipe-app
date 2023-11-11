import axios from "axios";
import { useState, useEffect } from "react";

interface CheckBoxProps {
  title: string;
  endpoint: string;
}
interface Option {
  id: number;
  name: string;
}

type Options = Option[];

function CheckBox({ title, endpoint }: CheckBoxProps) {
  const [options, setOptions] = useState<Options>([]);

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => setOptions(response.data))
      .catch((error) => console.error("Error fetching options:", error));
  }, [endpoint]);
  return (
    <>
      <h3>{title}</h3>
      <div className="form-check">
        {options.map((option) => (
          <div key={option.id}>
            <input
              className="form-check-input"
              type="checkbox"
              value={option.id}
              id={`flexCheckDefault_${option.id}`}
            />
            <label
              className="form-check-label"
              htmlFor={`flexCheckDefault_${option.id}`}
            >
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default CheckBox;
