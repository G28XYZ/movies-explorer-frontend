import { useLocation } from "react-router-dom";
import { saveMovie, deleteMovie } from "../../services/actions/savedMovies";
import { useStore } from "../../services/StoreProvider";
import { moviesApiAddress } from "../../utils/constants";
import PropTypes from "prop-types";

function MoviesCard({ movie }) {
  const [state, dispatch] = useStore();
  const location = useLocation();
  const path = location.pathname;

  const savedMovies = state.savedMovie.saved;
  const movieSaved = savedMovies.find(
    (savedMovie) => savedMovie.movieId === movie.id || movie.movieId
  );

  const onRouteSavedMovies = path === "/saved-movies";

  const imageUrl = movie.image.formats
    ? moviesApiAddress + movie.image.url
    : movie.image;
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  const buttonClassName =
    (movieSaved && !onRouteSavedMovies && "card__favorite_active") ||
    (onRouteSavedMovies && "card__favorite_delete");

  function handleClickFavorite() {
    console.log(state);
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

const imageShape = PropTypes.shape({
  alternativeText: PropTypes.string,
  caption: PropTypes.string,
  created_at: PropTypes.string,
  ext: PropTypes.string,
  formats: PropTypes.shape({
    thumbnail: PropTypes.shape({
      ext: PropTypes.string,
      hash: PropTypes.string,
      height: PropTypes.number,
      mime: PropTypes.string,
      path: PropTypes.object && PropTypes.string,
      size: PropTypes.number,
      url: PropTypes.string,
      width: PropTypes.number,
    }),
  }),
  hash: PropTypes.string,
  height: PropTypes.number,
  id: PropTypes.number,
  mime: PropTypes.string,
  name: PropTypes.string,
  previewUrl: PropTypes.object && PropTypes.string,
  provider: PropTypes.string,
  provider_metadata: PropTypes.object && PropTypes.string,
  size: PropTypes.number,
  updated_at: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.number,
});

MoviesCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string,
    country: PropTypes.string.isRequired,
    created_at: PropTypes.string,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    id: PropTypes.number,
    image: imageShape.isRequired && PropTypes.string,
    nameEN: PropTypes.string.isRequired,
    nameRU: PropTypes.string.isRequired,
    trailerLink: PropTypes.string.isRequired,
    updated_at: PropTypes.string,
    year: PropTypes.string.isRequired,
  }),
};

export default MoviesCard;
