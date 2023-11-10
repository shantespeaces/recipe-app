import { useState, useEffect } from "react";
import axios from "axios";

interface SelectProps {
  heading: string;
  selectedOption?: number; // Allow passing a selected option
  onSelectOption: (optionId: number) => void; // Callback when an option is selected
  endpoint: string; // API endpoint for fetching options
}

interface Option {
  id: number;
  name: string;
}

type Options = Option[];

function Select({
  heading,
  selectedOption,
  onSelectOption,
  endpoint,
}: SelectProps) {
  const [options, setOptions] = useState<Options>([]);

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => setOptions(response.data))
      .catch((error) => console.error("Error fetching options:", error));
  }, [endpoint]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptionId = parseInt(event.target.value, 10);
    onSelectOption(selectedOptionId);
  };

  return (
    <>
      <label htmlFor="optionSelect" className="form-label">
        <h3>{heading}</h3>
      </label>
      <select
        id="optionSelect"
        className="form-select"
        aria-label={`Select ${heading.toLowerCase()}`}
        value={selectedOption || ""}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Select {heading.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
