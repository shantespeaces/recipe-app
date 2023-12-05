import SearchBar from "./SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavBarProps {}

function NavBar({}: NavBarProps) {
  // First set of links
  let items = ["Home", "Create", "Profile"];
  let icons = ["home", "add_circle", "account_circle"];
  let route = ["/", "/create", "/profile"];

  // Second set of links
  let items2 = ["Login", "Register"];
  let icons2 = ["", ""];
  let route2 = ["/connexion", "/account"];

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <div className="logo-container sticky-top">
        <div className="image-container position-absolute top-0 start-0 ms-5 ">
          <Link to="/">
            <img
              className="logo"
              src="src\assets\images\logo.png"
              alt="the menu logo"
            />
          </Link>
        </div>{" "}
      </div>

      <nav
        className="navbar navbar-expand-lg sticky-top "
        style={{
          height: "80px",
          backgroundColor: "white",
          // border: "1px solid rgba(243, 105, 18, 0.4) ",
        }}
      >
        <div className="container d-flex justify-content-end ">
          <SearchBar />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="row">
            {/* First set of links */}
            <div className="col d-flex flex-row me-5 mt-5 collapse navbar-collapse">
              <ul className="navbar-nav ">
                {items.map((item, index) => (
                  <li
                    key={item}
                    onClick={() => {
                      setSelectedIndex(index);
                    }}
                    className={
                      selectedIndex === index
                        ? "nav-item active ps-5 pe-5"
                        : "nav-item"
                    }
                  >
                    <Link
                      className="nav-link d-flex flex-row mx-3"
                      aria-current="page"
                      to={route[index]}
                    >
                      <p className="px-3">{item}</p>{" "}
                      <span className="material-symbols-outlined">
                        {icons[index]}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second set of links */}
            <div className="col d-flex flex-row justify-content-end">
              <ul className="navbar-nav me-5">
                {items2.map((item, index) => (
                  <li
                    key={item}
                    onClick={() => {
                      setSelectedIndex(index);
                    }}
                    className={
                      selectedIndex === index
                        ? "nav-item active pe-5"
                        : "nav-item "
                    }
                  >
                    <Link
                      className="nav-link "
                      aria-current="page"
                      to={route2[index]}
                    >
                      {item}{" "}
                      <span className="material-symbols-outlined">
                        {icons2[index]}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
