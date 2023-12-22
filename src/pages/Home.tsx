import { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import IntroMessage from "../components/forms/IntroMessage";
import NavBar from "../components/nav/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <NavBar />
      <Header />
      <main>
        <IntroMessage message="view all Recipes!" />
        <div className="container" style={{ marginTop: "1em" }}>
          <div className="recipe-card row g-5">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
