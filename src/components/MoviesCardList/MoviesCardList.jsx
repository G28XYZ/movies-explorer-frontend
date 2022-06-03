import { useState, useEffect, useCallback } from "react";
import { useStore } from "../../services/StoreProvider";
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

  const filteredMovies = useCallback(() => {
    return movies.filter((movie) => movie.duration <= 40);
  },[movies])

  useEffect(() => {
    if (movies.length && filterShortFilms) {
      setMoviesList(filteredMovies());
    }
  },[filterShortFilms, filteredMovies, movies])

  useEffect(() => {
    if (!showedMovies) {
      handleClickMoreMovies(updateWidth());
    }
    window.addEventListener("resize", updateWidth);
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
  }, [filterShortFilms, filteredMovies, isNotFound, movies, movies.length, moviesList.length, setMoviesList]);

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

MoviesCardList.propTypes = cardListPT

export default MoviesCardList;
