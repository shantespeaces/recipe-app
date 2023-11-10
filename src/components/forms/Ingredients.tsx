import InputText from "./InputText";

import NumberInput from "./Counter";

import Select from "./Select";

function Ingredients() {
  return (
    <>
      <InputText name="Ingredients" placeholder=" ex: flour" />
      <NumberInput heading="Qty" />
      <Select
        heading="Measurement"
        onSelectOption={(measurementId) =>
          console.log(`Selected measurement: ${measurementId}`)
        }
        endpoint="http://localhost:8000/api/measurements"
      />
    </>
  );
}
export default Ingredients;
