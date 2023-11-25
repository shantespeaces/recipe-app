import CreateIntroMessage from "../components/forms/CreateIntroMessage";
import Rating from "../components/forms/Rating";

import axios from "axios";
import { useState, useEffect } from "react";
function Home() {
  interface Recipe {
    name: string;
    description: string;
    rating: string;
    time: string;
    serves: string;
    image: string;
    id: number;
  }
  type Recipes = Recipe[];

  const [recipes, setRecipes] = useState<Recipes>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/recipes/")
      .then((response) => setRecipes(response.data))
      .catch((error) => console.error("Error fetching recipe:", error));
  }, []);

  return (
    <>
      <main>
        <ul>
          {recipes.map((recipe) => (
            <section className="carte-recette" key={recipe.id}>
              <li>
                <h1>{recipe.name}</h1>
                <p>{recipe.description}</p>
                <div className="image-container">
                  <img className="img-thumbnail" src={recipe.image} alt="" />
                </div>
                <Rating rating={recipe.rating} />
                <p>
                  <span className="material-symbols-outlined">timer</span>
                  {recipe.time}
                </p>
                <p>
                  <span className="material-symbols-outlined">person</span>
                  {recipe.serves}
                </p>
              </li>
            </section>
          ))}
        </ul>
      </main>
    </>
  );
}
export default Home;
