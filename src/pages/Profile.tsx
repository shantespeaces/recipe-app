import CreateIntroMessage from "../components/forms/CreateIntroMessage";
import axios from "axios";
import { useState, useEffect } from "react";

function Profile() {
  interface User {
    name: string;
  }

  interface UserRecipe {
    recipe_name: string;
    recipe_description: string;
    // rating: string;
    recipe_time: string;
    recipe_serves: string;
  }
  type UserRecipes = UserRecipe[];

  const [user, setUser] = useState<User>();

  const [userRecipes, setUserRecipes] = useState<UserRecipes>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/2")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });

    axios
      .get("http://localhost:8000/api/user_recipes/user_id/2")
      .then((response) => {
        setUserRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <>
      <main>
        <CreateIntroMessage />
        {user && <h2>{user.name}</h2>}

        <li>
          {userRecipes.map((userRecipe) => (
            <section className="carte-recette" key={userRecipe.recipe_name}>
              <div>
                <h1>{userRecipe.recipe_name}</h1>
                <p>{userRecipe.recipe_description}</p>
                {/* <img src="src\assets\images\logo.png" alt="" /> */}
                {/* <p>{userRecipe.rating}</p> */}
                <p>{userRecipe.recipe_time}</p>
                <p>{userRecipe.recipe_serves}</p>
              </div>
            </section>
          ))}
        </li>
      </main>
    </>
  );
}
export default Profile;
