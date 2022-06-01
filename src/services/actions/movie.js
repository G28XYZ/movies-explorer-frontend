import api from "../../utils/api";

export const ADD_FAVORITE_MOVIE = "ADD_FAVORITE_MOVIE";

export const REQUEST_MOVIES = "REQUEST_MOVIES";
export const REQUEST_MOVIES_SUCCESS = "REQUEST_MOVIES_SUCCESS";
export const REQUEST_MOVIES_FAILD = "REQUEST_MOVIES_SUCCESS";

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
