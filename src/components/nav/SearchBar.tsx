function SearchBar() {
  return (
    <form className="search-bar search mx-sm-1 mx-md-3 mx-lg-5" role="search">
      <div className="position-relative d-flex">
        <input
          className="form-control rounded-5"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success custom-search position-absolute end-0 top-0 bottom-0 rounded-end-5"
          type="submit"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
