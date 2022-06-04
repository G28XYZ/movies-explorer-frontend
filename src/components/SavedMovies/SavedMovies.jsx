import { useCallback, } from "react";
import {
  searchSavedMovies,
  SAVED_MOVIES_CHANGE_FILTER,
  SAVED_MOVIES_SEARCH_TEXT,
  ADD_SHOWED_SAVED_MOVIES,
  SAVED_MOVIES_NOT_FOUND,
} from "../../services/actions/savedMovies";
import { useStore } from "../../services/StoreProvider";
import MoviesCardList from "../MoviesCardList";
import SearchForm from "../SearchForm";
import FilterCheckbox from "../SearchForm/FilterCheckbox";

function SavedMovies() {
  const [state, dispatch] = useStore();
  const movieCardListProps = state.savedMovie;


  function onChangeFilter(e) {
    dispatch({ type: SAVED_MOVIES_CHANGE_FILTER, checked: e.target.checked });
  }

  function handleChange(e) {
    dispatch({ type: SAVED_MOVIES_SEARCH_TEXT, text: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchSavedMovies(dispatch);
  }

  const isNotFound = useCallback(() => {
    dispatch({ type: SAVED_MOVIES_NOT_FOUND });
  }, [dispatch]);

  const handleClickMoreMovies = useCallback(
    (count) => {
      dispatch({ type: ADD_SHOWED_SAVED_MOVIES, count });
    },
    [dispatch]
  );

  return (
    <main className="movies">
      <SearchForm
        searchText={movieCardListProps.searchText}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      >
        <FilterCheckbox
          filterShortFilms={movieCardListProps.filterShortFilms}
          onChangeFilter={onChangeFilter}
        />
      </SearchForm>
      <MoviesCardList
        {...movieCardListProps}
        handleClickMoreMovies={handleClickMoreMovies}
        isNotFound={isNotFound}
      />
    </main>
  );
}

export default SavedMovies;
