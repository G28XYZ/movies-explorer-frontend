import {
  REQUEST_MOVIES,
  SEARCH_MOVIES,
  REQUEST_MOVIES_FAILED,
  MOVIES_CHANGE_FILTER,
  MOVIES_SEARCH_TEXT,
  ADD_SHOWED_MOVIES,
} from "../actions/mainMovies";

export const movieReducer = (state, action) => {
  switch (action.type) {
    case ADD_SHOWED_MOVIES:
      return {
        ...state,
        mainMovie: {
          ...state.mainMovie,
          showedMovies: state.mainMovie.showedMovies + action.count,
        },
      };
    case MOVIES_CHANGE_FILTER:
      return {
        ...state,
        mainMovie: { ...state.mainMovie, filterShortFilms: action.checked },
      };

    case REQUEST_MOVIES:
      return {
        ...state,
        loading: true,
        mainMovie: {
          ...state.mainMovie,
          notFound: "",
        },
      };

    case SEARCH_MOVIES:
      const moviesList = action.movies.filter((movie) =>
        `${movie.nameRU} ${movie.nameEN}`.includes(state.mainMovie.searchText)
      );
      return {
        ...state,
        loading: false,
        mainMovie: {
          ...state.mainMovie,
          movies: moviesList,
          notFound: !moviesList.length ? "Ничего не найдено ¯\\_(ツ)_/¯" : "",
        },
      };

    case REQUEST_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        toolTip: {
          isOpen: true,
          success: false,
          message:
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.",
        },
      };

    case MOVIES_SEARCH_TEXT:
      return { ...state, mainMovie: { ...state.mainMovie, searchText: action.text } };

    default:
      return state;
  }
};
