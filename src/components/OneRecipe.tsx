import axios from "axios";
import { useState, useEffect } from "react";
// import Settings from "../components/Settings";
import Rating from "../components/forms/Rating";
// import RecipeCard from "../components/RecipeCard";

interface Recipe {
  id: number;
  name: string;
  description: string;
  rating: string;
  time: string;
  serves: string;
  image: string;
}

interface Ingredient {
  section_name: string;
  ingredient_name: string;
  quantity: string;
  measurement_name: string;
  id: number;
}
// type SectionsIngredients = SectionIngredient[];

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
function OneRecipe() {
  const [recipe, setRecipe] = useState<Recipe>([]);
  // const [sectionsIngredients, setSectionsIngredients] = useState<Ingredient>(
  //   []
  // );
  const [instructions, setInstructions] = useState<Instructions>([]);
  const [subcategories, setSubcategories] = useState<Subcategories>([]);
  const [groupedIngredients, setGroupedIngredients] = useState<{
    [key: number]: Ingredient[];
  }>({});

  const groupIngredientsBySectionId = (ingredients: Ingredient[]) => {
    const groupedIngredients: { [key: number]: Ingredient[] } = {};
    ingredients.forEach((ingredient) => {
      const { section_id, ...rest } = ingredient;
      if (!groupedIngredients[section_id]) {
        groupedIngredients[section_id] = [rest];
      } else {
        groupedIngredients[section_id].push(rest);
      }
    });
    return groupedIngredients;
  };
  // const groupedIngredients = groupIngredientsBySectionId(sectionsIngredients);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/recipes/64")
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipe:", error);
      });

    axios
      .get("http://localhost:8000/api/sections_ingredients/recipe_id/64")
      .then((response) => {
        const ingredients = response.data; // Assuming this is the fetched data

        const grouped = groupIngredientsBySectionId(ingredients);
        setGroupedIngredients(grouped);
      })
      .catch((error) => {
        console.error("Error fetching sections ingredients:", error);
      });

    axios
      .get("http://localhost:8000/api/subcategories/recipe_id/64")
      .then((response) => {
        setSubcategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching subcategories:", error);
      });

    axios
      .get("http://localhost:8000/api/instructions/recipe_id/64")
      .then((response) => {
        setInstructions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching instructions:", error);
      });
  }, []);

  // function changerCouleur(nom: string) {
  //   console.log("Changer couleur depuis Recipe");
  // }

  return (
    <>
      <main>
        {/* <Settings />" */}
        <section
          className="carte-recette intro px-5 py-5 mb-3  "
          style={{ marginTop: "8em" }}
        >
          <div className="row ">
            <div className="col-md-6">
              <img
                className="card-img-left w-100 h-100"
                src={recipe.image}
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6 ">
              <h3>{recipe.name}</h3>
              <div>
                <Rating rating={recipe.rating} />
                <div className="d-flex justify-content-between align-items-center flex-grow-1 pb-3">
                  <div className="d-flex align-items-center py-3">
                    <span className="material-symbols-outlined me-2">
                      timer
                    </span>
                    <p className="mb-0">{recipe.time}</p>
                  </div>
                  <div className="d-flex align-items-center px-5">
                    <span className="material-symbols-outlined me-2 ">
                      person
                    </span>
                    <p className="mb-0">{recipe.serves}</p>
                  </div>
                </div>
              </div>
              <p>{recipe.description}</p>{" "}
              <div className="subcategories">
                <h3>Categories</h3>
                <ul className="list-unstyled d-flex flex-wrap">
                  {subcategories.map((subcategory) => (
                    <li
                      key={subcategory.id}
                      className="me-3 mb-3 rounded-5 p-2 d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: " rgba(243, 105, 18, 0.5)",
                      }}
                    >
                      <p className="m-0 px-5">{subcategory.subcategory_name}</p>
                    </li>
                  ))}
                </ul>
              </div>{" "}
            </div>
          </div>
        </section>
        <section className="ingredients px-5 py-5 mb-3">
          <h3 className="py-3">Ingredients</h3>
          {Object.entries(groupedIngredients).map(
            ([sectionId, ingredients]) => (
              <div key={sectionId} className=" mb-4">
                <section className="ingredients px-5 py-5 mb-3">
                  <h4>{ingredients[0].section_name}</h4>
                  <ul className="row px-0">
                    {ingredients.map((ingredient, index) => (
                      <li key={index} className=" d-flex ">
                        <p className=" px-1">{ingredient.quantity}</p>
                        <p className=" px-1">{ingredient.measurement_name}</p>
                        <p>{ingredient.ingredient_name}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            )
          )}
        </section>
        {/* <section className="ingredients px-5 py-5 mb-3">
                  <h4 className="py-3">{ingredients[0].section_name}</h4>
                  <div className="row">
                    {ingredients.map((ingredient, index) => (
                      <div key={index} className="col-12 mb-3">
                        <div className="row gx-1">
                          <p
                            className="col-1 mb-0"
                            style={{ maxWidth: "25px", maxHeight: "30px" }}
                          >
                            {ingredient.quantity}
                          </p>
                          <p
                            className="col-1 mb-0"
                            style={{ maxWidth: "50px" }}
                          >
                            {ingredient.measurement_name}
                          </p>
                          <p className="col-9 mb-0 ">
                            {ingredient.ingredient_name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section> */}
        <section className="instructions px-5 py-5 mb-3">
          <h3>Instructions</h3>
          <ul className=" ">
            {instructions.map((instruction) => (
              <li key={instruction.id}>
                <p> {instruction.description}</p>
              </li>
            ))}
          </ul>
        </section>
        {/* <Button name="Settings" onClick={() => setIsOpen(true)} /> or add active class to settings? */}
      </main>
    </>
  );
}
export default OneRecipe;
