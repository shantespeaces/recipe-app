import axios from "axios";
import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

function Profile() {
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

  const [user, setUser] = useState<User>();

  const [recipes, setRecipes] = useState<Recipes>([]);
  // const [subcategories, setSubcategories] = useState<Subcategories>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/1")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });

    axios
      .get("http://localhost:8000/api/user_recipes/user_id/1")
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
  }, []);

  return (
    <>
      <main>
        {user && (
          <div>
            <h2>{user.name}</h2>
            <div className="profile-image-container">
              <img className="profile" src={user.image} alt="" />
            </div>
          </div>
        )}

        <div className="container my-5">
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
