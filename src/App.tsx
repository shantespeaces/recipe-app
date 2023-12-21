// import { useState } from "react";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Connexion from "./pages/Connexion";
import Recipe from "./pages/Recipe";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import NavBar from "./components/nav/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

  const location = useLocation();

  const [hideComponent, sethideComponent] = useState(true);

  useEffect(() => {
    sethideComponent(!["/connexion", "/account"].includes(location.pathname));
  }, [location.pathname]);

  return (
    <div>
      {hideComponent && (
        <>
          {/* Rendered outside the Routes */}
          {/* <p>{bgs.color}</p> */}
          <NavBar />
          <Header />
        </>
      )}

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/account" element={<Account />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
      {hideComponent && (
        <>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
