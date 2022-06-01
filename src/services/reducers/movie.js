import {
  DELETE_SAVED_MOVIE,
  REQUEST_MOVIES,
  GET_MOVIES,
  REQUEST_MOVIES_FAILED,
  CHANGE_FILTER,
  SET_SEARCH_TEXT,
  ADD_SHOWED_MOVIES,
  POST_TO_SAVED_MOVIES,
  GET_SAVED_MOVIES,
} from "../actions/movie";

export const movieReducer = (state, action) => {
  switch (action.type) {
    case ADD_SHOWED_MOVIES:
      return {
        ...state,
        movie: { ...state.movie, showedMovies: state.movie.showedMovies + action.count },
      };
    case CHANGE_FILTER:
      return {
        ...state,
        movie: { ...state.movie, filterShortFilms: action.checked },
      };

    case REQUEST_MOVIES:
      return {
        ...state,
        loading: true,
        movie: {
          ...state.movie,
          notFound: "",
        },
      };

    case GET_MOVIES:
      const moviesList = action.moviesList.filter((movie) =>
        `${movie.nameRU} ${movie.nameEN}`.includes(state.movie.searchText)
      );
      return {
        ...state,
        loading: false,
        movie: {
          ...state.movie,
          moviesList,
          notFound: !moviesList.length ? "Ничего не найдено ¯\\_(ツ)_/¯" : "",
        },
      };

    case GET_SAVED_MOVIES:
      return {
        ...state,
        loading: false,
        movie: {
          ...state.movie,
          savedMovies: action.movies,
        },
      };

    case POST_TO_SAVED_MOVIES:
      return {
        ...state,
        loading: false,
        movie: {
          ...state.movie,
          savedMovies: [...state.movie.savedMovies, ...action.movie],
        },
      };

    case DELETE_SAVED_MOVIE:
      const savedMovies = state.movie.savedMovies.filter((movie) => movie.id !== action.movie.id);
      return {
        ...state,
        loading: false,
        movie: {
          ...state.movie,
          savedMovies,
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
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
        },
      };

    case SET_SEARCH_TEXT:
      return { ...state, movie: { ...state.movie, searchText: action.text } };

    default:
      return state;
  }
};
