import axios from "axios";
import { useState, useEffect } from "react";
import Settings from "../components/Settings";
import Rating from "../components/forms/Rating";
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
    id: number;
  }
  type SectionsIngredients = SectionIngredient[];

  interface Instruction {
    description: string;
    id: number;
  }
  type Instructions = Instruction[];

  interface Subcategory {
    subcategory_name: string;
    id: number;
  }
  type Subcategories = Subcategory[];

  const [recipe, setRecipe] = useState<Recipe>();
  const [sectionsIngredients, setSectionsIngredients] =
    useState<SectionsIngredients>([]);
  const [instructions, setInstructions] = useState<Instructions>([]);
  const [subcategories, setSubcategories] = useState<Subcategories>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipeResponse = await axios.get(
          "http://localhost:8000/api/recipes/64"
        );
        setRecipe(recipeResponse.data);

        const ingredientsResponse = await axios.get(
          "http://localhost:8000/api/sections_ingredients/recipe_id/64"
        );
        setSectionsIngredients(ingredientsResponse.data);

        const subcategoryResponse = await axios.get(
          "http://localhost:8000/api/subcategories/recipe_id/64"
        );

        setSubcategories(subcategoryResponse.data);

        const instructionsResponse = await axios.get(
          "http://localhost:8000/api/instructions/recipe_id/64"
        );
        setInstructions(instructionsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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

              <Rating rating={recipe.rating} />
              <p>
                <span className="material-symbols-outlined">timer</span>
                {recipe.time}
              </p>
              <p>
                <span className="material-symbols-outlined">person</span>
                {recipe.serves}
              </p>
            </div>
          )}
        </section>
        <section className="ingredients">
          <h3>Ingredients</h3>
          <ul>
            {sectionsIngredients.map((sectionIngredient) => (
              <li key={sectionIngredient.id}>
                <h4>{sectionIngredient.section_name}</h4>
                <p>{sectionIngredient.ingredient_name}</p>
                <p>{sectionIngredient.quantity}</p>
                <p>{sectionIngredient.measurement_name}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="instructions">
          <h3>Instructions</h3>
          <ul>
            {instructions.map((instruction) => (
              <li key={instruction.id}>
                {/* <h4> {instruction.name}</h4> */}
                <p> {instruction.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="subcategories">
          <h3>Subcategories</h3>
          <ul>
            {subcategories.map((subcategory) => (
              <li key={subcategory.id}>
                <p>{subcategory.subcategory_name}</p>
              </li>
            ))}
          </ul>{" "}
        </section>
        {/* <Button name="Settings" onClick={() => setIsOpen(true)} /> or add active class to settings? */}
      </main>
    </>
  );
}
export default OneRecipe;
