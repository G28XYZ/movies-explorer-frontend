import { useNavigate } from "react-router-dom";
import { getMovies, SET_SEARCH_TEXT } from "../../services/actions/movie";
import { useStore } from "../../services/StoreProvider";
import FilterCheckbox from "./FilterCheckbox";

function SearchForm() {
  const [state, dispatch] = useStore();
  const navigate = useNavigate();

  function handleChange(e) {
    dispatch({ type: SET_SEARCH_TEXT, text: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/movies");
    getMovies(dispatch);
  }

  return (
    <div className="search color_background">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__form-input"
          placeholder="Фильм"
          value={state.movie.searchText}
          onChange={handleChange}
          required
        />
        <button className="search__submit link" type="submit"></button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
