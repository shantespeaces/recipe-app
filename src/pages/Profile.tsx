import CreateIntroMessage from "../components/forms/CreateIntroMessage";
import axios from "axios";
import { useState, useEffect } from "react";
import Rating from "../components/forms/Rating";

function Profile() {
  interface User {
    name: string;
    image: string;
  }

  interface UserRecipe {
    id: number;
    name: string;
    description: string;
    rating: string;
    time: string;
    serves: string;
    image: string;
  }
  type UserRecipes = UserRecipe[];
  // interface Subcategory {
  //   subcategory_name: string;
  //   id: number;
  // }
  // type Subcategories = Subcategory[];

  const [user, setUser] = useState<User>();

  const [userRecipes, setUserRecipes] = useState<UserRecipes>([]);
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
        setUserRecipes(response.data);
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

                <Rating rating={userRecipe.rating} />
                <p>
                  <span className="material-symbols-outlined">timer</span>
                  {userRecipe.time}
                </p>
                <p>
                  <span className="material-symbols-outlined">person</span>
                  {userRecipe.serves}
                </p>
                {/* <p>{userRecipe.category}</p> */}
              </section>
            </li>
          ))}{" "}
        </ul>
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
