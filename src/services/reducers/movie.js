import {
  ADD_TO_SAVED_MOVIE,
  DELETE_SAVED_MOVIE,
  REQUEST_MOVIES_SUCCESS,
  REQUEST_MOVIES,
  REQUEST_MOVIES_FAILD,
  CHANGE_FILTER,
  SET_SEARCH_TEXT,
} from "../actions/movie";

export const movieReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        movie: { ...state.movie, filterShortFilms: action.checked },
      };

    case REQUEST_MOVIES:
      return { ...state, loading: true };

    case REQUEST_MOVIES_SUCCESS:
      const moviesList = action.moviesList.filter((movie) =>
        `${movie.nameRU} ${movie.nameEN}`.includes(state.movie.searchText)
      );
      return {
        ...state,
        loading: false,
        movie: { ...state.movie, moviesList },
      };

    case REQUEST_MOVIES_FAILD:
      return {
        ...state,
        loading: false,
      };

    case ADD_TO_SAVED_MOVIE:
      console.log(ADD_TO_SAVED_MOVIE);
      return {
        ...state,
        movie: {
          ...state.movie,
          savedMovies: [...state.movie.savedMovies, action.movie],
        },
      };

    case DELETE_SAVED_MOVIE:
      console.log(DELETE_SAVED_MOVIE);
      const savedMovies = state.movie.savedMovies.filter(
        (movie) => movie.id !== action.movie.id
      );
      return {
        ...state,
        movie: {
          ...state.movie,
          savedMovies,
        },
      };

    case SET_SEARCH_TEXT:
      return { ...state, movie: { ...state.movie, searchText: action.text } };

    default:
      return state;
  }
};
