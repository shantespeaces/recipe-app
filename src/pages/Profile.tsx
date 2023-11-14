import CreateIntroMessage from "../components/forms/CreateIntroMessage";
import axios from "axios";
import { useState, useEffect } from "react";

function Profile() {
  interface User {
    name: string;
    image: string;
  }

  interface UserRecipe {
    id: number;
    name: string;
    description: string;
    rating: number;
    time: string;
    serves: string;
    image: string;
  }
  type UserRecipes = UserRecipe[];

  const [user, setUser] = useState<User>();

  const [userRecipes, setUserRecipes] = useState<UserRecipes>([]);

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
        setUserRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  const starRating = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <span key={i} className="material-symbols-outlined">
          star
        </span>
      );
    }
    return stars;
  };

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

        <ul>
          {userRecipes.map((userRecipe) => (
            <li key={userRecipe.id}>
              <section className="carte-recette">
                <h1>{userRecipe.name}</h1>
                <p>{userRecipe.description}</p>
                <div className="image-container">
                  <img
                    className="img-thumbnail"
                    src={userRecipe.image}
                    alt=""
                  />
                </div>

                <p>{starRating(userRecipe.rating)}</p>
                <p>
                  <span className="material-symbols-outlined">timer</span>
                  {userRecipe.time}
                </p>
                <p>
                  <span className="material-symbols-outlined">person</span>
                  {userRecipe.serves}
                </p>
              </section>
            </li>
          ))}{" "}
        </ul>
      </main>
    </>
  );
}
export default Profile;
