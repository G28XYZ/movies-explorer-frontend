import { infoMessages } from "../../utils/constants";
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
  SAVED_MOVIES_NOT_FOUND,
  RESET_STATE_SAVED_MOVIES,
} from "../actions/savedMovies";

export const savedMovieReducer = (state, action) => {
  switch (action.type) {
    case RESET_STATE_SAVED_MOVIES:
      return {
        ...state,
        savedMovie: {
          ...state.savedMovie,
          movies: state.savedMovie.saved,
          searchText: "",
          filterShortFilms: false,
          notFound: "",
        },
      };

    case SAVED_MOVIES_NOT_FOUND:
      return {
        ...state,
        savedMovie: {
          ...state.savedMovie,
          notFound: state.savedMovie.filterShortFilms ? infoMessages.notFound : "",
        },
      };
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
        savedMovie: {
          ...state.savedMovie,
          filterShortFilms: action.checked,
          notFound:
            !action.checked && state.savedMovie.movies.length ? "" : state.savedMovie.notFound,
        },
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
        `${movie.nameRU} ${movie.nameEN}`
          .toLowerCase()
          .includes(state.savedMovie.searchText.toLowerCase())
      );
      return {
        ...state,
        loading: false,
        savedMovie: {
          ...state.savedMovie,
          movies: moviesList,
          notFound: !moviesList.length ? infoMessages.notFound : "",
        },
      };

    case GET_SAVED_MOVIES:
      const saved = action.movies.filter((movie) => movie.owner === state.user._id);
      return {
        ...state,
        loading: false,
        savedMovie: {
          ...state.savedMovie,
          movies: saved,
          saved,
        },
      };

    case POST_TO_SAVED_MOVIES:
      const filtered = `${action.movie.nameRU} ${action.movie.nameEN}`
        .toLowerCase()
        .includes(state.savedMovie.searchText);
      return {
        ...state,
        loading: false,
        savedMovie: {
          ...state.savedMovie,

          movies: filtered
            ? [...state.savedMovie.movies, action.movie]
            : [...state.savedMovie.movies],

          saved: [...state.savedMovie.saved, action.movie],
          notFound: filtered ? "" : infoMessages.notFound,
        },
      };

    case DELETE_SAVED_MOVIE:
      const savedMovies = state.savedMovie.saved.filter(
        (movie) => movie.movieId !== action.movie.movieId
      );
      return {
        ...state,
        loading: false,
        savedMovie: {
          ...state.savedMovie,
          movies: savedMovies,
          saved: savedMovies,
        },
      };

    case REQUEST_SAVED_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        toolTip: {
          isOpen: true,
          success: false,
          message: infoMessages.requestMoviesFaild,
        },
      };

    case SAVED_MOVIES_SEARCH_TEXT:
      return {
        ...state,
        savedMovie: { ...state.savedMovie, searchText: action.text },
      };

    default:
      return state;
  }
};
