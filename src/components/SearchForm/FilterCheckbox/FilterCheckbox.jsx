function FilterCheckbox() {
  return (
    <div className="filter">
      <label className="filter__label text">
        <input type="checkbox" className="filter__input" />
        <span className="filter__switch"></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
