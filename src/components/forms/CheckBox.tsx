import React, { useState, useEffect } from "react";
import axios from "axios";

interface CheckBoxProps {
  title: string;
  endpoint: string;
  onCheckBoxChange: (selectedOptions: number[]) => void;
}

interface Option {
  id: number;
  name: string;
}

function CheckBox({ title, endpoint, onCheckBoxChange }: CheckBoxProps) {
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => setOptions(response.data))
      .catch((error) => console.error("Error fetching options:", error));
  }, [endpoint]);

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const optionId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelectedOptions((prevOptions) => [...prevOptions, optionId]);
    } else {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((id) => id !== optionId)
      );
    }
  };

  // Notify the parent component about the selected checkbox options
  useEffect(() => {
    onCheckBoxChange(selectedOptions);
  }, [selectedOptions, onCheckBoxChange]);

  return (
    <>
      <div>
        <h3>{title}</h3>
        <div className="row">
          {options.map((option) => (
            <div key={option.id} className="col-md-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={option.id}
                  id={`flexCheckDefault_${option.id}`}
                  onChange={handleCheckBoxChange}
                />
                <label
                  className="form-check-label"
                  htmlFor={`flexCheckDefault_${option.id}`}
                >
                  {option.name}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CheckBox;
