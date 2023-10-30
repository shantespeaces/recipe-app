import CreateIntroMessage from "../components/forms/CreateIntroMessage";
import Form from "../components/Form";
import NavBar from "../components/nav/NavBar";
function Create() {
  return (
    <>
      <NavBar />
      <main>
        <CreateIntroMessage />
        <Form />
      </main>
    </>
  );
}
export default Create;
