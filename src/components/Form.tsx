import IntroForm from "./forms/IntroForm";

function Form() {
  // const createdRecipeId = //something;
  return (
    <>
      <IntroForm />
    </>
  );
}

export default Form;

// {
/* <section className="categories">
        <Select
          heading="Categories"
          onSelectOption={(categoryId) =>
            console.log(`Selected category: ${categoryId}`)
          }
          endpoint="http://localhost:8000/api/categories"
        />
        <CheckBox
          title="filters"
          endpoint="http://localhost:8000/api/sub_categories"
        />
        <Button name=" Save Instructions" route="null" />
      </section>
      <section className="ingredients">
        <IngredientSection />
      </section>
      <section className="steps">
        <Instructions />
      </section>
      <section className="notes">
        <Notes />
      </section> */
