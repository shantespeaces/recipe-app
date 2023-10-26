import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <SearchBar />
        <a className="navbar-brand mx-auto" href="#">
          <img src="src\assets\images\logo.png" alt="the menu logo" />
        </a>
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
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home <span className="material-symbols-outlined">home</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Create{" "}
              <span className="material-symbols-outlined">add_circle</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Profile
              <span className="material-symbols-outlined">account_circle</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
