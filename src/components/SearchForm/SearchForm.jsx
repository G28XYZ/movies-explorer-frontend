import FilterCheckbox from "./FilterCheckbox";

function SearchForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="search color_background">
      <form className="search__form" onSubmit={handleSubmit}>
        <input type="text" className="search__form-input" placeholder="Фильм" />
        <button className="search__submit link" type="submit"></button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
