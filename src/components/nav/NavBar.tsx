import SearchBar from "./SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
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

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleLogout = () => {
    localStorage.removeItem("userId");

    window.location.href = "/connexion";
  };

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav
        className="navbar navbar-expand-lg sticky-top "
        style={{
          height: "80px",
          backgroundColor: "white",
        }}
      >
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid p-0">
          {/* <!-- Navbar brand --> */}
          <div className="logo-container ms-lg-5 py-lg-5">
            <div className="image-container ">
              <Link className="navbar-brand " to="/">
                <img
                  className="logo"
                  src="src\assets\images\logo.png"
                  alt="the menu logo"
                />
              </Link>
            </div>
          </div>
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#toggle"
            aria-controls=""
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- Collapsible wrapper-Menu items --> */}
          <div
            className="collapse navbar-collapse nav justify-content-end"
            id="toggle"
          >
            {/* First set of links */}
            <div className="">
              <ul className="navbar-nav mt-3  ">
                {items.map((item, index) => (
                  <li
                    key={item}
                    onClick={() => {
                      setSelectedIndex(index);
                    }}
                    className={
                      selectedIndex === index ? "nav-item active " : "nav-item"
                    }
                  >
                    <Link
                      className="nav-link d-flex flex-row mx-md-0 mx-lg-3"
                      aria-current="page"
                      to={route[index]}
                    >
                      <p className="">{item}</p>{" "}
                      <span className="material-symbols-outlined">
                        {icons[index]}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>{" "}
            </div>
            <SearchBar />
            {/* Second set of links */}
            <div className="me-lg-5">
              <ul className="navbar-nav ">
                {items2.map((item, index) => (
                  <li
                    key={item}
                    onClick={() => {
                      setSelectedIndex(index);
                    }}
                    className={
                      selectedIndex === index ? "nav-item active " : "nav-item "
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

              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>{" "}
        </div>
      </nav>
    </>
  );
}
export default NavBar;
