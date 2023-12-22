import OneRecipe from "../components/OneRecipe";
import NavBar from "../components/nav/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Button from "../components/buttons/Button";

function Recipe() {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <OneRecipe />
      </main>
      <Footer />
    </>
  );
}
export default Recipe;
