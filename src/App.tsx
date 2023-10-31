// import { useState } from "react";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Recipe from "./pages/Recipe";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/NavBar";

function App() {
  // // const bgs = ref([])
  // const [bgs, setBgs] = useState({ id: null, color: null });

  // const url = "http://localhost:8000/api/background_colors/1";
  // const options = {};
  // fetch(url, options)
  //   .then((resp) => resp.json())
  //   .then((background_colors) => {
  //     setBgs(background_colors);
  //     //console.log(background_colors);
  //   });

  return (
    <div>
      {/* <p>{bgs.color}</p> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
