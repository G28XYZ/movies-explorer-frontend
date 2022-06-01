import {
  REQUEST_MOVIES_SUCCESS,
  ADD_FAVORITE_MOVIE,
  REQUEST_MOVIES,
  REQUEST_MOVIES_FAILD,
} from "../actions/movie";

export const movieReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return { ...state, loading: true };

    case REQUEST_MOVIES_SUCCESS:
      console.log(REQUEST_MOVIES_SUCCESS, action);
      return {
        ...state,
        loading: false,
        movie: { ...state.movie, moviesList: action.moviesList },
      };

    case REQUEST_MOVIES_FAILD:
      return {
        ...state,
        loading: false,
      };

    case ADD_FAVORITE_MOVIE:
      console.log(ADD_FAVORITE_MOVIE);
      return {
        ...state,
        movie: {
          ...state.movie,
          favoriteMovies: [
            ...state.movie.favoriteMovies,
            ...action.favoriteMovies,
          ],
        },
      };

    default:
      return state;
  }
};
