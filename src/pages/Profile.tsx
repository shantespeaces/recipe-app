import axios from "axios";
import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

interface User {
  name: string;
  image: string;
}

interface Recipe {
  id: number;
  name: string;
  description: string;
  rating: string;
  time: string;
  serves: string;
  image: string;
}
type Recipes = Recipe[];
// interface Subcategory {
//   subcategory_name: string;
//   id: number;
// }
// type Subcategories = Subcategory[];
function Profile() {
  const [user, setUser] = useState<User>();

  const [recipes, setRecipes] = useState<Recipes>([]);
  // const [subcategories, setSubcategories] = useState<Subcategories>([]);

  useEffect(() => {
    // Get userId from local storage
    const userId = localStorage.getItem("userId");
    
    if (userId) {
      // Fetch user data using userId ${userId}
      axios
        .get(`http://localhost:8000/api/users/${userId}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
        });

      axios
        .get(`http://localhost:8000/api/user_recipes/user_id/${userId}`)
        .then((response) => {
          setRecipes(response.data);
        })
        .catch((error) => {
          console.error("Error fetching recipes:", error);
        });
      // axios
      //   .get("http://localhost:8000/api/subcategories/recipe_id/1")
      //   .then((response) => {
      //     setUserRecipes(response.data);
      //   })
      //   .catch((error) => {
      //     console.error("Error fetching recipes:", error);
      //   });
    }
  }, []);

  return (
    <>
      <main>
        <div className="container " style={{ marginTop: "6em" }}>
          <h1 className="pb-3">Shantés recipes</h1>
          <div className="recipe-card row g-5">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
        {/* <section className="subcategories">
          <h3>Subcategories</h3>
          <ul>
            {subcategories.map((subcategory) => (
              <li key={subcategory.id}>
                <p>{subcategory.subcategory_name}</p>
              </li>
            ))}
          </ul>{" "}
        </section> */}
      </main>
    </>
  );
}
export default Profile;
