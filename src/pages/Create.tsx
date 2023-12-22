import IntroMessage from "../components/forms/IntroMessage";
import RecipeForm from "../components/forms/RecipeForm";
import NavBar from "../components/nav/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Create() {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <IntroMessage message="create your recipe!" />
        <RecipeForm />
      </main>
      <Footer />
    </>
  );
}
export default Create;
