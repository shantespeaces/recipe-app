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
    <div className="container my-5">
      <div className="recipe-card row g-3">
        {recipes.map((recipe) => (
          <div className="col-lg-4 col-md-4 col-sm-4 mb-4" key={recipe.id}>
            <section className="card" style={{ width: "25rem" }}>
              <img
                className="card-img-top"
                src={recipe.image}
                alt=""
                style={{ height: "15rem", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h4 className="card-title" style={{ height: "5rem" }}>
                  {recipe.name}
                </h4>
                <p
                  className="card-text "
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    flexWrap: "wrap",
                    height: "4rem",
                    // whiteSpace: "nowrap",
                  }}
                >
                  {recipe.description}
                </p>
              </div>
              <ul
                className="list-group list-group-flush"
                style={{ height: "150px" }}
              >
                <li className="list-group-item">
                  <Rating rating={recipe.rating} />
                  <div className="d-flex align-items-center">
                    <span className="material-symbols-outlined me-2">
                      timer
                    </span>
                    <p className="mb-0">{recipe.time}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="material-symbols-outlined me-2">
                      person
                    </span>
                    <p className="mb-0">{recipe.serves}</p>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
