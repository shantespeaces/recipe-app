import NavBar from "./components/NavBar";
import CreateIntroMessage from "./components/CreateIntroMessage";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <CreateIntroMessage />
        <Form />
      </main>
    </div>
  );
}

export default App;
