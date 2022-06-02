import {
  MOVIES_CHANGE_FILTER,
  searchMovies,
  MOVIES_SEARCH_TEXT,
} from "../../services/actions/mainMovies";
import { useStore } from "../../services/StoreProvider";
import MoviesCardList from "../MoviesCardList";
import SearchForm from "../SearchForm";
import FilterCheckbox from "../SearchForm/FilterCheckbox";

function Movies() {
  const [state, dispatch] = useStore();
  const { movies, searchText, filterShortFilms } = state.mainMovie;

  function onChangeFilter(e) {
    dispatch({ type: MOVIES_CHANGE_FILTER, checked: e.target.checked });
  }

  function handleChange(e) {
    dispatch({ type: MOVIES_SEARCH_TEXT, text: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchMovies(dispatch);
  }

  return (
    <main className="movies">
      <SearchForm searchText={searchText} handleChange={handleChange} handleSubmit={handleSubmit}>
        <FilterCheckbox filterShortFilms={filterShortFilms} onChangeFilter={onChangeFilter} />
      </SearchForm>
      <MoviesCardList moviesList={movies} />
    </main>
  );
}

export default Movies;
