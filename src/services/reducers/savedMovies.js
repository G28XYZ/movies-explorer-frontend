import {
  DELETE_SAVED_MOVIE,
  REQUEST_SAVED_MOVIES,
  SEARCH_SAVED_MOVIES,
  REQUEST_SAVED_MOVIES_FAILED,
  SAVED_MOVIES_CHANGE_FILTER,
  SAVED_MOVIES_SEARCH_TEXT,
  ADD_SHOWED_SAVED_MOVIES,
  POST_TO_SAVED_MOVIES,
  GET_SAVED_MOVIES,
} from "../actions/savedMovies";

export const savedMovieReducer = (state, action) => {
  switch (action.type) {
    case ADD_SHOWED_SAVED_MOVIES:
      return {
        ...state,
        savedMovie: {
          ...state.savedMovie,
          showedMovies: state.savedMovie.showedMovies + action.count,
        },
      };
    case SAVED_MOVIES_CHANGE_FILTER:
      return {
        ...state,
        savedMovie: { ...state.savedMovie, filterShortFilms: action.checked },
      };

    case REQUEST_SAVED_MOVIES:
      return {
        ...state,
        loading: true,
        savedMovie: {
          ...state.savedMovie,
          notFound: "",
        },
      };

    case SEARCH_SAVED_MOVIES:
      const moviesList = action.movies.filter((movie) =>
        `${movie.nameRU} ${movie.nameEN}`.includes(state.savedMovie.searchText)
      );
      return {
        ...state,
        loading: false,
        savedMovie: {
          ...state.savedMovie,
          movies: moviesList,
          notFound: !moviesList.length ? "Ничего не найдено ¯\\_(ツ)_/¯" : "",
        },
      };

    case GET_SAVED_MOVIES:
      return {
        ...state,
        loading: false,
        savedMovie: {
          ...state.savedMovie,
          movies: action.movies,
        },
      };

    case POST_TO_SAVED_MOVIES:
      return {
        ...state,
        loading: false,
        savedMovie: {
          ...state.savedMovie,
          movies: [...state.savedMovie.movies, action.movie],
        },
      };

    case DELETE_SAVED_MOVIE:
      const savedMovies = state.savedMovie.movies.filter(
        (movie) => movie.movieId !== action.movie.movieId
      );
      console.log(savedMovies);
      return {
        ...state,
        loading: false,
        savedMovie: {
          ...state.savedMovie,
          movies: savedMovies,
        },
      };

    case REQUEST_SAVED_MOVIES_FAILED:
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

    case SAVED_MOVIES_SEARCH_TEXT:
      return { ...state, savedMovie: { ...state.savedMovie, searchText: action.text } };

    default:
      return state;
  }
};
