function SearchForm() {
  return (
    <section className="search color_background">
      <form className="search__form">
        <input type="text" className="search__form-input" placeholder="Фильм" />
        <button className="search__submit"></button>
      </form>
      <div className="search__switch-container">
        <label className="search__switch-label text">
          <input type="checkbox" className="search__switch-input" />
          <span className="search__switch"></span>
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
