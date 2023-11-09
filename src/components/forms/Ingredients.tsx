import InputText from "./InputText";

import NumberInput from "./Counter";

import Select from "./Select";

function Ingredients() {
  return (
    <>
      <InputText name="Ingredients" placeholder=" ex: flour" />
      <NumberInput heading="Qty" />
      <Select heading="Measurement" />
    </>
  );
}
export default Ingredients;
