import MoviesCardList from "../MoviesCardList";
import SearchForm from "../SearchForm";

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}

export default Movies;
