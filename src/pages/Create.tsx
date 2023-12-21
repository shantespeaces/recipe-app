import IntroMessage from "../components/forms/IntroMessage";
import RecipeForm from "../components/forms/RecipeForm";

function Create() {
  return (
    <>
      <main>
        <IntroMessage message="create your recipe!" />
        <RecipeForm />
      </main>
    </>
  );
}
export default Create;
