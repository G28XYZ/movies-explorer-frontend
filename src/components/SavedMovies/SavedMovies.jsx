import MoviesCardList from "../MoviesCardList";

function SavedMovies({ moviesList }) {
  return (
    <main className="movies">
      <MoviesCardList moviesList={moviesList} loading={false} />
    </main>
  );
}

export default SavedMovies;
