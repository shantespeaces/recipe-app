import CreateIntroMessage from "../components/forms/CreateIntroMessage";
import NavBar from "../components/nav/NavBar";
function Home() {
  return (
    <>
      <NavBar />
      <main>
        <CreateIntroMessage />
      </main>
    </>
  );
}
export default Home;
