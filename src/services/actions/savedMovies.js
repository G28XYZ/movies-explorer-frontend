import mainApi from "../../utils/api/mainApi";
import { moviesApiAddress } from "../../utils/constants";

export const SAVED_MOVIES_SEARCH_TEXT = "SAVED_MOVIES_SEARCH_TEXT";
export const SEARCH_SAVED_MOVIES = "SEARCH_SAVED_MOVIES";
export const REQUEST_SAVED_MOVIES = "REQUEST_SAVED_MOVIES";
export const GET_SAVED_MOVIES = "GET_SAVED_MOVIES";
export const REQUEST_SAVED_MOVIES_FAILED = "REQUEST_SAVED_MOVIES_FAILED";
export const POST_TO_SAVED_MOVIES = "POST_TO_SAVED_MOVIES";
export const DELETE_SAVED_MOVIE = "DELETE_SAVED_MOVIE";
export const ADD_SHOWED_SAVED_MOVIES = "ADD_SHOWED_SAVED_MOVIES";
export const SAVED_MOVIES_CHANGE_FILTER = "SAVED_MOVIES_CHANGE_FILTER";
export const SAVED_MOVIES_NOT_FOUND = "SAVED_MOVIES_NOT_FOUND";
export const RESET_STATE_SAVED_MOVIES = "RESET_STATE_SAVED_MOVIES";

export function getSavedMovies(dispatch) {
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
        type: REQUEST_SAVED_MOVIES_FAILED,
      });
    });
}

export function saveMovie(
  dispatch,
  { id, country, director, duration, year, description, image, trailerLink, nameRU, nameEN }
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
        type: REQUEST_SAVED_MOVIES_FAILED,
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
        type: REQUEST_SAVED_MOVIES_FAILED,
      });
    });
}
