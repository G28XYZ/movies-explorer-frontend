function MoviesCard({ movie }) {
  return (
    <div className="card color_background">
      <h3 className="card__title">{movie.nameRU}</h3>
    </div>
  );
}

export default MoviesCard;
