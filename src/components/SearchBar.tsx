function SearchBar() {
  return (
    <div className="container-md-fluid">
      <form className="d-flex me-2" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn btn-outline-success custom-search" type="submit">
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
