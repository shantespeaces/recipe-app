import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
