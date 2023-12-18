import { useState, useEffect } from "react";
import axios from "axios";

interface SelectProps {
  heading: string;
  // Allow passing a selected option
  selectedOption?: number;
  // Callback when an option is selected
  onSelectOption: (optionId: number, optionName: string) => void;
  // API endpoint for fetching options
  endpoint: string;
  selectId: string;
  labelClassName: string;
  htmlFor: string;
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
  selectId,
  labelClassName,
  htmlFor,
}: SelectProps) {
  const [options, setOptions] = useState<Options>([]);

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => setOptions(response.data))
      .catch((error) => console.error("Error fetching options:", error));
  }, [endpoint]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //converts selected value into an interger so that the id can be passed to the callback
    const selectedOptionName = event.target.value.split(" ")[1];
    const selectedOptionId = parseInt(event.target.value.split(" ")[0], 10);

    console.log("Selected Category ID:", selectedOptionId);
    onSelectOption(selectedOptionId, selectedOptionName);
  };

  return (
    <>
      <label htmlFor={htmlFor} className={labelClassName}>
        <h3>{heading}</h3>
      </label>
      <select
        id={selectId}
        className="form-select rounded-5 "
        aria-label={`Select ${heading.toLowerCase()}`}
        value={selectedOption || ""}
        onChange={handleSelectChange}
        style={{
          height: "50px",
          fontSize: "18px",
        }}
      >
        <option value="" disabled>
          Select {heading.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id + " " + option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
