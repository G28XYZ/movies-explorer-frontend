import { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader";

function MoviesCardList({ moviesList, loading }) {
  const [countMovies, setCountMovies] = useState(12);

  function handleClickMoreMovies() {
    setCountMovies(countMovies + 12);
  }

  return (
    <div className="cards">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className="cards__list">
            {moviesList.slice(0, countMovies).map((movie) => (
              <MoviesCard movie={movie} key={movie.id} />
            ))}
          </div>

          {countMovies < moviesList.length && (
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
