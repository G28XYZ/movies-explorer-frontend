function SearchForm({ searchText, handleChange, handleSubmit, children }) {
  return (
    <div className="search color_background">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__form-input"
          placeholder="Фильм"
          value={searchText}
          onChange={handleChange}
          required
        />
        <button className="search__submit link" type="submit"></button>
      </form>
      {children}
    </div>
  );
}

export default SearchForm;
