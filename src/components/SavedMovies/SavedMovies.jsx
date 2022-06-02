import {
  SAVED_MOVIES_CHANGE_FILTER,
  getSavedMovies,
  SAVED_MOVIES_SEARCH_TEXT,
} from "../../services/actions/savedMovies";
import { useStore } from "../../services/StoreProvider";
import MoviesCardList from "../MoviesCardList";
import SearchForm from "../SearchForm";
import FilterCheckbox from "../SearchForm/FilterCheckbox";

function SavedMovies() {
  const [state, dispatch] = useStore();
  const { movies, searchText, filterShortFilms } = state.savedMovie;

  function onChangeFilter(e) {
    dispatch({ type: SAVED_MOVIES_CHANGE_FILTER, checked: e.target.checked });
  }

  function handleChange(e) {
    dispatch({ type: SAVED_MOVIES_SEARCH_TEXT, text: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    getSavedMovies(dispatch);
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

export default SavedMovies;
