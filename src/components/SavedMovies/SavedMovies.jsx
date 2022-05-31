import MoviesCardList from "../MoviesCardList";
import SearchForm from "../SearchForm";

function SavedMovies({ moviesList }) {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList moviesList={moviesList} loading={false} />
    </main>
  );
}

export default SavedMovies;
