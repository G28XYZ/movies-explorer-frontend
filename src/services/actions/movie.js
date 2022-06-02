import mainApi from "../../utils/api/mainApi";
import moviesApi from "../../utils/api/moviesApi";
import { moviesApiAddress } from "../../utils/constants";

export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";

export const REQUEST_MOVIES = "REQUEST_MOVIES";
export const GET_MOVIES = "GET_MOVIES";
export const REQUEST_MOVIES_FAILED = "REQUEST_MOVIES_FAILED";

export const GET_SAVED_MOVIES = "GET_SAVED_MOVIES";
export const POST_TO_SAVED_MOVIES = "POST_TO_SAVED_MOVIES";
export const DELETE_SAVED_MOVIE = "DELETE_SAVED_MOVIE";

export const ADD_SHOWED_MOVIES = "ADD_SHOWED_MOVIES";

export const CHANGE_FILTER = "CHANGE_FILTER";

export function getMovies(dispatch) {
  dispatch({ type: REQUEST_MOVIES });
  moviesApi
    .getMovies()
    .then((movies) => {
      dispatch({
        type: GET_MOVIES,
        moviesList: movies,
      });
    })
    .catch((err) => {
      dispatch({
        type: REQUEST_MOVIES_FAILED,
      });
    });
}

export function getSavedMovies(dispatch) {
  dispatch({ type: REQUEST_MOVIES });
  mainApi
    .getSavedMovies()
    .then((movies) => {
      dispatch({
        type: GET_SAVED_MOVIES,
        movies,
      });
    })
    .catch((err) => {
      dispatch({
        type: REQUEST_MOVIES_FAILED,
      });
    });
}

export function saveMovie(
  dispatch,
  {
    id,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
  }
) {
  const body = {
    movieId: id,
    country: country || "Unknown",
    director,
    duration,
    year,
    description,
    image: moviesApiAddress + image.url,
    trailerLink,
    thumbnail: moviesApiAddress + image.formats.thumbnail.url,
    nameRU,
    nameEN: nameEN || nameRU,
  };
  mainApi
    .saveMovie(body)
    .then((movie) => {
      dispatch({
        type: POST_TO_SAVED_MOVIES,
        movie,
      });
    })
    .catch((err) => {
      dispatch({
        type: REQUEST_MOVIES_FAILED,
      });
    });
}

export function deleteMovie(dispatch, id) {
  mainApi
    .deleteMovie(id)
    .then((movie) => {
      dispatch({
        type: DELETE_SAVED_MOVIE,
        movie,
      });
    })
    .catch((err) => {
      dispatch({
        type: REQUEST_MOVIES_FAILED,
      });
    });
}
