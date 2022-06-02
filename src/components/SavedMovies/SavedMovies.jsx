import { useCallback } from "react";
import {
  getSavedMovies,
  SAVED_MOVIES_CHANGE_FILTER,
  SAVED_MOVIES_SEARCH_TEXT,
  ADD_SHOWED_SAVED_MOVIES,
} from "../../services/actions/savedMovies";
import { useStore } from "../../services/StoreProvider";
import MoviesCardList from "../MoviesCardList";
import SearchForm from "../SearchForm";
import FilterCheckbox from "../SearchForm/FilterCheckbox";

function SavedMovies() {
  const [state, dispatch] = useStore();
  const { searchText, filterShortFilms } = state.savedMovie;

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

  const handleClickMoreMovies = useCallback(
    (count) => {
      dispatch({ type: ADD_SHOWED_SAVED_MOVIES, count });
    },
    [dispatch]
  );

  return (
    <main className="movies">
      <SearchForm searchText={searchText} handleChange={handleChange} handleSubmit={handleSubmit}>
        <FilterCheckbox filterShortFilms={filterShortFilms} onChangeFilter={onChangeFilter} />
      </SearchForm>
      <MoviesCardList {...state.savedMovie} handleClickMoreMovies={handleClickMoreMovies} />
    </main>
  );
}

export default SavedMovies;
