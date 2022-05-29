function SearchForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="search color_background">
      <form className="search__form" onSubmit={handleSubmit}>
        <input type="text" className="search__form-input" placeholder="Фильм" />
        <button className="search__submit" type="submit"></button>
      </form>
      <div className="search__switch-container">
        <label className="search__switch-label text">
          <input type="checkbox" className="search__switch-input" />
          <span className="search__switch"></span>
        </label>
      </div>
    </div>
  );
}

export default SearchForm;
