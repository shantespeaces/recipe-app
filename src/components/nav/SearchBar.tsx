function SearchBar() {
  return (
    <form className="search " role="search">
      <div className="position-relative">
        <input
          className=" rounded-5"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{
            width: "350px",
            height: "50px",
            fontSize: "18px",
          }}
        />
        <button
          className="btn btn-outline-success custom-search position-absolute end-0 top-0 bottom-0 rounded-end-5"
          type="submit"
          style={{
            height: "50px",
            fontSize: "18px",
          }}
        >
          <span className="material-symbols-outlined py-1 px-3">search</span>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
