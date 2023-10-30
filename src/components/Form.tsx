import InputText from "./forms/InputText";
import InputTextarea from "./forms/InputTextarea";
import NumberInput from "./forms/NumberInput";
import ImageUpload from "./forms/ImageUpload";
import Select from "./forms/Select";
import CheckBoxContainer from "./forms/CheckBoxContainer";
import IngredientSection from "./forms/IngredientSection";
import Button from "./Button";

function Form() {
  return (
    <form action="" className="row g-3">
      <section className="intro">
        <div className="mb-3"></div>
        <InputText name="Recipe Title" placeholder=" ex: Annie's Apple Pie" />

        <InputTextarea heading="Description" />
        <NumberInput heading="Serves" />
        <NumberInput heading="Time" />
        <ImageUpload />
      </section>
      <section className="categories">
        <Select heading="Categories" />
        <CheckBoxContainer title="Sub-categorie" />
      </section>
      <section className="Ingredients">
        <IngredientSection />
      </section>
      <Button name="Add Recipe" />
    </form>
  );
}
export default Form;
