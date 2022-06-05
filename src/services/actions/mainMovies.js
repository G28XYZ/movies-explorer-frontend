import moviesApi from "../../utils/api/moviesApi";

export const MOVIES_SEARCH_TEXT    = "SET_SEARCH_TEXT";
export const REQUEST_MOVIES        = "REQUEST_MOVIES";
export const SEARCH_MOVIES         = "SEARCH_MOVIES";
export const REQUEST_MOVIES_FAILED = "REQUEST_MOVIES_FAILED";
export const ADD_SHOWED_MOVIES     = "ADD_SHOWED_MOVIES";
export const MOVIES_CHANGE_FILTER  = "MOVIES_CHANGE_FILTER";
export const MOVIES_NOT_FOUND      = "MOVIES_NOT_FOUND";
export const SET_STATE_MAIN_MOVIES = "SET_STATE_MAIN_MOVIES";

export function searchMovies(dispatch) {
  dispatch({ type: REQUEST_MOVIES });
  moviesApi
    .getMovies()
    .then((movies) => {
      dispatch({
        type: SEARCH_MOVIES,
        movies,
      });
    })
    .catch((err) => {
      dispatch({
        type: REQUEST_MOVIES_FAILED,
      });
    });
}
