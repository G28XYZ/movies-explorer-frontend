import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { ADD_SHOWED_MOVIES } from "../../services/actions/mainMovies";
import { useStore } from "../../services/StoreProvider";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader";

function MoviesCardList({ moviesList }) {
  const [state, dispatch] = useStore();
  const { loading } = state;
  const location = useLocation();
  const path = location.pathname;
  const { filterShortFilms, showedMovies, notFound } = state.mainMovie;

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
    if (!showedMovies) {
      dispatch({ type: ADD_SHOWED_MOVIES, count: updateWidth() });
    }
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [dispatch, showedMovies, updateWidth]);

  if (filterShortFilms) {
    moviesList = moviesList.filter((movie) => movie.duration <= 40);
  }

  function handleClickMoreMovies() {
    dispatch({ type: ADD_SHOWED_MOVIES, count: countShowMore });
  }

  return (
    <div className="cards">
      {loading ? (
        <Preloader />
      ) : (
        <>
          {path === "/movies" && <p className="cards__message text_subtitle">{notFound}</p>}
          <div className="cards__list">
            {moviesList.slice(0, showedMovies).map((movie) => (
              <MoviesCard movie={movie} key={movie.id || movie._id} />
            ))}
          </div>

          {showedMovies < moviesList.length && (
            <button className="cards__button text link" onClick={handleClickMoreMovies}>
              Ещё
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default MoviesCardList;
