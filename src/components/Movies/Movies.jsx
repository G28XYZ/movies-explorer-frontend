import { useCallback } from "react";
import {
  MOVIES_CHANGE_FILTER,
  searchMovies,
  MOVIES_SEARCH_TEXT,
  ADD_SHOWED_MOVIES,
  MOVIES_NOT_FOUND,
} from "../../services/actions/mainMovies";
import { useStore } from "../../services/StoreProvider";
import MoviesCardList from "../MoviesCardList";
import SearchForm from "../SearchForm";
import FilterCheckbox from "../SearchForm/FilterCheckbox";

function Movies() {
  const [state, dispatch] = useStore();
  const { searchText, filterShortFilms } = state.mainMovie;

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

  const isNotFound = useCallback(() => {
    dispatch({ type: MOVIES_NOT_FOUND });
  }, [dispatch]);

  const handleClickMoreMovies = useCallback(
    (count) => {
      dispatch({ type: ADD_SHOWED_MOVIES, count });
    },
    [dispatch]
  );

  return (
    <main className="movies">
      <SearchForm searchText={searchText} handleChange={handleChange} handleSubmit={handleSubmit}>
        <FilterCheckbox filterShortFilms={filterShortFilms} onChangeFilter={onChangeFilter} />
      </SearchForm>
      <MoviesCardList
        {...state.mainMovie}
        handleClickMoreMovies={handleClickMoreMovies}
        isNotFound={isNotFound}
      />
    </main>
  );
}

export default Movies;
