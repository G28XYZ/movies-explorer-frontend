import { useLocation } from "react-router-dom";
import { saveMovie, deleteMovie } from "../../services/actions/savedMovies";
import { useStore } from "../../services/StoreProvider";
import { moviesApiAddress } from "../../utils/constants";

function MoviesCard({ movie }) {
  const [state, dispatch] = useStore();
  const savedMovies = state.savedMovie.movies;

  const location = useLocation();
  const path = location.pathname;
  const onRouteSavedMovies = path === "/saved-movies";
  const imageUrl = movie.image.formats ? moviesApiAddress + movie.image.url : movie.image;
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  const movieSaved = savedMovies.find(
    (savedMovie) => savedMovie.movieId === movie.id || movie.movieId
  );

  const buttonClassName =
    (movieSaved && !onRouteSavedMovies && "card__favorite_active") ||
    (onRouteSavedMovies && "card__favorite_delete");

  function handleClickFavorite() {
    if (movieSaved || onRouteSavedMovies) {
      deleteMovie(dispatch, movieSaved._id);
    } else {
      saveMovie(dispatch, movie);
    }
  }

  return (
    <article className="card color_background">
      <div className="card__header">
        <div>
          <h3 className="card__title text_subtitle">{movie.nameRU}</h3>
          <p className="card__duration text color_text">{`${
            hours === 0 ? "" : hours + "ч"
          } ${minutes}м`}</p>
        </div>
        <button
          className={`card__favorite color_secondary link ${buttonClassName}`}
          onClick={handleClickFavorite}
        ></button>
      </div>
      <img className="card__image" src={imageUrl} alt={movie.nameRU} />
    </article>
  );
}

export default MoviesCard;
