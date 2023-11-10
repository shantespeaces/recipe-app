import axios from "axios";
import { useState, useEffect } from "react";
import Settings from "../components/Settings";
function OneRecipe() {
  interface Recipe {
    name: string;
    description: string;
    rating: string;
    time: string;
    serves: string;
    image: string;
  }

  interface SectionIngredient {
    section_name: string;
    ingredient_name: string;
    quantity: string;
    measurement_name: string;
  }
  type SectionsIngredients = SectionIngredient[];

  interface Instruction {
    name: string;
    description: string;
  }
  type Instructions = Instruction[];

  const [recipe, setRecipe] = useState<Recipe>();
  const [sectionsIngredients, setSectionsIngredients] =
    useState<SectionsIngredients>([]);
  const [instructions, setInstructions] = useState<Instructions>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/recipes/1")
      .then((response) => setRecipe(response.data));
    // .catch((error) => console.error("Error fetching recipe:", error));

    axios
      .get("http://localhost:8000/api/sections_ingredients/recipe_id/1")
      .then((response) => setSectionsIngredients(response.data));
    // .catch((error) =>
    //   console.error("Error fetching ingredients section:", error)
    // );

    axios
      .get("http://localhost:8000/api/instructions/recipe_id/1")
      .then((response) => setInstructions(response.data));
    // .catch((error) => console.error("Error fetching instructions:", error));
  }, []);

  // function changerCouleur(nom: string) {
  //   console.log("Changer couleur depuis Recipe");
  // }

  return (
    <>
      <main>
        <Settings />
        <section className="carte-recette">
          {recipe && (
            <div>
              <h1>{recipe.name}</h1>
              <p>{recipe.description}</p>
              <img className="img-thumbnail" src={recipe.image} alt="" />
              <p>{recipe.rating}</p>
              <p>{recipe.time}</p>
              <p>{recipe.serves}</p>
            </div>
          )}
        </section>
        <section className="ingredients">
          <h3>Ingredients</h3>
          <li>
            {sectionsIngredients.map((sectionsIngredient) => (
              <div key={sectionsIngredient.ingredient_name}>
                <h4>{sectionsIngredient.section_name}</h4>
                <p>{sectionsIngredient.ingredient_name}</p>
                <p>{sectionsIngredient.quantity}</p>
                <p>{sectionsIngredient.measurement_name}</p>
              </div>
            ))}
          </li>
        </section>
        <section className="instructions">
          <h3>Instructions</h3>
          <li>
            {instructions.map((instruction) => (
              <div key={instruction.name}>
                <h4> {instruction.name}</h4>
                <p> {instruction.description}</p>
              </div>
            ))}
          </li>
        </section>
        {/* <Button name="Settings" onClick={() => setIsOpen(true)} /> or add active class to settings? */}
      </main>
    </>
  );
}
export default OneRecipe;
