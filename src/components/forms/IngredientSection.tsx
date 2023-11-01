import ButtonMore from "../buttons/ButtonMore";
import Ingredients from "./Ingredients";
import InputText from "./InputText";

function IngredientSection() {
  function handleClick() {
    alert(
      "Button clicked need have props to add (more) ingredients and section!"
    );
  }
  return (
    <>
      <h2>Ingredients</h2>
      <InputText name="Section Title" placeholder=" ex: Pie Crust" />
      <Ingredients />
      <Ingredients />
      <ButtonMore name="Ingredient" onClick={handleClick} />
      <ButtonMore name="Section" onClick={handleClick} />
    </>
  );
}
export default IngredientSection;
