import { useState, useEffect, useCallback } from "react";
import { useStore } from "../../services/StoreProvider";
import {
  THREE_COUNT_MOVIES_FOR_MORE_BUTTON,
  TWO_COUNT_MOVIES_FOR_MORE_BUTTON,
  SCREEN_WIDTH_480,
  SCREEN_WIDTH_768,
  INITIAL_COUNT_MOVIES_FOR_MOBILE,
  INITIAL_COUNT_MOVIES_FOR_MIDDLE,
  INITIAL_COUNT_MOVIES_FOR_DESKTOP,
  MAX_DURATION_SHORT_MOVIES,
} from "../../utils/constants";
import { cardListPT } from "../../utils/propTypes";
import MovieCard from "../MovieCard";
import Preloader from "../Preloader";

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

  const [countShowMore, setCountShowMore] = useState(THREE_COUNT_MOVIES_FOR_MORE_BUTTON);
  const [moviesList, setMoviesList] = useState(movies);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = useCallback(() => {
    setWidth(window.innerWidth);
    if (width <= SCREEN_WIDTH_480) {
      setCountShowMore(TWO_COUNT_MOVIES_FOR_MORE_BUTTON);
      return INITIAL_COUNT_MOVIES_FOR_MOBILE;
    }
    if (width <= SCREEN_WIDTH_768) {
      setCountShowMore(TWO_COUNT_MOVIES_FOR_MORE_BUTTON);
      return INITIAL_COUNT_MOVIES_FOR_MIDDLE;
    } else {
      setCountShowMore(THREE_COUNT_MOVIES_FOR_MORE_BUTTON);
      return INITIAL_COUNT_MOVIES_FOR_DESKTOP;
    }
  }, [width]);

  const filteredMovies = useCallback(() => {
    return movies.filter((movie) => movie.duration <= MAX_DURATION_SHORT_MOVIES);
  }, [movies]);

  useEffect(() => {
    if (movies.length && filterShortFilms) {
      setMoviesList(filteredMovies());
    }
  }, [filterShortFilms, filteredMovies, movies]);

  useEffect(() => {
    setTimeout(() => {
      if (!showedMovies) {
        handleClickMoreMovies(updateWidth());
      }
      window.addEventListener("resize", updateWidth);
    }, 100);
    return () => window.removeEventListener("resize", updateWidth);
  }, [showedMovies, dispatch, handleClickMoreMovies, updateWidth]);

  useEffect(() => {
    if (movies.length && filterShortFilms) {
      if (filteredMovies().length === 0) {
        isNotFound();
      }
    } else {
      setMoviesList(movies);
    }
  }, [
    filterShortFilms,
    filteredMovies,
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
              <MovieCard movie={movie} key={movie.id || movie._id} />
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

MoviesCardList.propTypes = cardListPT;

export default MoviesCardList;
