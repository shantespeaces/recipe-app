import SearchBar from "./SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  // onClick: () => void;
}
function NavBar({}: NavBarProps) {
  let items = ["Home", "Create", "Profile"];
  let icons = ["home", "add_circle", "account_circle"];
  let route = ["/", "/create", "/profile"];

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg bg-body-tertiary px-5"
        style={{
          height: "100px",
        }}
      >
        <div className="search-bar" style={{ paddingLeft: "10rem" }}>
          <SearchBar />
        </div>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand mx-auto" to="/">
            <img src="src\assets\images\logo.png" alt="the menu logo" />
          </Link>
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
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0 "
            style={{ paddingRight: "10rem" }}
          >
            {items.map((item, index) => (
              <li
                key={item}
                onClick={() => {
                  setSelectedIndex(index);
                }}
                className={
                  selectedIndex === index
                    ? "nav-item active ps-5 pe-5"
                    : "nav-item ps-5 pe-5"
                }
              >
                <Link
                  className="nav-link "
                  aria-current="page"
                  to={route[index]}
                >
                  {item}{" "}
                  <span className="material-symbols-outlined">
                    {icons[index]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>{" "}
    </>
  );
}
export default NavBar;
