import { useLocation } from "react-router-dom";
import { moviesApiAddress } from "../../utils/constants";

function MoviesCard({ movie }) {
  const location = useLocation();
  const path = location.pathname;
  const isSavedMovies = path === "/saved-movies";
  const imageUrl = movie.image.formats.thumbnail.url;
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  function handleClickFavorite(e) {
    const button = e.target;
    if (button.classList.contains("card__favorite_active")) {
      button.classList.remove("card__favorite_active");
    } else {
      button.classList.add("card__favorite_active");
    }
  }

  return (
    <article className="card color_background">
      <div className="card__header">
        <div>
          <h3 className="card__title text_subtitle">{movie.nameRU}</h3>
          <p className="card__duration text color_text">{`${hours}ч ${minutes}м`}</p>
        </div>
        <button
          className={`card__favorite color_secondary link ${
            isSavedMovies && "card__favorite_delete"
          }`}
          onClick={handleClickFavorite}
        ></button>
      </div>
      <img className="card__image" src={`${moviesApiAddress}${imageUrl}`} alt={movie.nameRU} />
    </article>
  );
}

export default MoviesCard;
