import { useState, useEffect, useCallback } from "react";
import { useStore } from "../../services/StoreProvider";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader";
import PropTypes from "prop-types";

function MoviesCardList({
  movies,
  handleClickMoreMovies,
  notFound,
  showedMovies,
  filterShortFilms,
  isNotFound,
}) {
  const [state, dispatch] = useStore();
  const { loading } = state;

  const [countShowMore, setCountShowMore] = useState(3);
  const [moviesList, setMoviesList] = useState(movies);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = useCallback(() => {
    setWidth(window.innerWidth);
    if (width <= 480) {
      setCountShowMore(2);
      return 5;
    }
    if (width <= 768) {
      setCountShowMore(2);
      return 8;
    } else {
      setCountShowMore(3);
      return 12;
    }
  }, [width]);

  useEffect(() => {
    if (!showedMovies) {
      handleClickMoreMovies(updateWidth());
    }
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [showedMovies, dispatch, handleClickMoreMovies, updateWidth]);

  useEffect(() => {
    if (movies.length && filterShortFilms) {
      setMoviesList(movies.filter((movie) => movie.duration <= 40));
      if (!moviesList.length) {
        isNotFound();
      }
    } else {
      setMoviesList(movies);
    }
  }, [
    filterShortFilms,
    isNotFound,
    movies,
    movies.length,
    moviesList.length,
    setMoviesList,
  ]);

  function handleClick() {
    handleClickMoreMovies(countShowMore);
  }

  return (
    <div className="cards">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <p className="cards__message text_subtitle">{notFound}</p>
          <div className="cards__list">
            {moviesList.slice(0, showedMovies).map((movie) => (
              <MoviesCard movie={movie} key={movie.id || movie._id} />
            ))}
          </div>

          {showedMovies < moviesList.length && (
            <button className="cards__button text link" onClick={handleClick}>
              Ещё
            </button>
          )}
        </>
      )}
    </div>
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

export const moviesPropType = PropTypes.shape({
  _id: PropTypes.string,
  country: PropTypes.string,
  created_at: PropTypes.string,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  id: PropTypes.number,
  image: imageShape.isRequired,
  nameEN: PropTypes.string.isRequired,
  nameRU: PropTypes.string.isRequired,
  trailerLink: PropTypes.string.isRequired,
  updated_at: PropTypes.string,
  year: PropTypes.string.isRequired,
});

MoviesCardList.propTypes = {
  movies: PropTypes.array,
  handleClickMoreMovies: PropTypes.func.isRequired,
  notFound: PropTypes.string.isRequired,
  showedMovies: PropTypes.number.isRequired,
  filterShortFilms: PropTypes.bool.isRequired,
  isNotFound: PropTypes.func.isRequired,
};

export default MoviesCardList;
