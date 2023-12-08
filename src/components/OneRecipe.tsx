import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Rating from "../components/forms/Rating";
// import Button from "../components/buttons/Button";

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

interface Instruction {
  description: string;
  id: number;
}

interface Subcategory {
  subcategory_name: string;
  id: number;
}

function OneRecipe() {
  const { id } = useParams();
  //useState hooks defines and initialises state variables for information for stored in each const
  //useState allows components to manage stateful data, ensuring that changes to these variables trigger re-renders.
  //They are initialsed with empty array (valeur par defaut)
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [instructions, setInstructions] = useState<Instruction[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  // groupedIngredients holds an object structure where the keys are of type number and the values are arrays of Ingredient.
  // The object structure is defined as { [key: number]: Ingredient[] },
  // indicating an object where the keys are numeric and correspond to section IDs, while the values are arrays of Ingredient objects.
  //  useState is initialized with an empty object {}
  const [groupedIngredients, setGroupedIngredients] = useState<{
    [key: number]: Ingredient[];
  }>({});

  // This function organizes the ingredients array into groupedIngredients, grouping ingredients by their section_id. After calling this function,
  // groupedIngredients would contain objects where each key represents a section_id, and the corresponding value is an array of Ingredient objects belonging to that section.
  // PARAMETERS:(ingredients: Ingredient[]): Accepts an array of Ingredient objects.
  // VARIABLES: groupedIngredients: Initializes an empty object that will store ingredients grouped by section_id.
  // It's declared as { [key: number]: Ingredient[] }, indicating an object where keys are numeric (number) and correspond to section_id,
  // while values are arrays of Ingredient objects.
  // FUNCTION LOGIC:The forEach loop iterates through each ingredient in the ingredients array.
  // Using destructuring (const { section_id, ...rest } = ingredient;), it separates the section_id from the rest of the ingredient properties.
  // It checks if section_id exists as a key in groupedIngredients.
  // If the section_id is not present in groupedIngredients, a new entry is created with section_id as the key,
  // and an array containing the rest of the ingredient properties is set as the value (groupedIngredients[section_id] = [rest];).
  // If the section_id is already present in groupedIngredients, it appends the rest of the ingredient properties
  // to the existing array for that section_id (groupedIngredients[section_id].push(rest);).

  const groupIngredientsBySectionId = (ingredients: Ingredient[]) => {
    const groupedIngredients: { [key: number]: Ingredient[] } = {};
    ingredients.forEach((ingredient) => {
      const { section_id, ...rest } = ingredient as any;
      if (!groupedIngredients[section_id]) {
        groupedIngredients[section_id] = [rest];
      } else {
        groupedIngredients[section_id].push(rest);
      }
    });
    return groupedIngredients;
  };

  // Axios GET requests to fetch the data from different API endpoints. Each request is executed asynchronously using promises (then and catch).
  // Upon successful responses, the fetched data is stored in their respective state variables using the corresponding set functions
  // In case of errors, error messages are logged to the console using console.error
  useEffect(() => {
    // Get recipe ID from local storage
    const createdRecipeId = localStorage.getItem("createdRecipeId");
    // Fetch data from various endpoints
    const fetchRecipeData = async () => {
      try {
        const recipeResponse = await axios.get(
          `http://localhost:8000/api/recipes/${id}`
        );
        setRecipe(recipeResponse.data);

        const sectionsIngredientsResponse = await axios.get(
          `http://localhost:8000/api/sections_ingredients/recipe_id/${id}`
        );
        const ingredients = sectionsIngredientsResponse.data;
        const grouped = groupIngredientsBySectionId(ingredients);
        setGroupedIngredients(grouped);

        const subcategoriesResponse = await axios.get(
          `http://localhost:8000/api/subcategories/recipe_id/${id}`
        );
        setSubcategories(subcategoriesResponse.data);

        const instructionsResponse = await axios.get(
          `http://localhost:8000/api/instructions/recipe_id/${id}`
        );
        setInstructions(instructionsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    //fetch recipe created by form
    fetchRecipeData();
    if (id === createdRecipeId) {
      fetchRecipeData();
    }
  }, [id]);

  return (
    <>
      <main>
        {/* <Settings /> */}
        <section
          className="carte-recette intro px-5 py-5 mb-3  "
          style={{ marginTop: "8em" }}
        >
          {recipe && (
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
                {subcategories && subcategories.length > 0 && (
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
                          <p className="m-0 px-5">
                            {subcategory.subcategory_name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
        {/* Object.entries(groupedIngredients).map: Iterates through the groupedIngredients object
  using Object.entries() to convert the object into an array of key-value pairs ([sectionId, ingredients]).
  This allows rendering each section separately. <di Element Wraps each section of ingredients
 utilizing the sectionId as the key to ensure unique rendering.  */}
        {groupedIngredients && (
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
        )}
        {Array.isArray(instructions) && instructions.length > 0 && (
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
        )}
        {/* <Button name="Settings" onClick={() => setIsOpen(true)} /> */}
      </main>
    </>
  );
}
export default OneRecipe;
