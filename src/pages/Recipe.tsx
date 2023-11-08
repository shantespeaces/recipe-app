import axios from "axios";
import { useState, useEffect } from "react";
import Settings from "../components/Settings";

function Recipe() {
  interface Recipe {
    name: string;
    description: string;
    rating: string;
    time: string;
    serves: string;
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
  console.log(instructions);

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

  return (
    <>
      <main>
        <Settings />
        <section className="carte-recette">
          {recipe && (
            <div>
              <h1>{recipe.name}</h1>
              <p>{recipe.description}</p>
              <img src="src\assets\images\logo.png" alt="" />
              <p>{recipe.rating}</p>
              <p>{recipe.time}</p>
              <p>{recipe.serves}</p>
            </div>
          )}
        </section>
        <section className="ingredients">
          <h3>Ingredients</h3>
          <li>
            {sectionsIngredients.map((sectionsIngredients) => (
              <div key={sectionsIngredients}>
                <h4>{sectionsIngredients.section_name}</h4>
                <p>{sectionsIngredients.ingredient_name}</p>
                <p>{sectionsIngredients.quantity}</p>
                <p>{sectionsIngredients.measurement_name}</p>
              </div>
            ))}
          </li>
        </section>
        <section className="instructions">
          <h3>Instructions</h3>
          <li>
            {instructions.map((instructions) => (
              <div key={instructions}>
                <h4> {instructions.name}</h4>
                <p> {instructions.description}</p>
              </div>
            ))}
          </li>
        </section>
      </main>
    </>
  );
}
export default Recipe;
