import { useEffect, useState } from "react";
import api from "../../utils/api";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  const [moviesList, setMoviesList] = useState([]);
  const [countMovies, setCountMovies] = useState(12);

  useEffect(() => {
    api
      .getMovies()
      .then((movies) => {
        setMoviesList(movies);
      })
      .catch(console.log);
  }, []);

  function handleClickMoreMovies() {
    setCountMovies(countMovies + 12);
  }

  return (
    <section className="cards">
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
    </section>
  );
}

export default MoviesCardList;
