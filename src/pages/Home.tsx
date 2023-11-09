import CreateIntroMessage from "../components/forms/CreateIntroMessage";

import axios from "axios";
import { useState, useEffect } from "react";
function Home() {
  interface Recipe {
    name: string;
    description: string;
    rating: string;
    time: string;
    serves: string;
  }
  type Recipes = Recipe[];

  const [recipes, setRecipes] = useState<Recipes>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/recipes/")
      .then((response) => setRecipes(response.data));
    // .catch((error) => console.error("Error fetching recipe:", error));
  });

  return (
    <>
      <main>
        <CreateIntroMessage />

        <li>
          {recipes.map((recipe) => (
            <section className="carte-recette">
              <div>
                <h1>{recipe.name}</h1>
                <p>{recipe.description}</p>
                <img src="src\assets\images\logo.png" alt="" />
                <p>{recipe.rating}</p>
                <p>{recipe.time}</p>
                <p>{recipe.serves}</p>
              </div>
            </section>
          ))}
        </li>
      </main>
    </>
  );
}
export default Home;
