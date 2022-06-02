import { useState, useEffect, useCallback } from "react";
import { useStore } from "../../services/StoreProvider";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader";

function MoviesCardList({
  movies,
  handleClickMoreMovies,
  notFound,
  countShowedMovies,
  filterShortFilms,
}) {
  const [state, dispatch] = useStore();
  const { loading } = state;

  const [countShowMore, setCountShowMore] = useState(3);
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
    if (!countShowedMovies) {
      handleClickMoreMovies(updateWidth());
    }
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [countShowedMovies, dispatch, handleClickMoreMovies, updateWidth]);

  if (filterShortFilms) {
    movies = movies.filter((movie) => movie.duration <= 40);
  }

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
            {movies.slice(0, countShowedMovies).map((movie) => (
              <MoviesCard movie={movie} key={movie.id || movie._id} />
            ))}
          </div>

          {countShowedMovies < movies.length && (
            <button className="cards__button text link" onClick={handleClick}>
              Ещё
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default MoviesCardList;
