import MoviesCardList from "../MoviesCardList";
import SearchForm from "../SearchForm";

function Movies({ moviesList, loading }) {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList moviesList={moviesList} loading={loading} />
    </main>
  );
}

export default Movies;
