import CreateIntroMessage from "../components/forms/CreateIntroMessage";
import axios from "axios";
import { useState, useEffect } from "react";

function Profile() {
  interface User {
    name: string;
  }

  interface UserRecipe {
    id: number;
    name: string;
    description: string;
    rating: string;
    time: string;
    serves: string;
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
            <section className="carte-recette" key={userRecipe.id}>
              <div>
                <h1>{userRecipe.name}</h1>
                <p>{userRecipe.description}</p>
                {/* <img src="src\assets\images\logo.png" alt="" /> */}
                <p>{userRecipe.rating}</p>
                <p>{userRecipe.time}</p>
                <p>{userRecipe.serves}</p>
              </div>
            </section>
          ))}
        </li>
      </main>
    </>
  );
}
export default Profile;
