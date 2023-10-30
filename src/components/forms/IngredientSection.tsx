import ButtonMore from "../buttons/ButtonMore";
import Ingredients from "./Ingredients";
import InputText from "./InputText";

function IngredientSection() {
  return (
    <>
      <h2>Ingredients</h2>
      <InputText name="Section Title" placeholder=" ex: Pie Crust" />
      <Ingredients />
      <Ingredients />
      <ButtonMore name="Ingredient" />
      <ButtonMore name="Section" />
    </>
  );
}
export default IngredientSection;
