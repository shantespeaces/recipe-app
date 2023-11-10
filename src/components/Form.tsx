import InputText from "./forms/InputText";
import InputTextarea from "./forms/InputTextarea";
import Counter from "./forms/Counter";
import ImageUpload from "./forms/ImageUpload";
import Select from "./forms/Select";
import CheckBoxContainer from "./forms/CheckBoxContainer";
import IngredientSection from "./forms/IngredientSection";
import Button from "./buttons/Button";
import Instructions from "./forms/Instructions";
import Notes from "./forms/Notes";

function Form() {
  return (
    <form action="" className="row g-3 .container-sm max-width-200">
      <section className="intro">
        <div className="mb-3"></div>
        <InputText name="Recipe Title" placeholder=" ex: Annie's Apple Pie" />

        <InputTextarea heading="Description" />
        <Counter heading="Serves" />
        <Counter heading="Time" />
        <ImageUpload />
      </section>
      <section className="categories">
        <Select
          heading="Categories"
          onSelectOption={(categoryId) =>
            console.log(`Selected category: ${categoryId}`)
          }
          endpoint="http://localhost:8000/api/categories"
        />
        <CheckBoxContainer title="Sub-categorie/filters" />
      </section>
      <section className="ingredients">
        <IngredientSection />
      </section>
      <section className="steps">
        <Instructions />
      </section>
      <section className="notes">
        <Notes />
      </section>
      <Button name="Add Recipe" route="/recipe"></Button>{" "}
    </form>
  );
}
export default Form;
