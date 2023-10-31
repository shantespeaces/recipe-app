import InputText from "./forms/InputText";
import InputTextarea from "./forms/InputTextarea";
import NumberInput from "./forms/NumberInput";
import ImageUpload from "./forms/ImageUpload";
import Select from "./forms/Select";
import CheckBoxContainer from "./forms/CheckBoxContainer";
import IngredientSection from "./forms/IngredientSection";
import Button from "./buttons/Button";
import Steps from "./forms/Steps";
import Notes from "./forms/Notes";

function Form() {
  function handleClick() {
    alert("Button clicked need to go to recipe page!");
  }
  return (
    <form action="" className="row g-3 .container-sm max-width-200">
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
        <CheckBoxContainer title="Filters" />
      </section>
      <section className="ingredients">
        <IngredientSection />
      </section>
      <section className="steps">
        <Steps />
      </section>
      <section className="notes">
        <Notes />
      </section>
      <Button name="Add Recipe" onClick={handleClick} />
    </form>
  );
}
export default Form;
