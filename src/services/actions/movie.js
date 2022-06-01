import api from "../../utils/api";

export const ADD_TO_SAVED_MOVIE = "ADD_TO_SAVED_MOVIE";
export const DELETE_SAVED_MOVIE = "DELETE_SAVED_MOVIE";

export const REQUEST_MOVIES = "REQUEST_MOVIES";
export const REQUEST_MOVIES_SUCCESS = "REQUEST_MOVIES_SUCCESS";
export const REQUEST_MOVIES_FAILD = "REQUEST_MOVIES_SUCCESS";

export const CHANGE_FILTER = "CHANGE_FILTER";

export function getMovies(dispatch) {
  dispatch({ type: REQUEST_MOVIES });
  api
    .getMovies()
    .then((movies) => {
      dispatch({
        type: REQUEST_MOVIES_SUCCESS,
        moviesList: movies,
      });
    })
    .catch((err) => {
      dispatch({
        type: REQUEST_MOVIES_FAILD,
      });
    });
}
