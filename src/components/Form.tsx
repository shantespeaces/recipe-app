import InputText from "./InputText";
import InputTextarea from "./InputTextarea";
import NumberInput from "./NumberInput";
import ImageUpload from "./ImageUpload";
import Select from "./Select";
import CheckBoxContainer from "./CheckBoxContainer";
import IngredientSection from "./IngredientSection";

function Form() {
  return (
    <form action="" className="row g-3">
      <section className="intro">
        <div className="mb-3"></div>
        <InputText name="Recipe Title" placeholder=" ex: Annie's Apple Pie" />

        <InputTextarea name="Description" />
        <NumberInput name="Serves" />
        <NumberInput name="Time" />
        <ImageUpload />
      </section>
      <section className="categories">
        <Select name="Categories" />
        <CheckBoxContainer title="Sub-categorie" />
      </section>
      <section className="Ingredients">
        <IngredientSection />
      </section>
    </form>
  );
}
export default Form;
