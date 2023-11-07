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

  interface SectionIngredients {
    section_name: string;
    ingredient_name: string;
    quantity: string;
    measurement_name: string;
  }
  interface Instructions {
    name: string;
    description: string;
  }
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/recipes/1")
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ingredients section:", error);
      });
  }, []);

  const [sections_ingredients, setSectionIngredients] = useState<
    SectionIngredients[] | null
  >(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/sections_ingredients/section_id/2")
      .then((response) => {
        setSectionIngredients(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ingredients section:", error);
      });
  }, []);

  const [instructions, setInstructions] = useState<Instructions[] | null>(null);
  console.log(instructions);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/instructions/1")
      .then((response) => {
        setInstructions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching instructions:", error);
      });
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
          {sections_ingredients && (
            <div>
              <h2>{sections_ingredients[0].section_name}</h2>
              <p>{sections_ingredients[0].ingredient_name}</p>
              <p>{sections_ingredients[0].quantity}</p>
              <p>{sections_ingredients[0].measurement_name}</p>
            </div>
          )}
        </section>
        <section className="instructions">
          {/* <h2>{instructions[0].name}</h2>
          <h2>{instructions[0].description}</h2> */}
        </section>
      </main>
    </>
  );
}
export default Recipe;
