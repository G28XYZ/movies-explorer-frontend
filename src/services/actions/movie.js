import moviesApi from "../../utils/api/moviesApi";

export const ADD_TO_SAVED_MOVIE = "ADD_TO_SAVED_MOVIE";
export const DELETE_SAVED_MOVIE = "DELETE_SAVED_MOVIE";

export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";

export const REQUEST_MOVIES = "REQUEST_MOVIES";
export const REQUEST_MOVIES_SUCCESS = "REQUEST_MOVIES_SUCCESS";
export const REQUEST_MOVIES_FAILED = "REQUEST_MOVIES_FAILED";

export const ADD_SHOWED_MOVIES = "ADD_SHOWED_MOVIES";

export const CHANGE_FILTER = "CHANGE_FILTER";

export function getMovies(dispatch) {
  dispatch({ type: REQUEST_MOVIES });
  moviesApi
    .getMovies()
    .then((movies) => {
      dispatch({
        type: REQUEST_MOVIES_SUCCESS,
        moviesList: movies,
      });
    })
    .catch((err) => {
      dispatch({
        type: REQUEST_MOVIES_FAILED,
      });
    });
}
